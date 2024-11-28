import React from "react";
import { useParams } from "react-router-dom";
import './YearDetail.css'; // Asegúrate de tener este archivo con el estilo

const YearDetail = () => {
  // Capturamos el año desde los parámetros de la URL
  const { year } = useParams();

  const yearData = {
    1900: {
      summary: "Inicio del siglo XX: avances tecnológicos y el nacimiento del cine.",
      highlights: [
        "Se fundó la compañía Kodak.",
        "El Zeppelin realizó su primer vuelo exitoso.",
        "Se celebraron los primeros Juegos Olímpicos modernos.",
      ],
    },
    1910: {
      summary: "Década marcada por cambios culturales y políticos.",
      highlights: [
        "La Revolución Mexicana comenzó.",
        "Se desarrollaron las primeras películas de cine mudo.",
        "La aviación experimentó un avance significativo.",
      ],
    },
    // Puedes añadir más datos para los demás años aquí
  };

  // Extraemos los datos del año correspondiente
  const details = yearData[year] || {
    summary: "Lo sentimos, no tenemos información para este año.",
    highlights: [],
  };

  return (
    <div className="Pantalla-principal year-detail-container">
      <h1 className="text-3xl font-bold text-white mb-4">{`Año ${year}`}</h1>
      <p className="text-lg text-gray-300 mb-6">{details.summary}</p>
      {details.highlights.length > 0 && (
        <ul className="text-gray-200 space-y-2">
          {details.highlights.map((highlight, index) => (
            <li key={index} className="text-md">
              • {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
};

export default YearDetail;
