import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const ItinerarioForm = ({ fetchItineraries }) => {
    const [itinerario, setItinerario] = useState('');
    const [dias, setDias] = useState([{ fecha: '', lugares: [{ hora: '', lugar: '' }] }]);

    const handleDiaChange = (index, e) => {
        const newDias = [...dias];
        newDias[index][e.target.name] = e.target.value;
        setDias(newDias);
    };

    const handleLugarChange = (diaIndex, lugarIndex, e) => {
        const newDias = [...dias];
        newDias[diaIndex].lugares[lugarIndex][e.target.name] = e.target.value;
        setDias(newDias);
    };

    const addLugar = (diaIndex) => {
        const newDias = [...dias];
        newDias[diaIndex].lugares.push({ hora: '', lugar: '' });
        setDias(newDias);
    };

    const addDia = () => {
        setDias([...dias, { fecha: '', lugares: [{ hora: '', lugar: '' }] }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'itinerarios'), { nombre: itinerario, dias });
            fetchItineraries();
            setItinerario('');
            setDias([{ fecha: '', lugares: [{ hora: '', lugar: '' }] }]);
        } catch (error) {
            console.error('Error al agregar el itinerario: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre del Itinerario" 
                value={itinerario} 
                onChange={(e) => setItinerario(e.target.value)} 
                required 
            />
            {dias.map((dia, diaIndex) => (
                <div key={diaIndex}>
                    <input 
                        type="date" 
                        name="fecha" 
                        value={dia.fecha} 
                        onChange={(e) => handleDiaChange(diaIndex, e)} 
                        required 
                    />
                    {dia.lugares.map((lugar, lugarIndex) => (
                        <div key={lugarIndex}>
                            <input 
                                type="time" 
                                name="hora" 
                                value={lugar.hora} 
                                onChange={(e) => handleLugarChange(diaIndex, lugarIndex, e)} 
                                required 
                            />
                            <input 
                                type="text" 
                                name="lugar" 
                                placeholder="Lugar" 
                                value={lugar.lugar} 
                                onChange={(e) => handleLugarChange(diaIndex, lugarIndex, e)} 
                                required 
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => addLugar(diaIndex)}>Agregar Lugar</button>
                </div>
            ))}
            <button type="button" onClick={addDia}>Agregar Día</button>
            <button type="submit">Guardar Itinerario</button>
        </form>
    );
};

export default ItinerarioForm;