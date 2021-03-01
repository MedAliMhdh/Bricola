import Search from "./Search";
import CategoriesCarousel from "./CategoriesCarousel";
import Profiles from "./Profiles";
import "./CSS/home.css";
import Footer from "./Footer";

const Home = ({
  search,
  setSearch,
  rate,
  setRate,
  job,
  setJob,
  equipment,
  setEquipment,
  city,
  setCity,
}) => {
  return (
    <div className='container-fluid homeContainer mx-0 px-0'>
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
        <CategoriesCarousel setSearch={setSearch} setJob={setJob} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
