/* eslint-disable arrow-body-style */
import React from 'react';
import Nav from '../Nav/Nav';
import styles from './Home.module.scss';
import HeroPage from '../components/HeroPage';
import Palm from '../components/Palm';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  const auth = true;

  return (
    <div className={styles.container}>
      <Nav auth={auth} />
      <HeroPage auth={auth} />
      <Palm />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
