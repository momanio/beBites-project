# Sample imagery — replace before launch

The five food photographs were generated with the built-in image generation tool for this project. They are illustrative samples, not photographs of BeeBites products. WebP versions are stored here; `honeycomb-small.webp` is a responsive derivative. The original full-color JPEG logo supplied in `src/assets/` is used unchanged and is not a generated asset.

Replace image paths and bilingual alt text in `src/data/content.ts` and `src/data/products.ts`. For the hero, either replace both honeycomb sizes with the same new photo at 600 and 1100 pixels, or change the hero path; the component only applies the bundled srcset to the original placeholder path. Aim for 600–800 px product photos and a 1100 px hero, with a centered subject for hexagonal crops. Some menu entries intentionally reuse illustrative imagery and need their own matching product photographs.

## Original generation prompts

### `honeycomb-placeholder.webp` and `honeycomb-small.webp`

Use case: photorealistic-natural. Asset type: square bakery landing-page sample hero photograph, not a logo. An artisan Jordanian khaliat al nahl honeycomb bread: one large round pull-apart arrangement of 19 fluffy golden glazed rolls, glistening with real amber honey, a light sprinkling of sesame seeds, sitting on crumpled parchment on a dark round rustic baking tray. Warm cream linen table, a small ceramic honey bowl with wooden honey dipper and a few wheat stalks near edges. Close three-quarter overhead editorial food photography. Realistic delicate crumb and golden brown baked edges, appetizing, naturally imperfect handmade rolls, soft window light, warm muted honey and espresso palette. Bread fills center 80% of image so suitable for a hexagonal crop. No people, no words, no typography, no watermark, no logos. This is explicitly a placeholder sample food photo, not a photo of a real business product.

### Other product photographs

Each subject below used this exact common prompt with its subject inserted:

> Use case: photorealistic-natural. Asset type: square sample bakery product photograph for a handmade home bakery website. [SUBJECT] Warm cream linen background, soft natural window light, subtle grain, caramel, honey and espresso color palette. Authentic artisanal food editorial, tactile natural textures. Main food centered and filling 75% of the frame, suitable for hexagonal crop. No people, no text, no logos, no watermark. A clearly illustrative sample photo, not a real business product.

- **`cookies-placeholder.webp`:** A close-up small stack of rustic handmade chocolate chunk cookies on wrinkled unbleached parchment, generous dark chocolate chunks and coarse sea salt, some toasted oat cookies beside them.
- **`cinnamon-placeholder.webp`:** Six soft freshly baked cinnamon rolls with a light drizzle of cream cheese icing in a rustic ceramic baking dish, close overhead view.
- **`savory-placeholder.webp`:** Small homemade Jordanian zaatar twists and white cheese pastry pockets with black nigella seeds on parchment, beautiful irregular hand-shaped golden dough.
- **`cake-placeholder.webp`:** An elegant small homemade vanilla celebration cake with cream-colored buttercream, a tiny drizzle of honey, natural warm golden crumbs and three small edible white flowers, on a simple vintage ceramic cake plate.
