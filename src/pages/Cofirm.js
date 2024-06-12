/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner3 } from 'react-icons/im';
import { FaArrowRight } from 'react-icons/fa6';
import { MdKeyboardBackspace } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OtpInput from 'react-otp-input';
import styles from './css/Confirm.module.scss';
import logo from '../images/logo/logo_img.svg';
// import { registerUser } from '../redux/reducer/authActions';

const Confirm = () => {
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

  const [otp, setOtp] = useState('');

  const handleChange = () => {
    setOtp(otp);
  };

  return (
    <section className={styles.container}>
      <MdKeyboardBackspace className={styles.angle} onClick={handleBackClick} />
      <img src={logo} alt="PalmShops.com logo" className={styles.logo} />
      <article className={styles.title}>
        <h1 className={styles.subtitle}>Phone Number Verification</h1>
        <p className={styles.desc}>
          An OTP has been sent to 080****781. Kindly enter the code
          in the boxes below
        </p>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span />}
          renderInput={(props) => <input {...props} />}
        />
        <button type="submit" className={styles.btn} disabled={loading}>
          Verify
          { loading ? <ImSpinner3 className={styles.spinner} /> : <FaArrowRight /> }
        </button>
      </article>
      {success && (
      <article className={styles.success}>
        <iframe
          src="https://lottie.host/embed/6bc5cd40-a59b-4dae-a8b4-89bedc2cb175/aVQdT5lnd1.json"
          title="Successful Registration"
          border="none"
        />
        <p>
          <Link to="/Login">Now let&apos;s Login</Link>
        </p>
      </article>
      )}
    </section>
  );
};

export default Confirm;