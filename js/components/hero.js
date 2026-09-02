/**
 * ÉLÉGANCE ATELIER - Hero Carousel Component
 * Roles: agency-ui-designer & agency-brand-guardian
 */

import { store } from "../state/store.js";
import { escapeHTML } from "../utils/sanitize.js";

let heroInterval = null;
let currentSlideIndex = 0;

export function renderHeroSlider() {
  const banners = store.getHeroBanners();
  if (!banners || banners.length === 0) return "";

  return `
    <section class="hero-section" id="hero-slider">
      ${banners.map((b, idx) => `
        <div class="hero-slide ${idx === 0 ? "active" : ""}" data-slide="${idx}">
          <div class="hero-bg" style="background-image: url('${escapeHTML(b.image)}');"></div>
          <div class="hero-overlay"></div>
          <div class="container" style="height: 100%; display: flex; align-items: center;">
            <div class="hero-content">
              <span class="hero-tagline">${escapeHTML(b.tagline || "HAUTE COUTURE")}</span>
              <h1 class="hero-title">${escapeHTML(b.title)}</h1>
              <p class="hero-subtitle">${escapeHTML(b.subtitle)}</p>
              <div class="hero-buttons">
                <a href="${escapeHTML(b.ctaPrimaryLink || "#catalog")}" class="btn btn-gold btn-lg">
                  ${escapeHTML(b.ctaPrimaryText || "Explore Collection")}
                </a>
                <a href="${escapeHTML(b.ctaSecondaryLink || "#offers")}" class="btn btn-secondary btn-lg" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
                  ${escapeHTML(b.ctaSecondaryText || "Private Privilege")}
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join("")}

      <div class="hero-controls">
        ${banners.map((_, idx) => `
          <div class="hero-bullet ${idx === 0 ? "active" : ""}" data-target="${idx}" title="Slide ${idx + 1}"></div>
        `).join("")}
      </div>
    </section>
  `;
}

export function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const bullets = document.querySelectorAll(".hero-bullet");
  if (slides.length <= 1) return;

  function goToSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    bullets.forEach((b) => b.classList.remove("active"));
    
    currentSlideIndex = (index + slides.length) % slides.length;
    if (slides[currentSlideIndex]) slides[currentSlideIndex].classList.add("active");
    if (bullets[currentSlideIndex]) bullets[currentSlideIndex].classList.add("active");
  }

  bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
      const target = parseInt(bullet.getAttribute("data-target"), 10);
      goToSlide(target);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    heroInterval = setInterval(() => {
      goToSlide(currentSlideIndex + 1);
    }, 6000);
  }

  function resetAutoPlay() {
    if (heroInterval) clearInterval(heroInterval);
    startAutoPlay();
  }

  startAutoPlay();
}
