/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import Aos from 'aos';
import styles from './css/Palm.module.scss';
import hero from '../images/hero.png';

const Palm = () => {
  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <section className={styles.homeSection} style={{ overflow: 'hidden' }}>
      <article className={styles.homeAbout}>
        <div className={styles.homeAboutPre}>
          <img
            src={hero}
            className={styles.homeAboutImage}
            alt="PalmShops.com mobile app"
            data-aos="fade-up"
          />
          <h2 className={styles.homeAboutTitle}>
            PALMSHOPS is not just another agricultural platform; it’s a game-changer
          </h2>
        </div>
        <div className={styles.homeAboutText}>
          <h2 className={styles.homeAboutTitle}>
            Palmshops is not just another agricultural platform; it’s a game-changer
          </h2>
          <ul className={styles.homeAboutDescription} data-aos="fade-left">
            <li className={styles.homeAboutDescriptionItem} data-aos="zoom-up">
              Palmschool elevates your agribusiness knowledge with multi-lingual e-learning tools
            </li>
            <li className={styles.homeAboutDescriptionItem} data-aos="zoom-up">
              Palmtrack helps manage your farm seamlessly while gathering data for traceability.
            </li>
            <li className={styles.homeAboutDescriptionItem} data-aos="zoom-up">
              Palmstore gives you direct access to market and machinery at affordable prices.
            </li>
            <li className={styles.homeAboutDescriptionItem} data-aos="zoom-up">
              Palmvest offers you sustainable financing options
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Palm;
