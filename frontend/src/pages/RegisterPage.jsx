import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className='container-main'>
      <form className='login-box p-5'>
        <h4 className='text-center'>Create Account</h4>
        <br />
        <div className='mb-3'>
          <label htmlhtmlFor='exampleFormControlInput1' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Aryan Kodinya'
          />
        </div>

        <div className='mb-3'>
          <label htmlhtmlFor='exampleFormControlInput2' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput2'
            placeholder='name@example.com'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput3' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleFormControlInput3'
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
        <button className='btn w-100 btn-blue'>Sign Up</button>
        <br />
        <br />
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/login' className='link-to'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
