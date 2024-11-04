import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../PantallaPrincipal/pantallaPrincipal.css';

const PantallaPrincipal = () => {
    return (
        <div className="Pantalla-principal">

            <header>

                <h1>Cronos</h1>

            </header>

            <main>

                <p>Contenido de la pantalla principal</p>

            </main>

            <footer class="text-white">

                <p>© 2024 Cronos_Oficial</p>

            </footer>
        </div>
    );
};

export default PantallaPrincipal;
