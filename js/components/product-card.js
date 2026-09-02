/**
 * ÉLÉGANCE ATELIER - Reusable Product Card Component
 * Roles: agency-ui-designer & agency-frontend-developer
 */

import { store } from "../state/store.js";
import { formatCurrency, calculateDiscountPercent } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";

export function renderProductCard(product) {
  const settings = store.getSettings();
  const isWishlisted = store.isInWishlist(product.id);
  const discountPercent = calculateDiscountPercent(product.originalPrice, product.price);

  return `
    <div class="product-card fade-in" data-product-id="${product.id}">
      <div class="product-media">
        <a href="#product?id=${product.id}">
          <img src="${escapeHTML(product.images[0])}" alt="${escapeHTML(product.title)}" class="product-img" loading="lazy">
        </a>

        <!-- Badges -->
        <div class="product-badges">
          ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${escapeHTML(product.badge)}</span>` : ""}
          ${discountPercent > 0 ? `<span class="badge badge-sale">-${discountPercent}%</span>` : ""}
        </div>

        <!-- Wishlist Button -->
        <button class="wishlist-toggle ${isWishlisted ? "active" : ""}" data-wishlist-id="${product.id}" title="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <!-- Hover Quick Actions -->
        <div class="product-hover-actions">
          <button class="btn-quick-add" data-quick-add-id="${product.id}">
            + Add to Bag
          </button>
          <a href="#product?id=${product.id}" class="btn-quick-view" title="View details">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div class="product-details">
        <div class="product-category-meta">${escapeHTML(product.category)}</div>
        <h4 class="product-title">
          <a href="#product?id=${product.id}">${escapeHTML(product.title)}</a>
        </h4>
        ${product.subtitle ? `<p class="product-subtitle-meta">${escapeHTML(product.subtitle)}</p>` : ""}

        <!-- Color Swatch Dots -->
        ${product.colors && product.colors.length > 0 ? `
          <div class="product-swatches">
            ${product.colors.map(c => `
              <span class="swatch-dot" style="background-color: ${escapeHTML(c.hex)};" title="${escapeHTML(c.name)}"></span>
            `).join("")}
          </div>
        ` : ""}

        <div class="product-footer">
          <div class="price-wrap">
            <span class="price-current">${formatCurrency(product.price, settings.currency)}</span>
            ${product.originalPrice && product.originalPrice > product.price ? `
              <span class="price-original">${formatCurrency(product.originalPrice, settings.currency)}</span>
            ` : ""}
          </div>
          ${product.stock !== undefined && product.stock <= 5 ? `
            <span style="font-size: 0.7rem; color: var(--color-warning); font-weight: 700;">Only ${product.stock} left</span>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}
