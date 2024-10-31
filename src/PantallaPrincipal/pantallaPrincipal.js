import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const PantallaPrincipal = () => {
    return (
        <div className="pantalla-principal">
            {/* Aquí puedes agregar los componentes  */}
            <header>
                <h1>Cronos</h1>
            </header>

            <main>
                <p>Contenido de la pantalla principal</p>
                {/* Sección principal para agregar contenido dinámico */}
            </main>


            <footer>
                {/* Este es el pie de la página donde podemos poner como los derechos de autor u otra información*/}
                <p>© 2024 Cronos_Oficial</p>
            </footer>

        </div>
    );
};

export default PantallaPrincipal;
