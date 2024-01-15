
import React from 'react';
import useApiData from '../hooks/useApiData'; 
import { useTranslation } from 'react-i18next';

const Services = () => {
  
  const { data: services, isLoading, error } = useApiData('/api/services');

  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('services')}</h2>
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
