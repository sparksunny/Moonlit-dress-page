import fs from 'fs';
import path from 'path';

// Helper to encode image to base64
function toBase64(filePath) {
  const fileData = fs.readFileSync(filePath);
  return `data:image/jpeg;base64,${fileData.toString('base64')}`;
}

const imagesDir = path.resolve('src/assets/images');

const introHeroImg = toBase64(path.join(imagesDir, 'intro_bridal_hero_1789309137107.jpg'));

const bridalImages = [
  toBase64(path.join(imagesDir, 'bridal_model_one_1789309871195.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_two_1789309893513.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_three_1789309911530.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_four_1789309926582.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_five_1789310025395.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_six_1789310041664.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_seven_1789310101527.jpg')),
  toBase64(path.join(imagesDir, 'bridal_model_eight_1789310118748.jpg')),
];

const partyImages = [
  toBase64(path.join(imagesDir, 'party_model_one_1789309944595.jpg')),
  toBase64(path.join(imagesDir, 'party_model_two_1789309964391.jpg')),
  toBase64(path.join(imagesDir, 'party_model_three_1789309982228.jpg')),
  toBase64(path.join(imagesDir, 'party_model_six_1789310075731.jpg')),
  toBase64(path.join(imagesDir, 'party_model_four_1789310004371.jpg')),
  toBase64(path.join(imagesDir, 'party_model_five_1789310057881.jpg')),
  toBase64(path.join(imagesDir, 'party_model_seven_1789310138043.jpg')),
  toBase64(path.join(imagesDir, 'party_model_eight_1789310153327.jpg')),
];

