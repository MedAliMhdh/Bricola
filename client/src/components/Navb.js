import React from "react";
import { Link } from "react-router-dom";

const Navb = () => {
  return (
    <nav class='navbar navbar-light bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand'>Bricola</a>
        <form class='d-flex'>
          <button class='btn btn-outline-success' type='submit'>
            <Link to='/register'>Register</Link>
          </button>
          <button class='btn btn-outline-success' type='submit'>
            <Link to='/login'>Log In</Link>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navb;
