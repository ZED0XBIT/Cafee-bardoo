import { LocationInfo, Review } from '../types';
import storefrontImg from '../assets/images/downtown_storefront_main.jpg';

export const LOCATIONS_DATA: LocationInfo[] = [
  {
    id: 'bardo',
    name: 'Bardo',
    tagline: 'The Original Corner on Avenue Habib Bourguiba',
    address: 'Avenue Habib Bourguiba, Le Bardo, Tunis 2000',
    hours: '06:30 AM – 00:00 AM (Midnight) • 7 Days a Week',
    phone: '+216 24 387 243',
    near: '3 minutes walk from the National Bardo Museum & Parliament',
    mapUrl: 'https://www.google.com/maps/place/DOWNTOWN+Bardo/@36.8122932,10.1441406,124m/data=!3m1!1e3!4m6!3m5!1s0x12fd336e30e1c611:0xd16f659ce8ccd0a4!8m2!3d36.8126923!4d10.1445659',
    facebookUrl: 'https://www.facebook.com/downtown.bardo/',
    image: storefrontImg,
    features: [
      'Spacious Indoor Lounge & Air-Conditioned Seating',
      'Sunlit Outdoor Terrace with Boulevard Views',
      'Live Sports Broadcasts & Big Screen Matches',
      'Shisha Lounge Service Past 18:00',
      'High-Speed Free Wi-Fi for Remote Work'
    ]
  },
  {
    id: 'el-aouina',
    name: 'El Aouina',
    tagline: 'Lively Modern Lounge on Avenue Mongi Slim',
    address: 'Avenue Mongi Slim, El Aouina, Tunis 2045',
    hours: '06:30 AM – 00:00 AM (Midnight) • 7 Days a Week',
    phone: '+216 71 760 110',
    phoneAlt: '+216 26 741 500',
    near: 'Directly on the main avenue near Tunis-Carthage Airport & Les Berges du Lac',
    mapUrl: 'https://www.google.com/maps/search/DOWNTOWN+Lounge+El+Aouina+Tunis',
    facebookUrl: 'https://www.facebook.com/downtown.lounge.laouina/',
    image: storefrontImg,
    features: [
      'Modern Architectural Design & Warm Ambient Lighting',
      'Expansive Open Terrace for Warm Evenings',
      'Wood-Fired Pizza Oven On Display',
      'Convenient Parking Options Nearby',
      'Dedicated Family & Group Dining Areas'
    ]
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sami Ben Salem',
    location: 'Bardo',
    rating: 5,
    comment: 'The Prestige breakfast is hands down the best way to start a workday in Bardo. Generous portions, fast service, and the coffee is always fresh.',
    date: 'July 22, 2026'
  },
  {
    id: 'rev-2',
    author: 'Amira Khayati',
    location: 'El Aouina',
    rating: 5,
    comment: 'Great atmosphere in the evening for tea and chicha with friends! The Pizza Tonnara is delicious with authentic wood-fired taste.',
    date: 'July 18, 2026'
  },
  {
    id: 'rev-3',
    author: 'Youssef Trabelsi',
    location: 'Bardo',
    rating: 4,
    comment: 'A true local landmark. Whether it is 7 AM espresso or midnight mocktails during football matches, DOWNTOWN never disappoints.',
    date: 'July 10, 2026'
  },
  {
    id: 'rev-4',
    author: 'Lina Mansour',
    location: 'El Aouina',
    rating: 5,
    comment: 'Clean, lively, friendly staff! The Tunisian breakfast for two with Melaoui and fresh yaourt mejebeche is a weekend ritual for us.',
    date: 'June 29, 2026'
  }
];