const bridalData = [
  {
    id: 'bridal-1',
    name: 'Moonlit Ivory',
    subtitle: 'Heavily Hand-Embroidered Bridal Peshwas & Flared Net Lehenga',
    category: 'Bridal Collection',
    description: 'A regal silhouette draped in sheer organza with celestial zardozi work and fine hand-sewn pearl filigree.',
    longDescription: 'Crafted with master artisanal technique, the Moonlit Ivory ensemble combines traditional mughalesque peshwas cutting with contemporary sheer organza layering. Over 280 hours of hand embroidery grace the front panels, encrusted with micro-pearls, cut-dana, and shimmering nakshi.',
    features: ['Intricate Zardozi & Resham Embroidery', 'Pure Organza & Silk Tissue Dupatta', 'Handcrafted Pearl Tassel Latkans', 'Scalloped Zari Border Hemline'],
    fabrics: 'Pure Organza, Micro-Tulle, Raw Silk Underlay',
    craftsmanship: 'Hand-sewn Nakshi, Pearls, Swarovski Crystals & Dabka',
    perfectFor: ['Barat Ceremony', 'Walima Reception', 'Engagement', 'Nikah'],
    colorPalette: [
      { name: 'Warm Ivory', hex: '#FAF6EE' },
      { name: 'Champagne Beige', hex: '#EADBCE' },
      { name: 'Soft Gilded Gold', hex: '#DFD1B5' },
      { name: 'Pearl Cream', hex: '#F0ECE1' }
    ]
  },
  {
    id: 'bridal-2',
    name: 'Pearl Blossom',
    subtitle: 'Classic Floor-Length Kalidaar with Scalloped Tissue Dupatta',
    category: 'Bridal Collection',
    description: 'Cascading floral arabesques with micro-pearl embellishment and a layered crinoline floor skirt.',
    longDescription: 'Pearl Blossom is inspired by timeless royal courtyards, featuring blossom motifs embroidered in tone-on-tone resham and antique gold tilla. Accompanied by an ethereal sheer veil with delicate floral borders.',
    features: ['Floral Arabesque Threadwork', 'Delicate Hand-Embroidered Sheer Veil', 'Tailored Bodice with Keyhole Accent', 'Voluminous Multi-Tiered Flared Hem'],
    fabrics: 'Pure French Tulle, Banarasi Zari Silk',
    craftsmanship: 'Resham Floral Medallions, Gota Patti, Seed Pearls',
    perfectFor: ['Nikah Ceremony', 'Bridal Shower', 'Walima', 'Reception'],
    colorPalette: [
      { name: 'Antique Pearl', hex: '#F4EFE6' },
      { name: 'Pale Champagne', hex: '#EDE3D5' },
      { name: 'Soft Taupe', hex: '#D6C7B2' },
      { name: 'Warm Cream', hex: '#FAF7F0' }
    ]
  },
  {
    id: 'bridal-3',
    name: 'Champagne Grace',
    subtitle: 'Regal Farshi Gharara & Kalidaar Kurti with Antique Dabka',
    category: 'Bridal Collection',
    description: 'Subtle metallic champagne hues intertwined with antique dabka and fine sequin detailing.',
    longDescription: 'Radiating understated grandeur, Champagne Grace pairs champagne tissue with antique silver and gold micro-elements. The dramatic trailing hem creates an enchanting bridal entry statement.',
    features: ['Antique Dabka & Cutwork Detailing', 'Featherweight Draped Silk Dupatta', 'Cinched Waistband with Jewel Piping', 'Artisanal Crystal Fringe Cuffs'],
    fabrics: 'Tissue Silk, Lurex Net, Pure Crepe Lining',
    craftsmanship: 'Kora Dabka, Sequins, Cutwork Borders',
    perfectFor: ['Walima Reception', 'Engagement Soiree', 'Cocktail Bridal', 'Barat'],
    colorPalette: [
      { name: 'Champagne Glow', hex: '#E5D6C5' },
      { name: 'Muted Sand', hex: '#D8C5B0' },
      { name: 'Warm Ochre', hex: '#C9B198' },
      { name: 'Ivory Frost', hex: '#F5EFE7' }
    ]
  },
  {
    id: 'bridal-4',
    name: 'Golden Garden',
    subtitle: 'Blush & Ivory Peshwas Gown with Flora-Inspired Tilla',
    category: 'Bridal Collection',
    description: 'Warm champagne gold tilla weave honoring heritage bridal grandeur with timeless poise.',
    longDescription: 'Golden Garden is a tribute to heritage craftsmanship. Features a masterfully hand-woven flare, detailed with floral motifs, zardozi borders, and an opulent four-sided border dupatta.',
    features: ['Heritage Farshi Gharara Silhouette', 'Four-Sided Embroidered Border Dupatta', 'Intricate Jaal Embroidery on Neckline', 'Hand-Spun Metallic Threadwork'],
    fabrics: 'Jamawar Brocade, Pure Chiffon, Butter Silk',
    craftsmanship: 'Traditional Tilla Weave, Zardozi, Kundan Beads',
    perfectFor: ['Barat Wedding', 'Traditional Mehndi', 'Nikah Ceremony', 'Sangeet'],
    colorPalette: [
      { name: 'Muted Gold', hex: '#D5BE9E' },
      { name: 'Warm Wheat', hex: '#E7D8C4' },
      { name: 'Soft Taupe', hex: '#CDB9A2' },
      { name: 'Pale Ecru', hex: '#F2ECE1' }
    ]
  },
  {
    id: 'bridal-5',
    name: 'Ivory Elegance',
    subtitle: 'Regal Ivory & Champagne Gown with Fine Threadwork Kalis',
    category: 'Bridal Collection',
    description: 'Clean modern cuts softened with romantic pearl clusters and botanical needlework.',
    longDescription: 'A masterclass in modern bridal couture. Ivory Elegance balances minimalist structural lines with delicate botanical embellishments, making it a favorite for the discerning bride who seeks quiet luxury.',
    features: ['Architectural Sculpted Bodice', 'Botanical Needlework in Ivory Silk', 'Gossamer Dupatta with Pearl Trim', 'Graceful Hidden Pockets'],
    fabrics: 'Italian Heavy Silk Crepe, Hand-Woven Organza',
    craftsmanship: 'Tone-on-tone French Knots, Pearl Studs, Sheer Appliqué',
    perfectFor: ['Nikah Ceremony', 'Civil Wedding', 'Intimate Soiree', 'Walima'],
    colorPalette: [
      { name: 'Pure Ivory', hex: '#FDFBF7' },
      { name: 'Alabaster', hex: '#F4EFEA' },
      { name: 'Vanilla Beige', hex: '#E8DEC8' },
      { name: 'Soft Ecru', hex: '#DFD5BE' }
    ]
  },
  {
    id: 'bridal-6',
    name: 'Royal Bloom',
    subtitle: 'Opulent Embroidered Lehenga with Regal Resham Motifs',
    category: 'Bridal Collection',
    description: 'A lavish display of royal floral tapestries woven in muted golds, ivory, and soft sand.',
    longDescription: 'Royal Bloom captures regal grandeur through extensive paneling and intricate botanical motifs. Each panel of the flared lehenga tells a unique artisanal story, framed by borders of scalloped gold work.',
    features: ['16-Kalidaar Voluminous Lehenga Skirt', 'Hand-Embroidered Jewel-Neck Choli', 'Twin Dupattas for Regal Bridal Draping', 'Vintage Zari Borders'],
    fabrics: 'Raw Silk, Tissue Organza, Chiffon Dupattas',
    craftsmanship: 'Hand Resham, Mukaish Sparkles, Semi-Precious Beads',
    perfectFor: ['Barat Grand Entrance', 'Royal Reception', 'Formal Nikah', 'Sangeet'],
    colorPalette: [
      { name: 'Royal Ivory', hex: '#FBF8F2' },
      { name: 'Champagne Taupe', hex: '#DACABA' },
      { name: 'Soft Muted Gold', hex: '#C8B091' },
      { name: 'Warm Linen', hex: '#EBE2D5' }
    ]
  },
  {
    id: 'bridal-7',
    name: 'Celestial Embroidery',
    subtitle: 'Ethereal Sheer Overlay Peshwas with Starlit Sequins',
    category: 'Bridal Collection',
    description: 'Drifting constellations of micro-crystals and silver zari across translucent champagne tulle.',
    longDescription: 'Designed to mimic starry night radiance, Celestial Embroidery catches the ambient glow from every vantage point. Features a sheer high neckline and delicate bell sleeves lined with pearl tassels.',
    features: ['Constellation Micro-Sequin Placement', 'Delicate Flared Bell Sleeves', 'Sheer Illusion Neckline', 'Cascading Tulle Trail'],
    fabrics: 'Whisper-Weight French Tulle, Silk Crepe Lining',
    craftsmanship: 'Micro-Sequins, Silver Zari, Delicate Cut-Glass Beads',
    perfectFor: ['Evening Reception', 'Engagement Party', 'Walima Dinner', 'Bridal Shower'],
    colorPalette: [
      { name: 'Celestial White', hex: '#F9F7F4' },
      { name: 'Silver Champagne', hex: '#E2DBD0' },
      { name: 'Starlight Beige', hex: '#D2C5B4' },
      { name: 'Soft Mink', hex: '#C1B2A1' }
    ]
  },
  {
    id: 'bridal-8',
    name: 'Blush Heritage',
    subtitle: 'Subtle Rose-Champagne Kalidaar with Antique Silver Wirework',
    category: 'Bridal Collection',
    description: 'A romantic fusion of faint blush warmth, ivory silk, and antique metallic hand-embroidery.',
    longDescription: 'Blush Heritage introduces the softest whisper of vintage blush into a champagne ivory base. Finished with antique silver wirework and delicate rosewater-hued silk thread embroidery.',
    features: ['Subtle Vintage Rose Undertone', 'Fine Wirework (Tilla & Marori)', 'Handcrafted Scalloped Borders', 'Pure Silk Flared Culottes'],
    fabrics: 'Pure Katan Silk, Organza Veil, Satin Lining',
    craftsmanship: 'Marori Work, Antique Gota, Rose-Toned Resham',
    perfectFor: ['Daytime Nikah', 'Bridal Luncheon', 'Barat Ceremony', 'Engagement'],
    colorPalette: [
      { name: 'Blush Champagne', hex: '#EFE2DC' },
      { name: 'Vintage Rose Ecru', hex: '#E5D3CA' },
      { name: 'Warm Ivory', hex: '#F8F4EE' },
      { name: 'Soft Taupe', hex: '#CDBEAF' }
    ]
  }
];

