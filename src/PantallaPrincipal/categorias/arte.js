import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../categorias/seleccion.css';


const arte = () => {
    
    return (

        <div className="Pantalla-principal relative min-h-screen flex flex-col justify-between">
            
        
            {/* Aquí empieza el navbar */}
            <header className="bg-black bg-opacity-60 absolute w-full z-10">
                <nav className="container mx-auto px-6 py-4 flex justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-white font-[Poppins] mb-2">Cronos</h1>
                        <ul className="flex space-x-6 text-white font-light font-[Poppins] text-lg">
                            <li><Link to="/" className="hover:text-gray-400 transition duration-300 no-underline">Inicio</Link></li>
                            <li><Link to="/categorias" className="hover:text-white-400 transition duration-300 no-underline">Categorías</Link></li>
                            <li><Link to="/favoritos" className="hover:text-white-400 transition duration-300 no-underline">Favoritos</Link></li>
                            <li><Link to="/listas" className="hover:text-white-400 transition duration-300 no-underline">Listas</Link></li>
                            <li><Link to="/como-usar" className="hover:text-white-400 transition duration-300 no-underline">Cómo Usar</Link></li>
                            <li><Link to="/quienes-somos" className="hover:text-white-400 transition duration-300 no-underline">Quiénes Somos</Link></li>
                            <li><Link to="/contactos" className="hover:text-white-400 transition duration-300 no-underline">Contactos</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            
            <div className='CateSeleccion'> ARTE </div>
            <div className='cartaSeleccion'>.</div>
            
            <br></br>
            <footer className="bg-black bg-opacity-80 text-center text-white py-4 relative z-20">
                <p>© 2024 Cronos_Oficial</p>
            </footer>
        </div>
        
    );
};

export default arte;
