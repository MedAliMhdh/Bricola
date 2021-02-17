import React, { useState, useEffect } from 'react';
import Navb from './Navb';
import Search from './Search';
import CategoriesCarousel from './CategoriesCarousel';
import Profiles from './Profiles';
const Home = () => {
  const [search, setSearch] = useStickyState(false, 'search');
  const [rate, setRate] = useStickyState(0, 'rate');
  const [job, setJob] = useStickyState('', 'job');
  const [equipment, setEquipment] = useStickyState('', 'equipment');
  const [city, setCity] = useStickyState('', 'city');

  return (
    <div className='container-fluid mx-0 px-0'>
      <Navb />
      <Search
        setSearch={setSearch}
        rate={rate}
        setRate={setRate}
        job={job}
        setJob={setJob}
        equipment={equipment}
        setEquipment={setEquipment}
        city={city}
        setCity={setCity}
      />
      {search ? (
        <Profiles rate={rate} job={job} equipment={equipment} city={city} />
      ) : (
        <CategoriesCarousel />
      )}
    </div>
  );
};

export default Home;

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