const partyData = [
  {
    id: 'party-1',
    name: 'Moonlit Pearl',
    subtitle: 'Contemporary Scalloped Kurta & Flared Trouser Ensemble',
    category: 'Party Wear',
    description: 'Crisp contemporary tailoring softened by pearl-dusted collars and shimmering sleeve borders.',
    longDescription: 'Moonlit Pearl redefines festive evening elegance. Tailored from lustrous raw silk with an asymmetrical hemline, adorned with micro-pearls and sheer organza cuff inserts for effortless modern poise.',
    features: ['Scalloped Organza Hemline & Cuffs', 'Delicate Pearl Cluster Button Placket', 'Tailored Straight-Leg Silk Trousers', 'Airy Sheer Silk Dupatta'],
    fabrics: 'Pure Raw Silk 80g, Organza Accents',
    craftsmanship: 'Micro-Pearl Cluster Work, Thread Embroidery',
    perfectFor: ['Engagement Soiree', 'Eid Celebration', 'Festive Dinner', 'Qawwali Night'],
    colorPalette: [
      { name: 'Dusted Rose Taupe', hex: '#DBC5B8' },
      { name: 'Warm Champagne', hex: '#EADBCF' },
      { name: 'Soft Muted Ivory', hex: '#F7F3EB' },
      { name: 'Dark Mocha', hex: '#5E4839' }
    ]
  },
  {
    id: 'party-2',
    name: 'Champagne Glow',
    subtitle: 'Sleek Gilded Cape & Column Slip Dress with Resham Work',
    category: 'Party Wear',
    description: 'A luminous sheer cape adorned with geometric sequin lines layered over a minimalist slip.',
    longDescription: 'Capturing modern red-carpet panache, Champagne Glow pairs a floor-sweeping sheer cape with a tailored internal silk slip. Hand-embroidered in geometric chevron sequences with champagne gold sequins.',
    features: ['Floor-Length Sheer Embroidered Cape', 'Minimalist Inner Slip Dress', 'Geometric Sequin Chevron Patterns', 'Mandarin Collar with Crystal Fastener'],
    fabrics: 'Pure Chiffon Cape, Korean Raw Silk Slip',
    craftsmanship: 'Cut-Dana, Sequin Beading, Hand-Finished Borders',
    perfectFor: ['Cocktail Reception', 'Sangeet Party', 'Formal Gala', 'After-Party'],
    colorPalette: [
      { name: 'Champagne Sand', hex: '#DECBB7' },
      { name: 'Golden Taupe', hex: '#CDB59E' },
      { name: 'Rich Espresso', hex: '#4A3427' },
      { name: 'Ivory Cream', hex: '#FAF6EE' }
    ]
  },
  {
    id: 'party-3',
    name: 'Rose Mist',
    subtitle: 'Dusty Rose Angrakha Silhouette with Silver Gota Patti',
    category: 'Party Wear',
    description: 'A romantic crossover angrakha cut with intricate silver threadwork and flowing chiffon flare.',
    longDescription: 'Rose Mist weaves nostalgia into modern party wear. The crossover wrap bodice features hand-tied dori tassels and scalloped silver gota patti borders that sway gracefully with every step.',
    features: ['Heritage Crossover Angrakha Cut', 'Artisanal Dori & Bell Tassels', 'Silver Gota Patti & Sitara Trims', 'Wide-Leg Flared Palazzo'],
    fabrics: 'Pure Crinkle Chiffon, Cotton Silk Underlay',
    craftsmanship: 'Silver Zari, Sitara Work, Resham Threading',
    perfectFor: ['Sangeet Night', 'Mehndi Festive Party', 'Family Dinners', 'Bridal Shower'],
    colorPalette: [
      { name: 'Dusty Rose', hex: '#D3AFA4' },
      { name: 'Soft Mauve Taupe', hex: '#C0A29A' },
      { name: 'Champagne Frost', hex: '#EAE1D9' },
      { name: 'Warm Chocolate', hex: '#3E2A20' }
    ]
  },
  {
    id: 'party-4',
    name: 'Golden Whisper',
    subtitle: 'Embroidered Festive Kurta with Organza Scalloped Sleeves',
    category: 'Party Wear',
    description: 'Youthful festive flair featuring a structured silhouette and artfully draped organza dupatta.',
    longDescription: 'Designed for effortless movement during festive dancing and celebrations, Golden Whisper blends an intricately embellished top with fluid trousers in warm champagne hues.',
    features: ['Fitted Bodice with Flared Hem', 'Draped Fluid Trousers', 'Mirror-Work Accent Border', 'Lightweight Shimmer Dupatta'],
    fabrics: 'Silk Jacquard, Draped Organza, Crepe Silk',
    craftsmanship: 'Foil Mirror Accents, Thread Zari, Hand Tassels',
    perfectFor: ['Mehndi Sangeet', 'Dholak Night', 'Festive Brunch', 'Intimate Celebrations'],
    colorPalette: [
      { name: 'Warm Sand', hex: '#E5D6C1' },
      { name: 'Golden Honey', hex: '#D2BC9C' },
      { name: 'Light Mocha', hex: '#8B745D' },
      { name: 'Soft Cream', hex: '#F9F5EC' }
    ]
  },
  {
    id: 'party-5',
    name: 'Velvet Bloom',
    subtitle: 'Plush Silk-Velvet Kurti with Intricate Zardozi Neckline',
    category: 'Party Wear',
    description: 'Sumptuous micro-velvet tailored in a deep warm espresso hue with antique gold embroidery.',
    longDescription: 'The pinnacle of winter evening glamour. Velvet Bloom features rich micro-velvet that captures ambient salon lighting, highlighted by dense dabka and resham floral vines along the neckline and hem.',
    features: ['Rich Micro-Velvet Royal Texture', 'Dense Dabka & Antique Zardozi Work', 'Raw Silk Cigarette Pants with Pearls', 'Tissue Zari Draped Shawl'],
    fabrics: 'Micro-Velvet 9000, Banarasi Tissue Silk Shawl',
    craftsmanship: 'Antique Dabka, Resham Leaves, Cutwork',
    perfectFor: ['Winter Weddings', 'Valima Soiree', 'High-End Banquets', 'Formal Evenings'],
    colorPalette: [
      { name: 'Warm Espresso', hex: '#3C281D' },
      { name: 'Antique Bronze Gold', hex: '#B89B72' },
      { name: 'Mocha Taupe', hex: '#8A705E' },
      { name: 'Champagne Beige', hex: '#E7DAD0' }
    ]
  },
  {
    id: 'party-6',
    name: 'Soft Radiance',
    subtitle: 'Pastel Mint & Champagne Sharara Suit with Resham Jaal',
    category: 'Party Wear',
    description: 'Delicate floral lattice embroidery over an opulent tiered sharara silhouette.',
    longDescription: 'Soft Radiance provides an airy, refreshing festive look. The sheer organza kurta is embroidered in fine pastel mint and champagne threads over a voluminous flared sharara skirt.',
    features: ['Floral Lattice Resham Jaal', 'Voluminous Tiered Sharara Flare', 'Featherlight Net Dupatta with Scallops', 'Hand-Tied Pearl Piping'],
    fabrics: 'Organza, Korean Georgette, Butter Silk Underlay',
    craftsmanship: 'Resham Jaal, Mukaish Grains, Pearl Drop Accents',
    perfectFor: ['Daytime Engagement', 'Nikah Celebration', 'Festive Luncheon', 'Eid Gathering'],
    colorPalette: [
      { name: 'Pale Sage Mint', hex: '#D5DBD1' },
      { name: 'Champagne Cream', hex: '#EFE8DE' },
      { name: 'Warm Taupe', hex: '#C2B3A3' },
      { name: 'Dark Chocolate', hex: '#37271D' }
    ]
  },
  {
    id: 'party-7',
    name: 'Evening Grace',
    subtitle: 'Modern Draped Festive Formal with Embellished Belt',
    category: 'Party Wear',
    description: 'Modern pre-pleated drape with a hand-embroidered waist belt and jewel-neck silhouette.',
    longDescription: 'Effortlessly dramatic without the hassle of traditional draping. Evening Grace is pre-stitched in fluid champagne satin georgette, anchored by a detachable belt crafted with hand-beaded pearls and crystals.',
    features: ['Pre-Pleated Ready-to-Wear Saree Silhouette', 'Detachable Hand-Beaded Jewel Belt', 'High-Neck Blouse with Sheer Back', 'Cascading Dramatic Pallu'],
    fabrics: 'Satin Georgette, Raw Silk Blouse',
    craftsmanship: 'Swarovski Crystal Beading, Cut-Dana, Seed Pearls',
    perfectFor: ['Cocktail Reception', 'Bridal Shower', 'Sangeet Party', 'Black-Tie Festive'],
    colorPalette: [
      { name: 'Champagne Satin', hex: '#E5D6C5' },
      { name: 'Soft Taupe Gray', hex: '#C4B7AA' },
      { name: 'Ivory Shimmer', hex: '#FAF6EE' },
      { name: 'Warm Espresso', hex: '#432E22' }
    ]
  },
  {
    id: 'party-8',
    name: 'Midnight Elegance',
    subtitle: 'Deep Cocoa Kalidaar with Liquid Gold Zari Embroidery',
    category: 'Party Wear',
    description: 'A rich chocolate-brown canvas illuminated by luminous liquid gold zari and sequin lines.',
    longDescription: 'Midnight Elegance commands attention with its dark espresso tone and reflective metallic embroidery. The 12-kalidaar flare spins gracefully during celebratory festivities, finished with a contrasting tissue dupatta.',
    features: ['12-Kalidaar Fluid Evening Flare', 'Liquid Gold Zari Threadwork', 'Contrast Golden Tissue Dupatta', 'Embellished Churidar Sleeves'],
    fabrics: 'Pure Bamberg Chiffon, Metallic Tissue Dupatta',
    craftsmanship: 'Fine Zari Weave, Gold Sitara Work, Tilla Hem',
    perfectFor: ['Formal Dinner Party', 'Walima Reception', 'Qawwali Night', 'Evening Soiree'],
    colorPalette: [
      { name: 'Deep Cocoa Brown', hex: '#2F1E16' },
      { name: 'Liquid Gold Zari', hex: '#D6BC91' },
      { name: 'Warm Sand', hex: '#E2D1BD' },
      { name: 'Soft Champagne', hex: '#EFE5D8' }
    ]
  }
];

