import Thumbs from './Thumbs';
import { filterProfiles } from '../actions/artisanProfile';
import { useDispatch } from 'react-redux';

const Search = ({
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
  const dispatch = useDispatch();
  return (
    <div className='container col-md-7 myContainer d-flelx align-content-between d-flex justify-content-center flex-wrap py-5 px-2'>
      <div className='col-lg-3 col-sm-3 p-1 m-0'>
        <select
          className='col-md-12 searchInput '
          value={job}
          onChange={(e) => setJob(e.target.value)}
        >
          <option value=''> Job type </option>
          <option value='Bricklayer'>Bricklayer</option>
          <option value='Electrician'>Electrician</option>
          <option value='Painter'>Painter</option>
          <option value='Plumber'>Plumber</option>
          <option value='Mechanic'>Mechanic </option>
          <option value='Welder'>Welder</option>
          <option value='Carpenter'>Carpenter</option>
          <option value='Architect'>Architect</option>
        </select>
      </div>

      <div className='col-lg-3 col-sm-3 p-1 m-0'>
        <select
          className='col-md-12 searchInput'
          value={equipment}
          onChange={(e) => {
            e.target.value === 'true'
              ? setEquipment(true)
              : e.target.value === 'false'
              ? setEquipment(false)
              : setEquipment(e.target.value);
          }}
        >
          <option value=''> equipment </option>
          <option value='true'>With materiel</option>
          <option value='false'>Without materiel</option>
        </select>
      </div>

      <div className='col-md-3 col-sm-3 p-1 m-0 selectDiv'>
        <select
          className='col-md-12 col-sm-8  searchInput'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value=''> city </option>
          <option value='Ariana'>Ariana</option>
          <option value='Beja'>Beja</option>
          <option value='Ben Arous'>Ben Arous</option>
          <option value='Bizerte'>Bizerte</option>
          <option value='Gabes'>Gabes </option>
          <option value='Gafsa'>Gafsa</option>
          <option value='Jendouba'>Jendouba</option>
          <option value='Kairouane'>Kairouane</option>
          <option value='Kasserine'>Kasserine</option>
          <option value='kébili'>kébili</option>
          <option value='Kef'>Kef</option>
          <option value='Mahdia'>Mahdia</option>
          <option value='Manouba'>Manouba</option>
          <option value='Médenine'>Médenine</option>
          <option value='Monastir'>Monastir</option>
          <option value='Nabeul'>Nabeul</option>
          <option value='Sfax'>Sfax</option>
          <option value='Sidi bouzid'>Sidi bouzid</option>
          <option value='Siliana'>Siliana</option>
          <option value='Sousse'>Sousse</option>
          <option value='Tataouine'>Tataouine</option>
          <option value='Tozeur'>Tozeur</option>
          <option value='Tunis'>Tunis</option>
          <option value='Zaghouane'>Zaghouane</option>
        </select>
      </div>

      <div className='col-5 col-lg-2 d-flex no-wrap justify-content-sm-center'>
        <Thumbs setRate={setRate} rate={rate} />
      </div>

      <div className='col-md-12 p-3 row d-flex no-wrap align-items-end justify-content-center '>
        <button
          type='button'
          className='btn searchBtn col-md-3'
          onClick={() => {
            dispatch(filterProfiles({ job, equipment, city, rate }));
            setSearch(true);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
