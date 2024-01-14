
import React from 'react';
import './Contact.css'; 
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Feel free to reach out to us using the form below.</p>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" rows="4" placeholder="Type your message"></textarea>

        <button type="submit">Send Message</button>
      </form>

    </div>
    
  );
};

export default Contact;
