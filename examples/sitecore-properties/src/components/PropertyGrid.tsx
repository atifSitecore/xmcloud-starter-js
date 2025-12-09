import React from 'react';
import PropertyCard from './PropertyCard';

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  status: string;
  features: string[];
  images: string[];
  community?: string;
  gallery?: string[];
  enquiryCTA?: string;
}

interface PropertyGridProps {
  properties: Property[];
  variant?: 'featured' | 'compact' | 'detailed';
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, variant = 'featured' }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property) => (
      <PropertyCard key={property.id} property={property} variant={variant} />
    ))}
  </div>
);

export default PropertyGrid;
