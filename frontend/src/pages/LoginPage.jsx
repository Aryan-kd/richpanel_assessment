import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='container-main'>
      <form className='login-box p-5'>
        <h4 className='text-center'>Login to your account</h4>
        <br />
        <div className='mb-3'>
          <label htmlhtmlFor='exampleFormControlInput1' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
          />
        </div>
        <div className='mb-3'>
          <label htmlhtmlFor='inputPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Password'
          />
        </div>
        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='invalidCheck'
              required
            />
            <label className='form-check-label' htmlFor='invalidCheck'>
              Remember Me
            </label>
          </div>
        </div>
        <br />
        <button className='btn w-100 btn-blue'>Login</button>
        <br />
        <br />
        <p className='text-center'>
          New to MyApp?{' '}
          <Link to='/register' className='link-to'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
