import { Car, Clock, MapPin, MessageCircle, Shield, Sparkles, Truck, Wrench } from "lucide-react";
import { Locale } from "@/lib/site";

export const images = {
  hero: "/images/hero-flatbed.webp",
  truck: "/images/red-flatbed.webp",
  roadside: "/images/roadside-service.webp",
  city: "/images/jeddah-city.webp",
  road: "/images/safe-road.webp",
  workshop: "/images/red-flatbed.webp",
  highway: "/images/safe-road.webp",
  phoneMap: "/images/hero-flatbed.webp",
};

export const ui = {
  ar: {
    call: "اتصل الآن",
    whatsapp: "واتساب مباشر",
    email: "البريد",
    readMore: "اقرأ المزيد",
    viewAll: "عرض الكل",
    home: "الرئيسية",
    breadcrumbs: "مسار الصفحة",
    featured: "مقال مميز",
    recent: "أحدث المقالات",
    search: "ابحث في المدونة",
    all: "الكل",
    submit: "إرسال عبر واتساب",
  },
  en: {
    call: "Call Now",
    whatsapp: "WhatsApp",
    email: "Email",
    readMore: "Read More",
    viewAll: "View All",
    home: "Home",
    breadcrumbs: "Breadcrumbs",
    featured: "Featured Article",
    recent: "Recent Posts",
    search: "Search the blog",
    all: "All",
    submit: "Send on WhatsApp",
  },
  ur: {
    call: "ابھی کال کریں",
    whatsapp: "واٹس ایپ",
    email: "ای میل",
    readMore: "مزید پڑھیں",
    viewAll: "سب دیکھیں",
    home: "ہوم",
    breadcrumbs: "صفحہ راستہ",
    featured: "نمایاں مضمون",
    recent: "حالیہ مضامین",
    search: "بلاگ تلاش کریں",
    all: "سب",
    submit: "واٹس ایپ پر بھیجیں",
  },
} satisfies Record<Locale, Record<string, string>>;

export const home = {
  ar: {
    heroTitle: "سطحة جدة ومكة لنقل السيارات بسرعة وأمان",
    heroText:
      "خدمة سطحة عادية لنقل السيارات داخل جدة ومكة وعلى الطرق القريبة، متاحة 24 ساعة لنقل السيارات المتعطلة أو المصدومة بأمان وسعر مناسب.",
    badge: "خدمة متاحة 24/7 في جدة ومكة",
    emergency: "تحتاج سطحة الآن؟ اتصل مباشرة أو أرسل موقعك عبر واتساب.",
    servicesTitle: "خدمات نقل سيارات واضحة وسريعة",
    servicesText: "خدمات عملية للسيارات المتعطلة والمصدومة والتنقل بين جدة ومكة دون تعقيد.",
    coverageTitle: "تغطية جدة ومكة",
    coverageText: "نصل إلى الأحياء الرئيسية والطرق القريبة مع متابعة مباشرة عبر الهاتف وواتساب.",
    whyTitle: "لماذا يثق العملاء بخدمتنا؟",
    howTitle: "طريقة الطلب",
    areasTitle: "مناطق نخدمها",
    galleryTitle: "صور من خدمة السطحة",
    testimonialsTitle: "آراء مختصرة من العملاء",
    blogTitle: "دليل السائق في جدة ومكة",
    faqTitle: "أسئلة شائعة",
    contactTitle: "اطلب السطحة الآن",
  },
  en: {
    heroTitle: "Fast Car Towing in Jeddah & Makkah",
    heroText:
      "Regular flatbed car transport across Jeddah, Makkah, and nearby roads, available 24/7 for broken down or accident-damaged cars at fair prices.",
    badge: "24/7 service in Jeddah and Makkah",
    emergency: "Need car towing now? Call directly or send your location on WhatsApp.",
    servicesTitle: "Clear, Fast Car Transport Services",
    servicesText: "Practical support for breakdowns, accident cars, and city-to-city car transport.",
    coverageTitle: "Jeddah and Makkah Coverage",
    coverageText: "We reach key neighborhoods and nearby roads with direct phone and WhatsApp updates.",
    whyTitle: "Why Customers Choose Us",
    howTitle: "How It Works",
    areasTitle: "Areas We Serve",
    galleryTitle: "Flatbed Service Gallery",
    testimonialsTitle: "Customer Notes",
    blogTitle: "Driver Guide for Jeddah and Makkah",
    faqTitle: "Frequently Asked Questions",
    contactTitle: "Request Service Now",
  },
  ur: {
    heroTitle: "جدہ اور مکہ میں تیز رفتار سطحة سروس",
    heroText:
      "جدہ، مکہ اور قریبی راستوں پر عام فلیٹ بیڈ گاڑی منتقلی، خراب یا حادثہ زدہ گاڑی کے لیے 24 گھنٹے دستیاب۔",
    badge: "جدہ اور مکہ میں 24/7 سروس",
    emergency: "ابھی سطحة چاہیے؟ کال کریں یا واٹس ایپ پر لوکیشن بھیجیں۔",
    servicesTitle: "صاف اور تیز کار ٹرانسپورٹ سروسز",
    servicesText: "خراب گاڑی، حادثہ زدہ گاڑی اور جدہ مکہ کے درمیان منتقلی کے لیے آسان مدد۔",
    coverageTitle: "جدہ اور مکہ کوریج",
    coverageText: "اہم علاقوں اور قریبی سڑکوں پر فون اور واٹس ایپ اپ ڈیٹس کے ساتھ سروس۔",
    whyTitle: "لوگ ہمیں کیوں منتخب کرتے ہیں",
    howTitle: "سروس کیسے حاصل کریں",
    areasTitle: "سروس علاقے",
    galleryTitle: "سطحة سروس گیلری",
    testimonialsTitle: "کسٹمر نوٹس",
    blogTitle: "جدہ اور مکہ ڈرائیور گائیڈ",
    faqTitle: "عام سوالات",
    contactTitle: "ابھی سروس طلب کریں",
  },
} satisfies Record<Locale, Record<string, string>>;

export const trustBadges = {
  ar: ["خدمة 24/7", "وصول سريع", "نقل آمن", "تغطية جدة ومكة"],
  en: ["24/7 Service", "Fast Arrival", "Safe Transport", "Jeddah & Makkah"],
  ur: ["24/7 سروس", "فوری آمد", "محفوظ منتقلی", "جدہ اور مکہ"],
};

export const services = [
  {
    slug: "car-towing-jeddah",
    icon: Truck,
    title: {
      ar: "سطحة لنقل السيارات في جدة",
      en: "Car Towing in Jeddah",
      ur: "جدہ میں کار ٹوئنگ",
    },
    description: {
      ar: "نقل سيارات داخل جدة للأعطال والحوادث والمشاوير اليومية بطريقة آمنة وواضحة.",
      en: "Car transport across Jeddah for breakdowns, accidents, and everyday vehicle moves.",
      ur: "جدہ میں خراب، حادثہ زدہ یا روزمرہ گاڑی منتقلی کے لیے محفوظ سروس۔",
    },
  },
  {
    slug: "car-towing-makkah",
    icon: MapPin,
    title: { ar: "سطحة مكة", en: "Car Towing in Makkah", ur: "مکہ میں سطحة" },
    description: {
      ar: "خدمة نقل سيارات في مكة والأحياء القريبة مع تنسيق سريع عبر واتساب.",
      en: "Vehicle transport in Makkah and nearby districts with quick WhatsApp coordination.",
      ur: "مکہ اور قریبی علاقوں میں واٹس ایپ کوآرڈینیشن کے ساتھ گاڑی منتقلی۔",
    },
  },
  {
    slug: "breakdown-car-towing",
    icon: Wrench,
    title: { ar: "نقل السيارات المتعطلة", en: "Breakdown Car Towing", ur: "خراب گاڑی کی منتقلی" },
    description: {
      ar: "نصل إلى موقع السيارة المتعطلة وننقلها إلى الورشة أو المنزل حسب وجهتك.",
      en: "We pick up broken down vehicles and move them to a workshop, home, or chosen drop-off.",
      ur: "خراب گاڑی کو ورکشاپ، گھر یا آپ کی منتخب جگہ تک منتقل کیا جاتا ہے۔",
    },
  },
  {
    slug: "accident-car-transport",
    icon: Shield,
    title: { ar: "نقل السيارات المصدومة", en: "Accident Car Transport", ur: "حادثہ زدہ گاڑی منتقلی" },
    description: {
      ar: "تعامل هادئ وحذر مع السيارات المصدومة لنقلها بدون ضغط إضافي على المركبة.",
      en: "Careful handling for accident-damaged vehicles with calm, direct coordination.",
      ur: "حادثہ زدہ گاڑی کے لیے احتیاط سے ہینڈلنگ اور براہ راست رابطہ۔",
    },
  },
  {
    slug: "jeddah-makkah-car-transport",
    icon: Car,
    title: {
      ar: "نقل سيارة من جدة إلى مكة",
      en: "Jeddah to Makkah Car Transport",
      ur: "جدہ سے مکہ گاڑی منتقلی",
    },
    description: {
      ar: "نقل سيارات بين جدة ومكة للرحلات المخططة أو الطارئة بسعر مناسب.",
      en: "Planned or urgent car transport between Jeddah and Makkah at fair rates.",
      ur: "جدہ اور مکہ کے درمیان منصوبہ بند یا فوری گاڑی منتقلی مناسب قیمت پر۔",
    },
  },
  {
    slug: "roadside-car-pickup",
    icon: MessageCircle,
    title: { ar: "استلام سيارة من الطريق", en: "Roadside Car Pickup", ur: "روڈ سائیڈ کار پک اپ" },
    description: {
      ar: "أرسل موقعك وننسق معك نقطة الاستلام والوجهة بأسرع طريقة ممكنة.",
      en: "Send your location and we coordinate pickup and drop-off as quickly as possible.",
      ur: "اپنی لوکیشن بھیجیں، ہم پک اپ اور ڈراپ آف جلدی ترتیب دیتے ہیں۔",
    },
  },
];

