
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';

import './App.css';
import ThemeToggle from './ThemeToggle';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './locales/en.json';
import geTranslation from './locales/ge.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ge: { translation: geTranslation },
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
  });

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{i18n.t('home')}</Link>
            </li>
            <li>
              <Link to="/about">{i18n.t('about')}</Link>
            </li>
            <li>
              <Link to="/services">{i18n.t('services')}</Link>
            </li>
            <li>
              <Link to="/contact">{i18n.t('contact')}</Link>
            </li>
            <li>
              <Link to="/blog">{i18n.t('blog')}</Link>
            </li>
          </ul>
        </nav>
        <div>
          {}
          <ThemeToggle />
        </div>
        
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
