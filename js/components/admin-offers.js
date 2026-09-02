/**
 * ÉLÉGANCE ATELIER - Admin Offers, Notices & Coupons Component
 * Roles: agency-frontend-developer & agency-brand-guardian
 */

import { store } from "../state/store.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";
import { formatCurrency } from "../utils/formatters.js";

export function renderAdminOffers() {
  const notices = store.getNotices();
  const flashOffer = store.getFlashOffer();
  const coupons = store.getCoupons();
  const settings = store.getSettings();

  return `
    <div class="fade-in">
      <!-- 1. Top Notice Bar & Marquee Editor -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Top Announcement / Notice Bar</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Controls the marquee notice displayed at the very top of the storefront.</p>
          </div>
          <label class="admin-toggle-switch">
            <input type="checkbox" id="notice-active-cb" ${notices.active ? "checked" : ""}>
            <span class="admin-toggle-slider"></span>
          </label>
        </div>

        <form id="notice-editor-form">
          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Notice Text (Supports emojis & marquee ticker)</label>
            <textarea class="form-textarea" id="notice-text-input" rows="2" style="background: #222228; color: #FFFFFF; border-color: #383842;">${escapeHTML(notices.text || "")}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Link Destination</label>
              <input type="text" class="form-input" id="notice-link-input" value="${escapeHTML(notices.link || "#catalog")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Link Button Label</label>
              <input type="text" class="form-input" id="notice-link-text-input" value="${escapeHTML(notices.linkText || "Shop Collection")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Notice Bar</button>
        </form>
      </div>

      <!-- 2. Flash Sale & Privilege Event Settings -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Private Privilege Sale & Countdown</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Controls the flash offer banner, live countdown timer, and promo link.</p>
          </div>
          <label class="admin-toggle-switch">
            <input type="checkbox" id="flash-active-cb" ${flashOffer.active ? "checked" : ""}>
            <span class="admin-toggle-slider"></span>
          </label>
        </div>

        <form id="flash-editor-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Campaign Title</label>
              <input type="text" class="form-input" id="flash-title-input" value="${escapeHTML(flashOffer.title || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Promo Voucher Code</label>
              <input type="text" class="form-input" id="flash-code-input" value="${escapeHTML(flashOffer.couponCode || "ELEGANCE20")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Campaign Description</label>
            <input type="text" class="form-input" id="flash-desc-input" value="${escapeHTML(flashOffer.subtitle || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Banner Image URL</label>
              <input type="text" class="form-input" id="flash-img-input" value="${escapeHTML(flashOffer.bannerImage || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Discount Rate (%)</label>
              <input type="number" class="form-input" id="flash-percent-input" value="${flashOffer.discountPercent || 20}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Privilege Campaign</button>
        </form>
      </div>

      <!-- 3. VIP Coupon Passcodes Engine -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">VIP Promo Codes & Coupons</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Create discount codes that customers can redeem in their shopping bag or checkout.</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="window.openAddCouponModal()">
            + Create New Promo Code
          </button>
        </div>

        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Discount</th>
                <th>Min Spend</th>
                <th>Expiry</th>
                <th>Description</th>
                <th>Status</th>
                <th style="text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${coupons.map(c => `
                <tr>
                  <td><strong style="color: var(--gold-light); font-family: var(--font-sans); font-size: 0.95rem;">${escapeHTML(c.code)}</strong></td>
                  <td>
                    ${c.discountType === "percentage" ? `<span class="badge badge-gold">${c.discountValue}% OFF</span>` : `<span class="badge badge-sale">${settings.currency}${c.discountValue} OFF</span>`}
                  </td>
                  <td>${c.minSpend ? formatCurrency(c.minSpend, settings.currency) : "No minimum"}</td>
                  <td>${c.expiryDate || "Ongoing"}</td>
                  <td style="color: #A1A1AA;">${escapeHTML(c.description || "—")}</td>
                  <td>
                    <span class="status-pill ${c.isActive ? "status-delivered" : "status-cancelled"}">
                      ${c.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td style="text-align: right;">
                    <button class="btn-icon-action btn-action-delete btn-delete-coupon" data-id="${c.id}" title="Delete Promo Code">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Create Coupon Modal -->
    <div class="modal-overlay" id="coupon-modal">
      <div class="modal-window" style="max-width: 500px; background: var(--bg-dark-surface); border-color: var(--border-dark); color: #E4E4E7;">
        <div class="modal-header" style="border-color: var(--border-dark);">
          <h3 class="modal-title" style="color: #FFFFFF;">Create VIP Promo Voucher</h3>
          <button class="modal-close" onclick="document.getElementById('coupon-modal').classList.remove('active')">&times;</button>
        </div>

        <form id="coupon-form">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Voucher Passcode *</label>
              <input type="text" class="form-input" id="new-coupon-code" required placeholder="e.g. HAUTE30" style="background: #222228; color: #FFFFFF; border-color: #383842; text-transform: uppercase;">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Discount Type</label>
                <select class="form-select" id="new-coupon-type" style="background: #222228; color: #FFFFFF; border-color: #383842;">
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount ($)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Discount Value *</label>
                <input type="number" class="form-input" id="new-coupon-val" required value="20" placeholder="20" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Minimum Spend ($)</label>
                <input type="number" class="form-input" id="new-coupon-min" value="100" placeholder="100" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Expiry Date</label>
                <input type="date" class="form-input" id="new-coupon-expiry" value="2026-12-31" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Description</label>
              <input type="text" class="form-input" id="new-coupon-desc" placeholder="e.g. 30% off runway pieces over $100" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="modal-footer" style="background: #17171C; border-color: var(--border-dark);">
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('coupon-modal').classList.remove('active')">Cancel</button>
            <button type="submit" class="btn btn-gold btn-sm">Create Voucher</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initAdminOffersEvents() {
  // Notice Form Submit
  const noticeForm = document.getElementById("notice-editor-form");
  const noticeActiveCb = document.getElementById("notice-active-cb");

  if (noticeForm) {
    noticeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      store.updateNotices({
        active: noticeActiveCb ? noticeActiveCb.checked : true,
        text: document.getElementById("notice-text-input")?.value || "",
        link: document.getElementById("notice-link-input")?.value || "#catalog",
        linkText: document.getElementById("notice-link-text-input")?.value || "Shop"
      });
      showToast("Store announcement bar updated in real-time!", "success");
    });
  }

  // Flash Offer Form Submit
  const flashForm = document.getElementById("flash-editor-form");
  const flashActiveCb = document.getElementById("flash-active-cb");

  if (flashForm) {
    flashForm.addEventListener("submit", (e) => {
      e.preventDefault();
      store.updateFlashOffer({
        active: flashActiveCb ? flashActiveCb.checked : true,
        title: document.getElementById("flash-title-input")?.value || "",
        couponCode: document.getElementById("flash-code-input")?.value || "ELEGANCE20",
        subtitle: document.getElementById("flash-desc-input")?.value || "",
        bannerImage: document.getElementById("flash-img-input")?.value || "",
        discountPercent: parseInt(document.getElementById("flash-percent-input")?.value, 10) || 20
      });
      showToast("Privilege campaign updated!", "success");
    });
  }

  // Coupon modal events
  window.openAddCouponModal = function() {
    const modal = document.getElementById("coupon-modal");
    if (modal) modal.classList.add("active");
  };

  const couponForm = document.getElementById("coupon-form");
  if (couponForm) {
    couponForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = document.getElementById("new-coupon-code")?.value.trim().toUpperCase();
      const type = document.getElementById("new-coupon-type")?.value || "percentage";
      const val = parseFloat(document.getElementById("new-coupon-val")?.value) || 10;
      const min = parseFloat(document.getElementById("new-coupon-min")?.value) || 0;
      const exp = document.getElementById("new-coupon-expiry")?.value || "2026-12-31";
      const desc = document.getElementById("new-coupon-desc")?.value || "";

      store.addCoupon({
        code,
        discountType: type,
        discountValue: val,
        minSpend: min,
        expiryDate: exp,
        description: desc,
        isActive: true
      });

      showToast(`Promo voucher '${code}' created!`, "success");
      document.getElementById("coupon-modal")?.classList.remove("active");
      refreshOffersView();
    });
  }

  // Delete coupon
  document.querySelectorAll(".btn-delete-coupon").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      store.deleteCoupon(id);
      showToast("Coupon voucher removed", "info");
      refreshOffersView();
    });
  });
}

function refreshOffersView() {
  const container = document.querySelector(".admin-content");
  if (container) {
    container.innerHTML = renderAdminOffers();
    initAdminOffersEvents();
  }
}
