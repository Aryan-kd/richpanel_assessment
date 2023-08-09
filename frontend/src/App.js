import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, HomePage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
