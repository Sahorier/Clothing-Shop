/**
 * ÉLÉGANCE ATELIER - Catalog & Category Products View Component
 * Roles: agency-frontend-developer & agency-ux-architect
 */

import { store } from "../state/store.js";
import { renderProductCard } from "./product-card.js";
import { formatCurrency } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderCatalogView(queryParams = {}) {
  const settings = store.getSettings();
  const allCategories = store.getCategories();
  const allProducts = store.getProducts();

  const selectedCategory = queryParams.category || "all";
  const searchQuery = (queryParams.search || "").toLowerCase();
  const isWishlistView = queryParams.wishlist === "true";
  const maxPrice = Number(queryParams.maxPrice) || 3000;
  const selectedSize = queryParams.size || "";
  const selectedColor = queryParams.color || "";
  const sortBy = queryParams.sort || "featured";

  // Filter products
  let filtered = allProducts.filter((p) => {
    if (isWishlistView && !store.isInWishlist(p.id)) return false;
    if (selectedCategory !== "all" && p.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    if (searchQuery && !p.title.toLowerCase().includes(searchQuery) && !p.category.toLowerCase().includes(searchQuery) && !(p.tags && p.tags.some(t => t.toLowerCase().includes(searchQuery)))) return false;
    if (p.price > maxPrice) return false;
    if (selectedSize && (!p.sizes || !p.sizes.includes(selectedSize))) return false;
    if (selectedColor && (!p.colors || !p.colors.some(c => c.name.toLowerCase() === selectedColor.toLowerCase()))) return false;
    return true;
  });

  // Sort products
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy === "newest") {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  // Extract available sizes & colors from catalog
  const availableSizes = Array.from(new Set(allProducts.flatMap(p => p.sizes || []))).slice(0, 10);
  const availableColors = Array.from(new Set(allProducts.flatMap(p => (p.colors || []).map(c => c.name)))).slice(0, 8);

  const activeCategoryObj = allCategories.find(c => c.slug.toLowerCase() === selectedCategory.toLowerCase() || c.name.toLowerCase() === selectedCategory.toLowerCase());
  const bannerTitle = isWishlistView
    ? "My Private Wishlist"
    : searchQuery
    ? `Search Results for "${escapeHTML(searchQuery)}"`
    : activeCategoryObj
    ? `${activeCategoryObj.name} Collection`
    : "All Haute Couture & Collections";

  const bannerDesc = isWishlistView
    ? "Your curated personal selection of atelier garments and luxury pieces."
    : activeCategoryObj
    ? activeCategoryObj.description
    : "Explore bespoke tailoring, evening gowns, structured leather accessories, and runway creations.";

  return `
    <div class="catalog-page">
      <div class="container">
        <!-- Header -->
        <div class="catalog-header">
          <div>
            <span class="section-subtitle">${isWishlistView ? "SAVED CURATIONS" : "HAUTE COUTURE CATALOG"}</span>
            <h1 class="section-title">${escapeHTML(bannerTitle)}</h1>
            <p class="section-desc">${escapeHTML(bannerDesc)}</p>
          </div>
          <div class="breadcrumb-nav">
            <a href="#home">Home</a> / <span>${escapeHTML(selectedCategory.toUpperCase())}</span>
          </div>
        </div>

        <div class="catalog-layout">
          <!-- Sidebar Faceted Filters -->
          <aside class="filter-sidebar">
            <!-- Categories Filter -->
            <div class="filter-group">
              <h5 class="filter-heading">Categories</h5>
              <ul class="category-filter-list">
                <li class="category-filter-item ${selectedCategory === "all" ? "active" : ""}" onclick="window.location.hash='#catalog?category=all'">
                  <span>All Collections</span>
                  <span class="badge badge-secondary">${allProducts.length}</span>
                </li>
                ${allCategories.map(c => {
                  const count = allProducts.filter(p => p.category.toLowerCase() === c.slug.toLowerCase()).length;
                  return `
                    <li class="category-filter-item ${selectedCategory.toLowerCase() === c.slug.toLowerCase() ? "active" : ""}" onclick="window.location.hash='#catalog?category=${encodeURIComponent(c.slug)}'">
                      <span>${escapeHTML(c.name)}</span>
                      <span class="badge badge-secondary">${count}</span>
                    </li>
                  `;
                }).join("")}
              </ul>
            </div>

            <!-- Price Range Filter -->
            <div class="filter-group">
              <h5 class="filter-heading">Price Range (Max)</h5>
              <input type="range" class="price-range-slider" id="filter-price-slider" min="100" max="3000" step="50" value="${maxPrice}">
              <div class="price-range-values">
                <span>${settings.currency}100</span>
                <span id="slider-price-label" style="font-weight: 700; color: var(--gold-dark);">${formatCurrency(maxPrice, settings.currency)}</span>
                <span>${settings.currency}3000+</span>
              </div>
            </div>

            <!-- Size Filter -->
            ${availableSizes.length > 0 ? `
              <div class="filter-group">
                <h5 class="filter-heading">Size</h5>
                <div class="size-filter-grid">
                  <button class="size-pill ${selectedSize === "" ? "active" : ""}" onclick="updateCatalogFilter('size', '')">All</button>
                  ${availableSizes.map(sz => `
                    <button class="size-pill ${selectedSize === sz ? "active" : ""}" onclick="updateCatalogFilter('size', '${escapeHTML(sz)}')">${escapeHTML(sz)}</button>
                  `).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Colors Filter -->
            ${availableColors.length > 0 ? `
              <div class="filter-group">
                <h5 class="filter-heading">Color</h5>
                <div class="size-filter-grid">
                  <button class="size-pill ${selectedColor === "" ? "active" : ""}" onclick="updateCatalogFilter('color', '')">All</button>
                  ${availableColors.map(col => `
                    <button class="size-pill ${selectedColor.toLowerCase() === col.toLowerCase() ? "active" : ""}" onclick="updateCatalogFilter('color', '${escapeHTML(col)}')">${escapeHTML(col)}</button>
                  `).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Reset Filters -->
            <button class="btn btn-secondary btn-sm btn-block" style="margin-top: 1rem;" onclick="window.location.hash='#catalog?category=all'">
              Clear All Filters
            </button>
          </aside>

          <!-- Products Main Listing Area -->
          <main class="catalog-main-area">
            <!-- Toolbar -->
            <div class="catalog-toolbar">
              <span class="results-count">Showing <strong>${filtered.length}</strong> luxury creations</span>
              
              <div class="sort-select-wrap">
                <label for="catalog-sort" style="font-size: 0.8rem; font-weight: 600;">Sort By:</label>
                <select id="catalog-sort" class="sort-select" onchange="updateCatalogFilter('sort', this.value)">
                  <option value="featured" ${sortBy === "featured" ? "selected" : ""}>Featured Ateliers</option>
                  <option value="price-low" ${sortBy === "price-low" ? "selected" : ""}>Price: Low to High</option>
                  <option value="price-high" ${sortBy === "price-high" ? "selected" : ""}>Price: High to Low</option>
                  <option value="rating" ${sortBy === "rating" ? "selected" : ""}>Highest Rated</option>
                  <option value="newest" ${sortBy === "newest" ? "selected" : ""}>New Arrivals</option>
                </select>
              </div>
            </div>

            <!-- Products Grid -->
            ${filtered.length > 0 ? `
              <div class="product-grid grid-4" id="catalog-products-grid">
                ${filtered.map(p => renderProductCard(p)).join("")}
              </div>
            ` : `
              <div style="background: var(--bg-surface); padding: 4rem 2rem; text-align: center; border: 1px solid var(--border-light); border-radius: var(--radius-xs);">
                <h3 style="font-size: 1.4rem; margin-bottom: 0.6rem;">No garments match your active filters</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try adjusting your size, color, or price range filters to view our full collection.</p>
                <button class="btn btn-gold btn-sm" onclick="window.location.hash='#catalog?category=all'">View All Pieces</button>
              </div>
            `}
          </main>
        </div>
      </div>
    </div>
  `;
}

export function initCatalogEvents() {
  const slider = document.getElementById("filter-price-slider");
  const label = document.getElementById("slider-price-label");
  if (slider && label) {
    slider.addEventListener("input", (e) => {
      const val = e.target.value;
      const settings = store.getSettings();
      label.textContent = formatCurrency(val, settings.currency);
    });

    slider.addEventListener("change", (e) => {
      window.updateCatalogFilter("maxPrice", e.target.value);
    });
  }
}

// Global helper for filter updates
window.updateCatalogFilter = function(key, value) {
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes("?") ? hash.split("?")[1] : "");
  if (!value) {
    urlParams.delete(key);
  } else {
    urlParams.set(key, value);
  }
  const category = urlParams.get("category") || "all";
  urlParams.set("category", category);
  window.location.hash = `#catalog?${urlParams.toString()}`;
};
