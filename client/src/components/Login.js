import React, { useState } from "react";
import Navb from "./Navb";

import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className=' loginContainer container-fluid mx-0 px-0'>
      <div className='container-fluid mx-0 px-0'></div>
      <Navb className='Navb' />

      <div className='container d-flex justify-content-center p-3'>
        <br />

        <div className='card bg-light'>
          <article className='card-body mx-auto' style={{ maxWidth: "400" }}>
            <h4 className='card-title mt-3 text-center'>Log In</h4>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {" "}
                    <i className='fa fa-envelope'></i>{" "}
                  </span>
                </div>
                <input
                  name='email'
                  className='form-control'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  required
                />
              </div>
              {/* <!-- form-group// --> */}

              {/* <!-- form-group// --> */}

              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {" "}
                    <i className='fa fa-lock'></i>{" "}
                  </span>
                </div>
                <input
                  name='password'
                  className='form-control'
                  placeholder='Create password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  required
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
                Not registred yet? <Link to='/register'>Register</Link>{" "}
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
