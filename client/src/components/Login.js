import React, { useState } from 'react';
import Navb from './Navb';

import { Link, Redirect } from 'react-router-dom';

import { login } from '../actions/auth';

import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.user.role);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  // Redirect if Logged in

  if (isAuthenticated) {
    if (role === 'Artisan') {
      return <Redirect to='/artisonprofile' />;
    }
    if (role === 'Person') {
      return <Redirect to='/personprofile' />;
    }
  }

  return (
    <div className=' loginContainer container-fluid mx-0 px-0'>
      <div className='container-fluid mx-0 px-0'></div>
      <Navb className='Navb' />

      <div className='container d-flex justify-content-center p-3'>
        <br />

        <div className='card bg-light'>
          <article className='card-body mx-auto' style={{ maxWidth: '400' }}>
            <h4 className='card-title mt-3 text-center'>Log In</h4>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {' '}
                    <i className='fa fa-envelope'></i>{' '}
                  </span>
                </div>
                <input
                  name='email'
                  className='form-control'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <!-- form-group// --> */}

              {/* <!-- form-group// --> */}

              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {' '}
                    <i className='fa fa-lock'></i>{' '}
                  </span>
                </div>
                <input
                  name='password'
                  className='form-control'
                  placeholder='Create password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                />
              </div>
              {/* <!-- form-group// --> */}

              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Log In
                </button>
              </div>
              {/* <!-- form-group// -->       */}
              <p className='text-center'>
                Not registred yet? <Link to='/register'>Register</Link>{' '}
              </p>
            </form>
          </article>
        </div>
        {/* <!-- card.// --> */}
      </div>
      {/* <!--container end.//--> */}
    </div>
  );
};

export default Login;
