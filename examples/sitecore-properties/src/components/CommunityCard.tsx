import React from 'react';
import clsx from 'clsx';
import { Community } from './CommunityGrid';

interface CommunityCardProps {
  community: Community;
  variant?: 'featured' | 'compact';
}

const CommunityCard: React.FC<CommunityCardProps> = ({ community, variant = 'featured' }) => {
  switch (variant) {
    case 'compact':
      return (
        <div className="border rounded p-4 flex flex-col items-center">
          <img src={community.image} alt={community.name} className="rounded mb-2 w-48 h-32 object-cover" />
          <h3 className="text-lg font-bold">{community.name}</h3>
          <p className="text-sm text-gray-600">{community.location}</p>
        </div>
      );
    case 'featured':
    default:
      return (
        <div className={clsx('border-2 border-blue-600 rounded-xl p-6 bg-blue-50 shadow flex flex-col items-center')}> 
          <img src={community.image} alt={community.name} className="rounded mb-4 w-full h-48 object-cover" />
          <h2 className="text-xl font-bold mb-2">{community.name}</h2>
          <p className="mb-2 text-gray-700">{community.description}</p>
          <span className="mt-2 px-2 py-1 rounded text-xs bg-blue-600 text-white">{community.location}</span>
        </div>
      );
  }
};

export default CommunityCard;
