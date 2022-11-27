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
        </a>{' '}y{' '}
        <a
          className='footer__link'
          href='https://linkedin.com/in/esparev'
          target='_blank'
          rel='noopener noreferrer'>
          JoséMa Esparza
        </a>
      </p>
    </footer>
  );
};

export default Footer;
