import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentProfile } from "../actions/artisanProfile";

const ArtisanProfile = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(getCurrentProfile);
  }, []);

  return (
    <div>
      <link rel='stylesheet' />
      <div className='container bootstrap snippets bootdey'>
        <div className='row'>
          <div className='profile-nav col-lg-3'>
            <div className='panel'>
              <div className='user-heading round'>
                <Link to='/'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar3.png'
                    alt=''
                  />
                </Link>
                <h1>Camila Smith</h1>
                <p>deydey@theEmail.com</p>
              </div>

              <ul className='nav nav-pills nav-stacked'>
                <li className='active '>
                  <Link to='/'>
                    <i className='fa fa-user'></i> Profile
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-calendar'></i> Recent Activity
                    <span className='label label-warning r-activity'></span>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
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
                Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                Bio Bio Bio Bio Bio Bio Bio
              </div>
              <div className='panel-body bio-graph-info'>
                <h1>Bio Graph</h1>
                <div className='row'>
                  <div className='bio-row'>
                    <p>
                      <span>First Name </span>: Camila
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Last Name </span>: Smith
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Country </span>: Australia
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Birthday</span>: 13 July 1983
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Occupation </span>: UI Designer
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Email </span>: jsmith@flatlab.com
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>: (12) 03 4567890
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Phone </span>: 88 (02) 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
