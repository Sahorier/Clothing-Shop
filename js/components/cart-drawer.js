/**
 * Elegant Fashion Rajshahi - Slide-Over Cart Drawer Component
 * Roles: agency-frontend-developer & agency-ux-architect
 */

import { store } from "../state/store.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

export function renderCartDrawer() {
  const cart = store.getCart();
  const settings = store.getSettings();
  const subtotal = store.getCartSubtotal();
  const freeThreshold = settings.freeShippingThreshold || 2000;
  const freeProgress = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  const diffToFree = Math.max(0, freeThreshold - subtotal);

  let discountAmount = 0;
  if (store.appliedCoupon) {
    if (store.appliedCoupon.discountType === "percentage") {
      discountAmount = (subtotal * store.appliedCoupon.discountValue) / 100;
    } else {
      discountAmount = Math.min(store.appliedCoupon.discountValue, subtotal);
    }
  }

  const defaultShippingFee = (subtotal === 0 || subtotal >= freeThreshold) ? 0 : (settings.insideRajshahiFee || 80);
  const tax = (subtotal - discountAmount) * (settings.taxRate || 0.05);
  const total = Math.max(0, subtotal - discountAmount + defaultShippingFee + tax);

  return `
    <div class="cart-drawer-overlay" id="cart-drawer-overlay">
      <div class="cart-drawer" id="cart-drawer">
        <!-- Header -->
        <div class="cart-header">
          <h3 class="cart-title">Shopping Bag (${store.getCartCount()})</h3>
          <button class="cart-close-btn" id="btn-close-cart" aria-label="Close bag">&times;</button>
        </div>

        <!-- Free Shipping Meter -->
        <div class="shipping-meter">
          <div class="shipping-meter-text">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>
              ${diffToFree > 0
                ? `Add <strong>${formatCurrency(diffToFree, settings.currency)}</strong> more for Free Delivery`
                : `<strong style="color: var(--color-success);">✨ You unlocked Free Delivery!</strong>`}
            </span>
          </div>
          <div class="shipping-meter-bar">
            <div class="shipping-meter-fill" style="width: ${freeProgress}%;"></div>
          </div>
        </div>

        <!-- Cart Items List -->
        <div class="cart-items-wrap">
          ${cart.length === 0 ? `
            <div class="cart-empty-state">
              <span class="cart-empty-icon">🛍️</span>
              <h4>Your Shopping Bag is Empty</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary);">Explore our T-Shirts, Shirts, Pants, and Custom Print collections.</p>
              <button class="btn btn-gold btn-sm" onclick="document.getElementById('cart-drawer-overlay').classList.remove('active'); window.location.hash='#catalog';">Shop Collections</button>
            </div>
          ` : cart.map((item, idx) => `
            <div class="cart-item">
              <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" class="cart-item-img">
              <div class="cart-item-details">
                <h5 class="cart-item-title">${escapeHTML(item.title)}</h5>
                <div class="cart-item-meta">
                  Size: <strong>${escapeHTML(item.size)}</strong> | Color: <strong>${escapeHTML(item.color)}</strong>
                  ${item.customDesignInfo ? `<div style="color: var(--gold-dark); font-size: 0.72rem; margin-top: 2px;">🎨 ${escapeHTML(item.customDesignInfo)}</div>` : ""}
                </div>
                <div class="cart-item-price">${formatCurrency(item.price, settings.currency)}</div>
                
                <div class="cart-item-actions">
                  <div class="cart-qty-ctrls">
                    <button class="cart-qty-btn btn-cart-minus" data-index="${idx}">-</button>
                    <span class="cart-qty-val">${item.quantity}</span>
                    <button class="cart-qty-btn btn-cart-plus" data-index="${idx}">+</button>
                  </div>
                  <button class="cart-item-remove btn-cart-remove" data-index="${idx}">Remove</button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Cart Footer -->
        ${cart.length > 0 ? `
          <div class="cart-footer">
            <!-- Promo Code Input Form -->
            <form class="promo-form" id="cart-promo-form">
              <input type="text" class="promo-input" id="cart-coupon-input" placeholder="Promo code (e.g. BROTHERS10)" value="${store.appliedCoupon ? escapeHTML(store.appliedCoupon.code) : ""}">
              <button type="submit" class="promo-btn">${store.appliedCoupon ? "Applied" : "Apply"}</button>
            </form>

            <div class="cart-summary-row">
              <span>Subtotal</span>
              <span>${formatCurrency(subtotal, settings.currency)}</span>
            </div>

            ${discountAmount > 0 ? `
              <div class="cart-summary-row" style="color: var(--color-danger);">
                <span>Discount (${store.appliedCoupon.code})</span>
                <span>-${formatCurrency(discountAmount, settings.currency)}</span>
              </div>
            ` : ""}

            <div class="cart-summary-row">
              <span>Estimated Delivery</span>
              <span>${defaultShippingFee === 0 ? "Free" : `${formatCurrency(defaultShippingFee, settings.currency)} (Rajshahi: ৳80 / Outside: ৳120)`}</span>
            </div>

            <div class="cart-summary-total">
              <span>Estimated Total</span>
              <span>${formatCurrency(total, settings.currency)}</span>
            </div>

            <button class="btn btn-gold btn-block btn-lg" id="btn-proceed-checkout" style="margin-top: 1.25rem;">
              Proceed to Checkout (COD or Pre-Pay) &rarr;
            </button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

export function initCartDrawerEvents() {
  const overlay = document.getElementById("cart-drawer-overlay");
  const closeBtn = document.getElementById("btn-close-cart");

  if (overlay && closeBtn) {
    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("active");
    });
  }

  // Cart item actions
  document.querySelectorAll(".btn-cart-minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const cart = store.getCart();
      if (cart[idx]) {
        store.updateCartQuantity(idx, cart[idx].quantity - 1);
        refreshCartDrawer();
      }
    });
  });

  document.querySelectorAll(".btn-cart-plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const cart = store.getCart();
      if (cart[idx]) {
        store.updateCartQuantity(idx, cart[idx].quantity + 1);
        refreshCartDrawer();
      }
    });
  });

  document.querySelectorAll(".btn-cart-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      store.removeFromCart(idx);
      refreshCartDrawer();
      showToast("Item removed from your bag", "info");
    });
  });

  // Promo Coupon Form
  const promoForm = document.getElementById("cart-promo-form");
  if (promoForm) {
    promoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const codeInput = document.getElementById("cart-coupon-input");
      const val = codeInput ? codeInput.value.trim() : "";
      if (!val) {
        store.appliedCoupon = null;
        refreshCartDrawer();
        return;
      }

      const res = store.validateCoupon(val, store.getCartSubtotal());
      if (res.valid) {
        store.appliedCoupon = res.coupon;
        showToast(res.message, "success");
      } else {
        showToast(res.message, "error");
      }
      refreshCartDrawer();
    });
  }

  // Checkout trigger
  const checkoutBtn = document.getElementById("btn-proceed-checkout");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      window.openCheckoutModal();
    });
  }
}

export function refreshCartDrawer() {
  const container = document.getElementById("cart-drawer-container");
  if (container) {
    const wasActive = document.getElementById("cart-drawer-overlay")?.classList.contains("active");
    container.innerHTML = renderCartDrawer();
    if (wasActive) {
      document.getElementById("cart-drawer-overlay")?.classList.add("active");
    }
    initCartDrawerEvents();
  }

  // Update Nav Badge
  const navBadge = document.getElementById("nav-cart-badge");
  const count = store.getCartCount();
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.style.display = count > 0 ? "flex" : "none";
  }
}
