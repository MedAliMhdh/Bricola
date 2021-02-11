import { useEffect } from "react";
import { getProfiles } from "../actions/artisanProfile";
import Spinner from "./Spinner";
import ArtisanCard from "./ArtisanCard";
import { useDispatch, useSelector } from "react-redux";

const Profiles = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const { profiles, loading } = profile;

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ArtisanCard key={profile._id} profile={profile} />
            ))
          ) : (
            <h1>No profiles found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Profiles;
