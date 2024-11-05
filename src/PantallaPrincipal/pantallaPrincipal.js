import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../PantallaPrincipal/pantallaPrincipal.css';
import Timeline from './Timeline'; // Asegúrate de que el componente Timeline esté correctamente importado

const PantallaPrincipal = () => {
    const [mostrarBusqueda, setMostrarBusqueda] = useState(false);

    const toggleBusqueda = () => setMostrarBusqueda(!mostrarBusqueda);

    return (
        <div className="Pantalla-principal relative">
            
            <video
                autoPlay
                loop
                muted
                className="background-video"
            >
                <source src={`${process.env.PUBLIC_URL}/bg-video.mp4`} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>

            <header className="bg-black bg-opacity-90 shadow-lg relative z-10">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-semibold text-white">Cronos</h1>
                    <ul className="flex space-x-8 text-white text-lg font-light">
                        <li><Link to="/" className="hover:text-gray-400 transition-all duration-300">Inicio</Link></li>
                        <li><button onClick={toggleBusqueda} className="hover:text-gray-400 transition-all duration-300">Buscar</button></li>
                        <li><Link to="/categorias" className="hover:text-gray-400 transition-all duration-300">Categorías</Link></li>
                        <li><Link to="/favoritos" className="hover:text-gray-400 transition-all duration-300">Favoritos</Link></li>
                        <li><Link to="/listas" className="hover:text-gray-400 transition-all duration-300">Listas</Link></li>
                        <li><Link to="/como-usar" className="hover:text-gray-400 transition-all duration-300">Cómo Usar</Link></li>
                        <li><Link to="/quienes-somos" className="hover:text-gray-400 transition-all duration-300">Quiénes Somos</Link></li>
                        <li><Link to="/contactos" className="hover:text-gray-400 transition-all duration-300">Contactos</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-8 text-center relative z-10">
                <p className="text-lg text-gray-700">Contenido de la pantalla principal</p>
                {mostrarBusqueda && (
                    <div className="container mx-auto px-4 py-4">
                        <input
                            type="text"
                            placeholder="Ingresa tu búsqueda aquí"
                            className="w-full p-2 border border-gray-300 rounded-lg font-[Poppins] text-black"
                        />
                    </div>
                )}
                <div className='flex flex-row justify-center' id='timeline-container'>
                    <Timeline/>
                </div>
            </main>

            <footer className="text-center text-white py-4 relative z-10">
                <p>© 2024 Cronos_Oficial</p>
            </footer>
        </div>
    );
};

export default PantallaPrincipal;
