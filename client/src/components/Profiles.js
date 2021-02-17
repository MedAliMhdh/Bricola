import React, { useEffect } from 'react';
import Spinner from './Spinner';
import ArtisanCard from './ArtisanCard';
import { useSelector, useDispatch } from 'react-redux';
import { filterProfiles } from '../actions/artisanProfile';

const Profiles = ({ rate, job, equipment, city }) => {
  const artisan = useSelector((state) => state.artisan);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProfiles({ job, equipment, city, rate }));
  }, []);

  return (
    <div>
      {artisan.loading || !artisan.profiles ? (
        <div>
          <Spinner />
        </div>
      ) : artisan.profiles ? (
        <div>
          {artisan.profiles.map((artisan) => (
            <ArtisanCard key={artisan._id} artisan={artisan} />
          ))}
        </div>
      ) : (
        <h1>No profiles found</h1>
      )}
    </div>
  );
};

export default Profiles;
