import React from 'react';

const CuadroCategoria = ({ nombre, imagen }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-60 text-center">
      <h3 className="text-lg font-bold mb-2">{nombre}</h3>
      <img src={imagen} alt={nombre} className="w-full h-auto rounded" />
    </div>
  );
};

export default CuadroCategoria;
