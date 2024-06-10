import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Loader.module.scss';
import logo from '../images/logo/logo_img.svg';

const Loader = () => {
  AOS.init({
    duration: 400,
    easing: 'ease-in',
    once: true,
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 0.8 : 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.spinner} style={{ overflow: 'hidden' }}>
      <img
        src={logo}
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos="zoom-in"
        alt="GreenStern logo"
        className={styles.logo}
        style={{ transform: `scale(${scale})` }}
      />
    </section>
  );
};

export default Loader;
