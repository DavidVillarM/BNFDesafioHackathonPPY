// src/App.js
import React, { useState } from 'react';
import CuadroCategoria from '../../components/CuadroCategoria';
const Categorias = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categorias = [
        { nombre: 'Hoteles', imagen: 'https://media.amambay570.com.py/images/2022/noticias5/18a25d3564.jpg' },
        { nombre: 'Restaurantes', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRTGRgJsyCvJ91a7mASP0J8IfUpABm6Fbfg&s' },
        { nombre: 'Playas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRTGRgJsyCvJ91a7mASP0J8IfUpABm6Fbfg&s' },
        { nombre: 'Plazas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRTGRgJsyCvJ91a7mASP0J8IfUpABm6Fbfg&s' },
        { nombre: 'Monumentos', imagen: 'https://grupovierci.brightspotcdn.com/dims4/default/f96152e/2147483647/strip/true/crop/1500x845+0+78/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fadjuntos%2F161%2Fimagenes%2F011%2F120%2F0011120666.jpg' },
        // Agrega más categorías según sea necesario
    ];

    const handleCategorySelect = (categoria) => {
        setSelectedCategory(categoria);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Mis Categorías</h1>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categorias.map((categoria, index) => (
                    <CuadroCategoria
                        key={index}
                        nombre={categoria.nombre}
                        imagen={categoria.imagen}
                        onSelect={handleCategorySelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categorias;
