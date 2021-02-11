import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getCurrentProfile } from "../actions/artisanProfile";
import Spinner from "./Spinner";

const ArtisanProfile = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((store) => store.profile);
  console.log(("loading", profileState.loading));
  console.log("profile", profileState.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  return (
    <div>
      {profileState.loading && !profileState.profile ? (
        <Spinner />
      ) : (
        profileState.profile && (
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
                      <Link className='nav-link' to='#'>
                        <i className='fa fa-edit'></i> Edit profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='profile-info col-lg-9'>
                <div className='panel'>
                  <form>
                    <textarea
                      placeholder='Whats in your mind today?'
                      rows='2'
                      className='form-control input-lg p-text-area'
                    ></textarea>
                  </form>
                  <footer className='panel-footer d-flex flex-row-reverse justify-content-between align-items-center'>
                    <button className='btn btn-warning '>Post</button>
                    <ul className='nav nav-pills'>
                      <li>
                        <Link to='/'>
                          <i className='fa fa-map-marker mx-1'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='fa fa-camera mx-1'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className=' fa fa-film mx-1'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/'>
                          <i className='fa fa-microphone mx-1'></i>
                        </Link>
                      </li>
                    </ul>
                  </footer>
                </div>
                <div className='panel'>
                  <div className='bio-graph-heading'>
                    {profileState.profile.bio}
                  </div>
                  <div className='panel-body bio-graph-info'>
                    <h1>Bio Graph</h1>
                    <div className='row'>
                      <div className='bio-row'>
                        <p>
                          <span>First Name </span>{" "}
                          {profileState.profile.user.name}
                        </p>
                      </div>
                      <div className='bio-row'>
                        <p>
                          <span>Last Name </span>: Smith
                        </p>
                      </div>

                      <div className='bio-row'>
                        <p>
                          <span>Profession </span>:{" "}
                          {profileState.profile.user.job}
                        </p>
                      </div>
                      <div className='bio-row'>
                        <p>
                          <span>E-mail </span>:{" "}
                          {profileState.profile.user.email}
                        </p>
                      </div>
                      <div className='bio-row'>
                        <p>
                          <span>Mobile </span>:{" "}
                          {profileState.profile.user.phone}
                        </p>
                      </div>
                      <div className='bio-row'>
                        <p>
                          <span>Address </span>:{" "}
                          {` ${profileState.profile.street}, ${profileState.profile.city}, ${profileState.profile.zipcode} `}
                        </p>
                      </div>
                    </div>
                  </div>
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
