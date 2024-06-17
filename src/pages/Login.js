import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { MdKeyboardBackspace } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './css/Login.module.scss';
import logo from '../images/logo/logo_img.svg';
// import { registerUser } from '../redux/reducer/authActions';

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const {
    loading, success,
  } = useState({ loading: false, success: false });

  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (success) {
      navigate('/');
    }
  };
  return (
    <section className={styles.container}>
      <MdKeyboardBackspace className={styles.angle} onClick={handleBackClick} />
      <img src={logo} alt="PalmShops.com logo" className={styles.logo} />
      <article className={styles.title}>
        <h1 className={styles.subtitle}>Login</h1>
        <p className={styles.desc}>Welcome back</p>
      </article>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.input}
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <span className={styles.icon}>
          <FiPhone className={styles.svg} />
        </span>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          placeholder="Password"
          value={formData.password}
          minLength={6}
          onChange={(event) => handleInputChange(event)}
          required
        />
        <span className={styles.icon}>
          <RiLockPasswordLine className={styles.svg} />
        </span>
        <button type="submit" className={styles.btn} disabled={loading}>
          Login
        </button>
        <p className={styles.link}>
          New here?
          <Link to="/register"> Create Account</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
