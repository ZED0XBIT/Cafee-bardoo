import { MenuItem } from '../types';
import espressoStorefrontImg from '../assets/images/downtown_storefront_main.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // BREAKFAST
  {
    id: 'bf-1',
    name: 'Prestige Breakfast',
    nameFr: 'Petit-Déjeuner Prestige',
    description: 'Fresh omelette, grilled toast, creamy butter, artisanal jams, orange juice, and a choice of coffee or tea.',
    descriptionFr: 'Omelette fraîche, toasts grillés, beurre crémeux, confitures artisanales, jus d\'orange frais et un café ou thé au choix.',
    price: 22,
    category: 'breakfast',
    isSignature: true,
    isPopular: true,
    tags: ['House Special', 'Full Set'],
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf-2',
    name: 'Tunisian Breakfast (for 2)',
    nameFr: 'Petit-Déjeuner Tunisien (pour 2)',
    description: 'Hot Melaoui flatbreads, crispy tuna Brik, olive oil, organic honey, fresh yaourt mejebeche, olives, and two mint teas.',
    descriptionFr: 'Melaoui chauds, brik au thon croustillante, huile d\'olive, miel bio, yaourt mejebeche frais, olives et deux thés à la menthe.',
    price: 38,
    category: 'breakfast',
    isSignature: true,
    isPopular: true,
    tags: ['Tunisian Classic', 'For Two'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf-3',
    name: 'Melaoui & Yaourt Mejebeche',
    nameFr: 'Melaoui & Yaourt Mejebeche',
    description: 'Layered warm semolina flatbread served with thick strained traditional yoghurt and wild honey.',
    descriptionFr: 'Galette de semoule feuilletée chaude servie avec yaourt traditionnel égoutté et miel sauvage.',
    price: 14,
    category: 'breakfast',
    tags: ['Traditional', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf-4',
    name: 'Viennoiserie Basket',
    nameFr: 'Corbeille de Viennoiseries',
    description: 'Warm buttery croissant, pain au chocolat, and a daily artisan pastry baked fresh every morning.',
    descriptionFr: 'Croissant pur beurre chaud, pain au chocolat et une pâtisserie artisanale cuite chaque matin.',
    price: 12,
    category: 'breakfast',
    tags: ['Freshly Baked'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf-5',
    name: 'Eggs Your Way & Merguez',
    nameFr: 'Œufs au Choix & Merguez',
    description: 'Two organic eggs (fried, scrambled, or poached) served with grilled spicy merguez sausage and house bread.',
    descriptionFr: 'Deux œufs bio (au plat, brouillés ou pochés) servis avec merguez grillées épicées et pain maison.',
    price: 16,
    category: 'breakfast',
    tags: ['Protein Boost'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bf-6',
    name: 'Freshly Pressed Orange Juice',
    nameFr: 'Jus d\'Orange Pressé',
    description: '100% natural, freshly squeezed local citrus fruit served chilled.',
    descriptionFr: '100% naturel, agrumes locaux fraîchement pressés servis bien frais.',
    price: 9,
    category: 'breakfast',
    tags: ['Vitamin C'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600'
  },

  // PIZZA & GRILL
  {
    id: 'pz-1',
    name: 'Pizza Tonnara DOWNTOWN',
    nameFr: 'Pizza Tonnara DOWNTOWN',
    description: 'San Marzano tomato base, mozzarella, premium tuna chunks, black olives, capers, fresh basilic, and chili oil.',
    descriptionFr: 'Base tomate San Marzano, mozzarella, thon entier de qualité, olives noires, câpres, basilic frais et huile pimentée.',
    price: 19,
    category: 'pizza',
    isSignature: true,
    isPopular: true,
    tags: ['Wood-Fired', 'Chef Favorite'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pz-2',
    name: 'Pizza Margherita Speziale',
    nameFr: 'Pizza Margherita Speziale',
    description: 'San Marzano tomato sauce, fior di latte mozzarella, fresh basil, extra virgin olive oil.',
    descriptionFr: 'Sauce tomate San Marzano, mozzarella fior di latte, basilic frais, huile d\'olive extra vierge.',
    price: 16,
    category: 'pizza',
    tags: ['Vegetarian', 'Classic'],
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pz-3',
    name: 'Escalope Panée Grill Plate',
    nameFr: 'Plat Escalope Panée Grillée',
    description: 'Golden crispy breaded chicken escalope served with seasoned hand-cut fries, garlic cream sauce, and fresh salad.',
    descriptionFr: 'Escalope de poulet panée croustillante servie avec frites fraîches assaisonnées, sauce crème à l\'ail et salade.',
    price: 21,
    category: 'pizza',
    isPopular: true,
    tags: ['Hearty Meal', 'Best Seller'],
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pz-4',
    name: 'Tacos DOWNTOWN Special',
    nameFr: 'Tacos Spécial DOWNTOWN',
    description: 'Double grilled seasoned meat, golden fries inside, warm gruyère sauce, wrapped in toasted tortilla.',
    descriptionFr: 'Double viande assaisonnée grillée, frites croustillantes à l\'intérieur, sauce gruyère chaude dans une tortilla toastée.',
    price: 15,
    category: 'pizza',
    tags: ['Quick Bite', 'Comfort Food'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pz-5',
    name: 'Burger Gourmet Tunisien',
    nameFr: 'Burger Gourmet Tunisien',
    description: 'Artisan beef patty, melted cheddar, caramelized onions, harissa mayo, brioche bun, and steakhouse fries.',
    descriptionFr: 'Steak haché de bœuf artisanal, cheddar fondu, oignons caramélisés, mayo harissa, pain brioché et frites fraîches.',
    price: 23,
    category: 'pizza',
    tags: ['Juicy Beef'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600'
  },

  // COFFEE & TEA
  {
    id: 'cf-1',
    name: 'Single / Double Espresso',
    nameFr: 'Espresso Simple / Double',
    description: 'Slow-pulled dark roast Arabica espresso, served with a square of rich dark chocolate.',
    descriptionFr: 'Espresso Arabica torréfié intense extrait lentement, servi avec un carré de chocolat noir.',
    price: 4,
    category: 'coffee',
    tags: ['100% Arabica'],
    image: espressoStorefrontImg
  },
  {
    id: 'cf-2',
    name: 'Affogato al Caffè',
    nameFr: 'Affogato au Café',
    description: 'Rich hot espresso poured directly over a scoop of artisanal vanilla gelato.',
    descriptionFr: 'Espresso chaud et intense versé sur une boule de glace artisanale à la vanille.',
    price: 10,
    category: 'coffee',
    isSignature: true,
    tags: ['Dessert Coffee'],
    image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cf-3',
    name: 'Thé à la Menthe & Pignons',
    nameFr: 'Thé à la Menthe & Pignons',
    description: 'Traditional hot green tea brewed with fresh spearmint leaves and topped with roasted pine nuts.',
    descriptionFr: 'Thé vert chaud traditionnel infusé à la menthe fraîche et garni de pignons de pin torréfiés.',
    price: 7,
    category: 'coffee',
    isPopular: true,
    tags: ['Tunisian Tradition', 'Pine Nuts'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cf-4',
    name: 'Cappuccino Viennois',
    nameFr: 'Cappuccino Viennois',
    description: 'Espresso with steamed velvet milk, topped with whipped cream and dusted cocoa.',
    descriptionFr: 'Espresso avec lait moussé onctueux, nappé de crème chantilly et cacao saupoudré.',
    price: 8,
    category: 'coffee',
    tags: ['Creamy Delight'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668ba69e54?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cf-5',
    name: 'Thé Amande / Almond Tea',
    nameFr: 'Thé aux Amandes',
    description: 'Fragrant sweet black tea infused with orange blossom water and roasted slivered almonds.',
    descriptionFr: 'Thé noir parfumé à l\'eau de fleur d\'oranger et garni d\'amandes effilées grillées.',
    price: 8,
    category: 'coffee',
    tags: ['Aromatic'],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600'
  },

  // LOUNGE & SHISHA
  {
    id: 'lg-1',
    name: 'Chicha Premium House Blend',
    nameFr: 'Chicha Premium DOWNTOWN',
    description: 'Handcrafted hookah session with premium molasses flavours (Love 66, Double Apple, Mint, Blueberry Ice).',
    descriptionFr: 'Session chicha préparée avec soin aux parfums premium (Love 66, Double Pomme, Menthe, Myrtille Glacée).',
    price: 18,
    category: 'lounge',
    isSignature: true,
    isPopular: true,
    tags: ['Night Lounge', 'Popular'],
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lg-2',
    name: 'DOWNTOWN Mocktail Signature',
    nameFr: 'Mocktail Signature DOWNTOWN',
    description: 'Refreshing blend of crushed mint, lime juice, passion fruit puree, and sparkling tonic water.',
    descriptionFr: 'Mélange rafraîchissant de menthe pilée, jus de citron vert, purée de fruit de la passion et tonic pétillant.',
    price: 13,
    category: 'lounge',
    isSignature: true,
    tags: ['0% Alcohol', 'Refreshing'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lg-3',
    name: 'Late-Night Snack Board',
    nameFr: 'Planche Gourmande Nocturne',
    description: 'Combination of golden fries, chicken tenders, mozzarella sticks, garlic aioli, and spicy harissa dips.',
    descriptionFr: 'Assortiment de frites dorées, tenders de poulet, mozzarella sticks, aioli à l\'ail et harissa maison.',
    price: 17,
    category: 'lounge',
    tags: ['Shared Platter'],
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'lg-4',
    name: 'Fresh Fruit Smoothie Bowl',
    nameFr: 'Smoothie Bowl Fruits Frais',
    description: 'Blended strawberry, mango, and banana topped with chia seeds, granola, and honey.',
    descriptionFr: 'Mélange onctueux de fraises, mangue et banane garni de graines de chia, granola et miel.',
    price: 12,
    category: 'lounge',
    tags: ['Healthy Choice'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=600'
  },

  // DESSERTS
  {
    id: 'ds-1',
    name: 'Cheesecake Pistache & Nutella',
    nameFr: 'Cheesecake Pistache & Nutella',
    description: 'Velvety cream cheese cake infused with Sicilian pistachio paste and topped with warm Nutella drizzle.',
    descriptionFr: 'Cheesecake onctueux infusé à la pâte de pistache et nappé d\'un filet de Nutella chaud.',
    price: 13,
    category: 'desserts',
    isPopular: true,
    tags: ['Indulgent'],
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ds-2',
    name: 'Fondant au Chocolat & Glace',
    nameFr: 'Fondant au Chocolat & Glace',
    description: 'Warm chocolate lava cake with a molten center, served with a scoop of Madagascar vanilla ice cream.',
    descriptionFr: 'Gâteau moelleux au cœur chocolat fondant chaud, servi avec une boule de glace vanille.',
    price: 14,
    category: 'desserts',
    tags: ['Served Warm'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ds-3',
    name: 'Crêpe Banana Nutella Extra',
    nameFr: 'Crêpe Banane Nutella Extra',
    description: 'Freshly griddled crêpe stuffed with fresh banana slices, crushed hazelnuts, and generous Nutella.',
    descriptionFr: 'Crêpe chaude garnie de rondelles de bananes fraîches, noisettes concassées et généreux Nutella.',
    price: 11,
    category: 'desserts',
    tags: ['Sweet Treat'],
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=600'
  }
];
