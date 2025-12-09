import React from 'react';
import PropertyGrid, { Property } from '../components/PropertyGrid';

// Sample property data (replace with Sitecore GraphQL query in production)
const properties: Property[] = [
  {
    id: 'sitecore-properties-property-001',
    title: 'Costa Mare',
    description: 'Introducing a new chapter of coastal living.',
    location: 'Ras Al Khaimah',
    status: 'Available',
    features: ['Beachfront access', 'Modern design', 'Luxury amenities'],
    images: ['/images/costa-mare-1.jpg', '/images/costa-mare-2.jpg'],
    community: 'Costa Mare Community',
    gallery: ['/images/costa-mare-gallery-1.jpg', '/images/costa-mare-gallery-2.jpg'],
    enquiryCTA: 'Register your interest',
  },
  {
    id: 'sitecore-properties-property-002',
    title: 'Eltiera Heights',
    description: 'A higher perspective in everyday living.',
    location: 'Jumeirah Islands',
    status: 'Available',
    features: ['Panoramic views', 'Elegant interiors', 'Private pool'],
    images: ['/images/eltiera-heights-1.jpg', '/images/eltiera-heights-2.jpg'],
    community: 'Eltiera Heights Community',
    gallery: ['/images/eltiera-heights-gallery-1.jpg', '/images/eltiera-heights-gallery-2.jpg'],
    enquiryCTA: 'Register your interest',
  },
];

const HomePage: React.FC = () => (
  <main className="container mx-auto py-10">
    <h1 className="text-3xl font-bold mb-8">Sitecore Properties</h1>
    <PropertyGrid properties={properties} variant="featured" />
  </main>
);

export default HomePage;
