import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Timeline from './Timeline';
import '../PantallaPrincipal/pantallaPrincipal.css';

const PantallaPrincipal = () => {
   const [mostratBusqueda, setmostratBusqueda] = useState(false);

   const toggleBusqueda = () => 
    setmostratBusqueda(!mostratBusqueda);

    return (
        <div className="Pantalla-principal">
            
            <header className="bg-black bg-opacity-90 shadow-lg">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-semibold text-white">Cronos</h1>
                    <ul className="flex space-x-8 text-white text-lg font-[Poppins]">
                        <li>
                            <Link to="/" className="hover:text-gray-400 no-underline transition-all duration-300">Inicio</Link>
                        </li>
                        <li>
                            <button onClick={toggleBusqueda}
                            className='hover:text-gray-400 no-underline transition-all duration-300'
                            >
                                Buscar 
                            </button>
                        </li>
                        <li>
                            <Link to="/categorias" className="hover:text-gray-400 no-underline transition-all duration-300">Categorías</Link>
                        </li>
                        <li>
                            <Link to="/favoritos" className="hover:text-gray-400 no-underline transition-all duration-300">Favoritos</Link>
                        </li>
                        <li>
                            <Link to="/listas" className="hover:text-gray-400 no-underline transition-all duration-300">Listas</Link>
                        </li>
                        <li>
                            <Link to="/como-usar" className="hover:text-gray-400 no-underline transition-all duration-300">Cómo Usar</Link>
                        </li>
                        <li>
                            <Link to="/quienes-somos" className="hover:text-gray-400 no-underline transition-all duration-300">Quiénes Somos</Link>
                        </li>
                        <li>
                            <Link to="/contactos" className="hover:text-gray-400 no-underline transition-all duration-300">Contactos</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    
            <main className="container mx-auto px-4 py-8 text-center">
                {mostratBusqueda && (
                    <div className="container mx-auto px-4 py-4">
                        
                <input
                type='text'
                placeholder='Ingresa tu búsqueda aquí' className='w-full p-2 border border-gray-300 rounded-lg font-[Poppins] text-black'
                />

                    </div>
                )}
                <div className='flex flex-row justify-center' id='timeline-container'>
                    <Timeline/>
                </div>
            </main>
    
            <footer className="text-center text-white py-4">
                <p>© 2024 Cronos_Oficial</p>
            </footer>
        </div>
    );
};

export default PantallaPrincipal;
