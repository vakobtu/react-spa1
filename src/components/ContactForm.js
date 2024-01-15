import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required'),
});


const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (storedData) {
      Object.keys(storedData).forEach((key) => {
        setValue(key, storedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('contactFormData', JSON.stringify(data));
    reset(); 
  };
  const { t } = useTranslation();

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      
      <label htmlFor="name">{t('contactus-name')}:</label>
      <input type="text" id="name" {...register('name')} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="email">{t('contactus-email')}:</label>
      <input type="email" id="email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label htmlFor="message">{t('contactus-message')}:</label>
      <textarea id="message" rows="4" {...register('message')}></textarea>
      {errors.message && <p className="error">{errors.message.message}</p>}

      <button type="submit">{t('contactus-button')}</button>
    </motion.form>
  );
};

export default ContactForm;
