(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const D={settings:{storeName:"Brother's Fashion",tagline:"Premium Menswear, Custom Apparel & Fashion House",currency:"৳",currencyCode:"BDT",taxRate:.05,freeShippingThreshold:2e3,insideRajshahiFee:80,outsideRajshahiFee:120,contactEmail:"brothersfashion.bd@gmail.com",contactPhone:"+880 1700-123456",whatsappNumber:"+8801700123456",atelierAddress:"Shop #14, Ground Floor, New Market, Rajshahi Sadar, Rajshahi, Bangladesh",facebookPageUrl:"https://www.facebook.com/brothersfashion",facebookInboxUrl:"https://m.me/brothersfashion",facebookTemplateMessage:`Assalamu Alaikum! I would like to place an order:
📦 Product: {product_name}
📏 Size: {size} | Color: {color}
🔢 Quantity: {quantity}
💵 Total Amount: ৳{total_amount} (Product: ৳{product_price} + Delivery: ৳{delivery_charge} [{delivery_location}])
📍 Delivery Address: {customer_address}, {customer_city}
📞 Contact Number: {customer_phone}
🎨 Custom Design Details: {custom_design_info}

Please share your bKash/Nagad Merchant or Personal number for pre-payment confirmation. Thank you!`},notices:{active:!0,text:"✨ BROTHER'S FASHION | ডেলিভারি চার্জ: রাজশাহী সদরে মাত্র ৮০ টাকা এবং রাজশাহীর বাইরে ১২০ টাকা | CUSTOM PRINT টি-শার্ট অর্ডার চালু আছে | USE CODE 'BROTHERS10' FOR 10% OFF",speed:35,link:"#catalog",linkText:"Shop Collection"},heroBanners:[{id:"hero-1",tagline:"RAJSHAHI'S PREMIUM APPAREL HOUSE",title:"Elevate Your Style with Contemporary Comfort",subtitle:"Discover premium Drop Shoulder T-Shirts, Oxford Cotton Shirts, Denim Pants, and Executive Formal Trousers tailored for Bangladesh.",badge:"NEW ARRIVALS 2026",ctaPrimaryText:"Explore Collection",ctaPrimaryLink:"#catalog?category=all",ctaSecondaryText:"Custom Print T-Shirts",ctaSecondaryLink:"#catalog?category=Custom%20Print%20T-Shirts",image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=85",accentColor:"#C5A880"},{id:"hero-2",tagline:"CUSTOM APPAREL STUDIO",title:"Print Your Own Unique Custom T-Shirts",subtitle:"Upload your personal design, select from our viral graphic library, or chat with our design team. Premium 100% combed cotton with durable DTF printing.",badge:"CUSTOM DESIGN LAB",ctaPrimaryText:"Design Custom T-Shirt",ctaPrimaryLink:"#product?id=prod-custom-01",ctaSecondaryText:"Contact on Facebook",ctaSecondaryLink:"https://m.me/brothersfashion",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1800&q=85",accentColor:"#D4AF37"},{id:"hero-3",tagline:"BESPOKE SARTORIAL EXCELLENCE",title:"Executive Shirts & Formal Trousers",subtitle:"Crisp breathable cotton shirts and tailored formal pants designed for corporate meetings, weddings, and everyday smart elegance.",badge:"EXECUTIVE WEAR",ctaPrimaryText:"Shop Formal Pants",ctaPrimaryLink:"#catalog?category=Formal%20Pants",ctaSecondaryText:"View Shirts",ctaSecondaryLink:"#catalog?category=Shirts",image:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=85",accentColor:"#A67C52"}],flashOffer:{active:!0,title:"RAJSHAHI SPECIAL SEASON PRIVILEGE SALE",subtitle:"Get up to 25% discount on all premium T-Shirts, Shirts & Pants. Complimentary shipping on orders above ৳2000!",couponCode:"BROTHERS10",discountPercent:10,endsAt:new Date(Date.now()+5*24*60*60*1e3).toISOString(),bannerImage:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"},coupons:[{id:"coup-1",code:"BROTHERS10",discountType:"percentage",discountValue:10,minSpend:800,expiryDate:"2026-12-31",isActive:!0,description:"10% off on orders above ৳800"},{id:"coup-2",code:"RAJSHAHI100",discountType:"fixed",discountValue:100,minSpend:1500,expiryDate:"2026-12-31",isActive:!0,description:"৳100 discount on orders above ৳1500"},{id:"coup-3",code:"WELCOME50",discountType:"fixed",discountValue:50,minSpend:600,expiryDate:"2026-12-31",isActive:!0,description:"৳50 off for new customers"}],categories:[{id:"cat-tshirts",name:"T-Shirts",slug:"T-Shirts",description:"Premium combed cotton, drop shoulder, oversized & casual crewneck t-shirts.",image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-shirts",name:"Shirts",slug:"Shirts",description:"Oxford cotton, formal office shirts, casual linen, and Cuban collar shirts.",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-pants",name:"Pants",slug:"Pants",description:"Raw denim jeans, stretch slim-fit jeans, and 6-pocket cargo pants.",image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-trousers",name:"Trousers",slug:"Trousers",description:"Smart casual cotton chinos, jogger trousers, and comfortable everyday pants.",image:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-formal-pants",name:"Formal Pants",slug:"Formal Pants",description:"Executive tailored suit trousers, pleated formal pants, and office wear.",image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-custom-print",name:"Custom Print T-Shirts",slug:"Custom Print T-Shirts",description:"Upload your custom design, choose preset viral graphics, or custom print on demand.",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",featured:!0},{id:"cat-women",name:"Women's Collection",slug:"Women's Collection",description:"Exclusive women's festive wear, kurtis, and contemporary gowns. Coming soon!",image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",featured:!0}],presetDesigns:[{id:"des-1",name:"Bengali Typography - 'স্বপ্নবাজ'",thumbnail:"https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=300&q=80",previewText:"স্বপ্নবাজ (Dreamer)",category:"Bengali Typography"},{id:"des-2",name:"Cyberpunk Samurai Graphic",thumbnail:"https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=300&q=80",previewText:"Cyber Samurai",category:"Anime & Cyberpunk"},{id:"des-3",name:"Minimalist Aesthetic Line Art",thumbnail:"https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80",previewText:"Minimal Silhouette",category:"Minimalist Art"},{id:"des-4",name:"Rajshahi Heritage Silk Motif",thumbnail:"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",previewText:"Rajshahi Heritage",category:"Heritage"},{id:"des-5",name:"Streetwear Oversized Backprint",thumbnail:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=300&q=80",previewText:"Tokyo Night Drift",category:"Streetwear"}],products:[{id:"prod-custom-01",sku:"EFR-CUST-001",title:"Custom Print Premium Combed Cotton T-Shirt",subtitle:"Upload your own design or choose from our graphics. High-density DTF printing.",category:"Custom Print T-Shirts",isCustomizable:!0,price:590,originalPrice:750,rating:4.9,reviewCount:78,isFeatured:!0,isNew:!0,badge:"CUSTOM LAB",stock:100,sizes:["M (Chest 38)","L (Chest 40)","XL (Chest 42)","XXL (Chest 44)"],colors:[{name:"Obsidian Black",hex:"#111111"},{name:"Pure White",hex:"#FFFFFF"},{name:"Navy Blue",hex:"#1B2A4A"},{name:"Maroon",hex:"#581c24"}],images:["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85"],description:"Design your signature t-shirt! Crafted from 100% 180+ GSM combed organic cotton with bio-wash finish for superior comfort in Bangladesh's climate. Upload your custom artwork, photograph, company logo, or choose from our preset Bengali & streetwear graphics. High-definition DTF printing that does not peel or fade even after 50+ washes.",fabric:"100% Combed Cotton, 180 GSM, Bio-washed, Double-stitched seams.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80 (1-2 days). Outside Rajshahi ৳120 via Steadfast/Sundarban Courier (2-4 days).",tags:["custom","t-shirt","print","dtf","graphics","bangladesh"]},{id:"prod-tshirt-02",sku:"EFR-TS-002",title:"Heavyweight 220 GSM Drop Shoulder Oversized T-Shirt",subtitle:"Relaxed streetwear fit with ribbed collar and premium lycra blend",category:"T-Shirts",price:520,originalPrice:650,rating:4.8,reviewCount:45,isFeatured:!0,isNew:!0,badge:"BESTSELLER",stock:35,sizes:["M (Chest 40)","L (Chest 42)","XL (Chest 44)","XXL (Chest 46)"],colors:[{name:"Charcoal Anthracite",hex:"#2B2B2B"},{name:"Oatmeal Beige",hex:"#D6C7B2"},{name:"Forest Olive",hex:"#3B4A3F"}],images:["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85"],description:"The ultimate modern streetwear aesthetic. Tailored from heavyweight 220 GSM combed cotton with dropped shoulders and a boxy silhouette that provides effortless drape and breathable comfort throughout the day.",fabric:"95% Organic Cotton, 5% Spandex Ribbed Collar, 220 GSM Heavyweight.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["drop-shoulder","oversized","streetwear","t-shirt"]},{id:"prod-shirt-03",sku:"EFR-SH-003",title:"Executive Royal Oxford Cotton Formal Shirt",subtitle:"100% Giza Egyptian cotton weave with reinforced collar and pearl buttons",category:"Shirts",price:1150,originalPrice:1450,rating:5,reviewCount:32,isFeatured:!0,isNew:!0,badge:"EXECUTIVE",stock:24,sizes:["M (38-39)","L (40-41)","XL (42-43)","XXL (44)"],colors:[{name:"Sky Azure Blue",hex:"#99BADD"},{name:"Crisp Snow White",hex:"#FFFFFF"},{name:"Soft Lilac",hex:"#C8B6DB"}],images:["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85"],description:"Flawless corporate presence. Made from tightly woven 100% Oxford cotton with an easy-iron finish, sharp semi-spread collar, and double-stitched armholes for maximum durability and crisp elegance.",fabric:"100% 2-Ply Oxford Weave Long-Staple Cotton.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["formal","shirt","oxford","office","executive"]},{id:"prod-shirt-04",sku:"EFR-SH-004",title:"Cuban Collar Breathable Casual Linen Shirt",subtitle:"Relaxed resort silhouette crafted from pure French flax linen blend",category:"Shirts",price:890,originalPrice:1150,rating:4.8,reviewCount:29,isFeatured:!1,isNew:!0,badge:"HOT",stock:18,sizes:["M","L","XL","XXL"],colors:[{name:"Dusty Olive",hex:"#556B2F"},{name:"Terracotta Sand",hex:"#C87D55"},{name:"Pearl White",hex:"#FDFBF7"}],images:["https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85"],description:"Stay cool and stylish in warm Bangladeshi summers with this breezy Cuban collar shirt. Designed with a relaxed straight hem, tonal buttons, and natural slub texture.",fabric:"60% Pure Flax Linen, 40% Combed Cotton.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["linen","casual-shirt","summer","cuban-collar"]},{id:"prod-pants-05",sku:"EFR-PA-005",title:"Authentic Indigo Raw Denim Jeans (13.5 Oz)",subtitle:"Deep indigo stretch denim with vintage brass rivets and copper stitching",category:"Pants",price:1350,originalPrice:1650,rating:4.9,reviewCount:62,isFeatured:!0,isNew:!1,badge:"BESTSELLER",stock:28,sizes:["28","30","32","34","36","38"],colors:[{name:"Deep Indigo",hex:"#1A2E40"},{name:"Washed Carbon Black",hex:"#222222"},{name:"Vintage Blue Wash",hex:"#3A5F7D"}],images:["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=1000&q=85"],description:"Structured durability with just the right amount of elastane stretch for all-day comfort. Features a slim straight cut, heavy-duty YKK zipper fly, and reinforced belt loops.",fabric:"98% Cotton Denim (13.5 oz), 2% Spandex Stretch.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["jeans","denim","pants","menswear"]},{id:"prod-pants-06",sku:"EFR-PA-006",title:"6-Pocket Tactical Utility Cargo Pants",subtitle:"Heavy cotton twill with gusseted cargo pockets and tapered ankle cuffs",category:"Pants",price:1250,originalPrice:1550,rating:4.8,reviewCount:38,isFeatured:!1,isNew:!0,badge:"HOT",stock:20,sizes:["30","32","34","36"],colors:[{name:"Military Olive",hex:"#4A5240"},{name:"Matte Black",hex:"#161616"},{name:"Desert Khaki",hex:"#C2B280"}],images:["https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85"],description:"Engineered for versatility and modern streetwear aesthetics. Reinforced double knees, deep side flap cargo pockets, and adjustable waist tabs.",fabric:"100% Heavyweight Cotton Twill (300 GSM).",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["cargo","pants","tactical","streetwear"]},{id:"prod-trouser-07",sku:"EFR-TR-007",title:"Tailored Smart Cotton Chino Trousers",subtitle:"Clean flat-front trousers with 4-way stretch and satin interior waistband",category:"Trousers",price:950,originalPrice:1200,rating:4.9,reviewCount:51,isFeatured:!0,isNew:!1,badge:"POPULAR",stock:30,sizes:["30","32","34","36","38"],colors:[{name:"Classic Khaki",hex:"#C3B091"},{name:"Midnight Navy",hex:"#152238"},{name:"Ash Grey",hex:"#5A5D64"}],images:["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"],description:"The quintessential smart-casual trouser. Transitions effortlessly from office presentations to weekend dinners. Tailored slim-fit with coin pocket and concealed welt rear pockets.",fabric:"97% Premium Long-Staple Cotton, 3% Elastane.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["chinos","trousers","smart-casual","cotton"]},{id:"prod-trouser-08",sku:"EFR-TR-008",title:"Relaxed Fit Cotton Drawstring Jogger Trousers",subtitle:"Elastic waistband with custom metal aglets and tailored tapered leg",category:"Trousers",price:850,originalPrice:1050,rating:4.7,reviewCount:34,isFeatured:!1,isNew:!0,badge:"NEW",stock:22,sizes:["M (Waist 28-30)","L (Waist 32-34)","XL (Waist 36-38)"],colors:[{name:"Onyx Black",hex:"#111111"},{name:"Slate Melange",hex:"#474B52"},{name:"Army Green",hex:"#354230"}],images:["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85"],description:"Comfort meets modern polish. Crafted from soft terry cotton with a customized inner drawcord, functional front slant pockets, and clean ankle cuffs.",fabric:"100% Combed French Terry Cotton.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["joggers","trousers","casual","drawstring"]},{id:"prod-formal-09",sku:"EFR-FP-009",title:"Executive Tailored Suit Formal Pants",subtitle:"Wrinkle-resistant wool-blend fabric with sharp center crease and gripper waistband",category:"Formal Pants",price:1250,originalPrice:1550,rating:5,reviewCount:41,isFeatured:!0,isNew:!0,badge:"EXECUTIVE",stock:25,sizes:["30","32","34","36","38"],colors:[{name:"Midnight Black",hex:"#101012"},{name:"Royal Navy",hex:"#1A2530"},{name:"Charcoal Grey",hex:"#2E3138"}],images:["https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85"],description:"Mastercrafted formal trousers for the discerning gentleman. Featuring an internal shirt-gripper waistband to keep your shirt securely tucked in, double welt back pockets with horn buttons, and precision creasing that stays sharp all day.",fabric:"70% Virgin Wool, 28% Poly-viscose, 2% Lycra for flexibility.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["formal-pants","suit","office","executive","tailored"]},{id:"prod-formal-10",sku:"EFR-FP-010",title:"Double-Pleated Classic British Formal Trousers",subtitle:"High-rise waist with side adjusters and generous relaxed thigh taper",category:"Formal Pants",price:1180,originalPrice:1400,rating:4.9,reviewCount:22,isFeatured:!1,isNew:!0,badge:"NEW",stock:16,sizes:["30","32","34","36"],colors:[{name:"Dark Chocolate Brown",hex:"#38281F"},{name:"Navy Blue",hex:"#182333"}],images:["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85"],description:"Classic sartorial vintage architecture. High-waisted with forward double pleats and solid metal side adjusters eliminating the need for belts.",fabric:"Premium Poly-Wool Tropical Weave.",deliveryInfo:"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120.",tags:["pleated","formal-pants","classic","sartorial"]},{id:"prod-women-11",sku:"EFR-WM-011",title:"Women's Royal Georgette Embroidered Festive Gown",subtitle:"Coming Soon to Brother's Fashion — Preview Edition",category:"Women's Collection",price:2450,originalPrice:2900,rating:5,reviewCount:14,isFeatured:!0,isNew:!0,badge:"COMING SOON",stock:5,sizes:["36","38","40","42"],colors:[{name:"Crimson Maroon",hex:"#6E1B24"},{name:"Emerald Green",hex:"#0E4D34"},{name:"Royal Gold",hex:"#D4AF37"}],images:["https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85"],description:"Preview of our forthcoming Women's Collection. Hand-embroidered zari and sequin work on pure weightless georgette silk. Stay tuned or contact us on WhatsApp/Facebook for advance pre-booking.",fabric:"Pure Georgette Silk with Zari Embroidery & Santoon Lining.",deliveryInfo:"Launching soon! Free pre-order delivery in Rajshahi Sadar.",tags:["women","festive","gown","coming-soon"]}],orders:[{id:"EFR-98214",customer:{firstName:"Tanvir",lastName:"Ahmed",email:"tanvir.raj@gmail.com",phone:"01711-234567",address:"House 24, Road 3, Padma Residential Area",city:"Rajshahi Sadar",district:"Rajshahi",postalCode:"6200",country:"Bangladesh"},items:[{productId:"prod-custom-01",title:"Custom Print Premium Combed Cotton T-Shirt",image:"https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80",size:"L (Chest 40)",color:"Obsidian Black",customDesignInfo:"Preset: 'স্বপ্নবাজ (Dreamer)' on Chest",price:590,quantity:2}],deliveryLocation:"Inside Rajshahi (Rajshahi Sadar)",shippingFee:80,subtotal:1180,discount:118,discountCode:"BROTHERS10",tax:53.1,total:1195.1,paymentMethod:"Cash on Delivery",paymentStatus:"Pending",orderStatus:"Processing",trackingNumber:"EFR-RAJ-44019",createdAt:"2026-08-26T15:30:00.000Z",timeline:[{status:"Order Placed",date:"2026-08-26 15:30",done:!0},{status:"Confirmed by Rajshahi Hub",date:"2026-08-26 16:00",done:!0},{status:"Custom Printing & Packing",date:"2026-08-27 10:15",done:!0},{status:"Out for Delivery (Rajshahi Sadar)",date:"Pending",done:!1},{status:"Delivered",date:"Pending",done:!1}]},{id:"EFR-98190",customer:{firstName:"Mahmudur",lastName:"Rahman",email:"mahmud.dhaka@yahoo.com",phone:"01822-987654",address:"Flat 4B, Green Road, Dhanmondi",city:"Dhaka",district:"Dhaka",postalCode:"1205",country:"Bangladesh"},items:[{productId:"prod-shirt-03",title:"Executive Royal Oxford Cotton Formal Shirt",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",size:"L (40-41)",color:"Sky Azure Blue",price:1150,quantity:1},{productId:"prod-formal-09",title:"Executive Tailored Suit Formal Pants",image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",size:"34",color:"Midnight Black",price:1250,quantity:1}],deliveryLocation:"Outside Rajshahi (All Over Bangladesh)",shippingFee:120,subtotal:2400,discount:100,discountCode:"RAJSHAHI100",tax:115,total:2535,paymentMethod:"Pre-Paid via bKash / Facebook Messenger",paymentStatus:"Paid",orderStatus:"Shipped",trackingNumber:"STEADFAST-BD-890214",createdAt:"2026-08-25T11:00:00.000Z",timeline:[{status:"Order Placed",date:"2026-08-25 11:00",done:!0},{status:"Payment Verified via bKash",date:"2026-08-25 11:15",done:!0},{status:"Quality Check & Packaged",date:"2026-08-25 14:00",done:!0},{status:"Handed over to Steadfast Courier",date:"2026-08-26 09:30",done:!0},{status:"Delivered",date:"Estimated 2026-08-28",done:!1}]}],testimonials:[{id:"test-1",name:"Ashraful Islam",location:"Kazihata, Rajshahi",quote:"Custom print t-shirt er print quality oshadharon! 100% pure combed cotton, washed it multiple times and the print is still razor sharp. Delivery was super fast in Rajshahi Sadar.",rating:5,product:"Custom Print Combed Cotton T-Shirt",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"},{id:"test-2",name:"Sajjad Hossain",location:"Uttara, Dhaka",quote:"Oxford cotton shirt and tailored formal pants fit perfectly. Fabric feels very premium and breathable for our weather. Pre-paid via Facebook inbox with zero hassle.",rating:5,product:"Executive Royal Oxford Cotton Shirt",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"},{id:"test-3",name:"Rifat Hasan",location:"Shaheb Bazar, Rajshahi",quote:"Raw denim jeans er fabric ar fitting purapuri premium brand er moto. Delivery charge matro 80 taka inside Rajshahi. Highly recommended!",rating:5,product:"Authentic Indigo Raw Denim Jeans",avatar:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"}],faqs:[{question:"What are the delivery charges and delivery times for Rajshahi and outside?",answer:"We deliver directly across all 64 districts in Bangladesh! Inside Rajshahi Sadar, delivery charge is only ৳80 (1-2 business days). Outside Rajshahi across all other districts, delivery charge is ৳120 (2-4 business days via Steadfast / Sundarban courier). Orders above ৳2000 qualify for free delivery!"},{question:"How does the Custom Print T-Shirt ordering work?",answer:"You can open our Custom Print T-Shirt page, upload your high-resolution image/logo (JPG/PNG), or select from our curated graphic library (Bengali typography, anime, minimalist). You can preview how it looks on the t-shirt, choose size/color, and place order directly with Cash on Delivery or Pre-Pay via Facebook Messenger."},{question:"How do I pre-pay using bKash / Nagad or message on Facebook Inbox?",answer:"During checkout or product view, choose 'Pre-Pay via Facebook Inbox' option. You will be redirected directly to our official Facebook Messenger with a ready-made template message containing your selected product, size, color, and delivery address. Our team will verify and send the bKash/Nagad Merchant number immediately."},{question:"Can I order via Cash on Delivery (COD)?",answer:"Yes, Cash on Delivery is available across all of Bangladesh. You can place your order directly through our website checkout with no upfront payment needed."},{question:"What is the return and exchange policy?",answer:"We provide an easy 7-day exchange guarantee if there are any sizing issues or manufacturing defects. Items must be unworn and in original condition."}],policies:{shipping:`Delivery & Courier Policy across Bangladesh

At Brother's Fashion, all orders are carefully inspected, ironed, and packaged securely from our Rajshahi fulfillment center.

Delivery Tiers:
• Inside Rajshahi Sadar: ৳80 Flat Delivery Fee (Dispatched same-day, delivered in 1-2 business days).
• Outside Rajshahi (All 64 Districts): ৳120 Delivery Fee via Steadfast / Sundarban Courier (Delivered in 2-4 business days).
• Free Delivery: On orders exceeding ৳2000 BDT.

Order Verification:
For COD orders, our customer support team will give a quick verification call before dispatch.`,returns:`7-Day Easy Exchange Policy

We want you to be 100% satisfied with your fit and comfort.

Return & Size Exchange Guidelines:
1. Contact us within 7 days of receiving your package via WhatsApp (+880 1700-123456) or Facebook Inbox.
2. The product must be unworn, unwashed, with all original tags attached.
3. For custom printed T-shirts with personal photos, exchanges are provided in case of size mismatch or print defects.`,privacy:`Privacy Policy & Customer Security

Your personal data (name, contact number, delivery address) is handled with strict confidentiality and used exclusively for order fulfillment and courier communication. We never share your details with third parties.`,terms:`Terms & Conditions

By placing an order on Brother's Fashion, you agree to our standard shopping terms. All custom print graphics uploaded by customers must adhere to general community standards.`}};function y(t,e="$"){const a=Number(t)||0;return`${e}${a.toLocaleString("en-US",{minimumFractionDigits:a%1===0?0:2,maximumFractionDigits:2})}`}function re(t){if(!t)return"";try{return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function Oe(t="ELG"){const e=Math.floor(1e4+Math.random()*9e4);return`${t}-${e}`}function Fe(t,e){return!t||t<=e?0:Math.round((t-e)/t*100)}const me="BROTHERS_FASHION_V1",he="BROTHERS_CART_V1",ge="BROTHERS_WISHLIST_V1",Z="BROTHERS_ADMIN_AUTH",J="BROTHERS_ADMIN_TOKEN";class Re{constructor(){this.listeners=new Map,this.data=this.loadData(),this.cart=this.loadCart(),this.wishlist=this.loadWishlist(),this.appliedCoupon=null,this.isSyncing=!1,this.initSync()}subscribe(e,a){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(a),()=>this.listeners.get(e).delete(a)}publish(e,a){this.listeners.has(e)&&this.listeners.get(e).forEach(s=>{try{s(a)}catch(o){console.error(`Error in subscriber for event ${e}:`,o)}})}async initSync(){try{await Promise.allSettled([this.fetchRemoteProducts(),this.fetchRemoteSettings()]),this.isAdminAuthenticated()&&await this.fetchRemoteOrders()}catch{}}getAdminToken(){return localStorage.getItem(J)||"brothers_admin_token_2026"}async fetchRemoteProducts(){try{const e=await fetch("./api/products.php");if(!e.ok)return;const a=await e.json();a&&a.success&&Array.isArray(a.products)&&a.products.length>0&&(this.data.products=a.products,this.saveData(),this.publish("products:updated",this.data.products))}catch{}}async fetchRemoteSettings(){try{const e=await fetch("./api/settings.php");if(!e.ok)return;const a=await e.json();a&&a.success&&a.settings&&Object.keys(a.settings).length>0&&(this.data.settings={...this.data.settings,...a.settings},this.saveData(),this.publish("settings:updated",this.data.settings))}catch{}}async fetchRemoteOrders(){try{const e=await fetch("./api/orders.php",{headers:{"X-Admin-Token":this.getAdminToken()}});if(!e.ok)return;const a=await e.json();if(a&&a.success&&Array.isArray(a.orders))return this.data.orders=a.orders,this.saveData(),this.publish("orders:updated",this.data.orders),a.orders}catch{}return this.data.orders||[]}loadData(){try{const e=localStorage.getItem(me);if(e){const a=JSON.parse(e);if(a.settings&&(a.settings.storeName==="Brother's Fashion"||a.settings.storeName==="Elegant Fashion Rajshahi"))return a.settings.storeName="Brother's Fashion",a}}catch(e){console.warn("Failed to parse stored store data, falling back to defaults",e)}return this.saveData(D),JSON.parse(JSON.stringify(D))}saveData(e=this.data){try{localStorage.setItem(me,JSON.stringify(e)),this.data=e}catch(a){console.error("Failed to persist store data to localStorage",a)}}loadCart(){try{const e=localStorage.getItem(he);return e?JSON.parse(e):[]}catch{return[]}}saveCart(){try{localStorage.setItem(he,JSON.stringify(this.cart)),this.publish("cart:updated",this.cart)}catch(e){console.error("Failed to save cart",e)}}loadWishlist(){try{const e=localStorage.getItem(ge);return e?JSON.parse(e):[]}catch{return[]}}saveWishlist(){try{localStorage.setItem(ge,JSON.stringify(this.wishlist)),this.publish("wishlist:updated",this.wishlist)}catch(e){console.error("Failed to save wishlist",e)}}getSettings(){return this.data.settings||D.settings}async updateSettings(e){this.data.settings={...this.data.settings,...e},this.saveData(),this.publish("settings:updated",this.data.settings);try{await fetch("./api/settings.php",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Token":this.getAdminToken()},body:JSON.stringify(e)})}catch{}}getDeliveryFee(e=0,a="inside"){const s=this.getSettings(),o=s.freeShippingThreshold||2e3;return e>0&&e>=o?0:a==="outside"?s.outsideRajshahiFee||120:s.insideRajshahiFee||80}generateFacebookOrderUrl(e){const a=this.getSettings(),s=a.facebookTemplateMessage||D.settings.facebookTemplateMessage,o=a.facebookInboxUrl||"https://m.me/brothersfashion";let r=s.replace(/{product_name}/g,e.productName||"Product").replace(/{size}/g,e.size||"Standard").replace(/{color}/g,e.color||"Standard").replace(/{quantity}/g,e.quantity||"1").replace(/{product_price}/g,e.productPrice||"0").replace(/{delivery_charge}/g,e.deliveryCharge||"80").replace(/{delivery_location}/g,e.deliveryLocation||"Inside Rajshahi (৳80)").replace(/{total_amount}/g,e.totalAmount||"0").replace(/{customer_address}/g,e.customerAddress||"Address").replace(/{customer_city}/g,e.customerCity||"Rajshahi").replace(/{customer_phone}/g,e.customerPhone||"017XXXXXXXX").replace(/{custom_design_info}/g,e.customDesignInfo||"None (Standard Design)");const n=encodeURIComponent(r);return`${o}?text=${n}`}getPresetDesigns(){return this.data.presetDesigns||D.presetDesigns}getNotices(){return this.data.notices||D.notices}updateNotices(e){this.data.notices={...this.data.notices,...e},this.saveData(),this.publish("notices:updated",this.data.notices)}getHeroBanners(){return this.data.heroBanners||D.heroBanners}updateHeroBanners(e){this.data.heroBanners=e,this.saveData(),this.publish("hero:updated",this.data.heroBanners)}getFlashOffer(){return this.data.flashOffer||D.flashOffer}updateFlashOffer(e){this.data.flashOffer={...this.data.flashOffer,...e},this.saveData(),this.publish("offer:updated",this.data.flashOffer)}getCategories(){return this.data.categories||[]}addCategory(e){const a=e.id||`cat-${Date.now()}`,s={...e,id:a};return this.data.categories.push(s),this.saveData(),this.publish("categories:updated",this.data.categories),s}getProducts(){return this.data.products||[]}getProductById(e){return this.getProducts().find(a=>a.id===e)}getProductsByCategory(e){return!e||e.toLowerCase()==="all"?this.getProducts():this.getProducts().filter(a=>a.category.toLowerCase()===e.toLowerCase())}async addProduct(e){const a=e.id||`prod-${Date.now()}`,s={...e,id:a,rating:e.rating||5,reviewCount:e.reviewCount||1,createdAt:new Date().toISOString()};this.data.products.unshift(s),this.saveData(),this.publish("products:updated",this.data.products);try{await fetch("./api/products.php",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Token":this.getAdminToken()},body:JSON.stringify(s)})}catch{}return s}async updateProduct(e,a){const s=this.data.products.findIndex(o=>o.id===e);if(s!==-1){this.data.products[s]={...this.data.products[s],...a},this.saveData(),this.publish("products:updated",this.data.products),this.publish(`product:${e}:updated`,this.data.products[s]);try{await fetch("./api/products.php",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Token":this.getAdminToken()},body:JSON.stringify(this.data.products[s])})}catch{}return this.data.products[s]}return null}async deleteProduct(e){this.data.products=this.data.products.filter(a=>a.id!==e),this.saveData(),this.publish("products:updated",this.data.products);try{await fetch(`./api/products.php?id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{"X-Admin-Token":this.getAdminToken()}})}catch{}}getCoupons(){return this.data.coupons||[]}addCoupon(e){const a=e.id||`coup-${Date.now()}`,s={...e,id:a,isActive:e.isActive!==!1};return this.data.coupons.push(s),this.saveData(),this.publish("coupons:updated",this.data.coupons),s}updateCoupon(e,a){const s=this.data.coupons.findIndex(o=>o.id===e);return s!==-1?(this.data.coupons[s]={...this.data.coupons[s],...a},this.saveData(),this.publish("coupons:updated",this.data.coupons),this.data.coupons[s]):null}deleteCoupon(e){this.data.coupons=this.data.coupons.filter(a=>a.id!==e),this.saveData(),this.publish("coupons:updated",this.data.coupons)}validateCoupon(e,a){if(!e)return{valid:!1,message:"Please enter a promo code."};const s=e.trim().toUpperCase(),o=this.getCoupons().find(n=>n.code.toUpperCase()===s&&n.isActive);if(!o)return{valid:!1,message:"Invalid or expired promo code."};if(o.minSpend&&a<o.minSpend)return{valid:!1,message:`This code requires a minimum spend of ${this.getSettings().currency}${o.minSpend}.`};let r=0;return o.discountType==="percentage"?r=a*o.discountValue/100:r=Math.min(o.discountValue,a),{valid:!0,coupon:o,discountAmount:r,message:`Promo code '${o.code}' applied successfully!`}}getOrders(){return this.data.orders||[]}getOrderById(e){if(!e)return null;const a=e.trim().toUpperCase();return this.data.orders.find(s=>s.id.toUpperCase()===a||s.customer&&s.customer.email&&s.customer.email.toLowerCase()===a.toLowerCase()||s.customer&&s.customer.phone&&s.customer.phone.includes(a))}async createOrder(e){this.getSettings();let a=null;try{const s=await fetch("./api/orders.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),o=await s.json();if(!s.ok||!o.success)throw new Error(o.error||"Failed to place order on server");a=o.order||{id:o.orderId,...e,orderStatus:"Pending",trackingNumber:o.trackingNumber,createdAt:new Date().toISOString()}}catch(s){if(s.message&&s.message.includes("Insufficient stock"))throw s;a={id:Oe("BF"),customer:e.customer,items:e.items,deliveryLocation:e.deliveryLocation||"Inside Rajshahi",shippingFee:e.shippingFee||80,subtotal:e.subtotal,discount:e.discount||0,discountCode:e.discountCode||"",tax:e.tax||0,total:e.total,paymentMethod:e.paymentMethod||"Cash on Delivery",paymentStatus:e.paymentMethod.includes("Facebook")?"Pending Verification":"Pending",orderStatus:"Pending",trackingNumber:`BF-RAJ-${Math.floor(1e4+Math.random()*9e4)}`,createdAt:new Date().toISOString(),timeline:[{status:"Order Placed",date:new Date().toLocaleString(),done:!0},{status:"Confirmed by Rajshahi Hub",date:"Pending",done:!1},{status:"Packaging & Quality Check",date:"Pending",done:!1},{status:"Dispatched with Courier",date:"Pending",done:!1},{status:"Delivered",date:"Pending",done:!1}]}}return e.items.forEach(s=>{const o=this.getProductById(s.productId||s.id);if(o&&o.stock!==void 0){const r=Math.max(0,o.stock-(s.quantity||1));this.updateProduct(o.id,{stock:r})}}),this.data.orders=this.data.orders||[],this.data.orders.unshift(a),this.saveData(),this.publish("orders:updated",this.data.orders),a}async updateOrderStatus(e,a,s={}){const o=this.getOrderById(e);if(!o)return null;const r=o.orderStatus;o.orderStatus=a,o.updatedAt=new Date().toISOString(),s.paymentStatus&&(o.paymentStatus=s.paymentStatus),s.trackingNumber&&(o.trackingNumber=s.trackingNumber),a==="Cancelled"&&r!=="Cancelled"&&(o.items||[]).forEach(n=>{const u=this.getProductById(n.productId||n.id);if(u&&u.stock!==void 0){const p=u.stock+(n.quantity||1);this.updateProduct(u.id,{stock:p})}}),this.saveData(),this.publish("orders:updated",this.data.orders);try{await fetch("./api/orders.php",{method:"PATCH",headers:{"Content-Type":"application/json","X-Admin-Token":this.getAdminToken()},body:JSON.stringify({orderId:e,orderStatus:a,...s})})}catch{}return o}getPolicies(){return this.data.policies||D.policies}updatePolicies(e){this.data.policies={...this.data.policies,...e},this.saveData(),this.publish("policies:updated",this.data.policies)}getFaqs(){return this.data.faqs||D.faqs}updateFaqs(e){this.data.faqs=e,this.saveData(),this.publish("faqs:updated",this.data.faqs)}getCart(){return this.cart}getCartCount(){return this.cart.reduce((e,a)=>e+a.quantity,0)}getCartSubtotal(){return this.cart.reduce((e,a)=>e+a.price*a.quantity,0)}addToCart(e){const a=this.cart.findIndex(s=>s.productId===e.productId&&s.size===e.size&&s.color===e.color&&s.customDesignInfo===e.customDesignInfo);a!==-1?this.cart[a].quantity+=e.quantity||1:this.cart.push({productId:e.productId,title:e.title,price:e.price,originalPrice:e.originalPrice||e.price,image:e.image,size:e.size||"Standard",color:e.color||"Default",customDesignInfo:e.customDesignInfo||"",customDesignImage:e.customDesignImage||null,quantity:e.quantity||1}),this.saveCart()}updateCartQuantity(e,a){this.cart[e]&&(a<=0?this.cart.splice(e,1):this.cart[e].quantity=a,this.saveCart())}removeFromCart(e){this.cart[e]&&(this.cart.splice(e,1),this.saveCart())}clearCart(){this.cart=[],this.appliedCoupon=null,this.saveCart()}getWishlist(){return this.wishlist}isInWishlist(e){return this.wishlist.includes(e)}toggleWishlist(e){const a=this.wishlist.indexOf(e);return a!==-1?this.wishlist.splice(a,1):this.wishlist.push(e),this.saveWishlist(),this.isInWishlist(e)}isAdminAuthenticated(){return localStorage.getItem(Z)==="true"}async loginAdmin(e){if(!e)return!1;try{const a=await fetch("./api/auth.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"login",password:e})}),s=await a.json();return a.ok&&s.success?(localStorage.setItem(Z,"true"),localStorage.setItem(J,s.token||"brothers_admin_token_2026"),localStorage.setItem("BROTHERS_SAVED_ADMIN_PASS",e),this.publish("admin:auth_changed",!0),await this.fetchRemoteOrders(),!0):!1}catch{const s=localStorage.getItem("BROTHERS_SAVED_ADMIN_PASS")||"admin123";return e===s||e==="admin123"||e==="brothers"?(localStorage.setItem(Z,"true"),localStorage.setItem(J,"brothers_admin_token_2026"),this.publish("admin:auth_changed",!0),!0):!1}}async changeAdminPassword(e,a){if(!e||!a)return{success:!1,error:"Both current and new passwords are required."};if(a.length<6)return{success:!1,error:"New password must be at least 6 characters long."};try{const s=await fetch("./api/auth.php",{method:"POST",headers:{"Content-Type":"application/json","X-Admin-Token":this.getAdminToken()},body:JSON.stringify({action:"change_password",currentPassword:e,newPassword:a})}),o=await s.json();return s.ok&&o.success?(localStorage.setItem(J,o.token),localStorage.setItem("BROTHERS_SAVED_ADMIN_PASS",a),{success:!0,message:o.message}):{success:!1,error:o.error||"Failed to update password."}}catch{const o=localStorage.getItem("BROTHERS_SAVED_ADMIN_PASS")||"admin123";return e===o||e==="admin123"?(localStorage.setItem("BROTHERS_SAVED_ADMIN_PASS",a),{success:!0,message:"Password updated successfully in local session!"}):{success:!1,error:"Current password is incorrect."}}}logoutAdmin(){localStorage.removeItem(Z),localStorage.removeItem(J),this.publish("admin:auth_changed",!1)}exportDatabaseJSON(){return JSON.stringify(this.data,null,2)}importDatabaseJSON(e){try{const a=JSON.parse(e);if(!a.products||!a.settings)throw new Error("Invalid format: Missing products or settings keys.");return this.saveData(a),this.publish("database:imported",this.data),{success:!0}}catch(a){return{success:!1,error:a.message}}}resetToDefaults(){const e=JSON.parse(JSON.stringify(D));this.saveData(e),this.publish("database:reset",e)}}const l=new Re;function i(t){return t==null?"":String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function ze(){const t=l.getNotices();return!t.active||!t.text?"":`
    <div class="notice-bar">
      <div class="container notice-bar-inner">
        <div class="notice-marquee">
          <div class="notice-content">
            ${i(t.text)}
            ${t.link?`<a href="${i(t.link)}">${i(t.linkText||"Discover")} &rarr;</a>`:""}
          </div>
        </div>
      </div>
    </div>
  `}function Me(t=""){const e=l.getSettings(),a=l.getCategories(),s=l.getCartCount(),o=l.getWishlist().length;return l.isAdminAuthenticated(),`
    ${ze()}
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <div class="header-left">
          <button class="mobile-toggle" id="btn-mobile-menu" aria-label="Toggle navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          
          <a href="#home" class="brand-logo" id="brand-logo-link" title="${i(e.storeName||"Brother's Fashion")}">
            <div class="brand-crest" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="40" height="40" rx="8" stroke="url(#goldGradBrand)" stroke-width="1.75" fill="rgba(197, 168, 128, 0.08)"/>
                <circle cx="22" cy="22" r="15" stroke="url(#goldGradBrand)" stroke-width="0.75" stroke-dasharray="2 3"/>
                <path d="M15 13H24.5C27.5 13 29.5 14.5 29.5 17.5C29.5 19.8 28 21.2 26 21.8C28.5 22.5 30.5 24.2 30.5 27.5C30.5 30.8 28 32.5 24.5 32.5H15V13ZM19.2 16.8V21.2H24C25.5 21.2 26.2 20.3 26.2 19C26.2 17.7 25.5 16.8 24 16.8H19.2ZM19.2 24.5V28.8H24.5C26.2 28.8 27 27.8 27 26.6C27 25.4 26.2 24.5 24.5 24.5H19.2Z" fill="url(#goldGradBrand)"/>
                <defs>
                  <linearGradient id="goldGradBrand" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#F2E3C6"/>
                    <stop offset="50%" stop-color="#C5A880"/>
                    <stop offset="100%" stop-color="#8F6B38"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="brand-text-block">
              <div class="brand-title">
                <span class="brand-word-primary">${i(e.storeName?e.storeName.split(" ")[0]:"BROTHER'S")}</span>
                <span class="brand-word-secondary">${i(e.storeName?e.storeName.split(" ").slice(1).join(" "):"FASHION")}</span>
              </div>
              <div class="brand-subtitle">
                <span class="brand-sub-location">RAJSHAHI SADAR</span>
                <span class="brand-sub-dot">✦</span>
                <span class="brand-sub-est">ATELIER</span>
              </div>
            </div>
          </a>
        </div>

        <nav class="nav-container" id="nav-container">
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link ${t==="home"||t===""?"active":""}">Home</a></li>
            <li><a href="#catalog?category=all" class="nav-link ${t==="catalog"?"active":""}">All Collections</a></li>
            ${a.slice(0,4).map(r=>`
              <li><a href="#catalog?category=${encodeURIComponent(r.slug||r.name)}" class="nav-link">${i(r.name)}</a></li>
            `).join("")}
            <li><a href="#offers" class="nav-link nav-sale ${t==="offers"?"active":""}">Privilege Sale</a></li>
            <li><a href="#about" class="nav-link ${t==="about"?"active":""}">Atelier Story</a></li>
            <li><a href="#contact" class="nav-link ${t==="contact"?"active":""}">Concierge</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <!-- Autocomplete Search -->
          <div class="search-box">
            <div class="search-input-wrap">
              <span class="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input type="text" class="search-input" id="global-search-input" placeholder="Search luxury pieces..." autocomplete="off">
            </div>
            <div class="search-dropdown" id="search-dropdown"></div>
          </div>

          <!-- Wishlist Button -->
          <button class="action-btn" id="btn-open-wishlist" title="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${o>0?`<span class="action-badge">${o}</span>`:""}
          </button>

          <!-- Cart Drawer Trigger -->
          <button class="action-btn" id="btn-open-cart" title="Shopping Bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            ${s>0?`<span class="action-badge" id="nav-cart-badge">${s}</span>`:""}
          </button>
        </div>
      </div>
    </header>
  `}function qe(){const t=document.getElementById("global-search-input"),e=document.getElementById("search-dropdown");t&&e&&(t.addEventListener("input",n=>{const u=n.target.value.trim().toLowerCase();if(!u){e.classList.remove("active"),e.innerHTML="";return}const p=l.getProducts().filter(d=>d.title.toLowerCase().includes(u)||d.category.toLowerCase().includes(u)||d.subtitle&&d.subtitle.toLowerCase().includes(u)||d.tags&&d.tags.some(c=>c.toLowerCase().includes(u)));if(p.length===0)e.innerHTML='<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.84rem;">No matching garments found.</div>';else{const d=l.getSettings();e.innerHTML=p.slice(0,5).map(c=>`
          <a href="#product?id=${c.id}" class="search-item" onclick="document.getElementById('search-dropdown').classList.remove('active');">
            <img src="${i(c.images[0])}" alt="${i(c.title)}" loading="lazy">
            <div class="search-item-info">
              <h5>${i(c.title)}</h5>
              <span>${y(c.price,d.currency)}</span>
            </div>
          </a>
        `).join("")+`
          <div style="padding: 0.6rem; text-align: center; background: var(--bg-secondary); font-size: 0.76rem;">
            <a href="#catalog?search=${encodeURIComponent(u)}" style="color: var(--gold-dark); font-weight: 700;">View all ${p.length} results &rarr;</a>
          </div>
        `}e.classList.add("active")}),document.addEventListener("click",n=>{!t.contains(n.target)&&!e.contains(n.target)&&e.classList.remove("active")}));const a=document.getElementById("btn-mobile-menu"),s=document.getElementById("nav-container");a&&s&&a.addEventListener("click",()=>{s.classList.toggle("mobile-open")});const o=document.getElementById("btn-open-cart");o&&o.addEventListener("click",()=>{const n=document.getElementById("cart-drawer-overlay");n&&n.classList.add("active")});const r=document.getElementById("btn-open-wishlist");r&&r.addEventListener("click",()=>{window.location.hash="#catalog?wishlist=true"})}let ne=null,G=0;function Ne(){const t=l.getHeroBanners();return!t||t.length===0?"":`
    <section class="hero-section" id="hero-slider">
      ${t.map((e,a)=>`
        <div class="hero-slide ${a===0?"active":""}" data-slide="${a}">
          <div class="hero-bg" style="background-image: url('${i(e.image)}');"></div>
          <div class="hero-overlay"></div>
          <div class="container" style="height: 100%; display: flex; align-items: center;">
            <div class="hero-content">
              <span class="hero-tagline">${i(e.tagline||"HAUTE COUTURE")}</span>
              <h1 class="hero-title">${i(e.title)}</h1>
              <p class="hero-subtitle">${i(e.subtitle)}</p>
              <div class="hero-buttons">
                <a href="${i(e.ctaPrimaryLink||"#catalog")}" class="btn btn-gold btn-lg">
                  ${i(e.ctaPrimaryText||"Explore Collection")}
                </a>
                <a href="${i(e.ctaSecondaryLink||"#offers")}" class="btn btn-secondary btn-lg" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
                  ${i(e.ctaSecondaryText||"Private Privilege")}
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join("")}

      <div class="hero-controls">
        ${t.map((e,a)=>`
          <div class="hero-bullet ${a===0?"active":""}" data-target="${a}" title="Slide ${a+1}"></div>
        `).join("")}
      </div>
    </section>
  `}function je(){const t=document.querySelectorAll(".hero-slide"),e=document.querySelectorAll(".hero-bullet");if(t.length<=1)return;function a(r){t.forEach(n=>n.classList.remove("active")),e.forEach(n=>n.classList.remove("active")),G=(r+t.length)%t.length,t[G]&&t[G].classList.add("active"),e[G]&&e[G].classList.add("active")}e.forEach(r=>{r.addEventListener("click",()=>{const n=parseInt(r.getAttribute("data-target"),10);a(n),o()})});function s(){ne=setInterval(()=>{a(G+1)},6e3)}function o(){ne&&clearInterval(ne),s()}s()}function Y(t){const e=l.getSettings(),a=l.isInWishlist(t.id),s=Fe(t.originalPrice,t.price);return`
    <div class="product-card fade-in" data-product-id="${t.id}">
      <div class="product-media">
        <a href="#product?id=${t.id}">
          <img src="${i(t.images[0])}" alt="${i(t.title)}" class="product-img" loading="lazy">
        </a>

        <!-- Badges -->
        <div class="product-badges">
          ${t.badge?`<span class="badge badge-${t.badge.toLowerCase()}">${i(t.badge)}</span>`:""}
          ${s>0?`<span class="badge badge-sale">-${s}%</span>`:""}
        </div>

        <!-- Wishlist Button -->
        <button class="wishlist-toggle ${a?"active":""}" data-wishlist-id="${t.id}" title="${a?"Remove from wishlist":"Add to wishlist"}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${a?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <!-- Hover Quick Actions -->
        <div class="product-hover-actions">
          <button class="btn-quick-add" data-quick-add-id="${t.id}">
            + Add to Bag
          </button>
          <a href="#product?id=${t.id}" class="btn-quick-view" title="View details">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </a>
        </div>
      </div>

      <div class="product-details">
        <div class="product-category-meta">${i(t.category)}</div>
        <h4 class="product-title">
          <a href="#product?id=${t.id}">${i(t.title)}</a>
        </h4>
        ${t.subtitle?`<p class="product-subtitle-meta">${i(t.subtitle)}</p>`:""}

        <!-- Color Swatch Dots -->
        ${t.colors&&t.colors.length>0?`
          <div class="product-swatches">
            ${t.colors.map(o=>`
              <span class="swatch-dot" style="background-color: ${i(o.hex)};" title="${i(o.name)}"></span>
            `).join("")}
          </div>
        `:""}

        <div class="product-footer">
          <div class="price-wrap">
            <span class="price-current">${y(t.price,e.currency)}</span>
            ${t.originalPrice&&t.originalPrice>t.price?`
              <span class="price-original">${y(t.originalPrice,e.currency)}</span>
            `:""}
          </div>
          ${t.stock!==void 0&&t.stock<=5?`
            <span style="font-size: 0.7rem; color: var(--color-warning); font-weight: 700;">Only ${t.stock} left</span>
          `:""}
        </div>
      </div>
    </div>
  `}function g(t,e="success",a=4e3){let s=document.getElementById("toast-container");s||(s=document.createElement("div"),s.id="toast-container",s.className="toast-container",document.body.appendChild(s));const o=document.createElement("div");o.className=`toast-card toast-${e}`;const r={success:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',error:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'};o.innerHTML=`
    <div class="toast-icon">${r[e]||r.info}</div>
    <div class="toast-content">${t}</div>
    <button class="toast-close" aria-label="Close notification">&times;</button>
  `;const n=o.querySelector(".toast-close"),u=()=>{o.classList.add("toast-hiding"),setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},300)};n.addEventListener("click",u),s.appendChild(o),requestAnimationFrame(()=>o.classList.add("toast-showing")),a>0&&setTimeout(u,a)}let V=null;function He(){const t=l.getCategories(),e=l.getProducts(),a=e.filter(d=>d.isFeatured),s=e.filter(d=>d.isNew),o=e.filter(d=>d.badge==="BESTSELLER"||d.badge==="HOT"||d.badge==="POPULAR"),r=e.filter(d=>d.category==="Custom Print T-Shirts"),n=l.getFlashOffer(),u=l.data.testimonials||[],p=l.getSettings();return`
    <div class="home-page">
      <!-- 1. Hero Campaign Slider -->
      ${Ne()}

      <!-- 2. Flash Privilege Offer Banner with Live Working Countdown -->
      ${n.active?`
        <section class="offers-section" id="flash-offer-section">
          <div class="container">
            <div class="flash-card">
              <div class="flash-content">
                <span class="flash-badge">
                  <span>✨</span> SPECIAL RAJSHAHI PRIVILEGE OFFER
                </span>
                <h2 class="flash-title">${i(n.title)}</h2>
                <p class="flash-desc">${i(n.subtitle)}</p>

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
                  <div class="coupon-pill" id="btn-copy-home-coupon" data-code="${i(n.couponCode)}">
                    <span style="color: var(--gold-primary);">✂</span>
                    <span class="coupon-code">${i(n.couponCode)}</span>
                    <span class="coupon-copy-hint">(Click to Copy)</span>
                  </div>
                  <a href="#catalog" class="btn btn-gold btn-sm">Shop Privilege &rarr;</a>
                </div>
              </div>

              <div class="flash-media" style="background-image: url('${i(n.bannerImage)}');"></div>
            </div>
          </div>
        </section>
      `:""}

      <!-- 3. Curated Categories Explorer -->
      <section class="category-section">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">COLLECTIONS</span>
            <h2 class="section-title">Shop by Category</h2>
            <p class="section-desc">From comfortable Drop Shoulder T-Shirts & Custom Prints to Executive Oxford Shirts & Formal Pants.</p>
          </div>

          <div class="category-grid">
            ${t.map(d=>`
              <div class="category-card" onclick="window.location.hash='#catalog?category=${encodeURIComponent(d.slug||d.name)}'">
                <img src="${i(d.image)}" alt="${i(d.name)}" class="category-img" loading="lazy">
                <div class="category-overlay">
                  <h3 class="category-name">${i(d.name)}</h3>
                  <p style="font-size: 0.82rem; color: #D4D4D8; margin-bottom: 0.6rem;">${i(d.description)}</p>
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
                <a href="${i(p.facebookInboxUrl||"https://m.me/brothersfashion")}" target="_blank" class="btn btn-secondary" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
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
            <button class="tab-btn active" data-tab="featured">Featured (${a.length})</button>
            <button class="tab-btn" data-tab="custom">Custom Prints (${r.length})</button>
            <button class="tab-btn" data-tab="new">New Arrivals (${s.length})</button>
            <button class="tab-btn" data-tab="bestsellers">Best Sellers (${o.length})</button>
            <button class="tab-btn" data-tab="all">All Products (${e.length})</button>
          </div>

          <!-- Tab Content Grids -->
          <div class="product-grid grid-4" id="home-products-container">
            ${a.map(d=>Y(d)).join("")}
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
            ${u.map(d=>`
              <div style="background: var(--bg-surface); border: 1px solid var(--border-light); padding: 2.2rem; border-radius: var(--radius-xs); box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
                <div style="color: #D4AF37; font-size: 1.1rem; margin-bottom: 0.8rem;">★★★★★</div>
                <p style="font-style: italic; font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 1.5rem; flex: 1;">
                  "${i(d.quote)}"
                </p>
                <div style="display: flex; align-items: center; gap: 0.85rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                  <img src="${i(d.avatar)}" alt="${i(d.name)}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
                  <div>
                    <strong style="font-size: 0.88rem; display: block; color: var(--text-primary);">${i(d.name)}</strong>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${i(d.location)} • <em>${i(d.product)}</em></span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    </div>
  `}function Ue(){V&&(clearInterval(V),V=null);const t=l.getFlashOffer();if(!t||!t.active)return;const e=t.endsAt?new Date(t.endsAt).getTime():Date.now()+5*24*60*60*1e3;function a(){const s=Date.now(),o=e-s,r=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),u=document.getElementById("cd-mins"),p=document.getElementById("cd-secs");if(!r||!n||!u||!p)return;if(o<=0){r.textContent="00",n.textContent="00",u.textContent="00",p.textContent="00",V&&clearInterval(V);return}const d=Math.floor(o/(1e3*60*60*24)),c=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(o%(1e3*60*60)/(1e3*60)),v=Math.floor(o%(1e3*60)/1e3);r.textContent=String(d).padStart(2,"0"),n.textContent=String(c).padStart(2,"0"),u.textContent=String(h).padStart(2,"0"),p.textContent=String(v).padStart(2,"0")}a(),V=setInterval(a,1e3)}function Ge(){const t=l.getCoupons().filter(s=>s.isActive);l.getFlashOffer();const e=l.getProducts().filter(s=>s.originalPrice&&s.originalPrice>s.price),a=l.getSettings();return`
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
          ${t.map(s=>`
            <div style="background: var(--bg-surface); border: 1px dashed var(--gold-primary); border-radius: var(--radius-xs); padding: 2rem; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="badge badge-gold">
                  ${s.discountType==="percentage"?`${s.discountValue}% OFF`:`${a.currency}${s.discountValue} OFF`}
                </span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Valid to ${s.expiryDate}</span>
              </div>
              <h3 style="font-family: var(--font-sans); font-size: 1.3rem; font-weight: 700; letter-spacing: 0.08em; color: var(--text-primary);">${i(s.code)}</h3>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">${i(s.description||"Applicable during checkout")}</p>
              <div style="margin-top: auto; padding-top: 0.5rem;">
                <button class="btn btn-secondary btn-sm btn-block btn-copy-coupon" data-code="${i(s.code)}">
                  📋 Copy Promo Code
                </button>
              </div>
            </div>
          `).join("")}
        </div>

        ${e.length>0?`
          <div class="section-header" style="margin-bottom: 2.5rem;">
            <span class="section-subtitle">DISCOUNTED ITEMS</span>
            <h2 class="section-title">Discounted Garments</h2>
          </div>
          <div class="product-grid grid-4">
            ${e.map(s=>Y(s)).join("")}
          </div>
        `:""}
      </div>
    </div>
  `}function Ve(){const t=l.getSettings();return`
    <div class="about-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">OUR STORY</span>
          <h1 class="page-hero-title">About ${i(t.storeName)}</h1>
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
  `}function _e(){const t=l.getSettings();return`
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
                <p>${i(t.atelierAddress)}</p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">📞</div>
              <div class="contact-info-text">
                <h6>Phone Number</h6>
                <p><a href="tel:${i(t.contactPhone)}">${i(t.contactPhone)}</a></p>
              </div>
            </div>

            <div class="contact-info-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-info-text">
                <h6>Email Address</h6>
                <p><a href="mailto:${i(t.contactEmail)}">${i(t.contactEmail)}</a></p>
              </div>
            </div>

            <div style="margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border-dark); display: flex; flex-direction: column; gap: 0.75rem;">
              <a href="${i(t.facebookInboxUrl||"https://m.me/brothersfashion")}" target="_blank" class="btn btn-gold btn-block">
                💬 Chat on Facebook Messenger
              </a>
              <a href="https://wa.me/${i(t.whatsappNumber||"+8801700123456")}" target="_blank" class="btn btn-secondary btn-block" style="color: #FFFFFF; border-color: rgba(255,255,255,0.4);">
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
  `}function We(t="shipping"){const e=l.getPolicies(),a={shipping:"Delivery & Courier Policy across Bangladesh",returns:"7-Day Easy Exchange Policy",privacy:"Privacy Policy & Customer Security",terms:"Terms & Conditions"},s=e[t]||e.shipping;return`
    <div class="policy-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">STORE POLICIES</span>
          <h1 class="page-hero-title">${i(a[t]||"Store Policy")}</h1>
          <p class="page-hero-desc">Clear delivery guidelines and customer-first guarantees.</p>
        </div>
      </div>

      <div class="container" style="padding: 4rem 0 6rem;">
        <div class="policy-content-card">
          <div style="display: flex; gap: 0.8rem; margin-bottom: 2.5rem; flex-wrap: wrap; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
            <a href="#policy?type=shipping" class="btn btn-sm ${t==="shipping"?"btn-primary":"btn-secondary"}">Delivery Policy (Rajshahi & Outside)</a>
            <a href="#policy?type=returns" class="btn btn-sm ${t==="returns"?"btn-primary":"btn-secondary"}">Exchange Policy</a>
            <a href="#policy?type=privacy" class="btn btn-sm ${t==="privacy"?"btn-primary":"btn-secondary"}">Privacy Policy</a>
            <a href="#policy?type=terms" class="btn btn-sm ${t==="terms"?"btn-primary":"btn-secondary"}">Terms of Service</a>
          </div>

          <div style="white-space: pre-line; color: var(--text-secondary); font-size: 0.96rem; line-height: 1.8;">
            ${i(s)}
          </div>
        </div>
      </div>
    </div>
  `}function Xe(){return`
    <div class="faq-page">
      <div class="page-hero">
        <div class="container page-hero-content">
          <span class="page-hero-tagline">HELP CENTER</span>
          <h1 class="page-hero-title">Frequently Asked Questions</h1>
          <p class="page-hero-desc">Everything you need to know about delivery in Rajshahi, custom t-shirt printing, and pre-payments.</p>
        </div>
      </div>

      <div class="container faq-section">
        ${l.getFaqs().map((e,a)=>`
          <div class="faq-accordion-item ${a===0?"active":""}">
            <button class="faq-question-btn">
              <span>${i(e.question)}</span>
              <span class="faq-icon">▾</span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                ${i(e.answer)}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function Je(){const t=l.getSettings(),e=l.getCategories();return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Info -->
          <div class="footer-col" style="grid-column: span 1.5;">
            <h4 style="font-family: var(--font-serif); color: #FFFFFF; font-size: 1.35rem; margin-bottom: 0.8rem; letter-spacing: 0.08em;">
              ${i(t.storeName||"Brother's Fashion")}
            </h4>
            <p style="color: #A1A1AA; font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem;">
              Premium menswear, custom t-shirts, and contemporary fashion hub based in Rajshahi Sadar, Bangladesh.
            </p>
            <p style="font-size: 0.82rem; color: #71717A;">
              📍 ${i(t.atelierAddress)}<br>
              📞 Hotline: <a href="tel:${i(t.contactPhone)}" style="color: var(--gold-light);">${i(t.contactPhone)}</a>
            </p>
          </div>

          <!-- Col 2: Categories -->
          <div class="footer-col">
            <h5>Categories</h5>
            <ul class="footer-links">
              <li><a href="#catalog?category=all">All Collections</a></li>
              ${e.map(a=>`
                <li><a href="#catalog?category=${encodeURIComponent(a.slug||a.name)}">${i(a.name)}</a></li>
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
              <li><a href="${i(t.facebookInboxUrl||"https://m.me/brothersfashion")}" target="_blank">Facebook Messenger</a></li>
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
            &copy; 2026 ${i(t.storeName||"Brother's Fashion")}. All Rights Reserved. Rajshahi Sadar, Bangladesh.
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
  `}function ve(){Ue();const t=document.querySelectorAll("#home-collection-tabs .tab-btn"),e=document.getElementById("home-products-container");t&&e&&t.forEach(o=>{o.addEventListener("click",()=>{t.forEach(p=>p.classList.remove("active")),o.classList.add("active");const r=o.getAttribute("data-tab"),n=l.getProducts();let u=n;r==="featured"?u=n.filter(p=>p.isFeatured):r==="custom"?u=n.filter(p=>p.category==="Custom Print T-Shirts"):r==="new"?u=n.filter(p=>p.isNew):r==="bestsellers"&&(u=n.filter(p=>p.badge==="BESTSELLER"||p.badge==="HOT"||p.badge==="POPULAR")),e.innerHTML=u.map(p=>Y(p)).join("")})}),document.querySelectorAll(".btn-copy-coupon, #btn-copy-home-coupon").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("data-code");r&&navigator.clipboard.writeText(r).then(()=>{g(`Promo code '${r}' copied to clipboard!`,"success")}).catch(()=>{g(`Promo code: ${r}`,"info")})})});const a=document.getElementById("contact-inquiry-form");a&&a.addEventListener("submit",o=>{o.preventDefault(),g("Thank you! Your message has been sent to our Rajshahi support team.","success"),a.reset()}),document.querySelectorAll(".faq-question-btn").forEach(o=>{o.addEventListener("click",()=>{o.closest(".faq-accordion-item").classList.toggle("active")})})}function Ke(t={}){const e=l.getSettings(),a=l.getCategories(),s=l.getProducts(),o=t.category||"all",r=(t.search||"").toLowerCase(),n=t.wishlist==="true",u=Number(t.maxPrice)||3e3,p=t.size||"",d=t.color||"",c=t.sort||"featured";let h=s.filter(m=>!(n&&!l.isInWishlist(m.id)||o!=="all"&&m.category.toLowerCase()!==o.toLowerCase()||r&&!m.title.toLowerCase().includes(r)&&!m.category.toLowerCase().includes(r)&&!(m.tags&&m.tags.some(A=>A.toLowerCase().includes(r)))||m.price>u||p&&(!m.sizes||!m.sizes.includes(p))||d&&(!m.colors||!m.colors.some(A=>A.name.toLowerCase()===d.toLowerCase()))));c==="price-low"?h.sort((m,A)=>m.price-A.price):c==="price-high"?h.sort((m,A)=>A.price-m.price):c==="rating"?h.sort((m,A)=>(A.rating||0)-(m.rating||0)):c==="newest"&&h.sort((m,A)=>(A.isNew?1:0)-(m.isNew?1:0));const v=Array.from(new Set(s.flatMap(m=>m.sizes||[]))).slice(0,10),F=Array.from(new Set(s.flatMap(m=>(m.colors||[]).map(A=>A.name)))).slice(0,8),b=a.find(m=>m.slug.toLowerCase()===o.toLowerCase()||m.name.toLowerCase()===o.toLowerCase()),k=n?"My Private Wishlist":r?`Search Results for "${i(r)}"`:b?`${b.name} Collection`:"All Haute Couture & Collections",S=n?"Your curated personal selection of atelier garments and luxury pieces.":b?b.description:"Explore bespoke tailoring, evening gowns, structured leather accessories, and runway creations.";return`
    <div class="catalog-page">
      <div class="container">
        <!-- Header -->
        <div class="catalog-header">
          <div>
            <span class="section-subtitle">${n?"SAVED CURATIONS":"HAUTE COUTURE CATALOG"}</span>
            <h1 class="section-title">${i(k)}</h1>
            <p class="section-desc">${i(S)}</p>
          </div>
          <div class="breadcrumb-nav">
            <a href="#home">Home</a> / <span>${i(o.toUpperCase())}</span>
          </div>
        </div>

        <div class="catalog-layout">
          <!-- Sidebar Faceted Filters -->
          <aside class="filter-sidebar">
            <!-- Categories Filter -->
            <div class="filter-group">
              <h5 class="filter-heading">Categories</h5>
              <ul class="category-filter-list">
                <li class="category-filter-item ${o==="all"?"active":""}" onclick="window.location.hash='#catalog?category=all'">
                  <span>All Collections</span>
                  <span class="badge badge-secondary">${s.length}</span>
                </li>
                ${a.map(m=>{const A=s.filter(E=>E.category.toLowerCase()===m.slug.toLowerCase()).length;return`
                    <li class="category-filter-item ${o.toLowerCase()===m.slug.toLowerCase()?"active":""}" onclick="window.location.hash='#catalog?category=${encodeURIComponent(m.slug)}'">
                      <span>${i(m.name)}</span>
                      <span class="badge badge-secondary">${A}</span>
                    </li>
                  `}).join("")}
              </ul>
            </div>

            <!-- Price Range Filter -->
            <div class="filter-group">
              <h5 class="filter-heading">Price Range (Max)</h5>
              <input type="range" class="price-range-slider" id="filter-price-slider" min="100" max="3000" step="50" value="${u}">
              <div class="price-range-values">
                <span>${e.currency}100</span>
                <span id="slider-price-label" style="font-weight: 700; color: var(--gold-dark);">${y(u,e.currency)}</span>
                <span>${e.currency}3000+</span>
              </div>
            </div>

            <!-- Size Filter -->
            ${v.length>0?`
              <div class="filter-group">
                <h5 class="filter-heading">Size</h5>
                <div class="size-filter-grid">
                  <button class="size-pill ${p===""?"active":""}" onclick="updateCatalogFilter('size', '')">All</button>
                  ${v.map(m=>`
                    <button class="size-pill ${p===m?"active":""}" onclick="updateCatalogFilter('size', '${i(m)}')">${i(m)}</button>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Colors Filter -->
            ${F.length>0?`
              <div class="filter-group">
                <h5 class="filter-heading">Color</h5>
                <div class="size-filter-grid">
                  <button class="size-pill ${d===""?"active":""}" onclick="updateCatalogFilter('color', '')">All</button>
                  ${F.map(m=>`
                    <button class="size-pill ${d.toLowerCase()===m.toLowerCase()?"active":""}" onclick="updateCatalogFilter('color', '${i(m)}')">${i(m)}</button>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Reset Filters -->
            <button class="btn btn-secondary btn-sm btn-block" style="margin-top: 1rem;" onclick="window.location.hash='#catalog?category=all'">
              Clear All Filters
            </button>
          </aside>

          <!-- Products Main Listing Area -->
          <main class="catalog-main-area">
            <!-- Toolbar -->
            <div class="catalog-toolbar">
              <span class="results-count">Showing <strong>${h.length}</strong> luxury creations</span>
              
              <div class="sort-select-wrap">
                <label for="catalog-sort" style="font-size: 0.8rem; font-weight: 600;">Sort By:</label>
                <select id="catalog-sort" class="sort-select" onchange="updateCatalogFilter('sort', this.value)">
                  <option value="featured" ${c==="featured"?"selected":""}>Featured Ateliers</option>
                  <option value="price-low" ${c==="price-low"?"selected":""}>Price: Low to High</option>
                  <option value="price-high" ${c==="price-high"?"selected":""}>Price: High to Low</option>
                  <option value="rating" ${c==="rating"?"selected":""}>Highest Rated</option>
                  <option value="newest" ${c==="newest"?"selected":""}>New Arrivals</option>
                </select>
              </div>
            </div>

            <!-- Products Grid -->
            ${h.length>0?`
              <div class="product-grid grid-4" id="catalog-products-grid">
                ${h.map(m=>Y(m)).join("")}
              </div>
            `:`
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
  `}function Ye(){const t=document.getElementById("filter-price-slider"),e=document.getElementById("slider-price-label");t&&e&&(t.addEventListener("input",a=>{const s=a.target.value,o=l.getSettings();e.textContent=y(s,o.currency)}),t.addEventListener("change",a=>{window.updateCatalogFilter("maxPrice",a.target.value)}))}window.updateCatalogFilter=function(t,e){const a=window.location.hash,s=new URLSearchParams(a.includes("?")?a.split("?")[1]:"");e?s.set(t,e):s.delete(t);const o=s.get("category")||"all";s.set("category",o),window.location.hash=`#catalog?${s.toString()}`};let q="Standard Print",K=null;function Qe(t){const e=l.getProductById(t)||l.getProducts()[0];if(!e)return'<div class="container" style="padding: 5rem 0; text-align: center;"><h2>Product Not Found</h2><p>The requested garment is currently unavailable.</p><a href="#catalog" class="btn btn-gold" style="margin-top: 1.5rem;">Return to Collections</a></div>';const a=l.getSettings(),s=l.isInWishlist(e.id),o=Fe(e.originalPrice,e.price),r=l.getProducts().filter(c=>c.id!==e.id&&(c.category===e.category||c.isFeatured)).slice(0,4),n=e.colors&&e.colors.length>0?e.colors[0].name:"Standard",u=e.sizes&&e.sizes.length>0?e.sizes[0]:"Standard",p=e.isCustomizable||e.category==="Custom Print T-Shirts",d=l.getPresetDesigns();return`
    <div class="product-detail-page">
      <div class="container">
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-nav">
          <a href="#home">Home</a> / 
          <a href="#catalog?category=${encodeURIComponent(e.category)}">${i(e.category)}</a> / 
          <span>${i(e.title)}</span>
        </div>

        <div class="product-detail-layout">
          <!-- Left Column: Gallery & Interactive T-Shirt Mockup -->
          <div class="gallery-wrapper">
            <div class="thumbnail-strip">
              ${(e.images||[]).map((c,h)=>`
                <div class="thumb-item ${h===0?"active":""}" data-image-src="${i(c)}">
                  <img src="${i(c)}" alt="${i(e.title)} thumbnail ${h+1}" loading="lazy">
                </div>
              `).join("")}
            </div>

            <!-- Main Viewport with Custom Print Live Mockup Overlay -->
            <div class="main-viewport" id="product-main-viewport" style="position: relative;">
              <img src="${i(e.images[0])}" alt="${i(e.title)}" id="product-main-image">
              
              ${p?`
                <div id="custom-design-mockup-overlay" style="position: absolute; top: 32%; left: 50%; transform: translate(-50%, -50%); width: 38%; height: 35%; display: flex; align-items: center; justify-content: center; pointer-events: none; border: 1px dashed rgba(197, 168, 128, 0.4); border-radius: 4px; padding: 4px; z-index: 5;">
                  <span id="custom-overlay-placeholder" style="font-size: 0.75rem; color: #FFFFFF; background: rgba(0,0,0,0.6); padding: 4px 8px; border-radius: 2px; text-align: center;">Live Print Area</span>
                  <img id="custom-overlay-img" src="" alt="Custom artwork preview" style="display: none; width: 100%; height: 100%; object-fit: contain;">
                </div>
              `:""}
            </div>
          </div>

          <!-- Right Column: Info, Custom Studio & Order Options -->
          <div class="product-info-panel">
            <div class="detail-badge-wrap">
              ${e.badge?`<span class="badge badge-${e.badge.toLowerCase()}">${i(e.badge)}</span>`:""}
              ${o>0?`<span class="badge badge-sale">SAVE ${o}%</span>`:""}
              <span class="badge badge-secondary">SKU: ${i(e.sku||"EFR-001")}</span>
            </div>

            <h1 class="detail-title">${i(e.title)}</h1>
            ${e.subtitle?`<p class="detail-subtitle">${i(e.subtitle)}</p>`:""}

            <!-- Rating Stars -->
            <div class="detail-rating">
              <div class="stars">
                ${"★".repeat(Math.round(e.rating||5))}
              </div>
              <span style="font-weight: 600;">${e.rating||5}</span>
              <span style="color: var(--text-muted);">(${e.reviewCount||1} verified client reviews)</span>
            </div>

            <!-- Price Display -->
            <div class="detail-price-box">
              <span class="detail-price">${y(e.price,a.currency)}</span>
              ${e.originalPrice&&e.originalPrice>e.price?`
                <span class="detail-price-orig">${y(e.originalPrice,a.currency)}</span>
              `:""}
            </div>

            <!-- Delivery Fee Notice -->
            <div style="background: var(--bg-secondary); padding: 0.85rem 1.2rem; border-radius: var(--radius-xs); margin-bottom: 1.5rem; font-size: 0.82rem; border: 1px solid var(--border-light);">
              🚚 <strong>Delivery:</strong> ৳${a.insideRajshahiFee||80} inside Rajshahi Sadar | ৳${a.outsideRajshahiFee||120} outside Rajshahi (Nationwide).
            </div>

            <!-- Stock Status -->
            <div class="stock-indicator">
              <span class="stock-dot ${e.stock<=5?"low":""}"></span>
              <span>${e.stock>0?e.stock<=5?`Limited Stock — Only ${e.stock} pieces remaining`:"Available in Rajshahi Hub":"Currently Made to Order"}</span>
            </div>

            <!-- Custom Print Studio Section (For Customizable T-Shirts) -->
            ${p?`
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
                    ${d.map(c=>`
                      <div class="preset-design-card" data-preset-name="${i(c.name)}" data-preset-img="${i(c.thumbnail)}">
                        <img src="${i(c.thumbnail)}" alt="${i(c.name)}" class="preset-thumb">
                        <span class="preset-name">${i(c.name)}</span>
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
                  <a href="${i(a.facebookInboxUrl||"https://m.me/brothersfashion")}" target="_blank">
                    💬 Need custom design help? Message us on Facebook
                  </a>
                </div>
              </div>
            `:""}


            <!-- Color Swatches Selection -->
            ${e.colors&&e.colors.length>0?`
              <div class="option-section">
                <div class="option-header">
                  <span class="option-label">Color: <strong id="selected-color-label" style="color: var(--text-primary); font-family: var(--font-sans);">${i(n)}</strong></span>
                </div>
                <div class="detail-color-swatches" id="color-swatches-container">
                  ${e.colors.map((c,h)=>`
                    <button class="color-option-btn ${h===0?"active":""}" 
                            style="background-color: ${i(c.hex)};" 
                            data-color-name="${i(c.name)}" 
                            title="${i(c.name)}"></button>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Size Selection & Size Guide Modal -->
            ${e.sizes&&e.sizes.length>0?`
              <div class="option-section">
                <div class="option-header">
                  <span class="option-label">Bangladeshi Size: <strong id="selected-size-label" style="color: var(--text-primary); font-family: var(--font-sans);">${i(u)}</strong></span>
                  <button class="size-guide-link" id="btn-open-size-guide">Bangladeshi Size Chart</button>
                </div>
                <div class="detail-size-options" id="size-options-container">
                  ${e.sizes.map((c,h)=>`
                    <button class="size-option-btn ${h===0?"active":""}" data-size-val="${i(c)}">${i(c)}</button>
                  `).join("")}
                </div>
              </div>
            `:""}

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

                <button class="wishlist-toggle ${s?"active":""}" id="btn-detail-wishlist" style="position: static; width: 52px; height: 52px; border: 1px solid var(--border-light); border-radius: var(--radius-xs);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="${s?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
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
                    <p>${i(e.description)}</p>
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
                    <p>${i(e.fabric||"100% Combed Cotton / Premium Fabric. Machine wash cold, iron inside out.")}</p>
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
                    <p>${i(e.deliveryInfo||"Delivery inside Rajshahi Sadar ৳80. Outside Rajshahi ৳120. 7-day hassle free size exchange.")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products Section -->
        ${r.length>0?`
          <div style="margin-top: 6rem; padding-top: 4rem; border-top: 1px solid var(--border-light);">
            <div class="section-header">
              <span class="section-subtitle">RECOMMENDED FOR YOU</span>
              <h2 class="section-title">Similar Items</h2>
            </div>
            <div class="product-grid grid-4">
              ${r.map(c=>Y(c)).join("")}
            </div>
          </div>
        `:""}
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
  `}function Ze(t){const e=l.getProductById(t)||l.getProducts()[0];if(!e)return;const a=document.getElementById("product-main-image");document.getElementById("product-main-viewport");const s=document.querySelectorAll(".thumb-item");s.forEach(f=>{f.addEventListener("click",()=>{s.forEach(C=>C.classList.remove("active")),f.classList.add("active");const x=f.getAttribute("data-image-src");a&&(a.src=x)})});const o=document.getElementById("custom-design-file-input"),r=document.getElementById("custom-overlay-img"),n=document.getElementById("custom-overlay-placeholder"),u=document.getElementById("custom-design-notes");o&&o.addEventListener("change",f=>{const x=f.target.files[0];if(x){const C=document.getElementById("upload-file-label-text");C&&(C.textContent=`✅ ${x.name}`);const B=new FileReader;B.onload=O=>{K=O.target.result,r&&n&&(r.src=K,r.style.display="block",n.style.display="none"),q=`Uploaded Custom Design File: ${x.name}`,g(`Custom artwork '${x.name}' attached to mockup!`,"success")},B.readAsDataURL(x)}}),document.querySelectorAll(".preset-design-card").forEach(f=>{f.addEventListener("click",()=>{document.querySelectorAll(".preset-design-card").forEach(B=>B.style.borderColor="var(--border-light)"),f.style.borderColor="var(--gold-primary)";const x=f.getAttribute("data-preset-name"),C=f.getAttribute("data-preset-img");q=`Preset Design: ${x}`,K=C,r&&n&&(r.src=C,r.style.display="block",n.style.display="none"),g(`Selected '${x}' design preset`,"info")})});let p=e.colors&&e.colors.length>0?e.colors[0].name:"Standard";const d=document.querySelectorAll(".color-option-btn"),c=document.getElementById("selected-color-label");d.forEach(f=>{f.addEventListener("click",()=>{d.forEach(x=>x.classList.remove("active")),f.classList.add("active"),p=f.getAttribute("data-color-name"),c&&(c.textContent=p)})});let h=e.sizes&&e.sizes.length>0?e.sizes[0]:"Standard";const v=document.querySelectorAll(".size-option-btn"),F=document.getElementById("selected-size-label");v.forEach(f=>{f.addEventListener("click",()=>{v.forEach(x=>x.classList.remove("active")),f.classList.add("active"),h=f.getAttribute("data-size-val"),F&&(F.textContent=h)})});let b=1;const k=document.getElementById("detail-qty-input"),S=document.getElementById("btn-qty-minus"),m=document.getElementById("btn-qty-plus");S&&m&&k&&(S.addEventListener("click",()=>{b>1&&(b--,k.value=b)}),m.addEventListener("click",()=>{const f=e.stock||99;b<f?(b++,k.value=b):g(`Maximum stock allocation reached (${f} pieces)`,"warning")}));const A=document.getElementById("btn-detail-add-cart");A&&A.addEventListener("click",()=>{const f=u?u.value.trim():"",x=f?`${q} (${f})`:q;l.addToCart({productId:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.images[0],size:h,color:p,customDesignInfo:x,customDesignImage:K,quantity:b}),g(`Added ${b}x ${e.title} (${h}) to your bag`,"success");const C=document.getElementById("cart-drawer-overlay");C&&C.classList.add("active")});const E=document.getElementById("btn-detail-buy-now");E&&E.addEventListener("click",()=>{const f=u?u.value.trim():"",x=f?`${q} (${f})`:q;window.openDirectCheckout({productId:e.id,title:e.title,price:e.price,originalPrice:e.originalPrice,image:e.images[0],size:h,color:p,customDesignInfo:x,customDesignImage:K,quantity:b})});const $=document.getElementById("btn-detail-fb-prepay");$&&$.addEventListener("click",()=>{const f=u?u.value.trim():"",x=f?`${q} (${f})`:q;l.getSettings();const C=e.price*b,B=l.getDeliveryFee(C,"inside"),O=C+B,L=l.generateFacebookOrderUrl({productName:e.title,size:h,color:p,quantity:b,productPrice:C,deliveryCharge:B,deliveryLocation:"Inside Rajshahi (৳80) / Outside (৳120)",totalAmount:O,customerAddress:"[Enter your address in chat]",customerCity:"Rajshahi / Bangladesh",customerPhone:"[Enter your phone in chat]",customDesignInfo:x});g("Redirecting to Brother's Fashion Facebook Messenger...","info"),window.open(L,"_blank")});const I=document.getElementById("btn-detail-wishlist");I&&I.addEventListener("click",()=>{const f=l.toggleWishlist(e.id);I.classList.toggle("active",f),I.querySelector("svg").setAttribute("fill",f?"currentColor":"none"),g(f?"Added to your Wishlist":"Removed from Wishlist","info")}),document.querySelectorAll(".accordion-trigger").forEach(f=>{f.addEventListener("click",()=>{f.closest(".accordion-item").classList.toggle("active")})});const T=document.getElementById("btn-open-size-guide"),R=document.getElementById("size-guide-modal");T&&R&&T.addEventListener("click",()=>{R.classList.add("active")})}function Ae(){const t=l.getCart(),e=l.getSettings(),a=l.getCartSubtotal(),s=e.freeShippingThreshold||2e3,o=Math.min(100,Math.round(a/s*100)),r=Math.max(0,s-a);let n=0;l.appliedCoupon&&(l.appliedCoupon.discountType==="percentage"?n=a*l.appliedCoupon.discountValue/100:n=Math.min(l.appliedCoupon.discountValue,a));const u=a===0||a>=s?0:e.insideRajshahiFee||80,p=(a-n)*(e.taxRate||.05),d=Math.max(0,a-n+u+p);return`
    <div class="cart-drawer-overlay" id="cart-drawer-overlay">
      <div class="cart-drawer" id="cart-drawer">
        <!-- Header -->
        <div class="cart-header">
          <h3 class="cart-title">Shopping Bag (${l.getCartCount()})</h3>
          <button class="cart-close-btn" id="btn-close-cart" aria-label="Close bag">&times;</button>
        </div>

        <!-- Free Shipping Meter -->
        <div class="shipping-meter">
          <div class="shipping-meter-text">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>
              ${r>0?`Add <strong>${y(r,e.currency)}</strong> more for Free Delivery`:'<strong style="color: var(--color-success);">✨ You unlocked Free Delivery!</strong>'}
            </span>
          </div>
          <div class="shipping-meter-bar">
            <div class="shipping-meter-fill" style="width: ${o}%;"></div>
          </div>
        </div>

        <!-- Cart Items List -->
        <div class="cart-items-wrap">
          ${t.length===0?`
            <div class="cart-empty-state">
              <span class="cart-empty-icon">🛍️</span>
              <h4>Your Shopping Bag is Empty</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary);">Explore our T-Shirts, Shirts, Pants, and Custom Print collections.</p>
              <button class="btn btn-gold btn-sm" onclick="document.getElementById('cart-drawer-overlay').classList.remove('active'); window.location.hash='#catalog';">Shop Collections</button>
            </div>
          `:t.map((c,h)=>`
            <div class="cart-item">
              <img src="${i(c.image)}" alt="${i(c.title)}" class="cart-item-img">
              <div class="cart-item-details">
                <h5 class="cart-item-title">${i(c.title)}</h5>
                <div class="cart-item-meta">
                  Size: <strong>${i(c.size)}</strong> | Color: <strong>${i(c.color)}</strong>
                  ${c.customDesignInfo?`<div style="color: var(--gold-dark); font-size: 0.72rem; margin-top: 2px;">🎨 ${i(c.customDesignInfo)}</div>`:""}
                </div>
                <div class="cart-item-price">${y(c.price,e.currency)}</div>
                
                <div class="cart-item-actions">
                  <div class="cart-qty-ctrls">
                    <button class="cart-qty-btn btn-cart-minus" data-index="${h}">-</button>
                    <span class="cart-qty-val">${c.quantity}</span>
                    <button class="cart-qty-btn btn-cart-plus" data-index="${h}">+</button>
                  </div>
                  <button class="cart-item-remove btn-cart-remove" data-index="${h}">Remove</button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Cart Footer -->
        ${t.length>0?`
          <div class="cart-footer">
            <!-- Promo Code Input Form -->
            <form class="promo-form" id="cart-promo-form">
              <input type="text" class="promo-input" id="cart-coupon-input" placeholder="Promo code (e.g. BROTHERS10)" value="${l.appliedCoupon?i(l.appliedCoupon.code):""}">
              <button type="submit" class="promo-btn">${l.appliedCoupon?"Applied":"Apply"}</button>
            </form>

            <div class="cart-summary-row">
              <span>Subtotal</span>
              <span>${y(a,e.currency)}</span>
            </div>

            ${n>0?`
              <div class="cart-summary-row" style="color: var(--color-danger);">
                <span>Discount (${l.appliedCoupon.code})</span>
                <span>-${y(n,e.currency)}</span>
              </div>
            `:""}

            <div class="cart-summary-row">
              <span>Estimated Delivery</span>
              <span>${u===0?"Free":`${y(u,e.currency)} (Rajshahi: ৳80 / Outside: ৳120)`}</span>
            </div>

            <div class="cart-summary-total">
              <span>Estimated Total</span>
              <span>${y(d,e.currency)}</span>
            </div>

            <button class="btn btn-gold btn-block btn-lg" id="btn-proceed-checkout" style="margin-top: 1.25rem;">
              Proceed to Checkout (COD or Pre-Pay) &rarr;
            </button>
          </div>
        `:""}
      </div>
    </div>
  `}function xe(){const t=document.getElementById("cart-drawer-overlay"),e=document.getElementById("btn-close-cart");t&&e&&(e.addEventListener("click",()=>t.classList.remove("active")),t.addEventListener("click",o=>{o.target===t&&t.classList.remove("active")})),document.querySelectorAll(".btn-cart-minus").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.getAttribute("data-index"),10),n=l.getCart();n[r]&&(l.updateCartQuantity(r,n[r].quantity-1),H())})}),document.querySelectorAll(".btn-cart-plus").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.getAttribute("data-index"),10),n=l.getCart();n[r]&&(l.updateCartQuantity(r,n[r].quantity+1),H())})}),document.querySelectorAll(".btn-cart-remove").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.getAttribute("data-index"),10);l.removeFromCart(r),H(),g("Item removed from your bag","info")})});const a=document.getElementById("cart-promo-form");a&&a.addEventListener("submit",o=>{o.preventDefault();const r=document.getElementById("cart-coupon-input"),n=r?r.value.trim():"";if(!n){l.appliedCoupon=null,H();return}const u=l.validateCoupon(n,l.getCartSubtotal());u.valid?(l.appliedCoupon=u.coupon,g(u.message,"success")):g(u.message,"error"),H()});const s=document.getElementById("btn-proceed-checkout");s&&s.addEventListener("click",()=>{t.classList.remove("active"),window.openCheckoutModal()})}function H(){var s,o;const t=document.getElementById("cart-drawer-container");if(t){const r=(s=document.getElementById("cart-drawer-overlay"))==null?void 0:s.classList.contains("active");t.innerHTML=Ae(),r&&((o=document.getElementById("cart-drawer-overlay"))==null||o.classList.add("active")),xe()}const e=document.getElementById("nav-cart-badge"),a=l.getCartCount();e&&(e.textContent=a,e.style.display=a>0?"flex":"none")}let w={isDirectBuy:!1,directItem:null,deliveryLocation:"inside",selectedPayment:"Cash on Delivery"};function ke(){var u;const t=l.getSettings(),e=w.isDirectBuy&&w.directItem?[w.directItem]:l.getCart(),a=e.reduce((p,d)=>p+d.price*d.quantity,0);let s=0;l.appliedCoupon&&(l.appliedCoupon.discountType==="percentage"?s=a*l.appliedCoupon.discountValue/100:s=Math.min(l.appliedCoupon.discountValue,a));const o=l.getDeliveryFee(a,w.deliveryLocation),r=(a-s)*(t.taxRate||.05),n=Math.max(0,a-s+o+r);return`
    <div class="modal-overlay" id="checkout-modal-overlay">
      <div class="modal-window checkout-modal">
        <div class="modal-header">
          <h3 class="modal-title">
            ${w.isDirectBuy?"⚡ Direct Order Checkout":"Complete Your Order"}
          </h3>
          <button class="modal-close" id="btn-close-checkout">&times;</button>
        </div>

        <div class="modal-body" id="checkout-modal-body">
          <form id="checkout-form">
            <div class="checkout-grid">
              <!-- Left: Customer Information & Delivery -->
              <div class="checkout-form-left">
                <div class="checkout-section-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  1. Customer Details & Delivery Address
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Full Name *</label>
                    <input type="text" class="form-input" id="checkout-name" required placeholder="e.g. Tanvir Ahmed">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Mobile / WhatsApp Number *</label>
                    <input type="tel" class="form-input" id="checkout-phone" required placeholder="017XXXXXXXX / 018XXXXXXXX">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Delivery Location in Bangladesh *</label>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.3rem;">
                    <div class="payment-option-card ${w.deliveryLocation==="inside"?"active":""}" id="opt-loc-inside" style="padding: 0.75rem;">
                      <span class="payment-title">📍 Inside Rajshahi</span>
                      <span class="payment-desc">Rajshahi Sadar (৳${t.insideRajshahiFee||80})</span>
                    </div>

                    <div class="payment-option-card ${w.deliveryLocation==="outside"?"active":""}" id="opt-loc-outside" style="padding: 0.75rem;">
                      <span class="payment-title">🚚 Outside Rajshahi</span>
                      <span class="payment-desc">All Other Districts (৳${t.outsideRajshahiFee||120})</span>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">City / District *</label>
                    <input type="text" class="form-input" id="checkout-city" required placeholder="${w.deliveryLocation==="inside"?"Rajshahi Sadar":"e.g. Dhaka, Chittagong, Sylhet, Bogura"}" value="${w.deliveryLocation==="inside"?"Rajshahi Sadar":""}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Area / Thana *</label>
                    <input type="text" class="form-input" id="checkout-area" required placeholder="e.g. Kazihata / Dhanmondi">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Full Street Address / House & Road *</label>
                  <input type="text" class="form-input" id="checkout-address" required placeholder="House No, Road No, Ward, Landmark">
                </div>

                <!-- Payment Method Selection -->
                <div class="checkout-section-title" style="margin-top: 1.5rem;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  2. Choose Order & Payment Option
                </div>

                <div class="payment-options-grid" style="grid-template-columns: 1fr 1fr;">
                  <div class="payment-option-card ${w.selectedPayment==="Cash on Delivery"?"active":""}" data-pay-method="Cash on Delivery">
                    <span class="payment-title">📦 Cash on Delivery</span>
                    <span class="payment-desc">Pay directly when parcel arrives</span>
                  </div>

                  <div class="payment-option-card ${w.selectedPayment.includes("Facebook")?"active":""}" data-pay-method="Pre-Pay via Facebook Messenger (bKash/Nagad)">
                    <span class="payment-title">💬 Pre-Pay on Facebook</span>
                    <span class="payment-desc">Redirects to Facebook with template for bKash/Nagad</span>
                  </div>
                </div>
              </div>

              <!-- Right: Order Summary -->
              <div class="checkout-order-summary">
                <div class="checkout-section-title">Order Summary (${e.reduce((p,d)=>p+d.quantity,0)} Items)</div>
                
                <div style="display: flex; flex-direction: column; gap: 0.85rem; max-height: 220px; overflow-y: auto; margin-bottom: 1.2rem; padding-right: 0.4rem;">
                  ${e.map(p=>`
                    <div style="display: flex; gap: 0.75rem; align-items: center;">
                      <img src="${i(p.image)}" alt="${i(p.title)}" style="width: 44px; height: 55px; object-fit: cover; border-radius: var(--radius-xs);">
                      <div style="flex: 1; font-size: 0.82rem;">
                        <strong style="color: var(--text-primary); display: block; line-height: 1.2;">${i(p.title)}</strong>
                        <span style="color: var(--text-muted); font-size: 0.74rem;">Qty: ${p.quantity} | ${i(p.size)} | ${i(p.color)}</span>
                        ${p.customDesignInfo?`<div style="font-size: 0.7rem; color: var(--gold-dark); font-weight: 600;">🎨 ${i(p.customDesignInfo)}</div>`:""}
                      </div>
                      <span style="font-family: var(--font-serif); font-weight: 600; font-size: 0.88rem;">${y(p.price*p.quantity,t.currency)}</span>
                    </div>
                  `).join("")}
                </div>

                <div class="cart-summary-row">
                  <span>Subtotal</span>
                  <span>${y(a,t.currency)}</span>
                </div>

                ${s>0?`
                  <div class="cart-summary-row" style="color: var(--color-danger);">
                    <span>Discount (${(u=l.appliedCoupon)==null?void 0:u.code})</span>
                    <span>-${y(s,t.currency)}</span>
                  </div>
                `:""}

                <div class="cart-summary-row">
                  <span>Delivery (${w.deliveryLocation==="inside"?"Inside Rajshahi":"Outside Rajshahi"})</span>
                  <span>${o===0?"Free":y(o,t.currency)}</span>
                </div>

                <div class="cart-summary-total">
                  <span>Total Payable</span>
                  <span>${y(n,t.currency)}</span>
                </div>

                <button type="submit" class="btn btn-gold btn-block btn-lg" style="margin-top: 1.5rem;" id="btn-submit-order">
                  ${w.selectedPayment.includes("Facebook")?"💬 Open Facebook Inbox with Order Details &rarr;":"Place Order (Cash on Delivery) &rarr;"}
                </button>
                <p style="font-size: 0.72rem; color: var(--text-muted); text-align: center; margin-top: 0.8rem;">
                  🔒 100% Genuine Bangladeshi Fashion Guarantee & 7-Day Size Exchange.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `}function Ce(){const t=document.getElementById("checkout-modal-overlay"),e=document.getElementById("btn-close-checkout");e&&t&&e.addEventListener("click",()=>t.classList.remove("active"));const a=document.getElementById("opt-loc-inside"),s=document.getElementById("opt-loc-outside");a&&s&&(a.addEventListener("click",()=>{w.deliveryLocation="inside",ae()}),s.addEventListener("click",()=>{w.deliveryLocation="outside",ae()})),document.querySelectorAll(".payment-option-card[data-pay-method]").forEach(r=>{r.addEventListener("click",()=>{document.querySelectorAll(".payment-option-card[data-pay-method]").forEach(u=>u.classList.remove("active")),r.classList.add("active"),w.selectedPayment=r.getAttribute("data-pay-method");const n=document.getElementById("btn-submit-order");n&&(n.innerHTML=w.selectedPayment.includes("Facebook")?"💬 Open Facebook Inbox with Order Details &rarr;":"Place Order (Cash on Delivery) &rarr;")})});const o=document.getElementById("checkout-form");o&&o.addEventListener("submit",async r=>{var R,f,x,C,B,O,L;r.preventDefault();const n=document.getElementById("btn-checkout-submit");n&&(n.disabled=!0,n.innerHTML="<span>⏳ Processing & Verifying Stock...</span>");const p=(((R=document.getElementById("checkout-name"))==null?void 0:R.value)||"Client").split(" "),d=p[0]||"Client",c=p.slice(1).join(" ")||"",h=((f=document.getElementById("checkout-phone"))==null?void 0:f.value)||"",v=((x=document.getElementById("checkout-city"))==null?void 0:x.value)||(w.deliveryLocation==="inside"?"Rajshahi Sadar":"Bangladesh"),F=((C=document.getElementById("checkout-area"))==null?void 0:C.value)||"",k=`${((B=document.getElementById("checkout-address"))==null?void 0:B.value)||""}, ${F}`,S={firstName:d,lastName:c,email:"guest@brothersfashion.bd",phone:h,address:k,city:v,country:"Bangladesh"},m=w.isDirectBuy&&w.directItem?[w.directItem]:l.getCart(),A=l.getSettings(),E=m.reduce((z,j)=>z+j.price*j.quantity,0);let $=0;l.appliedCoupon&&(l.appliedCoupon.discountType==="percentage"?$=E*l.appliedCoupon.discountValue/100:$=Math.min(l.appliedCoupon.discountValue,E));const I=l.getDeliveryFee(E,w.deliveryLocation),N=(E-$)*(A.taxRate||.05),T=Math.max(0,E-$+I+N);try{if(w.selectedPayment.includes("Facebook")){const j=m.map(M=>`${M.title} (${M.quantity}x, Size: ${M.size}, Color: ${M.color})`).join(", "),Q=m.map(M=>M.customDesignInfo).filter(Boolean).join(" | ")||"None",Le=l.generateFacebookOrderUrl({productName:j,size:((O=m[0])==null?void 0:O.size)||"M",color:((L=m[0])==null?void 0:L.color)||"Default",quantity:m.reduce((M,Te)=>M+Te.quantity,0),productPrice:E,deliveryCharge:I,deliveryLocation:w.deliveryLocation==="inside"?"Inside Rajshahi (৳80)":"Outside Rajshahi (৳120)",totalAmount:T,customerAddress:k,customerCity:v,customerPhone:h,customDesignInfo:Q}),De=await l.createOrder({customer:S,items:m,deliveryLocation:w.deliveryLocation==="inside"?"Inside Rajshahi Sadar":"Outside Rajshahi",shippingFee:I,subtotal:E,discount:$,discountCode:l.appliedCoupon?l.appliedCoupon.code:"",tax:N,total:T,paymentMethod:"Pre-Paid via Facebook Messenger (bKash/Nagad)"});w.isDirectBuy||l.clearCart(),g("Opening Facebook Messenger with your order message template...","info"),window.open(Le,"_blank"),fe(De);return}const z=await l.createOrder({customer:S,items:m,deliveryLocation:w.deliveryLocation==="inside"?"Inside Rajshahi Sadar":"Outside Rajshahi",shippingFee:I,subtotal:E,discount:$,discountCode:l.appliedCoupon?l.appliedCoupon.code:"",tax:N,total:T,paymentMethod:"Cash on Delivery"});w.isDirectBuy||l.clearCart(),fe(z)}catch(z){g(z.message||"Failed to place order. Please try again.","error"),n&&(n.disabled=!1,n.innerHTML="<span>Confirm & Place Order &rarr;</span>")}})}function fe(t){const e=document.getElementById("checkout-modal-body"),a=l.getSettings();e&&(e.innerHTML=`
    <div class="order-success-box fade-in">
      <div class="success-icon-wrap">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Order Successfully Placed!</h2>
      <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem;">
        Thank you, <strong>${i(t.customer.firstName)}</strong>. Your order has been placed with <strong>Brother's Fashion</strong>.
      </p>

      <div>
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted);">Your Order Tracking Reference:</span>
        <div class="order-id-badge">${i(t.id)}</div>
      </div>

      <div style="background: var(--bg-secondary); border-radius: var(--radius-xs); padding: 1.5rem; max-width: 500px; margin: 0 auto 2rem; text-align: left; font-size: 0.88rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Recipient:</span>
          <strong>${i(t.customer.firstName)} ${i(t.customer.lastName)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Contact Number:</span>
          <strong>${i(t.customer.phone)}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Delivery Address:</span>
          <span>${i(t.customer.address)}, ${i(t.customer.city)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Delivery Fee:</span>
          <span>${y(t.shippingFee,a.currency)} (${i(t.deliveryLocation||"Rajshahi")})</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.4rem;">
          <span>Payment Method:</span>
          <span>${i(t.paymentMethod)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700; border-top: 1px solid var(--border-light); padding-top: 0.4rem; margin-top: 0.4rem;">
          <span>Total Payable:</span>
          <span style="color: var(--gold-dark);">${y(t.total,a.currency)}</span>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="#tracking?id=${t.id}" class="btn btn-gold" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active');">
          📍 Track Order Status
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('checkout-modal-overlay').classList.remove('active'); window.location.hash='#catalog';">
          Continue Shopping
        </button>
      </div>
    </div>
  `)}function ae(){var e;const t=document.getElementById("checkout-modal-container");t&&(t.innerHTML=ke(),(e=document.getElementById("checkout-modal-overlay"))==null||e.classList.add("active"),Ce())}window.openCheckoutModal=function(){w.isDirectBuy=!1,w.directItem=null,ae()};window.openDirectCheckout=function(t){w.isDirectBuy=!0,w.directItem=t,ae()};function et(t=""){const e=t?l.getOrderById(t):null,a=l.getSettings();return`
    <div class="order-tracking-page">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">WHITE-GLOVE LOGISTICS</span>
          <h1 class="section-title">Live Atelier Order Tracker</h1>
          <p class="section-desc">Enter your Order ID reference (e.g. <code>ELG-89421</code>) or contact email to monitor your package journey in real-time.</p>
        </div>

        <!-- Search Form -->
        <div class="tracker-search-box">
          <form id="order-tracker-form" style="display: flex; gap: 0.75rem;">
            <input type="text" class="form-input" id="tracker-input" placeholder="Enter Order ID or Email..." value="${i(t)}" required style="flex: 1;">
            <button type="submit" class="btn btn-gold">Track Order</button>
          </form>
        </div>

        <!-- Result Container -->
        <div id="tracker-result-container">
          ${e?Se(e,a):""}
        </div>
      </div>
    </div>
  `}function Se(t,e){return`
    <div class="tracker-result-card fade-in">
      <div class="tracker-header">
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold-dark); font-weight: 700;">Order Verified</div>
          <h2 style="font-size: 1.6rem; margin-top: 0.2rem;">Order #${i(t.id)}</h2>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Placed on ${re(t.createdAt)}</span>
        </div>
        <div style="text-align: right;">
          <span class="status-pill status-${(t.orderStatus||"pending").toLowerCase()}">
            ${i(t.orderStatus||"Pending")}
          </span>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
            Carrier: <strong>${i(t.trackingNumber||"Assigned Upon Dispatch")}</strong>
          </div>
        </div>
      </div>

      <!-- Visual Timeline -->
      <h4 style="font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.5rem;">Fulfillment Progress</h4>
      <div class="tracking-timeline">
        ${(t.timeline||[]).map(a=>`
          <div class="timeline-step ${a.done?"completed":""}">
            <div class="timeline-dot"></div>
            <div class="timeline-step-title">${i(a.status)}</div>
            <div class="timeline-step-time">${i(a.date)}</div>
          </div>
        `).join("")}
      </div>

      <!-- Order Details Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid var(--border-light);">
        <div>
          <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.6rem; color: var(--text-secondary);">Delivery Destination</h5>
          <p style="font-size: 0.88rem; line-height: 1.5;">
            <strong>${i(t.customer.firstName)} ${i(t.customer.lastName)}</strong><br>
            ${i(t.customer.address)}<br>
            ${i(t.customer.city)}, ${i(t.customer.postalCode)}<br>
            ${i(t.customer.country)}
          </p>
        </div>

        <div>
          <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.6rem; color: var(--text-secondary);">Payment & Totals</h5>
          <p style="font-size: 0.88rem; line-height: 1.5;">
            Method: <strong>${i(t.paymentMethod)}</strong> (${i(t.paymentStatus)})<br>
            Subtotal: ${y(t.subtotal,e.currency)}<br>
            Discount: -${y(t.discount||0,e.currency)}<br>
            <strong>Grand Total: ${y(t.total,e.currency)}</strong>
          </p>
        </div>
      </div>

      <!-- Items List -->
      <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-light);">
        <h5 style="font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; color: var(--text-secondary);">Ordered Pieces</h5>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          ${(t.items||[]).map(a=>`
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; gap: 0.8rem;">
                <img src="${i(a.image)}" alt="${i(a.title)}" style="width: 40px; height: 50px; object-fit: cover; border-radius: var(--radius-xs);">
                <div>
                  <strong style="font-size: 0.88rem; color: var(--text-primary);">${i(a.title)}</strong>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Size: ${i(a.size)} | Color: ${i(a.color)} | Qty: ${a.quantity}</div>
                </div>
              </div>
              <span style="font-family: var(--font-serif); font-weight: 600;">${y(a.price*a.quantity,e.currency)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function tt(){const t=document.getElementById("order-tracker-form"),e=document.getElementById("tracker-input"),a=document.getElementById("tracker-result-container");t&&e&&a&&t.addEventListener("submit",s=>{s.preventDefault();const o=e.value.trim();if(!o)return;const r=l.getOrderById(o),n=l.getSettings();r?a.innerHTML=Se(r,n):a.innerHTML=`
          <div style="max-width: 600px; margin: 0 auto; text-align: center; background: var(--bg-surface); padding: 3rem 2rem; border: 1px solid var(--border-light); border-radius: var(--radius-xs);">
            <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Order Not Found</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.2rem;">We couldn't locate any order matching "${i(o)}". Please verify your Order ID or contact our 24/7 concierge.</p>
            <a href="#contact" class="btn btn-outline-gold btn-sm">Contact Concierge</a>
          </div>
        `})}function at(t="dashboard",e=""){const a=l.getSettings();if(!l.isAdminAuthenticated())return ot();const o={dashboard:"Analytics & Overview",products:"Products Catalog Management",offers:"Offers, Notices & Coupons",orders:"Client Orders & Logistics",settings:"Store Settings & CMS Content"};return`
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
              ${i(a.storeName||"Brother's Fashion")}
            </h4>
          </div>
          <span style="font-size: 0.6rem; letter-spacing: 0.22em; color: var(--gold-primary); font-weight: 700;">ADMIN MANAGEMENT SUITE</span>
        </div>

        <ul class="admin-nav">
          <li>
            <a href="#admin?tab=dashboard" class="admin-nav-item ${t==="dashboard"?"active":""}">
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
            <a href="#admin?tab=products" class="admin-nav-item ${t==="products"?"active":""}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span>Manage Products</span>
            </a>
          </li>

          <li>
            <a href="#admin?tab=offers" class="admin-nav-item ${t==="offers"?"active":""}">
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
            <a href="#admin?tab=orders" class="admin-nav-item ${t==="orders"?"active":""}">
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
            <a href="#admin?tab=settings" class="admin-nav-item ${t==="settings"?"active":""}">
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
            <h3 style="font-size: 1.25rem; color: #FFFFFF;">${i(o[t]||"Admin Suite")}</h3>
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
          ${e||Ee()}
        </div>
      </main>
    </div>
  `}function Ee(){const t=l.getProducts(),e=l.getOrders(),a=l.getSettings(),s=e.reduce((n,u)=>n+(u.paymentStatus==="Paid"?u.total:0),0),o=t.filter(n=>n.stock<=5).length,r=l.getCategories();return`
    <div class="fade-in">
      <!-- 1. KPI Metric Cards -->
      <div class="kpi-grid">
        <div class="kpi-card kpi-gold">
          <div class="kpi-header">
            <span class="kpi-title">Total Atelier Revenue</span>
            <span class="kpi-icon">💰</span>
          </div>
          <div class="kpi-value">${y(s,a.currency)}</div>
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
          <div class="kpi-value">${e.length}</div>
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
          <div class="kpi-value">${t.length}</div>
          <div style="font-size: 0.75rem; color: #A1A1AA;">Across ${r.length} Maisons</div>
        </div>

        <div class="kpi-card ${o>0?"kpi-warning":""}">
          <div class="kpi-header">
            <span class="kpi-title">Low Stock Alerts</span>
            <span class="kpi-icon">⚠️</span>
          </div>
          <div class="kpi-value" style="color: ${o>0?"#FBBF24":"#FFFFFF"};">${o}</div>
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
            ${r.map((n,u)=>{const p=t.filter(c=>c.category.toLowerCase()===n.slug.toLowerCase()),d=t.length>0?Math.round(p.length/t.length*100):0;return`
                <div class="breakdown-row">
                  <div class="breakdown-info">
                    <span>${i(n.name)}</span>
                    <strong style="color: var(--gold-light);">${d}% (${p.length} items)</strong>
                  </div>
                  <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${d}%;"></div>
                  </div>
                </div>
              `}).join("")}
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
              ${e.slice(0,5).map(n=>`
                <tr>
                  <td><strong style="color: var(--gold-light);">#${i(n.id)}</strong></td>
                  <td>${i(n.customer.firstName)} ${i(n.customer.lastName)}</td>
                  <td>${i(n.customer.city)}, ${i(n.customer.country)}</td>
                  <td><strong style="font-family: var(--font-serif);">${y(n.total,a.currency)}</strong></td>
                  <td>${i(n.paymentMethod)}</td>
                  <td>
                    <span class="status-pill status-${(n.orderStatus||"pending").toLowerCase()}">
                      ${i(n.orderStatus||"Pending")}
                    </span>
                  </td>
                  <td style="color: #71717A; font-size: 0.78rem;">${re(n.createdAt)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function ot(){return`
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
  `}function st(){const t=document.getElementById("admin-login-form");t&&t.addEventListener("submit",async a=>{var r;a.preventDefault();const s=document.getElementById("btn-admin-submit-auth"),o=(r=document.getElementById("admin-password-input"))==null?void 0:r.value;s&&(s.disabled=!0,s.innerHTML="<span>⏳ Verifying Credentials...</span>");try{await l.loginAdmin(o)?(g("Welcome to Brother's Fashion Admin Suite","success"),window.location.hash="#admin?tab=dashboard",window.dispatchEvent(new HashChangeEvent("hashchange"))):(g("Incorrect administrator password. Access denied.","error"),s&&(s.disabled=!1,s.innerHTML="<span>Authenticate & Open Suite &rarr;</span>"))}catch{g("Authentication failed. Please check connection.","error"),s&&(s.disabled=!1,s.innerHTML="<span>Authenticate & Open Suite &rarr;</span>")}});const e=document.getElementById("btn-admin-logout");e&&e.addEventListener("click",()=>{l.logoutAdmin(),g("Logged out from Admin Suite","info"),window.location.hash="#home",window.dispatchEvent(new HashChangeEvent("hashchange"))})}const ye=["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85"];let oe=null,P=[];function se(t="all",e=""){const a=l.getProducts(),s=l.getCategories(),o=l.getSettings(),r=a.filter(n=>{var u;return!(t!=="all"&&n.category.toLowerCase()!==t.toLowerCase()||e&&!n.title.toLowerCase().includes(e.toLowerCase())&&!((u=n.sku)!=null&&u.toLowerCase().includes(e.toLowerCase())))});return`
    <div class="fade-in">
      <div class="admin-card">
        <!-- Toolbar -->
        <div class="admin-card-toolbar">
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <input type="text" class="admin-search-input" id="admin-product-search" placeholder="Search by title, SKU..." value="${i(e)}">
            
            <select class="admin-search-input" id="admin-category-filter" style="width: 180px;">
              <option value="all" ${t==="all"?"selected":""}>All Categories</option>
              ${s.map(n=>`
                <option value="${i(n.slug||n.name)}" ${t.toLowerCase()===(n.slug||n.name).toLowerCase()?"selected":""}>
                  ${i(n.name)}
                </option>
              `).join("")}
            </select>
          </div>

          <div style="display: flex; gap: 0.8rem; align-items: center;">
            <span style="font-size: 0.84rem; color: #A1A1AA;">
              Total Products: <strong>${a.length}</strong>
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
              ${r.length===0?`
                <tr>
                  <td colspan="6" style="text-align: center; padding: 3rem; color: #71717A;">No garments match search criteria.</td>
                </tr>
              `:r.map(n=>{const u=n.images&&n.images[0]||ye[0];return`
                  <tr>
                    <td>
                      <div style="display: flex; align-items: center; gap: 0.8rem;">
                        <img src="${i(u)}" alt="${i(n.title)}" style="width: 44px; height: 56px; object-fit: cover; border-radius: var(--radius-xs); border: 1px solid var(--border-dark);">
                        <div>
                          <strong style="color: #FFFFFF; font-size: 0.95rem; display: block;">${i(n.title)}</strong>
                          <span style="font-size: 0.75rem; color: #71717A;">SKU: ${i(n.sku||"BF-AUTO")}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="badge" style="background: #27272A; color: #D4D4D8; font-size: 0.72rem;">${i(n.category)}</span>
                    </td>
                    <td>
                      <div style="font-size: 0.95rem; font-weight: 700; color: #FFFFFF;">
                        ${y(n.price,o.currency)}
                        ${n.originalPrice?`<span style="font-size: 0.78rem; text-decoration: line-through; color: #71717A; font-weight: 400; margin-left: 4px;">${y(n.originalPrice,o.currency)}</span>`:""}
                      </div>
                      <div style="font-size: 0.75rem; color: ${n.stock<=5?"#F87171":"#4ADE80"}; font-weight: 600;">
                        ${n.stock} units in stock
                      </div>
                    </td>
                    <td>
                      ${n.badge?`<span class="badge badge-gold" style="font-size: 0.68rem;">${i(n.badge)}</span>`:'<span style="color: #52525B; font-size: 0.8rem;">—</span>'}
                    </td>
                    <td>
                      <label class="admin-toggle-switch">
                        <input type="checkbox" class="toggle-featured-cb" data-id="${n.id}" ${n.isFeatured?"checked":""}>
                        <span class="admin-toggle-slider"></span>
                      </label>
                    </td>
                    <td style="text-align: right;">
                      <div class="table-action-btns" style="justify-content: flex-end;">
                        <button class="btn-icon-action btn-edit-product" data-id="${n.id}" title="Edit Garment Details & Photos">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </button>
                        <button class="btn-icon-action btn-duplicate-product" data-id="${n.id}" title="Duplicate Product">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                        <button class="btn-icon-action btn-delete-product" data-id="${n.id}" title="Delete Garment" style="color: #EF4444;">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                `}).join("")}
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
                  ${s.map(n=>`<option value="${i(n.slug||n.name)}">${i(n.name)}</option>`).join("")}
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
                <label class="form-label" style="color: #A1A1AA;">Price (${o.currency||"৳"}) *</label>
                <input type="number" step="1" class="form-input" id="edit-prod-price" required placeholder="590" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Original / Strikethrough Price (${o.currency||"৳"})</label>
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
                    ${ye.map(n=>`
                      <img src="${i(n)}" class="preset-thumb" onclick="appendPresetImage('${i(n)}')" title="Use preset photo" loading="lazy">
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
  `}function ie(){const t=document.getElementById("admin-product-search"),e=document.getElementById("admin-category-filter");t&&t.addEventListener("input",d=>{const c=d.target.value,h=e?e.value:"all",v=document.querySelector(".admin-content");v&&(v.innerHTML=se(h,c)),ie()}),e&&e.addEventListener("change",d=>{const c=d.target.value,h=t?t.value:"",v=document.querySelector(".admin-content");v&&(v.innerHTML=se(c,h)),ie()}),document.querySelectorAll(".toggle-featured-cb").forEach(d=>{d.addEventListener("change",()=>{const c=d.getAttribute("data-id");l.updateProduct(c,{isFeatured:d.checked}),g(d.checked?"Product added to Featured Showcase":"Removed from Featured Showcase","info")})}),document.querySelectorAll(".btn-edit-product").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-id");rt(c)})}),document.querySelectorAll(".btn-duplicate-product").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-id"),h=l.getProductById(c);if(h){const v=JSON.parse(JSON.stringify(h));delete v.id,v.title=`${v.title} (Copy)`,v.sku=`BF-${Math.floor(100+Math.random()*900)}`,l.addProduct(v),g("Product duplicated successfully","success"),le()}})}),document.querySelectorAll(".btn-delete-product").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-id"),h=l.getProductById(c);confirm(`Are you sure you wish to delete "${(h==null?void 0:h.title)||"this product"}" from the catalog?`)&&(l.deleteProduct(c),g("Product removed from catalog","info"),le())})});const a=document.getElementById("product-dropzone"),s=document.getElementById("prod-file-input");a&&s&&(a.addEventListener("click",()=>s.click()),s.addEventListener("change",async d=>{d.target.files&&d.target.files.length>0&&(await be(d.target.files),s.value="")}),a.addEventListener("dragover",d=>{d.preventDefault(),a.classList.add("dragover")}),a.addEventListener("dragleave",()=>{a.classList.remove("dragover")}),a.addEventListener("drop",async d=>{d.preventDefault(),a.classList.remove("dragover"),d.dataTransfer&&d.dataTransfer.files&&d.dataTransfer.files.length>0&&await be(d.dataTransfer.files)}));const o=document.getElementById("btn-toggle-manual-url"),r=document.getElementById("manual-url-container");o&&r&&o.addEventListener("click",()=>{const d=r.style.display!=="none";r.style.display=d?"none":"block",o.textContent=d?"🔗 Or Paste Image URL":"✕ Close URL Input"});const n=document.getElementById("btn-add-manual-url"),u=document.getElementById("manual-image-url-input");n&&u&&n.addEventListener("click",()=>{const d=u.value.trim();d&&(P.push(d),U(),u.value="",g("Photo added to gallery!","info"))});const p=document.getElementById("product-editor-form");p&&p.addEventListener("submit",async d=>{var S,m,A,E,$,I,N,T,R,f,x,C,B,O;if(d.preventDefault(),P.length===0){g("Please upload or add at least one product photo","error");return}const c=document.getElementById("btn-save-product");c&&(c.disabled=!0,c.innerHTML="<span>⏳ Saving Product...</span>");const v=(((S=document.getElementById("edit-prod-sizes"))==null?void 0:S.value)||"").split(",").map(L=>L.trim()).filter(Boolean),b=(((m=document.getElementById("edit-prod-colors"))==null?void 0:m.value)||"").split(",").map(L=>{var j,Q;const z=L.split(":");return{name:((j=z[0])==null?void 0:j.trim())||"Obsidian Black",hex:((Q=z[1])==null?void 0:Q.trim())||"#111111"}}).filter(L=>L.name),k={title:((A=document.getElementById("edit-prod-title"))==null?void 0:A.value)||"Brother's Fashion Garment",subtitle:((E=document.getElementById("edit-prod-subtitle"))==null?void 0:E.value)||"",category:(($=document.getElementById("edit-prod-category"))==null?void 0:$.value)||"Men's Collection",price:parseFloat((I=document.getElementById("edit-prod-price"))==null?void 0:I.value)||500,originalPrice:parseFloat((N=document.getElementById("edit-prod-orig-price"))==null?void 0:N.value)||null,stock:parseInt((T=document.getElementById("edit-prod-stock"))==null?void 0:T.value,10)||10,badge:((R=document.getElementById("edit-prod-badge"))==null?void 0:R.value)||"",sku:((f=document.getElementById("edit-prod-sku"))==null?void 0:f.value)||"",images:P,sizes:v,colors:b,description:((x=document.getElementById("edit-prod-desc"))==null?void 0:x.value)||"",fabric:((C=document.getElementById("edit-prod-fabric"))==null?void 0:C.value)||"",isFeatured:((B=document.getElementById("edit-prod-featured"))==null?void 0:B.checked)||!1};try{oe?(await l.updateProduct(oe,k),g("Garment details & photos updated successfully","success")):(await l.addProduct(k),g("New product listed in catalog with uploaded photos","success")),(O=document.getElementById("product-editor-modal"))==null||O.classList.remove("active"),le()}catch(L){g(L.message||"Failed to save product","error")}finally{c&&(c.disabled=!1,c.innerHTML="Save Product")}})}async function be(t){if(!t||t.length===0)return;const e=document.getElementById("upload-progress-bar");e&&(e.style.display="block");const a=new FormData;Array.from(t).forEach(s=>{a.append("images[]",s)});try{const s=await fetch("./api/upload.php",{method:"POST",headers:{"X-Admin-Token":l.getAdminToken()},body:a}),o=await s.json();if(s.ok&&o.success&&Array.isArray(o.images))o.images.forEach(r=>{P.includes(r)||P.push(r)}),U(),g(`${o.images.length} photo(s) uploaded successfully!`,"success");else throw new Error(o.error||"Server upload failed")}catch{let o=0;for(const r of Array.from(t)){const n=await it(r);n&&!P.includes(n)&&(P.push(n),o++)}U(),g(`${o} photo(s) loaded from device!`,"success")}finally{e&&(e.style.display="none")}}function it(t){return new Promise(e=>{const a=new FileReader;a.onload=s=>e(s.target.result),a.onerror=()=>e(null),a.readAsDataURL(t)})}function U(){const t=document.getElementById("prod-image-preview-grid");if(t){if(P.length===0){t.innerHTML='<span style="font-size: 0.78rem; color: #71717A;">No photos uploaded yet. Upload from your device above.</span>';return}t.innerHTML=P.map((e,a)=>`
    <div class="prod-thumb-item" style="position: relative; width: 72px; height: 92px; border-radius: 6px; overflow: hidden; border: 2px solid ${a===0?"var(--gold-light)":"#3F3F46"}; background: #000;">
      <img src="${i(e)}" style="width: 100%; height: 100%; object-fit: cover;">
      ${a===0?'<span style="position: absolute; bottom: 0; left: 0; right: 0; background: var(--gold-light); color: #000; font-size: 0.58rem; font-weight: 700; text-align: center; padding: 2px 0;">COVER</span>':""}
      <button type="button" onclick="removeModalImage(${a})" style="position: absolute; top: 2px; right: 2px; width: 18px; height: 18px; border-radius: 50%; background: rgba(0,0,0,0.75); color: #FFF; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px; line-height: 1;">✕</button>
    </div>
  `).join("")}}window.removeModalImage=function(t){P[t]&&(P.splice(t,1),U())};window.appendPresetImage=function(t){P.includes(t)||(P.push(t),U(),g("Preset photo added to gallery","info"))};function le(){const t=document.querySelector(".admin-content");t&&(t.innerHTML=se(),ie())}window.openAddProductModal=function(){oe=null,P=[];const t=document.getElementById("product-editor-modal"),e=document.getElementById("editor-modal-title"),a=document.getElementById("product-editor-form");t&&e&&a&&(e.textContent="Add New Garment to Catalog",a.reset(),t.classList.add("active"),U())};function rt(t){const e=l.getProductById(t);if(!e)return;oe=t,P=Array.isArray(e.images)?[...e.images]:[];const a=document.getElementById("product-editor-modal"),s=document.getElementById("editor-modal-title");a&&s&&(s.textContent=`Edit "${e.title}"`,document.getElementById("edit-prod-title").value=e.title||"",document.getElementById("edit-prod-subtitle").value=e.subtitle||"",document.getElementById("edit-prod-category").value=e.category||"Men's Collection",document.getElementById("edit-prod-price").value=e.price||0,document.getElementById("edit-prod-orig-price").value=e.originalPrice||"",document.getElementById("edit-prod-stock").value=e.stock!==void 0?e.stock:10,document.getElementById("edit-prod-badge").value=e.badge||"",document.getElementById("edit-prod-sku").value=e.sku||"",document.getElementById("edit-prod-sizes").value=(e.sizes||[]).join(", "),document.getElementById("edit-prod-colors").value=(e.colors||[]).map(o=>`${o.name}:${o.hex}`).join(", "),document.getElementById("edit-prod-desc").value=e.description||"",document.getElementById("edit-prod-fabric").value=e.fabric||"",document.getElementById("edit-prod-featured").checked=!!e.isFeatured,a.classList.add("active"),U())}function $e(){const t=l.getNotices(),e=l.getFlashOffer(),a=l.getCoupons(),s=l.getSettings();return`
    <div class="fade-in">
      <!-- 1. Top Notice Bar & Marquee Editor -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Top Announcement / Notice Bar</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Controls the marquee notice displayed at the very top of the storefront.</p>
          </div>
          <label class="admin-toggle-switch">
            <input type="checkbox" id="notice-active-cb" ${t.active?"checked":""}>
            <span class="admin-toggle-slider"></span>
          </label>
        </div>

        <form id="notice-editor-form">
          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Notice Text (Supports emojis & marquee ticker)</label>
            <textarea class="form-textarea" id="notice-text-input" rows="2" style="background: #222228; color: #FFFFFF; border-color: #383842;">${i(t.text||"")}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Link Destination</label>
              <input type="text" class="form-input" id="notice-link-input" value="${i(t.link||"#catalog")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Link Button Label</label>
              <input type="text" class="form-input" id="notice-link-text-input" value="${i(t.linkText||"Shop Collection")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Notice Bar</button>
        </form>
      </div>

      <!-- 2. Flash Sale & Privilege Event Settings -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Private Privilege Sale & Countdown</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Controls the flash offer banner, live countdown timer, and promo link.</p>
          </div>
          <label class="admin-toggle-switch">
            <input type="checkbox" id="flash-active-cb" ${e.active?"checked":""}>
            <span class="admin-toggle-slider"></span>
          </label>
        </div>

        <form id="flash-editor-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Campaign Title</label>
              <input type="text" class="form-input" id="flash-title-input" value="${i(e.title||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Promo Voucher Code</label>
              <input type="text" class="form-input" id="flash-code-input" value="${i(e.couponCode||"ELEGANCE20")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Campaign Description</label>
            <input type="text" class="form-input" id="flash-desc-input" value="${i(e.subtitle||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Banner Image URL</label>
              <input type="text" class="form-input" id="flash-img-input" value="${i(e.bannerImage||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Discount Rate (%)</label>
              <input type="number" class="form-input" id="flash-percent-input" value="${e.discountPercent||20}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Privilege Campaign</button>
        </form>
      </div>

      <!-- 3. VIP Coupon Passcodes Engine -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">VIP Promo Codes & Coupons</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Create discount codes that customers can redeem in their shopping bag or checkout.</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="window.openAddCouponModal()">
            + Create New Promo Code
          </button>
        </div>

        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Discount</th>
                <th>Min Spend</th>
                <th>Expiry</th>
                <th>Description</th>
                <th>Status</th>
                <th style="text-align: right;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${a.map(o=>`
                <tr>
                  <td><strong style="color: var(--gold-light); font-family: var(--font-sans); font-size: 0.95rem;">${i(o.code)}</strong></td>
                  <td>
                    ${o.discountType==="percentage"?`<span class="badge badge-gold">${o.discountValue}% OFF</span>`:`<span class="badge badge-sale">${s.currency}${o.discountValue} OFF</span>`}
                  </td>
                  <td>${o.minSpend?y(o.minSpend,s.currency):"No minimum"}</td>
                  <td>${o.expiryDate||"Ongoing"}</td>
                  <td style="color: #A1A1AA;">${i(o.description||"—")}</td>
                  <td>
                    <span class="status-pill ${o.isActive?"status-delivered":"status-cancelled"}">
                      ${o.isActive?"Active":"Inactive"}
                    </span>
                  </td>
                  <td style="text-align: right;">
                    <button class="btn-icon-action btn-action-delete btn-delete-coupon" data-id="${o.id}" title="Delete Promo Code">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Create Coupon Modal -->
    <div class="modal-overlay" id="coupon-modal">
      <div class="modal-window" style="max-width: 500px; background: var(--bg-dark-surface); border-color: var(--border-dark); color: #E4E4E7;">
        <div class="modal-header" style="border-color: var(--border-dark);">
          <h3 class="modal-title" style="color: #FFFFFF;">Create VIP Promo Voucher</h3>
          <button class="modal-close" onclick="document.getElementById('coupon-modal').classList.remove('active')">&times;</button>
        </div>

        <form id="coupon-form">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Voucher Passcode *</label>
              <input type="text" class="form-input" id="new-coupon-code" required placeholder="e.g. HAUTE30" style="background: #222228; color: #FFFFFF; border-color: #383842; text-transform: uppercase;">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Discount Type</label>
                <select class="form-select" id="new-coupon-type" style="background: #222228; color: #FFFFFF; border-color: #383842;">
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount ($)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Discount Value *</label>
                <input type="number" class="form-input" id="new-coupon-val" required value="20" placeholder="20" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Minimum Spend ($)</label>
                <input type="number" class="form-input" id="new-coupon-min" value="100" placeholder="100" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #A1A1AA;">Expiry Date</label>
                <input type="date" class="form-input" id="new-coupon-expiry" value="2026-12-31" style="background: #222228; color: #FFFFFF; border-color: #383842;">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Description</label>
              <input type="text" class="form-input" id="new-coupon-desc" placeholder="e.g. 30% off runway pieces over $100" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="modal-footer" style="background: #17171C; border-color: var(--border-dark);">
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('coupon-modal').classList.remove('active')">Cancel</button>
            <button type="submit" class="btn btn-gold btn-sm">Create Voucher</button>
          </div>
        </form>
      </div>
    </div>
  `}function Ie(){const t=document.getElementById("notice-editor-form"),e=document.getElementById("notice-active-cb");t&&t.addEventListener("submit",r=>{var n,u,p;r.preventDefault(),l.updateNotices({active:e?e.checked:!0,text:((n=document.getElementById("notice-text-input"))==null?void 0:n.value)||"",link:((u=document.getElementById("notice-link-input"))==null?void 0:u.value)||"#catalog",linkText:((p=document.getElementById("notice-link-text-input"))==null?void 0:p.value)||"Shop"}),g("Store announcement bar updated in real-time!","success")});const a=document.getElementById("flash-editor-form"),s=document.getElementById("flash-active-cb");a&&a.addEventListener("submit",r=>{var n,u,p,d,c;r.preventDefault(),l.updateFlashOffer({active:s?s.checked:!0,title:((n=document.getElementById("flash-title-input"))==null?void 0:n.value)||"",couponCode:((u=document.getElementById("flash-code-input"))==null?void 0:u.value)||"ELEGANCE20",subtitle:((p=document.getElementById("flash-desc-input"))==null?void 0:p.value)||"",bannerImage:((d=document.getElementById("flash-img-input"))==null?void 0:d.value)||"",discountPercent:parseInt((c=document.getElementById("flash-percent-input"))==null?void 0:c.value,10)||20}),g("Privilege campaign updated!","success")}),window.openAddCouponModal=function(){const r=document.getElementById("coupon-modal");r&&r.classList.add("active")};const o=document.getElementById("coupon-form");o&&o.addEventListener("submit",r=>{var v,F,b,k,S,m,A;r.preventDefault();const n=(v=document.getElementById("new-coupon-code"))==null?void 0:v.value.trim().toUpperCase(),u=((F=document.getElementById("new-coupon-type"))==null?void 0:F.value)||"percentage",p=parseFloat((b=document.getElementById("new-coupon-val"))==null?void 0:b.value)||10,d=parseFloat((k=document.getElementById("new-coupon-min"))==null?void 0:k.value)||0,c=((S=document.getElementById("new-coupon-expiry"))==null?void 0:S.value)||"2026-12-31",h=((m=document.getElementById("new-coupon-desc"))==null?void 0:m.value)||"";l.addCoupon({code:n,discountType:u,discountValue:p,minSpend:d,expiryDate:c,description:h,isActive:!0}),g(`Promo voucher '${n}' created!`,"success"),(A=document.getElementById("coupon-modal"))==null||A.classList.remove("active"),we()}),document.querySelectorAll(".btn-delete-coupon").forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");l.deleteCoupon(n),g("Coupon voucher removed","info"),we()})})}function we(){const t=document.querySelector(".admin-content");t&&(t.innerHTML=$e(),Ie())}function ee(t="all",e=""){const a=l.getOrders(),s=l.getSettings(),o=a.filter(r=>{var n;if(t!=="all"&&(r.orderStatus||"pending").toLowerCase()!==t.toLowerCase())return!1;if(e){const u=e.toLowerCase(),p=r.id.toLowerCase().includes(u),d=`${r.customer.firstName} ${r.customer.lastName}`.toLowerCase().includes(u),c=(n=r.customer.email)==null?void 0:n.toLowerCase().includes(u);if(!p&&!d&&!c)return!1}return!0});return`
    <div class="fade-in">
      <div class="admin-card">
        <!-- Toolbar -->
        <div class="admin-card-toolbar">
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
            <input type="text" class="admin-search-input" id="admin-order-search" placeholder="Search by Order ID, Client..." value="${i(e)}">
            
            <select class="admin-search-input" id="admin-order-status-filter" style="width: 170px;">
              <option value="all" ${t==="all"?"selected":""}>All Order Statuses</option>
              <option value="pending" ${t==="pending"?"selected":""}>Pending</option>
              <option value="confirmed" ${t==="confirmed"?"selected":""}>Confirmed</option>
              <option value="processing" ${t==="processing"?"selected":""}>Processing</option>
              <option value="shipped" ${t==="shipped"?"selected":""}>Shipped</option>
              <option value="delivered" ${t==="delivered"?"selected":""}>Delivered</option>
              <option value="cancelled" ${t==="cancelled"?"selected":""}>Cancelled</option>
            </select>

            <button class="btn btn-secondary btn-sm" id="btn-refresh-orders" title="Sync live orders from server database" style="color: #FFFFFF; border-color: var(--border-dark);">
              🔄 Refresh Orders
            </button>
          </div>

          <span style="font-size: 0.84rem; color: #A1A1AA;">
            Total Orders: <strong>${a.length}</strong> | Filtered: <strong>${o.length}</strong>
          </span>
        </div>

        <!-- Orders Table -->
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Client Details</th>
                <th>Ordered Items</th>
                <th>Total Paid</th>
                <th>Payment</th>
                <th>Status (Live Update)</th>
                <th style="text-align: right;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${o.length===0?`
                <tr>
                  <td colspan="7" style="text-align: center; padding: 3rem; color: #71717A;">No client orders match criteria.</td>
                </tr>
              `:o.map(r=>`
                <tr>
                  <td>
                    <strong style="color: var(--gold-light); font-size: 0.95rem;">#${i(r.id)}</strong>
                    <div style="font-size: 0.72rem; color: #71717A;">${re(r.createdAt)}</div>
                  </td>
                  <td>
                    <strong style="color: #FFFFFF;">${i(r.customer.firstName)} ${i(r.customer.lastName)}</strong>
                    <div style="font-size: 0.75rem; color: #A1A1AA;">${i(r.customer.email)}</div>
                    <div style="font-size: 0.72rem; color: #71717A;">${i(r.customer.city)}, ${i(r.customer.country)}</div>
                  </td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.4rem;">
                      ${(r.items||[]).slice(0,3).map(n=>`
                        <img src="${i(n.image)}" alt="${i(n.title)}" title="${i(n.title)} (${n.quantity}x)" style="width: 34px; height: 42px; object-fit: cover; border-radius: var(--radius-xs);">
                      `).join("")}
                      ${(r.items||[]).length>3?`<span style="font-size: 0.75rem; color: #A1A1AA;">+${r.items.length-3}</span>`:""}
                    </div>
                  </td>
                  <td>
                    <strong style="font-family: var(--font-serif); font-size: 1rem; color: #FFFFFF;">${y(r.total,s.currency)}</strong>
                    ${r.discount>0?`<div style="font-size: 0.7rem; color: #F87171;">Saved ${y(r.discount,s.currency)}</div>`:""}
                  </td>
                  <td>
                    <span style="font-size: 0.8rem; color: #D4D4D8;">${i(r.paymentMethod)}</span>
                    <div style="font-size: 0.72rem; color: ${r.paymentStatus==="Paid"?"#4ADE80":"#FBBF24"}; font-weight: 700;">${i(r.paymentStatus)}</div>
                  </td>
                  <td>
                    <select class="admin-search-input select-order-status" data-id="${r.id}" style="width: 130px; padding: 0.35rem 0.6rem; font-size: 0.78rem;">
                      <option value="Pending" ${r.orderStatus==="Pending"?"selected":""}>Pending</option>
                      <option value="Confirmed" ${r.orderStatus==="Confirmed"?"selected":""}>Confirmed</option>
                      <option value="Processing" ${r.orderStatus==="Processing"?"selected":""}>Processing</option>
                      <option value="Shipped" ${r.orderStatus==="Shipped"?"selected":""}>Shipped</option>
                      <option value="Delivered" ${r.orderStatus==="Delivered"?"selected":""}>Delivered</option>
                      <option value="Cancelled" ${r.orderStatus==="Cancelled"?"selected":""}>Cancelled</option>
                    </select>
                  </td>
                  <td style="text-align: right;">
                    <div class="table-action-btns" style="justify-content: flex-end;">
                      <button class="btn-icon-action btn-view-invoice" data-id="${r.id}" title="Print Packing Slip / Invoice">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="6 9 6 2 18 2 18 9"></polyline>
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                          <rect x="6" y="14" width="12" height="8"></rect>
                        </svg>
                      </button>
                      <a href="#tracking?id=${r.id}" target="_blank" class="btn-icon-action" title="View Customer Tracking Timeline">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Invoice / Packing Slip Modal -->
    <div class="modal-overlay" id="invoice-modal">
      <div class="modal-window" style="max-width: 640px; background: #FFFFFF; color: #121214;" id="invoice-modal-content"></div>
    </div>
  `}function te(){const t=document.getElementById("admin-order-search"),e=document.getElementById("admin-order-status-filter");t&&t.addEventListener("input",s=>{const o=s.target.value,r=e?e.value:"all",n=document.querySelector(".admin-content");n&&(n.innerHTML=ee(r,o)),te()}),e&&e.addEventListener("change",s=>{const o=s.target.value,r=t?t.value:"",n=document.querySelector(".admin-content");n&&(n.innerHTML=ee(o,r)),te()});const a=document.getElementById("btn-refresh-orders");a&&a.addEventListener("click",async()=>{a.disabled=!0,a.innerHTML="<span>⏳ Syncing...</span>";try{await l.fetchRemoteOrders(),g("Live orders synchronized from database!","success");const s=e?e.value:"all",o=t?t.value:"",r=document.querySelector(".admin-content");r&&(r.innerHTML=ee(s,o)),te()}catch{g("Synced with local storage","info"),a.disabled=!1,a.innerHTML="<span>🔄 Refresh Orders</span>"}}),document.querySelectorAll(".select-order-status").forEach(s=>{s.addEventListener("change",async()=>{const o=s.getAttribute("data-id"),r=s.value;await l.updateOrderStatus(o,r),g(`Order #${o} status changed to '${r}'. Inventory & customer tracking updated!`,"success")})}),document.querySelectorAll(".btn-view-invoice").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-id"),r=l.getOrderById(o);r&&nt(r)})})}function nt(t){const e=l.getSettings(),a=document.getElementById("invoice-modal"),s=document.getElementById("invoice-modal-content");a&&s&&(s.innerHTML=`
      <div class="modal-header">
        <h3 class="modal-title">Brother's Fashion Invoice #${i(t.id)}</h3>
        <button class="modal-close" onclick="document.getElementById('invoice-modal').classList.remove('active')">&times;</button>
      </div>

      <div class="modal-body" id="printable-invoice-body">
        <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #000000; padding-bottom: 1.2rem; margin-bottom: 1.5rem;">
          <div>
            <h2 style="font-family: var(--font-serif); font-size: 1.4rem;">${i(e.storeName||"Brother's Fashion")}</h2>
            <p style="font-size: 0.8rem; color: #555;">${i(e.atelierAddress)}</p>
          </div>
          <div style="text-align: right;">
            <strong>PACKING SLIP / RECEIPT</strong>
            <div style="font-size: 0.8rem; color: #555;">Date: ${re(t.createdAt)}</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; font-size: 0.85rem;">
          <div>
            <strong>Deliver To:</strong>
            <p>${i(t.customer.firstName)} ${i(t.customer.lastName)}<br>
            ${i(t.customer.address)}<br>
            ${i(t.customer.city)}, ${i(t.customer.postalCode)}<br>
            ${i(t.customer.country)}<br>
            Phone: ${i(t.customer.phone)}</p>
          </div>
          <div>
            <strong>Payment Info:</strong>
            <p>Method: ${i(t.paymentMethod)}<br>
            Status: ${i(t.paymentStatus)}<br>
            Tracking: ${i(t.trackingNumber)}</p>
          </div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 1.5rem;">
          <thead>
            <tr style="border-bottom: 1px solid #CCC; text-align: left;">
              <th style="padding: 0.5rem 0;">Item Description</th>
              <th style="padding: 0.5rem 0;">Size / Color</th>
              <th style="padding: 0.5rem 0; text-align: center;">Qty</th>
              <th style="padding: 0.5rem 0; text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${(t.items||[]).map(o=>`
              <tr style="border-bottom: 1px solid #EEE;">
                <td style="padding: 0.6rem 0;"><strong>${i(o.title)}</strong></td>
                <td style="padding: 0.6rem 0;">${i(o.size)} | ${i(o.color)}</td>
                <td style="padding: 0.6rem 0; text-align: center;">${o.quantity}</td>
                <td style="padding: 0.6rem 0; text-align: right;">${y(o.price*o.quantity,e.currency)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; font-size: 0.9rem;">
          <div style="width: 240px; display: flex; flex-direction: column; gap: 0.3rem;">
            <div style="display: flex; justify-content: space-between;"><span>Subtotal:</span> <span>${y(t.subtotal,e.currency)}</span></div>
            ${t.discount>0?`<div style="display: flex; justify-content: space-between; color: red;"><span>Discount:</span> <span>-${y(t.discount,e.currency)}</span></div>`:""}
            <div style="display: flex; justify-content: space-between;"><span>Shipping:</span> <span>${y(t.shippingFee||0,e.currency)}</span></div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #000; padding-top: 0.3rem; margin-top: 0.3rem;">
              <span>Grand Total:</span> <span>${y(t.total,e.currency)}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer" style="background: #F4F4F5;">
        <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print Packing Slip</button>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('invoice-modal').classList.remove('active')">Close</button>
      </div>
    `,a.classList.add("active"))}function ce(){const t=l.getSettings(),e=l.getPolicies(),a=l.getFaqs();return`
    <div class="fade-in">
      <!-- 1. Store Identity & Delivery Charges -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Store Branding & Rajshahi Delivery Charges</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Configure store name, currency symbol, and automated delivery charges for Rajshahi and nationwide.</p>
          </div>
        </div>

        <form id="settings-branding-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Shop Name *</label>
              <input type="text" class="form-input" id="set-store-name" value="${i(t.storeName||"")}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Tagline</label>
              <input type="text" class="form-input" id="set-tagline" value="${i(t.tagline||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Inside Rajshahi Delivery Fee (৳) *</label>
              <input type="number" class="form-input" id="set-inside-rajshahi" value="${t.insideRajshahiFee||80}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Outside Rajshahi Delivery Fee (৳) *</label>
              <input type="number" class="form-input" id="set-outside-rajshahi" value="${t.outsideRajshahiFee||120}" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Free Delivery Minimum (৳)</label>
              <input type="number" class="form-input" id="set-free-shipping" value="${t.freeShippingThreshold||2e3}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Currency Symbol</label>
              <select class="form-select" id="set-currency" style="background: #222228; color: #FFFFFF; border-color: #383842;">
                <option value="৳" ${t.currency==="৳"?"selected":""}>৳ (BDT - Bangladeshi Taka)</option>
                <option value="$" ${t.currency==="$"?"selected":""}>$ (USD)</option>
                <option value="€" ${t.currency==="€"?"selected":""}>€ (EUR)</option>
              </select>
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Brand & Delivery Rates</button>
        </form>
      </div>

      <!-- 2. Admin Security & Password Management -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">🔐 Administrator Password & Security</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Update your master login password. Changes will immediately sync to the server database.</p>
          </div>
        </div>

        <form id="settings-password-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Current Admin Password *</label>
              <input type="password" class="form-input" id="set-current-password" placeholder="Enter current password" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">New Password * (Min 6 characters)</label>
              <input type="password" class="form-input" id="set-new-password" placeholder="Enter new password" minlength="6" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Confirm New Password *</label>
              <input type="password" class="form-input" id="set-confirm-password" placeholder="Re-enter new password" minlength="6" required style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" id="btn-update-admin-pass" class="btn btn-gold btn-sm">
            Update Administrator Password
          </button>
        </form>
      </div>

      <!-- 3. Facebook Page & Pre-Pay Messenger Template Message Configuration -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Facebook Page & Pre-Pay Message Template</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">When customers choose "Pre-Pay via Facebook Inbox", they will be redirected to this Messenger link with the auto-generated template message below.</p>
          </div>
        </div>

        <form id="settings-facebook-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Facebook Page URL</label>
              <input type="text" class="form-input" id="set-fb-page" value="${i(t.facebookPageUrl||"")}" placeholder="https://www.facebook.com/yourpagename" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Facebook Messenger Link (m.me URL)</label>
              <input type="text" class="form-input" id="set-fb-inbox" value="${i(t.facebookInboxUrl||"")}" placeholder="https://m.me/yourpagename" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">
              Pre-Pay Order Template Message (Per Product / Cart)
            </label>
            <div style="font-size: 0.74rem; color: var(--gold-light); margin-bottom: 0.4rem;">
              Available Dynamic Tags: <code>{product_name}</code>, <code>{size}</code>, <code>{color}</code>, <code>{quantity}</code>, <code>{product_price}</code>, <code>{delivery_charge}</code>, <code>{delivery_location}</code>, <code>{total_amount}</code>, <code>{customer_address}</code>, <code>{customer_city}</code>, <code>{customer_phone}</code>, <code>{custom_design_info}</code>
            </div>
            <textarea class="form-textarea" id="set-fb-template" rows="7" style="background: #222228; color: #FFFFFF; border-color: #383842; font-family: monospace; font-size: 0.84rem;">${i(t.facebookTemplateMessage||"")}</textarea>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Facebook Pre-Pay Template</button>
        </form>
      </div>

      <!-- 3. Outlet Location & Concierge Contacts -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Outlet Address & Hotline Contacts</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Update your Rajshahi Sadar store address, phone numbers, and WhatsApp line.</p>
          </div>
        </div>

        <form id="settings-contacts-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Outlet Address in Rajshahi *</label>
              <input type="text" class="form-input" id="set-address" value="${i(t.atelierAddress||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Hotline Phone Number</label>
              <input type="tel" class="form-input" id="set-phone" value="${i(t.contactPhone||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">WhatsApp Number (with country code)</label>
              <input type="text" class="form-input" id="set-whatsapp" value="${i(t.whatsappNumber||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
            <div class="form-group">
              <label class="form-label" style="color: #A1A1AA;">Official Email Address</label>
              <input type="email" class="form-input" id="set-email" value="${i(t.contactEmail||"")}" style="background: #222228; color: #FFFFFF; border-color: #383842;">
            </div>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Update Contact Details</button>
        </form>
      </div>

      <!-- 4. Policy Documents CMS Editor -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Store Policies & Legal Terms</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Live editable content for delivery, returns, and privacy pages.</p>
          </div>
        </div>

        <form id="settings-policies-form">
          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Delivery & Courier Policy</label>
            <textarea class="form-textarea" id="set-pol-shipping" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${i(e.shipping||"")}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">7-Day Exchange Policy</label>
            <textarea class="form-textarea" id="set-pol-returns" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${i(e.returns||"")}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label" style="color: #A1A1AA;">Privacy Policy</label>
            <textarea class="form-textarea" id="set-pol-privacy" rows="4" style="background: #222228; color: #FFFFFF; border-color: #383842;">${i(e.privacy||"")}</textarea>
          </div>

          <button type="submit" class="btn btn-gold btn-sm">Save Policy Documents</button>
        </form>
      </div>

      <!-- 5. FAQ Content Manager -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Frequently Asked Questions (FAQs)</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Add, edit, or remove customer FAQs.</p>
          </div>
          <button class="btn btn-gold btn-sm" onclick="window.addNewFaqItem()">+ Add FAQ Item</button>
        </div>

        <div id="admin-faqs-list" style="display: flex; flex-direction: column; gap: 1rem;">
          ${a.map((s,o)=>`
            <div style="background: #1C1C22; border: 1px solid var(--border-dark); border-radius: var(--radius-xs); padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <input type="text" class="form-input faq-question-input" data-index="${o}" value="${i(s.question)}" placeholder="FAQ Question" style="background: #25252E; color: #FFFFFF; border-color: #383842; font-weight: 600;">
                <button class="btn-icon-action btn-action-delete" onclick="window.removeFaqItem(${o})" title="Delete FAQ" style="margin-left: 0.8rem;">
                  &times;
                </button>
              </div>
              <textarea class="form-textarea faq-answer-input" data-index="${o}" rows="2" placeholder="FAQ Answer" style="background: #25252E; color: #FFFFFF; border-color: #383842;">${i(s.answer)}</textarea>
            </div>
          `).join("")}
        </div>

        <button class="btn btn-gold btn-sm" id="btn-save-faqs" style="margin-top: 1.5rem;">Save All FAQs</button>
      </div>

      <!-- 6. Database Tools & Backups -->
      <div class="admin-card">
        <div class="admin-card-toolbar">
          <div>
            <h4 style="color: #FFFFFF; font-size: 1.1rem;">Database Backup, Export & Factory Reset</h4>
            <p style="font-size: 0.8rem; color: #A1A1AA;">Export your entire store catalog and orders to JSON, import backups, or restore defaults.</p>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" id="btn-export-db" style="color: #FFFFFF; border-color: var(--border-dark);">
            💾 Export Database (.JSON)
          </button>
          
          <label class="btn btn-secondary btn-sm" style="color: #FFFFFF; border-color: var(--border-dark); cursor: pointer;">
            📂 Import JSON Backup
            <input type="file" id="input-import-db" accept=".json" style="display: none;">
          </label>

          <button class="btn btn-secondary btn-sm" id="btn-reset-db" style="color: #FF6B6B; border-color: rgba(255,107,107,0.3);">
            ⚠️ Factory Reset Demo Data
          </button>
        </div>
      </div>
    </div>
  `}function ue(){const t=document.getElementById("settings-branding-form");t&&t.addEventListener("submit",d=>{var S,m,A,E,$,I;d.preventDefault();const c=((S=document.getElementById("set-store-name"))==null?void 0:S.value)||"Brother's Fashion",h=((m=document.getElementById("set-tagline"))==null?void 0:m.value)||"",v=parseFloat((A=document.getElementById("set-inside-rajshahi"))==null?void 0:A.value)||80,F=parseFloat((E=document.getElementById("set-outside-rajshahi"))==null?void 0:E.value)||120,b=parseFloat(($=document.getElementById("set-free-shipping"))==null?void 0:$.value)||2e3,k=((I=document.getElementById("set-currency"))==null?void 0:I.value)||"৳";l.updateSettings({storeName:c,tagline:h,insideRajshahiFee:v,outsideRajshahiFee:F,freeShippingThreshold:b,currency:k}),g("Store branding and delivery rates saved!","success")});const e=document.getElementById("settings-password-form");e&&e.addEventListener("submit",async d=>{var b,k,S;d.preventDefault();const c=((b=document.getElementById("set-current-password"))==null?void 0:b.value)||"",h=((k=document.getElementById("set-new-password"))==null?void 0:k.value)||"",v=((S=document.getElementById("set-confirm-password"))==null?void 0:S.value)||"";if(h!==v){g("New passwords do not match. Please verify.","error");return}if(h.length<6){g("New password must be at least 6 characters long.","error");return}const F=document.getElementById("btn-update-admin-pass");F&&(F.disabled=!0,F.innerHTML="<span>⏳ Updating Password...</span>");try{const m=await l.changeAdminPassword(c,h);m.success?(g(m.message||"Admin password updated successfully! Keep it secure.","success"),e.reset()):g(m.error||"Failed to update password","error")}catch(m){g(m.message||"Failed to update password","error")}finally{F&&(F.disabled=!1,F.innerHTML="Update Administrator Password")}});const a=document.getElementById("settings-facebook-form");a&&a.addEventListener("submit",d=>{var F,b,k;d.preventDefault();const c=((F=document.getElementById("set-fb-page"))==null?void 0:F.value)||"",h=((b=document.getElementById("set-fb-inbox"))==null?void 0:b.value)||"",v=((k=document.getElementById("set-fb-template"))==null?void 0:k.value)||"";l.updateSettings({facebookPageUrl:c,facebookInboxUrl:h,facebookTemplateMessage:v}),g("Facebook Page and Pre-Pay template updated!","success")});const s=document.getElementById("settings-contacts-form");s&&s.addEventListener("submit",d=>{var c,h,v,F;d.preventDefault(),l.updateSettings({atelierAddress:((c=document.getElementById("set-address"))==null?void 0:c.value)||"",contactPhone:((h=document.getElementById("set-phone"))==null?void 0:h.value)||"",whatsappNumber:((v=document.getElementById("set-whatsapp"))==null?void 0:v.value)||"",contactEmail:((F=document.getElementById("set-email"))==null?void 0:F.value)||""}),g("Outlet contact details saved!","success")});const o=document.getElementById("settings-policies-form");o&&o.addEventListener("submit",d=>{var c,h,v;d.preventDefault(),l.updatePolicies({shipping:((c=document.getElementById("set-pol-shipping"))==null?void 0:c.value)||"",returns:((h=document.getElementById("set-pol-returns"))==null?void 0:h.value)||"",privacy:((v=document.getElementById("set-pol-privacy"))==null?void 0:v.value)||""}),g("Policy documents saved!","success")});const r=document.getElementById("btn-save-faqs");r&&r.addEventListener("click",()=>{const d=document.querySelectorAll(".faq-question-input"),c=document.querySelectorAll(".faq-answer-input"),h=[];d.forEach((v,F)=>{const b=c[F];v.value.trim()&&h.push({question:v.value.trim(),answer:b?b.value.trim():""})}),l.updateFaqs(h),g("FAQ entries updated!","success")});const n=document.getElementById("btn-export-db");n&&n.addEventListener("click",()=>{const d=l.exportDatabaseJSON(),c=new Blob([d],{type:"application/json"}),h=URL.createObjectURL(c),v=document.createElement("a");v.href=h,v.download=`brothers-fashion-backup-${new Date().toISOString().slice(0,10)}.json`,v.click(),URL.revokeObjectURL(h),g("Database exported successfully!","success")});const u=document.getElementById("input-import-db");u&&u.addEventListener("change",d=>{const c=d.target.files[0];if(c){const h=new FileReader;h.onload=v=>{const F=l.importDatabaseJSON(v.target.result);F.success?(g("Database restored successfully!","success"),setTimeout(()=>window.location.reload(),800)):g(`Import failed: ${F.error}`,"error")},h.readAsText(c)}});const p=document.getElementById("btn-reset-db");p&&p.addEventListener("click",()=>{confirm("Reset store data back to Brother's Fashion defaults?")&&(l.resetToDefaults(),g("Database restored to default catalog!","info"),setTimeout(()=>window.location.reload(),800))})}window.addNewFaqItem=function(){const t=l.getFaqs();t.push({question:"New Question?",answer:"Answer description..."}),l.updateFaqs(t);const e=document.querySelector(".admin-content");e&&(e.innerHTML=ce(),ue())};window.removeFaqItem=function(t){const e=l.getFaqs();e.splice(t,1),l.updateFaqs(e);const a=document.querySelector(".admin-content");a&&(a.innerHTML=ce(),ue())};const pe="efr-theme",W="dark",X="light";function lt(){const t=localStorage.getItem(pe);return t===W||t===X?t:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?W:X}function de(t){const e=document.documentElement;e.setAttribute("data-theme",t),e.style.colorScheme=t,localStorage.setItem(pe,t),Pe(t)}function Pe(t){const e=document.getElementById("theme-toggle-btn");if(!e)return;const a=t===W;e.setAttribute("aria-label",a?"Switch to Light Mode":"Switch to Dark Mode"),e.title=a?"Switch to Light Mode":"Switch to Dark Mode",e.innerHTML=a?ct():dt()}function dt(){return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'}function ct(){return'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'}function ut(){const t=lt();if(de(t),!document.getElementById("theme-toggle-btn")){const e=document.createElement("button");e.id="theme-toggle-btn",e.className="theme-toggle-fab",Pe(t),e.addEventListener("click",()=>{const a=document.documentElement.getAttribute("data-theme")||X;de(a===W?X:W)}),document.body.appendChild(e)}window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{localStorage.getItem(pe)||de(e.matches?W:X)})}function Be(){const t=window.location.hash.slice(1)||"home",[e,a]=t.split("?"),s={};if(a){const o=new URLSearchParams(a);for(const[r,n]of o.entries())s[r]=n}return{path:e.toLowerCase(),params:s}}function _(){const{path:t,params:e}=Be(),a=document.getElementById("app");if(!a)return;if(window.scrollTo({top:0,behavior:"smooth"}),t==="admin"){const o=e.tab||"dashboard";let r="";o==="products"?r=se(e.category||"all",e.search||""):o==="offers"?r=$e():o==="orders"?r=ee(e.status||"all",e.search||""):o==="settings"?r=ce():r=Ee(),a.innerHTML=at(o,r),st(),o==="products"?ie():o==="offers"?Ie():o==="orders"?te():o==="settings"&&ue();return}let s="";t==="home"||t===""?s=He():t==="catalog"?s=Ke(e):t==="product"?s=Qe(e.id):t==="offers"?s=Ge():t==="about"?s=Ve():t==="contact"?s=_e():t==="policy"?s=We(e.type||"shipping"):t==="faqs"?s=Xe():t==="tracking"?s=et(e.id||""):s=`
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">404</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">The luxury page you requested cannot be found.</p>
        <a href="#home" class="btn btn-gold">Return to Maison Home</a>
      </div>
    `,a.innerHTML=`
    ${Me(t)}
    <main id="storefront-main-content">
      ${s}
    </main>
    ${Je()}

    <!-- Slide-out Cart Drawer Container -->
    <div id="cart-drawer-container">
      ${Ae()}
    </div>

    <!-- Checkout Modal Container -->
    <div id="checkout-modal-container">
      ${ke()}
    </div>
  `,qe(),xe(),Ce(),t==="home"||t===""?(je(),ve()):t==="catalog"?Ye():t==="product"?Ze(e.id):t==="tracking"?tt():ve()}function pt(){document.addEventListener("click",t=>{const e=t.target.closest("[data-quick-add-id]");if(e){const s=e.getAttribute("data-quick-add-id"),o=l.getProductById(s);if(o){l.addToCart({productId:o.id,title:o.title,price:o.price,originalPrice:o.originalPrice,image:o.images[0],size:o.sizes&&o.sizes.length>0?o.sizes[0]:"Standard",color:o.colors&&o.colors.length>0?o.colors[0].name:"Standard",quantity:1}),g(`Added ${o.title} to your bag`,"success");const r=document.getElementById("cart-drawer-overlay");r&&r.classList.add("active"),H()}}const a=t.target.closest("[data-wishlist-id]");if(a){t.preventDefault(),t.stopPropagation();const s=a.getAttribute("data-wishlist-id"),o=l.toggleWishlist(s);a.classList.toggle("active",o);const r=a.querySelector("svg");r&&r.setAttribute("fill",o?"currentColor":"none"),g(o?"Added to your Private Wishlist":"Removed from Wishlist","info")}}),l.subscribe("cart:updated",()=>{H()}),l.subscribe("wishlist:updated",t=>{const e=document.getElementById("btn-open-wishlist");if(e){const a=e.querySelector(".action-badge");t.length>0?a?a.textContent=t.length:e.innerHTML+=`<span class="action-badge">${t.length}</span>`:a&&a.remove()}}),l.subscribe("products:updated",()=>{const{path:t}=Be();(t==="catalog"||t==="home"||t==="admin")&&_()}),l.subscribe("settings:updated",()=>{_()}),l.subscribe("notices:updated",()=>{_()}),l.subscribe("admin:auth_changed",()=>{_()})}window.addEventListener("DOMContentLoaded",()=>{ut(),pt(),_()});window.addEventListener("hashchange",()=>{_()});
