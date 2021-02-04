import React from "react";

const Navb = () => {
  return (
    <nav class='navbar navbar-light bg-dark'>
      <div class='container-fluid'>
        <a class='navbar-brand'>Bricola</a>
        <form class='d-flex'>
          <button class='btn btn-outline-success' type='submit'>
            Sign in
          </button>
          <button class='btn btn-outline-success' type='submit'>
            Log in
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navb;
