(function () {
  "use strict";

  var categories = [
    { id: "koshary", en: "Koshary", ar: "كشري" },
    { id: "tagines", en: "Tagines", ar: "طواجن" },
    { id: "mixes", en: "Mixes", ar: "ميكسات" },
    { id: "hawawshi", en: "Hawawshi", ar: "حواوشي" },
    { id: "desserts", en: "Desserts", ar: "الحلو" },
    { id: "extras", en: "Add-ons", ar: "إضافات" },
    { id: "drinks", en: "Beverages", ar: "مشروبات غازية" }
  ];

  var defaultMenu = [
    { id: "small", category: "koshary", name: "Small Koshary", ar: "علبة كشري صغير", price: 20, desc: "Rice, lentils, pasta, chickpeas, crispy onions and signature sauce.", arDesc: "أرز وعدس ومكرونة وحمص وبصل محمر وصلصة الصفوة.", image: "assets/koshary-meal.jpg", tag: "CLASSIC" },
    { id: "special", category: "koshary", name: "Special Koshary", ar: "علبة كشري إسبشيال", price: 30, desc: "Our much-loved layers, with a little more of everything.", arDesc: "طبقاتنا المحبوبة مع المزيد من كل المكونات.", image: "assets/koshary-tray.jpg", tag: "FAVORITE" },
    { id: "medium", category: "koshary", name: "Medium Koshary", ar: "علبة كشري وسط", price: 40, desc: "A generous bowl of Cairo's most comforting combination.", arDesc: "وجبة سخية من ألذ مكونات الكشري المصري.", image: "assets/koshary-meal.jpg", tag: "JUST RIGHT" },
    { id: "alsafwa", category: "koshary", name: "Alsafwa Koshary", ar: "علبة كشري الصفوة", price: 50, desc: "Our signature bowl, finished with crispy onions and sauce.", arDesc: "طبق الصفوة المميز مع بصل مقرمش وصلصة إضافية.", image: "assets/sauce-pour.jpg", tag: "SIGNATURE" },
    { id: "large", category: "koshary", name: "Large Koshary", ar: "علبة كشري كبير", price: 60, desc: "The generous bowl for when only more will do.", arDesc: "الحجم الكبير والمناسب للمشاركة أو الجوع الشديد.", image: "assets/koshary-tray.jpg", tag: "MADE TO SHARE" },
    { id: "custom", category: "koshary", name: "Alsafwa Special", ar: "كشري الصفوة مخصوص", price: 70, desc: "An extra-special bowl layered generously.", arDesc: "طبق مخصوص بكمية سخية من مكوناتنا المميزة.", image: "assets/sauce-pour.jpg", tag: "EXTRA SPECIAL" },
    { id: "liver", category: "koshary", name: "Add Liver to Koshary", ar: "إضافة كبدة على الكشري", price: 30, desc: "Savory, warmly spiced liver added to your koshary.", arDesc: "كبدة متبلة تضاف إلى طبق الكشري المفضل.", image: "assets/koshary-tray.jpg", tag: "MAKE IT YOURS" },
    { id: "meat-tagine", category: "tagines", name: "Macaroni with Meat", ar: "طاجن مكرونة باللحمة", price: 45, desc: "Baked macaroni in rich tomato sauce with seasoned meat.", arDesc: "مكرونة مخبوزة بصلصة الطماطم الغنية واللحم المتبل.", image: "assets/koshary-tray.jpg", tag: "OVEN BAKED" },
    { id: "bechamel", category: "tagines", name: "Béchamel Macaroni", ar: "طاجن مكرونة بشاميل", price: 50, desc: "Creamy béchamel and tender pasta baked until golden.", arDesc: "مكرونة بالبشاميل الكريمي مخبوزة حتى تحمر.", image: "assets/koshary-meal.jpg", tag: "GOLDEN & CREAMY" },
    { id: "chicken-tagine", category: "tagines", name: "Chicken Macaroni Tagine", ar: "طاجن مكرونة فراخ", price: 50, desc: "A hearty baked tagine with tender chicken.", arDesc: "طاجن شهي بالدجاج الطري وصلصة الطماطم.", image: "assets/koshary-meal.jpg", tag: "OVEN BAKED" },
    { id: "meat-liver-tagine", category: "tagines", name: "Meat & Liver Tagine", ar: "طاجن لحمة + كبدة", price: 75, desc: "A rich meat tagine with savory liver.", arDesc: "طاجن غني باللحم والكبدة المتبلة.", image: "assets/koshary-tray.jpg", tag: "RICH & SAVORY" },
    { id: "chicken-liver-tagine", category: "tagines", name: "Chicken & Liver Tagine", ar: "طاجن فراخ + كبدة", price: 80, desc: "Tender chicken and savory liver in a baked tagine.", arDesc: "طاجن مخبوز بالدجاج الطري والكبدة.", image: "assets/koshary-meal.jpg", tag: "HOUSE SPECIAL" },
    { id: "meat-mozzarella", category: "tagines", name: "Meat & Mozzarella Macaroni", ar: "مكرونة لحمة موتزاريلا", price: 75, desc: "Savory meat and a generous blanket of melted mozzarella.", arDesc: "مكرونة باللحم مع طبقة سخية من جبنة الموتزاريلا.", image: "assets/sauce-pour.jpg", tag: "MELTY GOODNESS" },
    { id: "chicken-mozzarella", category: "tagines", name: "Chicken & Mozzarella Macaroni", ar: "مكرونة فراخ موتزاريلا", price: 80, desc: "Tender chicken and golden melted mozzarella cheese.", arDesc: "مكرونة بالدجاج الطري وجبنة الموتزاريلا الذهبية.", image: "assets/koshary-meal.jpg", tag: "MELTY GOODNESS" },
    { id: "extra-mozzarella", category: "tagines", name: "Extra Mozzarella", ar: "إضافة جبنة موتزاريلا", price: 30, desc: "A little extra cheese makes everything better.", arDesc: "المزيد من الجبنة يجعل كل شيء ألذ.", image: "assets/koshary-meal.jpg", tag: "EXTRA CHEESY" },
    { id: "meat-combo", category: "mixes", name: "Meat Tagine + Koshary", ar: "ميكس طاجن لحمة + كشري", price: 75, desc: "Two Cairo favorites together in one delicious combo.", arDesc: "وجبتان مصريتان مفضلتان: طاجن لحم وطبق كشري.", image: "assets/koshary-tray.jpg", tag: "THE BEST OF BOTH" },
    { id: "chicken-combo", category: "mixes", name: "Chicken Tagine + Koshary", ar: "ميكس طاجن فراخ + كشري", price: 80, desc: "Comforting koshary alongside a chicken tagine.", arDesc: "كشري الصفوة مع طاجن الدجاج الشهي.", image: "assets/koshary-meal.jpg", tag: "THE BEST OF BOTH" },
    { id: "liver-extra", category: "mixes", name: "Extra Liver", ar: "إضافة كبدة", price: 30, desc: "Savory spiced liver, added as you like.", arDesc: "إضافة كبدة متبلة حسب رغبتك.", image: "assets/koshary-tray.jpg", tag: "EXTRA" },
    { id: "classic-hawawshi", category: "hawawshi", name: "Classic Meat Hawawshi", ar: "حواوشي لحمة", price: 30, desc: "Seasoned meat tucked into bread and toasted until crisp.", arDesc: "لحم متبل داخل الخبز ومحمص حتى يصبح مقرمشًا.", image: "assets/koshary-tray.jpg", tag: "CRISPY & SAVORY" },
    { id: "mozzarella-hawawshi", category: "hawawshi", name: "Meat & Mozzarella Hawawshi", ar: "حواوشي لحمة وموتزاريلا", price: 50, desc: "Seasoned meat with a delicious mozzarella center.", arDesc: "لحم متبل مع قلب لذيذ من جبنة الموتزاريلا.", image: "assets/koshary-meal.jpg", tag: "A CHEESY TWIST" },
    { id: "rice-pudding", category: "desserts", name: "Rice Pudding", ar: "أرز باللبن", price: 20, desc: "Cool, creamy and gently sweet — the perfect finish.", arDesc: "أرز باللبن كريمي وحلو المذاق، ختام مثالي.", image: "assets/koshary-meal.jpg", tag: "SWEET FINISH" },
    { id: "baked-rice", category: "desserts", name: "Oven-Baked Rice Pudding", ar: "أرز باللبن فرن", price: 25, desc: "A comforting classic with a warm, golden top.", arDesc: "أرز باللبن المخبوز بوجه ذهبي دافئ.", image: "assets/koshary-tray.jpg", tag: "OVEN BAKED" },
    { id: "onions", category: "extras", name: "Crispy Fried Onions", ar: "بصل", price: 15, desc: "Extra golden, crunchy onions.", arDesc: "بصل محمر إضافي ومقرمش.", image: "assets/koshary-tray.jpg", tag: "EXTRA CRUNCH" },
    { id: "lentils", category: "extras", name: "Extra Lentils", ar: "عدس", price: 15, desc: "A generous extra scoop of slow-cooked lentils.", arDesc: "كمية إضافية من العدس المطهو على مهل.", image: "assets/koshary-tray.jpg", tag: "EXTRA LAYERS" },
    { id: "chickpeas", category: "extras", name: "Extra Chickpeas", ar: "حمص", price: 15, desc: "Add a little more of the good stuff.", arDesc: "أضف المزيد من الحمص الشهي.", image: "assets/koshary-tray.jpg", tag: "EXTRA LAYERS" },
    { id: "sauce", category: "extras", name: "Special Sauce", ar: "صلصة", price: 15, desc: "Our signature tomato sauce.", arDesc: "صلصة الصفوة المميزة.", image: "assets/sauce-pour.jpg", tag: "HOUSE FAVORITE" },
    { id: "spiced-tomato", category: "extras", name: "Seasoned Tomatoes", ar: "طماطم متبلة", price: 10, desc: "Seasoned tomato topping for your meal.", arDesc: "طماطم متبلة تضاف إلى وجبتك.", image: "assets/sauce-pour.jpg", tag: "FRESH ADD-ON" },
    { id: "spicy-oil-small", category: "extras", name: "Small Chili Oil", ar: "شطة زيت صغير", price: 5, desc: "A small serving of aromatic chili oil.", arDesc: "عبوة صغيرة من زيت الشطة العطري.", image: "assets/sauce-pour.jpg", tag: "A LITTLE HEAT" },
    { id: "spicy-oil-large", category: "extras", name: "Large Chili Oil", ar: "شطة زيت كبير", price: 15, desc: "A larger serving of aromatic chili oil.", arDesc: "عبوة كبيرة من زيت الشطة العطري.", image: "assets/sauce-pour.jpg", tag: "EXTRA HEAT" },
    { id: "bread", category: "extras", name: "Toasted Bread", ar: "عيش توست", price: 10, desc: "Crisp toasted bread for scooping up every last bite.", arDesc: "خبز توست محمص ومقرمش لآخر لقمة.", image: "assets/koshary-meal.jpg", tag: "GOLDEN & CRISP" },
    { id: "addon-mozzarella", category: "extras", name: "Mozzarella Cheese", ar: "جبنة موتزاريلا", price: 30, desc: "A generous portion of melted mozzarella.", arDesc: "إضافة سخية من جبنة الموتزاريلا.", image: "assets/koshary-meal.jpg", tag: "EXTRA CHEESY" },
    { id: "cola", category: "drinks", name: "Cola / 7UP", ar: "كولا - سفن", price: 20, desc: "A chilled soft drink to go with your meal.", arDesc: "مشروب غازي بارد يرافق وجبتك.", image: "assets/koshary-meal.jpg", tag: "SERVED COLD" },
    { id: "water", category: "drinks", name: "Small Mineral Water", ar: "مياه معدنية صغيرة", price: 10, desc: "A small bottle of refreshing mineral water.", arDesc: "زجاجة مياه معدنية صغيرة ومنعشة.", image: "assets/koshary-meal.jpg", tag: "STAY REFRESHED" }
  ];
  var menu = defaultMenu.slice();

  var copy = {
    en: {
      kitchen: "Kitchen", cart: "Cart", heroEyebrow: "A CAIRO CLASSIC · SINCE 1990",
      heroTitle: "The authentic taste<br><em>decades of excellence.</em>", heroDesc: "Generous bowls, slow-cooked flavor, and a little extra love in every layer.",
      exploreMenu: "Explore the menu", ourMenu: "OUR MENU",
      menuTitle: "A little bit of <em>everything.</em>", menuSub: "Freshly prepared, full of flavor, and ready for your table.",
      menuNote: "Prices shown in Egyptian pounds · All items are prepared fresh to order.", footerText: "A Cairo classic, made with love since 1990.", yourOrder: "YOUR ORDER",
      cartTitle: "A lovely choice.", emptyCart: "Your cart is waiting for something delicious.", browseMenu: "Browse the menu →",
      subtotal: "Subtotal", deliveryNote: "Delivery fee is confirmed by the restaurant.", continueCheckout: "Continue to checkout",
      almostThere: "ALMOST THERE", checkoutTitle: "Make it yours.", fullName: "Full name", phoneNumber: "Phone number",
      deliveryAddress: "Delivery address", getLocation: "Use my current location", paymentMethod: "Payment method",
      cash: "Cash on delivery", cashHint: "Pay when your order arrives", walletPayHint: "Mobile wallet",
      walletPhone: "Your mobile wallet phone number", instantTransfer: "Pay with InstaPay",
      instapayContact: "Your InstaPay phone number or handle", orderTotal: "Order total",
      paymentDemo: "Trial only: this demo does not initiate or complete a payment.",
      placeOrder: "Place demo order", kdsLive: "LOCAL DEMO · LIVE VIEW", kdsTitle: "KITCHEN <em>DISPLAY</em>",
      testChime: "Test chime", activeOrders: "ACTIVE ORDERS",
      demoSales: "DEMO SALES TODAY", clearHistory: "Clear demo history", allCaughtUp: "All caught up.",
      noActiveOrders: "New demo orders will appear here.", noMatchingOrders: "No orders match this filter.", add: "+ Add", item: "item", items: "items", itemsReady: "items ready",
      locationUnsupported: "Location is not available in this browser.", locationLoading: "Requesting your location…",
      locationDenied: "Could not get your location. Enter your address manually.", locationAdded: "Location added to your address.",
      namePlaceholder: "Your name", phonePlaceholder: "01X XXX XXXX",
      addressPlaceholder: "Building, street, area, and a helpful landmark", instapayPlaceholder: "Phone number or InstaPay handle",
      emptyCheckout: "Add something delicious to your cart first.", paymentContactRequired: "Enter the phone number or payment handle for your selected method.",
      orderReceived: "Demo order received — ticket sent to the local kitchen screen.", dataError: "Could not read saved demo data. Starting a fresh trial session.",
      savedError: "Your browser could not save this demo data.", pinTitle: "Kitchen access · trial demo", pinPrompt: "Enter the 4-digit demo PIN", pinError: "That PIN is not correct.",
      pinLabel: "Kitchen PIN", pinHelp: "Enter the 4-digit trial PIN to open the kitchen display.", openKitchen: "Open kitchen display",
      clearConfirm: "Clear completed demo orders and sales history?", order: "ORDER", elapsed: "elapsed",
      complete: "Complete & deliver order ✓", remove: "Remove", chimeUnavailable: "Audio is unavailable in this browser.",
      markReady: "Mark ready", itemReady: "Ready ✓", address: "DELIVERY ADDRESS", paymentMethodName: "PAYMENT",
      paymentCash: "Cash on delivery", paymentVodafone: "Vodafone Cash", paymentInstapay: "InstaPay",
      sortOrders: "Sort", oldestFirst: "Oldest first", newestFirst: "Newest first", filterOrders: "Show",
      filterAll: "All orders", filterInProgress: "In progress", filterReady: "Ready", compactView: "Compact tickets",
      soundAlerts: "Sound alerts", cancelOrder: "Cancel order", cancelConfirm: "Cancel this active demo order?",
      readyStatus: "READY", progressStatus: "IN PREPARATION",
      archiveKicker: "COMPLETED", archiveTitle: "Order history", archiveEmpty: "Completed orders will appear here.",
      activeKicker: "IN THE KITCHEN", activePanelTitle: "Active orders", offersKicker: "PROMOTIONS",
      offersTitle: "Offers manager", offerLabel: "Offer text", offerPlaceholder: "Buy 2 koshary, get 1 free",
      addOffer: "Add offer", offerEmpty: "Add a promotion to manage trial offers.", offerEnabled: "Live",
      offerPaused: "Paused", pauseOffer: "Pause", enableOffer: "Enable", deleteOffer: "Remove",
      offerRequired: "Enter an offer before adding it.", offerLimit: "The trial manager can hold up to 30 offers."
    },
    ar: {
      kitchen: "المطبخ", cart: "السلة", heroEyebrow: "حكاية قاهرية · منذ ١٩٩٠",
      heroTitle: "أصل الطعم الأصيل<br><em>عراقة السنين.</em>", heroDesc: "أطباق سخية ونكهة مطهوة على مهل ولمسة حب في كل طبقة.",
      exploreMenu: "اكتشف قائمتنا", ourMenu: "قائمتنا",
      menuTitle: "من قائمتنا <em>لكل الأذواق.</em>", menuSub: "طازج وشهي وجاهز يصل إلى مائدتك.",
      menuNote: "الأسعار بالجنيه المصري · تُحضّر جميع الوجبات طازجة عند الطلب.", footerText: "حكاية قاهرية تُصنع بحب منذ ١٩٩٠.", yourOrder: "طلبك",
      cartTitle: "اختيار لذيذ.", emptyCart: "سلتك تنتظر شيئًا شهيًا.", browseMenu: "تصفّح القائمة ←",
      subtotal: "المجموع", deliveryNote: "يؤكد المطعم رسوم التوصيل.", continueCheckout: "متابعة إتمام الطلب",
      almostThere: "اقتربت من الاستمتاع", checkoutTitle: "أكمل طلبك.", fullName: "الاسم بالكامل", phoneNumber: "رقم الهاتف",
      deliveryAddress: "عنوان التوصيل", getLocation: "استخدم موقعي الحالي", paymentMethod: "طريقة الدفع",
      cash: "الدفع عند الاستلام", cashHint: "ادفع عند وصول طلبك", walletPayHint: "محفظة إلكترونية",
      walletPhone: "رقم هاتف محفظتك الإلكترونية", instantTransfer: "الدفع عبر إنستاباي",
      instapayContact: "رقم هاتف إنستاباي أو المعرّف", orderTotal: "إجمالي الطلب",
      paymentDemo: "نسخة تجريبية: لا يتم بدء أو إتمام أي عملية دفع.",
      placeOrder: "تأكيد الطلب التجريبي", kdsLive: "عرض تجريبي محلي · مباشر", kdsTitle: "شاشة <em>المطبخ</em>",
      testChime: "اختبار التنبيه", activeOrders: "طلبات نشطة",
      demoSales: "مبيعات تجريبية اليوم", clearHistory: "مسح سجل التجربة", allCaughtUp: "كل شيء جاهز.",
      noActiveOrders: "ستظهر الطلبات التجريبية الجديدة هنا.", add: "+ أضف", item: "عنصر", items: "عناصر", itemsReady: "عناصر جاهزة",
      locationUnsupported: "الموقع غير متاح في هذا المتصفح.", locationLoading: "جارٍ طلب موقعك…",
      locationDenied: "تعذّر تحديد موقعك. أدخل عنوانك يدويًا.", locationAdded: "تمت إضافة الموقع إلى عنوانك.",
      namePlaceholder: "اسمك", phonePlaceholder: "01X XXX XXXX",
      addressPlaceholder: "رقم المبنى والشارع والمنطقة وأقرب علامة مميزة", instapayPlaceholder: "رقم الهاتف أو معرّف إنستاباي",
      emptyCheckout: "أضف شيئًا شهيًا إلى سلتك أولاً.", paymentContactRequired: "أدخل رقم الهاتف أو معرّف طريقة الدفع المختارة.",
      orderReceived: "تم استلام الطلب التجريبي — أُضيف إلى شاشة المطبخ المحلية.", dataError: "تعذّرت قراءة بيانات التجربة المحفوظة. بدء جلسة جديدة.",
      savedError: "تعذّر حفظ بيانات التجربة في هذا المتصفح.", pinTitle: "دخول المطبخ · نسخة تجريبية", pinPrompt: "أدخل رمز التجربة المكوّن من ٤ أرقام",
      pinError: "الرمز غير صحيح.", pinLabel: "رمز دخول المطبخ", pinHelp: "أدخل رمز التجربة المكوّن من ٤ أرقام لفتح شاشة المطبخ.",
      openKitchen: "فتح شاشة المطبخ", clearConfirm: "هل تريد مسح الطلبات المكتملة وسجل المبيعات التجريبي؟",
      order: "طلب", elapsed: "مضى", complete: "إكمال وتسليم الطلب ✓", remove: "إزالة", chimeUnavailable: "الصوت غير متاح في هذا المتصفح.",
      markReady: "تحديد كجاهز", itemReady: "جاهز ✓", address: "عنوان التوصيل", paymentMethodName: "الدفع",
      paymentCash: "الدفع عند الاستلام", paymentVodafone: "فودافون كاش", paymentInstapay: "إنستاباي",
      noMatchingOrders: "لا توجد طلبات مطابقة لهذا الاختيار.", sortOrders: "الترتيب", oldestFirst: "الأقدم أولاً",
      newestFirst: "الأحدث أولاً", filterOrders: "عرض", filterAll: "كل الطلبات", filterInProgress: "قيد التحضير",
      filterReady: "جاهز", compactView: "تذاكر مختصرة", soundAlerts: "التنبيهات الصوتية",
      cancelOrder: "إلغاء الطلب", cancelConfirm: "هل تريد إلغاء هذا الطلب التجريبي النشط؟",
      readyStatus: "جاهز", progressStatus: "قيد التحضير",
      archiveKicker: "مكتملة", archiveTitle: "سجل الطلبات", archiveEmpty: "ستظهر الطلبات المكتملة هنا.",
      activeKicker: "قيد التحضير", activePanelTitle: "الطلبات النشطة", offersKicker: "العروض",
      offersTitle: "إدارة العروض", offerLabel: "نص العرض", offerPlaceholder: "اشترِ ٢ كشري واحصل على واحد مجانًا",
      addOffer: "إضافة عرض", offerEmpty: "أضف عرضًا لإدارته في النسخة التجريبية.", offerEnabled: "مفعّل",
      offerPaused: "متوقف", pauseOffer: "إيقاف", enableOffer: "تفعيل", deleteOffer: "حذف",
      offerRequired: "أدخل نص العرض أولاً.", offerLimit: "يمكن حفظ ٣٠ عرضًا كحد أقصى في النسخة التجريبية."
    }
  };

  var state = {
    lang: "en",
    category: "koshary",
    cart: {},
    orders: [],
    history: [],
    offers: [],
    appliedOffers: [],
    customItems: [],
    hiddenMenuItemIds: [],
    sales: [],
    settings: { sort: "oldest", filter: "all", compact: false, sound: true }
  };
  var storageKey = "alsafwa-trial-v1";
  var currentFocus = null;
  var toastRegion = document.getElementById("toastRegion");
  var numberFormat = new Intl.NumberFormat("en-EG");

  function t(key) {
    return (copy[state.lang] && copy[state.lang][key]) || copy.en[key] || key;
  }
  function kitchenText(key) {
    return copy.ar[key] || key;
  }
  function formatPrice(price) {
    return numberFormat.format(price) + " EGP";
  }
  function paymentLabel(method) {
    return kitchenText(method === "vodafone" ? "paymentVodafone" : method === "instapay" ? "paymentInstapay" : "paymentCash");
  }
  function kitchenPrice(price) {
    return numberFormat.format(price) + " ج.م";
  }
  function maskPaymentContact(value) {
    var contact = String(value || "").trim();
    return contact ? "••••" + contact.slice(-2) : "";
  }
  function createOrderId() {
    var base = Date.now().toString(36).toUpperCase().slice(-6);
    var candidate = base;
    var suffix = 1;
    while (state.orders.some(function (order) { return order.id === candidate; }) ||
      state.history.some(function (order) { return order.id === candidate; })) {
      candidate = base + "-" + suffix;
      suffix += 1;
    }
    return candidate;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }
  function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(function () { toast.remove(); }, 3600);
  }
  function persist() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({
        cart: state.cart,
        orders: state.orders,
        history: state.history,
        offers: state.offers,
        appliedOffers: state.appliedOffers,
        customItems: state.customItems,
        hiddenMenuItemIds: state.hiddenMenuItemIds,
        sales: state.sales,
        settings: state.settings
      }));
    } catch (error) {
      showToast(t("savedError"));
      console.error("Could not save trial data to local storage.", error);
    }
  }
  function availableMenu() {
    return menu.filter(function (dish) { return state.hiddenMenuItemIds.indexOf(dish.id) < 0; });
  }
  function applySaved(saved) {
    var settings = saved.settings && typeof saved.settings === "object" ? saved.settings : {};
    state.settings = {
      sort: settings.sort === "newest" ? "newest" : "oldest",
      filter: ["all", "in-progress", "ready"].indexOf(settings.filter) >= 0 ? settings.filter : "all",
      compact: settings.compact === true,
      sound: settings.sound !== false
    };
    var validCategories = categories.map(function (category) { return category.id; });
    state.customItems = Array.isArray(saved.customItems) ? saved.customItems.filter(function (item) {
      return item && typeof item === "object" && /^custom-[a-zA-Z0-9-]{1,60}$/.test(String(item.id || "")) &&
        typeof item.ar === "string" && item.ar.trim() && validCategories.indexOf(item.category) >= 0 &&
        Number.isFinite(Number(item.price)) && Number(item.price) > 0 && Number(item.price) <= 100000;
    }).slice(0, 50).map(function (item) {
      var englishName = String(item.name || item.ar).trim().slice(0, 60);
      var arabicName = String(item.ar).trim().slice(0, 60);
      return {
        id: item.id,
        category: item.category,
        name: englishName,
        ar: arabicName,
        price: Number(item.price),
        desc: englishName,
        arDesc: arabicName,
        image: "assets/koshary-meal.jpg",
        tag: "جديد"
      };
    }) : [];
    menu = defaultMenu.concat(state.customItems);
    var knownIds = menu.reduce(function (ids, dish) { ids[dish.id] = dish; return ids; }, {});
    state.hiddenMenuItemIds = Array.isArray(saved.hiddenMenuItemIds) ? saved.hiddenMenuItemIds.filter(function (id, index, list) {
      return knownIds[id] && list.indexOf(id) === index;
    }) : [];
    state.cart = {};
    if (saved.cart && typeof saved.cart === "object") {
      Object.keys(saved.cart).forEach(function (id) {
        var qty = Number(saved.cart[id]);
        if (knownIds[id] && state.hiddenMenuItemIds.indexOf(id) < 0 && Number.isInteger(qty) && qty > 0 && qty <= 99) state.cart[id] = qty;
      });
    }
    function normalizeOrders(orders) {
      if (!Array.isArray(orders)) return [];
      return orders.filter(function (order) {
        return order && typeof order === "object" && Array.isArray(order.items);
      }).map(function (order) {
        var items = order.items.map(function (item) {
          if (!item || typeof item.id !== "string" || !/^[a-zA-Z0-9-]{1,80}$/.test(item.id)) return null;
          var qty = Number(item.quantity);
          var catalogItem = knownIds[item.id];
          var itemName = catalogItem ? catalogItem.name : String(item.name || "").trim();
          var itemArabic = catalogItem ? catalogItem.ar : String(item.ar || "").trim();
          var isFree = item.isFree === true;
          var itemPrice = isFree ? 0 : catalogItem ? catalogItem.price : Number(item.price);
          if (!Number.isInteger(qty) || qty < 1 || qty > 99 || !itemName || !itemArabic ||
            !Number.isFinite(itemPrice) || itemPrice < 0 || (!isFree && itemPrice === 0) || itemPrice > 100000) return null;
          return {
            id: item.id,
            lineId: String(item.lineId || item.id).replace(/[^a-zA-Z0-9-]/g, "").slice(0, 100),
            name: itemName.slice(0, 60),
            ar: itemArabic.slice(0, 60),
            price: itemPrice,
            quantity: qty,
            ready: Boolean(item.ready),
            isFree: isFree,
            discountValue: isFree ? Math.max(0, Number(item.discountValue) || (catalogItem ? catalogItem.price : 0)) : 0,
            offerText: isFree ? String(item.offerText || "").trim().slice(0, 100) : ""
          };
        }).filter(Boolean);
        return {
          id: String(order.id || "DEMO").replace(/[^a-zA-Z0-9-]/g, "").slice(0, 20) || "DEMO",
          createdAt: Number.isFinite(Number(order.createdAt)) ? Number(order.createdAt) : Date.now(),
          name: String(order.name || "").slice(0, 100),
          phone: String(order.phone || "").slice(0, 30),
          address: String(order.address || "").slice(0, 300),
          payment: ["cash", "vodafone", "instapay"].indexOf(order.payment) >= 0 ? order.payment : "cash",
          paymentContactMasked: String(order.paymentContactMasked || "").slice(0, 24),
          items: items,
          subtotal: items.filter(function (item) { return !item.isFree; }).reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0),
          discount: Math.min(
            items.filter(function (item) { return !item.isFree; }).reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0),
            items.filter(function (item) { return item.isFree; }).reduce(function (sum, item) { return sum + item.discountValue * item.quantity; }, 0)
          ),
          total: Math.max(0,
            items.filter(function (item) { return !item.isFree; }).reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0) -
            items.filter(function (item) { return item.isFree; }).reduce(function (sum, item) { return sum + item.discountValue * item.quantity; }, 0)
          ),
          completedAt: Number.isFinite(Number(order.completedAt)) ? Number(order.completedAt) : null
        };
      }).filter(function (order) { return order.items.length > 0; });
    }
    state.orders = normalizeOrders(saved.orders);
    state.history = normalizeOrders(saved.history);
    state.offers = Array.isArray(saved.offers) ? saved.offers.filter(function (offer) {
      return offer && typeof offer === "object" && typeof offer.text === "string" && offer.text.trim();
    }).slice(0, 30).map(function (offer, index) {
      var productId = String(offer.buyProductId || "");
      var buyQuantity = Number(offer.buyQuantity);
      var freeQuantity = Number(offer.freeQuantity);
      var isConfigured = Boolean(knownIds[productId]) &&
        Number.isInteger(buyQuantity) && buyQuantity > 0 && buyQuantity <= 99 &&
        Number.isInteger(freeQuantity) && freeQuantity > 0 && freeQuantity <= 99;
      return {
        id: String(offer.id || "offer-" + index).replace(/[^a-zA-Z0-9-]/g, "").slice(0, 40),
        text: String(offer.text).trim().slice(0, 100),
        enabled: offer.enabled !== false,
        buyProductId: isConfigured ? productId : "",
        buyQuantity: isConfigured ? buyQuantity : 0,
        freeQuantity: isConfigured ? freeQuantity : 0
      };
    }) : [];
    state.appliedOffers = Array.isArray(saved.appliedOffers) ? saved.appliedOffers.filter(function (application) {
      if (!application || typeof application !== "object") return false;
      var offer = state.offers.find(function (item) { return item.id === application.offerId; });
      var freeProduct = knownIds[application.freeProductId];
      return offer && offer.enabled && offer.buyProductId && freeProduct &&
        state.hiddenMenuItemIds.indexOf(freeProduct.id) < 0;
    }).map(function (application) {
      return { offerId: application.offerId, freeProductId: application.freeProductId };
    }).filter(function (application, index, list) {
      return list.findIndex(function (item) { return item.offerId === application.offerId; }) === index;
    }) : [];
    state.sales = Array.isArray(saved.sales) ? saved.sales.filter(function (sale) {
      return sale && typeof sale === "object" && Number.isFinite(Number(sale.amount)) &&
        Number(sale.amount) > 0 && Number(sale.amount) <= 1000000;
    }).slice(0, 200).map(function (sale, index) {
      return {
        id: String(sale.id || "sale-" + index).replace(/[^a-zA-Z0-9-]/g, "").slice(0, 50),
        createdAt: Number.isFinite(Number(sale.createdAt)) ? Number(sale.createdAt) : Date.now(),
        amount: Number(sale.amount),
        phoneMasked: String(sale.phoneMasked || "").slice(0, 24)
      };
    }) : [];
  }
  function restore() {
    try {
      applySaved(JSON.parse(localStorage.getItem(storageKey) || "{}"));
    } catch (error) {
      showToast(t("dataError"));
      console.error("Could not read trial data from local storage.", error);
    }
  }
  function totalQuantity() {
    return Object.keys(state.cart).reduce(function (sum, id) { return sum + (Number(state.cart[id]) || 0); }, 0) +
      getFreeItemLines().reduce(function (sum, item) { return sum + item.quantity; }, 0);
  }
  function cartSubtotal() {
    return availableMenu().reduce(function (sum, dish) { return sum + dish.price * (Number(state.cart[dish.id]) || 0); }, 0);
  }
  function getFreeItemLines() {
    return state.appliedOffers.reduce(function (lines, application) {
      var offer = state.offers.find(function (item) {
        return item.id === application.offerId && item.enabled && item.buyProductId;
      });
      var freeProduct = availableMenu().find(function (item) { return item.id === application.freeProductId; });
      var purchasedQuantity = offer ? Number(state.cart[offer.buyProductId]) || 0 : 0;
      if (!offer || !freeProduct || purchasedQuantity < offer.buyQuantity) return lines;
      var quantity = Math.min(99, Math.floor(purchasedQuantity / offer.buyQuantity) * offer.freeQuantity);
      if (quantity > 0) lines.push({
        id: freeProduct.id,
        lineId: "free-" + offer.id + "-" + freeProduct.id,
        name: freeProduct.name,
        ar: freeProduct.ar,
        price: freeProduct.price,
        quantity: quantity,
        offerId: offer.id,
        offerText: offer.text,
        discountValue: freeProduct.price
      });
      return lines;
    }, []);
  }
  function cartDiscount() {
    return Math.min(cartSubtotal(), getFreeItemLines().reduce(function (total, item) { return total + item.discountValue * item.quantity; }, 0));
  }
  function cartTotal() {
    return Math.max(0, cartSubtotal() - cartDiscount());
  }
  function setQuantity(id, amount) {
    if (state.hiddenMenuItemIds.indexOf(id) >= 0 || !menu.some(function (dish) { return dish.id === id; })) return;
    var count = Math.max(0, Math.min(99, (Number(state.cart[id]) || 0) + amount));
    if (count) state.cart[id] = count;
    else delete state.cart[id];
    persist();
    renderMenu();
    renderCart();
  }
  function updateLanguage() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var value = t(element.getAttribute("data-i18n"));
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
      element.placeholder = t(element.getAttribute("data-i18n-placeholder"));
    });
    document.getElementById("languageToggle").setAttribute("aria-label", state.lang === "en" ? "التبديل إلى العربية" : "Switch to English");
    document.getElementById("languageToggle").innerHTML = state.lang === "en" ? "عربي <span class='lang-divider'>/</span> EN" : "EN <span class='lang-divider'>/</span> عربي";
    renderCategories();
    renderMenu();
    renderCart();
    renderKdsSettings();
    renderKds();
  }
  function renderCategories() {
    document.getElementById("categoryRow").innerHTML = categories.map(function (category) {
      return '<button class="category-tab' + (state.category === category.id ? " active" : "") + '" role="tab" aria-selected="' + (state.category === category.id) +
        '" data-category="' + category.id + '">' + (state.lang === "ar" ? category.ar : category.en) + "</button>";
    }).join("");
  }
  function quantityControl(dish, count) {
    return '<div class="quantity-control" role="group" aria-label="' + escapeHtml(dish.name) + ' quantity">' +
      '<button type="button" data-action="minus" data-id="' + dish.id + '" aria-label="Remove one">−</button><strong>' + count +
      '</strong><button type="button" data-action="plus" data-id="' + dish.id + '" aria-label="Add one">+</button></div>';
  }
  function renderMenu() {
    var dishes = availableMenu().filter(function (dish) { return dish.category === state.category; });
    document.getElementById("menuGrid").innerHTML = dishes.map(function (dish) {
      var count = Number(state.cart[dish.id]) || 0;
      var name = state.lang === "ar" ? dish.ar : dish.name;
      var description = state.lang === "ar" ? dish.arDesc : dish.desc;
      return '<article class="dish-card"><div class="dish-image"><img src="' + dish.image + '" alt="' + escapeHtml(name) + '" loading="lazy">' +
        '<span class="dish-category-tag">' + escapeHtml(dish.tag) + '</span></div><div class="dish-body"><div class="dish-title-row"><div><h3 class="dish-title">' +
        escapeHtml(name) + '</h3><div class="dish-arabic" lang="ar" dir="rtl">' + escapeHtml(state.lang === "ar" ? dish.name : dish.ar) +
        '</div></div><div class="dish-price">' + dish.price + ' <small>EGP</small></div></div><p class="dish-desc">' + escapeHtml(description) +
        '</p><div class="dish-bottom"><span class="dish-note">' + escapeHtml(state.lang === "ar" ? "طازج عند الطلب" : "Fresh to order") + '</span>' +
        (count ? quantityControl(dish, count) : '<button type="button" class="add-button" data-action="plus" data-id="' + dish.id + '">' + t("add") + "</button>") +
        "</div></div></article>";
    }).join("");
  }
  function renderCart() {
    var count = totalQuantity();
    var total = cartTotal();
    var subtotal = cartSubtotal();
    var discount = cartDiscount();
    document.getElementById("cartCount").textContent = count;
    document.getElementById("cartCount").setAttribute("aria-label", count + " " + (count === 1 ? t("item") : t("items")));
    document.getElementById("headerTotal").innerHTML = numberFormat.format(total) + " <small>EGP</small>";
    document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
    document.getElementById("cartDiscountRow").hidden = discount <= 0;
    document.getElementById("cartDiscount").textContent = "−" + formatPrice(discount);
    document.getElementById("cartFinalTotal").textContent = formatPrice(total);
    document.getElementById("checkoutTotal").textContent = formatPrice(total);
    var selected = availableMenu().filter(function (dish) { return Number(state.cart[dish.id]) > 0; });
    var paidItems = selected.map(function (dish) {
      var qty = Number(state.cart[dish.id]);
      return '<article class="cart-item"><div><h3>' + escapeHtml(state.lang === "ar" ? dish.ar : dish.name) + '</h3><p>' + qty + " × " + formatPrice(dish.price) +
        '</p></div><span class="cart-item-price">' + formatPrice(qty * dish.price) + '</span><div class="cart-item-controls">' +
        quantityControl(dish, qty) + '<button class="remove-item" type="button" data-action="remove" data-id="' + dish.id + '">' + t("remove") + "</button></div></article>";
    }).join("");
    var freeLines = getFreeItemLines();
    var freeItems = freeLines.map(function (item) {
      return '<article class="cart-item free-cart-item"><div><h3>' + escapeHtml(state.lang === "ar" ? item.ar : item.name) +
        '</h3><p>' + item.quantity + " × هدية من عرض: " + escapeHtml(item.offerText) +
        '</p></div><div class="free-item-actions"><span class="cart-item-price">مجانًا</span><button type="button" class="remove-item" data-remove-cart-offer="' +
        escapeHtml(item.offerId) + '">إزالة العرض</button></div></article>';
    }).join("");
    document.getElementById("cartItems").innerHTML = paidItems + freeItems;
    renderPromoBanner();
    var isEmpty = selected.length === 0 && freeLines.length === 0;
    document.getElementById("cartEmpty").classList.toggle("is-visible", isEmpty);
    document.getElementById("cartBottom").classList.toggle("hidden", isEmpty);
  }
  function openOverlay(id) {
    var overlay = document.getElementById(id);
    currentFocus = document.activeElement;
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var focusable = overlay.querySelector("button:not(.overlay-scrim), input, textarea, a");
    if (focusable) window.setTimeout(function () { focusable.focus(); }, 20);
  }
  function closeOverlay(name) {
    var overlay = document.getElementById(name + "Overlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".overlay.open")) document.body.style.overflow = "";
    if (currentFocus && currentFocus.focus) currentFocus.focus();
  }
  function renderKdsSettings() {
    document.getElementById("orderSort").value = state.settings.sort;
    document.getElementById("orderFilter").value = state.settings.filter;
    document.getElementById("compactTickets").checked = state.settings.compact;
    document.getElementById("soundAlerts").checked = state.settings.sound;
  }
  function isOrderReady(order) {
    return order.items.length > 0 && order.items.every(function (item) { return item.ready; });
  }
  function renderKds() {
    var ordersRoot = document.getElementById("kdsOrders");
    var active = state.orders.slice().sort(function (a, b) {
      return state.settings.sort === "newest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt;
    });
    var shown = active.filter(function (order) {
      var ready = isOrderReady(order);
      return state.settings.filter === "ready" ? ready : state.settings.filter === "in-progress" ? !ready : true;
    });
    ordersRoot.classList.toggle("compact", state.settings.compact);
    ordersRoot.innerHTML = shown.map(function (order) {
      var items = order.items.map(function (item) {
        return '<div class="ticket-item' + (item.ready ? " is-ready" : "") + (item.isFree ? " ticket-item-free" : "") +
          '"><span class="ticket-item-name">' + item.quantity + " × " + escapeHtml(item.ar) +
          (item.isFree ? ' <small>هدية مجانية · ' + escapeHtml(item.offerText) + "</small>" : "") +
          '</span><span class="ticket-item-price">' + (item.isFree ? "مجانًا" : kitchenPrice(item.quantity * item.price)) +
          '</span><button type="button" class="item-ready-button" data-order-item="' + escapeHtml(order.id) + '" data-item-line="' +
          escapeHtml(item.lineId) + '" aria-pressed="' + Boolean(item.ready) + '">' + (item.ready ? kitchenText("itemReady") : kitchenText("markReady")) + "</button></div>";
      }).join("");
      var phone = escapeHtml(order.phone);
      var dialablePhone = encodeURIComponent(order.phone.replace(/[^\d+*#;]/g, "")).replace(/%2B/gi, "+");
      var readyCount = order.items.filter(function (item) { return item.ready; }).length;
      var progress = Math.round(readyCount / order.items.length * 100);
      var orderStatus = isOrderReady(order) ? kitchenText("readyStatus") : kitchenText("progressStatus");
      var discountRow = order.discount > 0
        ? '<div class="ticket-discount"><span>خصم العرض</span><strong>−' + kitchenPrice(order.discount) + "</strong></div>"
        : "";
      return '<article class="order-ticket' + (state.settings.compact ? " is-compact" : "") + '" data-order="' + escapeHtml(order.id) + '"><header class="ticket-head"><div><div class="ticket-id">#' +
        escapeHtml(order.id) + " · طلب" + '</div><div class="ticket-time">' + new Date(order.createdAt).toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" }) +
        '</div></div><div class="ticket-status"><span>' + orderStatus + '</span><span class="ticket-elapsed" data-created="' + order.createdAt + '">00:00 مضى</span></div></header><div class="ticket-client"><strong>' +
        escapeHtml(order.name) + '</strong><a href="tel:' + dialablePhone + '">☎ ' + phone + " · اتصال بالعميل" +
        '</a><div class="ticket-address"><span>عنوان التوصيل</span><strong>' + escapeHtml(order.address) + '</strong></div><div class="ticket-payment"><span>طريقة الدفع</span><strong>' +
        paymentLabel(order.payment) + (order.paymentContactMasked ? " · " + escapeHtml(order.paymentContactMasked) : "") +
        '</strong></div></div><div class="ticket-progress"><div><span>' + readyCount + " / " + order.items.length + " عناصر جاهزة" +
        '</span><span>' + progress + '%</span></div><i><b style="width:' + progress + '%"></b></i></div><div class="ticket-items">' + items +
        '</div>' + discountRow + '<div class="ticket-total"><span>إجمالي الطلب</span><strong>' + kitchenPrice(order.total) +
        '</strong></div><div class="ticket-actions"><button class="cancel-order" type="button" data-cancel="' + escapeHtml(order.id) + '">إلغاء الطلب' +
        '</button><button class="complete-order" type="button" data-complete="' + escapeHtml(order.id) + '">إنهاء وتسليم ✓</button></div></article>';
    }).join("");
    document.getElementById("activeOrderCount").textContent = active.length;
    document.getElementById("activePanelCount").textContent = active.length;
    var today = new Date();
    var todaySales = state.history.filter(function (order) {
      var completed = new Date(order.completedAt || order.createdAt);
      return completed.getFullYear() === today.getFullYear() && completed.getMonth() === today.getMonth() && completed.getDate() === today.getDate();
    }).reduce(function (sum, order) { return sum + order.total; }, 0);
    todaySales += state.sales.filter(function (sale) {
      var created = new Date(sale.createdAt);
      return created.getFullYear() === today.getFullYear() && created.getMonth() === today.getMonth() && created.getDate() === today.getDate();
    }).reduce(function (sum, sale) { return sum + sale.amount; }, 0);
    document.getElementById("salesTotal").textContent = kitchenPrice(todaySales);
    var filteredEmpty = active.length > 0 && shown.length === 0;
    document.getElementById("kdsEmpty").classList.toggle("is-visible", shown.length === 0);
    document.querySelector("#kdsEmpty h3").textContent = filteredEmpty ? "لا توجد طلبات مطابقة" : "لا توجد طلبات نشطة";
    document.querySelector("#kdsEmpty p").textContent = filteredEmpty ? "" : "ستظهر الطلبات الجديدة هنا.";
    renderArchive();
    renderProducts();
    renderOffers();
    renderOfferProductOptions();
    renderPromoBanner();
    renderKdsPromoNotice();
    renderSales();
    updateElapsed();
  }
  function renderArchive() {
    var history = state.history.slice().sort(function (a, b) {
      return Number(b.completedAt || b.createdAt) - Number(a.completedAt || a.createdAt);
    });
    document.getElementById("archiveCount").textContent = history.length;
    document.getElementById("archiveEmpty").hidden = history.length > 0;
    document.getElementById("archiveList").innerHTML = history.map(function (order) {
      var itemSummary = order.items.map(function (item) {
        return item.quantity + " × " + item.ar + (item.isFree ? " (هدية مجانية)" : "");
      }).join(" · ");
      var completedAt = new Date(order.completedAt || order.createdAt);
      return '<article class="archive-ticket"><div class="archive-ticket-top"><strong>#' + escapeHtml(order.id) +
        '</strong><time>' + escapeHtml(completedAt.toLocaleString("ar-EG", { dateStyle: "short", timeStyle: "short" })) +
        '</time></div><span class="archive-customer">' + escapeHtml(order.name) + '</span><p>' + escapeHtml(itemSummary) +
        '</p>' + (order.discount > 0 ? '<div class="archive-ticket-total archive-discount"><span>خصم العرض</span><strong>−' + kitchenPrice(order.discount) + "</strong></div>" : "") +
        '<div class="archive-ticket-total"><span>إجمالي الطلب</span><strong>' + kitchenPrice(order.total) + "</strong></div></article>";
    }).join("");
  }
  function renderOffers() {
    document.getElementById("offerCount").textContent = state.offers.length;
    document.getElementById("offerEmpty").hidden = state.offers.length > 0;
    document.getElementById("offerList").innerHTML = state.offers.map(function (offer) {
      var buyProduct = menu.find(function (dish) { return dish.id === offer.buyProductId; });
      var details = buyProduct
        ? "اشترِ " + offer.buyQuantity + " × " + buyProduct.ar + " واحصل على " + offer.freeQuantity + " مجاني من اختيار العميل"
        : "عرض إعلاني فقط — لإضافة خصم، أنشئ عرضًا بكمية وصنف مؤهل.";
      return '<article class="offer-card' + (offer.enabled ? "" : " is-paused") + '" data-offer="' + escapeHtml(offer.id) +
        '"><div class="offer-card-top"><span class="offer-badge">' + (offer.enabled ? "مفعّل" : "متوقف") +
        '</span><span class="offer-sparkle">✦</span></div><p>' + escapeHtml(offer.text) +
        '</p><small class="offer-rule-details">' + escapeHtml(details) + '</small><div class="offer-card-actions"><button type="button" data-offer-toggle="' + escapeHtml(offer.id) + '">' +
        (offer.enabled ? "إيقاف" : "تفعيل") + '</button><button type="button" data-offer-delete="' +
        escapeHtml(offer.id) + '">حذف</button></div></article>';
    }).join("");
    renderKdsPromoNotice();
  }
  function renderOfferProductOptions() {
    var select = document.getElementById("offerBuyProduct");
    var currentValue = select.value;
    select.innerHTML = availableMenu().map(function (dish) {
      return '<option value="' + escapeHtml(dish.id) + '">' + escapeHtml(dish.ar) + " · " + kitchenPrice(dish.price) + "</option>";
    }).join("");
    if (availableMenu().some(function (dish) { return dish.id === currentValue; })) select.value = currentValue;
  }
  function renderPromoBanner() {
    var banner = document.getElementById("promoBanner");
    var promoList = document.getElementById("promoList");
    var activeOffers = state.offers.filter(function (offer) {
      return offer.enabled && offer.buyProductId &&
        availableMenu().some(function (dish) { return dish.id === offer.buyProductId; });
    });
    banner.hidden = activeOffers.length === 0;
    promoList.innerHTML = activeOffers.map(function (offer) {
      var buyProduct = availableMenu().find(function (dish) { return dish.id === offer.buyProductId; });
      var application = state.appliedOffers.find(function (item) { return item.offerId === offer.id; });
      var purchasedQuantity = Number(state.cart[offer.buyProductId]) || 0;
      var qualifyingSets = Math.floor(purchasedQuantity / offer.buyQuantity);
      var isQualified = qualifyingSets > 0;
      var freeProductOptions = availableMenu().map(function (dish) {
        return '<option value="' + escapeHtml(dish.id) + '"' +
          (application && application.freeProductId === dish.id ? " selected" : "") + ">" +
          escapeHtml(dish.ar) + " · " + kitchenPrice(dish.price) + "</option>";
      }).join("");
      var qualification = isQualified
        ? "مؤهل لـ " + Math.min(99, qualifyingSets * offer.freeQuantity) + " صنف مجاني"
        : "أضف " + Math.max(0, offer.buyQuantity - purchasedQuantity) + " × " + escapeHtml(buyProduct.ar) + " إلى السلة أولاً";
      var button = application
        ? '<button type="button" class="promo-remove-button" data-promo-remove="' + escapeHtml(offer.id) + '">إزالة العرض</button>'
        : '<button type="button" class="promo-apply-button" data-promo-apply="' + escapeHtml(offer.id) +
          '" disabled>تطبيق العرض</button>';
      return '<article class="promo-card' + (application ? " is-applied" : "") + '" data-promo-id="' + escapeHtml(offer.id) +
        '"><div class="promo-card-copy"><span class="promo-card-kicker">عرض الصفوة</span><strong>' + escapeHtml(offer.text) +
        '</strong><span class="promo-card-details">اشترِ ' + offer.buyQuantity + " × " + escapeHtml(buyProduct.ar) +
        " واحصل على " + offer.freeQuantity + ' هدية من اختيارك</span></div><div class="promo-card-action">' +
        '<label class="sr-only" for="promo-free-' + escapeHtml(offer.id) + '">اختر الصنف المجاني لعرض ' + escapeHtml(offer.text) +
        '</label><select id="promo-free-' + escapeHtml(offer.id) + '" data-promo-free-select="' + escapeHtml(offer.id) +
        '"' + (application ? " disabled" : "") + '><option value="">اختر الصنف المجاني</option>' +
        freeProductOptions + '</select>' + button + '<span class="promo-qualification">' + qualification + "</span></div></article>";
    }).join("");
  }
  function renderKdsPromoNotice() {
    var notice = document.getElementById("kdsPromoNotice");
    var activeOffers = state.offers.filter(function (offer) { return offer.enabled; });
    notice.hidden = activeOffers.length === 0;
    notice.innerHTML = activeOffers.map(function (offer) {
      var product = menu.find(function (dish) { return dish.id === offer.buyProductId; });
      var details = product
        ? "اشترِ " + offer.buyQuantity + " × " + product.ar + " واحصل على " + offer.freeQuantity + " مجاني من اختيار العميل"
        : "العرض متاح للإعلان فقط.";
      return '<div class="kds-promo-line"><span aria-hidden="true">✦</span><strong>' + escapeHtml(offer.text) +
        '</strong><small>' + escapeHtml(details) + "</small></div>";
    }).join("");
  }
  function updatePromoApplyButton(offerId, select) {
    var offer = state.offers.find(function (item) { return item.id === offerId; });
    var buyQuantity = offer ? Number(state.cart[offer.buyProductId]) || 0 : 0;
    var button = Array.from(document.querySelectorAll("[data-promo-apply]")).find(function (item) {
      return item.getAttribute("data-promo-apply") === offerId;
    });
    if (button) button.disabled = !offer || !select.value || buyQuantity < offer.buyQuantity;
  }
  function renderProducts() {
    document.getElementById("productCount").textContent = menu.length;
    document.getElementById("productCountHeading").textContent = menu.length;
    document.getElementById("productList").innerHTML = menu.map(function (dish) {
      var isHidden = state.hiddenMenuItemIds.indexOf(dish.id) >= 0;
      var category = categories.find(function (item) { return item.id === dish.category; });
      return '<article class="product-row' + (isHidden ? " is-hidden" : "") + '"><div class="product-row-info"><strong>' +
        escapeHtml(dish.ar) + '</strong><span>' + escapeHtml(category ? category.ar : "") + " · " + kitchenPrice(dish.price) +
        (isHidden ? " · مخفي من القائمة" : "") + '</span></div><div class="product-row-actions"><button type="button" data-product-toggle="' +
        escapeHtml(dish.id) + '">' + (isHidden ? "إظهار" : "إخفاء") + "</button>" +
        (dish.id.indexOf("custom-") === 0 ? '<button type="button" data-product-delete="' + escapeHtml(dish.id) + '">حذف</button>' : "") +
        "</div></article>";
    }).join("");
  }
  function renderSales() {
    document.getElementById("salesCount").textContent = state.sales.length;
    document.getElementById("salesCountHeading").textContent = state.sales.length;
    document.getElementById("salesEmpty").hidden = state.sales.length > 0;
    document.getElementById("salesList").innerHTML = state.sales.slice().sort(function (a, b) {
      return b.createdAt - a.createdAt;
    }).map(function (sale) {
      return '<article class="sale-row"><div class="sale-row-info"><strong>بيع تجريبي · ' +
        escapeHtml(new Date(sale.createdAt).toLocaleString("ar-EG", { dateStyle: "short", timeStyle: "short" })) +
        '</strong><span>رقم العميل: ' + escapeHtml(sale.phoneMasked || "غير محفوظ") +
        '</span></div><strong class="sale-row-total">' + kitchenPrice(sale.amount) + "</strong></article>";
    }).join("");
  }
  function setKdsTab(panelId) {
    var validPanels = ["activePanel", "archivePanel", "productsPanel", "offersPanel", "salesPanel"];
    if (validPanels.indexOf(panelId) < 0) panelId = "activePanel";
    document.querySelectorAll("[data-kds-tab]").forEach(function (button) {
      var selected = button.getAttribute("data-kds-tab") === panelId;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    validPanels.forEach(function (id) {
      var panel = document.getElementById(id);
      var selected = id === panelId;
      panel.hidden = !selected;
      panel.classList.toggle("is-active", selected);
    });
  }
  function updateElapsed() {
    document.querySelectorAll(".ticket-elapsed").forEach(function (element) {
      var seconds = Math.max(0, Math.floor((Date.now() - Number(element.getAttribute("data-created"))) / 1000));
      var mins = Math.floor(seconds / 60);
      var secs = seconds % 60;
      element.textContent = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0") + " مضى";
      if (mins >= 15) element.style.color = "#ff735f";
      else if (mins >= 8) element.style.color = "#f3c171";
    });
  }
  function submitOrder(event) {
    event.preventDefault();
    if (!totalQuantity()) {
      closeOverlay("checkout");
      showToast(t("emptyCheckout"));
      return;
    }
    var form = event.currentTarget;
    var payment = new FormData(form).get("payment");
    var paymentContact = payment === "vodafone" ? form.elements.walletPhone : payment === "instapay" ? form.elements.instapayContact : null;
    if (paymentContact) {
      paymentContact.setCustomValidity(String(paymentContact.value).trim() ? "" : t("paymentContactRequired"));
    }
    if (!form.reportValidity()) return;
    var formData = new FormData(form);
    var order = {
      id: createOrderId(),
      createdAt: Date.now(),
      name: String(formData.get("name")).trim(),
      phone: String(formData.get("phone")).trim(),
      address: String(formData.get("address")).trim(),
      payment: payment,
      paymentContactMasked: paymentContact ? maskPaymentContact(paymentContact.value) : "",
      items: availableMenu().filter(function (dish) { return Number(state.cart[dish.id]) > 0; }).map(function (dish) {
        return {
          id: dish.id,
          lineId: "item-" + dish.id,
          name: dish.name,
          ar: dish.ar,
          price: dish.price,
          quantity: Number(state.cart[dish.id]),
          ready: false,
          isFree: false,
          offerText: ""
        };
      }).concat(getFreeItemLines().map(function (item) {
        return {
          id: item.id,
          lineId: item.lineId,
          name: item.name,
          ar: item.ar,
          price: 0,
          discountValue: item.discountValue,
          quantity: item.quantity,
          ready: false,
          isFree: true,
          offerText: item.offerText
        };
      })),
      subtotal: cartSubtotal(),
      discount: cartDiscount(),
      total: cartTotal()
    };
    state.orders.push(order);
    state.cart = {};
    state.appliedOffers = [];
    persist();
    renderMenu();
    renderCart();
    renderKds();
    form.reset();
    document.getElementById("vodafoneExtra").classList.remove("is-visible");
    document.getElementById("instapayExtra").classList.remove("is-visible");
    form.elements.walletPhone.required = false;
    form.elements.instapayContact.required = false;
    form.elements.walletPhone.setCustomValidity("");
    form.elements.instapayContact.setCustomValidity("");
    document.getElementById("locationStatus").textContent = "";
    closeOverlay("checkout");
    closeOverlay("cart");
    showToast(t("orderReceived"));
    if (state.settings.sound) playChime(false);
  }
  function playChime(showError) {
    var AudioContextType = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextType) {
      if (showError) showToast(t("chimeUnavailable"));
      return;
    }
    try {
      var context = new AudioContextType();
      var oscillator = context.createOscillator();
      var gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(740, context.currentTime);
      oscillator.frequency.setValueAtTime(990, context.currentTime + 0.12);
      gain.gain.setValueAtTime(.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.13, context.currentTime + .025);
      gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .48);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + .5);
      oscillator.onended = function () { context.close(); };
    } catch (error) {
      console.error("Could not play the kitchen demo chime.", error);
      if (showError) showToast(t("chimeUnavailable"));
    }
  }
  function requestLocation() {
    var status = document.getElementById("locationStatus");
    if (!navigator.geolocation) {
      showToast(t("locationUnsupported"));
      return;
    }
    status.textContent = t("locationLoading");
    navigator.geolocation.getCurrentPosition(function (position) {
      var coordinateText = "GPS " + position.coords.latitude.toFixed(5) + ", " + position.coords.longitude.toFixed(5);
      var address = document.querySelector('[name="address"]');
      if (!address.value.trim()) address.value = coordinateText;
      else if (!address.value.includes(coordinateText)) address.value = address.value.trim() + " · " + coordinateText;
      status.textContent = t("locationAdded");
    }, function (error) {
      status.textContent = t("locationDenied");
      console.warn("Browser did not provide a location.", error.message);
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 });
  }

  restore();
  updateLanguage();

  document.getElementById("languageToggle").addEventListener("click", function () {
    state.lang = state.lang === "en" ? "ar" : "en";
    updateLanguage();
  });
  document.getElementById("categoryRow").addEventListener("click", function (event) {
    var button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.getAttribute("data-category");
    renderCategories();
    renderMenu();
  });
  document.getElementById("menuGrid").addEventListener("click", function (event) {
    var button = event.target.closest("[data-action]");
    if (button) setQuantity(button.getAttribute("data-id"), button.getAttribute("data-action") === "minus" ? -1 : 1);
  });
  document.getElementById("cartItems").addEventListener("click", function (event) {
    var offerButton = event.target.closest("[data-remove-cart-offer]");
    if (offerButton) {
      var offerId = offerButton.getAttribute("data-remove-cart-offer");
      state.appliedOffers = state.appliedOffers.filter(function (application) { return application.offerId !== offerId; });
      persist();
      renderCart();
      return;
    }
    var button = event.target.closest("[data-action]");
    if (!button) return;
    var action = button.getAttribute("data-action");
    if (action === "remove") {
      delete state.cart[button.getAttribute("data-id")];
      persist();
      renderMenu();
      renderCart();
    } else setQuantity(button.getAttribute("data-id"), action === "minus" ? -1 : 1);
  });
  document.getElementById("cartOpen").addEventListener("click", function () { openOverlay("cartOverlay"); });
  document.getElementById("checkoutOpen").addEventListener("click", function () {
    if (!totalQuantity()) return;
    closeOverlay("cart");
    openOverlay("checkoutOverlay");
  });
  document.getElementById("checkoutForm").addEventListener("submit", submitOrder);
  document.querySelectorAll("[data-close]").forEach(function (button) {
    button.addEventListener("click", function () { closeOverlay(button.getAttribute("data-close")); });
  });
  document.getElementById("getLocation").addEventListener("click", requestLocation);
  document.getElementById("checkoutForm").elements.walletPhone.addEventListener("input", function () { this.setCustomValidity(""); });
  document.getElementById("checkoutForm").elements.instapayContact.addEventListener("input", function () { this.setCustomValidity(""); });
  document.querySelectorAll('input[name="payment"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
      document.getElementById("vodafoneExtra").classList.toggle("is-visible", radio.value === "vodafone" && radio.checked);
      document.getElementById("instapayExtra").classList.toggle("is-visible", radio.value === "instapay" && radio.checked);
      document.querySelector('[name="walletPhone"]').required = radio.value === "vodafone" && radio.checked;
      document.querySelector('[name="instapayContact"]').required = radio.value === "instapay" && radio.checked;
      document.querySelector('[name="walletPhone"]').setCustomValidity("");
      document.querySelector('[name="instapayContact"]').setCustomValidity("");
    });
  });
  document.getElementById("kdsOpen").addEventListener("click", function () {
    document.getElementById("pinForm").reset();
    document.getElementById("kdsPin").setCustomValidity("");
    openOverlay("pinOverlay");
  });
  document.getElementById("pinForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var pin = document.getElementById("kdsPin");
    if (!pin.reportValidity()) return;
    if (pin.value !== "1234") {
      pin.setCustomValidity(kitchenText("pinError"));
      pin.reportValidity();
      pin.focus();
      showToast(kitchenText("pinError"));
      return;
    }
    closeOverlay("pin");
    renderKds();
    setKdsTab("activePanel");
    openOverlay("kdsOverlay");
  });
  document.getElementById("kdsPin").addEventListener("input", function () { this.setCustomValidity(""); });
  document.getElementById("kdsClose").addEventListener("click", function () { closeOverlay("kds"); });
  document.getElementById("chimeButton").addEventListener("click", function () { playChime(true); });
  document.getElementById("orderSort").addEventListener("change", function () {
    state.settings.sort = this.value === "newest" ? "newest" : "oldest";
    persist();
    renderKds();
  });
  document.getElementById("orderFilter").addEventListener("change", function () {
    state.settings.filter = ["all", "in-progress", "ready"].indexOf(this.value) >= 0 ? this.value : "all";
    persist();
    renderKds();
  });
  document.getElementById("compactTickets").addEventListener("change", function () {
    state.settings.compact = this.checked;
    persist();
    renderKds();
  });
  document.getElementById("soundAlerts").addEventListener("change", function () {
    state.settings.sound = this.checked;
    persist();
  });
  document.querySelector(".kds-nav").addEventListener("click", function (event) {
    var button = event.target.closest("[data-kds-tab]");
    if (button) setKdsTab(button.getAttribute("data-kds-tab"));
  });
  document.querySelector(".kds-nav").addEventListener("keydown", function (event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    var tabs = Array.from(this.querySelectorAll("[data-kds-tab]"));
    var current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    var direction = event.key === "ArrowRight" ? 1 : -1;
    var next = tabs[(current + direction + tabs.length) % tabs.length];
    setKdsTab(next.getAttribute("data-kds-tab"));
    next.focus();
  });
  document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (state.customItems.length >= 50) {
      showToast("وصلت القائمة إلى الحد الأقصى البالغ ٥٠ صنفًا جديدًا.");
      return;
    }
    var arabicName = form.elements.arabicName.value.trim();
    var englishName = form.elements.englishName.value.trim() || arabicName;
    var categoryId = form.elements.category.value;
    var price = Number(form.elements.price.value);
    if (!arabicName || !Number.isFinite(price) || price <= 0 || price > 100000 ||
      !categories.some(function (category) { return category.id === categoryId; })) return;
    var duplicate = menu.some(function (dish) {
      return dish.category === categoryId && dish.ar.toLocaleLowerCase() === arabicName.toLocaleLowerCase();
    });
    if (duplicate) {
      showToast("هذا الصنف موجود بالفعل في الفئة المحددة.");
      form.elements.arabicName.focus();
      return;
    }
    var item = {
      id: "custom-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7),
      category: categoryId,
      name: englishName.slice(0, 60),
      ar: arabicName.slice(0, 60),
      price: price,
      desc: englishName.slice(0, 60),
      arDesc: arabicName.slice(0, 60),
      image: "assets/koshary-meal.jpg",
      tag: "جديد"
    };
    state.customItems.push(item);
    menu.push(item);
    state.category = categoryId;
    persist();
    renderCategories();
    renderMenu();
    renderProducts();
    form.reset();
  });
  document.getElementById("productList").addEventListener("click", function (event) {
    var toggleButton = event.target.closest("[data-product-toggle]");
    var deleteButton = event.target.closest("[data-product-delete]");
    if (toggleButton) {
      var itemId = toggleButton.getAttribute("data-product-toggle");
      var hiddenIndex = state.hiddenMenuItemIds.indexOf(itemId);
      if (hiddenIndex >= 0) state.hiddenMenuItemIds.splice(hiddenIndex, 1);
      else {
        state.hiddenMenuItemIds.push(itemId);
        delete state.cart[itemId];
        state.appliedOffers = state.appliedOffers.filter(function (application) {
          var offer = state.offers.find(function (item) { return item.id === application.offerId; });
          return application.freeProductId !== itemId && (!offer || offer.buyProductId !== itemId);
        });
      }
      persist();
      renderMenu();
      renderCart();
      renderProducts();
      renderOfferProductOptions();
      renderOffers();
      return;
    }
    if (!deleteButton) return;
    var customId = deleteButton.getAttribute("data-product-delete");
    state.customItems = state.customItems.filter(function (dish) { return dish.id !== customId; });
    menu = menu.filter(function (dish) { return dish.id !== customId; });
    state.hiddenMenuItemIds = state.hiddenMenuItemIds.filter(function (id) { return id !== customId; });
    delete state.cart[customId];
    var removedOfferIds = state.offers.filter(function (offer) { return offer.buyProductId === customId; }).map(function (offer) { return offer.id; });
    state.offers = state.offers.filter(function (offer) { return offer.buyProductId !== customId; });
    state.appliedOffers = state.appliedOffers.filter(function (application) {
      return application.freeProductId !== customId && removedOfferIds.indexOf(application.offerId) < 0;
    });
    persist();
    renderCategories();
    renderMenu();
    renderCart();
    renderProducts();
    renderOfferProductOptions();
    renderOffers();
  });
  document.getElementById("saleForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    var phoneInput = form.elements.phone;
    var amountInput = form.elements.amount;
    var phone = phoneInput.value.trim();
    var amount = Number(amountInput.value);
    phoneInput.setCustomValidity(phone ? "" : "أدخل رقم العميل.");
    amountInput.setCustomValidity(Number.isFinite(amount) && amount > 0 && amount <= 1000000 ? "" : "أدخل مبلغًا صحيحًا.");
    if (!form.reportValidity()) return;
    state.sales.unshift({
      id: "sale-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7),
      createdAt: Date.now(),
      amount: amount,
      phoneMasked: maskPaymentContact(phone)
    });
    state.sales = state.sales.slice(0, 200);
    persist();
    form.reset();
    renderKds();
    showToast("تم تسجيل البيع التجريبي محليًا؛ لم يتم تحويل أو تحصيل أي مبلغ.");
  });
  document.getElementById("offerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    if (!form.reportValidity()) return;
    var text = form.elements.offer.value.trim();
    var buyProductId = form.elements.buyProductId.value;
    var buyQuantity = Number(form.elements.buyQuantity.value);
    var freeQuantity = Number(form.elements.freeQuantity.value);
    var buyProduct = availableMenu().find(function (dish) { return dish.id === buyProductId; });
    if (!text || !buyProduct || !Number.isInteger(buyQuantity) || buyQuantity < 1 || buyQuantity > 99 ||
      !Number.isInteger(freeQuantity) || freeQuantity < 1 || freeQuantity > 99) {
      showToast(kitchenText("offerRequired"));
      form.elements.offer.focus();
      return;
    }
    if (state.offers.length >= 30) {
      showToast(kitchenText("offerLimit"));
      return;
    }
    state.offers.unshift({
      id: "offer-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7),
      text: text.slice(0, 100),
      enabled: true,
      buyProductId: buyProduct.id,
      buyQuantity: buyQuantity,
      freeQuantity: freeQuantity
    });
    persist();
    form.reset();
    renderOffers();
    renderPromoBanner();
    renderOfferProductOptions();
  });
  document.getElementById("promoList").addEventListener("change", function (event) {
    var select = event.target.closest("[data-promo-free-select]");
    if (select) updatePromoApplyButton(select.getAttribute("data-promo-free-select"), select);
  });
  document.getElementById("promoList").addEventListener("click", function (event) {
    var applyButton = event.target.closest("[data-promo-apply]");
    var removeButton = event.target.closest("[data-promo-remove]");
    if (removeButton) {
      state.appliedOffers = state.appliedOffers.filter(function (application) {
        return application.offerId !== removeButton.getAttribute("data-promo-remove");
      });
      persist();
      renderCart();
      return;
    }
    if (!applyButton || applyButton.disabled) return;
    var offerId = applyButton.getAttribute("data-promo-apply");
    var offer = state.offers.find(function (item) { return item.id === offerId && item.enabled; });
    var card = applyButton.closest(".promo-card");
    var select = card && card.querySelector("[data-promo-free-select]");
    var freeProduct = select && availableMenu().find(function (item) { return item.id === select.value; });
    if (!offer || !freeProduct || (Number(state.cart[offer.buyProductId]) || 0) < offer.buyQuantity) {
      showToast("أضف الصنف المطلوب إلى السلة أولاً.");
      return;
    }
    state.appliedOffers = state.appliedOffers.filter(function (application) { return application.offerId !== offerId; });
    state.appliedOffers.push({ offerId: offerId, freeProductId: freeProduct.id });
    persist();
    renderCart();
  });
  document.getElementById("offerList").addEventListener("click", function (event) {
    var toggleButton = event.target.closest("[data-offer-toggle]");
    var deleteButton = event.target.closest("[data-offer-delete]");
    var offerId = toggleButton ? toggleButton.getAttribute("data-offer-toggle") :
      deleteButton ? deleteButton.getAttribute("data-offer-delete") : "";
    if (!offerId) return;
    var offerIndex = state.offers.findIndex(function (offer) { return offer.id === offerId; });
    if (offerIndex < 0) return;
    if (toggleButton) {
      state.offers[offerIndex].enabled = !state.offers[offerIndex].enabled;
      if (!state.offers[offerIndex].enabled) {
        state.appliedOffers = state.appliedOffers.filter(function (application) { return application.offerId !== offerId; });
      }
    } else {
      state.offers.splice(offerIndex, 1);
      state.appliedOffers = state.appliedOffers.filter(function (application) { return application.offerId !== offerId; });
    }
    persist();
    renderOffers();
    renderPromoBanner();
    renderCart();
  });
  document.getElementById("kdsOrders").addEventListener("click", function (event) {
    var itemButton = event.target.closest("[data-order-item]");
    if (itemButton) {
      var activeOrder = state.orders.find(function (order) { return order.id === itemButton.getAttribute("data-order-item"); });
      var activeItem = activeOrder && activeOrder.items.find(function (item) { return item.lineId === itemButton.getAttribute("data-item-line"); });
      if (!activeItem) return;
      activeItem.ready = !activeItem.ready;
      persist();
      renderKds();
      return;
    }
    var cancelButton = event.target.closest("[data-cancel]");
    if (cancelButton) {
      if (!window.confirm(kitchenText("cancelConfirm"))) return;
      var cancelIndex = state.orders.findIndex(function (order) { return order.id === cancelButton.getAttribute("data-cancel"); });
      if (cancelIndex < 0) return;
      state.orders.splice(cancelIndex, 1);
      persist();
      renderKds();
      return;
    }
    var button = event.target.closest("[data-complete]");
    if (!button) return;
    var index = state.orders.findIndex(function (order) { return order.id === button.getAttribute("data-complete"); });
    if (index < 0) return;
    var completed = state.orders.splice(index, 1)[0];
    completed.completedAt = Date.now();
    state.history.unshift(completed);
    persist();
    renderKds();
  });
  document.getElementById("clearHistory").addEventListener("click", function () {
    if (!state.history.length) return;
    if (!window.confirm(kitchenText("clearConfirm"))) return;
    state.history = [];
    persist();
    renderKds();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      var opened = document.querySelector(".overlay.open");
      if (opened) closeOverlay(opened.id.replace("Overlay", ""));
    }
  });
  window.addEventListener("storage", function (event) {
    if (event.key !== storageKey) return;
    try {
      var existingIds = state.orders.reduce(function (ids, order) { ids[order.id] = true; return ids; }, {});
      var saved = event.newValue ? JSON.parse(event.newValue) : {};
      applySaved(saved);
      renderMenu();
      renderCart();
      renderKdsSettings();
      renderKds();
      if (state.settings.sound && state.orders.some(function (order) { return !existingIds[order.id]; })) playChime(false);
    } catch (error) {
      showToast(t("dataError"));
      console.error("Could not synchronize trial data from another tab.", error);
    }
  });
  window.setInterval(updateElapsed, 1000);
})();
