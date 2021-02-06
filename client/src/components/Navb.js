import React from "react";
import { Link } from "react-router-dom";

const Navb = () => {
  return (
    <nav className='navbar navbar-expand-md fixed-top navbar-light bg-light mx-0'>
      <div className='container-fluid d-felx align-content-around mx-0'>
        <Link to='/'>
          <a href='/' className='navbar-brand'>
            Bricola
          </a>
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
          <span class='navbar-toggler-icon'></span>
        </button>

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
      </div>
    </nav>
  );
};

export default Navb;
