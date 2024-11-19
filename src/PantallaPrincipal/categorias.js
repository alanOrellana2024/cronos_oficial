    import React, { useState } from 'react';
    import { Link } from "react-router-dom";
    import imagen1 from '../Imagenes/arte.jpeg';
    import imagen2 from '../Imagenes/politica.jpeg';
    import imagen3 from '../Imagenes/historia.jpeg';
    import imagen4 from '../Imagenes/descu.jpg';
    import imagen5 from '../Imagenes/litera.jpg';
    import '../PantallaPrincipal/categorias.css';

    const Categorias = () => {
        const images = [
            { src: imagen1, title: 'Arte', info: 'Información sobre arte',link:'/arte' },
            { src: imagen2, title: 'Política', info: 'Información relacionada a política',link:'/politica' },
            { src: imagen3, title: 'Historia', info: 'Información sobre historia',link:'/historia'  },
            { src: imagen4, title: 'Descubrimiento científico', info: 'Descubrimientos',link:'/descu' },
            { src: imagen5, title: 'Literatura', info: 'Información de literatura',link:'/literat' },
        ];

        const [startIndex, setStartIndex] = useState(0);

        const nextSlide = () => {
            if (startIndex < images.length - 3) {
                setStartIndex((prevIndex) => prevIndex + 1);
            }
        };

        const prevSlide = () => {
            if (startIndex > 0) {
                setStartIndex((prevIndex) => prevIndex - 1);
            }
        };

        const visibleImages = images.slice(startIndex, startIndex + 3);

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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="carrousel">
                <div className="slider-container">
                    <button onClick={prevSlide} className="arrow-button left-arrow">&lt;</button>
                    <div className="slider">
                        {visibleImages.map((image, index) => (
                            <div key={index} className="slider-item">
                            <Link to={image.link} style={{ textDecoration: 'none' }}>
                                <img src={image.src} alt={`Imagen ${index + 1}`} className="carousel-image" />
                                <hr />
                                <h3>{image.title}</h3>
                                <p>{image.info}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="arrow-button right-arrow">&gt;</button>
                </div>
                </div>
                <br></br>
                <footer className="bg-black bg-opacity-80 text-center text-white py-4 relative z-20">
                    <p>© 2024 Cronos_Oficial</p>
                </footer>
            </div>
            
        );
    };

    export default Categorias;
