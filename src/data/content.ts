import type { Category, Language, Localized } from './types.ts'

// OWNER SETTINGS — replace the marked values before publishing.
export const business = {
  name: 'BeeBites',
  arabicName: 'بي بايتس',
  tagline: 'خلية نحل . مخبوزات',
  phone: '00962778307826', // International digits only, e.g. 9627XXXXXXXX.
  siteUrl: 'https://SITE_URL_PLACEHOLDER.example',
  instagram: 'https://www.instagram.com/BeeBites.Jo/',
  instagramHandle: '@BeeBites.Jo',
  facebook: 'https://www.facebook.com/FACEBOOK_PAGE_PLACEHOLDER',
  logo: '/brand/logo.jpg',
  socialImage: '/brand/logo.jpg',
  logoSource: 'src/assets/WhatsApp Image 2026-10-30 at 1.26.02 AM.jpeg',
  socialImageSource: 'src/assets/WhatsApp Image 2026-10-30 at 1.26.02 AM.jpeg',
  sampleContent: true, // Set false only after replacing/approving all sample content.
  heroImage: '/images/honeycomb-placeholder.webp',
  gallery: [
    {
      src: '/images/honeycomb-placeholder.webp',
      alt: { ar: 'صورة توضيحية لخلية نحل بالعسل', en: 'Sample honey-glazed honeycomb bread' },
    },
    {
      src: '/images/cookies-placeholder.webp',
      alt: { ar: 'صورة توضيحية لكوكيز منزلية', en: 'Sample homemade chocolate cookies' },
    },
    {
      src: '/images/cinnamon-placeholder.webp',
      alt: { ar: 'صورة توضيحية لمخبوزات طازجة', en: 'Sample golden pastries fresh from the oven' },
    },
    {
      src: '/images/savory-placeholder.webp',
      alt: { ar: 'صورة توضيحية لمخبوزات على طاولة', en: 'Sample artisan bakes on a rustic table' },
    },
  ] satisfies { src: string; alt: Localized }[],
}

interface Copy {
  skip: string
  announcement: string
  navigation: { id: string; label: string }[]
  navLabel: string
  menuOpen: string
  menuClose: string
  languageToggle: string
  home: string
  order: string
  orderShort: string
  orderThis: string
  orderProduct: string
  message: string
  productMessage: string
  hero: {
    eyebrow: string
    headline: string
    accent: string
    description: string
    menu: string
    note: string
    seal: string
    sealDetail: string
    imageAlt: string
    imageCaption: string
  }
  promises: string[]
  signature: {
    eyebrow: string
    heading: string
    description: string
    details: string[]
    caption: string
  }
  menu: {
    eyebrow: string
    heading: string
    description: string
    filters: Record<Category | 'all', string>
    filterLabel: string
    sample: string
    priceNote: string
    priceOnRequest: string
    count: string
    imagePlaceholder: string
  }
  how: {
    eyebrow: string
    heading: string
    description: string
    steps: { title: string; description: string }[]
    note: string
  }
  story: {
    eyebrow: string
    heading: string
    paragraphs: string[]
    values: string[]
    signature: string
    artCaption: string
  }
  gallery: { eyebrow: string; heading: string; description: string; cta: string; sample: string }
  reviews: {
    eyebrow: string
    heading: string
    sample: string
    previous: string
    next: string
    position: string
    items: { quote: string; name: string; detail: string }[]
  }
  faq: {
    eyebrow: string
    heading: string
    description: string
    items: { question: string; answer: string }[]
  }
  final: { eyebrow: string; heading: string; description: string; note: string }
  footer: {
    description: string
    explore: string
    social: string
    delivery: string
    deliveryDetail: string
    copyright: string
    made: string
    backTop: string
    facebook: string
    instagram: string
  }
  seo: { title: string; description: string }
}