export const areas = [
  ["north-jeddah", "شمال جدة", "North Jeddah", "شمالی جدہ"],
  ["south-jeddah", "جنوب جدة", "South Jeddah", "جنوبی جدہ"],
  ["obhur", "أبحر", "Obhur", "ابحر"],
  ["al-safa", "الصفا", "Al Safa", "الصفا"],
  ["al-salamah", "السلامة", "Al Salamah", "السلامہ"],
  ["al-marwah", "المروة", "Al Marwah", "المروہ"],
  ["al-rawdah", "الروضة", "Al Rawdah", "الروضہ"],
  ["al-hamdaniyah", "الحمدانية", "Al Hamdaniyah", "الحمدانیہ"],
  ["al-balad", "البلد", "Al Balad", "البلد"],
  ["makkah-haram-area", "منطقة الحرم في مكة", "Makkah Haram Area", "مکہ حرم ایریا"],
  ["aziziyah-makkah", "العزيزية مكة", "Aziziyah Makkah", "عزیزیہ مکہ"],
  ["al-awali-makkah", "العوالي مكة", "Al Awali Makkah", "العوالی مکہ"],
  ["al-sharai-makkah", "الشرائع مكة", "Al Shara'i Makkah", "الشرائع مکہ"],
] as const;

export function areaTitle(area: (typeof areas)[number], locale: Locale) {
  return locale === "ar" ? area[1] : locale === "en" ? area[2] : area[3];
}

export const steps = {
  ar: ["اتصل أو أرسل واتساب", "شارك موقعك الحالي", "يصلك السائق", "تنقل السيارة بأمان"],
  en: ["Call or WhatsApp", "Share your location", "Driver arrives", "Car is moved safely"],
  ur: ["کال یا واٹس ایپ", "اپنی لوکیشن شیئر کریں", "ڈرائیور پہنچتا ہے", "گاڑی محفوظ منتقل ہوتی ہے"],
};

export const why = [
  { icon: Clock, ar: "متاح 24/7", en: "Available 24/7", ur: "24/7 دستیاب" },
  { icon: Sparkles, ar: "استجابة سريعة", en: "Fast response", ur: "فوری جواب" },
  { icon: Shield, ar: "تحميل ونقل آمن", en: "Safe loading and transport", ur: "محفوظ لوڈنگ اور منتقلی" },
  { icon: MessageCircle, ar: "حجز مباشر عبر واتساب", en: "Direct WhatsApp booking", ur: "براہ راست واٹس ایپ بکنگ" },
];

export const faqs = {
  ar: [
    ["هل الخدمة متاحة 24 ساعة؟", "نعم، يمكنك الاتصال أو إرسال واتساب في أي وقت داخل جدة ومكة والطرق القريبة."],
    ["هل تنقلون السيارات بين جدة ومكة؟", "نعم، نوفر نقل سيارات من جدة إلى مكة ومن مكة إلى جدة حسب الموقع والوجهة."],
    ["كيف أعرف السعر؟", "أرسل موقع الاستلام والوجهة ونوع السيارة، ونرد عليك بسعر واضح قبل التحرك."],
    ["ما المعلومات المطلوبة عند طلب سطحة؟", "نحتاج موقع الاستلام، موقع الوصول، نوع السيارة، وحالة السيارة إذا كانت متعطلة أو مصدومة."],
    ["هل يمكن إرسال الموقع عبر واتساب؟", "نعم، إرسال الموقع عبر واتساب هو أسرع طريقة لتحديد نقطة الوصول بدقة."],
    ["هل تخدمون شمال جدة وجنوب جدة؟", "نعم، نخدم شمال جدة وجنوب جدة وأحياء مثل الصفا، السلامة، المروة، الروضة، الحمدانية، البلد، وأبحر."],
    ["هل تنقلون السيارة إلى الورشة أو المنزل؟", "نعم، يمكن نقل السيارة إلى ورشة، منزل، معرض، أو أي وجهة داخل نطاق الخدمة."],
    ["هل السعر يتغير حسب المسافة؟", "نعم، السعر يعتمد غالباً على المسافة، موقع الاستلام، الوجهة، ونوع السيارة."],
    ["هل يمكن طلب سطحة لسيارة مصدومة؟", "نعم، نوفر نقل السيارات المصدومة مع التعامل بحذر أثناء التحميل والنقل."],
    ["هل توجد خدمة على الطرق القريبة من جدة ومكة؟", "نعم، يمكن التنسيق للطرق القريبة حسب الموقع والوجهة وتوفر السائق."],
  ],
  en: [
    ["Is the service available 24 hours?", "Yes, you can call or message on WhatsApp any time in Jeddah, Makkah, and nearby roads."],
    ["Do you move cars between Jeddah and Makkah?", "Yes, we support Jeddah to Makkah and Makkah to Jeddah car transport."],
    ["How do I get the price?", "Send pickup, drop-off, and car type. We confirm a clear price before dispatch."],
    ["What details should I send when requesting service?", "Send the pickup location, drop-off location, car type, and whether the car is broken down or accident-damaged."],
    ["Can I share my location on WhatsApp?", "Yes. WhatsApp location sharing is the fastest way to help the driver reach the exact pickup point."],
    ["Do you serve North and South Jeddah?", "Yes. We serve North Jeddah, South Jeddah, Al Safa, Al Salamah, Al Marwah, Al Rawdah, Al Hamdaniyah, Al Balad, and Obhur."],
    ["Can you take the car to a workshop or home?", "Yes. The car can be moved to a workshop, home, showroom, or another destination within the service area."],
    ["Does the price depend on distance?", "Usually yes. Pricing depends on distance, pickup point, destination, vehicle type, and service timing."],
    ["Can I request transport for an accident-damaged car?", "Yes. Accident car transport is available with careful loading and direct coordination."],
    ["Do you cover roads near Jeddah and Makkah?", "Yes. Nearby roads can be covered depending on the exact location, destination, and driver availability."],
  ],
  ur: [
    ["کیا سروس 24 گھنٹے دستیاب ہے؟", "جی ہاں، جدہ، مکہ اور قریبی راستوں کے لیے کسی بھی وقت کال یا واٹس ایپ کریں۔"],
    ["کیا جدہ اور مکہ کے درمیان گاڑی منتقل ہوتی ہے؟", "جی ہاں، جدہ سے مکہ اور مکہ سے جدہ گاڑی منتقلی دستیاب ہے۔"],
    ["قیمت کیسے معلوم ہوگی؟", "پک اپ، ڈراپ آف اور گاڑی کی قسم بھیجیں، روانگی سے پہلے واضح قیمت بتائی جائے گی۔"],
    ["سطحة طلب کرتے وقت کون سی معلومات دینی ہوں گی؟", "پک اپ لوکیشن، ڈراپ آف لوکیشن، گاڑی کی قسم، اور گاڑی خراب یا حادثہ زدہ ہونے کی معلومات بھیجیں۔"],
    ["کیا واٹس ایپ پر لوکیشن بھیج سکتے ہیں؟", "جی ہاں، واٹس ایپ لوکیشن ڈرائیور کو صحیح جگہ تک جلد پہنچانے کا آسان طریقہ ہے۔"],
    ["کیا شمالی اور جنوبی جدہ میں سروس ہے؟", "جی ہاں، شمالی جدہ، جنوبی جدہ، الصفا، السلامہ، المروہ، الروضہ، الحمدانیہ، البلد اور ابحر میں سروس دستیاب ہے۔"],
    ["کیا گاڑی ورکشاپ یا گھر لے جا سکتے ہیں؟", "جی ہاں، گاڑی ورکشاپ، گھر، شوروم یا سروس ایریا کے اندر کسی بھی منزل تک لے جائی جا سکتی ہے۔"],
    ["کیا قیمت فاصلے کے حساب سے بدلتی ہے؟", "عام طور پر قیمت فاصلے، پک اپ پوائنٹ، منزل، گاڑی کی قسم اور وقت پر منحصر ہوتی ہے۔"],
    ["کیا حادثہ زدہ گاڑی کے لیے سروس مل سکتی ہے؟", "جی ہاں، حادثہ زدہ گاڑی کی منتقلی احتیاط اور براہ راست رابطے کے ساتھ دستیاب ہے۔"],
    ["کیا جدہ اور مکہ کے قریبی راستوں پر سروس ہے؟", "جی ہاں، قریبی راستوں پر سروس جگہ، منزل اور ڈرائیور کی دستیابی کے مطابق دی جا سکتی ہے۔"],
  ],
};

export const testimonials = {
  ar: [
    "عميل من شمال جدة: التواصل كان سريعاً ووصلت السطحة للموقع بدون تعقيد.",
    "عميل من الصفا: خدمة واضحة وسعر مناسب، وتم نقل السيارة للورشة بأمان.",
    "عميل من السلامة: حجزت عبر واتساب وتم تنسيق الموقع والوجهة بسهولة.",
    "عميل من أبحر: أعطيتهم اللوكيشن ووصل السائق للمكان الصحيح بسرعة.",
    "عميل من الحمدانية: نقلوا السيارة بهدوء من البيت إلى الورشة وكان التعامل محترماً.",
    "عميل من جنوب جدة: السعر كان واضحاً قبل التحرك ولم تكن هناك مفاجآت.",
    "عميل من مكة: احتجت نقل سيارة إلى جدة وتم التنسيق بشكل مرتب.",
    "عميل من البلد: المكان كان مزدحماً لكن السائق تابع معي حتى وصل لنقطة الاستلام.",
    "عميل من المروة: الخدمة مناسبة عند تعطل السيارة ولا تريد المخاطرة بقيادتها.",
    "عميل من العزيزية مكة: الرد عبر واتساب كان سريعاً وتم تأكيد الوجهة مباشرة.",
  ],
  en: [
    "Customer from North Jeddah: Fast communication and simple location coordination.",
    "Customer from Al Safa: Clear service and fair price for moving the car to the workshop.",
    "Customer from Al Salamah: WhatsApp booking made the pickup and drop-off easy.",
    "Customer from Obhur: I shared the location and the driver reached the right point quickly.",
    "Customer from Al Hamdaniyah: The car was moved calmly from home to the workshop.",
    "Customer from South Jeddah: The price was clear before dispatch, with no surprises.",
    "Customer from Makkah: I needed transport to Jeddah and the coordination was organized.",
    "Customer from Al Balad: The area was busy, but the driver kept in touch until pickup.",
    "Customer from Al Marwah: Useful service when the car breaks down and driving is risky.",
    "Customer from Aziziyah Makkah: WhatsApp response was quick and the destination was confirmed directly.",
  ],
  ur: [
    "شمالی جدہ کے کسٹمر: رابطہ تیز تھا اور لوکیشن آسانی سے طے ہوگئی۔",
    "الصفا کے کسٹمر: سروس واضح اور قیمت مناسب تھی، گاڑی محفوظ ورکشاپ پہنچی۔",
    "السلامہ کے کسٹمر: واٹس ایپ بکنگ سے پک اپ اور ڈراپ آف آسان ہوگیا۔",
    "ابحر کے کسٹمر: لوکیشن بھیجی تو ڈرائیور جلد صحیح جگہ پہنچ گیا۔",
    "الحمدانیہ کے کسٹمر: گاڑی گھر سے ورکشاپ تک آرام سے منتقل ہوئی۔",
    "جنوبی جدہ کے کسٹمر: روانگی سے پہلے قیمت واضح تھی، کوئی حیرت نہیں ہوئی۔",
    "مکہ کے کسٹمر: جدہ تک گاڑی منتقل کرنی تھی اور رابطہ منظم رہا۔",
    "البلد کے کسٹمر: علاقہ مصروف تھا مگر ڈرائیور پک اپ تک رابطے میں رہا۔",
    "المروہ کے کسٹمر: گاڑی خراب ہو تو ڈرائیو کا خطرہ لینے کے بجائے اچھی سروس ہے۔",
    "عزیزیہ مکہ کے کسٹمر: واٹس ایپ پر جلد جواب ملا اور منزل فوراً کنفرم ہوگئی۔",
  ],
};

