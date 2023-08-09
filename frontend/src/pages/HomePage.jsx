import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='container-main'>
      <Link to='/login' className='btn btn-outline-primary'>
        Login
      </Link>
      <Link to='/register' className='btn btn-outline-primary'>
        Register
      </Link>
      <Link to='/pricing' className='btn btn-outline-primary'>
        Pricing
      </Link>
    </div>
  );
};

export default HomePage;
