import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  PricingPage,
  PaymentScreen,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/pricing' element={<PricingPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/payment' element={<PaymentScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
