import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navb from './Navb';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [role, setRole] = useState('Person');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(
        setAlert({ msg: 'Passwords do not match', alertType: 'danger' })
      );
    } else {
      dispatch(register({ name, email, password, role, job, phone }, history));
      setName('');
      setEmail('');
      setPassword('');
      setPassword2('');
      setJob('');
      setRole('Person');
      setPhone('');
    }
  };

  return (
    <div className='registerContainer container-fluid mx-0 px-0'>
      <div className='container-fluid mx-0 px-0'>
        <Navb />
      </div>
      <div className='container d-flex justify-content-center p-3 '>
        <br />

        <div className='card bg-light'>
          <article className='card-body mx-auto' style={{ maxWidth: '400' }}>
            <h4 className='card-title mt-3 text-center'>Create Account</h4>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group input-group '>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                  </span>
                </div>
                <input
                  name='name'
                  className='form-control'
                  placeholder='Full name *'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* <!-- form-group// --> */}
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
                  placeholder='Email address *'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-phone'></i>{' '}
                  </span>
                </div>
                <input
                  name='phone'
                  className='form-control'
                  placeholder='Phone number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type='number'
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {' '}
                    <i className='fas fa-user-tag'></i>{' '}
                  </span>
                </div>
                <select
                  name='role'
                  className='form-control'
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value='choose'> Select your role</option>
                  <option value='Person'>Person</option>
                  <option value='Artisan'>Artisan</option>
                </select>
              </div>
              {/* <!-- form-group// --> */}
              {role === 'Artisan' && (
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {' '}
                      <i className='fas fa-paint-roller'></i>
                    </span>
                  </div>
                  <select
                    className='form-control'
                    name='job'
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  >
                    <option value='select'> Select job type *</option>
                    <option value='Bricklayer'>Bricklayer</option>
                    <option value='Electrician'>Electrician</option>
                    <option value='Painter'>Painter</option>
                    <option value='Plumber'>Plumber</option>
                    <option value='Mechanic'>Mechanic </option>
                    <option value='Welder'>Welder</option>
                    <option value='Carpenter'>Carpenter</option>
                  </select>
                </div>
              )}
              {/* <!-- form-group end.// --> */}

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
                  placeholder='Create password *'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {' '}
                    <i className='fa fa-lock'></i>{' '}
                  </span>
                </div>
                <input
                  name='password2'
                  className='form-control'
                  placeholder='Repeat password *'
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  type='password'
                />
              </div>
              {/* <!-- form-group// -->  */}
              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  Create Account
                </button>
              </div>
              {/* <!-- form-group// -->       */}
              <p className='text-center'>
                Have an account? <Link to='/login'>Log In</Link>{' '}
              </p>
            </form>
          </article>
        </div>
        {/* <!-- card.// --> */}
      </div>
    </div>
  );
};

export default Register;
