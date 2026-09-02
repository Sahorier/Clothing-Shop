/**
 * Elegant Fashion Rajshahi - Single Product Detail & Custom Print Studio Component
 * Roles: agency-ui-designer, agency-frontend-developer & agency-ux-architect
 */

import { store } from "../state/store.js";
import { formatCurrency, calculateDiscountPercent } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { renderProductCard } from "./product-card.js";
import { showToast } from "../utils/notify.js";

let selectedCustomDesignInfo = "Standard Print";
let uploadedDesignDataUrl = null;

export function renderProductDetail(productId) {
  const product = store.getProductById(productId) || store.getProducts()[0];
  if (!product) {
    return `<div class="container" style="padding: 5rem 0; text-align: center;"><h2>Product Not Found</h2><p>The requested garment is currently unavailable.</p><a href="#catalog" class="btn btn-gold" style="margin-top: 1.5rem;">Return to Collections</a></div>`;
  }

  const settings = store.getSettings();
  const isWishlisted = store.isInWishlist(product.id);
  const discountPercent = calculateDiscountPercent(product.originalPrice, product.price);
  const relatedProducts = store.getProducts()
    .filter(p => p.id !== product.id && (p.category === product.category || p.isFeatured))
    .slice(0, 4);

  const defaultColor = (product.colors && product.colors.length > 0) ? product.colors[0].name : "Standard";
  const defaultSize = (product.sizes && product.sizes.length > 0) ? product.sizes[0] : "Standard";
  const isCustomizable = product.isCustomizable || product.category === "Custom Print T-Shirts";
  const presetDesigns = store.getPresetDesigns();

  return `
    <div class="product-detail-page">
      <div class="container">
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-nav">
          <a href="#home">Home</a> / 
          <a href="#catalog?category=${encodeURIComponent(product.category)}">${escapeHTML(product.category)}</a> / 
          <span>${escapeHTML(product.title)}</span>
        </div>

        <div class="product-detail-layout">
          <!-- Left Column: Gallery & Interactive T-Shirt Mockup -->
          <div class="gallery-wrapper">
            <div class="thumbnail-strip">
              ${(product.images || []).map((imgUrl, idx) => `
                <div class="thumb-item ${idx === 0 ? "active" : ""}" data-image-src="${escapeHTML(imgUrl)}">
                  <img src="${escapeHTML(imgUrl)}" alt="${escapeHTML(product.title)} thumbnail ${idx + 1}" loading="lazy">
                </div>
              `).join("")}
            </div>

            <!-- Main Viewport with Custom Print Live Mockup Overlay -->
            <div class="main-viewport" id="product-main-viewport" style="position: relative;">
              <img src="${escapeHTML(product.images[0])}" alt="${escapeHTML(product.title)}" id="product-main-image">
              
              ${isCustomizable ? `
                <div id="custom-design-mockup-overlay" style="position: absolute; top: 32%; left: 50%; transform: translate(-50%, -50%); width: 38%; height: 35%; display: flex; align-items: center; justify-content: center; pointer-events: none; border: 1px dashed rgba(197, 168, 128, 0.4); border-radius: 4px; padding: 4px; z-index: 5;">
                  <span id="custom-overlay-placeholder" style="font-size: 0.75rem; color: #FFFFFF; background: rgba(0,0,0,0.6); padding: 4px 8px; border-radius: 2px; text-align: center;">Live Print Area</span>
                  <img id="custom-overlay-img" src="" alt="Custom artwork preview" style="display: none; width: 100%; height: 100%; object-fit: contain;">
                </div>
              ` : ""}
            </div>
          </div>

          <!-- Right Column: Info, Custom Studio & Order Options -->
          <div class="product-info-panel">
            <div class="detail-badge-wrap">
              ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${escapeHTML(product.badge)}</span>` : ""}
              ${discountPercent > 0 ? `<span class="badge badge-sale">SAVE ${discountPercent}%</span>` : ""}
              <span class="badge badge-secondary">SKU: ${escapeHTML(product.sku || "EFR-001")}</span>
            </div>

            <h1 class="detail-title">${escapeHTML(product.title)}</h1>
            ${product.subtitle ? `<p class="detail-subtitle">${escapeHTML(product.subtitle)}</p>` : ""}

            <!-- Rating Stars -->
            <div class="detail-rating">
              <div class="stars">
                ${"★".repeat(Math.round(product.rating || 5))}
              </div>
              <span style="font-weight: 600;">${product.rating || 5.0}</span>
              <span style="color: var(--text-muted);">(${product.reviewCount || 1} verified client reviews)</span>
            </div>

            <!-- Price Display -->
            <div class="detail-price-box">
              <span class="detail-price">${formatCurrency(product.price, settings.currency)}</span>
              ${product.originalPrice && product.originalPrice > product.price ? `
                <span class="detail-price-orig">${formatCurrency(product.originalPrice, settings.currency)}</span>
              ` : ""}
            </div>

            <!-- Delivery Fee Notice -->
            <div style="background: var(--bg-secondary); padding: 0.85rem 1.2rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem; font-size: 0.82rem; border: 1px solid var(--border-light);">
              🚚 <strong>Delivery:</strong> ৳${settings.insideRajshahiFee || 80} inside Rajshahi Sadar | ৳${settings.outsideRajshahiFee || 120} outside Rajshahi (Nationwide).
            </div>

            <!-- Stock Status -->
            <div class="stock-indicator">
              <span class="stock-dot ${product.stock <= 5 ? "low" : ""}"></span>
              <span>${product.stock > 0 ? (product.stock <= 5 ? `Limited Stock — Only ${product.stock} pieces remaining` : "Available in Rajshahi Hub") : "Currently Made to Order"}</span>
            </div>

            <!-- Custom Print Studio Section (For Customizable T-Shirts) -->
            ${isCustomizable ? `
              <div class="custom-studio-panel">
                <h4 class="custom-studio-title">
                  <span>🎨</span> Custom T-Shirt Design Studio
                </h4>
                <p class="custom-studio-desc">
                  Upload your own logo/image, choose from our design presets, or contact us for free design support.
                </p>

                <!-- Method A: Upload Artwork — Touch-Friendly -->
                <div class="custom-studio-section">
                  <label class="custom-studio-label">1. Upload Your Design / Logo / Photo</label>
                  <label class="custom-file-upload-btn" for="custom-design-file-input">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <span id="upload-file-label-text">Tap to choose image (PNG / JPG)</span>
                  </label>
                  <input type="file" id="custom-design-file-input" accept="image/*" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;">
                </div>

                <!-- Method B: Preset Graphics Library -->
                <div class="custom-studio-section">
                  <label class="custom-studio-label">2. Or Pick from Design Collection</label>
                  <div class="preset-grid">
                    ${presetDesigns.map(des => `
                      <div class="preset-design-card" data-preset-name="${escapeHTML(des.name)}" data-preset-img="${escapeHTML(des.thumbnail)}">
                        <img src="${escapeHTML(des.thumbnail)}" alt="${escapeHTML(des.name)}" class="preset-thumb">
                        <span class="preset-name">${escapeHTML(des.name)}</span>
                      </div>
                    `).join("")}
                  </div>
                </div>

                <!-- Method C: Print Notes -->
                <div class="custom-studio-section">
                  <label class="custom-studio-label">3. Print Placement & Instructions</label>
                  <input type="text" class="form-input" id="custom-design-notes" placeholder="e.g. Front Chest Print / Large Back Print">
                </div>

                <!-- Method D: Facebook Contact -->
                <div class="custom-studio-fb-link">
                  <a href="${escapeHTML(settings.facebookInboxUrl || "https://m.me/brothersfashion")}" target="_blank">
                    💬 Need custom design help? Message us on Facebook
                  </a>
                </div>
              </div>
            ` : ""}


            <!-- Color Swatches Selection -->
            ${product.colors && product.colors.length > 0 ? `
              <div class="option-section">
                <div class="option-header">
                  <span class="option-label">Color: <strong id="selected-color-label" style="color: var(--text-primary); font-family: var(--font-sans);">${escapeHTML(defaultColor)}</strong></span>
                </div>
                <div class="detail-color-swatches" id="color-swatches-container">
                  ${product.colors.map((c, idx) => `
                    <button class="color-option-btn ${idx === 0 ? "active" : ""}" 
                            style="background-color: ${escapeHTML(c.hex)};" 
                            data-color-name="${escapeHTML(c.name)}" 
                            title="${escapeHTML(c.name)}"></button>
                  `).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Size Selection & Size Guide Modal -->
            ${product.sizes && product.sizes.length > 0 ? `
              <div class="option-section">
                <div class="option-header">
                  <span class="option-label">Bangladeshi Size: <strong id="selected-size-label" style="color: var(--text-primary); font-family: var(--font-sans);">${escapeHTML(defaultSize)}</strong></span>
                  <button class="size-guide-link" id="btn-open-size-guide">Bangladeshi Size Chart</button>
                </div>
                <div class="detail-size-options" id="size-options-container">
                  ${product.sizes.map((sz, idx) => `
                    <button class="size-option-btn ${idx === 0 ? "active" : ""}" data-size-val="${escapeHTML(sz)}">${escapeHTML(sz)}</button>
                  `).join("")}
                </div>
              </div>
            ` : ""}

            <!-- Quantity & Purchase Actions -->
            <div class="purchase-actions-wrap">
              <div class="qty-and-cart-row">
                <div class="qty-stepper">
                  <button class="qty-btn" id="btn-qty-minus">-</button>
                  <input type="text" class="qty-input" id="detail-qty-input" value="1" readonly>
                  <button class="qty-btn" id="btn-qty-plus">+</button>
                </div>

                <button class="btn btn-primary btn-add-cart" id="btn-detail-add-cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  Add to Bag
                </button>

                <button class="wishlist-toggle ${isWishlisted ? "active" : ""}" id="btn-detail-wishlist" style="position: static; width: 52px; height: 52px; border: 1px solid var(--border-light); border-radius: var(--radius-xs);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWishlisted ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              <!-- Action 1: Cash on Delivery (COD) Direct Website Checkout -->
              <button class="btn btn-gold btn-buy-now btn-block" id="btn-detail-buy-now">
                📦 Cash on Delivery (Direct Checkout)
              </button>

              <!-- Action 2: Pre-Pay via Facebook Page Inbox Redirect -->
              <button class="btn btn-secondary btn-block" id="btn-detail-fb-prepay" style="background: #1877F2; color: #FFFFFF; border-color: #1877F2; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.6rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.84 7.08V22l3.68-2.02c.79.22 1.62.34 2.48.34 5.52 0 10-4.03 10-9s-4.48-9-10-9zm1.08 12.15l-2.55-2.73-4.98 2.73 5.48-5.82 2.61 2.73 4.92-2.73-5.48 5.82z"/>
                </svg>
                💬 Pre-Pay via Facebook Inbox (bKash/Nagad)
              </button>
            </div>

            <!-- Accordions -->
            <div class="product-accordion">
              <div class="accordion-item active">
                <button class="accordion-trigger">
                  <span>Product Description & Features</span>
                  <span class="accordion-icon">▾</span>
                </button>
                <div class="accordion-body">
                  <div class="accordion-body-inner">
                    <p>${escapeHTML(product.description)}</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-trigger">
                  <span>Fabric & Care Instructions</span>
                  <span class="accordion-icon">▾</span>
                </button>
                <div class="accordion-body">
                  <div class="accordion-body-inner">
                    <p>${escapeHTML(product.fabric || "100% Combed Cotton / Premium Fabric. Machine wash cold, iron inside out.")}</p>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <button class="accordion-trigger">
                  <span>Delivery & Exchange Policy</span>
                  <span class="accordion-icon">▾</span>
                </button>
                <div class="accordion-body">
                  <div class="accordion-body-inner">
                    <p>${escapeHTML(product.deliveryInfo || "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120. 7-day hassle free size exchange.")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products Section -->
        ${relatedProducts.length > 0 ? `
          <div style="margin-top: 6rem; padding-top: 4rem; border-top: 1px solid var(--border-light);">
            <div class="section-header">
              <span class="section-subtitle">RECOMMENDED FOR YOU</span>
              <h2 class="section-title">Similar Items</h2>
            </div>
            <div class="product-grid grid-4">
              ${relatedProducts.map(p => renderProductCard(p)).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    </div>

    <!-- Bangladeshi Size Guide Modal -->
    <div class="modal-overlay" id="size-guide-modal">
      <div class="modal-window">
        <div class="modal-header">
          <h3 class="modal-title">Bangladeshi Standard Size Chart</h3>
          <button class="modal-close" onclick="document.getElementById('size-guide-modal').classList.remove('active')">&times;</button>
        </div>
        <div class="modal-body">
          <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">T-Shirts & Shirts Sizing (Inches)</h4>
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (Around)</th>
                <th>Length</th>
                <th>Sleeve</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>M</td><td>38" - 39"</td><td>27.5"</td><td>8" / 24"</td></tr>
              <tr><td>L</td><td>40" - 41"</td><td>28.5"</td><td>8.5" / 25"</td></tr>
              <tr><td>XL</td><td>42" - 43"</td><td>29.5"</td><td>9" / 25.5"</td></tr>
              <tr><td>XXL</td><td>44" - 45"</td><td>30.5"</td><td>9.5" / 26"</td></tr>
            </tbody>
          </table>

          <h4 style="font-size: 0.95rem; margin: 1.5rem 0 0.5rem;">Pants, Trousers & Formal Pants Sizing (Inches)</h4>
          <table class="size-table">
            <thead>
              <tr>
                <th>Waist Size</th>
                <th>Hip</th>
                <th>Thigh</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>28</td><td>36"</td><td>21"</td><td>39"</td></tr>
              <tr><td>30</td><td>38"</td><td>22"</td><td>40"</td></tr>
              <tr><td>32</td><td>40"</td><td>23"</td><td>40.5"</td></tr>
              <tr><td>34</td><td>42"</td><td>24"</td><td>41"</td></tr>
              <tr><td>36</td><td>44"</td><td>25"</td><td>41.5"</td></tr>
              <tr><td>38</td><td>46"</td><td>26"</td><td>42"</td></tr>
            </tbody>
          </table>

          <div style="margin-top: 1.5rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-xs); font-size: 0.84rem;">
            <strong>Need help with sizing?</strong> Contact our Rajshahi team directly on Facebook Messenger or WhatsApp for instant sizing assistance.
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initProductDetailEvents(productId) {
  const product = store.getProductById(productId) || store.getProducts()[0];
  if (!product) return;

  const mainImg = document.getElementById("product-main-image");
  const mainViewport = document.getElementById("product-main-viewport");
  const thumbItems = document.querySelectorAll(".thumb-item");

  thumbItems.forEach(item => {
    item.addEventListener("click", () => {
      thumbItems.forEach(t => t.classList.remove("active"));
      item.classList.add("active");
      const newSrc = item.getAttribute("data-image-src");
      if (mainImg) mainImg.src = newSrc;
    });
  });

  // Custom T-Shirt Studio Logic
  const fileInput = document.getElementById("custom-design-file-input");
  const overlayImg = document.getElementById("custom-overlay-img");
  const overlayPlaceholder = document.getElementById("custom-overlay-placeholder");
  const customNotesInput = document.getElementById("custom-design-notes");

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const labelText = document.getElementById("upload-file-label-text");
        if (labelText) labelText.textContent = `✅ ${file.name}`;
        const reader = new FileReader();
        reader.onload = (evt) => {
          uploadedDesignDataUrl = evt.target.result;
          if (overlayImg && overlayPlaceholder) {
            overlayImg.src = uploadedDesignDataUrl;
            overlayImg.style.display = "block";
            overlayPlaceholder.style.display = "none";
          }
          selectedCustomDesignInfo = `Uploaded Custom Design File: ${file.name}`;
          showToast(`Custom artwork '${file.name}' attached to mockup!`, "success");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Preset design cards
  document.querySelectorAll(".preset-design-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".preset-design-card").forEach(c => c.style.borderColor = "var(--border-light)");
      card.style.borderColor = "var(--gold-primary)";

      const desName = card.getAttribute("data-preset-name");
      const desImg = card.getAttribute("data-preset-img");
      selectedCustomDesignInfo = `Preset Design: ${desName}`;
      uploadedDesignDataUrl = desImg;

      if (overlayImg && overlayPlaceholder) {
        overlayImg.src = desImg;
        overlayImg.style.display = "block";
        overlayPlaceholder.style.display = "none";
      }
      showToast(`Selected '${desName}' design preset`, "info");
    });
  });

  // Color Selection
  let activeColor = (product.colors && product.colors.length > 0) ? product.colors[0].name : "Standard";
  const colorBtns = document.querySelectorAll(".color-option-btn");
  const colorLabel = document.getElementById("selected-color-label");

  colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      colorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeColor = btn.getAttribute("data-color-name");
      if (colorLabel) colorLabel.textContent = activeColor;
    });
  });

  // Size Selection
  let activeSize = (product.sizes && product.sizes.length > 0) ? product.sizes[0] : "Standard";
  const sizeBtns = document.querySelectorAll(".size-option-btn");
  const sizeLabel = document.getElementById("selected-size-label");

  sizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSize = btn.getAttribute("data-size-val");
      if (sizeLabel) sizeLabel.textContent = activeSize;
    });
  });

  // Quantity Controls
  let quantity = 1;
  const qtyInput = document.getElementById("detail-qty-input");
  const minusBtn = document.getElementById("btn-qty-minus");
  const plusBtn = document.getElementById("btn-qty-plus");

  if (minusBtn && plusBtn && qtyInput) {
    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyInput.value = quantity;
      }
    });

    plusBtn.addEventListener("click", () => {
      const maxStock = product.stock || 99;
      if (quantity < maxStock) {
        quantity++;
        qtyInput.value = quantity;
      } else {
        showToast(`Maximum stock allocation reached (${maxStock} pieces)`, "warning");
      }
    });
  }

  // Add to Bag Event
  const addCartBtn = document.getElementById("btn-detail-add-cart");
  if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
      const notes = customNotesInput ? customNotesInput.value.trim() : "";
      const finalCustomInfo = notes ? `${selectedCustomDesignInfo} (${notes})` : selectedCustomDesignInfo;

      store.addToCart({
        productId: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        size: activeSize,
        color: activeColor,
        customDesignInfo: finalCustomInfo,
        customDesignImage: uploadedDesignDataUrl,
        quantity: quantity
      });
      showToast(`Added ${quantity}x ${product.title} (${activeSize}) to your bag`, "success");
      const overlay = document.getElementById("cart-drawer-overlay");
      if (overlay) overlay.classList.add("active");
    });
  }

  // Cash on Delivery (Direct Website Checkout)
  const buyNowBtn = document.getElementById("btn-detail-buy-now");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      const notes = customNotesInput ? customNotesInput.value.trim() : "";
      const finalCustomInfo = notes ? `${selectedCustomDesignInfo} (${notes})` : selectedCustomDesignInfo;

      window.openDirectCheckout({
        productId: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        size: activeSize,
        color: activeColor,
        customDesignInfo: finalCustomInfo,
        customDesignImage: uploadedDesignDataUrl,
        quantity: quantity
      });
    });
  }

  // Pre-Pay via Facebook Page Inbox Redirect
  const fbPrepayBtn = document.getElementById("btn-detail-fb-prepay");
  if (fbPrepayBtn) {
    fbPrepayBtn.addEventListener("click", () => {
      const notes = customNotesInput ? customNotesInput.value.trim() : "";
      const finalCustomInfo = notes ? `${selectedCustomDesignInfo} (${notes})` : selectedCustomDesignInfo;
      const settings = store.getSettings();
      const subtotal = product.price * quantity;
      const deliveryCharge = store.getDeliveryFee(subtotal, "inside"); // Default to inside or general
      const totalAmount = subtotal + deliveryCharge;

      const fbUrl = store.generateFacebookOrderUrl({
        productName: product.title,
        size: activeSize,
        color: activeColor,
        quantity: quantity,
        productPrice: subtotal,
        deliveryCharge: deliveryCharge,
        deliveryLocation: "Inside Rajshahi (৳80) / Outside (৳120)",
        totalAmount: totalAmount,
        customerAddress: "[Enter your address in chat]",
        customerCity: "Rajshahi / Bangladesh",
        customerPhone: "[Enter your phone in chat]",
        customDesignInfo: finalCustomInfo
      });

      showToast("Redirecting to Brother's Fashion Facebook Messenger...", "info");
      window.open(fbUrl, "_blank");
    });
  }

  // Wishlist Toggle
  const wishlistBtn = document.getElementById("btn-detail-wishlist");
  if (wishlistBtn) {
    wishlistBtn.addEventListener("click", () => {
      const added = store.toggleWishlist(product.id);
      wishlistBtn.classList.toggle("active", added);
      wishlistBtn.querySelector("svg").setAttribute("fill", added ? "currentColor" : "none");
      showToast(added ? "Added to your Wishlist" : "Removed from Wishlist", "info");
    });
  }

  // Accordion Toggles
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      item.classList.toggle("active");
    });
  });

  // Size guide trigger
  const sizeGuideBtn = document.getElementById("btn-open-size-guide");
  const sizeGuideModal = document.getElementById("size-guide-modal");
  if (sizeGuideBtn && sizeGuideModal) {
    sizeGuideBtn.addEventListener("click", () => {
      sizeGuideModal.classList.add("active");
    });
  }
}
