import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getArtisanCurrentProfile } from '../../actions/artisanProfile';

import { getPersonCurrentProfile } from '../../actions/personProfile';
import DeleteButton from './DeleteButton';
import Spinner from '../Spinner';

const ArtisanProfile = () => {
  const dispatch = useDispatch();
  const artisanProfile = useSelector((store) => store.artisan);
  const personProfile = useSelector((store) => store.person);

  const userRole = useSelector((state) => state.auth.user.role);

  useEffect(() => {
    if (userRole === 'Artisan') {
      dispatch(getArtisanCurrentProfile());
    }
  }, []);

  useEffect(() => {
    if (userRole === 'Person') {
      dispatch(getPersonCurrentProfile());
    }
  }, []);

  return (
    <div>
      {artisanProfile.loading && personProfile.loading ? (
        <Spinner />
      ) : artisanProfile.profile ? (
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
                </div>

                <ul className='nav nav-pills nav-stacked '>
                  <li className='nav-item d-block text-white w-100'>
                    <Link className='nav-link' to='/artisanprofile/me'>
                      <i className='fa fa-user'></i> Profile
                    </Link>
                  </li>

                  <li className='nav-item d-block  text-white w-100 '>
                    <Link className='nav-link' to='/edit-profile'>
                      <i className='fa fa-edit'></i> Edit profile
                    </Link>
                  </li>
                  <li className='nav-item d-block text-white active w-100'>
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
                      <span>Full Name </span>:{' '}
                      {artisanProfile.profile.user.name}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Profession </span>:{' '}
                      {artisanProfile.profile.user.job}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>: {artisanProfile.profile.user.phone}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>E-mail </span>: {artisanProfile.profile.user.email}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Address </span>:{' '}
                      {` ${artisanProfile.profile.street}, ${artisanProfile.profile.city}, ${artisanProfile.profile.zipcode} `}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Equipments </span>:{' '}
                      {artisanProfile.profile.equipment ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>
              <div className='panel'>
                <div className='bio-graph-heading'>
                  {artisanProfile.profile.bio}
                </div>
              </div>
              <div className='panel'>
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
      ) : (
        personProfile.profile && (
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
                    <li className='nav-item d-block  text-white w-100 '>
                      <Link className='nav-link' to='/edit-profile'>
                        <i className='fa fa-edit'></i> Edit profile
                      </Link>
                    </li>
                    <li className='nav-item d-block  text-white active w-100 '>
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
                        <span>Full Name </span>:{' '}
                        {personProfile.profile.user.name}
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
                        <span>Address </span>:{' '}
                        {`${personProfile.profile.street}, ${personProfile.profile.city}, ${personProfile.profile.zipcode}`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='panel'>
                  <DeleteButton />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ArtisanProfile;
