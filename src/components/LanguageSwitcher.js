import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Import your CSS file

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log('Language changed to:', language);
  };

  return (
    <div className="language-switcher-container">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ge')}>Georgian</button>
    </div>
  );
};

export default LanguageSwitcher;
