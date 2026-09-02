/**
 * Brother's Fashion - Admin Products Management Component
 * With Full Device Image Upload & Drag-and-Drop Gallery Support
 * Role: agency-frontend-developer & agency-senior-secops-engineer
 */

import { store } from "../state/store.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

// Curated high-res fashion image presets for optional 1-click fallback
const PRESET_FASHION_IMAGES = [
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85"
];

let editingProductId = null;
let modalImages = [];

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
                <option value="${escapeHTML(c.slug || c.name)}" ${filterCategory.toLowerCase() === (c.slug || c.name).toLowerCase() ? "selected" : ""}>
                  ${escapeHTML(c.name)}
                </option>
              `).join("")}
            </select>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: center;">
            <span style="font-size: 0.84rem; color: #A1A1AA;">
              Total Products: <strong>${products.length}</strong>
            </span>
            <button class="btn btn-gold btn-sm" onclick="openAddProductModal()">
              + Add New Garment
            </button>
          </div>
        </div>

        <!-- Products Table -->
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Garment / Photo</th>
                <th>Category</th>
                <th>Price & Stock</th>
                <th>Badge</th>
                <th>Featured</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="6" style="text-align: center; padding: 3rem; color: #71717A;">No garments match search criteria.</td>
                </tr>
              ` : filtered.map(p => {
                const primaryImage = (p.images && p.images[0]) || PRESET_FASHION_IMAGES[0];
                return `
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <img src="${escapeHTML(primaryImage)}" alt="${escapeHTML(p.title)}" style="width: 44px; height: 56px; object-fit: cover; border-radius: var(--radius-xs); border: 1px solid var(--border-dark);">
                        <div>
                          <strong style="color: #FFFFFF; font-size: 0.95rem; display: block;">${escapeHTML(p.title)}</strong>
                          <span style="font-size: 0.75rem; color: #71717A;">SKU: ${escapeHTML(p.sku || "BF-AUTO")}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge" style="background: #27272A; color: #D4D4D8; font-size: 0.72rem;">${escapeHTML(p.category)}</span>
                    </td>
                    <td>
                      <div style="font-size: 0.95rem; font-weight: 700; color: #FFFFFF;">
                        ${formatCurrency(p.price, settings.currency)}
                        ${p.originalPrice ? `<span style="font-size: 0.78rem; text-decoration: line-through; color: #71717A; font-weight: 400; margin-left: 4px;">${formatCurrency(p.originalPrice, settings.currency)}</span>` : ""}
                      </div>
                      <div style="font-size: 0.75rem; color: ${p.stock <= 5 ? "#F87171" : "#4ADE80"}; font-weight: 600;">
                        ${p.stock} units in stock
                      </div>
                    </td>
                    <td>
                      ${p.badge ? `<span class="badge badge-gold" style="font-size: 0.68rem;">${escapeHTML(p.badge)}</span>` : `<span style="color: #52525B; font-size: 0.8rem;">—</span>`}
                    </td>
                    <td>
                      <label class="admin-toggle-switch">
                        <input type="checkbox" class="toggle-featured-cb" data-id="${p.id}" ${p.isFeatured ? "checked" : ""}>
                        <span class="admin-toggle-slider"></span>
                      </label>
                    </td>
                    <td style="text-align: right;">
                      <div class="table-action-btns" style="justify-content: flex-end;">
                        <button class="btn-icon-action btn-edit-product" data-id="${p.id}" title="Edit Garment Details & Photos">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </button>
                        <button class="btn-icon-action btn-duplicate-product" data-id="${p.id}" title="Duplicate Product">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                        <button class="btn-icon-action btn-delete-product" data-id="${p.id}" title="Delete Garment" style="color: #EF4444;">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Product Create / Edit Modal with Device Image Uploader -->
    <div class="modal-overlay" id="product-editor-modal">
      <div class="modal-window" style="max-width: 680px; max-height: 90vh; display: flex; flex-direction: column;">
        <div class="modal-header">
          <h3 class="modal-title" id="editor-modal-title">Add New Atelier Garment</h3>
          <button class="modal-close" onclick="document.getElementById('product-editor-modal').classList.remove('active')">&times;</button>
        </div>

        <form id="product-editor-form" style="overflow-y: auto; flex: 1; display: flex; flex-direction: column;">
          <div class="modal-body" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
            <!-- Title & Subtitle -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Garment Title *</label>
                <input type="text" class="form-input" id="edit-prod-title" required placeholder="e.g. Premium Drop Shoulder T-Shirt" style="background: #222228; color: #FFFFFF; border-color: #383842;">
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
              <input type="text" class="form-input" id="edit-prod-subtitle" placeholder="e.g. Heavyweight 240 GSM organic combed cotton" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>

            <!-- Price & Stock -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Price (${settings.currency || '৳'}) *</label>
                <input type="number" step="1" class="form-input" id="edit-prod-price" required placeholder="590" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Original / Strikethrough Price (${settings.currency || '৳'})</label>
                <input type="number" step="1" class="form-input" id="edit-prod-orig-price" placeholder="750" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Stock Quantity *</label>
                <input type="number" class="form-input" id="edit-prod-stock" required value="15" style="background: #222228; color: #FFFFFF; border-color: #383842;">
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
                  <option value="CUSTOM LAB">CUSTOM LAB</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">SKU Reference</label>
                <input type="text" class="form-input" id="edit-prod-sku" placeholder="BF-TSH-001" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <!-- PRODUCT IMAGES UPLOAD ZONE & GALLERY -->
            <div class="form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                <label class="form-label" style="color: #A1A1AA; margin-bottom: 0;">Product Photos * (Upload Images from Device)</label>
                <button type="button" id="btn-toggle-manual-url" style="background: none; border: none; color: var(--gold-light); font-size: 0.78rem; cursor: pointer; text-decoration: underline;">
                  🔗 Or Paste Image URL
                </button>
              </div>

              <!-- Drag & Drop / Click to Upload Box -->
              <div id="product-dropzone" class="product-dropzone">
                <input type="file" id="prod-file-input" accept="image/jpeg,image/png,image/webp,image/gif" multiple style="display: none;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.4rem; pointer-events: none;">
                  <div style="width: 42px; height: 42px; border-radius: 50%; background: rgba(212, 175, 55, 0.15); display: flex; align-items: center; justify-content: center; color: var(--gold-light);">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                  </div>
                  <strong style="color: #FFFFFF; font-size: 0.92rem;">Click to Upload or Drag & Drop Product Photos</strong>
                  <span style="font-size: 0.76rem; color: #A1A1AA;">Supports JPG, PNG, WEBP, GIF · Multi-file supported</span>
                </div>
              </div>

              <!-- Uploading Progress Indicator -->
              <div id="upload-progress-bar" style="display: none; margin-top: 0.5rem; background: #2A2A32; border-radius: 4px; overflow: hidden; height: 4px;">
                <div class="upload-bar-active" style="height: 100%; width: 100%; background: var(--gold-light);"></div>
              </div>

              <!-- Collapsible Manual URL input -->
              <div id="manual-url-container" style="display: none; margin-top: 0.75rem; padding: 0.75rem; background: #18181E; border-radius: var(--radius-sm); border: 1px solid #33333D;">
                <label style="color: #A1A1AA; font-size: 0.76rem; display: block; margin-bottom: 0.3rem;">Paste Image URL:</label>
                <div style="display: flex; gap: 0.5rem;">
                  <input type="text" id="manual-image-url-input" placeholder="https://images.unsplash.com/..." class="form-input" style="background: #222228; color: #FFFFFF; border-color: #383842; font-size: 0.8rem;">
                  <button type="button" class="btn btn-secondary btn-sm" id="btn-add-manual-url">Add Photo</button>
                </div>
                <div style="margin-top: 0.6rem;">
                  <span style="font-size: 0.72rem; color: #71717A; display: block; margin-bottom: 0.3rem;">Or click a preset sample photo:</span>
                  <div class="preset-gallery-grid" style="max-height: 80px; padding: 0.4rem;">
                    ${PRESET_FASHION_IMAGES.map(img => `
                      <img src="${escapeHTML(img)}" class="preset-thumb" onclick="appendPresetImage('${escapeHTML(img)}')" title="Use preset photo" loading="lazy">
                    `).join("")}
                  </div>
                </div>
              </div>

              <!-- Selected Images Gallery Grid -->
              <div style="margin-top: 0.8rem;">
                <span style="font-size: 0.75rem; color: #A1A1AA; font-weight: 600; display: block; margin-bottom: 0.4rem;">Selected Photos (First image is Main Cover):</span>
                <div id="prod-image-preview-grid" style="display: flex; gap: 0.6rem; flex-wrap: wrap;"></div>
              </div>
            </div>

            <!-- Sizes & Colors -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Available Sizes (Comma-separated)</label>
                <input type="text" class="form-input" id="edit-prod-sizes" value="M, L, XL, XXL" placeholder="M, L, XL, XXL" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Color Options (e.g. Black:#111, White:#FFF)</label>
                <input type="text" class="form-input" id="edit-prod-colors" value="Obsidian Black:#111111, Pure White:#FFFFFF" placeholder="Name:#Hex, Name:#Hex" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <!-- Description & Fabric -->
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Product Description</label>
              <textarea class="form-textarea" id="edit-prod-desc" rows="3" placeholder="Describe the fit, styling, and fabric details..." style="background: #222228; color: #FFFFFF; border-color: #383842;"></textarea>
            </div>

            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Fabric & Material Details</label>
              <input type="text" class="form-input" id="edit-prod-fabric" placeholder="e.g. 100% Combed Compact Cotton, 220 GSM" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; color: #FFFFFF;">
                <input type="checkbox" id="edit-prod-featured" style="width: 18px; height: 18px;">
                <span>Show in Featured Showcase on Homepage</span>
              </label>
            </div>
          </div>

          <div class="modal-footer" style="background: #17171C; border-color: var(--border-dark);">
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('product-editor-modal').classList.remove('active')">Cancel</button>
            <button type="submit" class="btn btn-gold btn-sm" id="btn-save-product">Save Product</button>
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
      showToast(cb.checked ? "Product added to Featured Showcase" : "Removed from Featured Showcase", "info");
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
        copy.sku = `BF-${Math.floor(100 + Math.random() * 900)}`;
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
      if (confirm(`Are you sure you wish to delete "${prod?.title || "this product"}" from the catalog?`)) {
        store.deleteProduct(id);
        showToast("Product removed from catalog", "info");
        refreshProductsTable();
      }
    });
  });

  // Setup Image Dropzone & File Input
  const dropzone = document.getElementById("product-dropzone");
  const fileInput = document.getElementById("prod-file-input");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", async (e) => {
      if (e.target.files && e.target.files.length > 0) {
        await handleFilesUpload(e.target.files);
        fileInput.value = "";
      }
    });

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", async (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        await handleFilesUpload(e.dataTransfer.files);
      }
    });
  }

  // Toggle manual URL container
  const toggleUrlBtn = document.getElementById("btn-toggle-manual-url");
  const manualUrlContainer = document.getElementById("manual-url-container");
  if (toggleUrlBtn && manualUrlContainer) {
    toggleUrlBtn.addEventListener("click", () => {
      const isVisible = manualUrlContainer.style.display !== "none";
      manualUrlContainer.style.display = isVisible ? "none" : "block";
      toggleUrlBtn.textContent = isVisible ? "🔗 Or Paste Image URL" : "✕ Close URL Input";
    });
  }

  // Add Manual URL button
  const addUrlBtn = document.getElementById("btn-add-manual-url");
  const manualUrlInput = document.getElementById("manual-image-url-input");
  if (addUrlBtn && manualUrlInput) {
    addUrlBtn.addEventListener("click", () => {
      const url = manualUrlInput.value.trim();
      if (url) {
        modalImages.push(url);
        renderModalImagesGallery();
        manualUrlInput.value = "";
        showToast("Photo added to gallery!", "info");
      }
    });
  }

  // Editor Form Submit
  const editorForm = document.getElementById("product-editor-form");
  if (editorForm) {
    editorForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (modalImages.length === 0) {
        showToast("Please upload or add at least one product photo", "error");
        return;
      }

      const saveBtn = document.getElementById("btn-save-product");
      if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.innerHTML = `<span>⏳ Saving Product...</span>`;
      }

      const sizesInput = document.getElementById("edit-prod-sizes")?.value || "";
      const sizesArr = sizesInput.split(",").map(s => s.trim()).filter(Boolean);

      const colorsInput = document.getElementById("edit-prod-colors")?.value || "";
      const colorsArr = colorsInput.split(",").map(c => {
        const parts = c.split(":");
        return {
          name: parts[0]?.trim() || "Obsidian Black",
          hex: parts[1]?.trim() || "#111111"
        };
      }).filter(c => c.name);

      const productPayload = {
        title: document.getElementById("edit-prod-title")?.value || "Brother's Fashion Garment",
        subtitle: document.getElementById("edit-prod-subtitle")?.value || "",
        category: document.getElementById("edit-prod-category")?.value || "Men's Collection",
        price: parseFloat(document.getElementById("edit-prod-price")?.value) || 500,
        originalPrice: parseFloat(document.getElementById("edit-prod-orig-price")?.value) || null,
        stock: parseInt(document.getElementById("edit-prod-stock")?.value, 10) || 10,
        badge: document.getElementById("edit-prod-badge")?.value || "",
        sku: document.getElementById("edit-prod-sku")?.value || "",
        images: modalImages,
        sizes: sizesArr,
        colors: colorsArr,
        description: document.getElementById("edit-prod-desc")?.value || "",
        fabric: document.getElementById("edit-prod-fabric")?.value || "",
        isFeatured: document.getElementById("edit-prod-featured")?.checked || false
      };

      try {
        if (editingProductId) {
          await store.updateProduct(editingProductId, productPayload);
          showToast("Garment details & photos updated successfully", "success");
        } else {
          await store.addProduct(productPayload);
          showToast("New product listed in catalog with uploaded photos", "success");
        }

        document.getElementById("product-editor-modal")?.classList.remove("active");
        refreshProductsTable();
      } catch (err) {
        showToast(err.message || "Failed to save product", "error");
      } finally {
        if (saveBtn) {
          saveBtn.disabled = false;
          saveBtn.innerHTML = `Save Product`;
        }
      }
    });
  }
}

// Upload Files Handler
async function handleFilesUpload(files) {
  if (!files || files.length === 0) return;

  const progressBar = document.getElementById("upload-progress-bar");
  if (progressBar) progressBar.style.display = "block";

  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append("images[]", file);
  });

  try {
    const res = await fetch("./api/upload.php", {
      method: "POST",
      headers: {
        "X-Admin-Token": store.getAdminToken()
      },
      body: formData
    });

    const data = await res.json();
    if (res.ok && data.success && Array.isArray(data.images)) {
      data.images.forEach(url => {
        if (!modalImages.includes(url)) {
          modalImages.push(url);
        }
      });
      renderModalImagesGallery();
      showToast(`${data.images.length} photo(s) uploaded successfully!`, "success");
    } else {
      throw new Error(data.error || "Server upload failed");
    }
  } catch (err) {
    // Offline / Local Dev Fallback: Convert to Data URLs
    let count = 0;
    for (const file of Array.from(files)) {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl && !modalImages.includes(dataUrl)) {
        modalImages.push(dataUrl);
        count++;
      }
    }
    renderModalImagesGallery();
    showToast(`${count} photo(s) loaded from device!`, "success");
  } finally {
    if (progressBar) progressBar.style.display = "none";
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function renderModalImagesGallery() {
  const grid = document.getElementById("prod-image-preview-grid");
  if (!grid) return;

  if (modalImages.length === 0) {
    grid.innerHTML = `<span style="font-size: 0.78rem; color: #71717A;">No photos uploaded yet. Upload from your device above.</span>`;
    return;
  }

  grid.innerHTML = modalImages.map((img, idx) => `
    <div class="prod-thumb-item" style="position: relative; width: 72px; height: 92px; border-radius: 6px; overflow: hidden; border: 2px solid ${idx === 0 ? 'var(--gold-light)' : '#3F3F46'}; background: #000;">
      <img src="${escapeHTML(img)}" style="width: 100%; height: 100%; object-fit: cover;">
      ${idx === 0 ? '<span style="position: absolute; bottom: 0; left: 0; right: 0; background: var(--gold-light); color: #000; font-size: 0.58rem; font-weight: 700; text-align: center; padding: 2px 0;">COVER</span>' : ''}
      <button type="button" onclick="removeModalImage(${idx})" style="position: absolute; top: 2px; right: 2px; width: 18px; height: 18px; border-radius: 50%; background: rgba(0,0,0,0.75); color: #FFF; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; line-height: 1;">✕</button>
    </div>
  `).join("");
}

window.removeModalImage = function(index) {
  if (modalImages[index]) {
    modalImages.splice(index, 1);
    renderModalImagesGallery();
  }
};

window.appendPresetImage = function(url) {
  if (!modalImages.includes(url)) {
    modalImages.push(url);
    renderModalImagesGallery();
    showToast("Preset photo added to gallery", "info");
  }
};

function refreshProductsTable() {
  const container = document.querySelector(".admin-content");
  if (container) {
    container.innerHTML = renderAdminProducts();
    initAdminProductsEvents();
  }
}

window.openAddProductModal = function() {
  editingProductId = null;
  modalImages = [];
  const modal = document.getElementById("product-editor-modal");
  const title = document.getElementById("editor-modal-title");
  const form = document.getElementById("product-editor-form");
  if (modal && title && form) {
    title.textContent = "Add New Garment to Catalog";
    form.reset();
    modal.classList.add("active");
    renderModalImagesGallery();
  }
};

function openEditProductModal(id) {
  const prod = store.getProductById(id);
  if (!prod) return;

  editingProductId = id;
  modalImages = Array.isArray(prod.images) ? [...prod.images] : [];
  const modal = document.getElementById("product-editor-modal");
  const title = document.getElementById("editor-modal-title");

  if (modal && title) {
    title.textContent = `Edit "${prod.title}"`;
    document.getElementById("edit-prod-title").value = prod.title || "";
    document.getElementById("edit-prod-subtitle").value = prod.subtitle || "";
    document.getElementById("edit-prod-category").value = prod.category || "Men's Collection";
    document.getElementById("edit-prod-price").value = prod.price || 0;
    document.getElementById("edit-prod-orig-price").value = prod.originalPrice || "";
    document.getElementById("edit-prod-stock").value = prod.stock !== undefined ? prod.stock : 10;
    document.getElementById("edit-prod-badge").value = prod.badge || "";
    document.getElementById("edit-prod-sku").value = prod.sku || "";
    document.getElementById("edit-prod-sizes").value = (prod.sizes || []).join(", ");
    document.getElementById("edit-prod-colors").value = (prod.colors || []).map(c => `${c.name}:${c.hex}`).join(", ");
    document.getElementById("edit-prod-desc").value = prod.description || "";
    document.getElementById("edit-prod-fabric").value = prod.fabric || "";
    document.getElementById("edit-prod-featured").checked = !!prod.isFeatured;

    modal.classList.add("active");
    renderModalImagesGallery();
  }
}
