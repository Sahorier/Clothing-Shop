/**
 * Elegant Fashion Rajshahi - Admin Settings & CMS Management Component
 * Roles: agency-brand-guardian & agency-senior-secops-engineer
 */

import { store } from "../state/store.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

export function renderAdminSettings() {
  const settings = store.getSettings();
  const policies = store.getPolicies();
  const faqs = store.getFaqs();

  return `
    <div class="fade-in">
      <!-- 1. Store Identity & Delivery Charges -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Store Branding & Rajshahi Delivery Charges</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Configure store name, currency symbol, and automated delivery charges for Rajshahi and nationwide.</p>
          </div>
        </div>

        <form id="settings-branding-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Shop Name *</label>
              <input type="text" class="form-input" id="set-store-name" value="${escapeHTML(settings.storeName || "")}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Tagline</label>
              <input type="text" class="form-input" id="set-tagline" value="${escapeHTML(settings.tagline || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Inside Rajshahi Delivery Fee (৳) *</label>
              <input type="number" class="form-input" id="set-inside-rajshahi" value="${settings.insideRajshahiFee || 80}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Outside Rajshahi Delivery Fee (৳) *</label>
              <input type="number" class="form-input" id="set-outside-rajshahi" value="${settings.outsideRajshahiFee || 120}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Free Delivery Minimum (৳)</label>
              <input type="number" class="form-input" id="set-free-shipping" value="${settings.freeShippingThreshold || 2000}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Currency Symbol</label>
              <select class="form-select" id="set-currency" style="background: #222228; color: #FFFFFF; border-color: #383842;">
                <option value="৳" ${settings.currency === "৳" ? "selected" : ""}>৳ (BDT - Bangladeshi Taka)</option>
                <option value="$" ${settings.currency === "$" ? "selected" : ""}>$ (USD)</option>
                <option value="€" ${settings.currency === "€" ? "selected" : ""}>€ (EUR)</option>
              </select>
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Brand & Delivery Rates</button>
        </form>
      </div>

      <!-- 2. Facebook Page & Pre-Pay Messenger Template Message Configuration -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Facebook Page & Pre-Pay Message Template</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">When customers choose "Pre-Pay via Facebook Inbox", they will be redirected to this Messenger link with the auto-generated template message below.</p>
          </div>
        </div>

        <form id="settings-facebook-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Facebook Page URL</label>
              <input type="text" class="form-input" id="set-fb-page" value="${escapeHTML(settings.facebookPageUrl || "")}" placeholder="https://www.facebook.com/yourpagename" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Facebook Messenger Link (m.me URL)</label>
              <input type="text" class="form-input" id="set-fb-inbox" value="${escapeHTML(settings.facebookInboxUrl || "")}" placeholder="https://m.me/yourpagename" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">
              Pre-Pay Order Template Message (Per Product / Cart)
            </label>
            <div style="font-size: 0.74rem; color: var(--gold-light); margin-bottom: 0.4rem;">
              Available Dynamic Tags: <code>{product_name}</code>, <code>{size}</code>, <code>{color}</code>, <code>{quantity}</code>, <code>{product_price}</code>, <code>{delivery_charge}</code>, <code>{delivery_location}</code>, <code>{total_amount}</code>, <code>{customer_address}</code>, <code>{customer_city}</code>, <code>{customer_phone}</code>, <code>{custom_design_info}</code>
            </div>
            <textarea class="form-textarea" id="set-fb-template" rows="7" style="background: #222228; color: #FFFFFF; border-color: #383842; font-family: monospace; font-size: 0.84rem;">${escapeHTML(settings.facebookTemplateMessage || "")}</textarea>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Facebook Pre-Pay Template</button>
        </form>
      </div>

      <!-- 3. Outlet Location & Concierge Contacts -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Outlet Address & Hotline Contacts</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Update your Rajshahi Sadar store address, phone numbers, and WhatsApp line.</p>
          </div>
        </div>

        <form id="settings-contacts-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Outlet Address in Rajshahi *</label>
              <input type="text" class="form-input" id="set-address" value="${escapeHTML(settings.atelierAddress || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Hotline Phone Number</label>
              <input type="tel" class="form-input" id="set-phone" value="${escapeHTML(settings.contactPhone || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">WhatsApp Number (with country code)</label>
              <input type="text" class="form-input" id="set-whatsapp" value="${escapeHTML(settings.whatsappNumber || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Official Email Address</label>
              <input type="email" class="form-input" id="set-email" value="${escapeHTML(settings.contactEmail || "")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Contact Details</button>
        </form>
      </div>

      <!-- 4. Policy Documents CMS Editor -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Store Policies & Legal Terms</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Live editable content for delivery, returns, and privacy pages.</p>
          </div>
        </div>

        <form id="settings-policies-form">
          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Delivery & Courier Policy</label>
            <textarea class="form-textarea" id="set-pol-shipping" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${escapeHTML(policies.shipping || "")}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">7-Day Exchange Policy</label>
            <textarea class="form-textarea" id="set-pol-returns" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${escapeHTML(policies.returns || "")}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Privacy Policy</label>
            <textarea class="form-textarea" id="set-pol-privacy" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${escapeHTML(policies.privacy || "")}</textarea>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Policy Documents</button>
        </form>
      </div>

      <!-- 5. FAQ Content Manager -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Frequently Asked Questions (FAQs)</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Add, edit, or remove customer FAQs.</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="window.addNewFaqItem()">+ Add FAQ Item</button>
        </div>

        <div id="admin-faqs-list" style="display: flex; flex-direction: column; gap: 1rem;">
          ${faqs.map((f, idx) => `
            <div style="background: #1C1C22; border: 1px solid var(--border-dark); border-radius: var(--radius-xs); padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <input type="text" class="form-input faq-question-input" data-index="${idx}" value="${escapeHTML(f.question)}" placeholder="FAQ Question" style="background: #25252E; color: #FFFFFF; border-color: #383842; font-weight: 600;">
                <button class="btn-icon-action btn-action-delete" onclick="window.removeFaqItem(${idx})" title="Delete FAQ" style="margin-left: 0.8rem;">
                  &times;
                </button>
              </div>
              <textarea class="form-textarea faq-answer-input" data-index="${idx}" rows="2" placeholder="FAQ Answer" style="background: #25252E; color: #FFFFFF; border-color: #383842;">${escapeHTML(f.answer)}</textarea>
            </div>
          `).join("")}
        </div>

        <button class="btn btn-gold btn-sm" id="btn-save-faqs" style="margin-top: 1.5rem;">Save All FAQs</button>
      </div>

      <!-- 6. Database Tools & Backups -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Database Backup, Export & Factory Reset</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Export your entire store catalog and orders to JSON, import backups, or restore defaults.</p>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" id="btn-export-db" style="color: #FFFFFF; border-color: var(--border-dark);">
            💾 Export Database (.JSON)
          </button>
          
          <label class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: var(--border-dark); cursor: pointer;">
            📂 Import JSON Backup
            <input type="file" id="input-import-db" accept=".json" style="display: none;">
          </label>

          <button class="btn btn-secondary btn-sm" id="btn-reset-db" style="color: #FF6B6B; border-color: rgba(255,107,107,0.3);">
            ⚠️ Factory Reset Demo Data
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initAdminSettingsEvents() {
  // Branding Form
  const brandForm = document.getElementById("settings-branding-form");
  if (brandForm) {
    brandForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("set-store-name")?.value || "Brother's Fashion";
      const tagline = document.getElementById("set-tagline")?.value || "";
      const insideFee = parseFloat(document.getElementById("set-inside-rajshahi")?.value) || 80;
      const outsideFee = parseFloat(document.getElementById("set-outside-rajshahi")?.value) || 120;
      const freeShip = parseFloat(document.getElementById("set-free-shipping")?.value) || 2000;
      const currency = document.getElementById("set-currency")?.value || "৳";

      store.updateSettings({
        storeName: name,
        tagline,
        insideRajshahiFee: insideFee,
        outsideRajshahiFee: outsideFee,
        freeShippingThreshold: freeShip,
        currency
      });

      showToast("Store branding and delivery rates saved!", "success");
    });
  }

  // Facebook Settings Form
  const fbForm = document.getElementById("settings-facebook-form");
  if (fbForm) {
    fbForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pageUrl = document.getElementById("set-fb-page")?.value || "";
      const inboxUrl = document.getElementById("set-fb-inbox")?.value || "";
      const template = document.getElementById("set-fb-template")?.value || "";

      store.updateSettings({
        facebookPageUrl: pageUrl,
        facebookInboxUrl: inboxUrl,
        facebookTemplateMessage: template
      });

      showToast("Facebook Page and Pre-Pay template updated!", "success");
    });
  }

  // Contacts Form
  const contactsForm = document.getElementById("settings-contacts-form");
  if (contactsForm) {
    contactsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      store.updateSettings({
        atelierAddress: document.getElementById("set-address")?.value || "",
        contactPhone: document.getElementById("set-phone")?.value || "",
        whatsappNumber: document.getElementById("set-whatsapp")?.value || "",
        contactEmail: document.getElementById("set-email")?.value || ""
      });
      showToast("Outlet contact details saved!", "success");
    });
  }

  // Policies Form
  const polForm = document.getElementById("settings-policies-form");
  if (polForm) {
    polForm.addEventListener("submit", (e) => {
      e.preventDefault();
      store.updatePolicies({
        shipping: document.getElementById("set-pol-shipping")?.value || "",
        returns: document.getElementById("set-pol-returns")?.value || "",
        privacy: document.getElementById("set-pol-privacy")?.value || ""
      });
      showToast("Policy documents saved!", "success");
    });
  }

  // Save FAQs
  const saveFaqsBtn = document.getElementById("btn-save-faqs");
  if (saveFaqsBtn) {
    saveFaqsBtn.addEventListener("click", () => {
      const qInputs = document.querySelectorAll(".faq-question-input");
      const aInputs = document.querySelectorAll(".faq-answer-input");
      const faqsList = [];

      qInputs.forEach((qi, idx) => {
        const ai = aInputs[idx];
        if (qi.value.trim()) {
          faqsList.push({
            question: qi.value.trim(),
            answer: ai ? ai.value.trim() : ""
          });
        }
      });

      store.updateFaqs(faqsList);
      showToast("FAQ entries updated!", "success");
    });
  }

  // Export DB
  const exportBtn = document.getElementById("btn-export-db");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const json = store.exportDatabaseJSON();
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `brothers-fashion-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Database exported successfully!", "success");
    });
  }

  // Import DB
  const importInput = document.getElementById("input-import-db");
  if (importInput) {
    importInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const res = store.importDatabaseJSON(evt.target.result);
          if (res.success) {
            showToast("Database restored successfully!", "success");
            setTimeout(() => window.location.reload(), 800);
          } else {
            showToast(`Import failed: ${res.error}`, "error");
          }
        };
        reader.readAsText(file);
      }
    });
  }

  // Reset DB
  const resetBtn = document.getElementById("btn-reset-db");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset store data back to Brother's Fashion defaults?")) {
        store.resetToDefaults();
        showToast("Database restored to default catalog!", "info");
        setTimeout(() => window.location.reload(), 800);
      }
    });
  }
}

window.addNewFaqItem = function() {
  const list = store.getFaqs();
  list.push({ question: "New Question?", answer: "Answer description..." });
  store.updateFaqs(list);
  const container = document.querySelector(".admin-content");
  if (container) {
    container.innerHTML = renderAdminSettings();
    initAdminSettingsEvents();
  }
};

window.removeFaqItem = function(index) {
  const list = store.getFaqs();
  list.splice(index, 1);
  store.updateFaqs(list);
  const container = document.querySelector(".admin-content");
  if (container) {
    container.innerHTML = renderAdminSettings();
    initAdminSettingsEvents();
  }
};
