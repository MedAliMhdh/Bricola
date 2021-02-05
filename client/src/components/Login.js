import React, { useState } from "react";
import Navb from "./Navb";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='container-fluid mx-0 px-0'>
      <div className='container-fluid mx-0 px-0'></div>
      <Navb className='Navb' />

      <div className='container d-flex justify-content-center p-3'>
        <br />

        <div className='card bg-light'>
          <article className='card-body mx-auto' style={{ maxWidth: "400" }}>
            <h4 className='card-title mt-3 text-center'>Log In</h4>

            <form>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-envelope'></i>
                  </span>
                </div>
                <input
                  name=''
                  className='form-control'
                  placeholder='Email address'
                  type='email'
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
                  className='form-control'
                  placeholder='Create password'
                  type='password'
                />
              </div>
              {/* <!-- form-group// --> */}

              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  {" "}
                  Log In{" "}
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
