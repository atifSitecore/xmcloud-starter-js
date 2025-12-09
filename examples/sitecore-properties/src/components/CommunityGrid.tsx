import React from 'react';

export interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}

interface CommunityGridProps {
  communities: Community[];
}

const CommunityGrid: React.FC<CommunityGridProps> = ({ communities }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {communities.map((community) => (
      <div key={community.id} className="border rounded p-4 flex flex-col items-center">
        <img src={community.image} alt={community.name} className="rounded mb-2 w-64 h-40 object-cover" />
        <h3 className="text-lg font-bold">{community.name}</h3>
        <p className="text-sm text-gray-600">{community.location}</p>
        <p className="mt-2 text-gray-700">{community.description}</p>
      </div>
    ))}
  </div>
);

export default CommunityGrid;
