/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth';
import UnAuth from './UnAuth';

const Layout = () => {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isAuth = false;
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-center" />
      {isAuth
        ? <Auth />
        : <UnAuth />}
    </BrowserRouter>
  );
};

export default Layout;
