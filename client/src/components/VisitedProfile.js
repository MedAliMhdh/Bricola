import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../actions/artisanProfile";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import { getPosts } from "../actions/post";
import Thumbs from "./Thumbs";
import "./CSS/artisanProfile.css";

const VisitedProfile = ({ profileId }) => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const profile = useSelector((store) => store.artisan);
  const posts = useSelector((state) => state.post);
  const [rate, setRate] = useState(0);
  const [yourRate, setYourRate] = useState(false);

  const rateAverage =
    profile.profile && profile.profile.rate.length > 0
      ? profile.profile.rate.reduce((acc, rate) => acc + rate.value, 0) /
        profile.profile.rate.length
      : 0;

  useEffect(() => {
    setRate(
      profile.profile &&
        profile.profile.rate &&
        auth.user &&
        profile.profile.rate.find((rate) => rate.user === auth.user._id)
        ? profile.profile.rate.find((rate) => rate.user === auth.user._id).value
        : 0
    );
  }, [profile, dispatch]);

  useEffect(() => {
    dispatch(getProfileById(profileId));
  }, [dispatch]);

  useEffect(() => {
    if (profile.profile) {
      dispatch(getPosts(profile.profile.user._id));
    }
  }, [dispatch, profile.profile]);

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
                  <Link to={`/visitedartisanprofile/${profileId}`}>
                    <img src={profile.profile.user.avatar} alt='' />
                  </Link>
                  <h1>{profile.profile.user.name}</h1>
                  <p>{profile.profile.user.email}</p>
                  <div className='ratingInProfile d-flex justify-content-center'>
                    <Thumbs rate={rateAverage} />
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-3'>
                {yourRate
                  ? auth.user &&
                    (rate ? (
                      <div className='givingRate'>
                        <Thumbs rate={rate} />
                      </div>
                    ) : (
                      <div className='givingRate'>
                        <Thumbs rate={rate} setRate={setRate} evaluate={true} />
                      </div>
                    ))
                  : auth.user && (
                      <button
                        className='btn post '
                        onClick={() => {
                          setYourRate(true);
                        }}
                      >
                        Evaluate Artisan
                      </button>
                    )}
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
                    comments={post.comments}
                    likes={post.likes}
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
