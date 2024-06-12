/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/HeroPage.module.scss';
import logoImg from '../images/logo/logo_img.svg';
import school from '../images/school.png';
import track from '../images/tracks.png';
import store from '../images/store.png';
import vest from '../images/vest.png';

const HeroPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <img
          src={logoImg}
          alt="PalmShops.com logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>
          <span className={styles.tint}>One Palm, </span>
          Many Possibilities
        </h1>
        <div className={styles.option}>
          <Link to="/palmSchool" className={styles.optionLink}>
            <img
              src={school}
              alt="PalmShops.com logo"
              className={styles.optionImg}
            />
            <h2 className={`${styles.optionTitle} ${styles.school}`}>Palm School</h2>
          </Link>
          <Link to="/palmTrack" className={styles.optionLink}>
            <img
              src={track}
              alt="PalmShops.com logo"
              className={styles.optionImg}
            />
            <h2 className={`${styles.optionTitle} ${styles.track}`}>Palm Track</h2>
          </Link>
          <Link to="/palmStore" className={styles.optionLink}>
            <img
              src={store}
              alt="PalmShops.com logo"
              className={styles.optionImg}
            />
            <h2 className={`${styles.optionTitle} ${styles.store}`}>Palm Store</h2>
          </Link>
          <Link to="/palmVest" className={styles.optionLink}>
            <img
              src={vest}
              alt="PalmShops.com logo"
              className={styles.optionImg}
            />
            <h2 className={`${styles.optionTitle} ${styles.vest}`}>Palmvest</h2>
          </Link>
        </div>
        <p className={styles.text}>
          Step into a worlf of agricultural innovation and excellence at Palmshops where your
          farming journey comes to life - from seed to harvest and beyond.
        </p>
        <div className={styles.divider} />
      </div>
      <div className={styles.heroAction}>
        <Link to="/register" className={styles.heroActionLink}>
          Create Account
        </Link>
        <Link to="/login" className={styles.heroActionLinkB}>
          Login
        </Link>
      </div>
    </section>
  );
};

export default HeroPage;