export const posts = [
  {
    slug: "best-staha-jeddah-safe-service",
    image: images.truck,
    category: { ar: "نصائح", en: "Tips", ur: "مشورے" },
    title: {
      ar: "أفضل سطحة في جدة: كيف تختار خدمة آمنة؟",
      en: "Best Car Towing in Jeddah: How to Choose a Safe Service",
      ur: "جدہ میں بہترین سطحة: محفوظ سروس کیسے منتخب کریں؟",
    },
    excerpt: {
      ar: "دليل مبسط لاختيار خدمة نقل سيارات موثوقة وسريعة داخل جدة.",
      en: "A practical guide to choosing reliable car transport in Jeddah.",
      ur: "جدہ میں قابل اعتماد گاڑی منتقلی منتخب کرنے کے لیے آسان گائیڈ۔",
    },
    date: "2026-01-10",
    readTime: 6,
    content: {
      ar: [
        {
          heading: "ما الذي يجعل خدمة السطحة آمنة؟",
          paragraphs: [
            "عند البحث عن سطحة جدة أو رقم سطحة جدة، لا يكفي اختيار أول نتيجة تظهر لك. الخدمة الآمنة تبدأ من تواصل واضح، معرفة دقيقة بالموقع، وسائق يفهم شوارع جدة وأحيائها.",
            "اسأل عن طريقة التحميل، وقت الوصول المتوقع، والسعر قبل تحرك السائق. هذه التفاصيل تجعل نقل السيارة أكثر هدوءاً، خصوصاً إذا كانت السيارة متعطلة أو مصدومة.",
          ],
        },
        {
          heading: "علامات الخدمة الجيدة داخل جدة",
          paragraphs: [
            "الخدمة الجيدة تطلب منك موقع الاستلام والوجهة ونوع السيارة، ثم تعطيك تقديراً واضحاً. إذا كنت في شمال جدة أو جنوب جدة أو أبحر أو الصفا، فإرسال الموقع عبر واتساب يساعد في الوصول بسرعة.",
            "اختر خدمة سطحة لنقل السيارات جدة تهتم بالسلامة ولا تستخدم وعوداً مبالغاً فيها. الأهم هو نقل السيارة بهدوء إلى الورشة أو المنزل أو الوجهة المطلوبة.",
          ],
        },
        {
          heading: "متى تطلب السطحة مباشرة؟",
          paragraphs: [
            "إذا توقفت السيارة على طريق مزدحم، أو ظهرت مشكلة تمنع القيادة، أو تعرضت السيارة لصدمة، اطلب سطحة قريبة مني جدة فوراً وابق في مكان آمن.",
          ],
        },
      ],
      en: [
        {
          heading: "What makes a towing service safe?",
          paragraphs: [
            "When searching for car towing Jeddah or flatbed towing Jeddah, do not choose only by speed. A safe service starts with clear communication, accurate pickup details, and a driver who understands local Jeddah roads.",
            "Ask about loading, expected arrival, and price before dispatch. These details make car transport easier, especially for breakdown or accident-damaged vehicles.",
          ],
        },
        {
          heading: "Signs of a reliable Jeddah service",
          paragraphs: [
            "A reliable provider asks for pickup location, drop-off point, and car type, then gives a clear estimate. If you are in North Jeddah, South Jeddah, Obhur, or Al Safa, WhatsApp location sharing can save time.",
            "Choose a service focused on safe flatbed car transport instead of exaggerated promises. The goal is simple: move the car carefully to a workshop, home, or chosen destination.",
          ],
        },
        {
          heading: "When should you request towing immediately?",
          paragraphs: [
            "If your car stops on a busy road, cannot be driven safely, or has accident damage, request nearby roadside towing in Jeddah and wait in a safe place.",
          ],
        },
      ],
      ur: [
        {
          heading: "محفوظ سطحة سروس کی پہچان کیا ہے؟",
          paragraphs: [
            "جدہ میں سطحة یا کار ٹوئنگ تلاش کرتے وقت صرف تیز سروس کو نہ دیکھیں۔ محفوظ سروس واضح رابطے، صحیح لوکیشن اور مقامی راستوں کی سمجھ سے شروع ہوتی ہے۔",
            "ڈرائیور روانہ ہونے سے پہلے لوڈنگ کا طریقہ، متوقع وقت اور قیمت پوچھیں۔ یہ معلومات خراب یا حادثہ زدہ گاڑی کی منتقلی کو آسان بناتی ہیں۔",
          ],
        },
        {
          heading: "جدہ میں اچھی سروس کی نشانیاں",
          paragraphs: [
            "اچھی سروس پک اپ لوکیشن، ڈراپ آف پوائنٹ اور گاڑی کی قسم پوچھتی ہے، پھر واضح اندازہ دیتی ہے۔ شمالی جدہ، جنوبی جدہ، ابحر یا الصفا میں واٹس ایپ لوکیشن وقت بچاتی ہے۔",
            "ایسی سروس منتخب کریں جو محفوظ فلیٹ بیڈ گاڑی منتقلی پر توجہ دے۔ مقصد گاڑی کو ورکشاپ، گھر یا مطلوبہ جگہ تک احتیاط سے پہنچانا ہے۔",
          ],
        },
        {
          heading: "فوراً سطحة کب طلب کریں؟",
          paragraphs: [
            "اگر گاڑی مصروف سڑک پر بند ہو جائے، محفوظ طریقے سے چل نہ سکے، یا حادثہ زدہ ہو تو قریبی سطحة طلب کریں اور محفوظ جگہ پر انتظار کریں۔",
          ],
        },
      ],
    },
  },
  {
    slug: "what-to-do-car-breakdown-jeddah",
    image: images.roadside,
    category: { ar: "طوارئ", en: "Emergency", ur: "ایمرجنسی" },
    title: {
      ar: "ماذا تفعل عند تعطل سيارتك في جدة؟",
      en: "What to Do When Your Car Breaks Down in Jeddah",
      ur: "جدہ میں گاڑی خراب ہو جائے تو کیا کریں؟",
    },
    excerpt: {
      ar: "خطوات سريعة تساعدك على البقاء آمناً وطلب السطحة بالطريقة الصحيحة.",
      en: "Quick steps to stay safe and request car transport the right way.",
      ur: "محفوظ رہنے اور صحیح طریقے سے سطحة طلب کرنے کے فوری اقدامات۔",
    },
    date: "2026-01-18",
    readTime: 6,
    content: {
      ar: [
        { heading: "الخطوة الأولى: السلامة قبل كل شيء", paragraphs: ["إذا تعطلت سيارتك في جدة، حاول إيقافها في مكان آمن وشغل إشارات التنبيه. لا تقف قريباً من مسار السيارات، خصوصاً على الطرق السريعة أو طريق المطار أو طريق مكة.", "بعد ذلك، حدد موقعك بدقة وشارك اللوكيشن عبر واتساب. هذا يساعد خدمة سطحة قريبة مني جدة على الوصول للموقع الصحيح بدون تأخير."] },
        { heading: "ما الذي ترسله عند الطلب؟", paragraphs: ["أرسل نوع السيارة، الحالة العامة، موقع الاستلام، والوجهة المطلوبة. إذا كانت السيارة لا تتحرك أو تعرضت لضرر، اذكر ذلك قبل وصول السائق.", "هذه المعلومات تساعد في تقدير السعر ووقت الوصول وتجنب أي سوء فهم أثناء نقل سيارات جدة."] },
        { heading: "هل تقود السيارة إلى الورشة؟", paragraphs: ["إذا كان العطل واضحاً أو القيادة غير آمنة، لا تحاول تحريك السيارة لمسافة طويلة. طلب سطحة لنقل السيارات جدة يكون أكثر أماناً للسيارة وللطريق."] },
      ],
      en: [
        { heading: "First step: keep yourself safe", paragraphs: ["If your car breaks down in Jeddah, stop in the safest available place and turn on hazard lights. Avoid standing near moving traffic, especially on highways, Airport Road, or Makkah Road.", "Then share your exact location on WhatsApp. This helps nearby car towing in Jeddah reach the right pickup point without delay."] },
        { heading: "What should you send?", paragraphs: ["Send the car type, vehicle condition, pickup location, and destination. If the vehicle cannot move or has visible damage, mention that before dispatch.", "These details help confirm the quote and expected arrival for roadside towing Jeddah."] },
        { heading: "Should you drive to the workshop?", paragraphs: ["If the fault is serious or driving feels unsafe, avoid moving the vehicle long distances. Flatbed car transport is usually the safer choice for both the car and the road."] },
      ],
      ur: [
        { heading: "پہلا قدم: اپنی حفاظت", paragraphs: ["اگر جدہ میں گاڑی خراب ہو جائے تو اسے ممکنہ حد تک محفوظ جگہ پر روکیں اور ہیزرڈ لائٹس آن کریں۔ ہائی وے، ایئرپورٹ روڈ یا مکہ روڈ پر ٹریفک کے قریب کھڑے نہ ہوں۔", "اس کے بعد واٹس ایپ پر اپنی صحیح لوکیشن بھیجیں تاکہ قریبی سطحة جلد صحیح جگہ پہنچ سکے۔"] },
        { heading: "کون سی معلومات بھیجنی چاہئیں؟", paragraphs: ["گاڑی کی قسم، حالت، پک اپ لوکیشن اور منزل بھیجیں۔ اگر گاڑی چل نہیں رہی یا نقصان ہے تو ڈرائیور کے روانہ ہونے سے پہلے بتائیں۔", "یہ معلومات قیمت اور پہنچنے کا وقت واضح کرنے میں مدد دیتی ہیں۔"] },
        { heading: "کیا گاڑی ورکشاپ تک خود چلائیں؟", paragraphs: ["اگر خرابی سنگین ہے یا گاڑی چلانا محفوظ نہیں تو لمبا فاصلہ نہ چلائیں۔ فلیٹ بیڈ گاڑی منتقلی زیادہ محفوظ انتخاب ہے۔"] },
      ],
    },
  },
  {
    slug: "car-transport-cost-jeddah-makkah",
    image: images.city,
    category: { ar: "أسعار", en: "Pricing", ur: "قیمت" },
    title: {
      ar: "تكلفة نقل السيارة بالسطحة داخل جدة ومكة",
      en: "Cost of Flatbed Car Transport in Jeddah and Makkah",
      ur: "جدہ اور مکہ میں سطحة سے گاڑی منتقلی کی لاگت",
    },
    excerpt: {
      ar: "العوامل التي تؤثر على السعر وكيف تحصل على تقدير واضح قبل الطلب.",
      en: "What affects pricing and how to get a clear quote before booking.",
      ur: "قیمت پر اثر انداز عوامل اور بکنگ سے پہلے واضح اندازہ کیسے حاصل کریں۔",
    },
    date: "2026-01-26",
    readTime: 6,
    content: {
      ar: [
        { heading: "العوامل التي تحدد السعر", paragraphs: ["تكلفة نقل السيارة بالسطحة داخل جدة ومكة تعتمد على المسافة، موقع الاستلام، الوجهة، نوع السيارة، ووقت الطلب. نقل سيارة من حي قريب يختلف عن نقل سيارة من جدة إلى مكة.", "عند طلب رقم سطحة مكة أو رقم سطحة جدة، الأفضل إرسال التفاصيل كاملة للحصول على سعر واضح قبل التحرك."] },
        { heading: "داخل المدينة وبين المدن", paragraphs: ["نقل سيارات جدة داخل الأحياء عادة يكون أبسط من النقل بين المدن. أما نقل سيارة من جدة إلى مكة أو من مكة إلى جدة فيحتاج تقدير مسافة ووقت الطريق.", "الوضوح قبل الطلب يحميك من المفاجآت ويجعل الخدمة أكثر راحة."] },
        { heading: "كيف تحصل على تقدير دقيق؟", paragraphs: ["أرسل الموقع، الوجهة، نوع السيارة، وهل السيارة تعمل أم لا. كلما كانت المعلومات دقيقة، كان تقدير السعر أسرع وأوضح."] },
      ],
      en: [
        { heading: "What affects the price?", paragraphs: ["The cost of flatbed car transport in Jeddah and Makkah depends on distance, pickup point, destination, vehicle type, and request timing. A short city move is different from Jeddah to Makkah car transport.", "When requesting car towing Makkah or car towing Jeddah, send complete details to get a clear quote before dispatch."] },
        { heading: "City moves and intercity transport", paragraphs: ["Car transport inside Jeddah neighborhoods is usually simpler than city-to-city transport. Moving a car from Jeddah to Makkah or Makkah to Jeddah requires distance and road-time estimation.", "Clear pricing before booking keeps the service straightforward and comfortable."] },
        { heading: "How to get an accurate quote", paragraphs: ["Send pickup location, destination, car type, and whether the vehicle can move. The more accurate the information, the faster the quote."] },
      ],
      ur: [
        { heading: "قیمت کن چیزوں پر منحصر ہے؟", paragraphs: ["جدہ اور مکہ میں سطحة سے گاڑی منتقلی کی قیمت فاصلے، پک اپ پوائنٹ، منزل، گاڑی کی قسم اور وقت پر منحصر ہوتی ہے۔ شہر کے اندر مختصر منتقلی جدہ سے مکہ منتقلی سے مختلف ہوتی ہے۔", "سطحة جدہ یا سطحة مکہ طلب کرتے وقت مکمل معلومات بھیجیں تاکہ روانگی سے پہلے واضح قیمت مل سکے۔"] },
        { heading: "شہر کے اندر اور شہروں کے درمیان", paragraphs: ["جدہ کے علاقوں کے اندر گاڑی منتقل کرنا عموماً آسان ہوتا ہے۔ جدہ سے مکہ یا مکہ سے جدہ گاڑی منتقلی کے لیے فاصلے اور وقت کا اندازہ ضروری ہے۔", "بکنگ سے پہلے واضح قیمت سروس کو آسان بناتی ہے۔"] },
        { heading: "درست قیمت کیسے ملے گی؟", paragraphs: ["پک اپ لوکیشن، منزل، گاڑی کی قسم اور گاڑی چلنے کے قابل ہے یا نہیں، یہ سب بھیجیں۔ معلومات جتنی درست ہوں گی، قیمت اتنی جلدی واضح ہوگی۔"] },
      ],
    },
  },
  {
    slug: "request-staha-jeddah-to-makkah",
    image: images.highway,
    category: { ar: "بين المدن", en: "Intercity", ur: "شہروں کے درمیان" },
    title: {
      ar: "طريقة طلب سطحة من جدة إلى مكة",
      en: "How to Request Car Transport from Jeddah to Makkah",
      ur: "جدہ سے مکہ سطحة کیسے طلب کریں",
    },
    excerpt: {
      ar: "ما المعلومات التي ترسلها لتسريع طلب النقل بين جدة ومكة.",
      en: "What details to send for a smoother Jeddah to Makkah move.",
      ur: "جدہ سے مکہ آسان منتقلی کے لیے کون سی معلومات بھیجنی ہیں۔",
    },
    date: "2026-02-03",
    readTime: 5,
    content: {
      ar: [
        { heading: "معلومات مهمة قبل الطلب", paragraphs: ["لطلب سطحة من جدة إلى مكة، جهز موقع الاستلام في جدة، الوجهة في مكة، نوع السيارة، ووقت النقل المناسب. هذه المعلومات تختصر وقت التنسيق.", "إذا كان الطلب من مكة إلى جدة، أرسل التفاصيل نفسها ليتم تقدير الطريق والسعر بوضوح."] },
        { heading: "متى تحتاج نقل بين المدن؟", paragraphs: ["قد تحتاج الخدمة عند تعطل السيارة، شراء سيارة من مدينة أخرى، أو نقل سيارة إلى ورشة أو منزل. نقل سيارة من جدة إلى مكة يجب أن يتم بتنسيق واضح قبل التحرك.", "استخدام واتساب لإرسال الموقع يجعل التواصل أسرع، خصوصاً في المناطق المزدحمة أو قرب الحرم."] },
        { heading: "نصيحة قبل الانطلاق", paragraphs: ["تأكد من إزالة الأشياء المهمة من السيارة وتحديد نقطة تسليم واضحة في مكة أو جدة."] },
      ],
      en: [
        { heading: "Details to prepare before booking", paragraphs: ["To request Jeddah to Makkah car transport, prepare the pickup location in Jeddah, destination in Makkah, car type, and preferred timing. This makes coordination faster.", "For Makkah to Jeddah car transport, send the same details so distance and pricing can be confirmed clearly."] },
        { heading: "When do you need intercity transport?", paragraphs: ["You may need it after a breakdown, after buying a car in another city, or when moving a vehicle to a workshop or home. Intercity car transport should be coordinated before dispatch.", "WhatsApp location sharing makes communication faster, especially in busy areas or near the Haram area."] },
        { heading: "Before the trip starts", paragraphs: ["Remove important items from the car and confirm a clear delivery point in Makkah or Jeddah."] },
      ],
      ur: [
        { heading: "بکنگ سے پہلے معلومات تیار کریں", paragraphs: ["جدہ سے مکہ سطحة طلب کرنے کے لیے جدہ میں پک اپ لوکیشن، مکہ میں منزل، گاڑی کی قسم اور مناسب وقت تیار رکھیں۔ اس سے رابطہ تیز ہوتا ہے۔", "مکہ سے جدہ گاڑی منتقلی کے لیے بھی یہی معلومات بھیجیں تاکہ راستہ اور قیمت واضح ہو سکے۔"] },
        { heading: "شہروں کے درمیان سروس کب چاہیے؟", paragraphs: ["خرابی، دوسری شہر سے گاڑی خریدنے، یا گاڑی کو ورکشاپ یا گھر منتقل کرنے کے لیے یہ سروس کام آتی ہے۔ جدہ سے مکہ منتقلی روانگی سے پہلے واضح رابطے سے بہتر ہوتی ہے۔", "واٹس ایپ لوکیشن خاص طور پر مصروف علاقوں یا حرم کے قریب رابطہ آسان بناتی ہے۔"] },
        { heading: "روانگی سے پہلے مشورہ", paragraphs: ["گاڑی سے ضروری سامان نکالیں اور مکہ یا جدہ میں واضح ڈلیوری پوائنٹ طے کریں۔"] },
      ],
    },
  },
  {
    slug: "tips-before-flatbed-car-transport",
    image: images.phoneMap,
    category: { ar: "سلامة", en: "Safety", ur: "حفاظت" },
    title: {
      ar: "أهم النصائح قبل نقل سيارتك بالسطحة",
      en: "Important Tips Before Transporting Your Car",
      ur: "گاڑی سطحة پر منتقل کرنے سے پہلے اہم مشورے",
    },
    excerpt: {
      ar: "نصائح بسيطة لتجهيز السيارة والموقع قبل وصول السائق.",
      en: "Simple tips to prepare the car and pickup point before the driver arrives.",
      ur: "ڈرائیور آنے سے پہلے گاڑی اور پک اپ پوائنٹ تیار کرنے کے آسان مشورے۔",
    },
    date: "2026-02-12",
    readTime: 5,
    content: {
      ar: [
        { heading: "جهز السيارة قبل وصول السائق", paragraphs: ["قبل وصول السطحة، أخرج الأغراض المهمة من السيارة، وصور حالة السيارة إذا كانت مصدومة أو متعطلة. هذه خطوة بسيطة لكنها مفيدة.", "إذا كانت السيارة في موقف ضيق، أخبر السائق مسبقاً حتى يتم اختيار أفضل طريقة للوصول."] },
        { heading: "حدد موقعاً واضحاً", paragraphs: ["إرسال اللوكيشن عبر واتساب يساعد السائق على الوصول بسرعة. اذكر أقرب معلم إذا كنت في حي مزدحم مثل البلد أو السلامة أو المروة.", "لخدمة سطحة مكة أو سطحة جدة، وضوح الموقع والوجهة هو أهم عامل لتسريع الطلب."] },
        { heading: "اتفق على السعر والوجهة", paragraphs: ["قبل التحرك، تأكد من السعر والوجهة النهائية واسم الورشة أو العنوان. هذا يجعل نقل السيارة بالسطحة أكثر ترتيباً."] },
      ],
      en: [
        { heading: "Prepare the car before pickup", paragraphs: ["Before the flatbed arrives, remove important items from the car and take photos if the vehicle is damaged or broken down. It is a simple but useful step.", "If the car is in a tight parking spot, tell the driver early so the best access point can be planned."] },
        { heading: "Share a clear location", paragraphs: ["WhatsApp location sharing helps the driver arrive faster. Mention a nearby landmark if you are in a busy district like Al Balad, Al Salamah, or Al Marwah.", "For car towing Jeddah or car towing Makkah, clear pickup and drop-off details are the fastest way to book."] },
        { heading: "Confirm price and destination", paragraphs: ["Before dispatch, confirm the price, final destination, workshop name, or address. This keeps flatbed car transport organized."] },
      ],
      ur: [
        { heading: "پک اپ سے پہلے گاڑی تیار کریں", paragraphs: ["سطحة آنے سے پہلے گاڑی سے ضروری سامان نکالیں اور اگر گاڑی خراب یا حادثہ زدہ ہے تو تصاویر لے لیں۔ یہ آسان مگر فائدہ مند قدم ہے۔", "اگر گاڑی تنگ پارکنگ میں ہے تو ڈرائیور کو پہلے بتائیں تاکہ پہنچنے کا بہتر راستہ طے ہو سکے۔"] },
        { heading: "واضح لوکیشن بھیجیں", paragraphs: ["واٹس ایپ لوکیشن ڈرائیور کو جلد پہنچنے میں مدد دیتی ہے۔ اگر آپ البلد، السلامہ یا المروہ جیسے مصروف علاقے میں ہیں تو قریبی نشان بھی بتائیں۔", "سطحة جدہ یا سطحة مکہ کے لیے واضح پک اپ اور ڈراپ آف معلومات بکنگ کو تیز بناتی ہیں۔"] },
        { heading: "قیمت اور منزل کنفرم کریں", paragraphs: ["روانگی سے پہلے قیمت، آخری منزل، ورکشاپ کا نام یا پتہ کنفرم کریں۔ اس سے فلیٹ بیڈ گاڑی منتقلی منظم رہتی ہے۔"] },
      ],
    },
  },
  {
    slug: "staha-north-jeddah-guide",
    image: images.truck,
    category: { ar: "مناطق جدة", en: "Jeddah Areas", ur: "جدہ علاقے" },
    title: {
      ar: "سطحة شمال جدة: متى تحتاجها وكيف تطلبها بسرعة؟",
      en: "North Jeddah Car Towing: When You Need It and How to Book",
      ur: "شمالی جدہ سطحة: کب چاہیے اور کیسے بک کریں؟",
    },
    excerpt: {
      ar: "دليل عملي لطلب سطحة في شمال جدة وأحياء أبحر والحمدانية والمناطق القريبة.",
      en: "A practical guide to booking car towing in North Jeddah, Obhur, Al Hamdaniyah, and nearby districts.",
      ur: "شمالی جدہ، ابحر، الحمدانیہ اور قریبی علاقوں میں سطحة بک کرنے کا عملی گائیڈ۔",
    },
    date: "2026-02-20",
    readTime: 5,
    content: {
      ar: [
        { heading: "متى تطلب سطحة شمال جدة؟", paragraphs: ["إذا تعطلت السيارة في أبحر، الحمدانية، طريق الملك، أو أي حي شمال جدة، فطلب سطحة قريبة من موقعك يوفر وقتاً ويقلل الضغط على السيارة.", "الأهم هو إرسال الموقع بدقة عبر واتساب مع تحديد الوجهة، سواء كانت ورشة أو منزل أو معرض سيارات."] },
        { heading: "كلمات بحث مفيدة للسائقين", paragraphs: ["كثير من العملاء يبحثون عن سطحة شمال جدة أو رقم سطحة جدة عند حدوث عطل مفاجئ. استخدم هذه الخدمة عندما تكون القيادة غير آمنة أو عندما تحتاج نقل السيارة لمسافة طويلة.", "تجهيز نوع السيارة وحالتها يساعد في تأكيد السعر ووقت الوصول بسرعة."] },
      ],
      en: [
        { heading: "When should you request towing in North Jeddah?", paragraphs: ["If your car breaks down in Obhur, Al Hamdaniyah, King Road, or any North Jeddah district, nearby car towing saves time and avoids extra stress on the vehicle.", "Send your exact WhatsApp location and destination, whether it is a workshop, home, or showroom."] },
        { heading: "Useful search terms for drivers", paragraphs: ["Many drivers search for North Jeddah towing or car towing Jeddah during sudden breakdowns. Use the service when driving is unsafe or the car needs a longer move.", "Preparing the car type and condition helps confirm price and arrival time quickly."] },
      ],
      ur: [
        { heading: "شمالی جدہ میں سطحة کب طلب کریں؟", paragraphs: ["اگر گاڑی ابحر، الحمدانیہ، کنگ روڈ یا شمالی جدہ کے کسی علاقے میں خراب ہو جائے تو قریبی سطحة وقت بچاتی ہے اور گاڑی پر اضافی دباؤ نہیں پڑتا۔", "واٹس ایپ پر صحیح لوکیشن اور منزل بھیجیں، چاہے ورکشاپ، گھر یا شوروم ہو۔"] },
        { heading: "ڈرائیورز کے لیے مفید سرچ الفاظ", paragraphs: ["بہت سے لوگ اچانک خرابی پر سطحة شمالی جدہ یا کار ٹوئنگ جدہ تلاش کرتے ہیں۔ جب گاڑی چلانا محفوظ نہ ہو تو سروس طلب کریں۔", "گاڑی کی قسم اور حالت بتانے سے قیمت اور وقت جلد واضح ہو جاتا ہے۔"] },
      ],
    },
  },
  {
    slug: "staha-south-jeddah-guide",
    image: images.roadside,
    category: { ar: "مناطق جدة", en: "Jeddah Areas", ur: "جدہ علاقے" },
    title: {
      ar: "سطحة جنوب جدة لنقل السيارات المتعطلة والمصدومة",
      en: "South Jeddah Towing for Breakdown and Accident Cars",
      ur: "جنوبی جدہ میں خراب اور حادثہ زدہ گاڑی کی سطحة",
    },
    excerpt: {
      ar: "متى تحتاج خدمة سطحة جنوب جدة وما المعلومات التي تسرع الوصول؟",
      en: "When to request South Jeddah towing and what details help the driver arrive faster.",
      ur: "جنوبی جدہ سطحة کب طلب کریں اور کون سی معلومات ڈرائیور کو جلد پہنچاتی ہیں۔",
    },
    date: "2026-02-27",
    readTime: 5,
    content: {
      ar: [
        { heading: "خدمة عملية في جنوب جدة", paragraphs: ["جنوب جدة يضم طرقاً وأحياء مختلفة، وقد تحتاج سطحة عند تعطل السيارة أو عند نقلها إلى ورشة. إرسال الموقع والوجهة هو أسرع طريقة للتنسيق.", "إذا كانت السيارة مصدومة، أخبر السائق بحالتها قبل التحرك حتى يتم التعامل معها بحذر."] },
        { heading: "كيف تختصر وقت الطلب؟", paragraphs: ["أرسل أقرب معلم، نوع السيارة، وهل السيارة تعمل أم لا. هذه التفاصيل تساعد في تحديد سطحة لنقل السيارات جدة بطريقة أوضح.", "لا تحاول قيادة السيارة إذا كان العطل يؤثر على الفرامل أو الإطارات أو نظام التوجيه."] },
      ],
      en: [
        { heading: "Practical service in South Jeddah", paragraphs: ["South Jeddah includes many districts and road types, and you may need towing after a breakdown or to move a car to a workshop. Sending location and destination is the fastest way to coordinate.", "If the car has accident damage, tell the driver before dispatch so it can be handled carefully."] },
        { heading: "How to reduce booking time", paragraphs: ["Send a nearby landmark, car type, and whether the vehicle can move. These details make Jeddah car transport clearer.", "Avoid driving if the issue affects brakes, tires, or steering."] },
      ],
      ur: [
        { heading: "جنوبی جدہ میں عملی سروس", paragraphs: ["جنوبی جدہ میں مختلف علاقے اور راستے ہیں، خراب گاڑی یا ورکشاپ منتقلی کے لیے سطحة کی ضرورت پڑ سکتی ہے۔ لوکیشن اور منزل بھیجنا سب سے تیز طریقہ ہے۔", "اگر گاڑی حادثہ زدہ ہے تو ڈرائیور کو روانگی سے پہلے بتائیں تاکہ احتیاط سے ہینڈل کیا جائے۔"] },
        { heading: "بکنگ وقت کیسے کم کریں؟", paragraphs: ["قریبی نشان، گاڑی کی قسم اور گاڑی چل سکتی ہے یا نہیں، یہ معلومات بھیجیں۔ اس سے جدہ کار ٹرانسپورٹ واضح ہوتی ہے۔", "اگر خرابی بریک، ٹائر یا اسٹیئرنگ سے متعلق ہے تو گاڑی نہ چلائیں۔"] },
      ],
    },
  },
  {
    slug: "accident-car-towing-jeddah",
    image: images.roadside,
    category: { ar: "حوادث", en: "Accident Transport", ur: "حادثہ ٹرانسپورٹ" },
    title: {
      ar: "نقل سيارة مصدومة في جدة: خطوات مهمة قبل وصول السطحة",
      en: "Accident Car Transport in Jeddah: Important Steps Before Pickup",
      ur: "جدہ میں حادثہ زدہ گاڑی منتقلی: پک اپ سے پہلے اہم اقدامات",
    },
    excerpt: {
      ar: "ما الذي تفعله بعد حادث بسيط أو ضرر يمنع قيادة السيارة بأمان؟",
      en: "What to do after a minor accident or damage that makes the car unsafe to drive.",
      ur: "معمولی حادثے یا ایسی خرابی کے بعد کیا کریں جس سے گاڑی چلانا محفوظ نہ رہے۔",
    },
    date: "2026-03-05",
    readTime: 6,
    content: {
      ar: [
        { heading: "السلامة أولاً", paragraphs: ["بعد أي حادث، ابتعد عن مسار السيارات إذا كان ذلك ممكناً وشغل إشارات التنبيه. لا تحاول تحريك سيارة مصدومة إذا كان الضرر في الإطارات أو نظام التوجيه.", "اتصل أو أرسل واتساب مع موقعك وصور عامة لحالة السيارة إذا أمكن."] },
        { heading: "معلومات تساعد في النقل", paragraphs: ["اذكر هل السيارة تتحرك أم لا، وهل تحتاج النقل إلى ورشة أو منزل. خدمة نقل السيارات المصدومة في جدة تعتمد على وضوح هذه التفاصيل.", "السعر ووقت الوصول يتحددان بعد معرفة موقع الاستلام والوجهة ونوع السيارة."] },
      ],
      en: [
        { heading: "Safety first", paragraphs: ["After an accident, move away from traffic when possible and turn on hazard lights. Do not move an accident-damaged car if tires or steering are affected.", "Call or send WhatsApp with your location and general photos of the car condition when possible."] },
        { heading: "Details that help transport", paragraphs: ["Mention whether the car can move and whether it should go to a workshop or home. Accident car transport in Jeddah depends on clear details.", "Price and arrival time are confirmed after pickup, destination, and car type are known."] },
      ],
      ur: [
        { heading: "حفاظت پہلے", paragraphs: ["حادثے کے بعد ممکن ہو تو ٹریفک سے دور ہو جائیں اور ہیزرڈ لائٹس آن کریں۔ اگر ٹائر یا اسٹیئرنگ متاثر ہیں تو گاڑی حرکت نہ دیں۔", "کال کریں یا واٹس ایپ پر لوکیشن اور گاڑی کی عمومی تصاویر بھیجیں۔"] },
        { heading: "منتقلی میں مدد دینے والی معلومات", paragraphs: ["بتائیں گاڑی چل سکتی ہے یا نہیں، اور ورکشاپ یا گھر کہاں لے جانی ہے۔ جدہ میں حادثہ زدہ گاڑی کی منتقلی واضح معلومات پر آسان ہوتی ہے۔", "قیمت اور آمد کا وقت پک اپ، منزل اور گاڑی کی قسم کے بعد کنفرم ہوتا ہے۔"] },
      ],
    },
  },
  {
    slug: "roadside-pickup-jeddah-makkah",
    image: images.road,
    category: { ar: "مساعدة الطريق", en: "Roadside Pickup", ur: "روڈ سائیڈ پک اپ" },
    title: {
      ar: "استلام سيارة من الطريق بين جدة ومكة",
      en: "Roadside Car Pickup Between Jeddah and Makkah",
      ur: "جدہ اور مکہ کے درمیان روڈ سائیڈ کار پک اپ",
    },
    excerpt: {
      ar: "كيف تطلب استلام السيارة من طريق قريب وتحدد الموقع بدقة؟",
      en: "How to request roadside pickup and share an accurate location.",
      ur: "روڈ سائیڈ پک اپ کیسے طلب کریں اور صحیح لوکیشن کیسے بھیجیں۔",
    },
    date: "2026-03-12",
    readTime: 5,
    content: {
      ar: [
        { heading: "تحديد الموقع بدقة", paragraphs: ["عند تعطل السيارة على الطريق بين جدة ومكة، أرسل الموقع عبر واتساب واذكر اتجاه الطريق وأقرب مخرج أو محطة. هذه التفاصيل مهمة جداً للوصول السريع.", "لا تقف بجانب السيارة إذا كان المكان غير آمن، وانتظر في نقطة بعيدة عن حركة المرور."] },
        { heading: "ما الذي يحدد وقت الوصول؟", paragraphs: ["وقت الوصول يعتمد على موقعك، حالة الطريق، وتوفر السائق. لذلك فإن إرسال موقع واضح يساعد أكثر من وصف طويل غير دقيق.", "الخدمة مناسبة لنقل سيارة متعطلة أو سيارة لا يمكن قيادتها بأمان."] },
      ],
      en: [
        { heading: "Sharing the exact location", paragraphs: ["If your car breaks down on a road between Jeddah and Makkah, share your WhatsApp location and mention road direction, nearest exit, or station. These details matter for fast arrival.", "Do not stand next to the car if the spot is unsafe. Wait away from moving traffic."] },
        { heading: "What affects arrival time?", paragraphs: ["Arrival depends on your location, road condition, and driver availability. A clear map location helps more than a long unclear description.", "The service is suitable for broken down vehicles or cars that cannot be driven safely."] },
      ],
      ur: [
        { heading: "صحیح لوکیشن بھیجنا", paragraphs: ["اگر جدہ اور مکہ کے راستے میں گاڑی خراب ہو جائے تو واٹس ایپ لوکیشن، راستے کی سمت، قریبی ایگزٹ یا اسٹیشن بتائیں۔ یہ معلومات فوری آمد کے لیے اہم ہیں۔", "اگر جگہ محفوظ نہیں تو گاڑی کے ساتھ نہ کھڑے ہوں، ٹریفک سے دور انتظار کریں۔"] },
        { heading: "آمد کا وقت کس پر منحصر ہے؟", paragraphs: ["آمد کا وقت لوکیشن، روڈ کنڈیشن اور ڈرائیور کی دستیابی پر منحصر ہے۔ واضح میپ لوکیشن لمبی غیر واضح وضاحت سے بہتر ہے۔", "یہ سروس خراب یا غیر محفوظ گاڑی کی منتقلی کے لیے مناسب ہے۔"] },
      ],
    },
  },
  {
    slug: "makkah-haram-area-car-towing",
    image: images.city,
    category: { ar: "مكة", en: "Makkah", ur: "مکہ" },
    title: {
      ar: "سطحة قرب الحرم في مكة: نصائح لتحديد نقطة الاستلام",
      en: "Car Towing Near Makkah Haram Area: Pickup Location Tips",
      ur: "مکہ حرم کے قریب سطحة: پک اپ لوکیشن کے مشورے",
    },
    excerpt: {
      ar: "نصائح للتنسيق داخل المناطق المزدحمة في مكة وتحديد موقع استلام مناسب.",
      en: "Tips for coordinating pickup in busy Makkah areas and choosing a clear pickup point.",
      ur: "مکہ کے مصروف علاقوں میں پک اپ کوآرڈینیشن اور واضح جگہ منتخب کرنے کے مشورے۔",
    },
    date: "2026-03-19",
    readTime: 5,
    content: {
      ar: [
        { heading: "اختيار نقطة استلام مناسبة", paragraphs: ["المناطق القريبة من الحرم قد تكون مزدحمة، لذلك من الأفضل اختيار نقطة استلام واضحة ومسموح الوقوف فيها. أرسل الموقع واذكر أقرب معلم أو بوابة أو شارع رئيسي.", "خدمة سطحة مكة تصبح أسرع عندما تكون نقطة الاستلام سهلة الوصول."] },
        { heading: "ماذا ترسل قبل وصول السائق؟", paragraphs: ["أرسل نوع السيارة، حالة السيارة، والوجهة المطلوبة داخل مكة أو إلى جدة. إذا كنت تحتاج نقل سيارة من مكة إلى جدة، وضح وقت التحرك المناسب.", "تأكيد التفاصيل قبل الإرسال يقلل التأخير داخل المناطق المزدحمة."] },
      ],
      en: [
        { heading: "Choosing a suitable pickup point", paragraphs: ["Areas near the Haram can be busy, so choose a clear pickup point where stopping is possible. Send the location and mention the nearest landmark, gate, or main street.", "Car towing in Makkah is faster when the pickup point is easy to reach."] },
        { heading: "What to send before driver arrival", paragraphs: ["Send car type, vehicle condition, and destination inside Makkah or toward Jeddah. If you need Makkah to Jeddah car transport, confirm suitable timing.", "Confirming details early reduces delays in busy areas."] },
      ],
      ur: [
        { heading: "مناسب پک اپ پوائنٹ منتخب کریں", paragraphs: ["حرم کے قریب علاقے مصروف ہو سکتے ہیں، اس لیے ایسی واضح جگہ منتخب کریں جہاں رکنا ممکن ہو۔ لوکیشن، قریبی نشان، گیٹ یا مین روڈ بتائیں۔", "مکہ میں سطحة اس وقت تیز ہوتی ہے جب پک اپ پوائنٹ آسان ہو۔"] },
        { heading: "ڈرائیور آنے سے پہلے کیا بھیجیں؟", paragraphs: ["گاڑی کی قسم، حالت اور مکہ کے اندر یا جدہ کی طرف منزل بتائیں۔ اگر مکہ سے جدہ گاڑی منتقلی چاہیے تو مناسب وقت کنفرم کریں۔", "تفصیلات پہلے کنفرم کرنے سے مصروف علاقوں میں تاخیر کم ہوتی ہے۔"] },
      ],
    },
  },
  {
    slug: "car-towing-al-safa-al-marwah-jeddah",
    image: images.phoneMap,
    category: { ar: "أحياء جدة", en: "Jeddah Districts", ur: "جدہ اضلاع" },
    title: {
      ar: "سطحة الصفا والمروة في جدة: خدمة قريبة للأحياء السكنية",
      en: "Car Towing in Al Safa and Al Marwah Jeddah",
      ur: "جدہ الصفا اور المروہ میں کار ٹوئنگ",
    },
    excerpt: {
      ar: "كيف تطلب سطحة داخل أحياء الصفا والمروة والمناطق القريبة؟",
      en: "How to request towing in Al Safa, Al Marwah, and nearby residential districts.",
      ur: "الصفا، المروہ اور قریبی رہائشی علاقوں میں سطحة کیسے طلب کریں۔",
    },
    date: "2026-03-26",
    readTime: 5,
    content: {
      ar: [
        { heading: "خدمة داخل الأحياء السكنية", paragraphs: ["أحياء الصفا والمروة تحتاج أحياناً إلى تنسيق دقيق بسبب المواقف والشوارع الداخلية. أرسل رقم المبنى أو أقرب مسجد أو متجر معروف بجانب الموقع.", "إذا كانت السيارة داخل موقف ضيق، أخبر السائق قبل الوصول حتى يتم ترتيب الاستلام بشكل أفضل."] },
        { heading: "نقل إلى الورشة أو المنزل", paragraphs: ["يمكن نقل السيارة إلى ورشة قريبة أو إلى المنزل أو إلى أي وجهة داخل جدة. خدمة سطحة لنقل السيارات جدة تعتمد على وضوح الوجهة ونوع السيارة.", "التواصل عبر واتساب يجعل تأكيد الموقع والسعر أسرع."] },
      ],
      en: [
        { heading: "Service inside residential districts", paragraphs: ["Al Safa and Al Marwah sometimes need careful coordination because of parking and inner streets. Send the building number or a nearby mosque or known store.", "If the car is in a tight parking spot, tell the driver before arrival so pickup can be planned better."] },
        { heading: "Transport to workshop or home", paragraphs: ["The car can be moved to a nearby workshop, home, or any destination inside Jeddah. Jeddah car transport depends on clear destination and car type.", "WhatsApp communication makes location and price confirmation faster."] },
      ],
      ur: [
        { heading: "رہائشی علاقوں کے اندر سروس", paragraphs: ["الصفا اور المروہ میں پارکنگ اور اندرونی گلیوں کی وجہ سے درست رابطہ ضروری ہوتا ہے۔ بلڈنگ نمبر، قریبی مسجد یا معروف دکان بتائیں۔", "اگر گاڑی تنگ پارکنگ میں ہے تو ڈرائیور کو پہلے بتائیں تاکہ پک اپ بہتر ہو سکے۔"] },
        { heading: "ورکشاپ یا گھر تک منتقلی", paragraphs: ["گاڑی قریبی ورکشاپ، گھر یا جدہ کے اندر کسی بھی منزل تک منتقل کی جا سکتی ہے۔ جدہ کار ٹرانسپورٹ کے لیے منزل اور گاڑی کی قسم واضح ہونی چاہیے۔", "واٹس ایپ رابطہ لوکیشن اور قیمت جلد کنفرم کرتا ہے۔"] },
      ],
    },
  },
  {
    slug: "towing-luxury-cars-jeddah",
    image: images.truck,
    category: { ar: "نقل آمن", en: "Safe Transport", ur: "محفوظ منتقلی" },
    title: {
      ar: "نقل السيارات الفاخرة بالسطحة في جدة ومكة",
      en: "Transporting Luxury Cars by Flatbed in Jeddah and Makkah",
      ur: "جدہ اور مکہ میں لگژری گاڑیوں کی فلیٹ بیڈ منتقلی",
    },
    excerpt: {
      ar: "نصائح مهمة عند نقل سيارة فاخرة أو رياضية داخل جدة أو بين جدة ومكة.",
      en: "Important tips for moving a luxury or sports car in Jeddah or between Jeddah and Makkah.",
      ur: "جدہ یا جدہ مکہ کے درمیان لگژری یا اسپورٹس گاڑی منتقل کرنے کے اہم مشورے۔",
    },
    date: "2026-04-02",
    readTime: 5,
    content: {
      ar: [
        { heading: "العناية قبل التحميل", paragraphs: ["السيارات الفاخرة تحتاج تواصلاً واضحاً قبل النقل. أرسل صوراً عامة للسيارة وحدد إذا كانت منخفضة أو تحتاج حذراً إضافياً أثناء التحميل.", "تأكيد الوجهة والسعر قبل التحرك يجعل نقل السيارة أكثر هدوءاً وتنظيماً."] },
        { heading: "متى تستخدم السطحة؟", paragraphs: ["استخدم سطحة لنقل السيارات إذا كانت القيادة قد تسبب ضرراً أو إذا كان النقل بين جدة ومكة لمسافة طويلة. الهدف هو تقليل المخاطر على السيارة.", "لا تضف أي أغراض ثمينة داخل السيارة قبل النقل."] },
      ],
      en: [
        { heading: "Care before loading", paragraphs: ["Luxury cars need clear communication before transport. Send general photos and mention if the car is low or needs extra care during loading.", "Confirming destination and price before dispatch keeps the move organized."] },
        { heading: "When should you use a flatbed?", paragraphs: ["Use flatbed car transport if driving may cause damage or if the move between Jeddah and Makkah is long. The goal is to reduce vehicle risk.", "Do not leave valuable items inside the car before transport."] },
      ],
      ur: [
        { heading: "لوڈنگ سے پہلے احتیاط", paragraphs: ["لگژری گاڑیوں کے لیے منتقلی سے پہلے واضح رابطہ ضروری ہے۔ گاڑی کی عمومی تصاویر بھیجیں اور بتائیں اگر گاڑی نیچی ہے یا اضافی احتیاط چاہیے۔", "روانگی سے پہلے منزل اور قیمت کنفرم کرنا منتقلی کو منظم بناتا ہے۔"] },
        { heading: "فلیٹ بیڈ کب استعمال کریں؟", paragraphs: ["اگر گاڑی چلانے سے نقصان ہو سکتا ہے یا جدہ اور مکہ کے درمیان لمبا فاصلہ ہے تو فلیٹ بیڈ کار ٹرانسپورٹ بہتر ہے۔ مقصد گاڑی کا خطرہ کم کرنا ہے۔", "منتقلی سے پہلے قیمتی سامان گاڑی میں نہ چھوڑیں۔"] },
      ],
    },
  },
  {
    slug: "workshop-car-transport-jeddah",
    image: images.roadside,
    category: { ar: "ورش", en: "Workshop Transport", ur: "ورکشاپ منتقلی" },
    title: {
      ar: "نقل السيارة إلى الورشة في جدة: متى يكون أفضل من القيادة؟",
      en: "Moving a Car to a Workshop in Jeddah: When Towing Is Better",
      ur: "جدہ میں گاڑی ورکشاپ لے جانا: سطحة کب بہتر ہے؟",
    },
    excerpt: {
      ar: "حالات يكون فيها نقل السيارة بالسطحة أكثر أماناً من قيادتها إلى الورشة.",
      en: "Situations where flatbed transport is safer than driving the car to a workshop.",
      ur: "وہ حالات جہاں گاڑی کو ورکشاپ تک چلانے کے بجائے سطحة بہتر ہے۔",
    },
    date: "2026-04-09",
    readTime: 5,
    content: {
      ar: [
        { heading: "لا تقود السيارة في هذه الحالات", paragraphs: ["إذا كان العطل في الفرامل أو حرارة المحرك أو الإطارات أو نظام التوجيه، فقيادة السيارة إلى الورشة قد تزيد الضرر. اطلب سطحة لنقل السيارة بأمان.", "حتى لو كانت الورشة قريبة، السلامة أهم من اختصار المسافة."] },
        { heading: "ما الذي يحتاجه السائق؟", paragraphs: ["أرسل اسم الورشة، موقعها، وموقع السيارة الحالي. إذا كان هناك موعد مع الورشة، اذكر الوقت حتى يتم ترتيب النقل.", "هذه التفاصيل تجعل نقل سيارات جدة إلى الورشة أسرع وأكثر وضوحاً."] },
      ],
      en: [
        { heading: "Do not drive in these cases", paragraphs: ["If the issue involves brakes, engine overheating, tires, or steering, driving to the workshop can cause more damage. Request flatbed transport instead.", "Even if the workshop is near, safety matters more than saving a short distance."] },
        { heading: "What does the driver need?", paragraphs: ["Send the workshop name, its location, and the current car location. If there is a workshop appointment, mention the time.", "These details make Jeddah workshop car transport faster and clearer."] },
      ],
      ur: [
        { heading: "ان حالات میں گاڑی نہ چلائیں", paragraphs: ["اگر خرابی بریک، انجن ہیٹ، ٹائر یا اسٹیئرنگ سے متعلق ہے تو ورکشاپ تک گاڑی چلانا مزید نقصان کر سکتا ہے۔ فلیٹ بیڈ منتقلی طلب کریں۔", "ورکشاپ قریب بھی ہو تو حفاظت زیادہ اہم ہے۔"] },
        { heading: "ڈرائیور کو کیا چاہیے؟", paragraphs: ["ورکشاپ کا نام، لوکیشن اور گاڑی کی موجودہ جگہ بھیجیں۔ اگر ورکشاپ اپائنٹمنٹ ہے تو وقت بھی بتائیں۔", "یہ معلومات جدہ میں ورکشاپ کار ٹرانسپورٹ کو تیز اور واضح بناتی ہیں۔"] },
      ],
    },
  },
  {
    slug: "airport-road-car-towing-jeddah",
    image: images.road,
    category: { ar: "طرق جدة", en: "Jeddah Roads", ur: "جدہ روڈز" },
    title: {
      ar: "سطحة طريق المطار جدة: ماذا تفعل عند تعطل السيارة؟",
      en: "Airport Road Jeddah Towing: What to Do After a Breakdown",
      ur: "ایئرپورٹ روڈ جدہ سطحة: گاڑی خراب ہو تو کیا کریں؟",
    },
    excerpt: {
      ar: "خطوات سريعة إذا تعطلت السيارة على طريق المطار أو الطرق القريبة في جدة.",
      en: "Quick steps if your car breaks down on Airport Road or nearby Jeddah roads.",
      ur: "ایئرپورٹ روڈ یا قریبی جدہ راستوں پر گاڑی خراب ہو جائے تو فوری اقدامات۔",
    },
    date: "2026-04-16",
    readTime: 4,
    content: {
      ar: [
        { heading: "ابق في مكان آمن", paragraphs: ["طريق المطار في جدة قد يكون مزدحماً، لذلك حاول التوقف في مكان آمن وشغل إشارات التنبيه. لا تنتظر في مسار السيارات.", "أرسل اللوكيشن عبر واتساب مع اتجاه الطريق وأقرب مخرج أو معلم واضح."] },
        { heading: "لماذا الموقع مهم؟", paragraphs: ["تحديد الموقع بدقة يساعد سائق السطحة على الوصول للمسار الصحيح، خصوصاً على الطرق الكبيرة التي لها اتجاهات متعددة.", "اذكر الوجهة المطلوبة، سواء ورشة أو منزل أو نقل إلى منطقة أخرى."] },
      ],
      en: [
        { heading: "Stay in a safe place", paragraphs: ["Airport Road in Jeddah can be busy, so stop safely and turn on hazard lights. Do not wait in a traffic lane.", "Send WhatsApp location with road direction and nearest exit or landmark."] },
        { heading: "Why location matters", paragraphs: ["Accurate location helps the towing driver reach the correct side of the road, especially on larger roads with multiple directions.", "Mention the destination, whether workshop, home, or another district."] },
      ],
      ur: [
        { heading: "محفوظ جگہ پر رہیں", paragraphs: ["جدہ ایئرپورٹ روڈ مصروف ہو سکتی ہے، اس لیے محفوظ جگہ رکیں اور ہیزرڈ لائٹس آن کریں۔ ٹریفک لین میں انتظار نہ کریں۔", "واٹس ایپ لوکیشن، روڈ کی سمت اور قریبی ایگزٹ یا نشان بھیجیں۔"] },
        { heading: "لوکیشن کیوں اہم ہے؟", paragraphs: ["درست لوکیشن ڈرائیور کو صحیح سائیڈ پر پہنچنے میں مدد دیتی ہے، خاص طور پر بڑے راستوں پر۔", "منزل بتائیں، چاہے ورکشاپ، گھر یا کوئی دوسرا علاقہ ہو۔"] },
      ],
    },
  },
  {
    slug: "whatsapp-staha-booking-guide",
    image: images.phoneMap,
    category: { ar: "واتساب", en: "WhatsApp Booking", ur: "واٹس ایپ بکنگ" },
    title: {
      ar: "طريقة طلب سطحة عبر واتساب في جدة ومكة",
      en: "How to Book Car Towing by WhatsApp in Jeddah and Makkah",
      ur: "جدہ اور مکہ میں واٹس ایپ سے سطحة کیسے بک کریں",
    },
    excerpt: {
      ar: "رسالة جاهزة ومعلومات مهمة لإرسالها عند طلب سطحة عبر واتساب.",
      en: "A simple message format and important details to send when booking by WhatsApp.",
      ur: "واٹس ایپ بکنگ کے لیے آسان پیغام اور اہم معلومات۔",
    },
    date: "2026-04-23",
    readTime: 4,
    content: {
      ar: [
        { heading: "ماذا تكتب في الرسالة؟", paragraphs: ["اكتب: أحتاج سطحة، هذا موقعي، وهذه الوجهة، ونوع السيارة كذا. أضف هل السيارة تعمل أو لا، وهل هي مصدومة.", "هذه الرسالة المختصرة تساعد في الرد السريع وتأكيد السعر بوضوح."] },
        { heading: "لماذا واتساب مفيد؟", paragraphs: ["واتساب يسمح بإرسال الموقع والصور والوجهة في نفس المحادثة. هذا يجعله مناسباً لطلب سطحة قريبة مني جدة أو سطحة قريبة مني مكة.", "كلما كانت الرسالة أوضح، أصبح التنسيق أسرع."] },
      ],
      en: [
        { heading: "What should the message say?", paragraphs: ["Write: I need car towing, this is my location, this is the destination, and this is the car type. Add whether the car can move or has accident damage.", "This short message helps with fast replies and clear pricing."] },
        { heading: "Why WhatsApp helps", paragraphs: ["WhatsApp lets you send location, photos, and destination in one chat. It is useful when searching for nearby towing in Jeddah or Makkah.", "The clearer the message, the faster the coordination."] },
      ],
      ur: [
        { heading: "پیغام میں کیا لکھیں؟", paragraphs: ["لکھیں: مجھے سطحة چاہیے، یہ میری لوکیشن ہے، یہ منزل ہے، اور گاڑی کی قسم یہ ہے۔ یہ بھی بتائیں گاڑی چل سکتی ہے یا حادثہ زدہ ہے۔", "یہ مختصر پیغام تیز جواب اور واضح قیمت میں مدد دیتا ہے۔"] },
        { heading: "واٹس ایپ کیوں مفید ہے؟", paragraphs: ["واٹس ایپ پر لوکیشن، تصاویر اور منزل ایک ہی چیٹ میں بھیجی جا سکتی ہیں۔ یہ جدہ یا مکہ میں قریبی سطحة کے لیے مفید ہے۔", "پیغام جتنا واضح ہو گا، رابطہ اتنا تیز ہو گا۔"] },
      ],
    },
  },
  {
    slug: "night-car-towing-jeddah-makkah",
    image: images.road,
    category: { ar: "طوارئ", en: "Emergency", ur: "ایمرجنسی" },
    title: {
      ar: "سطحة ليلية في جدة ومكة: نصائح عند تعطل السيارة ليلاً",
      en: "Night Car Towing in Jeddah and Makkah: Safety Tips",
      ur: "جدہ اور مکہ میں رات کی سطحة: حفاظتی مشورے",
    },
    excerpt: {
      ar: "كيف تتصرف عند تعطل السيارة ليلاً وتحتاج نقل آمن وسريع؟",
      en: "How to act when your car breaks down at night and you need safe transport.",
      ur: "رات کو گاڑی خراب ہو جائے اور محفوظ منتقلی چاہیے تو کیا کریں۔",
    },
    date: "2026-04-30",
    readTime: 5,
    content: {
      ar: [
        { heading: "السلامة في الليل", paragraphs: ["في الليل، الرؤية أقل والمخاطر أعلى. شغل إشارات التنبيه، وابق في مكان مضاء إذا أمكن، وأرسل موقعك الدقيق عبر واتساب.", "إذا كنت على طريق سريع، ابتعد عن السيارة وانتظر في مكان آمن."] },
        { heading: "طلب الخدمة بسرعة", paragraphs: ["عند طلب سطحة ليلية، اذكر أقرب معلم واتجاه الطريق ونوع السيارة. هذه التفاصيل تساعد السائق على الوصول بشكل أسرع.", "الخدمة مناسبة للأعطال المفاجئة ونقل السيارات إلى المنزل أو الورشة."] },
      ],
      en: [
        { heading: "Night safety", paragraphs: ["At night, visibility is lower and risk is higher. Turn on hazard lights, stay in a lit area when possible, and send your exact WhatsApp location.", "If you are on a highway, move away from the car and wait safely."] },
        { heading: "Requesting service quickly", paragraphs: ["When booking night towing, mention the nearest landmark, road direction, and car type. These details help the driver arrive faster.", "The service is useful for sudden breakdowns and moving cars to home or workshop."] },
      ],
      ur: [
        { heading: "رات کی حفاظت", paragraphs: ["رات کو روشنی کم اور خطرہ زیادہ ہوتا ہے۔ ہیزرڈ لائٹس آن کریں، ممکن ہو تو روشن جگہ رہیں، اور واٹس ایپ پر صحیح لوکیشن بھیجیں۔", "اگر ہائی وے پر ہیں تو گاڑی سے دور محفوظ جگہ انتظار کریں۔"] },
        { heading: "جلدی سروس طلب کرنا", paragraphs: ["رات کی سطحة بک کرتے وقت قریبی نشان، روڈ کی سمت اور گاڑی کی قسم بتائیں۔ یہ معلومات ڈرائیور کو جلد پہنچاتی ہیں۔", "یہ سروس اچانک خرابی اور گاڑی کو گھر یا ورکشاپ لے جانے کے لیے مفید ہے۔"] },
      ],
    },
  },
  {
    slug: "family-car-breakdown-makkah-road",
    image: images.city,
    category: { ar: "سلامة العائلة", en: "Family Safety", ur: "فیملی سیفٹی" },
    title: {
      ar: "تعطل سيارة العائلة على طريق مكة: ماذا تفعل؟",
      en: "Family Car Breakdown on Makkah Road: What Should You Do?",
      ur: "مکہ روڈ پر فیملی کار خراب ہو جائے تو کیا کریں؟",
    },
    excerpt: {
      ar: "نصائح آمنة للعائلات عند تعطل السيارة على طريق مكة أو الطرق القريبة.",
      en: "Safe tips for families when a car breaks down on Makkah Road or nearby routes.",
      ur: "مکہ روڈ یا قریبی راستوں پر فیملی کار خراب ہو تو محفوظ مشورے۔",
    },
    date: "2026-05-07",
    readTime: 5,
    content: {
      ar: [
        { heading: "حافظ على سلامة الركاب", paragraphs: ["إذا تعطلت سيارة العائلة، اجعل الركاب في مكان آمن بعيداً عن الطريق. شغل إشارات التنبيه ولا تقف خلف السيارة مباشرة.", "أرسل الموقع عبر واتساب وحدد عدد الركاب إذا كان ذلك مهماً للتنسيق."] },
        { heading: "اختيار وجهة واضحة", paragraphs: ["حدد هل تريد نقل السيارة إلى المنزل أو الورشة أو مدينة أخرى. نقل سيارة من جدة إلى مكة أو العكس يحتاج وجهة دقيقة وسعراً واضحاً قبل التحرك.", "لا تحاول إصلاح السيارة على طريق مزدحم إذا لم يكن المكان آمناً."] },
      ],
      en: [
        { heading: "Keep passengers safe", paragraphs: ["If a family car breaks down, keep passengers in a safe place away from the road. Turn on hazard lights and avoid standing directly behind the car.", "Send your WhatsApp location and mention passenger needs if coordination is required."] },
        { heading: "Choose a clear destination", paragraphs: ["Decide whether the car should go home, to a workshop, or to another city. Jeddah to Makkah or Makkah to Jeddah car transport needs a clear destination and quote before dispatch.", "Do not try repairs on a busy road if the place is unsafe."] },
      ],
      ur: [
        { heading: "مسافروں کی حفاظت کریں", paragraphs: ["اگر فیملی کار خراب ہو جائے تو مسافروں کو روڈ سے دور محفوظ جگہ رکھیں۔ ہیزرڈ لائٹس آن کریں اور گاڑی کے پیچھے کھڑے نہ ہوں۔", "واٹس ایپ لوکیشن بھیجیں اور اگر رابطے کے لیے ضروری ہو تو مسافروں کی ضرورت بتائیں۔"] },
        { heading: "واضح منزل منتخب کریں", paragraphs: ["طے کریں گاڑی گھر، ورکشاپ یا دوسرے شہر لے جانی ہے۔ جدہ سے مکہ یا مکہ سے جدہ منتقلی کے لیے واضح منزل اور قیمت ضروری ہے۔", "مصروف روڈ پر جگہ محفوظ نہ ہو تو گاڑی ٹھیک کرنے کی کوشش نہ کریں۔"] },
      ],
    },
  },
];
