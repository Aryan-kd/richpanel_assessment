import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContextApi } from '../Context';

const LoginPage = () => {
  const context = useContextApi();
  const navigate = useNavigate();

  useEffect(() => {
    context.checkLocalStorage();
    if (context.user !== null) {
      navigate('/');
    }
  }, [context, navigate]);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || pass === '') {
      setError(true);
    } else {
      context.LoginUser(email, pass);
      setEmail('');
      setPass('');
    }
  };
  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit} className='login-box p-5'>
        <h4 className='text-center'>Login to your account</h4>
        {error ? <p className='text-danger'>Please try again</p> : ''}
        <br />
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            autoComplete='on'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='inputPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Password'
            autoComplete='on'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
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
        <button type='submit' className='btn w-100 btn-blue'>
          Login
        </button>
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
