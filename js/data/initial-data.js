/**
 * Brother's Fashion - Initial Store Dataset
 * Tailored exclusively for Bangladesh (Rajshahi Sadar)
 * Currency: ৳ (BDT), Bangladeshi Sizing, Delivery Rates (80 inside, 120 outside)
 * Custom Print T-Shirt studio, Facebook Page Inbox Pre-pay Template, and Men's/Custom Collections.
 */

export const INITIAL_STORE_DATA = {
  settings: {
    storeName: "Brother's Fashion",
    tagline: "Premium Menswear, Custom Apparel & Fashion House",
    currency: "৳",
    currencyCode: "BDT",
    taxRate: 0.05, // 5% VAT
    freeShippingThreshold: 2000,
    insideRajshahiFee: 80,
    outsideRajshahiFee: 120,
    contactEmail: "brothersfashion.bd@gmail.com",
    contactPhone: "+880 1700-123456",
    whatsappNumber: "+8801700123456",
    atelierAddress: "Shop #14, Ground Floor, New Market, Rajshahi Sadar, Rajshahi, Bangladesh",
    facebookPageUrl: "https://www.facebook.com/brothersfashion",
    facebookInboxUrl: "https://m.me/brothersfashion",
    facebookTemplateMessage: `Assalamu Alaikum! I would like to place an order:
📦 Product: {product_name}
📏 Size: {size} | Color: {color}
🔢 Quantity: {quantity}
💵 Total Amount: ৳{total_amount} (Product: ৳{product_price} + Delivery: ৳{delivery_charge} [{delivery_location}])
📍 Delivery Address: {customer_address}, {customer_city}
📞 Contact Number: {customer_phone}
🎨 Custom Design Details: {custom_design_info}

Please share your bKash/Nagad Merchant or Personal number for pre-payment confirmation. Thank you!`
  },

  notices: {
    active: true,
    text: "✨ BROTHER'S FASHION | ডেলিভারি চার্জ: রাজশাহী সদরে মাত্র ৮০ টাকা এবং রাজশাহীর বাইরে ১২০ টাকা | CUSTOM PRINT টি-শার্ট অর্ডার চালু আছে | USE CODE 'BROTHERS10' FOR 10% OFF",
    speed: 35,
    link: "#catalog",
    linkText: "Shop Collection"
  },

  heroBanners: [
    {
      id: "hero-1",
      tagline: "RAJSHAHI'S PREMIUM APPAREL HOUSE",
      title: "Elevate Your Style with Contemporary Comfort",
      subtitle: "Discover premium Drop Shoulder T-Shirts, Oxford Cotton Shirts, Denim Pants, and Executive Formal Trousers tailored for Bangladesh.",
      badge: "NEW ARRIVALS 2026",
      ctaPrimaryText: "Explore Collection",
      ctaPrimaryLink: "#catalog?category=all",
      ctaSecondaryText: "Custom Print T-Shirts",
      ctaSecondaryLink: "#catalog?category=Custom%20Print%20T-Shirts",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=85",
      accentColor: "#C5A880"
    },
    {
      id: "hero-2",
      tagline: "CUSTOM APPAREL STUDIO",
      title: "Print Your Own Unique Custom T-Shirts",
      subtitle: "Upload your personal design, select from our viral graphic library, or chat with our design team. Premium 100% combed cotton with durable DTF printing.",
      badge: "CUSTOM DESIGN LAB",
      ctaPrimaryText: "Design Custom T-Shirt",
      ctaPrimaryLink: "#product?id=prod-custom-01",
      ctaSecondaryText: "Contact on Facebook",
      ctaSecondaryLink: "https://m.me/brothersfashion",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1800&q=85",
      accentColor: "#D4AF37"
    },
    {
      id: "hero-3",
      tagline: "BESPOKE SARTORIAL EXCELLENCE",
      title: "Executive Shirts & Formal Trousers",
      subtitle: "Crisp breathable cotton shirts and tailored formal pants designed for corporate meetings, weddings, and everyday smart elegance.",
      badge: "EXECUTIVE WEAR",
      ctaPrimaryText: "Shop Formal Pants",
      ctaPrimaryLink: "#catalog?category=Formal%20Pants",
      ctaSecondaryText: "View Shirts",
      ctaSecondaryLink: "#catalog?category=Shirts",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=85",
      accentColor: "#A67C52"
    }
  ],

  flashOffer: {
    active: true,
    title: "RAJSHAHI SPECIAL SEASON PRIVILEGE SALE",
    subtitle: "Get up to 25% discount on all premium T-Shirts, Shirts & Pants. Complimentary shipping on orders above ৳2000!",
    couponCode: "BROTHERS10",
    discountPercent: 10,
    endsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
  },

  coupons: [
    {
      id: "coup-1",
      code: "BROTHERS10",
      discountType: "percentage",
      discountValue: 10,
      minSpend: 800,
      expiryDate: "2026-12-31",
      isActive: true,
      description: "10% off on orders above ৳800"
    },
    {
      id: "coup-2",
      code: "RAJSHAHI100",
      discountType: "fixed",
      discountValue: 100,
      minSpend: 1500,
      expiryDate: "2026-12-31",
      isActive: true,
      description: "৳100 discount on orders above ৳1500"
    },
    {
      id: "coup-3",
      code: "WELCOME50",
      discountType: "fixed",
      discountValue: 50,
      minSpend: 600,
      expiryDate: "2026-12-31",
      isActive: true,
      description: "৳50 off for new customers"
    }
  ],

  categories: [
    {
      id: "cat-tshirts",
      name: "T-Shirts",
      slug: "T-Shirts",
      description: "Premium combed cotton, drop shoulder, oversized & casual crewneck t-shirts.",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-shirts",
      name: "Shirts",
      slug: "Shirts",
      description: "Oxford cotton, formal office shirts, casual linen, and Cuban collar shirts.",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-pants",
      name: "Pants",
      slug: "Pants",
      description: "Raw denim jeans, stretch slim-fit jeans, and 6-pocket cargo pants.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-trousers",
      name: "Trousers",
      slug: "Trousers",
      description: "Smart casual cotton chinos, jogger trousers, and comfortable everyday pants.",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-formal-pants",
      name: "Formal Pants",
      slug: "Formal Pants",
      description: "Executive tailored suit trousers, pleated formal pants, and office wear.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-custom-print",
      name: "Custom Print T-Shirts",
      slug: "Custom Print T-Shirts",
      description: "Upload your custom design, choose preset viral graphics, or custom print on demand.",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "cat-women",
      name: "Women's Collection",
      slug: "Women's Collection",
      description: "Exclusive women's festive wear, kurtis, and contemporary gowns. Coming soon!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ],

  // Preset Design Gallery for Custom T-Shirt Lab
  presetDesigns: [
    {
      id: "des-1",
      name: "Bengali Typography - 'স্বপ্নবাজ'",
      thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80",
      previewText: "স্বপ্নবাজ (Dreamer)",
      category: "Bengali Typography"
    },
    {
      id: "des-2",
      name: "Cyberpunk Samurai Graphic",
      thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=300&q=80",
      previewText: "Cyber Samurai",
      category: "Anime & Cyberpunk"
    },
    {
      id: "des-3",
      name: "Minimalist Aesthetic Line Art",
      thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80",
      previewText: "Minimal Silhouette",
      category: "Minimalist Art"
    },
    {
      id: "des-4",
      name: "Rajshahi Heritage Silk Motif",
      thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
      previewText: "Rajshahi Heritage",
      category: "Heritage"
    },
    {
      id: "des-5",
      name: "Streetwear Oversized Backprint",
      thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=300&q=80",
      previewText: "Tokyo Night Drift",
      category: "Streetwear"
    }
  ],

  products: [
    {
      id: "prod-custom-01",
      sku: "EFR-CUST-001",
      title: "Custom Print Premium Combed Cotton T-Shirt",
      subtitle: "Upload your own design or choose from our graphics. High-density DTF printing.",
      category: "Custom Print T-Shirts",
      isCustomizable: true,
      price: 590,
      originalPrice: 750,
      rating: 4.9,
      reviewCount: 78,
      isFeatured: true,
      isNew: true,
      badge: "CUSTOM LAB",
      stock: 100,
      sizes: ["M (Chest 38)", "L (Chest 40)", "XL (Chest 42)", "XXL (Chest 44)"],
      colors: [
        { name: "Obsidian Black", hex: "#111111" },
        { name: "Pure White", hex: "#FFFFFF" },
        { name: "Navy Blue", hex: "#1B2A4A" },
        { name: "Maroon", hex: "#581c24" }
      ],
      images: [
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Design your signature t-shirt! Crafted from 100% 180+ GSM combed organic cotton with bio-wash finish for superior comfort in Bangladesh's climate. Upload your custom artwork, photograph, company logo, or choose from our preset Bengali & streetwear graphics. High-definition DTF printing that does not peel or fade even after 50+ washes.",
      fabric: "100% Combed Cotton, 180 GSM, Bio-washed, Double-stitched seams.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80 (1-2 days). Outside Rajshahi ৳120 via Steadfast/Sundarban Courier (2-4 days).",
      tags: ["custom", "t-shirt", "print", "dtf", "graphics", "bangladesh"]
    },
    {
      id: "prod-tshirt-02",
      sku: "EFR-TS-002",
      title: "Heavyweight 220 GSM Drop Shoulder Oversized T-Shirt",
      subtitle: "Relaxed streetwear fit with ribbed collar and premium lycra blend",
      category: "T-Shirts",
      price: 520,
      originalPrice: 650,
      rating: 4.8,
      reviewCount: 45,
      isFeatured: true,
      isNew: true,
      badge: "BESTSELLER",
      stock: 35,
      sizes: ["M (Chest 40)", "L (Chest 42)", "XL (Chest 44)", "XXL (Chest 46)"],
      colors: [
        { name: "Charcoal Anthracite", hex: "#2B2B2B" },
        { name: "Oatmeal Beige", hex: "#D6C7B2" },
        { name: "Forest Olive", hex: "#3B4A3F" }
      ],
      images: [
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "The ultimate modern streetwear aesthetic. Tailored from heavyweight 220 GSM combed cotton with dropped shoulders and a boxy silhouette that provides effortless drape and breathable comfort throughout the day.",
      fabric: "95% Organic Cotton, 5% Spandex Ribbed Collar, 220 GSM Heavyweight.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["drop-shoulder", "oversized", "streetwear", "t-shirt"]
    },
    {
      id: "prod-shirt-03",
      sku: "EFR-SH-003",
      title: "Executive Royal Oxford Cotton Formal Shirt",
      subtitle: "100% Giza Egyptian cotton weave with reinforced collar and pearl buttons",
      category: "Shirts",
      price: 1150,
      originalPrice: 1450,
      rating: 5.0,
      reviewCount: 32,
      isFeatured: true,
      isNew: true,
      badge: "EXECUTIVE",
      stock: 24,
      sizes: ["M (38-39)", "L (40-41)", "XL (42-43)", "XXL (44)"],
      colors: [
        { name: "Sky Azure Blue", hex: "#99BADD" },
        { name: "Crisp Snow White", hex: "#FFFFFF" },
        { name: "Soft Lilac", hex: "#C8B6DB" }
      ],
      images: [
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Flawless corporate presence. Made from tightly woven 100% Oxford cotton with an easy-iron finish, sharp semi-spread collar, and double-stitched armholes for maximum durability and crisp elegance.",
      fabric: "100% 2-Ply Oxford Weave Long-Staple Cotton.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["formal", "shirt", "oxford", "office", "executive"]
    },
    {
      id: "prod-shirt-04",
      sku: "EFR-SH-004",
      title: "Cuban Collar Breathable Casual Linen Shirt",
      subtitle: "Relaxed resort silhouette crafted from pure French flax linen blend",
      category: "Shirts",
      price: 890,
      originalPrice: 1150,
      rating: 4.8,
      reviewCount: 29,
      isFeatured: false,
      isNew: true,
      badge: "HOT",
      stock: 18,
      sizes: ["M", "L", "XL", "XXL"],
      colors: [
        { name: "Dusty Olive", hex: "#556B2F" },
        { name: "Terracotta Sand", hex: "#C87D55" },
        { name: "Pearl White", hex: "#FDFBF7" }
      ],
      images: [
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Stay cool and stylish in warm Bangladeshi summers with this breezy Cuban collar shirt. Designed with a relaxed straight hem, tonal buttons, and natural slub texture.",
      fabric: "60% Pure Flax Linen, 40% Combed Cotton.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["linen", "casual-shirt", "summer", "cuban-collar"]
    },
    {
      id: "prod-pants-05",
      sku: "EFR-PA-005",
      title: "Authentic Indigo Raw Denim Jeans (13.5 Oz)",
      subtitle: "Deep indigo stretch denim with vintage brass rivets and copper stitching",
      category: "Pants",
      price: 1350,
      originalPrice: 1650,
      rating: 4.9,
      reviewCount: 62,
      isFeatured: true,
      isNew: false,
      badge: "BESTSELLER",
      stock: 28,
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: [
        { name: "Deep Indigo", hex: "#1A2E40" },
        { name: "Washed Carbon Black", hex: "#222222" },
        { name: "Vintage Blue Wash", hex: "#3A5F7D" }
      ],
      images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Structured durability with just the right amount of elastane stretch for all-day comfort. Features a slim straight cut, heavy-duty YKK zipper fly, and reinforced belt loops.",
      fabric: "98% Cotton Denim (13.5 oz), 2% Spandex Stretch.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["jeans", "denim", "pants", "menswear"]
    },
    {
      id: "prod-pants-06",
      sku: "EFR-PA-006",
      title: "6-Pocket Tactical Utility Cargo Pants",
      subtitle: "Heavy cotton twill with gusseted cargo pockets and tapered ankle cuffs",
      category: "Pants",
      price: 1250,
      originalPrice: 1550,
      rating: 4.8,
      reviewCount: 38,
      isFeatured: false,
      isNew: true,
      badge: "HOT",
      stock: 20,
      sizes: ["30", "32", "34", "36"],
      colors: [
        { name: "Military Olive", hex: "#4A5240" },
        { name: "Matte Black", hex: "#161616" },
        { name: "Desert Khaki", hex: "#C2B280" }
      ],
      images: [
        "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Engineered for versatility and modern streetwear aesthetics. Reinforced double knees, deep side flap cargo pockets, and adjustable waist tabs.",
      fabric: "100% Heavyweight Cotton Twill (300 GSM).",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["cargo", "pants", "tactical", "streetwear"]
    },
    {
      id: "prod-trouser-07",
      sku: "EFR-TR-007",
      title: "Tailored Smart Cotton Chino Trousers",
      subtitle: "Clean flat-front trousers with 4-way stretch and satin interior waistband",
      category: "Trousers",
      price: 950,
      originalPrice: 1200,
      rating: 4.9,
      reviewCount: 51,
      isFeatured: true,
      isNew: false,
      badge: "POPULAR",
      stock: 30,
      sizes: ["30", "32", "34", "36", "38"],
      colors: [
        { name: "Classic Khaki", hex: "#C3B091" },
        { name: "Midnight Navy", hex: "#152238" },
        { name: "Ash Grey", hex: "#5A5D64" }
      ],
      images: [
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "The quintessential smart-casual trouser. Transitions effortlessly from office presentations to weekend dinners. Tailored slim-fit with coin pocket and concealed welt rear pockets.",
      fabric: "97% Premium Long-Staple Cotton, 3% Elastane.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["chinos", "trousers", "smart-casual", "cotton"]
    },
    {
      id: "prod-trouser-08",
      sku: "EFR-TR-008",
      title: "Relaxed Fit Cotton Drawstring Jogger Trousers",
      subtitle: "Elastic waistband with custom metal aglets and tailored tapered leg",
      category: "Trousers",
      price: 850,
      originalPrice: 1050,
      rating: 4.7,
      reviewCount: 34,
      isFeatured: false,
      isNew: true,
      badge: "NEW",
      stock: 22,
      sizes: ["M (Waist 28-30)", "L (Waist 32-34)", "XL (Waist 36-38)"],
      colors: [
        { name: "Onyx Black", hex: "#111111" },
        { name: "Slate Melange", hex: "#474B52" },
        { name: "Army Green", hex: "#354230" }
      ],
      images: [
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Comfort meets modern polish. Crafted from soft terry cotton with a customized inner drawcord, functional front slant pockets, and clean ankle cuffs.",
      fabric: "100% Combed French Terry Cotton.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["joggers", "trousers", "casual", "drawstring"]
    },
    {
      id: "prod-formal-09",
      sku: "EFR-FP-009",
      title: "Executive Tailored Suit Formal Pants",
      subtitle: "Wrinkle-resistant wool-blend fabric with sharp center crease and gripper waistband",
      category: "Formal Pants",
      price: 1250,
      originalPrice: 1550,
      rating: 5.0,
      reviewCount: 41,
      isFeatured: true,
      isNew: true,
      badge: "EXECUTIVE",
      stock: 25,
      sizes: ["30", "32", "34", "36", "38"],
      colors: [
        { name: "Midnight Black", hex: "#101012" },
        { name: "Royal Navy", hex: "#1A2530" },
        { name: "Charcoal Grey", hex: "#2E3138" }
      ],
      images: [
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Mastercrafted formal trousers for the discerning gentleman. Featuring an internal shirt-gripper waistband to keep your shirt securely tucked in, double welt back pockets with horn buttons, and precision creasing that stays sharp all day.",
      fabric: "70% Virgin Wool, 28% Poly-viscose, 2% Lycra for flexibility.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["formal-pants", "suit", "office", "executive", "tailored"]
    },
    {
      id: "prod-formal-10",
      sku: "EFR-FP-010",
      title: "Double-Pleated Classic British Formal Trousers",
      subtitle: "High-rise waist with side adjusters and generous relaxed thigh taper",
      category: "Formal Pants",
      price: 1180,
      originalPrice: 1400,
      rating: 4.9,
      reviewCount: 22,
      isFeatured: false,
      isNew: true,
      badge: "NEW",
      stock: 16,
      sizes: ["30", "32", "34", "36"],
      colors: [
        { name: "Dark Chocolate Brown", hex: "#38281F" },
        { name: "Navy Blue", hex: "#182333" }
      ],
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Classic sartorial vintage architecture. High-waisted with forward double pleats and solid metal side adjusters eliminating the need for belts.",
      fabric: "Premium Poly-Wool Tropical Weave.",
      deliveryInfo: "Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",
      tags: ["pleated", "formal-pants", "classic", "sartorial"]
    },
    {
      id: "prod-women-11",
      sku: "EFR-WM-011",
      title: "Women's Royal Georgette Embroidered Festive Gown",
      subtitle: "Coming Soon to Brother's Fashion — Preview Edition",
      category: "Women's Collection",
      price: 2450,
      originalPrice: 2900,
      rating: 5.0,
      reviewCount: 14,
      isFeatured: true,
      isNew: true,
      badge: "COMING SOON",
      stock: 5,
      sizes: ["36", "38", "40", "42"],
      colors: [
        { name: "Crimson Maroon", hex: "#6E1B24" },
        { name: "Emerald Green", hex: "#0E4D34" },
        { name: "Royal Gold", hex: "#D4AF37" }
      ],
      images: [
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85"
      ],
      description: "Preview of our forthcoming Women's Collection. Hand-embroidered zari and sequin work on pure weightless georgette silk. Stay tuned or contact us on WhatsApp/Facebook for advance pre-booking.",
      fabric: "Pure Georgette Silk with Zari Embroidery & Santoon Lining.",
      deliveryInfo: "Launching soon! Free pre-order delivery in Rajshahi Sadar.",
      tags: ["women", "festive", "gown", "coming-soon"]
    }
  ],

  orders: [
    {
      id: "EFR-98214",
      customer: {
        firstName: "Tanvir",
        lastName: "Ahmed",
        email: "tanvir.raj@gmail.com",
        phone: "01711-234567",
        address: "House 24, Road 3, Padma Residential Area",
        city: "Rajshahi Sadar",
        district: "Rajshahi",
        postalCode: "6200",
        country: "Bangladesh"
      },
      items: [
        {
          productId: "prod-custom-01",
          title: "Custom Print Premium Combed Cotton T-Shirt",
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",
          size: "L (Chest 40)",
          color: "Obsidian Black",
          customDesignInfo: "Preset: 'স্বপ্নবাজ (Dreamer)' on Chest",
          price: 590,
          quantity: 2
        }
      ],
      deliveryLocation: "Inside Rajshahi (Rajshahi Sadar)",
      shippingFee: 80,
      subtotal: 1180,
      discount: 118,
      discountCode: "BROTHERS10",
      tax: 53.10,
      total: 1195.10,
      paymentMethod: "Cash on Delivery",
      paymentStatus: "Pending",
      orderStatus: "Processing",
      trackingNumber: "EFR-RAJ-44019",
      createdAt: "2026-08-26T15:30:00.000Z",
      timeline: [
        { status: "Order Placed", date: "2026-08-26 15:30", done: true },
        { status: "Confirmed by Rajshahi Hub", date: "2026-08-26 16:00", done: true },
        { status: "Custom Printing & Packing", date: "2026-08-27 10:15", done: true },
        { status: "Out for Delivery (Rajshahi Sadar)", date: "Pending", done: false },
        { status: "Delivered", date: "Pending", done: false }
      ]
    },
    {
      id: "EFR-98190",
      customer: {
        firstName: "Mahmudur",
        lastName: "Rahman",
        email: "mahmud.dhaka@yahoo.com",
        phone: "01822-987654",
        address: "Flat 4B, Green Road, Dhanmondi",
        city: "Dhaka",
        district: "Dhaka",
        postalCode: "1205",
        country: "Bangladesh"
      },
      items: [
        {
          productId: "prod-shirt-03",
          title: "Executive Royal Oxford Cotton Formal Shirt",
          image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
          size: "L (40-41)",
          color: "Sky Azure Blue",
          price: 1150,
          quantity: 1
        },
        {
          productId: "prod-formal-09",
          title: "Executive Tailored Suit Formal Pants",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
          size: "34",
          color: "Midnight Black",
          price: 1250,
          quantity: 1
        }
      ],
      deliveryLocation: "Outside Rajshahi (All Over Bangladesh)",
      shippingFee: 120,
      subtotal: 2400,
      discount: 100,
      discountCode: "RAJSHAHI100",
      tax: 115.00,
      total: 2535.00,
      paymentMethod: "Pre-Paid via bKash / Facebook Messenger",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      trackingNumber: "STEADFAST-BD-890214",
      createdAt: "2026-08-25T11:00:00.000Z",
      timeline: [
        { status: "Order Placed", date: "2026-08-25 11:00", done: true },
        { status: "Payment Verified via bKash", date: "2026-08-25 11:15", done: true },
        { status: "Quality Check & Packaged", date: "2026-08-25 14:00", done: true },
        { status: "Handed over to Steadfast Courier", date: "2026-08-26 09:30", done: true },
        { status: "Delivered", date: "Estimated 2026-08-28", done: false }
      ]
    }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Ashraful Islam",
      location: "Kazihata, Rajshahi",
      quote: "Custom print t-shirt er print quality oshadharon! 100% pure combed cotton, washed it multiple times and the print is still razor sharp. Delivery was super fast in Rajshahi Sadar.",
      rating: 5,
      product: "Custom Print Combed Cotton T-Shirt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-2",
      name: "Sajjad Hossain",
      location: "Uttara, Dhaka",
      quote: "Oxford cotton shirt and tailored formal pants fit perfectly. Fabric feels very premium and breathable for our weather. Pre-paid via Facebook inbox with zero hassle.",
      rating: 5,
      product: "Executive Royal Oxford Cotton Shirt",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-3",
      name: "Rifat Hasan",
      location: "Shaheb Bazar, Rajshahi",
      quote: "Raw denim jeans er fabric ar fitting purapuri premium brand er moto. Delivery charge matro 80 taka inside Rajshahi. Highly recommended!",
      rating: 5,
      product: "Authentic Indigo Raw Denim Jeans",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"
    }
  ],

  faqs: [
    {
      question: "What are the delivery charges and delivery times for Rajshahi and outside?",
      answer: "We deliver directly across all 64 districts in Bangladesh! Inside Rajshahi Sadar, delivery charge is only ৳80 (1-2 business days). Outside Rajshahi across all other districts, delivery charge is ৳120 (2-4 business days via Steadfast / Sundarban courier). Orders above ৳2000 qualify for free delivery!"
    },
    {
      question: "How does the Custom Print T-Shirt ordering work?",
      answer: "You can open our Custom Print T-Shirt page, upload your high-resolution image/logo (JPG/PNG), or select from our curated graphic library (Bengali typography, anime, minimalist). You can preview how it looks on the t-shirt, choose size/color, and place order directly with Cash on Delivery or Pre-Pay via Facebook Messenger."
    },
    {
      question: "How do I pre-pay using bKash / Nagad or message on Facebook Inbox?",
      answer: "During checkout or product view, choose 'Pre-Pay via Facebook Inbox' option. You will be redirected directly to our official Facebook Messenger with a ready-made template message containing your selected product, size, color, and delivery address. Our team will verify and send the bKash/Nagad Merchant number immediately."
    },
    {
      question: "Can I order via Cash on Delivery (COD)?",
      answer: "Yes, Cash on Delivery is available across all of Bangladesh. You can place your order directly through our website checkout with no upfront payment needed."
    },
    {
      question: "What is the return and exchange policy?",
      answer: "We provide an easy 7-day exchange guarantee if there are any sizing issues or manufacturing defects. Items must be unworn and in original condition."
    }
  ],

  policies: {
    shipping: `Delivery & Courier Policy across Bangladesh

At Brother's Fashion, all orders are carefully inspected, ironed, and packaged securely from our Rajshahi fulfillment center.

Delivery Tiers:
• Inside Rajshahi Sadar: ৳80 Flat Delivery Fee (Dispatched same-day, delivered in 1-2 business days).
• Outside Rajshahi (All 64 Districts): ৳120 Delivery Fee via Steadfast / Sundarban Courier (Delivered in 2-4 business days).
• Free Delivery: On orders exceeding ৳2000 BDT.

Order Verification:
For COD orders, our customer support team will give a quick verification call before dispatch.`,

    returns: `7-Day Easy Exchange Policy

We want you to be 100% satisfied with your fit and comfort.

Return & Size Exchange Guidelines:
1. Contact us within 7 days of receiving your package via WhatsApp (+880 1700-123456) or Facebook Inbox.
2. The product must be unworn, unwashed, with all original tags attached.
3. For custom printed T-shirts with personal photos, exchanges are provided in case of size mismatch or print defects.`,

    privacy: `Privacy Policy & Customer Security

Your personal data (name, contact number, delivery address) is handled with strict confidentiality and used exclusively for order fulfillment and courier communication. We never share your details with third parties.`,

    terms: `Terms & Conditions

By placing an order on Brother's Fashion, you agree to our standard shopping terms. All custom print graphics uploaded by customers must adhere to general community standards.`
  }
};
