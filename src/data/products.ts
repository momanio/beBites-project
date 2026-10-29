import type { Product } from './types'

// SAMPLE PRODUCTS: confirm every item, price, portion, and photograph before launch.
// Replace illustrative AI sample photos with your own optimized files in public/images/.

export const products: Product[] = [
  {
    id: 'honeycomb',
    category: 'sweet',
    name: { ar: 'خلية النحل بالعسل', en: 'The honeycomb' },
    description: {
      ar: 'لقيمات هشة، قلبها جبنة كريمية ووجهها عسل. الحلا اللي بجمعنا.',
      en: 'Pillowy, cream-cheese-filled bites, finished with a generous drizzle of honey.',
    },
    unit: { ar: 'صينية • ١٩ حبة', en: 'Tray · 19 bites' },
    price: 8,
    image: '/images/honeycomb-placeholder.webp',
    imageAlt: {
      ar: 'صورة توضيحية لخلية نحل ذهبية بالعسل',
      en: 'Sample golden honey-glazed pull-apart bread',
    },
    badge: { ar: 'توقيع بي بايتس', en: 'Our signature' },
  },
  {
    id: 'cinnamon-rolls',
    category: 'sweet',
    name: { ar: 'لفائف القرفة', en: 'Cinnamon hugs' },
    description: {
      ar: 'قرفة دافية، عجينة طرية وتغطية جبنة كريمية. أحلى مع القهوة.',
      en: 'Soft cinnamon swirls with a silky cream cheese glaze. Coffee’s perfect company.',
    },
    unit: { ar: 'علبة • ٦ حبات', en: 'Box · 6 rolls' },
    price: 7,
    image: '/images/cinnamon-placeholder.webp',
    imageAlt: {
      ar: 'صورة توضيحية للفائف مخبوزة بالقرفة',
      en: 'Sample freshly baked cinnamon pastries',
    },
  },
  {
    id: 'chocolate-babka',
    category: 'sweet',
    name: { ar: 'بابكا بالشوكولاتة', en: 'Chocolate babka' },
    description: {
      ar: 'ضفيرة عجين غنية بطبقات الشوكولاتة الداكنة، مخبوزة على مهل.',
      en: 'A golden braided loaf with ribbons of dark chocolate in every slice.',
    },
    unit: { ar: 'رغيف • ٨ شرائح', en: 'Loaf · 8 slices' },
    price: 9,
    image: '/images/cinnamon-placeholder.webp',
    imageAlt: {
      ar: 'صورة توضيحية لمخبوزات حلوة',
      en: 'Illustrative sweet pastries; replace with a babka photo',
    },
  },
  {
    id: 'zaatar',
    category: 'savory',
    name: { ar: 'لفائف الزعتر', en: 'Za’atar twists' },
    description: {
      ar: 'زعتر بلدي وزيت زيتون بعجينة طرية. ريحة فطور البيت.',
      en: 'Fragrant za’atar and olive oil, tucked into soft, hand-rolled dough.',
    },
    unit: { ar: 'علبة • ٨ حبات', en: 'Box · 8 twists' },
    price: 5,
    image: '/images/savory-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لمخبوزات مالحة', en: 'Sample rustic savory bakes' },
  },
  {
    id: 'cheese-pockets',
    category: 'savory',
    name: { ar: 'فطاير الجبنة', en: 'Little cheese pockets' },
    description: {
      ar: 'حشوة جبنة بيضا ولمسة حبة البركة. بسيطة وبتفتح النفس.',
      en: 'Golden pockets of white cheese, finished with a sprinkle of nigella seeds.',
    },
    unit: { ar: 'علبة • ١٢ حبة', en: 'Box · 12 pieces' },
    price: 6,
    image: '/images/savory-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لمخبوزات ذهبية صغيرة', en: 'Sample small golden bakery bites' },
  },
  {
    id: 'chocolate-cookies',
    category: 'cookies',
    name: { ar: 'كوكيز الشوكولاتة', en: 'Chocolate chunk cookies' },
    description: {
      ar: 'مقرمشة من برا وطرية من جوا، بقطع شوكولاتة سخية ورشة ملح.',
      en: 'Crisp edges, soft centers, generous chocolate chunks, and a little sea salt.',
    },
    unit: { ar: 'علبة • ٦ حبات', en: 'Box · 6 cookies' },
    price: 5,
    image: '/images/cookies-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لكوكيز بقطع الشوكولاتة', en: 'Sample chocolate chip cookies' },
  },
  {
    id: 'honey-oat-cookies',
    category: 'cookies',
    name: { ar: 'كوكيز العسل والشوفان', en: 'Honey & oat cookies' },
    description: {
      ar: 'شوفان محمّص وعسل طبيعي ولمسة قرفة. لقمة دافية بكل وقت.',
      en: 'Toasty oats, real honey, and a touch of cinnamon. A comforting little bite.',
    },
    unit: { ar: 'علبة • ٨ حبات', en: 'Box · 8 cookies' },
    price: 5,
    image: '/images/cookies-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لكوكيز منزلية', en: 'Sample handmade cookies' },
  },
  {
    id: 'occasion-cake',
    category: 'custom',
    name: { ar: 'كيكة على ذوقك', en: 'Your celebration cake' },
    description: {
      ar: 'من فرحة صغيرة لمناسبة كبيرة، خلّينا نخبز إشي بشبهك.',
      en: 'For little milestones and big celebrations. Let’s make something that feels like you.',
    },
    unit: { ar: 'حسب الحجم والتصميم', en: 'Made to your brief' },
    price: null,
    image: '/images/cake-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لكيكة مناسبة', en: 'Sample celebration cake' },
  },
  {
    id: 'gathering-box',
    category: 'custom',
    name: { ar: 'بوكس اللمّة', en: 'The gathering box' },
    description: {
      ar: 'تشكيلة حلو ومالح للضيافة والهدايا. إنت اختار، وإحنا بنخبز.',
      en: 'A sweet and savory selection for sharing or gifting. Pick your favorites; we’ll bake.',
    },
    unit: { ar: 'حسب التشكيلة والعدد', en: 'Your mix, your occasion' },
    price: null,
    image: '/images/savory-placeholder.webp',
    imageAlt: { ar: 'صورة توضيحية لتشكيلة مخبوزات', en: 'Sample assortment of artisan bakes' },
  },
]
