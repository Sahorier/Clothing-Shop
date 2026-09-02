/**
 * ÉLÉGANCE ATELIER - Admin Dashboard & Main Layout Component
 * Roles: agency-data-visualization-engineer & agency-senior-secops-engineer
 */

import { store } from "../state/store.js";
import { formatCurrency, formatDateTime } from "../utils/formatters.js";
import { escapeHTML } from "../utils/sanitize.js";
import { showToast } from "../utils/notify.js";

export function renderAdminLayout(activeTab = "dashboard", innerContentHtml = "") {
  const settings = store.getSettings();
  const isAuthenticated = store.isAdminAuthenticated();

  if (!isAuthenticated) {
    return renderAdminLoginGateway();
  }

  const tabLabels = {
    dashboard: "Analytics & Overview",
    products: "Products Catalog Management",
    offers: "Offers, Notices & Coupons",
    orders: "Client Orders & Logistics",
    settings: "Store Settings & CMS Content"
  };

  return `
    <div class="admin-wrapper" id="admin-root">
      <!-- Admin Sidebar Navigation -->
      <aside class="admin-sidebar">
        <div class="admin-brand">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
            <svg width="24" height="24" viewBox="0 0 44 44" fill="none" style="flex-shrink: 0;">
              <rect x="2" y="2" width="40" height="40" rx="8" stroke="#C5A880" stroke-width="2" fill="rgba(197, 168, 128, 0.1)"/>
              <path d="M15 13H24.5C27.5 13 29.5 14.5 29.5 17.5C29.5 19.8 28 21.2 26 21.8C28.5 22.5 30.5 24.2 30.5 27.5C30.5 30.8 28 32.5 24.5 32.5H15V13ZM19.2 16.8V21.2H24C25.5 21.2 26.2 20.3 26.2 19C26.2 17.7 25.5 16.8 24 16.8H19.2ZM19.2 24.5V28.8H24.5C26.2 28.8 27 27.8 27 26.6C27 25.4 26.2 24.5 24.5 24.5H19.2Z" fill="#C5A880"/>
            </svg>
            <h4 style="font-family: var(--font-serif); font-size: 1.05rem; letter-spacing: 0.08em; color: #FFFFFF; text-transform: uppercase; margin: 0; line-height: 1.2;">
              ${escapeHTML(settings.storeName || "Brother's Fashion")}
            </h4>
          </div>
          <span style="font-size: 0.6rem; letter-spacing: 0.22em; color: var(--gold-primary); font-weight: 700;">ADMIN MANAGEMENT SUITE</span>
        </div>

        <ul class="admin-nav">
          <li>
            <a href="#admin?tab=dashboard" class="admin-nav-item ${activeTab === "dashboard" ? "active" : ""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Dashboard Overview</span>
            </a>
          </li>

          <li>
            <a href="#admin?tab=products" class="admin-nav-item ${activeTab === "products" ? "active" : ""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Manage Products</span>
            </a>
          </li>

          <li>
            <a href="#admin?tab=offers" class="admin-nav-item ${activeTab === "offers" ? "active" : ""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              <span>Offers & Notices</span>
            </a>
          </li>

          <li>
            <a href="#admin?tab=orders" class="admin-nav-item ${activeTab === "orders" ? "active" : ""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Customer Orders</span>
            </a>
          </li>

          <li>
            <a href="#admin?tab=settings" class="admin-nav-item ${activeTab === "settings" ? "active" : ""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Site CMS & Settings</span>
            </a>
          </li>
        </ul>

        <div class="admin-sidebar-footer">
          <a href="#home" class="btn btn-secondary btn-sm btn-block" style="color: #FFFFFF; border-color: var(--border-dark);">
            &larr; View Live Storefront
          </a>
          <button class="btn btn-secondary btn-sm btn-block" id="btn-admin-logout" style="color: #FF6B6B; border-color: rgba(255,107,107,0.3);">
            Log Out Admin
          </button>
        </div>
      </aside>

      <!-- Main Admin View Area -->
      <main class="admin-main">
        <header class="admin-topbar">
          <div class="admin-page-title-wrap">
            <h3 style="font-size: 1.25rem; color: #FFFFFF;">${escapeHTML(tabLabels[activeTab] || "Admin Suite")}</h3>
            <span style="font-size: 0.75rem; color: var(--gold-light); text-transform: uppercase;">Live Master Portal</span>
          </div>

          <div class="admin-topbar-actions">
            <button class="btn btn-gold btn-sm" onclick="window.openAddProductModal()">
              + Add New Garment
            </button>
            <a href="#home" target="_blank" class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: var(--border-dark);">
              Storefront ↗
            </a>
          </div>
        </header>

        <div class="admin-content">
          ${innerContentHtml || renderDashboardOverview()}
        </div>
      </main>
    </div>
  `;
}

