/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './Auth';
import UnAuth from './UnAuth';
import { auth } from '../auth';

const Layout = () => {
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-center" />
      {auth
        ? <Auth />
        : <UnAuth />}
    </BrowserRouter>
  );
};

export default Layout;
