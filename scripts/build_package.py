import os
import shutil
import zipfile
import json
import base64

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
IMAGES_SRC = os.path.join(ROOT_DIR, 'src', 'assets', 'images')
STATIC_DIR = os.path.join(ROOT_DIR, 'static-website')
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')

# Map of images to clean friendly names
IMAGE_MAP = {
    'hero': ('intro_bridal_hero_1789309137107.jpg', 'hero.jpg'),
    'bridal_1': ('bridal_model_one_1789309871195.jpg', 'bridal-1.jpg'),
    'bridal_2': ('bridal_model_two_1789309893513.jpg', 'bridal-2.jpg'),
    'bridal_3': ('bridal_model_three_1789309911530.jpg', 'bridal-3.jpg'),
    'bridal_4': ('bridal_model_four_1789309926582.jpg', 'bridal-4.jpg'),
    'bridal_5': ('bridal_model_five_1789310025395.jpg', 'bridal-5.jpg'),
    'bridal_6': ('bridal_model_six_1789310041664.jpg', 'bridal-6.jpg'),
    'bridal_7': ('bridal_model_seven_1789310101527.jpg', 'bridal-7.jpg'),
    'bridal_8': ('bridal_model_eight_1789310118748.jpg', 'bridal-8.jpg'),
    'party_1': ('party_model_one_1789309944595.jpg', 'party-1.jpg'),
    'party_2': ('party_model_two_1789309964391.jpg', 'party-2.jpg'),
    'party_3': ('party_model_three_1789309982228.jpg', 'party-3.jpg'),
    'party_4': ('party_model_six_1789310075731.jpg', 'party-4.jpg'),
    'party_5': ('party_model_four_1789310004371.jpg', 'party-5.jpg'),
    'party_6': ('party_model_five_1789310057881.jpg', 'party-6.jpg'),
    'party_7': ('party_model_seven_1789310138043.jpg', 'party-7.jpg'),
    'party_8': ('party_model_eight_1789310153327.jpg', 'party-8.jpg'),
}

