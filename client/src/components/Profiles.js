import React, { useEffect } from "react";
import Spinner from "./Spinner";
import ArtisanCard from "./ArtisanCard";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../actions/artisanProfile";

const Profiles = () => {
  const profile = useSelector((state) => state.artisan);
  const dispatch = useDispatch();

  // const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <div>
      {profile &&
        (profile.loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            {profile.profiles.length > 0 ? (
              profile.profiles.map((profile) => (
                <ArtisanCard key={profile._id} profile={profile} />
              ))
            ) : (
              <h1>No profiles found</h1>
            )}
          </div>
        ))}
    </div>
  );
};

export default Profiles;
