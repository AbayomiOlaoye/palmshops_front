/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import WelcomePage from '../pages/Courses/WelcomePage';

const Auth = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="palmSchool" element={<WelcomePage />} />
    </Routes>
  );
};

export default Auth;
