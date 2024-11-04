import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PantallaPrincipal from './PantallaPrincipal/pantallaPrincipal';
import './App.css';

function Start() {
    const navigate = useNavigate();

return (
  <div className="App">
      <header className="App-header">

          <img src={`${process.env.PUBLIC_URL}/logo CRONOS2.2.2.00.png`} className="App-logo" alt="Logo Oficial" />

          <button type="button" className="bg-[#a93226] text-[#fbfcfc] hover:bg-[#920202] px-6 py-2 text-lg rounded-lg"onClick={() => navigate('/principal')}>Empezar</button>

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
