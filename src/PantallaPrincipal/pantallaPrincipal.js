import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventosHistoricos from '../data/eventosHistoricos';
import EventList from '../components/EventList';
import Timeline from './Timeline';
import './pantallaPrincipal.css'; // Importamos el CSS del fondo

const PantallaPrincipal = () => {
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleBusqueda = () => setMostrarBusqueda(!mostrarBusqueda);

  const handleSearch = () => {
    if (!busqueda.trim()) return; // Evita búsquedas vacías

    setLoading(true);
    // Filtramos los eventos por título, categoría o año
    const resultadosFiltrados = eventosHistoricos.filter((evento) => {
      return (
        evento.title.toLowerCase().includes(busqueda.toLowerCase()) ||
        evento.category.toLowerCase().includes(busqueda.toLowerCase()) ||
        evento.year.toString().includes(busqueda)
      );
    });
    setEvents(resultadosFiltrados);
    setLoading(false);
  };

  return (
    <div className="Pantalla-principal relative min-h-screen flex flex-col justify-between">
      <header className="bg-black bg-opacity-60 absolute w-full z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white font-[Poppins] mb-2">Cronos</h1>
            <ul className="flex space-x-6 text-white font-light font-[Poppins] text-lg">
              <li><Link to="/principal" className="hover:text-gray-400 transition duration-300 no-underline">Inicio</Link></li>
              <li><button onClick={toggleBusqueda} className="hover:text-gray-400 transition duration-300 no-underline text-white">Buscar</button></li>
              <li><Link to="/categorias" className="hover:text-gray-400 transition duration-300 no-underline">Categorías</Link></li>
              <li><Link to="/quienes-somos" className="hover:text-gray-400 transition duration-300 no-underline">Quiénes Somos</Link></li>
              <li><Link to="/contactos" className="hover:text-gray-400 transition duration-300 no-underline">Contactos</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 text-center relative z-20 mt-32 flex-grow">
        {mostrarBusqueda && (
          <div className="container mx-auto px-4 py-4">
            <input
              type="text"
              placeholder="Ingresa un año, palabra clave o categoría"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg font-[Poppins] text-white bg-transparent placeholder-white"
            />
            <button
              onClick={handleSearch}
              className="mt-4 px-6 py-2 bg-[#7A1CAC] text-white rounded-lg hover:bg-[#2E073F] transition duration-300"
            >
              Buscar
            </button>
          </div>
        )}

        {loading ? (
          <div className="text-white">Cargando...</div>
        ) : (
          <EventList events={events} />
        )}

        <div className="flex justify-center mt-12">
          <Timeline />
        </div>
      </main>

      <footer className="bg-black bg-opacity-80 text-center text-white py-4 relative z-20">
        <p>© 2024 Cronos_Oficial</p>
      </footer>
    </div>
  );
};

export default PantallaPrincipal;
