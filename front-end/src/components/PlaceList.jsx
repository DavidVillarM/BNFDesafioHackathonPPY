// src/components/PlaceList.js
import React from 'react';

const PlaceList = ({ places }) => {
    const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-xOi3sg_6RWa3i5aw11xRaPMMAYtlfbjUw&s/150x150?text=Place'; // Imagen genérica para todos los lugares

    const getGoogleMapsLink = (address) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {places.slice(0, 20).map((place) => (
                <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                        src={defaultImage} 
                        alt={place.displayName.text} 
                        className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{place.displayName.text}</h2>
                        <a 
                            href={getGoogleMapsLink(place.formattedAddress)} 
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {place.formattedAddress}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlaceList;

