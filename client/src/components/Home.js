import React, { useState } from "react";
import Navb from "./Navb";
import Search from "./Search";
import CategoriesCarousel from "./CategoriesCarousel";
import Profiles from "./Profiles";
const Home = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className='container-fluid mx-0 px-0'>
      <Navb />
      <Search setSearch={setSearch} />
      {search ? <Profiles /> : <CategoriesCarousel />}
    </div>
  );
};

export default Home;
