import React from "react";
import Thumbs from "./Thumbs";

const Search = () => {
  return (
    <div className='myContainer container '>
      <div className='rowContainer row d-flex justify-content-center flex-wrap align-items-center '>
        <div className='col-md-3'>
          <select className='form-control'>
            <option selected=''> Select job type </option>
            <option value='Bricklayer'>Bricklayer</option>
            <option value='Electrician'>Electrician</option>
            <option value='Painter'>Painter</option>
            <option value='Plumber'>Plumber</option>
            <option value='Mechanic'>Mechanic </option>
            <option value='Welder'>Welder</option>
            <option value='Carpenter'>Carpenter</option>
          </select>
        </div>
        <div className='col-md-3 p-3'>
          <select className='form-control'>
            <option selected=''> city </option>
            <option value='Ariana'>Ariana</option>
            <option value='Beja'>Beja</option>
            <option value='Ben Arous'>Ben Arous</option>
            <option value='Bizerte'>Bizerte</option>
            <option value='Gabes'>Gabes </option>
            <option value='Gafsa'>Gafsa</option>
            <option value='Jendouba'>Jendouba</option>
            <option value='Kairouane'>Kairouane</option>
            <option value='Kasserine'>Kasserine</option>
            <option value='kébili'>kébili</option>
            <option value='Kef'>Kef</option>
            <option value='Mahdia'>Mahdia</option>
            <option value='Manouba'>Manouba</option>
            <option value='Médenine'>Médenine</option>
            <option value='Monastir'>Monastir</option>
            <option value='Nabeul'>Nabeul</option>
            <option value='Sfax'>Sfax</option>
            <option value='Sidi bouzid'>Sidi bouzid</option>
            <option value='Siliana'>Siliana</option>
            <option value='Sousse'>Sousse</option>
            <option value='Tataouine'>Tataouine</option>
            <option value='Tozeur'>Tozeur</option>
            <option value='Tunis'>Tunis</option>
            <option value='Zaghouane'>Zaghouane</option>
          </select>
        </div>
        <div className='col-md-3 p-3'>
          <Thumbs />
        </div>
      </div>
      <div className='rowContainer2 '>
        <div className='col-md-12 p-3 row d-flex justify-content-center'>
          <button type='button' class='btn btn-dark col-md-3 '>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
