/**
 * ÉLÉGANCE ATELIER - Admin Orders Management Component
 * Roles: agency-retail-customer-returns & agency-customer-service
 */

import { store } from "../state/store.js";
import { formatCurrency, formatDateTime } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

let activeFilterStatus = "all";
let activeSearchQuery = "";

export function renderAdminOrders(filterStatus = "all", searchQuery = "") {
  activeFilterStatus = filterStatus;
  activeSearchQuery = searchQuery;

  const orders = store.getOrders();
  const settings = store.getSettings();

  const filtered = orders.filter(o => {
    if (filterStatus !== "all" && (o.orderStatus || "pending").toLowerCase() !== filterStatus.toLowerCase()) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchId = o.id.toLowerCase().includes(q);
      const matchName = `${o.customer.firstName} ${o.customer.lastName}`.toLowerCase().includes(q);
      const matchEmail = o.customer.email?.toLowerCase().includes(q);
      if (!matchId && !matchName && !matchEmail) return false;
    }
    return true;
  });

  return `
    <div class="fade-in">
      <div class="admin-card">
        <!-- Toolbar -->
        <div class="admin-card-toolbar">
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
            <input type="text" class="admin-search-input" id="admin-order-search" placeholder="Search by Order ID, Client..." value="${escapeHTML(searchQuery)}">
            
            <select class="admin-search-input" id="admin-order-status-filter" style="width: 170px;">
              <option value="all" ${filterStatus === "all" ? "selected" : ""}>All Order Statuses</option>
              <option value="pending" ${filterStatus === "pending" ? "selected" : ""}>Pending</option>
              <option value="confirmed" ${filterStatus === "confirmed" ? "selected" : ""}>Confirmed</option>
              <option value="processing" ${filterStatus === "processing" ? "selected" : ""}>Processing</option>
              <option value="shipped" ${filterStatus === "shipped" ? "selected" : ""}>Shipped</option>
              <option value="delivered" ${filterStatus === "delivered" ? "selected" : ""}>Delivered</option>
              <option value="cancelled" ${filterStatus === "cancelled" ? "selected" : ""}>Cancelled</option>
            </select>

            <button class="btn btn-secondary btn-sm" id="btn-refresh-orders" title="Sync live orders from server database" style="color: #FFFFFF; border-color: var(--border-dark);">
              🔄 Refresh Orders
            </button>
          </div>

          <span style="font-size: 0.84rem; color: #A1A1AA;">
            Total Orders: <strong>${orders.length}</strong> | Filtered: <strong>${filtered.length}</strong>
          </span>
        </div>

        <!-- Orders Table -->
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Client Details</th>
                <th>Ordered Items</th>
                <th>Total Paid</th>
                <th>Payment</th>
                <th>Status (Live Update)</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="7" style="text-align: center; padding: 3rem; color: #71717A;">No client orders match criteria.</td>
                </tr>
              ` : filtered.map(o => `
                <tr>
                  <td>
                    <strong style="color: var(--gold-light); font-size: 0.95rem;">#${escapeHTML(o.id)}</strong>
                    <div style="font-size: 0.72rem; color: #71717A;">${formatDateTime(o.createdAt)}</div>
                  </td>
                  <td>
                    <strong style="color: #FFFFFF;">${escapeHTML(o.customer.firstName)} ${escapeHTML(o.customer.lastName)}</strong>
                    <div style="font-size: 0.75rem; color: #A1A1AA;">${escapeHTML(o.customer.email)}</div>
                    <div style="font-size: 0.72rem; color: #71717A;">${escapeHTML(o.customer.city)}, ${escapeHTML(o.customer.country)}</div>
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      ${(o.items || []).slice(0, 3).map(item => `
                        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" title="${escapeHTML(item.title)} (${item.quantity}x)" style="width: 34px; height: 42px; object-fit: cover; border-radius: var(--radius-xs);">
                      `).join("")}
                      ${(o.items || []).length > 3 ? `<span style="font-size: 0.75rem; color: #A1A1AA;">+${o.items.length - 3}</span>` : ""}
                    </div>
                  </td>
                  <td>
                    <strong style="font-family: var(--font-serif); font-size: 1rem; color: #FFFFFF;">${formatCurrency(o.total, settings.currency)}</strong>
                    ${o.discount > 0 ? `<div style="font-size: 0.7rem; color: #F87171;">Saved ${formatCurrency(o.discount, settings.currency)}</div>` : ""}
                  </td>
                  <td>
                    <span style="font-size: 0.8rem; color: #D4D4D8;">${escapeHTML(o.paymentMethod)}</span>
                    <div style="font-size: 0.72rem; color: ${o.paymentStatus === "Paid" ? "#4ADE80" : "#FBBF24"}; font-weight: 700;">${escapeHTML(o.paymentStatus)}</div>
                  </td>
                  <td>
                    <select class="admin-search-input select-order-status" data-id="${o.id}" style="width: 130px; padding: 0.35rem 0.6rem; font-size: 0.78rem;">
                      <option value="Pending" ${o.orderStatus === "Pending" ? "selected" : ""}>Pending</option>
                      <option value="Confirmed" ${o.orderStatus === "Confirmed" ? "selected" : ""}>Confirmed</option>
                      <option value="Processing" ${o.orderStatus === "Processing" ? "selected" : ""}>Processing</option>
                      <option value="Shipped" ${o.orderStatus === "Shipped" ? "selected" : ""}>Shipped</option>
                      <option value="Delivered" ${o.orderStatus === "Delivered" ? "selected" : ""}>Delivered</option>
                      <option value="Cancelled" ${o.orderStatus === "Cancelled" ? "selected" : ""}>Cancelled</option>
                    </select>
                  </td>
                  <td style="text-align: right;">
                    <div class="table-action-btns" style="justify-content: flex-end;">
                      <button class="btn-icon-action btn-view-invoice" data-id="${o.id}" title="Print Packing Slip / Invoice">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 6 2 18 2 18 9"></polyline>
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                          <rect x="6" y="14" width="12" height="8"></rect>
                        </svg>
                      </button>
                      <a href="#tracking?id=${o.id}" target="_blank" class="btn-icon-action" title="View Customer Tracking Timeline">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Invoice / Packing Slip Modal -->
    <div class="modal-overlay" id="invoice-modal">
      <div class="modal-window" style="max-width: 640px; background: #FFFFFF; color: #121214;" id="invoice-modal-content"></div>
    </div>
  `;
}

