import React from "react";

const CategoriiesCarousel = () => {
  return (
    <div className=' container my-4'>
      <hr className='my-4' />

      {/* Carousel Wrapper */}
      <div
        id='multi-item-example'
        className='carousel slide carousel-multi-item'
        data-ride='carousel'
      >
        {/* <!--Controls--> */}
        <div className='controls'>
          {/* <!-- end right control --> */}

          <a
            className='btn-floating-left'
            href='#multi-item-example'
            data-slide='prev'
          >
            <i className='control-left fas fa-chevron-left fa-3x'></i>
          </a>
          <a
            className='btn-floating-right'
            href='#multi-item-example'
            data-slide='next'
          >
            <i className='coontrol-right fa fa-chevron-right fa-3x'></i>
          </a>
        </div>
        {/* <!--/.Controls--> */}

        {/* <!--Indicators--> */}
        <ol className='carousel-indicators'>
          <li
            data-target='#multi-item-example'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#multi-item-example' data-slide-to='1'></li>
          <li data-target='#multi-item-example' data-slide-to='2'></li>
        </ol>
        {/* <!--/.Indicators--> */}

        {/* <!--Slides--> */}
        <div className='carousel-inner' role='listbox'>
          {/* <!--First slide--> */}
          <div className='carousel-item active'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.First slide--> */}

          {/* <!--Second slide--> */}
          <div className='carousel-item'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Second slide--> */}

          {/* <!--Third slide--> */}
          <div className='carousel-item'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>

              <div className='col-md-4 clearfix d-none d-md-block'>
                <div className='card mb-2'>
                  <img
                    className='card-img-top'
                    src='https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg'
                    alt='Card cap'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!--/.Third slide--> */}
        </div>
        {/* <!--/.Slides--> */}
      </div>
      {/* <!--/.Carousel Wrapper--> */}
    </div>
  );
};

export default CategoriiesCarousel;
