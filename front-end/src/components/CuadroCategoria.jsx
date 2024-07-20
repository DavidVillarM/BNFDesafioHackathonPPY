// src/components/CuadroCategoria.js
import React from 'react';

const CuadroCategoria = ({ nombre, imagen, onSelect }) => {
    return (
        <div
            className="w-48 h-48 flex flex-col items-center justify-center cursor-pointer border border-gray-300 rounded-lg shadow-md overflow-hidden"
            onClick={() => {
                // Llamar a la función onSelect con el nombre de la categoría
                onSelect(nombre);
                // Almacenar el nombre de la categoría en localStorage
                localStorage.setItem('categorySelect', nombre);
            }}
        >
            <img
                src={imagen}
                alt={nombre}
                className="w-full h-32 object-cover"
            />
            <h2 className="mt-2 text-lg font-medium">{nombre}</h2>
        </div>
    );
};

export default CuadroCategoria;
