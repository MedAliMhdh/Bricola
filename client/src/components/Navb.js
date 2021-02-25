import React from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import { clearProfiles } from "../actions/artisanProfile";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import "./CSS/navbar.css";

const Navb = ({ setSearch, setRate, setJob, setEquipment, setCity }) => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const resetStates = () => {
    setSearch(false);
    setRate(0);
    setJob("");
    setEquipment("");
    setCity("");
  };

  const defaultImg =
    "http://www.gravatar.com/avatar/c1a276b8587995e9f29e1b7fe9148169?s=200&r=pg&d=mm";

  const guestLinks = (
    <div
      className='collapse navbar-collapse d-flex justify-content-end'
      id='navbarNav'
    >
      <form className=' d-flex  '>
        <Link to='/register'>
          <button
            className='btn logRegBtn nav-item col-11 px-4 mx-2'
            type='submit'
          >
            Register
          </button>
        </Link>

        <Link to='/login'>
          <button className='btn logRegBtn col-12 px-4 mx-2' type='submit'>
            Log In
          </button>
        </Link>
      </form>
    </div>
  );

  const authLinks = (
    <div
      className='collapse navbar-collapse d-flex justify-content-end  d-sm-none d-md-block'
      id='navbarNav'
    >
      <i className='far fa-bell fa-2x mx-2'></i>
      <i className='far fa-comment-alt fa-2x mx-2'></i>
      <form className='d-flex'>
        {" "}
        <div className='dropdown drpdwnMenuBtn ml-2'>
          <button
            className='btn dropdown-toggle px-0 py-0'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <img
              src={
                !!(authState && authState.user)
                  ? authState.user.avatar
                  : defaultImg
              }
              className=' rounded-circle mr-3 '
              width='40'
              alt='hihihi'
            />
          </button>
          <div
            className='dropdown-menu nvbDropdow'
            aria-labelledby='dropdownMenuButton'
          >
            {authState.user ? (
              authState.user.role === "Artisan" ? (
                <Link className='dropdown-item px-3' to='/artisanprofile/me'>
                  View profile
                </Link>
              ) : (
                <Link className='dropdown-item px-3' to='/personprofile/me'>
                  View profile
                </Link>
              )
            ) : (
              <div></div>
            )}
            <Link
              className='dropdown-item px-3'
              onClick={() => {
                dispatch(logout());
                resetStates();
              }}
              to='/'
            >
              Logout
            </Link>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <nav className='navbar navBarContainer navbar-expand-md fixed-top mx-0'>
        <div className='container-fluid mx-0'>
          <div className='col-md-5 d-flex align-items-center'>
            <Link
              to='/'
              className='navbar-brand mr-5'
              onClick={() => {
                resetStates();
                dispatch(clearProfiles());
              }}
            >
              Bricola
            </Link>

            <Link to='/' className='navbar-item mx-1'>
              Home
            </Link>
            <Link to='/about' className='navbar-item mx-1'>
              About
            </Link>
            <Link to='/contactus' className='navbar-item mx-1'>
              Contact Us
            </Link>
            <Link to='/ourteam' className='navbar-item mx-1'>
              Our Team
            </Link>
            <Link to='/blog' className='navbar-item mx-1'>
              Blog
            </Link>
          </div>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {!authState.loading && (
            <div>{authState.isAuthenticated ? authLinks : guestLinks}</div>
          )}
        </div>
      </nav>
      <Alert className='alerts' />
    </div>
  );
};

export default Navb;