export const content: Record<Language, Copy> = {
  ar: {
    skip: 'انتقل إلى المحتوى',
    announcement: 'من فرن بيتنا، لدفا لمّتكم • مخبوزات طازجة حسب الطلب في عمّان',
    navigation: [
      { id: 'menu', label: 'مخبوزاتنا' },
      { id: 'how-to-order', label: 'كيف تطلب' },
      { id: 'about', label: 'حكايتنا' },
      { id: 'gallery', label: 'من الفرن' },
      { id: 'faq', label: 'أسئلتكم' },
    ],
    navLabel: 'التنقل الرئيسي',
    menuOpen: 'افتح القائمة',
    menuClose: 'أغلق القائمة',
    languageToggle: 'Switch to English',
    home: 'بي بايتس — الصفحة الرئيسية',
    order: 'اطلب على واتساب',
    orderShort: 'اطلب الآن',
    orderThis: 'بدي أجربها',
    orderProduct: 'اطلب {product}',
    message: 'مرحبا بي بايتس! حاب أطلب من مخبوزاتكم. ممكن أعرف المتوفر ومواعيد التوصيل؟',
    productMessage: 'مرحبا بي بايتس! حاب أطلب {product}. ممكن تفاصيل الكمية والتوصيل؟',
    hero: {
      eyebrow: 'مخبوزات بيتية • بكل حب من عمّان',
      headline: 'لقمة عسل،',
      accent: 'ولمّة حلوة.',
      description:
        'عجينة بنعجنها بحب، عسل طبيعي، وريحة بتملأ البيت. مخبوزات طازجة من فرنّا، لأحلى لحظاتكم.',
      menu: 'شوف مخبوزاتنا',
      note: 'نخبز على طلبك · نوصل لعمّان',
      seal: 'من القلب',
      sealDetail: 'ومِن فرن البيت',
      imageAlt: 'صورة توضيحية لخلية نحل ذهبية طازجة مغطاة بالعسل',
      imageCaption: 'خلية النحل — حكايتنا بلقمة',
    },
    promises: ['عسل طبيعي', 'دفعات صغيرة، اهتمام كبير', 'مخبوزة على طلبك', 'لمّة بطعم البيت'],
    signature: {
      eyebrow: 'الحكاية بلّشت من هون',
      heading: 'خلية وحدة.\nألف لحظة حلوة.',
      description:
        'طرية من جوا، ذهبية من برا، وبقلب كل حبة جبنة كريمية. خلية النحل عندنا بتنخبز على مهل وبتتغطى بالعسل… والأحلى؟ تتشارك مع اللي بتحبهم.',
      details: ['عسل طبيعي', 'حشوة جبنة كريمية', 'صينية للمشاركة'],
      caption: 'توقيع بي بايتس',
    },
    menu: {
      eyebrow: 'إشي حلو لكل مزاج',
      heading: 'من فرنّا، إلكم.',
      description: 'للقهوة، للضيافة، أو بس لأنك مشتهي إشي طيب.',
      filters: {
        all: 'كل المخبوزات',
        sweet: 'مخبوزات حلوة',
        savory: 'مخبوزات مالحة',
        cookies: 'كوكيز',
        custom: 'طلبات خاصة',
      },
      filterLabel: 'تصفية المخبوزات حسب النوع',
      sample: 'قائمة وأسعار وصور توضيحية — نأكد التفاصيل معك على واتساب.',
      priceNote: 'الأسعار بالدينار الأردني. التوصيل يُحسب حسب المنطقة.',
      priceOnRequest: 'السعر حسب الطلب',
      count: '{count} مخبوزات',
      imagePlaceholder: 'صورة توضيحية',
    },
    how: {
      eyebrow: 'من أول رسالة، لأول لقمة',
      heading: 'طلبك بسيط. والفرحة كبيرة.',
      description: 'أربع خطوات، والباقي علينا.',
      steps: [
        { title: 'اختار اللي بتحبه', description: 'تصفّح مخبوزاتنا واختار اللي على بالك.' },
        { title: 'ابعثلنا رسالة', description: 'احكيلنا على واتساب شو حاب ومتى بدّك طلبك.' },
        { title: 'نخبزها طازة', description: 'بنأكد طلبك وبنحضّره بكل حب، خصيصًا إلك.' },
        { title: 'توصل لعندك', description: 'توصيل بعمّان أو استلام بموعد متفق عليه.' },
      ],
      note: 'يا ريت تطلب قبل ٢٤–٤٨ ساعة. للمناسبات والطلبات الكبيرة، احكيلنا قبل ٣–٥ أيام. الموعد النهائي بنأكده معك.',
    },
    story: {
      eyebrow: 'أهلًا في مطبخنا',
      heading: 'شوية طحين،\nوكثير حب.',
      paragraphs: [
        'بي بايتس بدأت من فكرة بسيطة: أحلى المخبوزات هي اللي بتنعمل بالبيت، بإيد حدا بهتم بكل تفصيلة. من أول عجنة، لآخر نقطة عسل.',
        'بمطبخنا الصغير بعمّان، بنخبز على قد الطلب. بنختار مكونات بنحبها، وبنعطي العجينة وقتها. عشان كل علبة تطلع من عنا تحمل معها شوية من دفا البيت.',
      ],
      values: ['عسل طبيعي', 'دفعات صغيرة', 'بدون مواد حافظة مضافة'],
      signature: 'بكل حب، عيلة بي بايتس',
      artCaption: 'لقمة بطعم البيت',
    },
    gallery: {
      eyebrow: 'لحظات من مطبخنا',
      heading: 'الصور بتحكي… والريحة حكاية.',
      description: 'شوف شو طالع من الفرن، وخليك قريب من جديدنا.',
      cta: 'تابعنا على إنستغرام',
      sample: 'صور توضيحية، تُستبدل بصور مخبوزاتنا.',
    },
    reviews: {
      eyebrow: 'الحلو بيكمّل بكلامكم',
      heading: 'من القلب… للقلب.',
      sample: 'آراء توضيحية — ستُستبدل بتجارب حقيقية بإذن أصحابها.',
      previous: 'الرأي السابق',
      next: 'الرأي التالي',
      position: 'الرأي {current} من {total}',
      items: [
        {
          quote: 'خلية النحل طرية والعسل موزون، زي مخبوزات البيت بالضبط. ما لحّقنا نصوّرها!',
          name: 'سارة',
          detail: 'عمّان • رأي توضيحي',
        },
        {
          quote: 'طلبنا بوكس للّمة الجمعة، وكل حدا سأل من وين. التفاصيل الصغيرة بتفرق فعلًا.',
          name: 'لينا',
          detail: 'عمّان • رأي توضيحي',
        },
        {
          quote: 'كوكيز الشوكولاتة مع قهوة الصبح… أحلى بداية لليوم. الطعم دافي وبسيط.',
          name: 'أحمد',
          detail: 'عمّان • رأي توضيحي',
        },
      ],
    },
    faq: {
      eyebrow: 'قبل ما تطلب',
      heading: 'على بالك سؤال؟',
      description: 'جمعنا إلك أكثر الأسئلة. وإذا في إشي ثاني، إحنا على واتساب.',
      items: [
        {
          question: 'شو المكونات؟ وفي خيارات للحساسية؟',
          answer:
            'مخبوزاتنا ممكن تحتوي على القمح (الغلوتين)، الحليب، البيض، السمسم والمكسرات. بنستخدم مطبخ مشترك وما بنضمن خلو المنتجات من مسببات الحساسية. احكيلنا عن أي حساسية قبل الطلب لنوضح مكونات الصنف.',
        },
        {
          question: 'قبل كم يوم لازم أطلب؟',
          answer:
            'يفضّل الطلب قبل ٢٤–٤٨ ساعة، وقبل ٣–٥ أيام للطلبات الكبيرة والمناسبات. بنأكد الموعد والتوفر معك على واتساب قبل اعتماد الطلب.',
        },
        {
          question: 'وين بتوصلوا؟ وفي استلام؟',
          answer:
            'التوصيل ضمن عمّان، والرسوم حسب المنطقة. ابعتلنا موقعك لنأكد إمكانية التوصيل وتكلفته. الاستلام متاح بموعد وموقع متفق عليهما على واتساب.',
        },
        {
          question: 'بتعملوا طلبات خاصة للمناسبات؟',
          answer:
            'أكيد! بنرتب بوكسات ضيافة وطلبات للمناسبات، والكيك حسب التصميم المتاح. ابعتلنا فكرتك، العدد والتاريخ، وبنحكي بالتفاصيل والسعر.',
        },
        {
          question: 'كيف بقدر أدفع؟',
          answer:
            'بنأكد طريقة الدفع المتاحة معك على واتساب قبل تثبيت الطلب. الطلبات الخاصة أو الكبيرة ممكن تحتاج عربون، وبنوضح المبلغ وشروط التعديل قبل التأكيد.',
        },
      ],
    },
    final: {
      eyebrow: 'في إشي حلو بستناك',
      heading: 'خلّينا نحلّي يومك.',
      description: 'لقمة إلك، أو بوكس لحدا غالي. ابعتلنا، والباقي على فرنّا.',
      note: 'طلبات مسبقة · توصيل واستلام في عمّان',
    },
    footer: {
      description: 'خلية نحل . مخبوزات\nمن فرن بيتنا، بكل حب.',
      explore: 'تفضّلوا عندنا',
      social: 'خلّينا على تواصل',
      delivery: 'مخبوزة في عمّان، الأردن',
      deliveryDetail: 'توصيل ضمن عمّان · استلام بموعد مسبق',
      copyright: 'جميع الحقوق محفوظة.',
      made: 'معجونة بحب، ومخبوزة على مهل.',
      backTop: 'العودة إلى أعلى الصفحة',
      facebook: 'فيسبوك',
      instagram: 'إنستغرام',
    },
    seo: {
      title: 'بي بايتس | خلية نحل ومخبوزات بيتية في عمّان',
      description:
        'بي بايتس: خلية نحل بالعسل، مخبوزات حلوة ومالحة وكوكيز، طازجة حسب الطلب في عمّان، الأردن. اطلب عبر واتساب.',
    },
  },
  en: {
    skip: 'Skip to content',
    announcement: 'From our home oven to your happy moments · Freshly baked to order in Amman',
    navigation: [
      { id: 'menu', label: 'Our bakes' },
      { id: 'how-to-order', label: 'How to order' },
      { id: 'about', label: 'Our story' },
      { id: 'gallery', label: 'From the oven' },
      { id: 'faq', label: 'FAQs' },
    ],
    navLabel: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageToggle: 'التبديل إلى العربية',
    home: 'BeeBites — home',
    order: 'Order on WhatsApp',
    orderShort: 'Order now',
    orderThis: 'I’d love a bite',
    orderProduct: 'Order {product}',
    message:
      'Hi BeeBites! I’d love to order some fresh bakes. What’s available, and when can you deliver?',
    productMessage:
      'Hi BeeBites! I’d like to order {product}. Could you share portion and delivery details?',
    hero: {
      eyebrow: 'HOMEMADE BAKES · WITH LOVE, FROM AMMAN',
      headline: 'A little honey.',
      accent: 'A lot of heart.',
      description:
        'Lovingly kneaded dough, real honey, and that just-baked feeling. From our little home oven to your sweetest moments.',
      menu: 'Explore our bakes',
      note: 'Baked to order · Delivered in Amman',
      seal: 'Made with love',
      sealDetail: 'IN OUR HOME OVEN',
      imageAlt: 'Sample golden honeycomb bread glazed with honey on a rustic tray',
      imageCaption: 'The honeycomb — where our story begins',
    },
    promises: [
      'Real, golden honey',
      'Small batches, big heart',
      'Baked just for you',
      'A little taste of home',
    ],
    signature: {
      eyebrow: 'THE BAKE THAT STARTED IT ALL',
      heading: 'One honeycomb.\nSo many sweet moments.',
      description:
        'Pillowy on the inside, golden on the outside, with a little cream cheese tucked into every bite. Baked slowly, drizzled generously, and made for pulling apart with your favorite people.',
      details: ['Real honey', 'Cream cheese center', 'Made for sharing'],
      caption: 'THE BEEBITES SIGNATURE',
    },
    menu: {
      eyebrow: 'A LITTLE SOMETHING FOR EVERY CRAVING',
      heading: 'From our oven, with love.',
      description: 'For your coffee, your company, or simply because you fancy something lovely.',
      filters: {
        all: 'All bakes',
        sweet: 'Sweet pastries',
        savory: 'Savory bakes',
        cookies: 'Cookies',
        custom: 'Custom orders',
      },
      filterLabel: 'Filter bakes by category',
      sample: 'Sample menu, prices & photos — we’ll confirm all details on WhatsApp.',
      priceNote: 'Prices in Jordanian dinars. Delivery is calculated by area.',
      priceOnRequest: 'Let’s talk details',
      count: '{count} bakes',
      imagePlaceholder: 'Sample photo',
    },
    how: {
      eyebrow: 'FROM YOUR FIRST HELLO TO YOUR FIRST BITE',
      heading: 'A little message. A lovely delivery.',
      description: 'Four simple steps. We’ll take care of the rest.',
      steps: [
        {
          title: 'Find your favorite',
          description: 'Browse the menu and choose what makes you smile.',
        },
        {
          title: 'Say hello on WhatsApp',
          description: 'Tell us your picks, quantities, and preferred date.',
        },
        {
          title: 'We bake it fresh',
          description: 'Once confirmed, we make your order especially for you.',
        },
        {
          title: 'Enjoy a little happiness',
          description: 'Delivery in Amman or pickup by arrangement.',
        },
      ],
      note: 'Please allow 24–48 hours for regular orders and 3–5 days for celebrations or larger orders. We’ll confirm availability and timing with you.',
    },
    story: {
      eyebrow: 'WELCOME TO OUR LITTLE KITCHEN',
      heading: 'A little flour.\nA whole lot of love.',
      paragraphs: [
        'BeeBites began with a simple thought: the best bakes come from a home kitchen, and from someone who cares about every little detail. From the first knead to the last drizzle of honey.',
        'In our little kitchen in Amman, we bake in small batches, just for your order. We choose ingredients we love and give our dough the time it needs. So every box leaves with a little of that feeling of home.',
      ],
      values: ['Real honey', 'Small batches', 'No added preservatives'],
      signature: 'With love, the BeeBites family',
      artCaption: 'a little taste of home',
    },
    gallery: {
      eyebrow: 'LITTLE MOMENTS FROM OUR KITCHEN',
      heading: 'Fresh from the oven. And our feed.',
      description: 'A peek at what’s baking, what’s new, and what’s making us smile.',
      cta: 'Follow along on Instagram',
      sample: 'Illustrative photos, to be replaced with our own bakes.',
    },
    reviews: {
      eyebrow: 'THE SWEETEST WORDS',
      heading: 'From our hearts to yours.',
      sample: 'Illustrative reviews — replace with real, permissioned customer feedback.',
      previous: 'Previous review',
      next: 'Next review',
      position: 'Review {current} of {total}',
      items: [
        {
          quote:
            'The honeycomb was so soft and just sweet enough. It tasted like home. We finished it before we could even take a photo!',
          name: 'Sara',
          detail: 'Amman · Sample review',
        },
        {
          quote:
            'We ordered a box for our Friday gathering and everyone asked where it was from. You can taste the care in every bite.',
          name: 'Lina',
          detail: 'Amman · Sample review',
        },
        {
          quote:
            'A chocolate cookie and my morning coffee… the loveliest start to the day. Simple, warm, and absolutely delicious.',
          name: 'Ahmad',
          detail: 'Amman · Sample review',
        },
      ],
    },
    faq: {
      eyebrow: 'A FEW THINGS YOU MIGHT BE WONDERING',
      heading: 'Good questions. Honest answers.',
      description:
        'A little more about our bakes. Still curious? We’re only a WhatsApp message away.',
      items: [
        {
          question: 'What ingredients and allergens should I know about?',
          answer:
            'Our bakes may contain wheat (gluten), milk, eggs, sesame, and nuts. We use a shared kitchen and cannot guarantee allergen-free products. Please tell us about any allergies before ordering so we can explain the ingredients in your chosen bake.',
        },
        {
          question: 'How far ahead should I order?',
          answer:
            'Please allow 24–48 hours for regular bakes and 3–5 days for large orders or celebrations. Availability and your delivery or pickup time are confirmed on WhatsApp before we accept your order.',
        },
        {
          question: 'Where do you deliver? Can I pick up?',
          answer:
            'We deliver within Amman, with fees depending on the area. Send us your location to confirm delivery availability and cost. Pickup is also available at a time and location arranged on WhatsApp.',
        },
        {
          question: 'Can you bake for events or special occasions?',
          answer:
            'Of course! We can discuss sharing boxes, event orders, and cakes subject to design availability. Send your idea, guest count, and date, and we’ll work through the options and price together.',
        },
        {
          question: 'How does payment work?',
          answer:
            'We’ll confirm the available payment method on WhatsApp before your order is finalized. Custom or larger orders may require a deposit; we’ll explain the amount and change policy before confirmation.',
        },
      ],
    },
    final: {
      eyebrow: 'SOMETHING SWEET IS WAITING',
      heading: 'Let’s bake your day a little better.',
      description:
        'A treat for you, or a box for someone you love. Say hello, and let our oven do the rest.',
      note: 'Pre-orders welcome · Delivery & pickup in Amman',
    },
    footer: {
      description: 'A beehive of baked goods.\nFrom our home oven, with love.',
      explore: 'Have a little look',
      social: 'Let’s stay close',
      delivery: 'Baked in Amman, Jordan',
      deliveryDetail: 'Amman delivery · Pickup by arrangement',
      copyright: 'All rights reserved.',
      made: 'Kneaded with love. Baked with patience.',
      backTop: 'Back to top',
      facebook: 'Facebook',
      instagram: 'Instagram',
    },
    seo: {
      title: 'BeeBites | Homemade Honeycomb & Bakes in Amman',
      description:
        'Fresh homemade honeycomb pastries, sweet and savory bakes, and cookies in Amman, Jordan. Made to order with love. Order BeeBites on WhatsApp.',
    },
  },
}
