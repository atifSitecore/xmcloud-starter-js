import React from 'react';

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
  description?: string;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid: React.FC<AmenitiesGridProps> = ({ amenities }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {amenities.map((amenity) => (
      <div key={amenity.id} className="border rounded p-4 flex flex-col items-center">
        {amenity.icon && <img src={amenity.icon} alt={amenity.name} className="w-12 h-12 mb-2" />}
        <h4 className="text-md font-bold">{amenity.name}</h4>
        {amenity.description && <p className="text-xs text-gray-600">{amenity.description}</p>}
      </div>
    ))}
  </div>
);

export default AmenitiesGrid;
