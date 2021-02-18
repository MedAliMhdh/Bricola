import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../actions/artisanProfile";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import { getPosts } from "../actions/post";

const VisitedProfile = ({ profileId }) => {
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.artisan);
  const posts = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getProfileById(profileId));
  }, []);

  useEffect(() => {
    if (profile.profile) {
      dispatch(getPosts(profile.profile.user._id));
    }
  }, [profile.profile]);
  return (
    <div>
      {!profile.profile ? (
        <Spinner />
      ) : (
        <div className='container artisanProfileContainer bootstrap snippets bootdey'>
          <div className='row'>
            <div className='profile-nav col-lg-3'>
              <div className='panel'>
                <div className='user-heading round'>
                  <Link to='/'>
                    <img src={profile.profile.user.avatar} alt='' />
                  </Link>
                  <h1>{profile.profile.user.name}</h1>
                  <p>{profile.profile.user.email}</p>
                </div>
              </div>
            </div>

            <div className='profile-info col-lg-9'>
              <div className='panel-body bio-graph-info'>
                <h1>About</h1>
                <div className='row'>
                  <div className='bio-row'>
                    <p>
                      <span>Full Name </span>: {profile.profile.user.name}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Profession </span>: {profile.profile.user.job}
                    </p>
                  </div>
                  <div className='bio-row'>
                    <p>
                      <span>Mobile </span>: {profile.profile.user.phone}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>E-mail </span>: {profile.profile.user.email}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Address </span>:{" "}
                      {` ${profile.profile.street}, ${profile.profile.city}, ${profile.profile.zipcode} `}
                    </p>
                  </div>

                  <div className='bio-row'>
                    <p>
                      <span>Equipments </span>:{" "}
                      {profile.profile.equipment ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>
              <div className='panel'>
                <div className='bio-graph-heading'>{profile.profile.bio}</div>
              </div>
              {posts.posts ? (
                posts.posts.map((post) => (
                  <PostCard
                    key={post._id}
                    photo={profile.profile.user.avatar}
                    fullName={profile.profile.user.name}
                    content={post.text}
                    id={post._id}
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

export default VisitedProfile;
