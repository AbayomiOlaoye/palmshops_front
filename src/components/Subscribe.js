/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styles from './css/Subscribe.module.scss';
import tractor from '../images/tractor.png';

const FORM_ID = 'xvovzqzj';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      const res = await axios.post(`https://formspree.io/f/${FORM_ID}/`, data);
      if (res.status === 200) {
        setEmail('');
        toast.success('Subscribed successfully');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again');
    }
  };

  return (
    <article className={styles.footerContact}>
      <div className={styles.footerContactContent}>
        <h3 className={styles.footerContactTitle}>
          Subscribe to our Newsletter
        </h3>
        <form className={styles.footerContactForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.footerContactInput}
          />
          <button type="submit" className={styles.footerContactButton}>
            Subscribe
          </button>
        </form>
      </div>
      <img
        src={tractor}
        alt="Subscribe to our newsletter"
        className={styles.footerContactImage}
      />
    </article>
  );
};

export default Subscribe;
