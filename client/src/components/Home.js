import React from "react";
import Navb from "./Navb";
import Search from "./Search";
import CategoriiesCarousel from "./CategoriesCarousel";
import ArtisanProfile from "./ArtisanProfile";

const Home = () => {
  return (
    <div className='container-fluid mx-0 px-0'>
      <Navb />

      <Search />
      <CategoriiesCarousel />
    </div>
  );
};

export default Home;
