import React, { useState,} from 'react';
import { Link } from "react-router-dom";
import  GeiselOrtiz from '../Imagenes/GeiselOrtiz.jpg';
import Alan from '../Imagenes/Alan.jpg';
import josue from '../Imagenes/Josue.jpg';
import Marina  from '../Imagenes/Marina.jpg';
import Camila from '../Imagenes/Camila.jpg';
import Instagram from '../Imagenes/Instagram.jpg';
import Facebook from '../Imagenes/Facebook.png'



const QuienesSomos = () => {
  // Estado para manejar el contenido de la página "Quiénes Somos"
  const [contenido, setContenido] = useState({
    titulo: '¿Quiénes Somos?',
    descripcion: 'Somos un grupo de jóvenes interesados en brindar recursos valiosos a jóvenes estudiantes por medio de CRONOS donde puedan encontrar información práctica y confiable sobre sucesos importantes en El Salvador, basandonos en nuestra experiencia como estudiantes en las diversas materias donde aprendemos sobre historia, sucesos politicos, arte, descubrimientos cientificos y más. ',
    mision: 'Nuestra misión es brindar información practica, sencilla y asertada demanera dinámica y atractiva para conribuir a la educación academica de muchos jovenés en nuestro país.',
    vision: 'Ser jovenés innovadores de la educación por medio de la tecnología, reconociendo nuestra creatividad, innovación y compromiso con las generaciones presentes y futuras.',
    equipo: [
      { nombre: 'Alan Orellana', imagen: Alan},
      { nombre: 'Geisel Ortiz',  imagen: GeiselOrtiz  },
      { nombre: 'Marina Gonzales',imagen: Marina },
      { nombre: 'Camila Jimenez',imagen: Camila},
      { nombre: 'Josue Flores',imagen: josue },
    ]
  });

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
              <li><Link to="/quienes-somos" className="hover:text-white-400 transition duration-300 no-underline">Quiénes Somos</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8 text-center relative z-20 mt-32 flex-grow flex flex-col justify-center items-center">
        {/* Título y Descripción */}
        <section className="w-full mb-12">
          <h1 className="text-6xl font-semibold text-White-800">{contenido.titulo}</h1>
          <p className="mt-4 text-lg text-white-600">{contenido.descripcion}</p>
        </section>

        {/* Misión */}
        <section className="w-full mb-12">
          <h2 className="text-4xl font-semibold text-blue-800">Misión</h2>
          <p className="mt-4 text-lg text-white-600">{contenido.mision}</p>
        </section>

        {/* Visión */}
        <section className="w-full mb-12">
          <h2 className="text-4xl font-semibold text-blue-800">Visión</h2>
          <p className="mt-4 text-lg text-white-600">{contenido.vision}</p>
        </section>
 {/* Nuestro Equipo */}
 <section className="w-full mb-12">
          <h2 className="text-8x1 font-semibold text-white-800">Nuestro Equipo</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contenido.equipo.map((miembro, index) => (
              <div key={index} className="p-6 border border-gray-300 rounded-lg shadow-md">
                {/* Imagen del miembro */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={miembro.imagen}
                    alt={miembro.nombre}
                    className="w-32 h-32 object-cover rounded-full border-2 border-white-300"
                  />
                </div>
                {/* Información del miembro */}
                <h3 className="text-2xl font-semibold text-white-900">{miembro.nombre}</h3>
              </div>
            ))}
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-center text-white py-4 relative z-20">
  <p>© 2024 Cronos_Oficial</p>

  {/* Sección de Contáctanos */}
  <div className="mt-4">
    <p className="text-lg">¿Tienes alguna duda? <span className="font-semibold">¡Contáctanos en nuestras redes sociales como: Cronos Oficial!</span></p>

    {/* Imágenes de contacto */}
    <div className="flex justify-center gap-6 mt-2">

      <a href="Cronos Oficial" className="hover:text-gray-400">
        <img 
          src={Facebook}
          alt="socialmedia"
          className="w-8 h-8 object-cover"
        />
      </a>

      <a href="Instagram" className="hover:text-gray-400">
        <img 
          src={Instagram}
          alt="Instagram"
          className="w-8 h-8 object-cover"
        />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default QuienesSomos;
