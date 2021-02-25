import Search from "./Search";
import CategoriesCarousel from "./CategoriesCarousel";
import Profiles from "./Profiles";
import "./CSS/home.css";

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
      <h3 className='col-7 mx-auto' style={{ textAlign: "center" }}>
        Having technical trouble in your house? Find the artisan that you need.
      </h3>
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
    </div>
  );
};

export default Home;
