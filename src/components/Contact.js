
import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('contact')}</h2>
      <p>{t('contactus-p')}</p>
      
      {}
      <ContactForm />
    </div>
  );
};

export default Contact;
