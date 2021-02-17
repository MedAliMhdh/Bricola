import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArtisanCurrentProfile } from "../actions/artisanProfile";
import Spinner from "./Spinner";
import PostCard from "./PostCard";
import { getPosts, addPost } from "../actions/post";

const ArtisanProfile = () => {
  const dispatch = useDispatch();
  const artisanProfileState = useSelector((store) => store.artisan);
  const posts = useSelector((state) => state.post);
  const auth = useSelector((store) => store.auth);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getArtisanCurrentProfile());
  }, []);

  useEffect(() => {
    if (artisanProfileState.profile) {
      dispatch(getPosts(artisanProfileState.profile.user._id));
    }
  }, [artisanProfileState.profile]);

  return (
    <div>
      {artisanProfileState.loading && !artisanProfileState.profile ? (
        <Spinner />
      ) : !artisanProfileState.profile ? (
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
                    <img src={artisanProfileState.profile.user.avatar} alt='' />
                  </Link>
                  <h1>{artisanProfileState.profile.user.name}</h1>
                  <p>{artisanProfileState.profile.user.email}</p>
                </div>

                <ul className='nav nav-pills nav-stacked '>
                  <li className='nav-item d-block text-white active w-100'>
                    <Link className='nav-link' to='/artisanprofile/me'>
                      <i className='fa fa-user'></i> Profile
                    </Link>
                  </li>

                  <li className='nav-item d-block  text-white w-100 '>
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
                      {artisanProfileState.profile.user.name}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Profession </span>:{" "}
                      {artisanProfileState.profile.user.job}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>:{" "}
                      {artisanProfileState.profile.user.phone}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>E-mail </span>:{" "}
                      {artisanProfileState.profile.user.email}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Address </span>:{" "}
                      {` ${artisanProfileState.profile.street}, ${artisanProfileState.profile.city}, ${artisanProfileState.profile.zipcode} `}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Equipments </span>:{" "}
                      {artisanProfileState.profile.equipment ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>
              <div className='panel'>
                <div className='bio-graph-heading'>
                  {artisanProfileState.profile.bio}
                </div>
              </div>
              <div className='panel'>
                <form>
                  <textarea
                    placeholder='Whats in your mind today?'
                    rows='2'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='form-control input-lg p-text-area'
                  ></textarea>
                </form>
                <footer className='panel-footer d-flex flex-row-reverse justify-content-between align-items-center'>
                  <button
                    className='btn btn-warning'
                    onClick={() => {
                      dispatch(addPost({ text }));
                      setText("");
                    }}
                  >
                    Post
                  </button>
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
              {posts.posts ? (
                posts.posts.map((post) => (
                  <PostCard
                    key={post._id}
                    photo={post.avatar}
                    fullName={post.name}
                    text={post.text}
                    id={post._id}
                    userId={post.user}
                  />
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisanProfile;
