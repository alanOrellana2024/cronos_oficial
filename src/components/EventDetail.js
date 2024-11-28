import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventDetail = () => {
  const { id } = useParams(); // Obtiene el ID del evento desde la URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/events/${id}`)
      .then((response) => setEvent(response.data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) return <p>Cargando...</p>;

  return (
    <div className="container mt-5">
      <h1>{event.title}</h1>
      <p><strong>Categoría:</strong> {event.category}</p>
      <p><strong>Año:</strong> {event.year}</p>
      <p><strong>Resumen:</strong> {event.summary}</p>
      {event.media && <img src={event.media} alt={event.title} className="img-fluid" />}
      <p>
        <a href={event.source} target="_blank" rel="noopener noreferrer">
          Fuente original
        </a>
      </p>
    </div>
  );
};

export default EventDetail;
