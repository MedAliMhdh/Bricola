import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

const Navb = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const profileState = useSelector((state) => state.artisan);

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
            className='btn btn-outline-success nav-item col-11 px-4 mx-2'
            type='submit'
          >
            Register
          </button>
        </Link>

        <Link to='/login'>
          <button
            className='btn btn-outline-success col-12 px-4 mx-2'
            type='submit'
          >
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
      <i class='far fa-comment-alt fa-2x mx-2'></i>
      <form className='d-flex'>
        {" "}
        <div className='dropdown drpdwnMenuBtn mx-2'>
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
                !!(profileState.profile && !profileState.loading)
                  ? profileState.profile.user.avatar
                  : defaultImg
              }
              className=' rounded-circle mr-3'
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
              onClick={() => dispatch(logout())}
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
      <nav className='navbar navbar-expand-md fixed-top navbar-light bg-light mx-0'>
        <div className='container-fluid d-felx align-content-around mx-0'>
          <Link to='/' className='navbar-brand'>
            Bricola
          </Link>

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
            <Fragment>
              {authState.isAuthenticated ? authLinks : guestLinks}
            </Fragment>
          )}
        </div>
      </nav>
      <Alert className='alerts' />
    </div>
  );
};

export default Navb;
