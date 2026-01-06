import { Event, Product, UserProfile } from './types';

export const CURRENT_USER: UserProfile = {
  id: 'u1',
  name: 'Alex Chen',
  avatar: 'https://picsum.photos/200/200',
  level: 'Gold Member',
  points: 1250
};

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Grand Reserve Tasting',
    date: '2023-11-15 19:00',
    location: 'Shanghai Tower Lounge',
    price: 299,
    image: 'https://picsum.photos/800/600?random=1',
    description: 'Experience an exclusive evening tasting our finest reserve collection with master sommelier David Li.'
  },
  {
    id: 'e2',
    title: 'Vineyard Weekend Tour',
    date: '2023-12-02 09:00',
    location: 'Ningxia Valley',
    price: 1200,
    image: 'https://picsum.photos/800/600?random=2',
    description: 'A two-day immersive tour through the beautiful vineyards of Ningxia, including accommodation and dining.'
  },
  {
    id: 'e3',
    title: 'Jazz & Wine Night',
    date: '2023-11-20 20:00',
    location: 'Blue Note Jazz Club',
    price: 180,
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Smooth jazz meets smooth reds. A perfect way to unwind after work.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Cabernet Sauvignon 2018',
    type: 'Red Wine',
    price: 450,
    origin: 'Bordeaux, France',
    image: 'https://picsum.photos/400/600?random=4',
    description: 'Full-bodied with notes of dark cherry and cedar.'
  },
  {
    id: 'p2',
    name: 'Chardonnay Reserve',
    type: 'White Wine',
    price: 320,
    origin: 'Napa Valley, USA',
    image: 'https://picsum.photos/400/600?random=5',
    description: 'Crisp and buttery with a hint of vanilla oak.'
  },
  {
    id: 'p3',
    name: 'Pinot Noir Estate',
    type: 'Red Wine',
    price: 580,
    origin: 'Otago, New Zealand',
    image: 'https://picsum.photos/400/600?random=6',
    description: 'Elegant and earthy with strawberry undertones.'
  },
  {
    id: 'p4',
    name: 'Sparkling Rosé',
    type: 'Sparkling',
    price: 280,
    origin: 'Champagne, France',
    image: 'https://picsum.photos/400/600?random=7',
    description: 'Festive bubbles with fresh raspberry aromas.'
  }
];