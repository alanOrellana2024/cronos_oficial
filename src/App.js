import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PantallaPrincipal from './PantallaPrincipal/pantallaPrincipal';
import Categorias from './PantallaPrincipal/categorias';
import Arte from './PantallaPrincipal/categorias/arte';
import Politica from './PantallaPrincipal/categorias/politica';
import Historia from './PantallaPrincipal/categorias/historia';
import Descu from './PantallaPrincipal/categorias/descu';
import Literat from './PantallaPrincipal/categorias/literat';

import './App.css';

function Start() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/principal');
        }, 2010); // Duración de la animación de carga
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={`${process.env.PUBLIC_URL}/logo CRONOS2.2.2.00.png`} className="App-logo" alt="Logo Oficial" />

                {loading ? (
                    <div className="loading-screen">
                        <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading" className="loading-logo" />
                        <p className="loading-text">Cargando...</p>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="bg-[#7A1CAC] text-[#FFFBF5] hover:bg-[#2E073F] px-6 py-2 text-lg rounded-lg"
                        onClick={handleClick}
                    >
                        Empezar
                    </button>
                )}
            </header>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Pantalla de inicio */}
                <Route path="/" element={<Start />} />
                
                {/* Pantalla principal */}
                <Route path="/principal" element={<PantallaPrincipal />} />
                
                {/* Categorías */}
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/arte" element={<Arte />} />
                <Route path="/politica" element={<Politica />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/descu" element={<Descu />} />
                <Route path="/literat" element={<Literat />} />
            </Routes>
        </Router>
    );
}

export default App;