// Attach images to items
const fullCatalog = [
  ...bridalData.map((item, idx) => ({ ...item, image: bridalImages[idx] })),
  ...partyData.map((item, idx) => ({ ...item, image: partyImages[idx] }))
];

function generateCardHtml(dress) {
  return `
    <div id="dress-card-${dress.id}" class="dress-card group flex flex-col rounded-2xl bg-[#FDFBF7] border border-[#EBE1D4] hover:border-[#DAC7B0] transition-all duration-500 hover:shadow-md overflow-hidden" onclick="openDressModal('${dress.id}')" style="cursor: pointer;">
      <div class="relative aspect-[3/4] overflow-hidden bg-[#EFE9DF]">
        <img src="${dress.image}" alt="${dress.name} - ${dress.category}" class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#26170E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <div class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E2D5C4] shadow-xs">
          <span class="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5C4839]">${dress.category}</span>
        </div>
        <div class="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-[#FAF7F2]/80 backdrop-blur-xs border border-[#E2D5C4] flex items-center justify-center text-[#BFA075]">
          <span style="font-size: 11px;">✦</span>
        </div>
        <div class="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
          <button type="button" class="w-full py-2.5 px-4 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-md text-[#362417] text-xs uppercase tracking-[0.2em] font-medium border border-[#DAC8B4] shadow-xs flex items-center justify-center gap-2 hover:bg-[#F2EAE0] transition-colors">
            <span>Inspect Craftsmanship</span>
            <span>↗</span>
          </button>
        </div>
      </div>
      <div class="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#FDFBF7]">
        <div class="space-y-2">
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="font-serif text-xl sm:text-2xl text-[#2F1F15] font-normal tracking-tight group-hover:text-[#674A35] transition-colors">${dress.name}</h3>
            <span class="font-cormorant italic text-xs text-[#8F7864] shrink-0">Bespoke</span>
          </div>
          <p class="font-serif italic text-xs text-[#826955] line-clamp-1">${dress.subtitle}</p>
          <p class="text-xs text-[#6B5749] line-clamp-2 leading-relaxed pt-1">${dress.description}</p>
        </div>
        <div class="pt-4 mt-4 border-t border-[#EAE0D3] flex items-center justify-between text-xs">
          <span class="text-[11px] uppercase tracking-[0.16em] text-[#86705D] font-medium">South Asian Haute Couture</span>
          <span class="inline-flex items-center gap-1 text-[#4F392B] font-medium text-xs group-hover:translate-x-0.5 transition-transform">
            <span>View Details</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  `;
}

