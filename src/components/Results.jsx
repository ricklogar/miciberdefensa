import React from 'react';
import '@styles/Results.css';

const Results = () => {
  return (
    <section className='hide-section' id='Results'>
      <div className='Results-div'>
        <p className='Results-div__text'>
          Las posibles contraseñas generadas a partir de las respuestas obtenidas son:
        </p>
        <div className='Results-div__passwords'></div>
      </div>
    </section>
  );
};

export default Results;