export function renderDashboardOverview() {
  const products = store.getProducts();
  const orders = store.getOrders();
  const settings = store.getSettings();

  const totalRevenue = orders.reduce((sum, o) => sum + (o.paymentStatus === "Paid" ? o.total : 0), 0);
  const lowStockCount = products.filter(p => p.stock <= 5).length;
  const categories = store.getCategories();

  return `
    <div class="fade-in">
      <!-- 1. KPI Metric Cards -->
      <div class="kpi-grid">
        <div class="kpi-card kpi-gold">
          <div class="kpi-header">
            <span class="kpi-title">Total Atelier Revenue</span>
            <span class="kpi-icon">💰</span>
          </div>
          <div class="kpi-value">${formatCurrency(totalRevenue, settings.currency)}</div>
          <div class="kpi-trend">
            <span>↑ 18.4%</span>
            <span style="color: #A1A1AA;">vs previous cycle</span>
          </div>
        </div>

        <div class="kpi-card kpi-success">
          <div class="kpi-header">
            <span class="kpi-title">Client Orders</span>
            <span class="kpi-icon">📦</span>
          </div>
          <div class="kpi-value">${orders.length}</div>
          <div class="kpi-trend">
            <span>↑ 12 New</span>
            <span style="color: #A1A1AA;">this month</span>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-header">
            <span class="kpi-title">Active Luxury Pieces</span>
            <span class="kpi-icon">👗</span>
          </div>
          <div class="kpi-value">${products.length}</div>
          <div style="font-size: 0.75rem; color: #A1A1AA;">Across ${categories.length} Maisons</div>
        </div>

        <div class="kpi-card ${lowStockCount > 0 ? "kpi-warning" : ""}">
          <div class="kpi-header">
            <span class="kpi-title">Low Stock Alerts</span>
            <span class="kpi-icon">⚠️</span>
          </div>
          <div class="kpi-value" style="color: ${lowStockCount > 0 ? "#FBBF24" : "#FFFFFF"};">${lowStockCount}</div>
          <div style="font-size: 0.75rem; color: #A1A1AA;">Garments with &le; 5 units</div>
        </div>
      </div>

      <!-- 2. Visual Analytics Charts -->
      <div class="charts-grid">
        <!-- SVG Revenue Bar Chart -->
        <div class="chart-card">
          <div class="chart-card-header">
            <span class="chart-card-title">Monthly Atelier Revenue (2026)</span>
            <span style="font-size: 0.75rem; color: var(--gold-light);">Audited Performance</span>
          </div>
          <div class="svg-chart-container">
            <svg class="svg-chart" viewBox="0 0 600 220" preserveAspectRatio="none">
              <!-- Grid lines -->
              <line x1="0" y1="40" x2="600" y2="40" stroke="#27272A" stroke-dasharray="4"></line>
              <line x1="0" y1="90" x2="600" y2="90" stroke="#27272A" stroke-dasharray="4"></line>
              <line x1="0" y1="140" x2="600" y2="140" stroke="#27272A" stroke-dasharray="4"></line>
              <line x1="0" y1="190" x2="600" y2="190" stroke="#3F3F46"></line>

              <!-- Monthly Bars (Jan - Aug) -->
              <rect x="25" y="110" width="38" height="80" class="chart-bar" rx="2"><title>Jan: $12,400</title></rect>
              <rect x="95" y="85" width="38" height="105" class="chart-bar" rx="2"><title>Feb: $16,800</title></rect>
              <rect x="165" y="60" width="38" height="130" class="chart-bar" rx="2"><title>Mar: $22,500</title></rect>
              <rect x="235" y="75" width="38" height="115" class="chart-bar" rx="2"><title>Apr: $19,200</title></rect>
              <rect x="305" y="45" width="38" height="145" class="chart-bar" rx="2"><title>May: $28,900</title></rect>
              <rect x="375" y="30" width="38" height="160" class="chart-bar" rx="2"><title>Jun: $34,200</title></rect>
              <rect x="445" y="50" width="38" height="140" class="chart-bar" rx="2"><title>Jul: $26,700</title></rect>
              <rect x="515" y="20" width="38" height="170" class="chart-bar active" rx="2"><title>Aug: $41,800</title></rect>

              <!-- Labels -->
              <text x="44" y="210" fill="#71717A" font-size="11" text-anchor="middle">Jan</text>
              <text x="114" y="210" fill="#71717A" font-size="11" text-anchor="middle">Feb</text>
              <text x="184" y="210" fill="#71717A" font-size="11" text-anchor="middle">Mar</text>
              <text x="254" y="210" fill="#71717A" font-size="11" text-anchor="middle">Apr</text>
              <text x="324" y="210" fill="#71717A" font-size="11" text-anchor="middle">May</text>
              <text x="394" y="210" fill="#71717A" font-size="11" text-anchor="middle">Jun</text>
              <text x="464" y="210" fill="#71717A" font-size="11" text-anchor="middle">Jul</text>
              <text x="534" y="210" fill="var(--gold-light)" font-size="11" font-weight="bold" text-anchor="middle">Aug</text>
            </svg>
          </div>
        </div>

        <!-- Category Distribution Breakdown -->
        <div class="chart-card">
          <div class="chart-card-header">
            <span class="chart-card-title">Category Demand Share</span>
          </div>
          <div class="category-breakdown-list">
            ${categories.map((cat, idx) => {
              const catProds = products.filter(p => p.category.toLowerCase() === cat.slug.toLowerCase());
              const percent = products.length > 0 ? Math.round((catProds.length / products.length) * 100) : 0;
              return `
                <div class="breakdown-row">
                  <div class="breakdown-info">
                    <span>${escapeHTML(cat.name)}</span>
                    <strong style="color: var(--gold-light);">${percent}% (${catProds.length} items)</strong>
                  </div>
                  <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${percent}%;"></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>

      <!-- 3. Recent Orders Quick Table -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <h4 style="font-size: 1.1rem; color: #FFFFFF;">Recent Client Acquisitions</h4>
          <a href="#admin?tab=orders" class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: var(--border-dark);">
            View All Orders &rarr;
          </a>
        </div>

        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Client Name</th>
                <th>Destination</th>
                <th>Total Paid</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              ${orders.slice(0, 5).map(o => `
                <tr>
                  <td><strong style="color: var(--gold-light);">#${escapeHTML(o.id)}</strong></td>
                  <td>${escapeHTML(o.customer.firstName)} ${escapeHTML(o.customer.lastName)}</td>
                  <td>${escapeHTML(o.customer.city)}, ${escapeHTML(o.customer.country)}</td>
                  <td><strong style="font-family: var(--font-serif);">${formatCurrency(o.total, settings.currency)}</strong></td>
                  <td>${escapeHTML(o.paymentMethod)}</td>
                  <td>
                    <span class="status-pill status-${(o.orderStatus || "pending").toLowerCase()}">
                      ${escapeHTML(o.orderStatus || "Pending")}
                    </span>
                  </td>
                  <td style="color: #71717A; font-size: 0.78rem;">${formatDateTime(o.createdAt)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

export function renderAdminLoginGateway() {
  return `
    <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-dark); padding: 1.5rem;">
      <div class="admin-login-card fade-in">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--gold-light); display: block; margin-bottom: 0.5rem;">SECURE MANAGEMENT GATEWAY</span>
          <h2 style="color: #FFFFFF; font-size: 1.7rem; margin-bottom: 0.4rem;">BROTHER'S FASHION</h2>
          <p style="color: #A1A1AA; font-size: 0.86rem;">Enter your administrator password to access the control panel.</p>
        </div>

        <form id="admin-login-form">
          <div class="form-group">
            <label class="form-label" style="color: #D4D4D8;">Admin Password</label>
            <input type="password" class="form-input" id="admin-password-input" placeholder="Enter administrator password" required style="background: #1F1F24; color: #FFFFFF; border-color: #383842;">
          </div>

          <button type="submit" id="btn-admin-submit-auth" class="btn btn-gold btn-block btn-lg" style="margin-top: 1.5rem;">
            Authenticate & Open Suite &rarr;
          </button>
        </form>

        <div style="margin-top: 1.8rem; padding-top: 1.2rem; border-top: 1px solid var(--border-dark); text-align: center;">
          <a href="#home" style="display: inline-block; font-size: 0.84rem; color: #A1A1AA; text-decoration: none;">
            &larr; Return to Storefront
          </a>
        </div>
      </div>
    </div>
  `;
}

export function initAdminDashboardEvents() {
  const loginForm = document.getElementById("admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("btn-admin-submit-auth");
      const pwd = document.getElementById("admin-password-input")?.value;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>⏳ Verifying Credentials...</span>`;
      }

      try {
        const success = await store.loginAdmin(pwd);
        if (success) {
          showToast("Welcome to Brother's Fashion Admin Suite", "success");
          window.location.hash = "#admin?tab=dashboard";
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        } else {
          showToast("Incorrect administrator password. Access denied.", "error");
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Authenticate & Open Suite &rarr;</span>`;
          }
        }
      } catch (err) {
        showToast("Authentication failed. Please check connection.", "error");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Authenticate & Open Suite &rarr;</span>`;
        }
      }
    });
  }

  const logoutBtn = document.getElementById("btn-admin-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      store.logoutAdmin();
      showToast("Logged out from Admin Suite", "info");
      window.location.hash = "#home";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });
  }
}
