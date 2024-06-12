import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner3 } from 'react-icons/im';
import { MdKeyboardBackspace, MdOutlineMail } from 'react-icons/md';
import { FaRegUser, FaArrowRight } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './css/SignUp.module.scss';
import logo from '../images/logo/logo_img.svg';
// import { registerUser } from '../redux/reducer/authActions';

const SignUp = () => {
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
  } = useState({ loading: false, success: true });

  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    confirmPass: '',
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
      navigate('/confirm-phone');
    }
  };
  return (
    <section className={styles.container}>
      <MdKeyboardBackspace className={styles.angle} onClick={handleBackClick} />
      <img src={logo} alt="PalmShops.com logo" className={styles.logo} />
      <article className={styles.title}>
        <h1 className={styles.subtitle}>Create Account</h1>
        <p className={styles.desc}>To have access to 100% of our features</p>
      </article>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Full name"
          onChange={(event) => handleInputChange(event)}
          value={formData.name}
          required
        />
        <span className={styles.icon}>
          <FaRegUser className={styles.svg} />
        </span>
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
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="Email address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <span className={styles.icon}>
          <MdOutlineMail className={styles.svg} />
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
        <input
          type="password"
          id="confirmPass"
          name="confirmPass"
          className={styles.input}
          placeholder="Confirm Password"
          value={formData.confirmPass}
          onChange={handleInputChange}
          required
        />
        <span className={styles.icon}>
          <RiLockPasswordLine className={styles.svg} />
        </span>
        <button type="submit" className={styles.btn} disabled={loading}>
          Sign Up
          { loading ? <ImSpinner3 className={styles.spinner} /> : <FaArrowRight /> }
        </button>
        <p className={styles.link}>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
