import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Property } from './PropertyGrid';

interface PropertyCardProps {
  property: Property;
  variant?: 'featured' | 'compact' | 'detailed';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, variant = 'featured' }) => {
  switch (variant) {
    case 'compact':
      return (
        <div className="border rounded p-4 flex flex-col items-center">
          <Image src={property.images[0]} alt={property.title} width={320} height={180} className="rounded mb-2" />
          <h3 className="text-lg font-bold">{property.title}</h3>
          <p className="text-sm text-gray-600">{property.location}</p>
          <span className={clsx('mt-2 px-2 py-1 rounded text-xs', property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800')}>{property.status}</span>
        </div>
      );
    case 'detailed':
      return (
        <div className="border rounded-lg p-6 shadow-lg">
          <Image src={property.images[0]} alt={property.title} width={480} height={270} className="rounded mb-4" />
          <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
          <p className="mb-2">{property.description}</p>
          <ul className="mb-2 list-disc pl-5">
            {property.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <p className="text-sm text-gray-600 mb-2">Location: {property.location}</p>
          <p className="text-sm text-gray-600 mb-2">Community: {property.community}</p>
          <span className={clsx('mt-2 px-2 py-1 rounded text-xs', property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800')}>{property.status}</span>
          {property.enquiryCTA && <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">{property.enquiryCTA}</button>}
        </div>
      );
    case 'featured':
    default:
      return (
        <div className="border-2 border-blue-600 rounded-xl p-6 bg-blue-50 shadow">
          <Image src={property.images[0]} alt={property.title} width={480} height={270} className="rounded mb-4" />
          <h2 className="text-xl font-bold mb-2">{property.title}</h2>
          <p className="mb-2">{property.description}</p>
          <span className={clsx('mt-2 px-2 py-1 rounded text-xs', property.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-800')}>{property.status}</span>
          {property.enquiryCTA && <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">{property.enquiryCTA}</button>}
        </div>
      );
  }
};

export default PropertyCard;
