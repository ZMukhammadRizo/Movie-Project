import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import EmailVerify from '../pages/EmailVerificate';
import ResetPassword from '../pages/Reset-password';
import Wrap2022 from '../pages/2022Wrap';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resend-email-verification" element={<EmailVerify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/2022" element={<Wrap2022 />} />
    </Routes>
  );
};

export default Routers;
