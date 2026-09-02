/**
 * ÉLÉGANCE ATELIER - Live Order Tracking Component
 * Roles: agency-retail-customer-returns & agency-customer-service
 */

import { store } from "../state/store.js";
import { formatCurrency, formatDateTime } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderOrderTracking(orderIdQuery = "") {
  const initialOrder = orderIdQuery ? store.getOrderById(orderIdQuery) : null;
  const settings = store.getSettings();

  return `
    <div class="order-tracking-page">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">WHITE-GLOVE LOGISTICS</span>
          <h1 class="section-title">Live Atelier Order Tracker</h1>
          <p class="section-desc">Enter your Order ID reference (e.g. <code>ELG-89421</code>) or contact email to monitor your package journey in real-time.</p>
        </div>

        <!-- Search Form -->
        <div class="tracker-search-box">
          <form id="order-tracker-form" style="display: flex; gap: 0.75rem;">
            <input type="text" class="form-input" id="tracker-input" placeholder="Enter Order ID or Email..." value="${escapeHTML(orderIdQuery)}" required style="flex: 1;">
            <button type="submit" class="btn btn-gold">Track Order</button>
          </form>
        </div>

        <!-- Result Container -->
        <div id="tracker-result-container">
          ${initialOrder ? renderOrderResultCard(initialOrder, settings) : ""}
        </div>
      </div>
    </div>
  `;
}

function renderOrderResultCard(order, settings) {
  return `
    <div class="tracker-result-card fade-in">
      <div class="tracker-header">
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold-dark); font-weight: 700;">Order Verified</div>
          <h2 style="font-size: 1.6rem; margin-top: 0.2rem;">Order #${escapeHTML(order.id)}</h2>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Placed on ${formatDateTime(order.createdAt)}</span>
        </div>
        <div style="text-align: right;">
          <span class="status-pill status-${(order.orderStatus || "pending").toLowerCase()}">
            ${escapeHTML(order.orderStatus || "Pending")}
          </span>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
            Carrier: <strong>${escapeHTML(order.trackingNumber || "Assigned Upon Dispatch")}</strong>
          </div>
        </div>
      </div>

      <!-- Visual Timeline -->
      <h4 style="font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem;">Fulfillment Progress</h4>
      <div class="tracking-timeline">
        ${(order.timeline || []).map(step => `
          <div class="timeline-step ${step.done ? "completed" : ""}">
            <div class="timeline-dot"></div>
            <div class="timeline-step-title">${escapeHTML(step.status)}</div>
            <div class="timeline-step-time">${escapeHTML(step.date)}</div>
          </div>
        `).join("")}
      </div>

      <!-- Order Details Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
        <div>
          <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.6rem; color: var(--text-secondary);">Delivery Destination</h5>
          <p style="font-size: 0.88rem; line-height: 1.5;">
            <strong>${escapeHTML(order.customer.firstName)} ${escapeHTML(order.customer.lastName)}</strong><br>
            ${escapeHTML(order.customer.address)}<br>
            ${escapeHTML(order.customer.city)}, ${escapeHTML(order.customer.postalCode)}<br>
            ${escapeHTML(order.customer.country)}
          </p>
        </div>

        <div>
          <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.6rem; color: var(--text-secondary);">Payment & Totals</h5>
          <p style="font-size: 0.88rem; line-height: 1.5;">
            Method: <strong>${escapeHTML(order.paymentMethod)}</strong> (${escapeHTML(order.paymentStatus)})<br>
            Subtotal: ${formatCurrency(order.subtotal, settings.currency)}<br>
            Discount: -${formatCurrency(order.discount || 0, settings.currency)}<br>
            <strong>Grand Total: ${formatCurrency(order.total, settings.currency)}</strong>
          </p>
        </div>
      </div>

      <!-- Items List -->
      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
        <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; color: var(--text-secondary);">Ordered Pieces</h5>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          ${(order.items || []).map(item => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; gap: 0.8rem;">
                <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" style="width: 40px; height: 50px; object-fit: cover; border-radius: var(--radius-xs);">
                <div>
                  <strong style="font-size: 0.88rem; color: var(--text-primary);">${escapeHTML(item.title)}</strong>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Size: ${escapeHTML(item.size)} | Color: ${escapeHTML(item.color)} | Qty: ${item.quantity}</div>
                </div>
              </div>
              <span style="font-family: var(--font-serif); font-weight: 600;">${formatCurrency(item.price * item.quantity, settings.currency)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

export function initOrderTrackingEvents() {
  const form = document.getElementById("order-tracker-form");
  const input = document.getElementById("tracker-input");
  const resultContainer = document.getElementById("tracker-result-container");

  if (form && input && resultContainer) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;

      const order = store.getOrderById(val);
      const settings = store.getSettings();

      if (order) {
        resultContainer.innerHTML = renderOrderResultCard(order, settings);
      } else {
        resultContainer.innerHTML = `
          <div style="max-width: 600px; margin: 0 auto; text-align: center; background: var(--bg-surface); padding: 3rem 2rem; border: 1px solid var(--border-light); border-radius: var(--radius-xs);">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Order Not Found</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.2rem;">We couldn't locate any order matching "${escapeHTML(val)}". Please verify your Order ID or contact our 24/7 concierge.</p>
            <a href="#contact" class="btn btn-outline-gold btn-sm">Contact Concierge</a>
          </div>
        `;
      }
    });
  }
}
