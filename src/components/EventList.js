import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventList = ({ events }) => {
  return (
    <div className="row">
      {events.map((event) => (
        <div key={event._id} className="col-md-4 mb-4">
          <div className="card h-100">
            {event.media && <img src={event.media} className="card-img-top" alt={event.title} />}
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <p className="card-text text-muted">{event.category}</p>
              <Link to={`/event/${event._id}`} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
