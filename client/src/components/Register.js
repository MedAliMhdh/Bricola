import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navb from "./Navb";

const Register = () => {
  const [role, setRole] = useState("Person");
  return (
    <div className='container-fluid mx-0 px-0'>
      <div className='container-fluid mx-0 px-0'>
        <Navb className='Navb' />
      </div>
      <div className='container d-flex justify-content-center p-3 '>
        <br />

        <div className='card bg-light'>
          <article className='card-body mx-auto' style={{ maxWidth: "400" }}>
            <h4 className='card-title mt-3 text-center'>Create Account</h4>

            <form>
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <i className='fa fa-user'></i>
                  </span>
                </div>
                <input
                  name=''
                  className='form-control'
                  placeholder='Full name *'
                  type='text'
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {" "}
                    <i className='fa fa-envelope'></i>{" "}
                  </span>
                </div>
                <input
                  name=''
                  className='form-control'
                  placeholder='Email address *'
                  type='email'
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {" "}
                    <i className='fa fa-phone'></i>{" "}
                  </span>
                </div>
                <input
                  name=''
                  className='form-control'
                  placeholder='Phone number'
                  type='text'
                />
              </div>
              {/* <!-- form-group// --> */}
              <div className='form-group input-group'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    {" "}
                    <i className='fas fa-user-tag'></i>{" "}
                  </span>
                </div>
                <select
                  className='form-control'
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option selected=''> Select your role</option>
                  <option value='Person'>Person</option>
                  <option value='Artisan'>Artisan</option>
                </select>
              </div>
              {/* <!-- form-group// --> */}
              {role === "Artisan" && (
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {" "}
                      <i className='fas fa-paint-roller'></i>
                    </span>
                  </div>
                  <select className='form-control'>
                    <option selected=''> Select job type *</option>
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
                    {" "}
                    <i className='fa fa-lock'></i>{" "}
                  </span>
                </div>
                <input
                  className='form-control'
                  placeholder='Create password *'
                  type='password'
                />
              </div>
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
                  placeholder='Repeat password *'
                  type='password'
                />
              </div>
              {/* <!-- form-group// -->  */}
              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                  {" "}
                  Create Account{" "}
                </button>
              </div>
              {/* <!-- form-group// -->       */}
              <p className='text-center'>
                Have an account? <Link to='/login'>Log In</Link>{" "}
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
