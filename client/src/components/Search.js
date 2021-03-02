import Thumbs from './Thumbs';
import { filterProfiles } from '../actions/artisanProfile';
import { useDispatch } from 'react-redux';
import './CSS/searchCard.css';

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
    <div>
      <div className='top-background'>
        <h3 className='col-7 mx-auto'>
          Having technical trouble in your house? Find the artisan that you
          need.
        </h3>
        <svg viewBox='0 0 500 150' preserveAspectRatio='none'>
          <path
            d='M-3.72,80.23 C180.81,257.85 356.31,46.67 500.00,49.99 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#fff' }}
          ></path>
        </svg>
        <div className='searchContainer background'>
          <div className='container col-md-7 myContainer d-flelx align-content-between d-flex justify-content-center flex-wrap py-5 px-2'>
            <div className='col-lg-3 col-sm-3 p-1 m-0'>
              <select
                className='col-md-12 searchInput '
                value={job}
                onChange={(e) => setJob(e.target.value)}
              >
                <option className='serchItem' value=''>
                  {' '}
                  Job type{' '}
                </option>
                <option className='serchItem' value='Bricklayer'>
                  Bricklayer
                </option>
                <option className='serchItem' value='Electrician'>
                  Electrician
                </option>
                <option className='serchItem' value='Painter'>
                  Painter
                </option>
                <option className='serchItem' value='Plumber'>
                  Plumber
                </option>
                <option className='serchItem' value='Mechanic'>
                  Mechanic{' '}
                </option>
                <option className='serchItem' value='Welder'>
                  Welder
                </option>
                <option className='serchItem' value='Carpenter'>
                  Carpenter
                </option>
                <option className='serchItem' value='Architect'>
                  Architect
                </option>
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
                <option className='serchItem' value=''>
                  {' '}
                  equipment{' '}
                </option>
                <option className='serchItem' value='true'>
                  With materiel
                </option>
                <option className='serchItem' value='false'>
                  Without materiel
                </option>
              </select>
            </div>

            <div className='col-md-3 col-sm-3 p-1 m-0 selectDiv'>
              <select
                className='col-md-12 col-sm-8  searchInput'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option className='serchItem' value=''>
                  {' '}
                  city{' '}
                </option>
                <option className='serchItem' value='Ariana'>
                  Ariana
                </option>
                <option className='serchItem' value='Beja'>
                  Beja
                </option>
                <option className='serchItem' value='Ben Arous'>
                  Ben Arous
                </option>
                <option className='serchItem' value='Bizerte'>
                  Bizerte
                </option>
                <option className='serchItem' value='Gabes'>
                  Gabes{' '}
                </option>
                <option className='serchItem' value='Gafsa'>
                  Gafsa
                </option>
                <option className='serchItem' value='Jendouba'>
                  Jendouba
                </option>
                <option className='serchItem' value='Kairouane'>
                  Kairouane
                </option>
                <option className='serchItem' value='Kasserine'>
                  Kasserine
                </option>
                <option className='serchItem' value='kébili'>
                  kébili
                </option>
                <option className='serchItem' value='Kef'>
                  Kef
                </option>
                <option className='serchItem' value='Mahdia'>
                  Mahdia
                </option>
                <option className='serchItem' value='Manouba'>
                  Manouba
                </option>
                <option className='serchItem' value='Médenine'>
                  Médenine
                </option>
                <option className='serchItem' value='Monastir'>
                  Monastir
                </option>
                <option className='serchItem' value='Nabeul'>
                  Nabeul
                </option>
                <option className='serchItem' value='Sfax'>
                  Sfax
                </option>
                <option className='serchItem' value='Sidi bouzid'>
                  Sidi bouzid
                </option>
                <option className='serchItem' value='Siliana'>
                  Siliana
                </option>
                <option className='serchItem' value='Sousse'>
                  Sousse
                </option>
                <option className='serchItem' value='Tataouine'>
                  Tataouine
                </option>
                <option className='serchItem' value='Tozeur'>
                  Tozeur
                </option>
                <option className='serchItem' value='Tunis'>
                  Tunis
                </option>
                <option className='serchItem' value='Zaghouane'>
                  Zaghouane
                </option>
              </select>
            </div>

            <div className='col-5 col-lg-2 d-flex  justify-content-center mt-2'>
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
        </div>
      </div>
    </div>
  );
};

export default Search;
