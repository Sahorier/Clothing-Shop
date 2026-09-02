/**
 * Reactive State Manager with LocalStorage Persistence & Pub/Sub Event Bus
 * Localized for Elegant Fashion Rajshahi (Bangladesh)
 */

import { INITIAL_STORE_DATA } from "../data/initial-data.js";
import { generateId } from "../utils/formatters.js";

const STORAGE_KEY = "BROTHERS_FASHION_V1";
const CART_STORAGE_KEY = "BROTHERS_CART_V1";
const WISHLIST_STORAGE_KEY = "BROTHERS_WISHLIST_V1";
const ADMIN_AUTH_KEY = "BROTHERS_ADMIN_AUTH";

class Store {
  constructor() {
    this.listeners = new Map();
    this.data = this.loadData();
    this.cart = this.loadCart();
    this.wishlist = this.loadWishlist();
    this.appliedCoupon = null;
  }

  // Pub/Sub Event Bus
  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
    return () => this.listeners.get(event).delete(callback);
  }

  publish(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach((cb) => {
        try {
          cb(data);
        } catch (err) {
          console.error(`Error in subscriber for event ${event}:`, err);
        }
      });
    }
  }

  // Persistence
  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.settings && (parsed.settings.storeName === "Brother's Fashion" || parsed.settings.storeName === "Elegant Fashion Rajshahi")) {
          parsed.settings.storeName = "Brother's Fashion";
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to parse stored store data, falling back to defaults", e);
    }
    this.saveData(INITIAL_STORE_DATA);
    return JSON.parse(JSON.stringify(INITIAL_STORE_DATA));
  }

  saveData(data = this.data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      this.data = data;
    } catch (e) {
      console.error("Failed to persist store data to localStorage", e);
    }
  }

  loadCart() {
    try {
      const cart = localStorage.getItem(CART_STORAGE_KEY);
      return cart ? JSON.parse(cart) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
      this.publish("cart:updated", this.cart);
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }

  loadWishlist() {
    try {
      const w = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return w ? JSON.parse(w) : [];
    } catch (e) {
      return [];
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.wishlist));
      this.publish("wishlist:updated", this.wishlist);
    } catch (e) {
      console.error("Failed to save wishlist", e);
    }
  }

  // Settings
  getSettings() {
    return this.data.settings || INITIAL_STORE_DATA.settings;
  }

  updateSettings(newSettings) {
    this.data.settings = { ...this.data.settings, ...newSettings };
    this.saveData();
    this.publish("settings:updated", this.data.settings);
  }

  // Calculate Rajshahi Delivery Fees (Inside: ৳80, Outside: ৳120)
  getDeliveryFee(subtotal = 0, locationType = "inside") {
    const settings = this.getSettings();
    const threshold = settings.freeShippingThreshold || 2000;
    if (subtotal > 0 && subtotal >= threshold) {
      return 0; // Free Shipping
    }
    return locationType === "outside"
      ? (settings.outsideRajshahiFee || 120)
      : (settings.insideRajshahiFee || 80);
  }

  // Generate Facebook Messenger URL with filled template message
  generateFacebookOrderUrl(orderParams) {
    const settings = this.getSettings();
    const template = settings.facebookTemplateMessage || INITIAL_STORE_DATA.settings.facebookTemplateMessage;
    const inboxUrl = settings.facebookInboxUrl || "https://m.me/brothersfashion";

    let message = template
      .replace(/{product_name}/g, orderParams.productName || "Product")
      .replace(/{size}/g, orderParams.size || "Standard")
      .replace(/{color}/g, orderParams.color || "Standard")
      .replace(/{quantity}/g, orderParams.quantity || "1")
      .replace(/{product_price}/g, orderParams.productPrice || "0")
      .replace(/{delivery_charge}/g, orderParams.deliveryCharge || "80")
      .replace(/{delivery_location}/g, orderParams.deliveryLocation || "Inside Rajshahi (৳80)")
      .replace(/{total_amount}/g, orderParams.totalAmount || "0")
      .replace(/{customer_address}/g, orderParams.customerAddress || "Address")
      .replace(/{customer_city}/g, orderParams.customerCity || "Rajshahi")
      .replace(/{customer_phone}/g, orderParams.customerPhone || "017XXXXXXXX")
      .replace(/{custom_design_info}/g, orderParams.customDesignInfo || "None (Standard Design)");

    const encoded = encodeURIComponent(message);
    // Messenger text parameter format
    return `${inboxUrl}?text=${encoded}`;
  }

  // Preset Designs
  getPresetDesigns() {
    return this.data.presetDesigns || INITIAL_STORE_DATA.presetDesigns;
  }

  // Notices
  getNotices() {
    return this.data.notices || INITIAL_STORE_DATA.notices;
  }

  updateNotices(notices) {
    this.data.notices = { ...this.data.notices, ...notices };
    this.saveData();
    this.publish("notices:updated", this.data.notices);
  }

  // Hero Banners
  getHeroBanners() {
    return this.data.heroBanners || INITIAL_STORE_DATA.heroBanners;
  }

  updateHeroBanners(banners) {
    this.data.heroBanners = banners;
    this.saveData();
    this.publish("hero:updated", this.data.heroBanners);
  }

  // Flash Offer
  getFlashOffer() {
    return this.data.flashOffer || INITIAL_STORE_DATA.flashOffer;
  }

  updateFlashOffer(offer) {
    this.data.flashOffer = { ...this.data.flashOffer, ...offer };
    this.saveData();
    this.publish("offer:updated", this.data.flashOffer);
  }

  // Categories
  getCategories() {
    return this.data.categories || [];
  }

  addCategory(category) {
    const id = category.id || `cat-${Date.now()}`;
    const newCat = { ...category, id };
    this.data.categories.push(newCat);
    this.saveData();
    this.publish("categories:updated", this.data.categories);
    return newCat;
  }

  updateCategory(id, updates) {
    const idx = this.data.categories.findIndex((c) => c.id === id || c.slug === id);
    if (idx !== -1) {
      this.data.categories[idx] = { ...this.data.categories[idx], ...updates };
      this.saveData();
      this.publish("categories:updated", this.data.categories);
      return this.data.categories[idx];
    }
    return null;
  }

  deleteCategory(id) {
    this.data.categories = this.data.categories.filter((c) => c.id !== id && c.slug !== id);
    this.saveData();
    this.publish("categories:updated", this.data.categories);
  }

  // Products CRUD
  getProducts() {
    return this.data.products || [];
  }

  getProductById(id) {
    return this.data.products.find((p) => p.id === id || p.sku === id);
  }

  addProduct(productData) {
    const id = productData.id || `prod-${Date.now()}`;
    const sku = productData.sku || `EFR-${Math.floor(100 + Math.random() * 900)}`;
    const newProduct = {
      ...productData,
      id,
      sku,
      rating: productData.rating || 5.0,
      reviewCount: productData.reviewCount || 1,
      createdAt: new Date().toISOString()
    };
    this.data.products.unshift(newProduct);
    this.saveData();
    this.publish("products:updated", this.data.products);
    return newProduct;
  }

  updateProduct(id, updates) {
    const idx = this.data.products.findIndex((p) => p.id === id);
    if (idx !== -1) {
      this.data.products[idx] = { ...this.data.products[idx], ...updates };
      this.saveData();
      this.publish("products:updated", this.data.products);
      this.publish(`product:${id}:updated`, this.data.products[idx]);
      return this.data.products[idx];
    }
    return null;
  }

  deleteProduct(id) {
    this.data.products = this.data.products.filter((p) => p.id !== id);
    this.saveData();
    this.publish("products:updated", this.data.products);
  }

  // Coupons
  getCoupons() {
    return this.data.coupons || [];
  }

  addCoupon(coupon) {
    const id = coupon.id || `coup-${Date.now()}`;
    const newCoupon = { ...coupon, id, isActive: coupon.isActive !== false };
    this.data.coupons.push(newCoupon);
    this.saveData();
    this.publish("coupons:updated", this.data.coupons);
    return newCoupon;
  }

  updateCoupon(id, updates) {
    const idx = this.data.coupons.findIndex((c) => c.id === id);
    if (idx !== -1) {
      this.data.coupons[idx] = { ...this.data.coupons[idx], ...updates };
      this.saveData();
      this.publish("coupons:updated", this.data.coupons);
      return this.data.coupons[idx];
    }
    return null;
  }

  deleteCoupon(id) {
    this.data.coupons = this.data.coupons.filter((c) => c.id !== id);
    this.saveData();
    this.publish("coupons:updated", this.data.coupons);
  }

  validateCoupon(code, subtotal) {
    if (!code) return { valid: false, message: "Please enter a promo code." };
    const cleanCode = code.trim().toUpperCase();
    const coupon = this.getCoupons().find((c) => c.code.toUpperCase() === cleanCode && c.isActive);

    if (!coupon) {
      return { valid: false, message: "Invalid or expired promo code." };
    }

    if (coupon.minSpend && subtotal < coupon.minSpend) {
      return {
        valid: false,
        message: `This code requires a minimum spend of ${this.getSettings().currency}${coupon.minSpend}.`
      };
    }

    let discountAmount = 0;
    if (coupon.discountType === "percentage") {
      discountAmount = (subtotal * coupon.discountValue) / 100;
    } else {
      discountAmount = Math.min(coupon.discountValue, subtotal);
    }

    return {
      valid: true,
      coupon,
      discountAmount,
      message: `Promo code '${coupon.code}' applied successfully!`
    };
  }

  // Orders
  getOrders() {
    return this.data.orders || [];
  }

  getOrderById(id) {
    if (!id) return null;
    const clean = id.trim().toUpperCase();
    return this.data.orders.find((o) => o.id.toUpperCase() === clean || (o.customer && o.customer.email && o.customer.email.toLowerCase() === clean.toLowerCase()) || (o.customer && o.customer.phone && o.customer.phone.includes(clean)));
  }

  createOrder(orderPayload) {
    const settings = this.getSettings();
    const orderId = generateId("EFR");
    const newOrder = {
      id: orderId,
      customer: orderPayload.customer,
      items: orderPayload.items,
      deliveryLocation: orderPayload.deliveryLocation || "Inside Rajshahi",
      shippingFee: orderPayload.shippingFee || 80,
      subtotal: orderPayload.subtotal,
      discount: orderPayload.discount || 0,
      discountCode: orderPayload.discountCode || "",
      tax: orderPayload.tax || 0,
      total: orderPayload.total,
      paymentMethod: orderPayload.paymentMethod || "Cash on Delivery",
      paymentStatus: orderPayload.paymentMethod.includes("Facebook") ? "Pre-Paid" : "Pending",
      orderStatus: "Pending",
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toISOString(),
      timeline: [
        { status: "Order Placed", date: new Date().toLocaleString(), done: true },
        { status: "Confirmed by Rajshahi Hub", date: "Pending", done: false },
        { status: "Packaging & Quality Check", date: "Pending", done: false },
        { status: "Dispatched with Courier", date: "Pending", done: false },
        { status: "Delivered", date: "Pending", done: false }
      ]
    };

    // Decrease stock
    orderPayload.items.forEach((item) => {
      const prod = this.getProductById(item.productId);
      if (prod && prod.stock !== undefined) {
        const newStock = Math.max(0, prod.stock - item.quantity);
        this.updateProduct(prod.id, { stock: newStock });
      }
    });

    this.data.orders.unshift(newOrder);
    this.saveData();
    this.publish("orders:updated", this.data.orders);
    return newOrder;
  }

  updateOrderStatus(orderId, newStatus, trackingNumber) {
    const order = this.data.orders.find((o) => o.id === orderId);
    if (order) {
      order.orderStatus = newStatus;
      if (trackingNumber) order.trackingNumber = trackingNumber;

      const statusIdxMap = {
        Pending: 1,
        Confirmed: 2,
        Processing: 3,
        Shipped: 4,
        Delivered: 5,
        Cancelled: 0
      };

      const reachedIdx = statusIdxMap[newStatus] || 1;
      order.timeline.forEach((step, idx) => {
        if (idx < reachedIdx) {
          step.done = true;
          if (step.date === "Pending") step.date = new Date().toLocaleString();
        } else if (newStatus === "Cancelled") {
          step.done = false;
        }
      });

      this.saveData();
      this.publish("orders:updated", this.data.orders);
      return order;
    }
    return null;
  }

  // Policies & Content
  getPolicies() {
    return this.data.policies || INITIAL_STORE_DATA.policies;
  }

  updatePolicies(policies) {
    this.data.policies = { ...this.data.policies, ...policies };
    this.saveData();
    this.publish("policies:updated", this.data.policies);
  }

  getFaqs() {
    return this.data.faqs || INITIAL_STORE_DATA.faqs;
  }

  updateFaqs(faqs) {
    this.data.faqs = faqs;
    this.saveData();
    this.publish("faqs:updated", this.data.faqs);
  }

  // Cart Operations
  getCart() {
    return this.cart;
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  addToCart(item) {
    const existingIndex = this.cart.findIndex(
      (c) =>
        c.productId === item.productId &&
        c.size === item.size &&
        c.color === item.color &&
        c.customDesignInfo === item.customDesignInfo
    );

    if (existingIndex !== -1) {
      this.cart[existingIndex].quantity += item.quantity || 1;
    } else {
      this.cart.push({
        productId: item.productId,
        title: item.title,
        price: item.price,
        originalPrice: item.originalPrice || item.price,
        image: item.image,
        size: item.size || "Standard",
        color: item.color || "Default",
        customDesignInfo: item.customDesignInfo || "",
        customDesignImage: item.customDesignImage || null,
        quantity: item.quantity || 1
      });
    }

    this.saveCart();
  }

  updateCartQuantity(index, quantity) {
    if (this.cart[index]) {
      if (quantity <= 0) {
        this.cart.splice(index, 1);
      } else {
        this.cart[index].quantity = quantity;
      }
      this.saveCart();
    }
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.appliedCoupon = null;
    this.saveCart();
  }

  // Wishlist Operations
  getWishlist() {
    return this.wishlist;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx !== -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
    }
    this.saveWishlist();
    return this.isInWishlist(productId);
  }

  // Admin Auth
  isAdminAuthenticated() {
    return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
  }

  loginAdmin(password) {
    if (password === "admin123" || password === "brothers" || password === "admin" || password === "rajshahi" || password === "elegant") {
      localStorage.setItem(ADMIN_AUTH_KEY, "true");
      this.publish("admin:auth_changed", true);
      return true;
    }
    return false;
  }

  logoutAdmin() {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    this.publish("admin:auth_changed", false);
  }

  // Backup & Reset Tools
  exportDatabaseJSON() {
    return JSON.stringify(this.data, null, 2);
  }

  importDatabaseJSON(jsonStr) {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed.products || !parsed.settings) {
        throw new Error("Invalid format: Missing products or settings keys.");
      }
      this.saveData(parsed);
      this.publish("database:imported", this.data);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  resetToDefaults() {
    const fresh = JSON.parse(JSON.stringify(INITIAL_STORE_DATA));
    this.saveData(fresh);
    this.publish("database:reset", fresh);
  }
}

export const store = new Store();
