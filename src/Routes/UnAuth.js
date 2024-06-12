/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import SignUp from '../pages/SignUp';
import Confirm from '../pages/Cofirm';

const UnAuth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
};

export default UnAuth;
