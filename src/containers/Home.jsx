import React from 'react';
import Header from '@components/Header';
import Main from '@components/Main';
import Questions from '@components/Questions';
import Results from '@components/Results';
import ARs from '@components/ARs';
import '@styles/global.css';
import '@styles/desktop.css';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Questions />
      <Results />
      <ARs />
    </>
  );
};

export default Home;
