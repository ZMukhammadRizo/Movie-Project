import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SingUp';
import EmailVerify from '../pages/EmailVerificate';
import ResetPassword from '../pages/Reset-password';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resend-email-verification" element={<EmailVerify />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default Routers;
