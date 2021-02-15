import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPersonCurrentProfile } from "../actions/personProfile";
import Spinner from "./Spinner";

const PersonProfile = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((store) => store.person);
  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getPersonCurrentProfile());
  }, [dispatch]);

  return (
    <div>
      {profileState.loading && !profileState.profile ? (
        <Spinner />
      ) : !profileState.profile ? (
        <div className='container artisanProfileContainer bootstrap snippets bootdey'>
          <p>
            <i className='fas fa user' /> Welcome {auth.user && auth.user.name}
          </p>
          <p>You have not yet a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create profile
          </Link>
        </div>
      ) : (
        <div className='container artisanProfileContainer bootstrap snippets bootdey'>
          <div className='row'>
            <div className='profile-nav col-lg-3'>
              <div className='panel'>
                <div className='user-heading round'>
                  <Link to='/'>
                    <img src={profileState.profile.user.avatar} alt='' />
                  </Link>
                  <h1>{profileState.profile.user.name}</h1>
                  <p>{profileState.profile.user.email}</p>
                </div>

                <ul className='nav nav-pills nav-stacked '>
                  <li className='nav-item d-block text-white active w-100'>
                    <Link className='nav-link' to='/artisanprofile'>
                      <i className='fa fa-user'></i> Profile
                    </Link>
                  </li>
                  {/* <li>
                  <Link to='/'>
                    <i className='fa fa-calendar'></i> Recent Activity
                    <span className='label label-warning r-activity'></span>
                  </Link>
                </li> */}
                  <li className='nav-item d-block  text-white w-100 '>
                    <Link className='nav-link' to='/edit-profile'>
                      <i className='fa fa-edit'></i> Edit profile
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
                      <span>Full Name </span>: {profileState.profile.user.name}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>: {profileState.profile.user.phone}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>E-mail </span>: {profileState.profile.user.email}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Address </span>:{" "}
                      {`${profileState.profile.street}, ${profileState.profile.city}, ${profileState.profile.zipcode}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonProfile;
