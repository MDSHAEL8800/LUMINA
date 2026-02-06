import { Destination, BlogPost } from './types';

export const FEATURED_DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: "Santorini, Greece",
    shortDescription: "Iconic white buildings and sapphire waters.",
    description: "Experience the breathtaking sunsets of Oia, wander through winding paths of white-washed architecture, and indulge in Mediterranean luxury. Santorini offers a perfect blend of relaxation, history, and culinary delight.",
    imageUrl: "https://picsum.photos/seed/santorini/800/600",
    pricePerNight: 450,
    rating: 4.9,
    tags: ["Romance", "Beach", "Luxury"]
  },
  {
    id: '2',
    name: "Kyoto, Japan",
    shortDescription: "Ancient temples amidst modern life.",
    description: "Step into a world where tradition meets modernity. Visit centuries-old shrines, walk through the Arashiyama Bamboo Grove, and experience a traditional tea ceremony in the heart of Gion.",
    imageUrl: "https://picsum.photos/seed/kyoto/800/600",
    pricePerNight: 320,
    rating: 4.8,
    tags: ["Culture", "History", "Nature"]
  },
  {
    id: '3',
    name: "Tulum, Mexico",
    shortDescription: "Bohemian vibes on the Caribbean coast.",
    description: "A paradise for eco-conscious travelers. Explore Mayan ruins perched on cliffs, dive into crystal-clear cenotes, and relax on pristine white sands surrounded by lush jungle.",
    imageUrl: "https://picsum.photos/seed/tulum/800/600",
    pricePerNight: 280,
    rating: 4.7,
    tags: ["Beach", "Adventure", "Wellness"]
  },
  {
    id: '4',
    name: "Reykjavik, Iceland",
    shortDescription: "Land of fire and ice.",
    description: "Discover the raw power of nature. From the Northern Lights to geysers and glaciers, Iceland offers an otherworldly adventure for the intrepid traveler.",
    imageUrl: "https://picsum.photos/seed/iceland/800/600",
    pricePerNight: 380,
    rating: 4.9,
    tags: ["Adventure", "Nature", "Photography"]
  }
];

export const RECENT_POSTS: BlogPost[] = [
  {
    id: '101',
    title: "Chasing Aurora: A Winter in Lapland",
    excerpt: "Venturing north of the Arctic Circle to witness the celestial dance of the Northern Lights in emerald and violet skies.",
    author: "Elena Fisher",
    date: "Dec 12, 2023",
    imageUrl: "https://picsum.photos/seed/aurora/1200/800",
    readTime: "7 min read"
  },
  {
    id: '102',
    title: "The Silent Dunes of Sossusvlei",
    excerpt: "Climbing 'Big Daddy' at sunrise in Namibia, where the world's oldest red sand dunes meet the stark blue sky.",
    author: "Marc Johnson",
    date: "Nov 28, 2023",
    imageUrl: "https://picsum.photos/seed/namib/800/600",
    readTime: "6 min read"
  },
  {
    id: '103',
    title: "Cherry Blossoms & Neon: Tokyo Unveiled",
    excerpt: "Navigating the beautiful contrast between ancient shrines in Asakusa and the cyberpunk energy of Shinjuku.",
    author: "Yuki Tanaka",
    date: "Apr 15, 2023",
    imageUrl: "https://picsum.photos/seed/tokyo/800/600",
    readTime: "8 min read"
  },
  {
    id: '104',
    title: "Patagonia: At the Edge of the World",
    excerpt: "A trekking diary through the rugged wilderness of Torres del Paine, featuring jagged granite peaks and blue glaciers.",
    author: "Sofia Rossi",
    date: "Jan 10, 2024",
    imageUrl: "https://picsum.photos/seed/patagonia/800/600",
    readTime: "10 min read"
  },
  {
    id: '105',
    title: "Amalfi Coast: A Vertiginous Dream",
    excerpt: "Driving the winding cliffside roads of Italy's most spectacular coastline, from Positano to Ravello.",
    author: "Alessandro Ricci",
    date: "Aug 05, 2023",
    imageUrl: "https://picsum.photos/seed/amalfi/800/600",
    readTime: "5 min read"
  },
  {
    id: '106',
    title: "Lost in the Souks of Fez",
    excerpt: "Sensory overload in the labyrinthine medieval streets of Morocco, smelling spices and leather.",
    author: "Laila Ahmed",
    date: "Oct 22, 2023",
    imageUrl: "https://picsum.photos/seed/fez/800/600",
    readTime: "7 min read"
  },
  {
    id: '107',
    title: "Sunrise over Machu Picchu",
    excerpt: "The spiritual journey along the Inca Trail arriving at the Lost City of the Incas as the mist clears.",
    author: "David Chen",
    date: "Jul 18, 2023",
    imageUrl: "https://picsum.photos/seed/machu/800/600",
    readTime: "9 min read"
  }
];