export function initAdminOrdersEvents() {
  const searchInput = document.getElementById("admin-order-search");
  const statusFilter = document.getElementById("admin-order-status-filter");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      const status = statusFilter ? statusFilter.value : "all";
      const container = document.querySelector(".admin-content");
      if (container) container.innerHTML = renderAdminOrders(status, q);
      initAdminOrdersEvents();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      const status = e.target.value;
      const q = searchInput ? searchInput.value : "";
      const container = document.querySelector(".admin-content");
      if (container) container.innerHTML = renderAdminOrders(status, q);
      initAdminOrdersEvents();
    });
  }

  // Refresh button trigger
  const refreshBtn = document.getElementById("btn-refresh-orders");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", async () => {
      refreshBtn.disabled = true;
      refreshBtn.innerHTML = `<span>⏳ Syncing...</span>`;
      try {
        await store.fetchRemoteOrders();
        showToast("Live orders synchronized from database!", "success");
        const status = statusFilter ? statusFilter.value : "all";
        const q = searchInput ? searchInput.value : "";
        const container = document.querySelector(".admin-content");
        if (container) container.innerHTML = renderAdminOrders(status, q);
        initAdminOrdersEvents();
      } catch (e) {
        showToast("Synced with local storage", "info");
        refreshBtn.disabled = false;
        refreshBtn.innerHTML = `<span>🔄 Refresh Orders</span>`;
      }
    });
  }

  // Real-time Status Dropdowns
  document.querySelectorAll(".select-order-status").forEach(select => {
    select.addEventListener("change", async () => {
      const id = select.getAttribute("data-id");
      const newStatus = select.value;
      await store.updateOrderStatus(id, newStatus);
      showToast(`Order #${id} status changed to '${newStatus}'. Inventory & customer tracking updated!`, "success");
    });
  });

  // Invoice / Packing slip modal trigger
  document.querySelectorAll(".btn-view-invoice").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const order = store.getOrderById(id);
      if (order) openInvoiceModal(order);
    });
  });
}

