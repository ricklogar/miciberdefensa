import React from 'react';
import '@styles/Questions.css';

const Questions = () => {
  return (
    <section id='Questions'>
      <form className='Questions-div'>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu nombre?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q1' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿En qué día naciste?</p>
          <input type='number' name='' placeholder='Ingrese su respuesta' id='Input-Q2' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿En qué año naciste?</p>
          <input type='number' name='' placeholder='Ingrese su respuesta' id='Input-Q3' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu apodo?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q4' required />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Como se llamó tu primera mascota? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q5' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de tu familiar más cercano?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q6' required />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Cuál es el nombre de tu pareja? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q7' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de tu lugar favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q8' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu animal favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q9' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu comida favorita?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q10' required />
        </div>
        <div className='Questions-div__Q'>
          <p>
            ¿Cuál es el nombre de alguno de tus hijos? <span>(En caso de que aplique)</span>
          </p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q11' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu personaje de ficción favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q12' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu equipo de deportes favorito?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q13' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es el nombre de la ciudad en la que naciste?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q14' required />
        </div>
        <div className='Questions-div__Q'>
          <p>¿Cuál es tu signo zodiacal?</p>
          <input type='text' name='' placeholder='Ingrese su respuesta' id='Input-Q15' required />
        </div>
        <button id='Questions-div__button' type='button'>Finalizar</button>
      </form>
    </section>
  );
};

export default Questions;
