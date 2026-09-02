/**
 * ÉLÉGANCE ATELIER - Main Application Bootstrap & Client Router
 * Roles: agency-agents-orchestrator & agency-frontend-developer
 */

import { store } from "./state/store.js";
import { renderNavbar, initNavbarEvents } from "./components/navbar.js";
import { renderHeroSlider, initHeroSlider } from "./components/hero.js";
import { renderHomePage, renderOffersPage, renderAboutPage, renderContactPage, renderPolicyPage, renderFaqPage, renderFooter, initStaticPagesEvents } from "./components/static-pages.js";
import { renderCatalogView, initCatalogEvents } from "./components/catalog-view.js";
import { renderProductDetail, initProductDetailEvents } from "./components/product-detail.js";
import { renderCartDrawer, initCartDrawerEvents, refreshCartDrawer } from "./components/cart-drawer.js";
import { renderCheckoutModal, initCheckoutModalEvents } from "./components/checkout-modal.js";
import { renderOrderTracking, initOrderTrackingEvents } from "./components/order-tracking.js";
import { renderAdminLayout, renderDashboardOverview, initAdminDashboardEvents } from "./components/admin-dashboard.js";
import { renderAdminProducts, initAdminProductsEvents } from "./components/admin-products.js";
import { renderAdminOffers, initAdminOffersEvents } from "./components/admin-offers.js";
import { renderAdminOrders, initAdminOrdersEvents } from "./components/admin-orders.js";
import { renderAdminSettings, initAdminSettingsEvents } from "./components/admin-settings.js";
import { showToast } from "./utils/notify.js";
import { injectThemeToggle } from "./components/theme-toggle.js";

// Parse URL hash routes like #catalog?category=Women or #product?id=prod-101 or #admin?tab=products
function parseRoute() {
  const hash = window.location.hash.slice(1) || "home";
  const [pathPart, queryPart] = hash.split("?");
  const params = {};

  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
  }

  return {
    path: pathPart.toLowerCase(),
    params
  };
}

// Router & Master View Dispatcher
function navigate() {
  const { path, params } = parseRoute();
  const appContainer = document.getElementById("app");
  if (!appContainer) return;

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: "smooth" });

  // 1. Admin Portal Routes
  if (path === "admin") {
    const tab = params.tab || "dashboard";
    let adminTabHtml = "";

    if (tab === "products") {
      adminTabHtml = renderAdminProducts(params.category || "all", params.search || "");
    } else if (tab === "offers") {
      adminTabHtml = renderAdminOffers();
    } else if (tab === "orders") {
      adminTabHtml = renderAdminOrders(params.status || "all", params.search || "");
    } else if (tab === "settings") {
      adminTabHtml = renderAdminSettings();
    } else {
      adminTabHtml = renderDashboardOverview();
    }

    appContainer.innerHTML = renderAdminLayout(tab, adminTabHtml);

    // Initialize Admin Event Listeners
    initAdminDashboardEvents();
    if (tab === "products") initAdminProductsEvents();
    else if (tab === "offers") initAdminOffersEvents();
    else if (tab === "orders") initAdminOrdersEvents();
    else if (tab === "settings") initAdminSettingsEvents();
    return;
  }

  // 2. Customer Storefront Routes
  let mainContentHtml = "";

  if (path === "home" || path === "") {
    mainContentHtml = renderHomePage();
  } else if (path === "catalog") {
    mainContentHtml = renderCatalogView(params);
  } else if (path === "product") {
    mainContentHtml = renderProductDetail(params.id);
  } else if (path === "offers") {
    mainContentHtml = renderOffersPage();
  } else if (path === "about") {
    mainContentHtml = renderAboutPage();
  } else if (path === "contact") {
    mainContentHtml = renderContactPage();
  } else if (path === "policy") {
    mainContentHtml = renderPolicyPage(params.type || "shipping");
  } else if (path === "faqs") {
    mainContentHtml = renderFaqPage();
  } else if (path === "tracking") {
    mainContentHtml = renderOrderTracking(params.id || "");
  } else {
    mainContentHtml = `
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">404</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">The luxury page you requested cannot be found.</p>
        <a href="#home" class="btn btn-gold">Return to Maison Home</a>
      </div>
    `;
  }

  // Render Full Storefront Shell
  appContainer.innerHTML = `
    ${renderNavbar(path)}
    <main id="storefront-main-content">
      ${mainContentHtml}
    </main>
    ${renderFooter()}

    <!-- Slide-out Cart Drawer Container -->
    <div id="cart-drawer-container">
      ${renderCartDrawer()}
    </div>

    <!-- Checkout Modal Container -->
    <div id="checkout-modal-container">
      ${renderCheckoutModal()}
    </div>
  `;

  // Initialize Storefront Event Listeners
  initNavbarEvents();
  initCartDrawerEvents();
  initCheckoutModalEvents();

  if (path === "home" || path === "") {
    initHeroSlider();
    initStaticPagesEvents();
  } else if (path === "catalog") {
    initCatalogEvents();
  } else if (path === "product") {
    initProductDetailEvents(params.id);
  } else if (path === "tracking") {
    initOrderTrackingEvents();
  } else {
    initStaticPagesEvents();
  }
}

