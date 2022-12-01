import React from 'react';
import '@styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        🚀 Desarrollado por{' '}
        <a
          className='footer__link'
          href='https://linkedin.com/in/ricklogar'
          target='_blank'
          rel='noopener noreferrer'>
          Ricardo López
        </a>{' '}
        ,{' '}
        <a
          className='footer__link'
          href='https://linkedin.com/in/esparev'
          target='_blank'
          rel='noopener noreferrer'>
          JoséMa Esparza
        </a>{' '}
        ,{' '}
        <a
          className='footer__link'
          href='https://www.linkedin.com/in/eduardo-alejandro-rosales-acevedo-a7a763200/'
          target='_blank'
          rel='noopener noreferrer'>
          Eduardo Rosales
        </a>{' '}
        y{' '}
        <a
          className='footer__link'
          href='https://www.linkedin.com/in/david-alejandro-due%C3%B1as-arciga-750089200/'
          target='_blank'
          rel='noopener noreferrer'>
          David Dueñas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
