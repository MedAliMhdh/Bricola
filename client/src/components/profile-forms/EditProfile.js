import Spinner from "../Spinner";
import { getPosts } from "../../actions/post";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/auth";
import Thumbs from "../Thumbs";
import {
  createArtisanProfile,
  getArtisanCurrentProfile,
} from "../../actions/artisanProfile";
import {
  createPersonProfile,
  getPersonCurrentProfile,
} from "../../actions/personProfile";

const EditProfile = () => {
  const userRole = useSelector((state) => state.auth.user.role);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [bio, setBio] = useState("");
  const [equipment, setEquipment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const artisanProfile = useSelector((state) => state.artisan);
  const personProfile = useSelector((state) => state.person);

  const rateAverage =
    artisanProfile.profile && artisanProfile.profile.rate.length > 0
      ? artisanProfile.profile.rate.reduce((acc, rate) => acc + rate.value, 0) /
        artisanProfile.profile.rate.length
      : 0;

  useEffect(() => {
    if (artisanProfile.profile) {
      dispatch(getPosts(artisanProfile.profile.user._id));
    }
  }, [artisanProfile.profile]);

  useEffect(() => {
    if (userRole === "Artisan") {
      dispatch(getArtisanCurrentProfile());
      setCity(
        artisanProfile.loading || !artisanProfile.profile.city
          ? ""
          : artisanProfile.profile.city
      );
      setStreet(
        artisanProfile.loading || !artisanProfile.profile.street
          ? ""
          : artisanProfile.profile.street
      );
      setZipcode(
        artisanProfile.loading || !artisanProfile.profile.zipcode
          ? ""
          : artisanProfile.profile.zipcode
      );
      setBio(
        artisanProfile.loading || !artisanProfile.profile.bio
          ? ""
          : artisanProfile.profile.bio
      );
      setEquipment(
        artisanProfile.loading || !artisanProfile.profile.equipment
          ? ""
          : artisanProfile.profile.equipment
      );
      setName(
        artisanProfile.loading || !artisanProfile.profile.user.name
          ? ""
          : artisanProfile.profile.user.name
      );
      setPhone(
        artisanProfile.loading || !artisanProfile.profile.user.phone
          ? ""
          : artisanProfile.profile.user.phone
      );
      setJob(
        artisanProfile.loading || !artisanProfile.profile.user.job
          ? ""
          : artisanProfile.profile.user.job
      );
    }
  });

  useEffect(() => {
    if (userRole === "Person") {
      dispatch(getPersonCurrentProfile());
      setCity(
        personProfile.loading || !personProfile.profile.city
          ? ""
          : personProfile.profile.city
      );
      setStreet(
        personProfile.loading || !personProfile.profile.street
          ? ""
          : personProfile.profile.street
      );
      setZipcode(
        personProfile.loading || !personProfile.profile.zipcode
          ? ""
          : personProfile.profile.zipcode
      );
      setName(
        personProfile.loading || !personProfile.profile.user.name
          ? ""
          : personProfile.profile.user.name
      );
      setPhone(
        personProfile.loading || !personProfile.profile.user.phone
          ? ""
          : personProfile.profile.user.phone
      );
      setJob(
        personProfile.loading || !personProfile.profile.user.job
          ? ""
          : personProfile.profile.user.job
      );
    }
  }, []);

  return (
    <div>
      {personProfile.loading && artisanProfile.loading ? (
        <Spinner />
      ) : personProfile.profile ? (
        <div className='container artisanProfileContainer bootstrap snippets bootdey'>
          <div className='row'>
            <div className='profile-nav col-lg-3'>
              <div className='panel'>
                <div className='user-heading round'>
                  <Link to='/personprofile/me'>
                    <img src={personProfile.profile.user.avatar} alt='' />
                  </Link>
                  <h1>{personProfile.profile.user.name}</h1>
                  <p>{personProfile.profile.user.email}</p>
                </div>

                <ul className='nav nav-pills nav-stacked '>
                  <li className='nav-item d-block text-white w-100'>
                    <Link className='nav-link' to='/personprofile/me'>
                      <i className='fa fa-user'></i> Profile
                    </Link>
                  </li>
                  <li className='nav-item d-block  text-white active w-100 '>
                    <Link className='nav-link' to='/edit-profile'>
                      <i className='fa fa-edit'></i> Edit profile
                    </Link>
                  </li>
                  <li className='nav-item d-block  text-white w-100 '>
                    <Link className='nav-link' to='/delete-profile'>
                      <i className='fas fa-trash-alt'></i> Delete profile
                      <span className='label label-warning r-activity'></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='profile-info col-lg-9'>
              <div className='panel-body bio-graph-info'>
                <h1>About</h1>
                <div className='row'>
                  <div className='bio-row'>
                    <p>
                      <span>Full Name </span>: {personProfile.profile.user.name}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>: {personProfile.profile.user.phone}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>E-mail </span>: {personProfile.profile.user.email}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Address </span>:{" "}
                      {`${personProfile.profile.street}, ${personProfile.profile.city}, ${personProfile.profile.zipcode}`}
                    </p>
                  </div>
                </div>
              </div>
              <form className='form  updateProfileForm col-md-12 '>
                <div className='form-group'>
                  <input
                    className='updateInput col-sm-12 '
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='updateInput col-sm-12'
                    name='job'
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  >
                    <option value='select'> Select job type *</option>
                    <option value='Bricklayer'>Bricklayer</option>
                    <option value='Electrician'>Electrician</option>
                    <option value='Painter'>Painter</option>
                    <option value='Plumber'>Plumber</option>
                    <option value='Mechanic'>Mechanic </option>
                    <option value='Welder'>Welder</option>
                    <option value='Carpenter'>Carpenter</option>
                    <option value='Architect'>Architect</option>
                  </select>
                </div>
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
                  <input
                    className='updateInput col-sm-12'
                    type='number'
                    placeholder='Phone'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <Link to='/artisanprofile/me'>
                  <button
                    className='btn post'
                    onClick={() => {
                      dispatch(
                        createPersonProfile(
                          { city, street, zipcode, phone },
                          history,
                          true
                        )
                      );
                      dispatch(updateUser({ name, job, phone }));
                    }}
                    type='submit'
                  >
                    Save changes
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      ) : (
        artisanProfile.profile && (
          <div className='container artisanProfileContainer bootstrap snippets bootdey'>
            <div className='row'>
              <div className='profile-nav col-lg-3'>
                <div className='panel'>
                  <div className='user-heading round'>
                    <Link to='/artisanprofile/me'>
                      <img src={artisanProfile.profile.user.avatar} alt='' />
                    </Link>
                    <h1>{artisanProfile.profile.user.name}</h1>
                    <p>{artisanProfile.profile.user.email}</p>
                    <div className='ratingInProfile d-flex justify-content-center'>
                      <Thumbs rate={rateAverage} />
                    </div>
                  </div>

                  <ul className='nav nav-pills nav-stacked '>
                    <li className='nav-item d-block text-white w-100'>
                      <Link className='nav-link' to='/artisanprofile/me'>
                        <i className='fa fa-user'></i> Profile
                      </Link>
                    </li>

                    <li className='nav-item d-block  text-white active w-100 '>
                      <Link className='nav-link' to='/edit-profile'>
                        <i className='fa fa-edit'></i> Edit profile
                      </Link>
                    </li>
                    <li className='nav-item d-block  text-white w-100 '>
                      <Link className='nav-link' to='/delete-profile'>
                        <i className='fas fa-trash-alt'></i> Delete profile
                        <span className='label label-warning r-activity'></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='profile-info col-lg-9'>
                <div className='panel-body bio-graph-info'>
                  <h1>About</h1>
                  <div className='row'>
                    <div className='bio-row'>
                      <p>
                        <span>Full Name </span>:{" "}
                        {artisanProfile.profile.user.name}
                      </p>
                    </div>
                    <div className='bio-row'>
                      <p>
                        <span>Profession </span>:{" "}
                        {artisanProfile.profile.user.job}
                      </p>
                    </div>
                    <div className='bio-row'>
                      <p>
                        <span>Mobile </span>:{" "}
                        {artisanProfile.profile.user.phone}
                      </p>
                    </div>

                    <div className='bio-row'>
                      <p>
                        <span>E-mail </span>:{" "}
                        {artisanProfile.profile.user.email}
                      </p>
                    </div>

                    <div className='bio-row'>
                      <p>
                        <span>Address </span>:{" "}
                        {` ${artisanProfile.profile.street}, ${artisanProfile.profile.city}, ${artisanProfile.profile.zipcode} `}
                      </p>
                    </div>

                    <div className='bio-row'>
                      <p>
                        <span>Equipments </span>:{" "}
                        {artisanProfile.profile.equipment ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='panel'>
                  <div className='bio-graph-heading'>
                    {artisanProfile.profile.bio}
                  </div>
                </div>
                <div>
                  <form className='form updateProfileForm col-md-12'>
                    <div className='form-group'>
                      <input
                        className='updateInput col-sm-12'
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='form-group'>
                      <select
                        className='updateInput col-sm-12'
                        name='job'
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      >
                        <option value='select'> Select job type *</option>
                        <option value='Bricklayer'>Bricklayer</option>
                        <option value='Electrician'>Electrician</option>
                        <option value='Painter'>Painter</option>
                        <option value='Plumber'>Plumber</option>
                        <option value='Mechanic'>Mechanic </option>
                        <option value='Welder'>Welder</option>
                        <option value='Carpenter'>Carpenter</option>
                        <option value='Architect'>Architect</option>
                      </select>
                    </div>
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
                      <input
                        className='updateInput col-sm-12'
                        type='number'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                    <Link to='/artisanprofile/me'>
                      <button
                        className='btn post'
                        onClick={() => {
                          dispatch(
                            createArtisanProfile(
                              { city, street, zipcode, bio, equipment },
                              history,
                              true
                            )
                          );
                          dispatch(updateUser({ name, job, phone }));
                        }}
                        type='submit'
                      >
                        Save changes
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default EditProfile;
