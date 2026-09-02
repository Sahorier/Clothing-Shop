# Brother's Fashion — Premium Menswear & Custom Apparel House

E-Commerce web application and custom apparel design studio for **Brother's Fashion**, Rajshahi Sadar, Bangladesh.

---

## 🌟 Key Features

- **Storefront & Product Catalog**: T-Shirts, Oxford Cotton Shirts, Denim Jeans, and Executive Tailored Formal Pants.
- **Interactive Custom T-Shirt Studio**: Upload custom graphics or choose curated typography/art with instant mockup previews.
- **Logistics & Delivery Calculation**: Built-in fee calculation for Inside Rajshahi Sadar (৳80) and Outside Rajshahi across all 64 districts (৳120), with free shipping over ৳2000.
- **Payment & Checkout**: Direct Cash on Delivery (COD) and automated Facebook Messenger pre-pay integration (bKash/Nagad).
- **Administrative Management Suite (`#admin`)**:
  - Live revenue analytics and performance charts
  - Product catalog manager (SKU, stock, variants, custom print toggle)
  - Flash offers, promo codes & notice marquee controller
  - Real-time client order logistics & printable invoices
  - Store CMS settings & JSON database backup/restore

---

## 🚀 Deployment to Namecheap Stellar (cPanel)

### Method 1: Automated cPanel Git Version Control
1. In cPanel, navigate to **Git Version Control**.
2. Click **Create** and enter:
   - **Clone URL**: `https://github.com/Sahorier/Clothing-Shop.git`
   - **Repository Path**: `repositories/Clothing-Shop`
   - **Repository Name**: `Clothing-Shop`
3. Click **Create**.
4. Go to the **Manage** tab for the repository and click **Deploy HEAD Commit**.
   - The `.cpanel.yml` file will automatically copy the production files from `dist/` into your `public_html/` folder.

### Method 2: Manual Upload
- Upload and extract the pre-packaged `cpanel_deploy.zip` directly into `public_html/`.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Build and package for cPanel
npm run build:zip
```
