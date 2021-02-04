import React from 'react';
import { Link } from 'react-router-dom';

const Navb = () => {
  return (
    <nav class='navbar navbar-light bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand'>Bricola</a>
        <form class='d-flex'>
          <Link to='/register'>
            <button class='btn btn-outline-success' type='submit'>
              Register
            </button>
          </Link>

          <Link to='/login'>
            <button class='btn btn-outline-success' type='submit'>
              Log In
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navb;
