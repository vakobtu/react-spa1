
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Quiz from './Quiz'; 
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div className="container">
      <h2>{t('home')}</h2>
      <p>{t('greeting')}, {name }!</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      
      <section>
      <Quiz />
      </section>
    </div>
  );
};

export default Home;
