import React, { useEffect } from 'react';
import Spinner from './Spinner';
import ArtisanCard from './ArtisanCard';
import { useSelector } from 'react-redux';

const Profiles = () => {
  const artisan = useSelector((state) => state.artisan);
  return (
    <div>
      {artisan &&
        (artisan.loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            {artisan.profiles.length > 0 ? (
              artisan.profiles.map((artisan) => (
                <ArtisanCard key={artisan._id} artisan={artisan} />
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
