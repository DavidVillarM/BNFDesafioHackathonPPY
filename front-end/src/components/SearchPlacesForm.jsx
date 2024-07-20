// src/components/SearchPlacesForm.js
import React, { useState, useEffect } from 'react';

const SearchPlacesForm = ({ selectedCategory, onResults }) => {
    const [location, setLocation] = useState('Encarnacion, Paraguay');

    useEffect(() => {
        setLocation('Encarnacion, Paraguay');
    }, [selectedCategory]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const textQuery = `${selectedCategory}, ${location}`;
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('http://localhost:3000/api/maps/search-places', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ textQuery }),
            });

            const data = await response.json();
            onResults(data); // Pasar los resultados al componente padre
        } catch (error) {
            console.error('Error al realizar la búsqueda:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Ubicación</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    required 
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button 
                type="submit" 
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Buscar
            </button>
        </form>
    );
};

export default SearchPlacesForm;