# Catalog Data
BRIDAL_DATA = [
  {
    "id": "bridal-1",
    "image": "images/bridal-1.jpg",
    "name": "Moonlit Ivory",
    "subtitle": "Heavily Hand-Embroidered Bridal Peshwas & Flared Net Lehenga",
    "category": "Bridal Collection",
    "description": "A regal silhouette draped in sheer organza with celestial zardozi work and fine hand-sewn pearl filigree.",
    "longDescription": "Crafted with master artisanal technique, the Moonlit Ivory ensemble combines traditional mughalesque peshwas cutting with contemporary sheer organza layering. Over 280 hours of hand embroidery grace the front panels, encrusted with micro-pearls, cut-dana, and shimmering nakshi.",
    "features": ["Intricate Zardozi & Resham Embroidery", "Pure Organza & Silk Tissue Dupatta", "Handcrafted Pearl Tassel Latkans", "Scalloped Zari Border Hemline"],
    "fabrics": "Pure Organza, Micro-Tulle, Raw Silk Underlay",
    "craftsmanship": "Hand-sewn Nakshi, Pearls, Swarovski Crystals & Dabka",
    "perfectFor": ["Barat Ceremony", "Walima Reception", "Engagement", "Nikah"],
    "colorPalette": [
      { "name": "Warm Ivory", "hex": "#FAF6EE" },
      { "name": "Champagne Beige", "hex": "#EADBCE" },
      { "name": "Soft Gilded Gold", "hex": "#DFD1B5" },
      { "name": "Pearl Cream", "hex": "#F0ECE1" }
    ]
  },
  {
    "id": "bridal-2",
    "image": "images/bridal-2.jpg",
    "name": "Pearl Blossom",
    "subtitle": "Classic Floor-Length Kalidaar with Scalloped Tissue Dupatta",
    "category": "Bridal Collection",
    "description": "Cascading floral arabesques with micro-pearl embellishment and a layered crinoline floor skirt.",
    "longDescription": "Pearl Blossom is inspired by timeless royal courtyards, featuring blossom motifs embroidered in tone-on-tone resham and antique gold tilla. Accompanied by an ethereal sheer veil with delicate floral borders.",
    "features": ["Floral Arabesque Threadwork", "Delicate Hand-Embroidered Sheer Veil", "Tailored Bodice with Keyhole Accent", "Voluminous Multi-Tiered Flared Hem"],
    "fabrics": "Pure French Tulle, Banarasi Zari Silk",
    "craftsmanship": "Resham Floral Medallions, Gota Patti, Seed Pearls",
    "perfectFor": ["Nikah Ceremony", "Bridal Shower", "Walima", "Reception"],
    "colorPalette": [
      { "name": "Antique Pearl", "hex": "#F4EFE6" },
      { "name": "Pale Champagne", "hex": "#EDE3D5" },
      { "name": "Soft Taupe", "hex": "#D6C7B2" },
      { "name": "Warm Cream", "hex": "#FAF7F0" }
    ]
  },
  {
    "id": "bridal-3",
    "image": "images/bridal-3.jpg",
    "name": "Champagne Grace",
    "subtitle": "Regal Farshi Gharara & Kalidaar Kurti with Antique Dabka",
    "category": "Bridal Collection",
    "description": "Subtle metallic champagne hues intertwined with antique dabka and fine sequin detailing.",
    "longDescription": "Radiating understated grandeur, Champagne Grace pairs champagne tissue with antique silver and gold micro-elements. The dramatic trailing hem creates an enchanting bridal entry statement.",
    "features": ["Antique Dabka & Cutwork Detailing", "Featherweight Draped Silk Dupatta", "Cinched Waistband with Jewel Piping", "Artisanal Crystal Fringe Cuffs"],
    "fabrics": "Tissue Silk, Lurex Net, Pure Crepe Lining",
    "craftsmanship": "Kora Dabka, Sequins, Cutwork Borders",
    "perfectFor": ["Walima Reception", "Engagement Soiree", "Cocktail Bridal", "Barat"],
    "colorPalette": [
      { "name": "Champagne Glow", "hex": "#E5D6C5" },
      { "name": "Muted Sand", "hex": "#D8C5B0" },
      { "name": "Warm Ochre", "hex": "#C9B198" },
      { "name": "Ivory Frost", "hex": "#F5EFE7" }
    ]
  },
  {
    "id": "bridal-4",
    "image": "images/bridal-4.jpg",
    "name": "Golden Garden",
    "subtitle": "Blush & Ivory Peshwas Gown with Flora-Inspired Tilla",
    "category": "Bridal Collection",
    "description": "Warm champagne gold tilla weave honoring heritage bridal grandeur with timeless poise.",
    "longDescription": "Golden Garden is a tribute to heritage craftsmanship. Features a masterfully hand-woven flare, detailed with floral motifs, zardozi borders, and an opulent four-sided border dupatta.",
    "features": ["Heritage Farshi Gharara Silhouette", "Four-Sided Embroidered Border Dupatta", "Intricate Jaal Embroidery on Neckline", "Hand-Spun Metallic Threadwork"],
    "fabrics": "Jamawar Brocade, Pure Chiffon, Butter Silk",
    "craftsmanship": "Traditional Tilla Weave, Zardozi, Kundan Beads",
    "perfectFor": ["Barat Wedding", "Traditional Mehndi", "Nikah Ceremony", "Sangeet"],
    "colorPalette": [
      { "name": "Muted Gold", "hex": "#D5BE9E" },
      { "name": "Warm Wheat", "hex": "#E7D8C4" },
      { "name": "Soft Taupe", "hex": "#CDB9A2" },
      { "name": "Pale Ecru", "hex": "#F2ECE1" }
    ]
  },
  {
    "id": "bridal-5",
    "image": "images/bridal-5.jpg",
    "name": "Ivory Elegance",
    "subtitle": "Regal Ivory & Champagne Gown with Fine Threadwork Kalis",
    "category": "Bridal Collection",
    "description": "Clean modern cuts softened with romantic pearl clusters and botanical needlework.",
    "longDescription": "A masterclass in modern bridal couture. Ivory Elegance balances minimalist structural lines with delicate botanical embellishments, making it a favorite for the discerning bride who seeks quiet luxury.",
    "features": ["Architectural Sculpted Bodice", "Botanical Needlework in Ivory Silk", "Gossamer Dupatta with Pearl Trim", "Graceful Hidden Pockets"],
    "fabrics": "Italian Heavy Silk Crepe, Hand-Woven Organza",
    "craftsmanship": "Tone-on-tone French Knots, Pearl Studs, Sheer Applique",
    "perfectFor": ["Nikah Ceremony", "Civil Wedding", "Intimate Soiree", "Walima"],
    "colorPalette": [
      { "name": "Pure Ivory", "hex": "#FDFBF7" },
      { "name": "Alabaster", "hex": "#F4EFEA" },
      { "name": "Vanilla Beige", "hex": "#E8DEC8" },
      { "name": "Soft Ecru", "hex": "#DFD5BE" }
    ]
  },
  {
    "id": "bridal-6",
    "image": "images/bridal-6.jpg",
    "name": "Royal Bloom",
    "subtitle": "Opulent Embroidered Lehenga with Regal Resham Motifs",
    "category": "Bridal Collection",
    "description": "A lavish display of royal floral tapestries woven in muted golds, ivory, and soft sand.",
    "longDescription": "Royal Bloom captures regal grandeur through extensive paneling and intricate botanical motifs. Each panel of the flared lehenga tells a unique artisanal story, framed by borders of scalloped gold work.",
    "features": ["16-Kalidaar Voluminous Lehenga Skirt", "Hand-Embroidered Jewel-Neck Choli", "Twin Dupattas for Regal Bridal Draping", "Vintage Zari Borders"],
    "fabrics": "Raw Silk, Tissue Organza, Chiffon Dupattas",
    "craftsmanship": "Hand Resham, Mukaish Sparkles, Semi-Precious Beads",
    "perfectFor": ["Barat Grand Entrance", "Royal Reception", "Formal Nikah", "Sangeet"],
    "colorPalette": [
      { "name": "Royal Ivory", "hex": "#FBF8F2" },
      { "name": "Champagne Taupe", "hex": "#DACABA" },
      { "name": "Soft Muted Gold", "hex": "#C8B091" },
      { "name": "Warm Linen", "hex": "#EBE2D5" }
    ]
  },
  {
    "id": "bridal-7",
    "image": "images/bridal-7.jpg",
    "name": "Celestial Embroidery",
    "subtitle": "Ethereal Sheer Overlay Peshwas with Starlit Sequins",
    "category": "Bridal Collection",
    "description": "Drifting constellations of micro-crystals and silver zari across translucent champagne tulle.",
    "longDescription": "Designed to mimic starry night radiance, Celestial Embroidery catches the ambient glow from every vantage point. Features a sheer high neckline and delicate bell sleeves lined with pearl tassels.",
    "features": ["Constellation Micro-Sequin Placement", "Delicate Flared Bell Sleeves", "Sheer Illusion Neckline", "Cascading Tulle Trail"],
    "fabrics": "Whisper-Weight French Tulle, Silk Crepe Lining",
    "craftsmanship": "Micro-Sequins, Silver Zari, Delicate Cut-Glass Beads",
    "perfectFor": ["Evening Reception", "Engagement Party", "Walima Dinner", "Bridal Shower"],
    "colorPalette": [
      { "name": "Celestial White", "hex": "#F9F7F4" },
      { "name": "Silver Champagne", "hex": "#E2DBD0" },
      { "name": "Starlight Beige", "hex": "#D2C5B4" },
      { "name": "Soft Mink", "hex": "#C1B2A1" }
    ]
  },
  {
    "id": "bridal-8",
    "image": "images/bridal-8.jpg",
    "name": "Blush Heritage",
    "subtitle": "Subtle Rose-Champagne Kalidaar with Antique Silver Wirework",
    "category": "Bridal Collection",
    "description": "A romantic fusion of faint blush warmth, ivory silk, and antique metallic hand-embroidery.",
    "longDescription": "Blush Heritage introduces the softest whisper of vintage blush into a champagne ivory base. Finished with antique silver wirework and delicate rosewater-hued silk thread embroidery.",
    "features": ["Subtle Vintage Rose Undertone", "Fine Wirework (Tilla & Marori)", "Handcrafted Scalloped Borders", "Pure Silk Flared Culottes"],
    "fabrics": "Pure Katan Silk, Organza Veil, Satin Lining",
    "craftsmanship": "Marori Work, Antique Gota, Rose-Toned Resham",
    "perfectFor": ["Daytime Nikah", "Bridal Luncheon", "Barat Ceremony", "Engagement"],
    "colorPalette": [
      { "name": "Blush Champagne", "hex": "#EFE2DC" },
      { "name": "Vintage Rose Ecru", "hex": "#E5D3CA" },
      { "name": "Warm Ivory", "hex": "#F8F4EE" },
      { "name": "Soft Taupe", "hex": "#CDBEAF" }
    ]
  }
]

