/**
 * ÉLÉGANCE ATELIER - Navigation Bar & Top Notice Bar Component
 * Roles: agency-ui-designer & agency-frontend-developer
 */

import { store } from "../state/store.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderNoticeBar() {
  const notices = store.getNotices();
  if (!notices.active || !notices.text) return "";

  return `
    <div class="notice-bar">
      <div class="container notice-bar-inner">
        <div class="notice-marquee">
          <div class="notice-content">
            ${escapeHTML(notices.text)}
            ${notices.link ? `<a href="${escapeHTML(notices.link)}">${escapeHTML(notices.linkText || "Discover")} &rarr;</a>` : ""}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderNavbar(currentRoute = "") {
  const settings = store.getSettings();
  const categories = store.getCategories();
  const cartCount = store.getCartCount();
  const wishlistCount = store.getWishlist().length;
  const isAdmin = store.isAdminAuthenticated();

  return `
    ${renderNoticeBar()}
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <div class="header-left">
          <button class="mobile-toggle" id="btn-mobile-menu" aria-label="Toggle navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          
          <a href="#home" class="brand-logo" id="brand-logo-link" title="${escapeHTML(settings.storeName || "Brother's Fashion")}">
            <div class="brand-crest" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="40" height="40" rx="8" stroke="url(#goldGradBrand)" stroke-width="1.75" fill="rgba(197, 168, 128, 0.08)"/>
                <circle cx="22" cy="22" r="15" stroke="url(#goldGradBrand)" stroke-width="0.75" stroke-dasharray="2 3"/>
                <path d="M15 13H24.5C27.5 13 29.5 14.5 29.5 17.5C29.5 19.8 28 21.2 26 21.8C28.5 22.5 30.5 24.2 30.5 27.5C30.5 30.8 28 32.5 24.5 32.5H15V13ZM19.2 16.8V21.2H24C25.5 21.2 26.2 20.3 26.2 19C26.2 17.7 25.5 16.8 24 16.8H19.2ZM19.2 24.5V28.8H24.5C26.2 28.8 27 27.8 27 26.6C27 25.4 26.2 24.5 24.5 24.5H19.2Z" fill="url(#goldGradBrand)"/>
                <defs>
                  <linearGradient id="goldGradBrand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F2E3C6"/>
                    <stop offset="50%" stop-color="#C5A880"/>
                    <stop offset="100%" stop-color="#8F6B38"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text-block">
              <div class="brand-title">
                <span class="brand-word-primary">${escapeHTML(settings.storeName ? settings.storeName.split(" ")[0] : "BROTHER'S")}</span>
                <span class="brand-word-secondary">${escapeHTML(settings.storeName ? settings.storeName.split(" ").slice(1).join(" ") : "FASHION")}</span>
              </div>
              <div class="brand-subtitle">
                <span class="brand-sub-location">RAJSHAHI SADAR</span>
                <span class="brand-sub-dot">✦</span>
                <span class="brand-sub-est">ATELIER</span>
              </div>
            </div>
          </a>
        </div>

        <nav class="nav-container" id="nav-container">
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link ${currentRoute === "home" || currentRoute === "" ? "active" : ""}">Home</a></li>
            <li><a href="#catalog?category=all" class="nav-link ${currentRoute === "catalog" ? "active" : ""}">All Collections</a></li>
            ${categories.slice(0, 4).map(cat => `
              <li><a href="#catalog?category=${encodeURIComponent(cat.slug || cat.name)}" class="nav-link">${escapeHTML(cat.name)}</a></li>
            `).join("")}
            <li><a href="#offers" class="nav-link nav-sale ${currentRoute === "offers" ? "active" : ""}">Privilege Sale</a></li>
            <li><a href="#about" class="nav-link ${currentRoute === "about" ? "active" : ""}">Atelier Story</a></li>
            <li><a href="#contact" class="nav-link ${currentRoute === "contact" ? "active" : ""}">Concierge</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <!-- Autocomplete Search -->
          <div class="search-box">
            <div class="search-input-wrap">
              <span class="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input type="text" class="search-input" id="global-search-input" placeholder="Search luxury pieces..." autocomplete="off">
            </div>
            <div class="search-dropdown" id="search-dropdown"></div>
          </div>

          <!-- Wishlist Button -->
          <button class="action-btn" id="btn-open-wishlist" title="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${wishlistCount > 0 ? `<span class="action-badge">${wishlistCount}</span>` : ""}
          </button>

          <!-- Cart Drawer Trigger -->
          <button class="action-btn" id="btn-open-cart" title="Shopping Bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            ${cartCount > 0 ? `<span class="action-badge" id="nav-cart-badge">${cartCount}</span>` : ""}
          </button>
        </div>
      </div>
    </header>
  `;
}

export function initNavbarEvents() {
  const searchInput = document.getElementById("global-search-input");
  const searchDropdown = document.getElementById("search-dropdown");

  if (searchInput && searchDropdown) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchDropdown.classList.remove("active");
        searchDropdown.innerHTML = "";
        return;
      }

      const products = store.getProducts().filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(query)))
      );

      if (products.length === 0) {
        searchDropdown.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.84rem;">No matching garments found.</div>`;
      } else {
        const settings = store.getSettings();
        searchDropdown.innerHTML = products.slice(0, 5).map(p => `
          <a href="#product?id=${p.id}" class="search-item" onclick="document.getElementById('search-dropdown').classList.remove('active');">
            <img src="${escapeHTML(p.images[0])}" alt="${escapeHTML(p.title)}" loading="lazy">
            <div class="search-item-info">
              <h5>${escapeHTML(p.title)}</h5>
              <span>${formatCurrency(p.price, settings.currency)}</span>
            </div>
          </a>
        `).join("") + `
          <div style="padding: 0.6rem; text-align: center; background: var(--bg-secondary); font-size: 0.76rem;">
            <a href="#catalog?search=${encodeURIComponent(query)}" style="color: var(--gold-dark); font-weight: 700;">View all ${products.length} results &rarr;</a>
          </div>
        `;
      }
      searchDropdown.classList.add("active");
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove("active");
      }
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById("btn-mobile-menu");
  const navContainer = document.getElementById("nav-container");
  if (mobileToggle && navContainer) {
    mobileToggle.addEventListener("click", () => {
      navContainer.classList.toggle("mobile-open");
    });
  }

  // Cart button trigger
  const cartBtn = document.getElementById("btn-open-cart");
  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      const cartOverlay = document.getElementById("cart-drawer-overlay");
      if (cartOverlay) cartOverlay.classList.add("active");
    });
  }

  // Wishlist button trigger
  const wishlistBtn = document.getElementById("btn-open-wishlist");
  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      window.location.hash = "#catalog?wishlist=true";
    });
  }
}
