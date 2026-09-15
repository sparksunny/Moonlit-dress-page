import { DressDetail } from '../types';

import bridalModel1 from '../assets/images/bridal_model_one_1789309871195.jpg';
import bridalModel2 from '../assets/images/bridal_model_two_1789309893513.jpg';
import bridalModel3 from '../assets/images/bridal_model_three_1789309911530.jpg';
import bridalModel4 from '../assets/images/bridal_model_four_1789309926582.jpg';
import bridalModel5 from '../assets/images/bridal_model_five_1789310025395.jpg';
import bridalModel6 from '../assets/images/bridal_model_six_1789310041664.jpg';
import bridalModel7 from '../assets/images/bridal_model_seven_1789310101527.jpg';
import bridalModel8 from '../assets/images/bridal_model_eight_1789310118748.jpg';

import partyModel1 from '../assets/images/party_model_one_1789309944595.jpg';
import partyModel2 from '../assets/images/party_model_two_1789309964391.jpg';
import partyModel3 from '../assets/images/party_model_three_1789309982228.jpg';
import partyModel4 from '../assets/images/party_model_six_1789310075731.jpg';
import partyModel5 from '../assets/images/party_model_four_1789310004371.jpg';
import partyModel6 from '../assets/images/party_model_five_1789310057881.jpg';
import partyModel7 from '../assets/images/party_model_seven_1789310138043.jpg';
import partyModel8 from '../assets/images/party_model_eight_1789310153327.jpg';

export const BRIDAL_DRESSES: DressDetail[] = [
  {
    id: 'bridal-1',
    name: 'Moonlit Ivory',
    subtitle: 'Heavily Hand-Embroidered Bridal Peshwas & Flared Net Lehenga',
    category: 'Bridal Collection',
    description: 'A regal silhouette draped in sheer organza with celestial zardozi work and fine hand-sewn pearl filigree.',
    longDescription: 'Crafted with master artisanal technique, the Moonlit Ivory ensemble combines traditional mughalesque peshwas cutting with contemporary sheer organza layering. Over 280 hours of hand embroidery grace the front panels, encrusted with micro-pearls, cut-dana, and shimmering nakshi.',
    image: bridalModel1,
    features: [
      'Intricate Zardozi & Resham Embroidery',
      'Pure Organza & Silk Tissue Dupatta',
      'Handcrafted Pearl Tassel Latkans',
      'Scalloped Zari Border Hemline'
    ],
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
    image: bridalModel2,
    features: [
      'Floral Arabesque Threadwork',
      'Delicate Hand-Embroidered Sheer Veil',
      'Tailored Bodice with Keyhole Accent',
      'Voluminous Multi-Tiered Flared Hem'
    ],
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
    image: bridalModel3,
    features: [
      'Antique Dabka & Cutwork Detailing',
      'Featherweight Draped Silk Dupatta',
      'Cinched Waistband with Jewel Piping',
      'Artisanal Crystal Fringe Cuffs'
    ],
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
    image: bridalModel4,
    features: [
      'Heritage Farshi Gharara Silhouette',
      'Four-Sided Embroidered Border Dupatta',
      'Intricate Jaal Embroidery on Neckline',
      'Hand-Spun Metallic Threadwork'
    ],
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
    image: bridalModel5,
    features: [
      'Architectural Sculpted Bodice',
      'Botanical Needlework in Ivory Silk',
      'Gossamer Dupatta with Pearl Trim',
      'Graceful Hidden Pockets'
    ],
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
    image: bridalModel6,
    features: [
      '16-Kalidaar Voluminous Lehenga Skirt',
      'Hand-Embroidered Jewel-Neck Choli',
      'Twin Dupattas for Regal Bridal Draping',
      'Vintage Zari Borders'
    ],
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
    image: bridalModel7,
    features: [
      'Constellation Micro-Sequin Placement',
      'Delicate Flared Bell Sleeves',
      'Sheer Illusion Neckline',
      'Cascading Tulle Trail'
    ],
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
    image: bridalModel8,
    features: [
      'Subtle Vintage Rose Undertone',
      'Fine Wirework (Tilla & Marori)',
      'Handcrafted Scalloped Borders',
      'Pure Silk Flared Culottes'
    ],
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

export const PARTY_WEAR: DressDetail[] = [
  {
    id: 'party-1',
    name: 'Moonlit Pearl',
    subtitle: 'Contemporary Scalloped Kurta & Flared Trouser Ensemble',
    category: 'Party Wear',
    description: 'Crisp contemporary tailoring softened by pearl-dusted collars and shimmering sleeve borders.',
    longDescription: 'Moonlit Pearl redefines festive evening elegance. Tailored from lustrous raw silk with an asymmetrical hemline, adorned with micro-pearls and sheer organza cuff inserts for effortless modern poise.',
    image: partyModel1,
    features: [
      'Scalloped Organza Hemline & Cuffs',
      'Delicate Pearl Cluster Button Placket',
      'Tailored Straight-Leg Silk Trousers',
      'Airy Sheer Silk Dupatta'
    ],
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
    image: partyModel2,
    features: [
      'Floor-Length Sheer Embroidered Cape',
      'Minimalist Inner Slip Dress',
      'Geometric Sequin Chevron Patterns',
      'Mandarin Collar with Crystal Fastener'
    ],
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
    image: partyModel3,
    features: [
      'Heritage Crossover Angrakha Cut',
      'Artisanal Dori & Bell Tassels',
      'Silver Gota Patti & Sitara Trims',
      'Wide-Leg Flared Palazzo'
    ],
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
    image: partyModel4,
    features: [
      'Fitted Bodice with Flared Hem',
      'Draped Fluid Trousers',
      'Mirror-Work Accent Border',
      'Lightweight Shimmer Dupatta'
    ],
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
    image: partyModel5,
    features: [
      'Rich Micro-Velvet Royal Texture',
      'Dense Dabka & Antique Zardozi Work',
      'Raw Silk Cigarette Pants with Pearls',
      'Tissue Zari Draped Shawl'
    ],
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
    image: partyModel6,
    features: [
      'Floral Lattice Resham Jaal',
      'Voluminous Tiered Sharara Flare',
      'Featherlight Net Dupatta with Scallops',
      'Hand-Tied Pearl Piping'
    ],
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
    image: partyModel7,
    features: [
      'Pre-Pleated Ready-to-Wear Saree Silhouette',
      'Detachable Hand-Beaded Jewel Belt',
      'High-Neck Blouse with Sheer Back',
      'Cascading Dramatic Pallu'
    ],
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
    image: partyModel8,
    features: [
      '12-Kalidaar Fluid Evening Flare',
      'Liquid Gold Zari Threadwork',
      'Contrast Golden Tissue Dupatta',
      'Embellished Churidar Sleeves'
    ],
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
