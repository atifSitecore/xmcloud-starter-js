import React from 'react';

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {items.map((item) => (
      <div key={item.id} className="border rounded p-2 flex flex-col items-center">
        <img src={item.image} alt={item.title} className="rounded mb-2 w-48 h-32 object-cover" />
        <h4 className="text-md font-bold">{item.title}</h4>
        {item.description && <p className="text-xs text-gray-600">{item.description}</p>}
      </div>
    ))}
  </div>
);

export default GalleryGrid;
