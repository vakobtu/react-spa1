
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Created by Vako Gogatishvili</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#333',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