// Global Event Delegation (Wishlist, Quick Add, etc.)
function initGlobalEventListeners() {
  document.addEventListener("click", (e) => {
    // Quick Add to Bag on product cards
    const quickAddBtn = e.target.closest("[data-quick-add-id]");
    if (quickAddBtn) {
      const prodId = quickAddBtn.getAttribute("data-quick-add-id");
      const prod = store.getProductById(prodId);
      if (prod) {
        store.addToCart({
          productId: prod.id,
          title: prod.title,
          price: prod.price,
          originalPrice: prod.originalPrice,
          image: prod.images[0],
          size: prod.sizes && prod.sizes.length > 0 ? prod.sizes[0] : "Standard",
          color: prod.colors && prod.colors.length > 0 ? prod.colors[0].name : "Standard",
          quantity: 1
        });
        showToast(`Added ${prod.title} to your bag`, "success");
        const overlay = document.getElementById("cart-drawer-overlay");
        if (overlay) overlay.classList.add("active");
        refreshCartDrawer();
      }
    }

    // Wishlist Heart Toggle on product cards
    const wishlistBtn = e.target.closest("[data-wishlist-id]");
    if (wishlistBtn) {
      e.preventDefault();
      e.stopPropagation();
      const prodId = wishlistBtn.getAttribute("data-wishlist-id");
      const added = store.toggleWishlist(prodId);
      wishlistBtn.classList.toggle("active", added);
      const svg = wishlistBtn.querySelector("svg");
      if (svg) svg.setAttribute("fill", added ? "currentColor" : "none");
      showToast(added ? "Added to your Private Wishlist" : "Removed from Wishlist", "info");
    }
  });

  // State Subscriptions for Real-time Reactive Sync
  store.subscribe("cart:updated", () => {
    refreshCartDrawer();
  });

  store.subscribe("wishlist:updated", (wishlist) => {
    const btn = document.getElementById("btn-open-wishlist");
    if (btn) {
      const existingBadge = btn.querySelector(".action-badge");
      if (wishlist.length > 0) {
        if (existingBadge) existingBadge.textContent = wishlist.length;
        else btn.innerHTML += `<span class="action-badge">${wishlist.length}</span>`;
      } else if (existingBadge) {
        existingBadge.remove();
      }
    }
  });

  store.subscribe("products:updated", () => {
    const { path } = parseRoute();
    if (path === "catalog" || path === "home" || path === "admin") {
      navigate();
    }
  });

  store.subscribe("settings:updated", () => {
    navigate();
  });

  store.subscribe("notices:updated", () => {
    navigate();
  });

  store.subscribe("admin:auth_changed", () => {
    navigate();
  });
}

export { navigate };

// App Initialization
window.addEventListener("DOMContentLoaded", () => {
  injectThemeToggle();
  initGlobalEventListeners();
  navigate();
});

window.addEventListener("hashchange", () => {
  navigate();
});

