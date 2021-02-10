import React from 'react';
import Navb from './Navb';
import Search from './Search';
import CategoriesCarousel from './CategoriesCarousel';
import Profiles from './Profiles';
const Home = () => {
  return (
    <div className='container-fluid mx-0 px-0'>
      <Navb />

      <Search />
      <CategoriesCarousel />

      <Profiles />
    </div>
  );
};

export default Home;