PARTY_DATA = [
  {
    "id": "party-1",
    "image": "images/party-1.jpg",
    "name": "Moonlit Pearl",
    "subtitle": "Contemporary Scalloped Kurta & Flared Trouser Ensemble",
    "category": "Party Wear",
    "description": "Crisp contemporary tailoring softened by pearl-dusted collars and shimmering sleeve borders.",
    "longDescription": "Moonlit Pearl redefines festive evening elegance. Tailored from lustrous raw silk with an asymmetrical hemline, adorned with micro-pearls and sheer organza cuff inserts for effortless modern poise.",
    "features": ["Scalloped Organza Hemline & Cuffs", "Delicate Pearl Cluster Button Placket", "Tailored Straight-Leg Silk Trousers", "Airy Sheer Silk Dupatta"],
    "fabrics": "Pure Raw Silk 80g, Organza Accents",
    "craftsmanship": "Micro-Pearl Cluster Work, Thread Embroidery",
    "perfectFor": ["Engagement Soiree", "Eid Celebration", "Festive Dinner", "Qawwali Night"],
    "colorPalette": [
      { "name": "Dusted Rose Taupe", "hex": "#DBC5B8" },
      { "name": "Warm Champagne", "hex": "#EADBCF" },
      { "name": "Soft Muted Ivory", "hex": "#F7F3EB" },
      { "name": "Dark Mocha", "hex": "#5E4839" }
    ]
  },
  {
    "id": "party-2",
    "image": "images/party-2.jpg",
    "name": "Champagne Glow",
    "subtitle": "Sleek Gilded Cape & Column Slip Dress with Resham Work",
    "category": "Party Wear",
    "description": "A luminous sheer cape adorned with geometric sequin lines layered over a minimalist slip.",
    "longDescription": "Capturing modern red-carpet panache, Champagne Glow pairs a floor-sweeping sheer cape with a tailored internal silk slip. Hand-embroidered in geometric chevron sequences with champagne gold sequins.",
    "features": ["Floor-Length Sheer Embroidered Cape", "Minimalist Inner Slip Dress", "Geometric Sequin Chevron Patterns", "Mandarin Collar with Crystal Fastener"],
    "fabrics": "Pure Chiffon Cape, Korean Raw Silk Slip",
    "craftsmanship": "Cut-Dana, Sequin Beading, Hand-Finished Borders",
    "perfectFor": ["Cocktail Reception", "Sangeet Party", "Formal Gala", "After-Party"],
    "colorPalette": [
      { "name": "Champagne Sand", "hex": "#DECBB7" },
      { "name": "Golden Taupe", "hex": "#CDB59E" },
      { "name": "Rich Espresso", "hex": "#4A3427" },
      { "name": "Ivory Cream", "hex": "#FAF6EE" }
    ]
  },
  {
    "id": "party-3",
    "image": "images/party-3.jpg",
    "name": "Rose Mist",
    "subtitle": "Dusty Rose Angrakha Silhouette with Silver Gota Patti",
    "category": "Party Wear",
    "description": "A romantic crossover angrakha cut with intricate silver threadwork and flowing chiffon flare.",
    "longDescription": "Rose Mist weaves nostalgia into modern party wear. The crossover wrap bodice features hand-tied dori tassels and scalloped silver gota patti borders that sway gracefully with every step.",
    "features": ["Heritage Crossover Angrakha Cut", "Artisanal Dori & Bell Tassels", "Silver Gota Patti & Sitara Trims", "Wide-Leg Flared Palazzo"],
    "fabrics": "Pure Crinkle Chiffon, Cotton Silk Underlay",
    "craftsmanship": "Silver Zari, Sitara Work, Resham Threading",
    "perfectFor": ["Sangeet Night", "Mehndi Festive Party", "Family Dinners", "Bridal Shower"],
    "colorPalette": [
      { "name": "Dusty Rose", "hex": "#D3AFA4" },
      { "name": "Soft Mauve Taupe", "hex": "#C0A29A" },
      { "name": "Champagne Frost", "hex": "#EAE1D9" },
      { "name": "Warm Chocolate", "hex": "#3E2A20" }
    ]
  },
  {
    "id": "party-4",
    "image": "images/party-4.jpg",
    "name": "Golden Whisper",
    "subtitle": "Embroidered Festive Kurta with Organza Scalloped Sleeves",
    "category": "Party Wear",
    "description": "Youthful festive flair featuring a structured silhouette and artfully draped organza dupatta.",
    "longDescription": "Designed for effortless movement during festive dancing and celebrations, Golden Whisper blends an intricately embellished top with fluid trousers in warm champagne hues.",
    "features": ["Fitted Bodice with Flared Hem", "Draped Fluid Trousers", "Mirror-Work Accent Border", "Lightweight Shimmer Dupatta"],
    "fabrics": "Silk Jacquard, Draped Organza, Crepe Silk",
    "craftsmanship": "Foil Mirror Accents, Thread Zari, Hand Tassels",
    "perfectFor": ["Mehndi Sangeet", "Dholak Night", "Festive Brunch", "Intimate Celebrations"],
    "colorPalette": [
      { "name": "Warm Sand", "hex": "#E5D6C1" },
      { "name": "Golden Honey", "hex": "#D2BC9C" },
      { "name": "Light Mocha", "hex": "#8B745D" },
      { "name": "Soft Cream", "hex": "#F9F5EC" }
    ]
  },
  {
    "id": "party-5",
    "image": "images/party-5.jpg",
    "name": "Velvet Bloom",
    "subtitle": "Plush Silk-Velvet Kurti with Intricate Zardozi Neckline",
    "category": "Party Wear",
    "description": "Sumptuous micro-velvet tailored in a deep warm espresso hue with antique gold embroidery.",
    "longDescription": "The pinnacle of winter evening glamour. Velvet Bloom features rich micro-velvet that captures ambient salon lighting, highlighted by dense dabka and resham floral vines along the neckline and hem.",
    "features": ["Rich Micro-Velvet Royal Texture", "Dense Dabka & Antique Zardozi Work", "Raw Silk Cigarette Pants with Pearls", "Tissue Zari Draped Shawl"],
    "fabrics": "Micro-Velvet 9000, Banarasi Tissue Silk Shawl",
    "craftsmanship": "Antique Dabka, Resham Leaves, Cutwork",
    "perfectFor": ["Winter Weddings", "Valima Soiree", "High-End Banquets", "Formal Evenings"],
    "colorPalette": [
      { "name": "Warm Espresso", "hex": "#3C281D" },
      { "name": "Antique Bronze Gold", "hex": "#B89B72" },
      { "name": "Mocha Taupe", "hex": "#8A705E" },
      { "name": "Champagne Beige", "hex": "#E7DAD0" }
    ]
  },
  {
    "id": "party-6",
    "image": "images/party-6.jpg",
    "name": "Soft Radiance",
    "subtitle": "Pastel Mint & Champagne Sharara Suit with Resham Jaal",
    "category": "Party Wear",
    "description": "Delicate floral lattice embroidery over an opulent tiered sharara silhouette.",
    "longDescription": "Soft Radiance provides an airy, refreshing festive look. The sheer organza kurta is embroidered in fine pastel mint and champagne threads over a voluminous flared sharara skirt.",
    "features": ["Floral Lattice Resham Jaal", "Voluminous Tiered Sharara Flare", "Featherlight Net Dupatta with Scallops", "Hand-Tied Pearl Piping"],
    "fabrics": "Organza, Korean Georgette, Butter Silk Underlay",
    "craftsmanship": "Resham Jaal, Mukaish Grains, Pearl Drop Accents",
    "perfectFor": ["Daytime Engagement", "Nikah Celebration", "Festive Luncheon", "Eid Gathering"],
    "colorPalette": [
      { "name": "Pale Sage Mint", "hex": "#D5DBD1" },
      { "name": "Champagne Cream", "hex": "#EFE8DE" },
      { "name": "Warm Taupe", "hex": "#C2B3A3" },
      { "name": "Dark Chocolate", "hex": "#37271D" }
    ]
  },
  {
    "id": "party-7",
    "image": "images/party-7.jpg",
    "name": "Evening Grace",
    "subtitle": "Modern Draped Festive Formal with Embellished Belt",
    "category": "Party Wear",
    "description": "Modern pre-pleated drape with a hand-embroidered waist belt and jewel-neck silhouette.",
    "longDescription": "Effortlessly dramatic without the hassle of traditional draping. Evening Grace is pre-stitched in fluid champagne satin georgette, anchored by a detachable belt crafted with hand-beaded pearls and crystals.",
    "features": ["Pre-Pleated Ready-to-Wear Saree Silhouette", "Detachable Hand-Beaded Jewel Belt", "High-Neck Blouse with Sheer Back", "Cascading Dramatic Pallu"],
    "fabrics": "Satin Georgette, Raw Silk Blouse",
    "craftsmanship": "Swarovski Crystal Beading, Cut-Dana, Seed Pearls",
    "perfectFor": ["Cocktail Reception", "Bridal Shower", "Sangeet Party", "Black-Tie Festive"],
    "colorPalette": [
      { "name": "Champagne Satin", "hex": "#E5D6C5" },
      { "name": "Soft Taupe Gray", "hex": "#C4B7AA" },
      { "name": "Ivory Shimmer", "hex": "#FAF6EE" },
      { "name": "Warm Espresso", "hex": "#432E22" }
    ]
  },
  {
    "id": "party-8",
    "image": "images/party-8.jpg",
    "name": "Midnight Elegance",
    "subtitle": "Deep Cocoa Kalidaar with Liquid Gold Zari Embroidery",
    "category": "Party Wear",
    "description": "A rich chocolate-brown canvas illuminated by luminous liquid gold zari and sequin lines.",
    "longDescription": "Midnight Elegance commands attention with its dark espresso tone and reflective metallic embroidery. The 12-kalidaar flare spins gracefully during celebratory festivities, finished with a contrasting tissue dupatta.",
    "features": ["12-Kalidaar Fluid Evening Flare", "Liquid Gold Zari Threadwork", "Contrast Golden Tissue Dupatta", "Embellished Churidar Sleeves"],
    "fabrics": "Pure Bamberg Chiffon, Metallic Tissue Dupatta",
    "craftsmanship": "Fine Zari Weave, Gold Sitara Work, Tilla Hem",
    "perfectFor": ["Formal Dinner Party", "Walima Reception", "Qawwali Night", "Evening Soiree"],
    "colorPalette": [
      { "name": "Deep Cocoa Brown", "hex": "#2F1E16" },
      { "name": "Liquid Gold Zari", "hex": "#D6BC91" },
      { "name": "Warm Sand", "hex": "#E2D1BD" },
      { "name": "Soft Champagne", "hex": "#EFE5D8" }
    ]
  }
]

