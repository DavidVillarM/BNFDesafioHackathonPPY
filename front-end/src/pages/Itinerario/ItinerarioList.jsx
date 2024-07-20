// src/components/ItinerarioList.js
import React from 'react';

const ItinerarioList = ({ itinerarios }) => {
    return (
        <div>
            {itinerarios.map((itinerario, index) => (
                <div key={index}>
                    <h3>{itinerario.nombre}</h3>
                    {itinerario.dias.map((dia, diaIndex) => (
                        <div key={diaIndex}>
                            <h4>{dia.fecha}</h4>
                            {dia.lugares.map((lugar, lugarIndex) => (
                                <p key={lugarIndex}>
                                    {lugar.hora} - {lugar.lugar}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ItinerarioList;
