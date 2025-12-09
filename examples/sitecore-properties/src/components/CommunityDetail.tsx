import React from 'react';
import AmenitiesGrid, { Amenity } from './AmenitiesGrid';
import LocationMap from './LocationMap';
import GalleryGrid, { GalleryItem } from './GalleryGrid';

export interface CommunityDetailProps {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  amenities?: Amenity[];
  gallery?: GalleryItem[];
  latitude?: number;
  longitude?: number;
}

const CommunityDetail: React.FC<CommunityDetailProps> = ({
  name,
  description,
  image,
  location,
  amenities,
  gallery,
  latitude,
  longitude,
}) => (
  <section className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
    <img src={image} alt={name} className="w-full h-64 object-cover rounded mb-4" />
    <h1 className="text-3xl font-bold mb-2">{name}</h1>
    <p className="mb-4 text-gray-700">{description}</p>
    <p className="mb-4 text-gray-600">Location: {location}</p>
    {latitude && longitude && (
      <div className="mb-6">
        <LocationMap latitude={latitude} longitude={longitude} address={location} />
      </div>
    )}
    {amenities && amenities.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <AmenitiesGrid amenities={amenities} />
      </div>
    )}
    {gallery && gallery.length > 0 && (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Gallery</h2>
        <GalleryGrid items={gallery} />
      </div>
    )}
    {/* Dynamic placeholders for additional components can be added here */}
  </section>
);

export default CommunityDetail;
