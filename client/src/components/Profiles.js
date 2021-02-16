import React, { useEffect } from 'react';
import Spinner from './Spinner';
import ArtisanCard from './ArtisanCard';
import { useSelector } from 'react-redux';

const Profiles = () => {
  const artisan = useSelector((state) => state.artisan);
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
