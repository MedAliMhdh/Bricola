import React from "react";
import { Link } from "react-router-dom";

const Navb = () => {
  return (
    <nav className='navbar navbar-light bg-dark mx-0'>
      <div className='container-fluid d-felx align-content-around mx-0'>
        <Link to='/'>
          <a className='navbar-brand'>Bricola</a>
        </Link>
        <form className='d-flex'>
          <Link to='/register'>
            <button
              className='btn btn-outline-success col-11 px-4 mx-2'
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
    </nav>
  );
};

export default Navb;
