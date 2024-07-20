// src/App.js
import React, { useState } from 'react';
import PlaceList from '../../components/PlaceList';
import SearchPlacesForm from '../../components/SearchPlacesForm';
const PlacesList = () => {
    const [places, setPlaces] = useState([]);

    // Maneja los resultados de la búsqueda
    const handleResults = (results) => {
        setPlaces(results);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Buscar Lugares</h1>
            <SearchPlacesForm selectedCategory={localStorage.getItem('categorySelect')} onResults={handleResults} />
            <PlaceList places={places} />
        </div>
    );
};

export default PlacesList;
