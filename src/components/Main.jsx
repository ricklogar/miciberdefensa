import React from 'react';
import '@styles/Main.css';

const Main = () => {
  return (
    <main id='home'>
      <div className='home-div'>
        <h1 className='Home-div__title'>Bienvenido a MiCiberDefensa</h1>
        <p className='Home-div__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam earum! Blanditiis
          vel debitis architecto voluptas numquam ipsum voluptatem ducimus. Excepturi exercitationem
          ut inventore natus eos doloremque aliquid dignissimos esse?
        </p>
        <button id='Home-div__Button'>Comenzar</button>
      </div>
    </main>
  );
};

export default Main;