function openInvoiceModal(order) {
  const settings = store.getSettings();
  const modal = document.getElementById("invoice-modal");
  const container = document.getElementById("invoice-modal-content");

  if (modal && container) {
    container.innerHTML = `
      <div class="modal-header">
        <h3 class="modal-title">Brother's Fashion Invoice #${escapeHTML(order.id)}</h3>
        <button class="modal-close" onclick="document.getElementById('invoice-modal').classList.remove('active')">&times;</button>
      </div>

      <div class="modal-body" id="printable-invoice-body">
        <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #000000; padding-bottom: 1.2rem; margin-bottom: 1.5rem;">
          <div>
            <h2 style="font-family: var(--font-serif); font-size: 1.4rem;">${escapeHTML(settings.storeName || "Brother's Fashion")}</h2>
            <p style="font-size: 0.8rem; color: #555;">${escapeHTML(settings.atelierAddress)}</p>
          </div>
          <div style="text-align: right;">
            <strong>PACKING SLIP / RECEIPT</strong>
            <div style="font-size: 0.8rem; color: #555;">Date: ${formatDateTime(order.createdAt)}</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem;">
          <div>
            <strong>Deliver To:</strong>
            <p>${escapeHTML(order.customer.firstName)} ${escapeHTML(order.customer.lastName)}<br>
            ${escapeHTML(order.customer.address)}<br>
            ${escapeHTML(order.customer.city)}, ${escapeHTML(order.customer.postalCode)}<br>
            ${escapeHTML(order.customer.country)}<br>
            Phone: ${escapeHTML(order.customer.phone)}</p>
          </div>
          <div>
            <strong>Payment Info:</strong>
            <p>Method: ${escapeHTML(order.paymentMethod)}<br>
            Status: ${escapeHTML(order.paymentStatus)}<br>
            Tracking: ${escapeHTML(order.trackingNumber)}</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 1.5rem;">
          <thead>
            <tr style="border-bottom: 1px solid #CCC; text-align: left;">
              <th style="padding: 0.5rem 0;">Item Description</th>
              <th style="padding: 0.5rem 0;">Size / Color</th>
              <th style="padding: 0.5rem 0; text-align: center;">Qty</th>
              <th style="padding: 0.5rem 0; text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${(order.items || []).map(i => `
              <tr style="border-bottom: 1px solid #EEE;">
                <td style="padding: 0.6rem 0;"><strong>${escapeHTML(i.title)}</strong></td>
                <td style="padding: 0.6rem 0;">${escapeHTML(i.size)} | ${escapeHTML(i.color)}</td>
                <td style="padding: 0.6rem 0; text-align: center;">${i.quantity}</td>
                <td style="padding: 0.6rem 0; text-align: right;">${formatCurrency(i.price * i.quantity, settings.currency)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; font-size: 0.9rem;">
          <div style="width: 240px; display: flex; flex-direction: column; gap: 0.3rem;">
            <div style="display: flex; justify-content: space-between;"><span>Subtotal:</span> <span>${formatCurrency(order.subtotal, settings.currency)}</span></div>
            ${order.discount > 0 ? `<div style="display: flex; justify-content: space-between; color: red;"><span>Discount:</span> <span>-${formatCurrency(order.discount, settings.currency)}</span></div>` : ""}
            <div style="display: flex; justify-content: space-between;"><span>Shipping:</span> <span>${formatCurrency(order.shippingFee || 0, settings.currency)}</span></div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #000; padding-top: 0.3rem; margin-top: 0.3rem;">
              <span>Grand Total:</span> <span>${formatCurrency(order.total, settings.currency)}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer" style="background: #F4F4F5;">
        <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print Packing Slip</button>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('invoice-modal').classList.remove('active')">Close</button>
      </div>
    `;
    modal.classList.add("active");
  }
}
