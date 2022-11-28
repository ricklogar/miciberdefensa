import React from 'react';
import '@styles/Main.css';

const Main = () => {
  return (
    <main id='home'>
      <div className='home-div'>
        <h1 className='Home-div__title'>Bienvenido a MiCiberDefensa</h1>
        <p className='Home-div__text'>
          MiCiberDefensa es un proyecto dedicado a la prevención y empoderamiento de los usuarios a
          partir de la sugestión y evitamiento de posibles contraseñas débiles que se encuentren
          usando actualmente. Su funcionamiento se basa en la resolución de un cuestionario elegido
          meticulosamente basado en un estudio realizado sobre la estructuración de contraseñas
          hecho en el Tecnológico Nacional de México Campus Morelia durante el semestre
          Agosto-Diciembre 2022. Teniendo como resultado un listado de contraseñas que a su vez
          serán analizadas a través de la conexión con la API haveibeenpwned, obteniendo como efecto
          un señalamiento de las contraseñas que han sido vulneradas en la web y que el usuario debe
          evitar utilizar a toda costa.
        </p>
        <button id='Home-div__Button'>Comenzar</button>
      </div>
    </main>
  );
};

export default Main;
