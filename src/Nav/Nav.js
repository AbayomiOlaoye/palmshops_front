/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useState, useEffect,
} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import styles from './Nav.module.scss';
import palmshops from '../images/logo/logo_text.svg';
/* eslint-disable react/jsx-boolean-value */

// eslint-disable-next-line react/prop-types
const Nav = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  const handleMenuOpen = () => {
    setToggle(!toggle);
  };

  const handleMenuClose = () => {
    setToggle(false);
  };

  return (
    <header className={styles.scroller}>
      <nav className={styles.navBar}>
        <div className={styles.navPre}>
          {
          toggle ? (
            <AiFillCloseCircle onClick={handleMenuClose} className={styles.exitMenu} />
          ) : (
            <MdMenu onClick={handleMenuOpen} className={styles.mobileMenuIcon} />
          )
        }

          <Link to="/" className={styles.navLink}>
            <img
              src={palmshops}
              alt="PalmShops.com logo"
              className={styles.navLogo}
            />
          </Link>
        </div>
        {toggle && (
          <div className={styles.navLinksMob}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Link to="/" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Home
                </Link>
              </li>
              <li className={styles.navListItem}>
                <a href="#about" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  About
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="#faqs" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  FAQs
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="#contact" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className={styles.navLinks}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link to="/" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Home
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="palmSchool" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Palm School
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="palmTrack" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                PalmTrack
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="palmStore" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Palm Store
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link to="palmVest" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                PalmVest
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.profile}>
          <Link to="/register" className={styles.signup}>
            Get Started
          </Link>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

export default Nav;