const bridalCardsHtml = fullCatalog.slice(0, 8).map(generateCardHtml).join('\n');
const partyCardsHtml = fullCatalog.slice(8, 16).map(generateCardHtml).join('\n');

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moonlit Closet — Elegance and Style (Offline Edition)</title>
  <meta name="description" content="A luxury Pakistani bridal and party wear catalog showcase embodying elegance, refined craftsmanship, and timeless style.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Alex+Brush&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #FAF7F0;
      color: #382519;
      font-family: 'Plus Jakarta Sans', sans-serif;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3, h4, .font-serif {
      font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
    }
    .font-cormorant {
      font-family: 'Cormorant Garamond', Georgia, serif;
    }
    .font-script {
      font-family: 'Alex Brush', cursive;
    }
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #FAF7F0;
    }
    ::-webkit-scrollbar-thumb {
      background: #D9CBBF;
      border-radius: 9999px;
    }
  </style>
</head>
<body class="bg-[#FAF7F0] text-[#382519] antialiased selection:bg-[#E5D7C7] selection:text-[#2D1D14]">

  <!-- TOP NOTIFICATION FOR STANDALONE RUN -->
  <div class="bg-[#362317] text-[#EDE2D4] text-xs py-2 px-4 text-center border-b border-[#4A3323] flex items-center justify-center gap-3">
    <span>✦ <strong>Moonlit Closet Standalone HTML</strong> — Running directly from your local PC. All Pakistani model dresses & details included offline.</span>
    <button onclick="window.print()" class="underline hover:text-white text-[11px] uppercase tracking-wider ml-2">Print / Save as PDF</button>
  </div>

  <!-- 1. HEADER -->
  <header id="main-header" class="sticky top-0 z-40 w-full transition-all duration-300 border-b bg-[#FAF7F0]/95 backdrop-blur-md border-[#E8DDD1]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 sm:h-24">
        <!-- Brand Logo -->
        <a href="#home" class="group flex flex-col items-start text-left focus:outline-none">
          <div class="flex items-center gap-2">
            <span class="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-[#342217] uppercase font-medium">Moonlit Closet</span>
            <span class="text-[#C5A880] text-sm">♡</span>
          </div>
          <div class="flex items-center gap-1.5 mt-0.5">
            <span class="h-[1px] w-4 bg-[#D8C7B4]"></span>
            <span class="font-cormorant italic text-xs sm:text-sm tracking-[0.25em] text-[#7C6654]">Elegance and Style</span>
          </div>
        </a>

        <!-- Navigation Links -->
        <nav aria-label="Main Navigation" class="hidden md:flex items-center space-x-7 lg:space-x-9">
          <a href="#home" class="text-xs uppercase tracking-[0.2em] font-medium text-[#675446] hover:text-[#2D1D14] transition-colors py-1">Home</a>
          <a href="#about" class="text-xs uppercase tracking-[0.2em] font-medium text-[#675446] hover:text-[#2D1D14] transition-colors py-1">About</a>
          <a href="#bridal" class="text-xs uppercase tracking-[0.2em] font-medium text-[#675446] hover:text-[#2D1D14] transition-colors py-1">Bridal Dresses</a>
          <a href="#party-wear" class="text-xs uppercase tracking-[0.2em] font-medium text-[#675446] hover:text-[#2D1D14] transition-colors py-1">Party Wear</a>
          <a href="#contact" class="text-xs uppercase tracking-[0.2em] font-medium text-[#675446] hover:text-[#2D1D14] transition-colors py-1">Contact</a>
        </nav>

        <!-- Right Side Action -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="#bridal" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#342217] text-[#FAF7F0] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#4D3525] transition-colors">
            <span>Explore Collection</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- 2. INTRODUCTION / HERO -->
  <section id="home" class="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-[#FAF7F0] via-[#FAF5EC] to-[#FAF7F0]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#E8DDD0]">
        <div class="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#7B6654] font-medium">
          <span>Moonlit Editorial</span>
          <span class="text-[#C5A880]">✦</span>
          <span>Vol. 2026</span>
        </div>
        <div class="hidden sm:flex items-center gap-2 font-cormorant italic text-sm text-[#87715E]">
          <span>Refined South Asian Couture</span>
          <span class="text-[#C5A880]">♡</span>
        </div>
      </div>

      <div id="about" class="scroll-mt-24 pt-8 sm:pt-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Text Column -->
          <div class="lg:col-span-6 flex flex-col items-start text-left space-y-6 sm:space-y-7">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DA]/70 border border-[#E3D6C6]">
              <span class="text-[11px] uppercase tracking-[0.22em] text-[#5F4B3C] font-semibold">Atelier Showcase</span>
              <span class="text-[#A88864]">♡</span>
            </div>
            <div class="space-y-2">
              <span class="block font-cormorant italic text-lg sm:text-xl text-[#826C58] tracking-wider">The Art of Draping</span>
              <h1 class="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] text-[#2C1D14] leading-[1.18] font-normal tracking-tight">Elegance for Every Occasion</h1>
            </div>
            <p class="text-[#5F4B3C] text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Welcome to <strong>Moonlit Closet</strong>, where each ensemble is conceived as wearable poetry. Discover our bespoke repertoire of authentic Pakistani bridal masterpieces and celebratory evening wear, handcrafted in pure silks, shimmering organzas, and intricate zardozi needlework.
            </p>
            <div class="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-2">
              <div class="p-3.5 sm:p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DDD0] flex flex-col items-start text-[#574334]">
                <span class="text-xs uppercase tracking-wider font-semibold text-[#8B7460] mb-1">Craftsmanship</span>
                <span class="text-xs tracking-wider uppercase font-medium">Zardozi & Tilla</span>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DDD0] flex flex-col items-start text-[#574334]">
                <span class="text-xs uppercase tracking-wider font-semibold text-[#8B7460] mb-1">Fabrics</span>
                <span class="text-xs tracking-wider uppercase font-medium">Pure Silks & Net</span>
              </div>
              <div class="p-3.5 sm:p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DDD0] flex flex-col items-start text-[#574334]">
                <span class="text-xs uppercase tracking-wider font-semibold text-[#8B7460] mb-1">Tailoring</span>
                <span class="text-xs tracking-wider uppercase font-medium">Bespoke Fit</span>
              </div>
            </div>
            <div class="pt-2">
              <a href="#bridal" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#322016] text-[#FAF6F0] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#483324] transition-colors">
                <span>Explore Collection</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          <!-- Hero Image Column -->
          <div class="lg:col-span-6 relative mt-4 lg:mt-0">
            <div class="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-3 sm:p-4 bg-[#FDFBF7] border border-[#E7DDD0] shadow-sm">
              <div class="flex items-center justify-between px-3 py-2 text-xs text-[#7D6855] border-b border-[#EDE3D6] mb-3">
                <span class="font-serif tracking-widest uppercase">Moonlit Atelier</span>
                <span class="font-script text-base text-[#5D4737]">Bride to Be ♡</span>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-[#EFE9DF] aspect-[3/4]">
                <img src="${introHeroImg}" alt="Pakistani Bridal Dress Model" class="w-full h-full object-cover object-center" />
                <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8DEC8]">
                  <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-[0.2em] text-[#7A6655] font-semibold">Signature Bridal Couture</span>
                    <span class="font-serif text-sm text-[#2C1D14] font-medium">Heavily Embellished Ivory Peshwas</span>
                  </div>
                  <span class="text-xs text-[#C5A880]">✧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. BRIDAL DRESSES -->
  <section id="bridal" class="scroll-mt-24 py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-[#EAE0D4]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6DA]/80 border border-[#E3D6C5]">
          <span class="text-[10px] uppercase tracking-[0.25em] text-[#695342] font-semibold">The Bridal Edit</span>
          <span class="text-[#C5A880]">✦</span>
          <span class="font-cormorant italic text-xs text-[#7B6451]">Pakistani Haute Couture</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2F1E14] font-normal tracking-tight">Bridal Dresses</h2>
        <p class="font-cormorant italic text-lg sm:text-xl text-[#78614E]">Timeless beauty for your most unforgettable moments.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        ${bridalCardsHtml}
      </div>
    </div>
  </section>

  <!-- 4. PARTY WEAR -->
  <section id="party-wear" class="scroll-mt-24 py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-[#EAE0D4]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D4]/80 border border-[#DDD0C0]">
          <span class="text-[10px] uppercase tracking-[0.25em] text-[#654E3C] font-semibold">Evening &amp; Festive Formal</span>
          <span class="text-[#C5A880]">✦</span>
          <span class="font-cormorant italic text-xs text-[#7B6451]">Pakistani Silhouettes</span>
        </div>
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1D13] font-normal tracking-tight">Party Wear</h2>
        <p class="font-cormorant italic text-lg sm:text-xl text-[#755F4C]">Graceful looks designed to make every celebration memorable.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        ${partyCardsHtml}
      </div>
    </div>
  </section>

  <!-- 5. FOOTER -->
  <footer id="contact" class="bg-[#2A1B12] text-[#EFE4D6] relative overflow-hidden border-t border-[#443023]">
    <div class="bg-[#372418] border-b border-[#4A3425] py-3.5 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs uppercase tracking-[0.2em] text-[#D8C7B4]">
        <span>✦ Trending Pakistani Haute Couture Picks</span>
        <span class="hidden sm:block text-[#6A5140]">•</span>
        <span>✦ Atelier Consultations Nationwide</span>
        <span class="hidden sm:block text-[#6A5140]">•</span>
        <span>✦ Made with Love &amp; Artistry</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center gap-2">
            <span class="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-[#FAF5ED] uppercase">Moonlit Closet</span>
            <span class="text-[#C5A880]">♡</span>
          </div>
          <p class="font-cormorant italic text-base text-[#D4C1AE] tracking-widest">“Elegance and Style”</p>
          <p class="text-sm text-[#C4B29E] leading-relaxed max-w-md pt-1 font-light">Celebrating timeless fashion, graceful details, and unforgettable moments.</p>
        </div>

        <div class="md:col-span-3 space-y-3">
          <span class="block font-serif text-sm uppercase tracking-[0.2em] text-[#F3E9DD] font-medium">Quick Links</span>
          <ul class="space-y-2 text-sm text-[#C4B29E]">
            <li><a href="#home" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
            <li><a href="#bridal" class="hover:text-white transition-colors">Bridal Dresses</a></li>
            <li><a href="#party-wear" class="hover:text-white transition-colors">Party Wear</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div class="md:col-span-4 space-y-3">
          <span class="block font-serif text-sm uppercase tracking-[0.2em] text-[#F3E9DD] font-medium">Atelier Contact</span>
          <p class="text-sm text-[#C4B29E]">Moonlit Couture Flagship Salon<br>M.M. Alam Road, Gulberg III, Lahore</p>
          <p class="text-sm text-[#C4B29E]">Phone: +92 42 3578 9000<br>Email: concierge@moonlitcloset.com</p>
          <p class="text-xs text-[#9E8775] pt-2">Mon – Sat: 11:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div class="mt-14 pt-8 border-t border-[#3F2B1F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9B8574] gap-4">
        <span>&copy; 2026 Moonlit Closet. All rights reserved.</span>
        <span>Crafted with light cream aesthetic &amp; authentic Pakistani couture.</span>
      </div>
    </div>
  </footer>

  <!-- DRESS DETAIL MODAL -->
  <div id="modal-backdrop" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-6 bg-[#261810]/70 backdrop-blur-xs overflow-y-auto" onclick="closeDressModal()">
    <div id="modal-container" class="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FAF7F0] border border-[#E5D7C7] shadow-2xl p-5 sm:p-8 text-[#38261A]" onclick="event.stopPropagation()">
      <button type="button" onclick="closeDressModal()" class="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#EFE4D6]/80 hover:bg-[#E5D6C4] text-[#4A3527] transition-colors" aria-label="Close details">
        ✕
      </button>
      <div id="modal-body"></div>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    const CATALOG = ${JSON.stringify(fullCatalog)};

    function openDressModal(dressId) {
      const dress = CATALOG.find(d => d.id === dressId);
      if (!dress) return;

      const bodyHtml = \`
        <div class="border-b border-[#EBDDCF] pb-4 mb-6">
          <div class="flex items-center justify-between">
            <span class="text-[11px] uppercase tracking-[0.25em] text-[#866D59] font-medium">Moonlit Closet Collection</span>
            <span class="text-xs font-cormorant italic text-[#967C67]">Editorial Catalog Spec</span>
          </div>
          <h3 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2F1D14] mt-1 font-normal">\${dress.name}</h3>
          <p class="font-serif italic text-sm text-[#7D6654] mt-0.5">\${dress.subtitle}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div class="md:col-span-5">
            <div class="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#EFE8DE] border border-[#E5D7C8] shadow-sm">
              <img src="\${dress.image}" alt="\${dress.name}" class="w-full h-full object-cover object-top" />
            </div>
            <div class="mt-4 p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E7D9CA] text-xs text-[#735D4B]">
              <span class="block font-semibold uppercase tracking-wider text-[10px] text-[#8B735F] mb-1">Atelier Note</span>
              Every ensemble is individually hand-cut and customized to the client's measurements during bridal consultations.
            </div>
          </div>

          <div class="md:col-span-7 space-y-6">
            <div>
              <h4 class="font-serif text-sm uppercase tracking-[0.2em] text-[#432F22] mb-2 font-medium">Artisanal Narrative</h4>
              <p class="text-sm text-[#5C483A] leading-relaxed font-light">\${dress.longDescription}</p>
            </div>

            <div>
              <h4 class="font-serif text-sm uppercase tracking-[0.2em] text-[#432F22] mb-2 font-medium">Key Highlights &amp; Craft</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                \${dress.features.map(f => \`
                  <div class="p-2.5 rounded-md bg-[#FAF7F2] border border-[#EAE0D3] text-xs text-[#523F32] flex items-center gap-2">
                    <span class="text-[#C5A880]">✦</span>
                    <span>\${f}</span>
                  </div>
                \`).join('')}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D3]">
                <span class="block text-[10px] uppercase tracking-[0.2em] text-[#826C5A] font-semibold mb-1">Pure Fabrics</span>
                <span class="text-xs text-[#412E21] font-medium leading-relaxed">\${dress.fabrics}</span>
              </div>
              <div class="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EAE0D3]">
                <span class="block text-[10px] uppercase tracking-[0.2em] text-[#826C5A] font-semibold mb-1">Hand Craftsmanship</span>
                <span class="text-xs text-[#412E21] font-medium leading-relaxed">\${dress.craftsmanship}</span>
              </div>
            </div>

            <div>
              <h4 class="font-serif text-sm uppercase tracking-[0.2em] text-[#432F22] mb-2 font-medium">Palette</h4>
              <div class="flex flex-wrap gap-2.5">
                \${dress.colorPalette.map(c => \`
                  <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EAE0D3] text-xs text-[#503E31]">
                    <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs" style="background-color: \${c.hex};"></span>
                    <span>\${c.name}</span>
                  </div>
                \`).join('')}
              </div>
            </div>

            <div class="pt-4 border-t border-[#EBDDCF] flex items-center justify-between text-xs text-[#7B6655]">
              <span>Reference Code: \${dress.id.toUpperCase()}</span>
              <span class="font-cormorant italic text-sm">Moonlit Closet Haute Couture</span>
            </div>
          </div>
        </div>
      \`;

      document.getElementById('modal-body').innerHTML = bodyHtml;
      const modal = document.getElementById('modal-backdrop');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeDressModal() {
      const modal = document.getElementById('modal-backdrop');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDressModal();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.resolve('public/moonlit-closet.html'), htmlContent, 'utf-8');
console.log('Successfully generated public/moonlit-closet.html with all Pakistani models and offline capability!');
