
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Red Roses',
    price: 45,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
    category: 'roses',
    description: 'Beautiful red roses perfect for expressing love and passion. Fresh and fragrant.',
    inStock: true,
  },
  {
    id: '2',
    name: 'White Jasmine Bouquet',
    price: 35,
    image: 'https://images.unsplash.com/photo-1463320898675-d4b2dc3e39ea?w=400&h=400&fit=crop',
    category: 'jasmine',
    description: 'Delicate white jasmine flowers with an enchanting fragrance.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Mixed Spring Bouquet',
    price: 55,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'A cheerful mix of seasonal spring flowers in vibrant colors.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Wedding Garland',
    price: 85,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    category: 'garlands',
    description: 'Elegant floral garland perfect for wedding ceremonies and special occasions.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Pink Rose Collection',
    price: 40,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=400&fit=crop',
    category: 'roses',
    description: 'Soft pink roses that symbolize grace, gratitude, and appreciation.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Birthday Celebration Bouquet',
    price: 48,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop',
    category: 'bouquets',
    description: 'Colorful and joyful bouquet perfect for birthday celebrations.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Traditional Jasmine Garland',
    price: 65,
    image: 'https://images.unsplash.com/photo-1574263867128-c63a9e4cdff1?w=400&h=400&fit=crop',
    category: 'garlands',
    description: 'Traditional white jasmine garland, perfect for religious ceremonies and cultural events.',
    inStock: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Flowers', icon: '🌸' },
  { id: 'roses', name: 'Roses', icon: '🌹' },
  { id: 'jasmine', name: 'Jasmine', icon: '🤍' },
  { id: 'bouquets', name: 'Bouquets', icon: '💐' },
  { id: 'garlands', name: 'Garlands', icon: '🌺' },
];
