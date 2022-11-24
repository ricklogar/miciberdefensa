import React from 'react';
import '@styles/Questions.css';

const Questions = () => {
  return (
    <section id='Questions'>
      <div className='Questions-div'>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu nombre?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q1' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿En qué día naciste?</p>
          <input type='number' name='' placeholder='Ingrese su respuesta' id='Input-Q2' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿En qué año naciste?</p>
          <input type='number' name='' placeholder='Ingrese su respuesta' id='Input-Q3' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu apodo?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q4' />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Como se llamó tu primera mascota? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q5' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de tu familiar más cercano?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q6' />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Cuál es el nombre de tu pareja? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q7' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de tu lugar favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q8' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu animal favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q9' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu comida favorita?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q10' />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Cuál es el nombre de alguno de tus hijos? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q11' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu personaje de ficción favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q12' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu equipo de deportes favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q13' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de la ciudad en la que naciste?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q14' />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu signo zodiacal?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q15' />
        </div>
        <button id='Questions-div__button'>Finalizar</button>
      </div>
    </section>
  );
};

export default Questions;
