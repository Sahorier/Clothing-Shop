/**
 * ÉLÉGANCE ATELIER - Admin Products Management Component
 * Roles: agency-frontend-developer & agency-senior-secops-engineer
 */

import { store } from "../state/store.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

// Curated high-res fashion image presets for easy 1-click selection
const PRESET_FASHION_IMAGES = [
  "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
];

let editingProductId = null;

export function renderAdminProducts(filterCategory = "all", searchQuery = "") {
  const products = store.getProducts();
  const categories = store.getCategories();
  const settings = store.getSettings();

  const filtered = products.filter(p => {
    if (filterCategory !== "all" && p.category.toLowerCase() !== filterCategory.toLowerCase()) return false;
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase()) && !p.sku?.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return `
    <div class="fade-in">
      <div class="admin-card">
        <!-- Toolbar -->
        <div class="admin-card-toolbar">
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <input type="text" class="admin-search-input" id="admin-product-search" placeholder="Search by title, SKU..." value="${escapeHTML(searchQuery)}">
            
            <select class="admin-search-input" id="admin-category-filter" style="width: 180px;">
              <option value="all" ${filterCategory === "all" ? "selected" : ""}>All Categories</option>
              ${categories.map(c => `
                <option value="${escapeHTML(c.slug || c.name)}" ${filterCategory.toLowerCase() === (c.slug || c.name).toLowerCase() ? "selected" : ""}>${escapeHTML(c.name)}</option>
              `).join("")}
            </select>
          </div>

          <button class="btn btn-gold btn-sm" onclick="window.openAddProductModal()">
            + Add New Garment
          </button>
        </div>

        <!-- Products Table -->
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Garment</th>
                <th>Category</th>
                <th>Price / Original</th>
                <th>Stock</th>
                <th>Badge</th>
                <th>Featured</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="7" style="text-align: center; padding: 3rem; color: #71717A;">No garments match the criteria.</td>
                </tr>
              ` : filtered.map(p => `
                <tr>
                  <td>
                    <div class="table-product-cell">
                      <img src="${escapeHTML(p.images[0])}" alt="${escapeHTML(p.title)}" class="table-thumb">
                      <div>
                        <div class="table-product-name">${escapeHTML(p.title)}</div>
                        <div class="table-product-sku">SKU: ${escapeHTML(p.sku || "N/A")} | Sizes: ${(p.sizes || []).join(", ")}</div>
                      </div>
                    </div>
                  </td>
                  <td>${escapeHTML(p.category)}</td>
                  <td>
                    <strong style="color: var(--gold-light); font-family: var(--font-serif);">${formatCurrency(p.price, settings.currency)}</strong>
                    ${p.originalPrice && p.originalPrice > p.price ? `<div style="font-size: 0.72rem; color: #71717A; text-decoration: line-through;">${formatCurrency(p.originalPrice, settings.currency)}</div>` : ""}
                  </td>
                  <td>
                    <span style="font-weight: 700; color: ${p.stock <= 5 ? "#FBBF24" : "#4ADE80"};">
                      ${p.stock} units
                    </span>
                  </td>
                  <td>
                    ${p.badge ? `<span class="badge badge-${p.badge.toLowerCase()}">${escapeHTML(p.badge)}</span>` : '<span style="color: #52525B;">—</span>'}
                  </td>
                  <td>
                    <label class="admin-toggle-switch">
                      <input type="checkbox" ${p.isFeatured ? "checked" : ""} class="toggle-featured-cb" data-id="${p.id}">
                      <span class="admin-toggle-slider"></span>
                    </label>
                  </td>
                  <td>
                    <div class="table-action-btns" style="justify-content: flex-end;">
                      <button class="btn-icon-action btn-edit-product" data-id="${p.id}" title="Edit Garment">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                      <button class="btn-icon-action btn-duplicate-product" data-id="${p.id}" title="Duplicate Garment">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      </button>
                      <button class="btn-icon-action btn-action-delete btn-delete-product" data-id="${p.id}" title="Delete Garment">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Add / Edit Product Modal -->
    <div class="modal-overlay" id="product-editor-modal">
      <div class="modal-window" style="max-width: 780px; background: var(--bg-dark-surface); border-color: var(--border-dark); color: #E4E4E7;">
        <div class="modal-header" style="border-color: var(--border-dark);">
          <h3 class="modal-title" id="editor-modal-title" style="color: #FFFFFF;">Add New Atelier Garment</h3>
          <button class="modal-close" onclick="document.getElementById('product-editor-modal').classList.remove('active')">&times;</button>
        </div>

        <form id="product-editor-form">
          <div class="modal-body" style="max-height: 72vh; overflow-y: auto;">
            <!-- Title & Subtitle -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Garment Title *</label>
                <input type="text" class="form-input" id="edit-prod-title" required placeholder="e.g. Midnight Velvet Mermaid Gown" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Category *</label>
                <select class="form-select" id="edit-prod-category" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
                  ${categories.map(c => `<option value="${escapeHTML(c.slug || c.name)}">${escapeHTML(c.name)}</option>`).join("")}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Tagline / Short Subtitle</label>
              <input type="text" class="form-input" id="edit-prod-subtitle" placeholder="e.g. Hand-draped French velvet with corset bodice" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>

            <!-- Price & Stock -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Price ($) *</label>
                <input type="number" step="0.01" class="form-input" id="edit-prod-price" required placeholder="680" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Original / Discount Strike Price ($)</label>
                <input type="number" step="0.01" class="form-input" id="edit-prod-orig-price" placeholder="850" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Stock Quantity *</label>
                <input type="number" class="form-input" id="edit-prod-stock" required value="12" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <!-- Badge & SKU -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Badge</label>
                <select class="form-select" id="edit-prod-badge" style="background: #222228; color: #FFFFFF; border-color: #383842;">
                  <option value="">None</option>
                  <option value="NEW">NEW</option>
                  <option value="BESTSELLER">BESTSELLER</option>
                  <option value="HOT">HOT</option>
                  <option value="LIMITED">LIMITED</option>
                  <option value="SALE">SALE</option>
                  <option value="RUNWAY">RUNWAY</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">SKU Reference</label>
                <input type="text" class="form-input" id="edit-prod-sku" placeholder="ELG-W-001" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <!-- Image URLs & Preset Gallery -->
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">High-Definition Image URLs (Comma separated or 1 per line)</label>
              <textarea class="form-textarea" id="edit-prod-images" rows="3" required placeholder="https://images.unsplash.com/..." style="background: #222228; color: #FFFFFF; border-color: #383842; font-family: monospace; font-size: 0.8rem;"></textarea>
              
              <span style="font-size: 0.72rem; color: #A1A1AA; display: block; margin-top: 0.4rem;">
                💡 Click any preset photography below to append it instantly:
              </span>
              <div class="preset-gallery-grid">
                ${PRESET_FASHION_IMAGES.map(img => `
                  <img src="${escapeHTML(img)}" class="preset-thumb" onclick="appendPresetImage('${escapeHTML(img)}')" title="Click to use image" loading="lazy">
                `).join("")}
              </div>
            </div>

            <!-- Sizes & Colors -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Available Sizes (Comma-separated)</label>
                <input type="text" class="form-input" id="edit-prod-sizes" value="XS, S, M, L, XL" placeholder="XS, S, M, L, XL" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Color Options (e.g. Noir:#111, Gold:#D4AF37)</label>
                <input type="text" class="form-input" id="edit-prod-colors" value="Obsidian Noir:#111111, Royal Gold:#D4AF37" placeholder="Name:#Hex, Name:#Hex" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <!-- Description & Fabric -->
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Product Description & Story</label>
              <textarea class="form-textarea" id="edit-prod-desc" rows="3" placeholder="Describe the silhouette, craftsmanship, and occasion..." style="background: #222228; color: #FFFFFF; border-color: #383842;"></textarea>
            </div>

            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Fabric & Materials</label>
              <input type="text" class="form-input" id="edit-prod-fabric" placeholder="e.g. 100% Super 160s Italian Virgin Wool" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; color: #FFFFFF;">
                <input type="checkbox" id="edit-prod-featured" style="width: 18px; height: 18px;">
                <span>Show in Featured Runway Showcase on Landing Page</span>
              </label>
            </div>
          </div>

          <div class="modal-footer" style="background: #17171C; border-color: var(--border-dark);">
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('product-editor-modal').classList.remove('active')">Cancel</button>
            <button type="submit" class="btn btn-gold btn-sm" id="btn-save-product">Save Garment</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function initAdminProductsEvents() {
  // Search & Filter
  const searchInput = document.getElementById("admin-product-search");
  const catFilter = document.getElementById("admin-category-filter");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      const cat = catFilter ? catFilter.value : "all";
      const container = document.querySelector(".admin-content");
      if (container) container.innerHTML = renderAdminProducts(cat, q);
      initAdminProductsEvents();
    });
  }

  if (catFilter) {
    catFilter.addEventListener("change", (e) => {
      const cat = e.target.value;
      const q = searchInput ? searchInput.value : "";
      const container = document.querySelector(".admin-content");
      if (container) container.innerHTML = renderAdminProducts(cat, q);
      initAdminProductsEvents();
    });
  }

  // Toggle Featured Switches
  document.querySelectorAll(".toggle-featured-cb").forEach(cb => {
    cb.addEventListener("change", () => {
      const id = cb.getAttribute("data-id");
      store.updateProduct(id, { isFeatured: cb.checked });
      showToast(cb.checked ? "Garment added to Featured Showcase" : "Removed from Featured Showcase", "info");
    });
  });

  // Edit Product buttons
  document.querySelectorAll(".btn-edit-product").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openEditProductModal(id);
    });
  });

  // Duplicate Product buttons
  document.querySelectorAll(".btn-duplicate-product").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const prod = store.getProductById(id);
      if (prod) {
        const copy = JSON.parse(JSON.stringify(prod));
        delete copy.id;
        copy.title = `${copy.title} (Copy)`;
        copy.sku = `ELG-${Math.floor(100 + Math.random() * 900)}`;
        store.addProduct(copy);
        showToast("Product duplicated successfully", "success");
        refreshProductsTable();
      }
    });
  });

  // Delete Product buttons
  document.querySelectorAll(".btn-delete-product").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const prod = store.getProductById(id);
      if (confirm(`Are you sure you wish to delete "${prod?.title || "this garment"}" from the catalog?`)) {
        store.deleteProduct(id);
        showToast("Garment removed from catalog", "info");
        refreshProductsTable();
      }
    });
  });

  // Editor Form Submit
  const editorForm = document.getElementById("product-editor-form");
  if (editorForm) {
    editorForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const imagesInput = document.getElementById("edit-prod-images")?.value || "";
      const imagesArr = imagesInput.split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
      if (imagesArr.length === 0) {
        imagesArr.push(PRESET_FASHION_IMAGES[0]);
      }

      const sizesInput = document.getElementById("edit-prod-sizes")?.value || "";
      const sizesArr = sizesInput.split(",").map(s => s.trim()).filter(Boolean);

      const colorsInput = document.getElementById("edit-prod-colors")?.value || "";
      const colorsArr = colorsInput.split(",").map(c => {
        const parts = c.split(":");
        return {
          name: parts[0]?.trim() || "Obsidian Noir",
          hex: parts[1]?.trim() || "#111111"
        };
      }).filter(c => c.name);

      const productPayload = {
        title: document.getElementById("edit-prod-title")?.value || "Luxury Piece",
        subtitle: document.getElementById("edit-prod-subtitle")?.value || "",
        category: document.getElementById("edit-prod-category")?.value || "Women",
        price: parseFloat(document.getElementById("edit-prod-price")?.value) || 100,
        originalPrice: parseFloat(document.getElementById("edit-prod-orig-price")?.value) || null,
        stock: parseInt(document.getElementById("edit-prod-stock")?.value, 10) || 10,
        badge: document.getElementById("edit-prod-badge")?.value || "",
        sku: document.getElementById("edit-prod-sku")?.value || "",
        images: imagesArr,
        sizes: sizesArr,
        colors: colorsArr,
        description: document.getElementById("edit-prod-desc")?.value || "",
        fabric: document.getElementById("edit-prod-fabric")?.value || "",
        isFeatured: document.getElementById("edit-prod-featured")?.checked || false
      };

      if (editingProductId) {
        store.updateProduct(editingProductId, productPayload);
        showToast("Garment details updated successfully", "success");
      } else {
        store.addProduct(productPayload);
        showToast("New luxury garment added to catalog", "success");
      }

      document.getElementById("product-editor-modal")?.classList.remove("active");
      refreshProductsTable();
    });
  }
}

function refreshProductsTable() {
  const container = document.querySelector(".admin-content");
  if (container) {
    container.innerHTML = renderAdminProducts();
    initAdminProductsEvents();
  }
}

window.openAddProductModal = function() {
  editingProductId = null;
  const modal = document.getElementById("product-editor-modal");
  const title = document.getElementById("editor-modal-title");
  const form = document.getElementById("product-editor-form");
  if (modal && title && form) {
    title.textContent = "Add New Atelier Garment";
    form.reset();
    document.getElementById("edit-prod-images").value = PRESET_FASHION_IMAGES[0];
    document.getElementById("edit-prod-sizes").value = "XS, S, M, L, XL";
    document.getElementById("edit-prod-colors").value = "Obsidian Noir:#111111, Royal Gold:#D4AF37";
    modal.classList.add("active");
  }
};

function openEditProductModal(id) {
  const prod = store.getProductById(id);
  if (!prod) return;

  editingProductId = id;
  const modal = document.getElementById("product-editor-modal");
  const title = document.getElementById("editor-modal-title");

  if (modal && title) {
    title.textContent = `Edit "${prod.title}"`;
    document.getElementById("edit-prod-title").value = prod.title || "";
    document.getElementById("edit-prod-subtitle").value = prod.subtitle || "";
    document.getElementById("edit-prod-category").value = prod.category || "Women";
    document.getElementById("edit-prod-price").value = prod.price || 0;
    document.getElementById("edit-prod-orig-price").value = prod.originalPrice || "";
    document.getElementById("edit-prod-stock").value = prod.stock !== undefined ? prod.stock : 10;
    document.getElementById("edit-prod-badge").value = prod.badge || "";
    document.getElementById("edit-prod-sku").value = prod.sku || "";
    document.getElementById("edit-prod-images").value = (prod.images || []).join("\n");
    document.getElementById("edit-prod-sizes").value = (prod.sizes || []).join(", ");
    document.getElementById("edit-prod-colors").value = (prod.colors || []).map(c => `${c.name}:${c.hex}`).join(", ");
    document.getElementById("edit-prod-desc").value = prod.description || "";
    document.getElementById("edit-prod-fabric").value = prod.fabric || "";
    document.getElementById("edit-prod-featured").checked = !!prod.isFeatured;

    modal.classList.add("active");
  }
}

window.appendPresetImage = function(url) {
  const textarea = document.getElementById("edit-prod-images");
  if (textarea) {
    const current = textarea.value.trim();
    textarea.value = current ? `${current}\n${url}` : url;
    showToast("Preset image appended to gallery", "info");
  }
};
