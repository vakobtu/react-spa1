import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.css';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enTranslation from './locales/en.json';
import geTranslation from './locales/ge.json';

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ge: {
        translation: geTranslation,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">{t('home')}</Link>
              </li>
              <li>
                <Link to="/about">{t('about')}</Link>
              </li>
              <li>
                <Link to="/services">{t('services')}</Link>
              </li>
              <li>
                <Link to="/contact">{t('contact')}</Link>
              </li>
              <li>
                <Link to="/blog">{t('blog')}</Link>
              </li>
            </ul>
          </nav>
          <div>
            <ThemeToggle>{t('themeToggle')}</ThemeToggle>
            <LanguageSwitcher />
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
      
    </I18nextProvider>
    
  );
};

export default App;
