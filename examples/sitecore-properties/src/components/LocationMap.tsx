import React from 'react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  address?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ latitude, longitude, address }) => (
  <div className="w-full h-96 bg-gray-200 flex flex-col items-center justify-center">
    {/* TODO: Integrate with real map provider */}
    <div className="text-gray-700">Map placeholder for {address || `${latitude}, ${longitude}`}</div>
  </div>
);

export default LocationMap;
