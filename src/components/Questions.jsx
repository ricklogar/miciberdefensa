import React from 'react';
import '@styles/Questions.css';

const Questions = () => {
  return (
    <section id='Questions'>
      <form className='Questions-div'>
        <div className='Questions-div__Q'>
          <label htmlFor='name'>¿Cuál es tu nombre?</label>
          <input
            type='text'
            name='name'
            placeholder='Ingresa tu nombre'
            id='Input-Q1'
            required
            autoComplete='true'
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='birth-day'>¿En qué día naciste?</label>
          <input
            type='number'
            name='birth-day'
            placeholder='Ingresa el día que naciste'
            id='Input-Q2'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='birth-year'>¿En qué año naciste?</label>
          <input
            type='number'
            name='birth-year'
            placeholder='Ingresa tu año de nacimiento'
            id='Input-Q3'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='nickname'>¿Cuál es tu apodo?</label>
          <input
            type='text'
            name='nickname'
            placeholder='Ingresa tu apodo'
            id='Input-Q4'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='pet-name'>
            ¿Como se llamó tu primera mascota? <span>(En caso de que aplique)</span>
          </label>
          <input
            type='text'
            name='pet-name'
            placeholder='Ingresa el nombre de tu mascota'
            id='Input-Q5'
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='close-relative'>¿Cuál es el nombre de tu familiar más cercano?</label>
          <input
            type='text'
            name='close-relative'
            placeholder='Ingresa el nombre de tu familiar'
            id='Input-Q6'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='couple-name'>
            ¿Cuál es el nombre de tu pareja? <span>(En caso de que aplique)</span>
          </label>
          <input
            type='text'
            name='couple-name'
            placeholder='Ingresa el nombre de tu pareja'
            id='Input-Q7'
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='fav-place'>¿Cuál es el nombre de tu lugar favorito?</label>
          <input
            type='text'
            name='fav-place'
            placeholder='Ingresa el nombre de tu lugar favorito'
            id='Input-Q8'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='fav-animal'>¿Cuál es tu animal favorito?</label>
          <input
            type='text'
            name='fav-animal'
            placeholder='Ingresa el nombre tu animal favorito'
            id='Input-Q9'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='fav-food'>¿Cuál es tu comida favorita?</label>
          <input
            type='text'
            name='fav-food'
            placeholder='Ingresa el nombre de tu comida favorita'
            id='Input-Q10'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='child-name'>
            ¿Cuál es el nombre de alguno de tus hijos? <span>(En caso de que aplique)</span>
          </label>
          <input
            type='text'
            name='child-name'
            placeholder='Ingresa el nombre de alguno de tus hijos'
            id='Input-Q11'
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor='fav-sci-fi-character'>¿Cuál es tu personaje de ficción favorito?</label>
          <input
            type='text'
            name='fav-sci-fi-character'
            placeholder='Ingresa el nombre de tu personaje de ficción favorito'
            id='Input-Q12'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor=''>¿Cuál es tu equipo de deportes favorito?</label>
          <input
            type='text'
            name='fav-sports-team'
            placeholder='Ingresa el nombre de tu equipo favorito'
            id='Input-Q13'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor=''>¿Cuál es el nombre de la ciudad en la que naciste?</label>
          <input
            type='text'
            name='hometown'
            placeholder='Ingresa el nombre de la ciudad en la que naciste'
            id='Input-Q14'
            required
          />
        </div>
        <div className='Questions-div__Q'>
          <label htmlFor=''>¿Cuál es tu signo zodiacal?</label>
          <input
            type='text'
            name='zodiac'
            placeholder='Ingresa tu signo zodiacal'
            id='Input-Q15'
            required
          />
        </div>
        <button id='Questions-div__button' type='submit'>
          Finalizar
        </button>
      </form>
    </section>
  );
};

export default Questions;
