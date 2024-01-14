
import React from 'react';
import useApiData from '../hooks/useApiData'; 

const Services = () => {
  
  const { data: services, isLoading, error } = useApiData('/api/services');

  return (
    <div className="container">
      <h2>Our Services</h2>
      {isLoading && <p>Loading services...</p>}
      {error && <p>Error loading services: {error.message}</p>}
      {services && (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.title}</strong>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Services;
