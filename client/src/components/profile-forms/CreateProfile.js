import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createArtisanProfile } from '../../actions/artisanProfile';
import { createPersonProfile } from '../../actions/personProfile';

import '../CSS/createProfile.css';

import plumber from '../../images/plombier-blue.png';

const CreateProfile = () => {
  const userRole = useSelector((state) => state.auth.user.role);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [bio, setBio] = useState('');
  const [equipment, setEquipment] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className='container createProfile'>
      {userRole === 'Artisan' ? (
        <div>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <div className='d-flex justify-content-center'>
            <form className='form col-md-6 m-0'>
              <div className='form-group'>
                <select
                  className='updateInput col-sm-12'
                  name='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value=''> * city </option>
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
              <div className='form-group'>
                <input
                  className='updateInput col-sm-12'
                  type='text'
                  placeholder='Street'
                  name='street'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <input
                  className='updateInput col-sm-12'
                  type='number'
                  placeholder='Zipcode'
                  name='zipcode'
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <select
                  className='updateInput col-sm-12'
                  type='boolean'
                  name='equipment'
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                >
                  <option value=''> equipment </option>
                  <option value='true'>With equipment</option>
                  <option value='false'>Without equipment</option>
                </select>
              </div>

              <div className='form-group'>
                <textarea
                  className='updateInput col-sm-12'
                  placeholder='A short bio of yourself'
                  name='bio'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <Link to='/artisonprofile/me'>
                <button
                  className='btn submitButton'
                  onClick={() => {
                    dispatch(
                      createArtisanProfile(
                        { city, street, zipcode, bio, equipment },
                        history
                      )
                    );

                    setCity('');
                    setStreet('');
                    setZipcode('');
                    setBio('');
                    setEquipment('');
                  }}
                  type='submit'
                >
                  Send
                </button>
              </Link>
              <Link className='btn btn-secondary my-1' to='/artisanprofile/me'>
                Go Back
              </Link>
            </form>
            <div className='col-md-6 ml-5'>
              <img
                alt=''
                height='250'
                width='70'
                className='col-lg-5'
                src={plumber}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <form className='form  col-sm-6'>
            <div className='form-group'>
              <select
                className='updateInput col-sm-12'
                name='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value=''> * city </option>
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
            <div className='form-group'>
              <input
                type='text'
                className='updateInput col-sm-12'
                placeholder='Street'
                name='street'
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='updateInput col-sm-12'
                placeholder='Zipcode'
                name='zipcode'
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <Link to='/personprofile/me'>
              <button
                className='btn submitButton'
                type='submit'
                onClick={() => {
                  dispatch(
                    createPersonProfile(
                      { city, street, zipcode },
                      history,
                      false
                    )
                  );

                  setCity('');
                  setStreet('');
                  setZipcode('');
                }}
              >
                Send
              </button>
            </Link>
            <Link className='btn btn-secondary my-1' to='/personprofile/me'>
              Go Back
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