ALL_DRESSES = BRIDAL_DATA + PARTY_DATA

def setup_static_website():
    print("Setting up static-website directory...")
    # Clean/create static-website directory structure
    if os.path.exists(STATIC_DIR):
        shutil.rmtree(STATIC_DIR)
    os.makedirs(os.path.join(STATIC_DIR, 'css'), exist_ok=True)
    os.makedirs(os.path.join(STATIC_DIR, 'js'), exist_ok=True)
    os.makedirs(os.path.join(STATIC_DIR, 'images'), exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    # 1. Copy and rename images
    for key, (src_name, dest_name) in IMAGE_MAP.items():
        src_path = os.path.join(IMAGES_SRC, src_name)
        dest_path = os.path.join(STATIC_DIR, 'images', dest_name)
        if os.path.exists(src_path):
            shutil.copyfile(src_path, dest_path)
            # Also keep a copy in public/images for dev server
            os.makedirs(os.path.join(PUBLIC_DIR, 'images'), exist_ok=True)
            shutil.copyfile(src_path, os.path.join(PUBLIC_DIR, 'images', dest_name))
        else:
            print(f"Warning: image source {src_path} not found!")

    # 2. Generate CSS
    css_content = """/* MOONLIT CLOSET — Elegance and Style */
/* Production-ready standalone stylesheet for Google Chrome & Web Hosting */

:root {
  --bg-cream: #FAF7F0;
  --bg-card: #FDFBF7;
  --text-main: #382519;
  --text-dark: #2A1A12;
  --text-muted: #7A6655;
  --accent-gold: #C5A880;
  --border-subtle: #EBE1D4;
  --border-light: #E0D3C3;
  --color-primary: #342217;
  --color-primary-hover: #483324;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background-color: var(--bg-cream);
  color: var(--text-main);
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
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

/* Scrollbars */
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #FAF7F0;
}
::-webkit-scrollbar-thumb {
  background: #D8C7B5;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #BFA995;
}

/* Layout Containers */
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  background-color: rgba(250, 247, 240, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
}

.brand-logo {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.65rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.brand-slogan {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  color: var(--text-muted);
}

.brand-slogan-line {
  display: inline-block;
  width: 16px;
  height: 1px;
  background-color: #D8C7B4;
}

.nav-links {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
  color: #675446;
  transition: color 0.2s;
  padding: 0.25rem 0;
}

.nav-link:hover {
  color: var(--text-dark);
}

.header-actions {
  display: none;
  align-items: center;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .header-actions {
    display: flex;
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  background-color: var(--color-primary);
  color: #FAF7F0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(52, 34, 23, 0.15);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  background-color: #EFE6DA;
  color: #342217;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #DFCDBB;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #E5D7C7;
  transform: translateY(-1px);
}

/* Hero Section */
.hero-section {
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  background: linear-gradient(180deg, #FAF7F0 0%, #FAF5EC 50%, #FAF7F0 100%);
  position: relative;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2.5rem;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  background-color: rgba(239, 230, 218, 0.8);
  border: 1px solid #E3D6C6;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-weight: 600;
  color: #5F4B3C;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.35rem;
  line-height: 1.18;
  color: #2C1D14;
  margin-top: 0.5rem;
  font-weight: 400;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.25rem;
  }
}

.hero-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.25rem;
  color: #826C58;
  margin-bottom: 0.25rem;
}

.hero-text {
  color: #5F4B3C;
  font-size: 0.95rem;
  line-height: 1.75;
  margin-top: 1.25rem;
  font-weight: 300;
  max-width: 34rem;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.spec-box {
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
}

.spec-box-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #8B7460;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.spec-box-val {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  color: #4A3525;
}

/* Fashion Frame */
.fashion-frame {
  position: relative;
  border-radius: 1.25rem;
  padding: 1rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.fashion-frame-inner {
  position: relative;
  overflow: hidden;
  border-radius: 0.85rem;
  aspect-ratio: 3 / 4;
  background-color: #EFE9DF;
}

.fashion-frame-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.7s ease;
}

.fashion-frame:hover .fashion-frame-inner img {
  transform: scale(1.03);
}

.fashion-frame-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  padding: 0.85rem 1rem;
  border-radius: 0.6rem;
  background: rgba(250, 247, 242, 0.92);
  backdrop-filter: blur(6px);
  border: 1px solid #E8DEC8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Catalog Sections */
.catalog-section {
  padding-top: 5rem;
  padding-bottom: 5.5rem;
  background-color: var(--bg-cream);
  border-top: 1px solid var(--border-subtle);
}

.section-header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 3.5rem auto;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  color: #2F1E14;
  font-weight: 400;
  letter-spacing: -0.01em;
  margin-top: 0.5rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.85rem;
  }
}

.section-desc {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.25rem;
  color: #78614E;
  margin-top: 0.5rem;
}

/* Card Grid */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .cards-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Dress Card */
.dress-card {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.dress-card:hover {
  border-color: #DAC7B0;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(60, 40, 25, 0.08);
}

.dress-card-img-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: #EFE9DF;
}

.dress-card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.6s ease;
}

.dress-card:hover .dress-card-img-wrap img {
  transform: scale(1.05);
}

.card-category-pill {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: rgba(250, 247, 242, 0.92);
  backdrop-filter: blur(4px);
  border: 1px solid #E2D5C4;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  color: #5C4839;
}

.card-inspect-overlay {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  padding: 0.65rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(250, 247, 242, 0.95);
  backdrop-filter: blur(6px);
  border: 1px solid #DAC8B4;
  color: #362417;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.3s ease;
}

.dress-card:hover .card-inspect-overlay {
  opacity: 1;
  transform: translateY(0);
}

.dress-card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  background-color: var(--bg-card);
}

.dress-card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: #2F1F15;
  font-weight: 400;
  margin-bottom: 0.25rem;
}

.dress-card-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 0.85rem;
  color: #826955;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dress-card-desc {
  font-size: 0.75rem;
  color: #6B5749;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dress-card-footer {
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid #EAE0D3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
}

.dress-card-tag {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #86705D;
  font-weight: 600;
  font-size: 0.65rem;
}

.dress-card-action {
  color: #4F392B;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: rgba(38, 24, 16, 0.75);
  backdrop-filter: blur(4px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  overflow-y: auto;
}

.modal-backdrop.active {
  display: flex;
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 54rem;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 1.25rem;
  background-color: #FAF7F0;
  border: 1px solid #E5D7C7;
  padding: 2rem;
  color: #38261A;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: rgba(239, 228, 214, 0.8);
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4A3527;
  transition: background-color 0.2s;
}

.modal-close:hover {
  background-color: #E5D6C4;
}

/* Footer */
.site-footer {
  background-color: #2A1B12;
  color: #EFE4D6;
  border-top: 1px solid #443023;
}

.footer-top-strip {
  background-color: #372418;
  border-bottom: 1px solid #4A3425;
  padding: 0.85rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #D8C7B4;
  text-align: center;
}

.footer-main {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 5fr 3fr 4fr;
    gap: 3.5rem;
  }
}

.footer-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #FAF5ED;
}

.footer-section-title {
  font-family: 'Playfair Display', serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #F3E9DD;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #C4B29E;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #FFFFFF;
}

.offline-card {
  margin-top: 3.5rem;
  padding: 1.75rem;
  border-radius: 1rem;
  background-color: #342217;
  border: 1px solid #4C3524;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .offline-card {
    flex-direction: row;
  }
}

.offline-card-btn {
  background-color: #FAF7F0;
  color: #2C1C13;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.offline-card-btn:hover {
  background-color: #FFFFFF;
  transform: scale(1.02);
}

.footer-bottom {
  border-top: 1px solid #3F2B1F;
  padding-top: 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #9B8574;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

/* Mobile Nav Drawer */
.mobile-nav-toggle {
  display: inline-flex;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid #E0D3C3;
  border-radius: 0.5rem;
  color: #382519;
  cursor: pointer;
}

@media (min-width: 768px) {
  .mobile-nav-toggle {
    display: none;
  }
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 1.25rem;
  background-color: #FAF7F0;
  border-top: 1px solid var(--border-subtle);
  gap: 0.75rem;
}

.mobile-menu.active {
  display: flex;
}
"""
    with open(os.path.join(STATIC_DIR, 'css', 'style.css'), 'w', encoding='utf-8') as f:
        f.write(css_content)

    # 3. Generate JS
    js_content = """/* MOONLIT CLOSET — Elegance and Style */
/* Pure Vanilla JavaScript — 100% Compatible with Chrome file:/// and Hosting Agents */

const CATALOG = """ + json.dumps(ALL_DRESSES) + """;

function openDressModal(dressId) {
  const dress = CATALOG.find(d => d.id === dressId);
  if (!dress) return;

  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-body');

  const paletteHtml = dress.colorPalette.map(c => `
    <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.85rem; border-radius: 9999px; background: #FAF7F2; border: 1px solid #EAE0D3; font-size: 0.75rem; color: #503E31;">
      <span style="width: 0.85rem; height: 0.85rem; border-radius: 9999px; border: 1px solid rgba(0,0,0,0.1); background-color: ${c.hex}; display: inline-block;"></span>
      <span>${c.name}</span>
    </div>
  `).join('');

  const featuresHtml = dress.features.map(f => `
    <div style="padding: 0.65rem 0.85rem; border-radius: 0.5rem; background: #FAF7F2; border: 1px solid #EAE0D3; font-size: 0.75rem; color: #523F32; display: flex; align-items: center; gap: 0.5rem;">
      <span style="color: #C5A880;">✦</span>
      <span>${f}</span>
    </div>
  `).join('');

  const occasionsHtml = dress.perfectFor.map(o => `
    <span style="padding: 0.25rem 0.65rem; border-radius: 9999px; background: #EFE6DA; color: #574335; font-size: 0.7rem; font-weight: 500;">${o}</span>
  `).join('');

  modalBody.innerHTML = `
    <div style="border-bottom: 1px solid #EBDDCF; padding-bottom: 1rem; margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.25em; color: #866D59; font-weight: 600;">Moonlit Closet Haute Couture</span>
        <span style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.85rem; color: #967C67;">Artisanal Repertoire</span>
      </div>
      <h3 style="font-family: 'Playfair Display', serif; font-size: 1.85rem; color: #2F1D14; margin-top: 0.25rem; font-weight: 400;">${dress.name}</h3>
      <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.95rem; color: #7D6654; margin-top: 0.25rem;">${dress.subtitle}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div style="border-radius: 0.85rem; overflow: hidden; aspect-ratio: 3/4; background: #EFE8DE; border: 1px solid #E5D7C8; max-width: 22rem; margin: 0 auto; width: 100%;">
          <img src="${dress.image}" alt="${dress.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
        </div>
        <div style="padding: 0.85rem 1rem; border-radius: 0.6rem; background: #FAF7F2; border: 1px solid #E7D9CA; font-size: 0.75rem; color: #735D4B; line-height: 1.6;">
          <strong style="display: block; text-transform: uppercase; letter-spacing: 0.15em; font-size: 0.65rem; color: #8B735F; margin-bottom: 0.25rem;">Atelier Note</strong>
          Authentic Pakistani haute couture. Hand-tailored with pure fabrics and traditional handwork (Zardozi, Resham, Dabka, Tilla).
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        <div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.2em; color: #432F22; margin-bottom: 0.5rem;">Artisanal Narrative</h4>
          <p style="font-size: 0.85rem; color: #5C483A; line-height: 1.7; font-weight: 300;">${dress.longDescription}</p>
        </div>

        <div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.2em; color: #432F22; margin-bottom: 0.5rem;">Key Highlights</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
            ${featuresHtml}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div style="padding: 0.85rem; border-radius: 0.6rem; background: #FAF7F2; border: 1px solid #EAE0D3;">
            <span style="display: block; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: #826C5A; font-weight: 600; margin-bottom: 0.25rem;">Pure Fabrics</span>
            <span style="font-size: 0.75rem; color: #412E21; font-weight: 500;">${dress.fabrics}</span>
          </div>
          <div style="padding: 0.85rem; border-radius: 0.6rem; background: #FAF7F2; border: 1px solid #EAE0D3;">
            <span style="display: block; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: #826C5A; font-weight: 600; margin-bottom: 0.25rem;">Hand Craftsmanship</span>
            <span style="font-size: 0.75rem; color: #412E21; font-weight: 500;">${dress.craftsmanship}</span>
          </div>
        </div>

        <div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.2em; color: #432F22; margin-bottom: 0.5rem;">Color Palette</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${paletteHtml}
          </div>
        </div>

        <div>
          <h4 style="font-family: 'Playfair Display', serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.2em; color: #432F22; margin-bottom: 0.5rem;">Perfect For Occasions</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${occasionsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDressModal() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Global keydown handler for Escape
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeDressModal();
  }
});
"""
    with open(os.path.join(STATIC_DIR, 'js', 'app.js'), 'w', encoding='utf-8') as f:
        f.write(js_content)

    # 4. Generate Cards HTML for index.html
    def build_cards(items):
        cards = []
        for item in items:
            card = f"""
        <div id="dress-card-{item['id']}" class="dress-card" onclick="openDressModal('{item['id']}')">
          <div class="dress-card-img-wrap">
            <img src="{item['image']}" alt="{item['name']} - {item['category']}" loading="lazy">
            <div class="card-category-pill">{item['category']}</div>
            <div class="card-inspect-overlay">
              <span>Inspect Craftsmanship</span>
              <span>↗</span>
            </div>
          </div>
          <div class="dress-card-body">
            <div>
              <h3 class="dress-card-title">{item['name']}</h3>
              <p class="dress-card-subtitle">{item['subtitle']}</p>
              <p class="dress-card-desc">{item['description']}</p>
            </div>
            <div class="dress-card-footer">
              <span class="dress-card-tag">Pakistani Couture</span>
              <span class="dress-card-action">
                <span>View Details</span>
                <span>→</span>
              </span>
            </div>
          </div>
        </div>"""
            cards.append(card)
        return "\n".join(cards)

    bridal_cards = build_cards(BRIDAL_DATA)
    party_cards = build_cards(PARTY_DATA)

    # 5. Generate index.html
    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MOONLIT CLOSET — Elegance and Style</title>
  <meta name="description" content="A luxury Pakistani bridal and party wear catalog showcase embodying elegance, refined craftsmanship, and timeless style.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Alex+Brush&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- 1. HEADER SECTION -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="#home" class="brand-logo">
          <span class="brand-title">Moonlit Closet <span style="color: #C5A880; font-size: 1rem;">♡</span></span>
          <div class="brand-slogan">
            <span class="brand-slogan-line"></span>
            <span>Elegance and Style</span>
          </div>
        </a>

        <nav class="nav-links">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#bridal" class="nav-link">Bridal Dresses</a>
          <a href="#party-wear" class="nav-link">Party Wear</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="header-actions">
          <a href="#bridal" class="btn-primary">
            <span>Explore Collection</span>
            <span>↓</span>
          </a>
        </div>

        <button class="mobile-nav-toggle" onclick="toggleMobileMenu()" aria-label="Toggle navigation menu">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div id="mobile-menu" class="mobile-menu">
      <a href="#home" class="nav-link" onclick="toggleMobileMenu()">Home</a>
      <a href="#about" class="nav-link" onclick="toggleMobileMenu()">About</a>
      <a href="#bridal" class="nav-link" onclick="toggleMobileMenu()">Bridal Dresses</a>
      <a href="#party-wear" class="nav-link" onclick="toggleMobileMenu()">Party Wear</a>
      <a href="#contact" class="nav-link" onclick="toggleMobileMenu()">Contact</a>
    </div>
  </header>

  <!-- 2. INTRODUCTION / HERO SECTION -->
  <section id="home" class="hero-section">
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 1.5rem; border-bottom: 1px solid #E8DDD0;">
        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.25em; color: #7B6654; font-weight: 500;">
          <span>Moonlit Editorial</span>
          <span style="color: #C5A880; margin: 0 0.5rem;">✦</span>
          <span>Vol. 2026</span>
        </div>
        <div class="font-cormorant" style="font-style: italic; font-size: 0.95rem; color: #87715E;">
          Refined Pakistani Couture
        </div>
      </div>

      <div id="about" class="hero-grid">
        <!-- Text presentation -->
        <div>
          <div class="pill-tag">
            <span>Atelier Showcase</span>
            <span style="color: #A88864;">♡</span>
          </div>
          <div style="margin-top: 1rem;">
            <span class="hero-subtitle">The Art of Draping</span>
            <h1 class="hero-title">Elegance for Every Occasion</h1>
          </div>
          <p class="hero-text">
            Welcome to <strong>Moonlit Closet</strong>, where every garment is conceived as wearable poetry. Discover our bespoke repertoire of authentic Pakistani bridal masterpieces and celebratory evening wear, handcrafted in pure silks, shimmering organzas, and intricate zardozi needlework.
          </p>
          <div class="spec-grid">
            <div class="spec-box">
              <span class="spec-box-label">Craftsmanship</span>
              <span class="spec-box-val">Zardozi &amp; Tilla</span>
            </div>
            <div class="spec-box">
              <span class="spec-box-label">Fabrics</span>
              <span class="spec-box-val">Pure Silk &amp; Net</span>
            </div>
            <div class="spec-box">
              <span class="spec-box-label">Tailoring</span>
              <span class="spec-box-val">Bespoke Fit</span>
            </div>
          </div>
          <div style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem;">
            <a href="#bridal" class="btn-primary">Explore Bridal Edit ↓</a>
            <a href="#party-wear" class="btn-secondary">Party Wear Collection →</a>
          </div>
        </div>

        <!-- Fashion Image Showcase -->
        <div class="fashion-frame">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #7D6855; border-bottom: 1px solid #EDE3D6; padding-bottom: 0.5rem; margin-bottom: 0.75rem;">
            <span class="font-serif" style="letter-spacing: 0.15em; text-transform: uppercase;">Moonlit Atelier</span>
            <span class="font-script" style="font-size: 1.15rem; color: #5D4737;">Bride to Be ♡</span>
          </div>
          <div class="fashion-frame-inner">
            <img src="images/hero.jpg" alt="Moonlit Closet Pakistani Bridal Haute Couture Model">
            <div class="fashion-frame-badge">
              <div>
                <div style="font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.2em; color: #7A6655; font-weight: 700;">Signature Bridal Couture</div>
                <div class="font-serif" style="font-size: 0.95rem; color: #2C1D14; font-weight: 600;">Heavily Embellished Ivory Peshwas</div>
              </div>
              <span style="color: #C5A880;">✧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. BRIDAL DRESSES SECTION -->
  <section id="bridal" class="catalog-section">
    <div class="container">
      <div class="section-header">
        <div class="pill-tag" style="margin-bottom: 0.75rem;">
          <span>The Bridal Edit</span>
          <span style="color: #C5A880;">✦</span>
          <span class="font-cormorant" style="font-style: italic;">Pakistani Haute Couture</span>
        </div>
        <h2 class="section-title">Bridal Dresses</h2>
        <p class="section-desc">Timeless beauty for your most unforgettable moments.</p>
      </div>

      <div class="cards-grid">
{bridal_cards}
      </div>
    </div>
  </section>

  <!-- 4. PARTY WEAR SECTION -->
  <section id="party-wear" class="catalog-section">
    <div class="container">
      <div class="section-header">
        <div class="pill-tag" style="margin-bottom: 0.75rem;">
          <span>Evening &amp; Festive Formal</span>
          <span style="color: #C5A880;">✦</span>
          <span class="font-cormorant" style="font-style: italic;">Pakistani Silhouettes</span>
        </div>
        <h2 class="section-title">Party Wear</h2>
        <p class="section-desc">Graceful looks designed to make every celebration memorable.</p>
      </div>

      <div class="cards-grid">
{party_cards}
      </div>
    </div>
  </section>

  <!-- 5. FOOTER / CONTACT SECTION -->
  <footer id="contact" class="site-footer">
    <div class="footer-top-strip">
      ✦ Trending Pakistani Haute Couture Picks &nbsp; • &nbsp; Atelier Consultations Nationwide &nbsp; • &nbsp; Made with Love &amp; Artistry
    </div>

    <div class="container footer-main">
      <div class="footer-grid">
        <div>
          <span class="footer-title">Moonlit Closet <span style="color: #C5A880;">♡</span></span>
          <p class="font-cormorant" style="font-style: italic; font-size: 1.15rem; color: #D4C1AE; letter-spacing: 0.1em; margin-top: 0.25rem;">“Elegance and Style”</p>
          <p style="font-size: 0.85rem; color: #C4B29E; line-height: 1.7; margin-top: 1rem; font-weight: 300;">
            Celebrating timeless fashion, graceful details, and unforgettable moments. Hand-embroidered Pakistani couture made with master craftsmanship.
          </p>
        </div>

        <div>
          <h4 class="footer-section-title">Quick Navigation</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Atelier</a></li>
            <li><a href="#bridal">Bridal Dresses</a></li>
            <li><a href="#party-wear">Party Wear</a></li>
            <li><a href="#contact">Contact &amp; Appointments</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-section-title">Flagship Atelier</h4>
          <p style="font-size: 0.85rem; color: #C4B29E; line-height: 1.6; background-color: #ee9393;">
            Moonlit Couture Salon<br>
            M.M. Alam Road, Gulberg III, Lahore<br>
            Phone: +92 42 3578 9000<br>
            Email: concierge@moonlitcloset.com
          </p>
          <p style="font-size: 0.75rem; color: #9E8775; margin-top: 0.75rem;">
            Hours: Monday – Saturday, 11:00 AM – 8:00 PM
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 Moonlit Closet. All rights reserved.</span>
        <span>Light cream luxury theme &amp; authentic Pakistani couture.</span>
      </div>
    </div>
  </footer>

  <!-- DRESS DETAIL MODAL -->
  <div id="modal-backdrop" class="modal-backdrop" onclick="closeDressModal()">
    <div class="modal-container" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeDressModal()" aria-label="Close dialog">✕</button>
      <div id="modal-body"></div>
    </div>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
"""
    with open(os.path.join(STATIC_DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(index_html)

    # 6. Generate .htaccess for Apache / cPanel hosting
    htaccess = """# Moonlit Closet — Apache / cPanel Hosting Configuration
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Charset
AddDefaultCharset UTF-8
"""
    with open(os.path.join(STATIC_DIR, '.htaccess'), 'w', encoding='utf-8') as f:
        f.write(htaccess)

    # 7. Generate HOSTING_GUIDE.txt
    guide = """========================================================================
MOONLIT CLOSET — HOW TO RUN ON DESKTOP & UPLOAD TO ANY HOSTING AGENT
========================================================================

OPTION 1: RUN DIRECTLY IN DESKTOP GOOGLE CHROME (OFFLINE)
---------------------------------------------------------
1. Simply double-click the file named "index.html" on your PC or Mac.
2. It will open directly in Google Chrome (or Edge, Safari, Firefox).
3. Everything works locally! All images, styling, interactive dress inspection
   dialogs, and navigation work completely without needing any internet,
   local server, or Node.js.

------------------------------------------------------------------------

OPTION 2: UPLOAD TO CPANEL / HOSTINGER / BLUEHOST / GODADDY / APACHE
------------------------------------------------------------------------
1. Log in to your hosting cPanel or control panel.
2. Open "File Manager" and go into the "public_html" directory (or your domain folder).
3. If there is an existing default index.html, you can remove or rename it.
4. Upload "moonlit-closet-website.zip" (or all files from this folder).
5. In cPanel File Manager, right-click "moonlit-closet-website.zip" and click "Extract".
6. Ensure that "index.html" and the "images/", "css/", "js/" folders are directly
   inside "public_html".
7. Visit your website domain (e.g. https://yourdomain.com/) in your browser!

------------------------------------------------------------------------

OPTION 3: DEPLOY ON NETLIFY, VERCEL, OR GITHUB PAGES
------------------------------------------------------------------------
- Netlify: Go to https://app.netlify.com/drop and drag-and-drop this entire folder.
  Your website will go live with free SSL in less than 30 seconds!
- Vercel: Deploy using `vercel` command or drag-and-drop via Vercel dashboard.
- GitHub Pages: Push this folder to a GitHub repository and turn on GitHub Pages
  under Settings -> Pages -> Source (main branch).

------------------------------------------------------------------------
FOLDER STRUCTURE:
- index.html        -> Main homepage with all 5 sections
- css/style.css     -> Self-contained light cream luxury styling
- js/app.js         -> Vanilla JavaScript modal & navigation logic (no module errors)
- images/           -> All 17 Pakistani model bridal & party wear photos
- .htaccess         -> Web caching & compression for Apache/cPanel
========================================================================
"""
    with open(os.path.join(STATIC_DIR, 'HOSTING_GUIDE.txt'), 'w', encoding='utf-8') as f:
        f.write(guide)
    with open(os.path.join(STATIC_DIR, 'README.txt'), 'w', encoding='utf-8') as f:
        f.write(guide)

    # 8. Create ZIP archive in public/ directory
    zip_path = os.path.join(PUBLIC_DIR, 'moonlit-closet-website.zip')
    print(f"Creating ZIP archive at {zip_path}...")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(STATIC_DIR):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, STATIC_DIR)
                zf.write(abs_path, rel_path)

    print("Website package created successfully!")
    print(f"ZIP Size: {os.path.getsize(zip_path) / (1024*1024):.2f} MB")

if __name__ == '__main__':
    setup_static_website()
