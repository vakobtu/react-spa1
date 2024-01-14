
import React from 'react';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Hello, {name || 'Guest'}!</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Home;
