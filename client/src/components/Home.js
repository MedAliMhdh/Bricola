import React, { useState } from 'react';
import Navb from './Navb';
import Search from './Search';
import CategoriesCarousel from './CategoriesCarousel';
import Profiles from './Profiles';
const Home = () => {
  const [rate, setRate] = useState(0);
  return (
    <div className='container-fluid mx-0 px-0'>
      <Navb />

      <Search setRate={setRate} rate={rate} />
      <CategoriesCarousel />

      <Profiles />
    </div>
  );
};

export default Home;
