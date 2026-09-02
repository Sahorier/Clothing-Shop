/**
 * Elegant Fashion Rajshahi - Checkout & Direct Order Modal Component
 * Supports Automated Rajshahi Delivery Rates (80 inside, 120 outside),
 * Cash on Delivery (COD), and Pre-Pay via Facebook Page Inbox Redirect with template message.
 */

import { store } from "../state/store.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

let checkoutState = {
  isDirectBuy: false,
  directItem: null,
  deliveryLocation: "inside", // 'inside' = ৳80, 'outside' = ৳120
  selectedPayment: "Cash on Delivery" // 'Cash on Delivery' or 'Pre-Pay via Facebook Messenger (bKash/Nagad)'
};

export function renderCheckoutModal() {
  const settings = store.getSettings();
  const items = checkoutState.isDirectBuy && checkoutState.directItem
    ? [checkoutState.directItem]
    : store.getCart();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  
  let discountAmount = 0;
  if (store.appliedCoupon) {
    if (store.appliedCoupon.discountType === "percentage") {
      discountAmount = (subtotal * store.appliedCoupon.discountValue) / 100;
    } else {
      discountAmount = Math.min(store.appliedCoupon.discountValue, subtotal);
    }
  }

  const shippingFee = store.getDeliveryFee(subtotal, checkoutState.deliveryLocation);
  const tax = (subtotal - discountAmount) * (settings.taxRate || 0.05);
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + tax);

  return `
    <div class="modal-overlay" id="checkout-modal-overlay">
      <div class="modal-window checkout-modal">
        <div class="modal-header">
          <h3 class="modal-title">
            ${checkoutState.isDirectBuy ? "⚡ Direct Order Checkout" : "Complete Your Order"}
          </h3>
          <button class="modal-close" id="btn-close-checkout">&times;</button>
        </div>

        <div class="modal-body" id="checkout-modal-body">
          <form id="checkout-form">
            <div class="checkout-grid">
              <!-- Left: Customer Information & Delivery -->
              <div class="checkout-form-left">
                <div class="checkout-section-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  1. Customer Details & Delivery Address
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Full Name *</label>
                    <input type="text" class="form-input" id="checkout-name" required placeholder="e.g. Tanvir Ahmed">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Mobile / WhatsApp Number *</label>
                    <input type="tel" class="form-input" id="checkout-phone" required placeholder="017XXXXXXXX / 018XXXXXXXX">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Delivery Location in Bangladesh *</label>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.3rem;">
                    <div class="payment-option-card ${checkoutState.deliveryLocation === "inside" ? "active" : ""}" id="opt-loc-inside" style="padding: 0.75rem;">
                      <span class="payment-title">📍 Inside Rajshahi</span>
                      <span class="payment-desc">Rajshahi Sadar (৳${settings.insideRajshahiFee || 80})</span>
                    </div>

                    <div class="payment-option-card ${checkoutState.deliveryLocation === "outside" ? "active" : ""}" id="opt-loc-outside" style="padding: 0.75rem;">
                      <span class="payment-title">🚚 Outside Rajshahi</span>
                      <span class="payment-desc">All Other Districts (৳${settings.outsideRajshahiFee || 120})</span>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">City / District *</label>
                    <input type="text" class="form-input" id="checkout-city" required placeholder="${checkoutState.deliveryLocation === "inside" ? "Rajshahi Sadar" : "e.g. Dhaka, Chittagong, Sylhet, Bogura"}" value="${checkoutState.deliveryLocation === "inside" ? "Rajshahi Sadar" : ""}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Area / Thana *</label>
                    <input type="text" class="form-input" id="checkout-area" required placeholder="e.g. Kazihata / Dhanmondi">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Full Street Address / House & Road *</label>
                  <input type="text" class="form-input" id="checkout-address" required placeholder="House No, Road No, Ward, Landmark">
                </div>

                <!-- Payment Method Selection -->
                <div class="checkout-section-title" style="margin-top: 1.5rem;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  2. Choose Order & Payment Option
                </div>

                <div class="payment-options-grid" style="grid-template-columns: 1fr 1fr;">
                  <div class="payment-option-card ${checkoutState.selectedPayment === "Cash on Delivery" ? "active" : ""}" data-pay-method="Cash on Delivery">
                    <span class="payment-title">📦 Cash on Delivery</span>
                    <span class="payment-desc">Pay directly when parcel arrives</span>
                  </div>

                  <div class="payment-option-card ${checkoutState.selectedPayment.includes("Facebook") ? "active" : ""}" data-pay-method="Pre-Pay via Facebook Messenger (bKash/Nagad)">
                    <span class="payment-title">💬 Pre-Pay on Facebook</span>
                    <span class="payment-desc">Redirects to Facebook with template for bKash/Nagad</span>
                  </div>
                </div>
              </div>

              <!-- Right: Order Summary -->
              <div class="checkout-order-summary">
                <div class="checkout-section-title">Order Summary (${items.reduce((s, i) => s + i.quantity, 0)} Items)</div>
                
                <div style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 220px; overflow-y: auto; margin-bottom: 1.2rem; padding-right: 0.4rem;">
                  ${items.map(item => `
                    <div style="display: flex; gap: 0.75rem; align-items: center;">
                      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" style="width: 44px; height: 55px; object-fit: cover; border-radius: var(--radius-xs);">
                      <div style="flex: 1; font-size: 0.82rem;">
                        <strong style="color: var(--text-primary); display: block; line-height: 1.2;">${escapeHTML(item.title)}</strong>
                        <span style="color: var(--text-muted); font-size: 0.74rem;">Qty: ${item.quantity} | ${escapeHTML(item.size)} | ${escapeHTML(item.color)}</span>
                        ${item.customDesignInfo ? `<div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 600;">🎨 ${escapeHTML(item.customDesignInfo)}</div>` : ""}
                      </div>
                      <span style="font-family: var(--font-serif); font-weight: 600; font-size: 0.88rem;">${formatCurrency(item.price * item.quantity, settings.currency)}</span>
                    </div>
                  `).join("")}
                </div>

                <div class="cart-summary-row">
                  <span>Subtotal</span>
                  <span>${formatCurrency(subtotal, settings.currency)}</span>
                </div>

                ${discountAmount > 0 ? `
                  <div class="cart-summary-row" style="color: var(--color-danger);">
                    <span>Discount (${store.appliedCoupon?.code})</span>
                    <span>-${formatCurrency(discountAmount, settings.currency)}</span>
                  </div>
                ` : ""}

                <div class="cart-summary-row">
                  <span>Delivery (${checkoutState.deliveryLocation === "inside" ? "Inside Rajshahi" : "Outside Rajshahi"})</span>
                  <span>${shippingFee === 0 ? "Free" : formatCurrency(shippingFee, settings.currency)}</span>
                </div>

                <div class="cart-summary-total">
                  <span>Total Payable</span>
                  <span>${formatCurrency(grandTotal, settings.currency)}</span>
                </div>

                <button type="submit" class="btn btn-gold btn-block btn-lg" style="margin-top: 1.5rem;" id="btn-submit-order">
                  ${checkoutState.selectedPayment.includes("Facebook")
                    ? "💬 Open Facebook Inbox with Order Details &rarr;"
                    : "Place Order (Cash on Delivery) &rarr;"}
                </button>
                <p style="font-size: 0.72rem; color: var(--text-muted); text-align: center; margin-top: 0.8rem;">
                  🔒 100% Genuine Bangladeshi Fashion Guarantee & 7-Day Size Exchange.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initCheckoutModalEvents() {
  const overlay = document.getElementById("checkout-modal-overlay");
  const closeBtn = document.getElementById("btn-close-checkout");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", () => overlay.classList.remove("active"));
  }

  // Location selector (Inside vs Outside Rajshahi)
  const locInside = document.getElementById("opt-loc-inside");
  const locOutside = document.getElementById("opt-loc-outside");

  if (locInside && locOutside) {
    locInside.addEventListener("click", () => {
      checkoutState.deliveryLocation = "inside";
      refreshCheckoutView();
    });
    locOutside.addEventListener("click", () => {
      checkoutState.deliveryLocation = "outside";
      refreshCheckoutView();
    });
  }

  // Payment option toggles
  document.querySelectorAll(".payment-option-card[data-pay-method]").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".payment-option-card[data-pay-method]").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      checkoutState.selectedPayment = card.getAttribute("data-pay-method");
      const submitBtn = document.getElementById("btn-submit-order");
      if (submitBtn) {
        submitBtn.innerHTML = checkoutState.selectedPayment.includes("Facebook")
          ? "💬 Open Facebook Inbox with Order Details &rarr;"
          : "Place Order (Cash on Delivery) &rarr;";
      }
    });
  });

  // Submit Order Form
  const form = document.getElementById("checkout-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById("btn-checkout-submit");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳ Processing & Verifying Stock...</span>`;
      }

      const fullName = document.getElementById("checkout-name")?.value || "Client";
      const nameParts = fullName.split(" ");
      const firstName = nameParts[0] || "Client";
      const lastName = nameParts.slice(1).join(" ") || "";
      const phone = document.getElementById("checkout-phone")?.value || "";
      const city = document.getElementById("checkout-city")?.value || (checkoutState.deliveryLocation === "inside" ? "Rajshahi Sadar" : "Bangladesh");
      const area = document.getElementById("checkout-area")?.value || "";
      const street = document.getElementById("checkout-address")?.value || "";
      const fullAddress = `${street}, ${area}`;

      const customer = {
        firstName,
        lastName,
        email: "guest@brothersfashion.bd",
        phone,
        address: fullAddress,
        city,
        country: "Bangladesh"
      };

      const items = checkoutState.isDirectBuy && checkoutState.directItem
        ? [checkoutState.directItem]
        : store.getCart();

      const settings = store.getSettings();
      const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
      
      let discountAmount = 0;
      if (store.appliedCoupon) {
        if (store.appliedCoupon.discountType === "percentage") {
          discountAmount = (subtotal * store.appliedCoupon.discountValue) / 100;
        } else {
          discountAmount = Math.min(store.appliedCoupon.discountValue, subtotal);
        }
      }

      const shippingFee = store.getDeliveryFee(subtotal, checkoutState.deliveryLocation);
      const tax = (subtotal - discountAmount) * (settings.taxRate || 0.05);
      const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee + tax);

      try {
        // If Pre-Pay via Facebook Messenger is chosen:
        if (checkoutState.selectedPayment.includes("Facebook")) {
          const itemDescriptions = items.map(i => `${i.title} (${i.quantity}x, Size: ${i.size}, Color: ${i.color})`).join(", ");
          const customInfos = items.map(i => i.customDesignInfo).filter(Boolean).join(" | ") || "None";

          const fbOrderUrl = store.generateFacebookOrderUrl({
            productName: itemDescriptions,
            size: items[0]?.size || "M",
            color: items[0]?.color || "Default",
            quantity: items.reduce((s, i) => s + i.quantity, 0),
            productPrice: subtotal,
            deliveryCharge: shippingFee,
            deliveryLocation: checkoutState.deliveryLocation === "inside" ? "Inside Rajshahi (৳80)" : "Outside Rajshahi (৳120)",
            totalAmount: grandTotal,
            customerAddress: fullAddress,
            customerCity: city,
            customerPhone: phone,
            customDesignInfo: customInfos
          });

          // Record order in database and decrement stock
          const createdOrder = await store.createOrder({
            customer,
            items,
            deliveryLocation: checkoutState.deliveryLocation === "inside" ? "Inside Rajshahi Sadar" : "Outside Rajshahi",
            shippingFee,
            subtotal,
            discount: discountAmount,
            discountCode: store.appliedCoupon ? store.appliedCoupon.code : "",
            tax,
            total: grandTotal,
            paymentMethod: "Pre-Paid via Facebook Messenger (bKash/Nagad)"
          });

          if (!checkoutState.isDirectBuy) store.clearCart();

          showToast("Opening Facebook Messenger with your order message template...", "info");
          window.open(fbOrderUrl, "_blank");

          renderOrderSuccess(createdOrder);
          return;
        }

        // If Cash on Delivery (COD) on website:
        const createdOrder = await store.createOrder({
          customer,
          items,
          deliveryLocation: checkoutState.deliveryLocation === "inside" ? "Inside Rajshahi Sadar" : "Outside Rajshahi",
          shippingFee,
          subtotal,
          discount: discountAmount,
          discountCode: store.appliedCoupon ? store.appliedCoupon.code : "",
          tax,
          total: grandTotal,
          paymentMethod: "Cash on Delivery"
        });

        if (!checkoutState.isDirectBuy) {
          store.clearCart();
        }

        renderOrderSuccess(createdOrder);
      } catch (err) {
        showToast(err.message || "Failed to place order. Please try again.", "error");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Confirm & Place Order &rarr;</span>`;
        }
      }
    });
  }
}

function renderOrderSuccess(order) {
  const modalBody = document.getElementById("checkout-modal-body");
  const settings = store.getSettings();
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="order-success-box fade-in">
      <div class="success-icon-wrap">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Order Successfully Placed!</h2>
      <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">
        Thank you, <strong>${escapeHTML(order.customer.firstName)}</strong>. Your order has been placed with <strong>Brother's Fashion</strong>.
      </p>

      <div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);">Your Order Tracking Reference:</span>
        <div class="order-id-badge">${escapeHTML(order.id)}</div>
      </div>

      <div style="background: var(--bg-secondary); border-radius: var(--radius-xs); padding: 1.5rem; max-width: 500px; margin: 0 auto 2rem; text-align: left; font-size: 0.88rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Recipient:</span>
          <strong>${escapeHTML(order.customer.firstName)} ${escapeHTML(order.customer.lastName)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Contact Number:</span>
          <strong>${escapeHTML(order.customer.phone)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Delivery Address:</span>
          <span>${escapeHTML(order.customer.address)}, ${escapeHTML(order.customer.city)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Delivery Fee:</span>
          <span>${formatCurrency(order.shippingFee, settings.currency)} (${escapeHTML(order.deliveryLocation || "Rajshahi")})</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Payment Method:</span>
          <span>${escapeHTML(order.paymentMethod)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700; border-top: 1px solid var(--border-light); padding-top: 0.4rem; margin-top: 0.4rem;">
          <span>Total Payable:</span>
          <span style="color: var(--gold-dark);">${formatCurrency(order.total, settings.currency)}</span>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#tracking?id=${order.id}" class="btn btn-gold" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">
          📍 Track Order Status
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active'); window.location.hash='#catalog';">
          Continue Shopping
        </button>
      </div>
    </div>
  `;
}

function refreshCheckoutView() {
  const modalContainer = document.getElementById("checkout-modal-container");
  if (modalContainer) {
    modalContainer.innerHTML = renderCheckoutModal();
    document.getElementById("checkout-modal-overlay")?.classList.add("active");
    initCheckoutModalEvents();
  }
}

window.openCheckoutModal = function() {
  checkoutState.isDirectBuy = false;
  checkoutState.directItem = null;
  refreshCheckoutView();
};

window.openDirectCheckout = function(item) {
  checkoutState.isDirectBuy = true;
  checkoutState.directItem = item;
  refreshCheckoutView();
};
