/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Link, Outlet, useNavigate, useLocation,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { MdKeyboardBackspace, MdSearch } from 'react-icons/md';
import styles from './Nav.module.scss';
import palmshops from '../images/logo/logo_text.svg';
/* eslint-disable react/jsx-boolean-value */

// eslint-disable-next-line react/prop-types
const NavB = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/palmSchool' || location.pathname === '/palmStore' || location.pathname === '/palmTrack' || location.pathname === '/palmVest') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={styles.scroller}>
      <nav className={styles.navBar}>
        <div className={styles.navPre}>
          <MdKeyboardBackspace className={styles.mobileMenuIcon} onClick={handleBackClick} />

          <Link to="/" className={styles.navLink}>
            <img
              src={palmshops}
              alt="PalmShops.com logo"
              className={styles.navLogo}
            />
          </Link>
        </div>
        <div className={styles.profile}>
          <MdSearch />
          <Link to="/profile" className={styles.signup}>
            <img
              src="https://unsplash.com/photos/a-man-standing-in-front-of-a-black-background-7pv9GFb6iCU"
              alt="Profile"
              className={styles.profileImg}
            />
          </Link>
        </div>
      </nav>

      <Outlet />
    </header>
  );
};

// NavB.propTypes = {
//   auth: PropTypes.bool.isRequired,
// };

export default NavB;
