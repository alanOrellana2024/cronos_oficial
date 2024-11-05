import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PantallaPrincipal from './PantallaPrincipal/pantallaPrincipal';
import './App.css';

function Start() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/principal');
        }, 2010); //La duracción de la animación de carga
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
                        className="bg-[#a93226] text-[#fbfcfc] hover:bg-[#920202] px-6 py-2 text-lg rounded-lg"
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
                <Route path="/" element={<Start />} />
                <Route path="/principal" element={<PantallaPrincipal />} />
            </Routes>
        </Router>
    );
}

export default App;
