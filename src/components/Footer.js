import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import footerLogo from '../images/logo.svg';
import styles from './css/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footer}>
      <article className={styles.footerAction}>
        <img src={footerLogo} alt="PalmShops.com hero" className={styles.footerActionImage} />
      </article>
      <small className={styles.footerContactContent}>
        <menu className={styles.footerContactMenu}>
          <li className={styles.footerItem}>
            <Link to="/" className={styles.footerLink}>
              Home
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link to="palmStore" className={styles.footerLink}>
              Palm Store
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link to="palmSchool" className={styles.footerLink}>
              Palm School
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link to="palmTrack" className={styles.footerLink}>
              PalmTrack
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link to="palmVest" className={styles.footerLink}>
              PalmVest
            </Link>
          </li>
        </menu>
      </small>
      <article className={styles.footerSocial}>
        <div className={styles.footerSocialContent}>
          <h3 className={styles.footerSocialTitle}>
            Follow us on social media
          </h3>
          <ul className={styles.footerSocialLinks}>
            <li className={styles.footerSocialLinkItem}>
              <Link to="https://www.linkedin.com/company/palmshops/" className={styles.footerSocialLink}>
                <FaLinkedinIn className="icon" />
              </Link>
            </li>
            <li className={styles.footerSocialLinkItem}>
              <Link to="https://www.facebook.com/palmshops" className={styles.footerSocialLink}>
                <FaFacebook className={styles.icon} />
              </Link>
            </li>
          </ul>
        </div>
        <small className={styles.footerSocialContent}>
          <p className={styles.footerSocialDescription}>
            &copy;
            {` ${currentYear} `}
            PalmShops. All rights reserved.
          </p>
        </small>
      </article>
    </section>
  );
};

export default Footer;
