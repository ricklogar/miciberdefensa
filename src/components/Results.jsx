import React from 'react';
import '@styles/loader.css';
import '@styles/Results.css';

const Results = () => {
  return (
    <section className='hide-section' id='Results'>
      <div className='Results-div'>
        <p className='Results-div__text'>
          Las posibles contraseñas generadas a partir de las respuestas obtenidas son:
        </p>
        <div className='Results-div__passwords'></div>
        <div className='Results__percentage'>
          <div className='Results__average'>
            <div className='spinner'>
              <svg viewBox='25 25 50 50' className='circular'>
                <circle
                  strokeMiterlimit='10'
                  strokeWidth='3'
                  fill='none'
                  r='20'
                  cy='50'
                  cx='50'
                  className='path'></circle>
              </svg>
            </div>
          </div>
          <p className='Results__text'></p>
        </div>
      </div>
    </section>
  );
};

export default Results;
