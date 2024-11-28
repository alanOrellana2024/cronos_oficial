import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../PantallaPrincipal/pantallaPrincipal.css';
import Timeline from './Timeline';
import QuienesSomos from '../QuienesSomos/QuienesSomos';

const PantallaPrincipal = () => {
    const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

    const toggleBusqueda = () => setMostrarBusqueda(!mostrarBusqueda);

    return (
        <div className="Pantalla-principal relative min-h-screen flex flex-col justify-between">
            
        
            {/* Aquí empieza el navbar */}
            <header className="bg-black bg-opacity-60 absolute w-full z-10">
                <nav className="container mx-auto px-6 py-4 flex justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white font-[Poppins] mb-2">Cronos</h1>
                        <ul className="flex space-x-6 text-white font-light font-[Poppins] text-lg">
                            <li><Link to="/" className="hover:text-gray-400 transition duration-300 no-underline">Inicio</Link></li>
                            <li><button onClick={toggleBusqueda} className="hover:text-gray-400 transition duration-300 no-underline text-white">Buscar</button></li>
                            <li><Link to="/categorias" className="hover:text-white-400 transition duration-300 no-underline">Categorías</Link></li>
                            <li><Link to="/favoritos" className="hover:text-white-400 transition duration-300 no-underline">Favoritos</Link></li>
                            <li><Link to="/listas" className="hover:text-white-400 transition duration-300 no-underline">Listas</Link></li>
                            <li><Link to="/QuienesSomos" className="hover:text-white-400 transition duration-300 no-underline">Quiénes Somos</Link></li>   
                        </ul>
                    </div>
                </nav>
            </header>

          
            <main className="container mx-auto px-4 py-8 text-center relative z-20 mt-32 flex-grow flex flex-col justify-center items-center">
            
                {mostrarBusqueda && (
                    <div className="container mx-auto px-4 py-4">
                        <input
                            type="text"
                            placeholder="Ingresa tu búsqueda aquí"
                            className="w-full p-2 border border-gray-300 rounded-lg font-[Poppins] text-white bg-transparent placeholder-white"
                        />
                    </div>
                )}
                <div className='flex justify-center mt-12' id='timeline-container'>
                    <Timeline/>
                </div>
            </main>

          
            <footer className="bg-black bg-opacity-80 text-center text-white py-4 relative z-20">
                <p>© 2024 Cronos_Oficial</p>
            </footer>
        </div>
    );
};

export default PantallaPrincipal;
