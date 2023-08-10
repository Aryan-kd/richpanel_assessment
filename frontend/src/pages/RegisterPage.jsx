import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContextApi } from '../Context';

const RegisterPage = () => {
  const context = useContextApi();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === '' || email.length === '' || pass.length === '') {
      setError(true);
    }
    setError(false);
    context.RegisterUser(name, email, pass);
    setName('');
    setEmail('');
    setPass('');
  };

  useEffect(() => {
    if (context.user !== null) {
      navigate('/');
    }
  }, [context, navigate]);

  return (
    <div className='container-main'>
      <form onSubmit={handleSubmit} className='login-box p-5'>
        <h4 className='text-center'>Create Account</h4>
        <br />
        {error ? <p className='text-danger'>Please try again</p> : ''}
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Aryan Kodinya'
            autoComplete='on'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput2' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput2'
            placeholder='name@example.com'
            autoComplete='on'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Sign Up
        </button>
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
