
import React, { useState } from 'react';
import './Quiz.css'; 
import { useTranslation } from 'react-i18next';

const Quiz = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
  };
  const { t } = useTranslation();

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{t('quiz')}</h3>
      <p>{t('quiz-p')}</p>

      <div className="quiz-options">
        <button className="quiz-option" onClick={() => handleAnswer(true)}>
        {t('yes')}
        </button>
        <button className="quiz-option" onClick={() => handleAnswer(false)}>
        {t('no')}
        </button>
        
      </div>

      <p className="quiz-score">{t('score')}: {score}</p>
    </div>
  );
};

export default Quiz;
