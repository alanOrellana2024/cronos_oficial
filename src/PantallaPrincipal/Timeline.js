import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css"; // Asegúrate de que esté actualizado

const Timeline = () => {
  const dates = [
    { year: 1900, label: '1900' },
    { year: 1910, label: '1910' },
    { year: 1925, label: '1925' },
    { year: 1933, label: '1933' },
    { year: 1950, label: '1950' },
    { year: 1955, label: '1955' },
    { year: 1965, label: '1965' },
    { year: 1976, label: '1976' },
    { year: 1985, label: '1985' },
    { year: 1999, label: '1999' },
  ];

  return (
    <div className="timeline-container position-relative py-4">
      <div className="timeline-line bg-secondary position-absolute top-50 start-0 end-0 mx-auto"></div>
      <div className="d-flex justify-content-between position-relative">
        {dates.map((date, index) => (
          <div key={index} className="timeline-item text-center">
            <h2 className="timeline-year">{date.label}</h2>
            <Link
              to={`/year/${date.year}`}
              className="timeline-link text-decoration-none"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
