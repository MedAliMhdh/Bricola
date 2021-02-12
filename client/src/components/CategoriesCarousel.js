import React from 'react';
import maçon from '../images/maçon.png';
import architecte from '../images/architcte.png';
import carpender from '../images/carpender.png';
import electrician from '../images/electrician.png';
import jardinier from '../images/jardinier.png';
import painter from '../images/painter.png';
import plambier from '../images/plambier.png';
import welder from '../images/welder.png';

import { Link } from 'react-router-dom';

const CategoriiesCarousel = () => {
  return (
    <div className='container text-center my-4 '>
      <div
        id='recipeCarousel'
        className='carousel slide w-100'
        data-ride='carousel'
      >
        <div className='carousel-inner w-100' role='listbox'>
          <div className='carousel-item row no-gutters active'>
            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/masonry'>
                <img alt='' className='img-fluid' src={maçon} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Masonry <br />
                  </p>
                </div>
              </Link>
            </div>

            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/electricity'>
                <img alt='' className='img-fluid' src={electrician} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Electricity <br />
                  </p>
                </div>
              </Link>
            </div>

            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/plombing'>
                <img alt='' className='img-fluid' src={plambier} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Plumbing <br />
                  </p>
                </div>
              </Link>
            </div>
            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/carpentry'>
                <img alt='' className='img-fluid' src={carpender} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Carpentry <br />
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='carousel-item row no-gutters'>
            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/welding'>
                <img alt='' className='img-fluid' src={welder} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Welding
                  </p>
                </div>
              </Link>
            </div>

            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/painting'>
                <img alt='' className='img-fluid' src={painter} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Painting
                  </p>
                </div>
              </Link>
            </div>

            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/architecture'>
                <img alt='' className='img-fluid' src={architecte} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Architecture
                  </p>
                </div>
              </Link>
            </div>

            <div className='col-sm-3 float-left hover hover-2 text-white rounded'>
              <Link to='/gatdening'>
                <img alt='' className='img-fluid' src={jardinier} />
                <div className='hover-2-content px-5 py-1'>
                  {' '}
                  <p className='hover-2-description text-uppercase mb-0'>
                    Gardening
                  </p>
                </div>
              </Link>
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

export default CategoriiesCarousel;
