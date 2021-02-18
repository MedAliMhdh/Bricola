import React from 'react';
import maçon from '../images/maçon.png';
import architecte from '../images/architcte.png';
import carpender from '../images/carpender.png';
import electrician from '../images/electrician.png';
import jardinier from '../images/jardinier.png';
import painter from '../images/painter.png';
import plambier from '../images/plambier.png';
import welder from '../images/welder.png';

const CategoriesCarousel = ({ setSearch, setJob }) => {
  const setAction = (jobValue) => {
    setSearch(true);
    setJob(jobValue);
  };
  return (
    <div className='container text-center my-4 '>
      <div
        id='recipeCarousel'
        className='carousel slide w-100'
        data-ride='carousel'
      >
        <div className='carousel-inner w-100' role='listbox'>
          <div className='carousel-item row  no-gutters active'>
            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Bricklayer')}
            >
              <img alt='' className='img-fluid' src={maçon} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Masonry <br />
                </p>
              </div>
            </div>

            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Electrician')}
            >
              <img alt='' className='img-fluid' src={electrician} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Electricity <br />
                </p>
              </div>
            </div>

            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Plumber')}
            >
              <img alt='' className='img-fluid' src={plambier} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Plumbing <br />
                </p>
              </div>
            </div>
            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Carpenter')}
            >
              <img alt='' className='img-fluid' src={carpender} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Carpentry <br />
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item row no-gutters '>
            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Welder')}
            >
              <img alt='' className='img-fluid' src={welder} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Welding
                </p>
              </div>
            </div>

            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Painter')}
            >
              <img alt='' className='img-fluid' src={painter} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Painting
                </p>
              </div>
            </div>

            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Architect')}
            >
              <img alt='' className='img-fluid' src={architecte} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Architecture
                </p>
              </div>
            </div>

            <div
              className='col-sm-3 float-left hover hover-2 text-white rounded'
              onClick={() => setAction('Gardener')}
            >
              <img alt='' className='img-fluid' src={jardinier} />
              <div className='hover-2-content px-5 py-1'>
                {' '}
                <p className='hover-2-description text-uppercase mb-0'>
                  Gardening
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#recipeCarousel'
          role='button'
          data-slide='prev'
        >
          <i className='fas fa-chevron-left'></i>
        </a>
        <a
          className='carousel-control-next'
          href='#recipeCarousel'
          role='button'
          data-slide='next'
        >
          <i className='fas fa-chevron-right'></i>
        </a>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
