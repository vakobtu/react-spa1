
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
    
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
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" {...register('name')} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="email">Your Email:</label>
      <input type="email" id="email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label htmlFor="message">Your Message:</label>
      <textarea id="message" rows="4" {...register('message')}></textarea>
      {errors.message && <p className="error">{errors.message.message}</p>}

      <button type="submit">Send Message</button>
    </motion.form>
  );
};

export default ContactForm;
