
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('about')}</h2>
      <p>
      {t('aboutus-p1')}
      </p>
      <p>
      {t('aboutus-p2')}
      </p>
      {}
    </div>
  );
};

export default About;
