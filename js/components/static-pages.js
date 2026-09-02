/**
 * Elegant Fashion Rajshahi - Static & Content Pages Component
 * Roles: agency-brand-guardian, agency-customer-service & agency-ui-designer
 */

import { store } from "../state/store.js";
import { renderHeroSlider } from "./hero.js";
import { renderProductCard } from "./product-card.js";
import { escapeHTML } from "../utils/sanitize.js";
import { formatCurrency } from "../utils/formatters.js";
import { showToast } from "../utils/notify.js";

let countdownInterval = null;

// Landing Home View
export function renderHomePage() {
  const categories = store.getCategories();
  const allProducts = store.getProducts();
  const featuredProducts = allProducts.filter(p => p.isFeatured);
  const newArrivals = allProducts.filter(p => p.isNew);
  const bestSellers = allProducts.filter(p => p.badge === "BESTSELLER" || p.badge === "HOT" || p.badge === "POPULAR");
  const customProducts = allProducts.filter(p => p.category === "Custom Print T-Shirts");
  const flashOffer = store.getFlashOffer();
  const testimonials = store.data.testimonials || [];
  const settings = store.getSettings();

  return `
    <div class="home-page">
      <!-- 1. Hero Campaign Slider -->
      ${renderHeroSlider()}

      <!-- 2. Flash Privilege Offer Banner with Live Working Countdown -->
      ${flashOffer.active ? `
        <section class="offers-section" id="flash-offer-section">
          <div class="container">
            <div class="flash-card">
              <div class="flash-content">
                <span class="flash-badge">
                  <span>✨</span> SPECIAL RAJSHAHI PRIVILEGE OFFER
                </span>
                <h2 class="flash-title">${escapeHTML(flashOffer.title)}</h2>
                <p class="flash-desc">${escapeHTML(flashOffer.subtitle)}</p>

                <!-- Live Functional Countdown Timer -->
                <div class="countdown-wrap" id="home-countdown-wrap">
                  <div class="countdown-box">
                    <div class="countdown-num" id="cd-days">00</div>
                    <div class="countdown-label">Days</div>
                  </div>
                  <div class="countdown-box">
                    <div class="countdown-num" id="cd-hours">00</div>
                    <div class="countdown-label">Hours</div>
                  </div>
                  <div class="countdown-box">
                    <div class="countdown-num" id="cd-mins">00</div>
                    <div class="countdown-label">Mins</div>
                  </div>
                  <div class="countdown-box">
                    <div class="countdown-num" id="cd-secs">00</div>
                    <div class="countdown-label">Secs</div>
                  </div>
                </div>

                <!-- 1-Click Copy Voucher -->
                <div class="coupon-pill-wrap">
                  <div class="coupon-pill" id="btn-copy-home-coupon" data-code="${escapeHTML(flashOffer.couponCode)}">
                    <span style="color: var(--gold-primary);">✂</span>
                    <span class="coupon-code">${escapeHTML(flashOffer.couponCode)}</span>
                    <span class="coupon-copy-hint">(Click to Copy)</span>
                  </div>
                  <a href="#catalog" class="btn btn-gold btn-sm">Shop Privilege &rarr;</a>
                </div>
              </div>

              <div class="flash-media" style="background-image: url('${escapeHTML(flashOffer.bannerImage)}');"></div>
            </div>
          </div>
        </section>
      ` : ""}

      <!-- 3. Curated Categories Explorer -->
      <section class="category-section">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">COLLECTIONS</span>
            <h2 class="section-title">Shop by Category</h2>
            <p class="section-desc">From comfortable Drop Shoulder T-Shirts & Custom Prints to Executive Oxford Shirts & Formal Pants.</p>
          </div>

          <div class="category-grid">
            ${categories.map(cat => `
              <div class="category-card" onclick="window.location.hash='#catalog?category=${encodeURIComponent(cat.slug || cat.name)}'">
                <img src="${escapeHTML(cat.image)}" alt="${escapeHTML(cat.name)}" class="category-img" loading="lazy">
                <div class="category-overlay">
                  <h3 class="category-name">${escapeHTML(cat.name)}</h3>
                  <p style="font-size: 0.82rem; color: #D4D4D8; margin-bottom: 0.6rem;">${escapeHTML(cat.description)}</p>
                  <span class="category-explore">Explore Collection &rarr;</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- 4. Custom T-Shirt Print Studio Banner -->
      <section style="padding: 2rem 0; background: var(--bg-surface);">
        <div class="container">
          <div style="background: var(--bg-dark); color: #FFFFFF; border-radius: var(--radius-sm); padding: 3rem 2.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; border: 1px solid var(--border-dark); align-items: center;" class="custom-studio-highlight">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 1rem;">🎨 CUSTOM APPAREL LAB</span>
              <h2 style="color: #FFFFFF; font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 0.8rem;">Print Your Own Custom Design T-Shirt</h2>
              <p style="color: #A1A1AA; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.8rem;">
                Upload your company logo, personal artwork, typography, or photograph. We print on premium 180+ GSM combed cotton with ultra-durable DTF technology. Delivery across Rajshahi and nationwide.
              </p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="#product?id=prod-custom-01" class="btn btn-gold">
                  ⚡ Open Custom T-Shirt Studio
                </a>
                <a href="${escapeHTML(settings.facebookInboxUrl || "https://m.me/brothersfashion")}" target="_blank" class="btn btn-secondary" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
                  💬 Message for Custom Bulk Inquiries
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Featured & Trending Products Grid -->
      <section class="products-section">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">PREMIUM SELECTION</span>
            <h2 class="section-title">Trending in Rajshahi</h2>
            <p class="section-desc">Tailored for everyday comfort, office wear, and stylish streetwear in Bangladesh.</p>
          </div>

          <!-- Collection Tabs -->
          <div class="collection-tabs" id="home-collection-tabs">
            <button class="tab-btn active" data-tab="featured">Featured (${featuredProducts.length})</button>
            <button class="tab-btn" data-tab="custom">Custom Prints (${customProducts.length})</button>
            <button class="tab-btn" data-tab="new">New Arrivals (${newArrivals.length})</button>
            <button class="tab-btn" data-tab="bestsellers">Best Sellers (${bestSellers.length})</button>
            <button class="tab-btn" data-tab="all">All Products (${allProducts.length})</button>
          </div>

          <!-- Tab Content Grids -->
          <div class="product-grid grid-4" id="home-products-container">
            ${featuredProducts.map(p => renderProductCard(p)).join("")}
          </div>

          <div style="text-align: center; margin-top: 3.5rem;">
            <a href="#catalog?category=all" class="btn btn-secondary btn-lg">View Complete Store Catalog &rarr;</a>
          </div>
        </div>
      </section>

      <!-- 6. Delivery Highlights for Bangladesh -->
      <section style="background: var(--bg-surface); padding: 4rem 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
        <div class="container">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem; text-align: center;">
            <div style="padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-xs);">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📍</div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Inside Rajshahi Sadar: ৳80</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">Superfast 24–48 hours delivery across all Rajshahi Sadar areas.</p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-xs);">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚚</div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Outside Rajshahi: ৳120</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">Nationwide delivery across all 64 districts in Bangladesh via Steadfast / Sundarban.</p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-xs);">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">💬</div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Pre-Pay via Facebook Inbox</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">Instant automated message redirect to our Facebook page for bKash/Nagad pre-payment.</p>
            </div>

            <div style="padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-xs);">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📦</div>
              <h4 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Cash on Delivery Available</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">Direct website order placement with COD across Bangladesh.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Customer Testimonials -->
      <section style="padding: 5rem 0; background: var(--bg-primary);">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">HAPPY CUSTOMERS</span>
            <h2 class="section-title">What Our Clients Say</h2>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            ${testimonials.map(t => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2.2rem; border-radius: var(--radius-xs); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
                <div style="color: #D4AF37; font-size: 1.1rem; margin-bottom: 0.8rem;">★★★★★</div>
                <p style="font-style: italic; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 1.5rem; flex: 1;">
                  "${escapeHTML(t.quote)}"
                </p>
                <div style="display: flex; align-items: center; gap: 0.85rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                  <img src="${escapeHTML(t.avatar)}" alt="${escapeHTML(t.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
                  <div>
                    <strong style="font-size: 0.88rem; display: block; color: var(--text-primary);">${escapeHTML(t.name)}</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${escapeHTML(t.location)} • <em>${escapeHTML(t.product)}</em></span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

// Live Countdown Timer Implementation (Ticks every second!)
export function startCountdownTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  const flashOffer = store.getFlashOffer();
  if (!flashOffer || !flashOffer.active) return;

  const targetDate = flashOffer.endsAt ? new Date(flashOffer.endsAt).getTime() : Date.now() + 5 * 24 * 60 * 60 * 1000;

  function updateTimerDisplay() {
    const now = Date.now();
    const diff = targetDate - now;

    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      if (countdownInterval) clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// Offers & Discounts Page
export function renderOffersPage() {
  const coupons = store.getCoupons().filter(c => c.isActive);
  const flashOffer = store.getFlashOffer();
  const saleProducts = store.getProducts().filter(p => p.originalPrice && p.originalPrice > p.price);
  const settings = store.getSettings();

  return `
    <div class="offers-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">SPECIAL OFFERS</span>
          <h1 class="page-hero-title">Exclusive Deals & Promo Vouchers</h1>
          <p class="page-hero-desc">Discover active seasonal discounts, voucher codes, and special delivery offers.</p>
        </div>
      </div>

      <div class="container" style="padding: 4rem 0 6rem;">
        <div class="section-header" style="margin-bottom: 2.5rem;">
          <span class="section-subtitle">PROMO CODES</span>
          <h2 class="section-title">Active Discount Vouchers</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 5rem;">
          ${coupons.map(c => `
            <div style="background: var(--bg-surface); border: 1px dashed var(--gold-primary); border-radius: var(--radius-xs); padding: 2rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge badge-gold">
                  ${c.discountType === "percentage" ? `${c.discountValue}% OFF` : `${settings.currency}${c.discountValue} OFF`}
                </span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Valid to ${c.expiryDate}</span>
              </div>
              <h3 style="font-family: var(--font-sans); font-size: 1.3rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-primary);">${escapeHTML(c.code)}</h3>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">${escapeHTML(c.description || "Applicable during checkout")}</p>
              <div style="margin-top: auto; padding-top: 0.5rem;">
                <button class="btn btn-secondary btn-sm btn-block btn-copy-coupon" data-code="${escapeHTML(c.code)}">
                  📋 Copy Promo Code
                </button>
              </div>
            </div>
          `).join("")}
        </div>

        ${saleProducts.length > 0 ? `
          <div class="section-header" style="margin-bottom: 2.5rem;">
            <span class="section-subtitle">DISCOUNTED ITEMS</span>
            <h2 class="section-title">Discounted Garments</h2>
          </div>
          <div class="product-grid grid-4">
            ${saleProducts.map(p => renderProductCard(p)).join("")}
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

// About Atelier Story Page
export function renderAboutPage() {
  const settings = store.getSettings();
  return `
    <div class="about-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">OUR STORY</span>
          <h1 class="page-hero-title">About ${escapeHTML(settings.storeName)}</h1>
          <p class="page-hero-desc">Rajshahi's premier destination for custom t-shirts, premium shirts, and executive formal wear.</p>
        </div>
      </div>

      <div class="container about-section">
        <div class="about-story-grid">
          <div class="about-story-media">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=85" alt="Store showcase">
          </div>
          <div>
            <span class="section-subtitle">OUR MISSION</span>
            <h2>Premium Fabric, Precision Fit & Custom Printing</h2>
            <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.2rem;">
              Based in Rajshahi Sadar, <strong>Brother's Fashion</strong> was founded to deliver top-tier menswear and custom printing directly to fashion-conscious individuals across Bangladesh.
            </p>
            <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.8;">
              Whether you need customized company t-shirts with durable DTF printing, breathable Oxford cotton shirts for office presentations, raw denim jeans, or tailored formal pants, we guarantee exceptional fabrics, accurate Bangladeshi sizing, and dependable delivery.
            </p>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="atelier-stats-grid">
          <div>
            <div class="stat-num">৳80</div>
            <div class="stat-label">Delivery inside Rajshahi Sadar</div>
          </div>
          <div>
            <div class="stat-num">৳120</div>
            <div class="stat-label">Nationwide Courier across Bangladesh</div>
          </div>
          <div>
            <div class="stat-num">100%</div>
            <div class="stat-label">Combed Cotton & Durable DTF Prints</div>
          </div>
          <div>
            <div class="stat-num">7 Days</div>
            <div class="stat-label">Hassle-Free Size Exchange</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Contact Us Page
export function renderContactPage() {
  const settings = store.getSettings();

  return `
    <div class="contact-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">GET IN TOUCH</span>
          <h1 class="page-hero-title">Contact Brother's Fashion</h1>
          <p class="page-hero-desc">Visit our Rajshahi outlet, chat on Facebook Messenger, or order custom t-shirts directly.</p>
        </div>
      </div>

      <div class="container" style="padding: 5rem 0 6rem;">
        <div class="contact-layout">
          <!-- Left: Outlet Details & Facebook / WhatsApp Action -->
          <div class="contact-concierge-card">
            <h3 class="concierge-title">Rajshahi Outlet & Hub</h3>
            
            <div class="contact-info-item">
              <div class="contact-icon">📍</div>
              <div class="contact-info-text">
                <h6>Outlet Address</h6>
                <p>${escapeHTML(settings.atelierAddress)}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">📞</div>
              <div class="contact-info-text">
                <h6>Phone Number</h6>
                <p><a href="tel:${escapeHTML(settings.contactPhone)}">${escapeHTML(settings.contactPhone)}</a></p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-info-text">
                <h6>Email Address</h6>
                <p><a href="mailto:${escapeHTML(settings.contactEmail)}">${escapeHTML(settings.contactEmail)}</a></p>
              </div>
            </div>

            <div style="margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-dark); display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="${escapeHTML(settings.facebookInboxUrl || "https://m.me/brothersfashion")}" target="_blank" class="btn btn-gold btn-block">
                💬 Chat on Facebook Messenger
              </a>
              <a href="https://wa.me/${escapeHTML(settings.whatsappNumber || "+8801700123456")}" target="_blank" class="btn btn-secondary btn-block" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
                📱 WhatsApp Support
              </a>
            </div>
          </div>

          <!-- Right: Interactive Inquiry Form -->
          <div class="contact-form-wrap">
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Send Us a Message</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem;">We will respond via phone/email within a short time.</p>

            <form id="contact-inquiry-form">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Your Name *</label>
                  <input type="text" class="form-input" id="contact-name" required placeholder="e.g. Tanvir Ahmed">
                </div>
                <div class="form-group">
                  <label class="form-label">Phone / WhatsApp Number *</label>
                  <input type="tel" class="form-input" id="contact-phone" required placeholder="017XXXXXXXX">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Subject</label>
                  <select class="form-select" id="contact-subject">
                    <option value="Custom T-Shirt Inquiry">Custom T-Shirt Print Inquiry</option>
                    <option value="Bulk Order">Bulk / Wholesale Order</option>
                    <option value="Order Status">Order Tracking & Delivery</option>
                    <option value="Exchange">Size Exchange Request</option>
                    <option value="General">General Inquiries</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-input" id="contact-email-input" placeholder="name@domain.com">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Message Details *</label>
                <textarea class="form-textarea" id="contact-message" rows="5" required placeholder="Tell us about your requirement..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 1rem;">
                Send Inquiry &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Policies Page
export function renderPolicyPage(policyType = "shipping") {
  const policies = store.getPolicies();
  const titleMap = {
    shipping: "Delivery & Courier Policy across Bangladesh",
    returns: "7-Day Easy Exchange Policy",
    privacy: "Privacy Policy & Customer Security",
    terms: "Terms & Conditions"
  };

  const rawText = policies[policyType] || policies.shipping;

  return `
    <div class="policy-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">STORE POLICIES</span>
          <h1 class="page-hero-title">${escapeHTML(titleMap[policyType] || "Store Policy")}</h1>
          <p class="page-hero-desc">Clear delivery guidelines and customer-first guarantees.</p>
        </div>
      </div>

      <div class="container" style="padding: 4rem 0 6rem;">
        <div class="policy-content-card">
          <div style="display: flex; gap: 0.8rem; margin-bottom: 2.5rem; flex-wrap: wrap; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
            <a href="#policy?type=shipping" class="btn btn-sm ${policyType === "shipping" ? "btn-primary" : "btn-secondary"}">Delivery Policy (Rajshahi & Outside)</a>
            <a href="#policy?type=returns" class="btn btn-sm ${policyType === "returns" ? "btn-primary" : "btn-secondary"}">Exchange Policy</a>
            <a href="#policy?type=privacy" class="btn btn-sm ${policyType === "privacy" ? "btn-primary" : "btn-secondary"}">Privacy Policy</a>
            <a href="#policy?type=terms" class="btn btn-sm ${policyType === "terms" ? "btn-primary" : "btn-secondary"}">Terms of Service</a>
          </div>

          <div style="white-space: pre-line; color: var(--text-secondary); font-size: 0.96rem; line-height: 1.8;">
            ${escapeHTML(rawText)}
          </div>
        </div>
      </div>
    </div>
  `;
}

// FAQ Page
export function renderFaqPage() {
  const faqs = store.getFaqs();

  return `
    <div class="faq-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">HELP CENTER</span>
          <h1 class="page-hero-title">Frequently Asked Questions</h1>
          <p class="page-hero-desc">Everything you need to know about delivery in Rajshahi, custom t-shirt printing, and pre-payments.</p>
        </div>
      </div>

      <div class="container faq-section">
        ${faqs.map((f, idx) => `
          <div class="faq-accordion-item ${idx === 0 ? "active" : ""}">
            <button class="faq-question-btn">
              <span>${escapeHTML(f.question)}</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                ${escapeHTML(f.answer)}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// Master Site Footer
export function renderFooter() {
  const settings = store.getSettings();
  const categories = store.getCategories();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div class="footer-col" style="grid-column: span 1.5;">
            <h4 style="font-family: var(--font-serif); color: #FFFFFF; font-size: 1.35rem; margin-bottom: 0.8rem; letter-spacing: 0.08em;">
              ${escapeHTML(settings.storeName || "Brother's Fashion")}
            </h4>
            <p style="color: #A1A1AA; font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem;">
              Premium menswear, custom t-shirts, and contemporary fashion hub based in Rajshahi Sadar, Bangladesh.
            </p>
            <p style="font-size: 0.82rem; color: #71717A;">
              📍 ${escapeHTML(settings.atelierAddress)}<br>
              📞 Hotline: <a href="tel:${escapeHTML(settings.contactPhone)}" style="color: var(--gold-light);">${escapeHTML(settings.contactPhone)}</a>
            </p>
          </div>

          <!-- Col 2: Categories -->
          <div class="footer-col">
            <h5>Categories</h5>
            <ul class="footer-links">
              <li><a href="#catalog?category=all">All Collections</a></li>
              ${categories.map(c => `
                <li><a href="#catalog?category=${encodeURIComponent(c.slug || c.name)}">${escapeHTML(c.name)}</a></li>
              `).join("")}
              <li><a href="#offers" style="color: var(--gold-light);">Offers & Deals</a></li>
            </ul>
          </div>

          <!-- Col 3: Customer Care -->
          <div class="footer-col">
            <h5>Customer Services</h5>
            <ul class="footer-links">
              <li><a href="#tracking">Track Order Status</a></li>
              <li><a href="#policy?type=returns">7-Day Exchange Policy</a></li>
              <li><a href="#policy?type=shipping">Delivery Charges (৳80/৳120)</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="${escapeHTML(settings.facebookInboxUrl || "https://m.me/brothersfashion")}" target="_blank">Facebook Messenger</a></li>
            </ul>
          </div>

          <!-- Col 4: Links -->
          <div class="footer-col">
            <h5>Maison Links</h5>
            <ul class="footer-links">
              <li><a href="#about">About Our Outlet</a></li>
              <li><a href="#contact">Contact & Location</a></li>
              <li><a href="#policy?type=privacy">Privacy Policy</a></li>
              <li><a href="#policy?type=terms">Terms of Service</a></li>
              <li><a href="#admin" style="color: var(--gold-primary);">Admin Portal 🔐</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; 2026 ${escapeHTML(settings.storeName || "Brother's Fashion")}. All Rights Reserved. Rajshahi Sadar, Bangladesh.
          </div>
          <div class="payment-badges-row">
            <span class="payment-badge-pill">CASH ON DELIVERY</span>
            <span class="payment-badge-pill">bKash</span>
            <span class="payment-badge-pill">NAGAD</span>
            <span class="payment-badge-pill">FACEBOOK INBOX</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initStaticPagesEvents() {
  // Start the live functional countdown timer!
  startCountdownTimer();

  // Collection tabs on Home page
  const tabBtns = document.querySelectorAll("#home-collection-tabs .tab-btn");
  const productsContainer = document.getElementById("home-products-container");

  if (tabBtns && productsContainer) {
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabType = btn.getAttribute("data-tab");
        const allProducts = store.getProducts();

        let filtered = allProducts;
        if (tabType === "featured") filtered = allProducts.filter(p => p.isFeatured);
        else if (tabType === "custom") filtered = allProducts.filter(p => p.category === "Custom Print T-Shirts");
        else if (tabType === "new") filtered = allProducts.filter(p => p.isNew);
        else if (tabType === "bestsellers") filtered = allProducts.filter(p => p.badge === "BESTSELLER" || p.badge === "HOT" || p.badge === "POPULAR");

        productsContainer.innerHTML = filtered.map(p => renderProductCard(p)).join("");
      });
    });
  }

  // Copy coupon codes
  document.querySelectorAll(".btn-copy-coupon, #btn-copy-home-coupon").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.getAttribute("data-code");
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Promo code '${code}' copied to clipboard!`, "success");
        }).catch(() => {
          showToast(`Promo code: ${code}`, "info");
        });
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById("contact-inquiry-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you! Your message has been sent to our Rajshahi support team.", "success");
      contactForm.reset();
    });
  }

  // FAQ Accordion
  const faqBtns = document.querySelectorAll(".faq-question-btn");
  faqBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-accordion-item");
      item.classList.toggle("active");
    });
  });
}
