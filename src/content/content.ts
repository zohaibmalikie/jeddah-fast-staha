import { Car, Clock, MapPin, MessageCircle, Shield, Sparkles, Truck, Wrench } from "lucide-react";
import { Locale } from "@/lib/site";

export const images = {
  hero:
    "https://images.unsplash.com/photo-1742069028920-c2acf52aaa9e?w=1400&h=1000&fit=crop&auto=format",
  truck:
    "https://images.unsplash.com/photo-1742069029207-0aacf8fa4401?w=1200&h=800&fit=crop&auto=format",
  roadside:
    "https://images.unsplash.com/photo-1601508836900-ee2aa7840a7b?w=1200&h=800&fit=crop&auto=format",
  city:
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1200&h=800&fit=crop&auto=format",
  road:
    "https://images.unsplash.com/photo-1484536831193-ff11d0792d3d?w=1200&h=800&fit=crop&auto=format",
  workshop:
    "https://images.unsplash.com/photo-1632823471565-1ecdf5c2f342?w=1200&h=800&fit=crop&auto=format",
  highway:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop&auto=format",
  phoneMap:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=800&fit=crop&auto=format",
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
    "التواصل كان سريعاً ووصلت السطحة للموقع بدون تعقيد.",
    "خدمة واضحة وسعر مناسب، تم نقل السيارة للورشة بأمان.",
    "حجزت عبر واتساب وتم تنسيق الموقع والوجهة بسهولة.",
  ],
  en: [
    "Fast communication and simple location coordination.",
    "Clear service and fair price for moving the car to the workshop.",
    "WhatsApp booking made the pickup and drop-off easy.",
  ],
  ur: [
    "رابطہ تیز تھا اور لوکیشن آسانی سے طے ہوگئی۔",
    "سروس واضح اور قیمت مناسب تھی، گاڑی محفوظ ورکشاپ پہنچی۔",
    "واٹس ایپ بکنگ سے پک اپ اور ڈراپ آف آسان ہوگیا۔",
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
];
