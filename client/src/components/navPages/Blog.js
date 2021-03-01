import React from "react";
import "../CSS/blog.css";
import Footer from "../Footer";

import plumbing from "../../images/plumbing.jpg";
import welder from "../../images/welder.jpg";
import mechanic from "../../images/mechanic.jpg";

const Blog = () => {
  return (
    <div>
      <div className='container blogContainer mt-100 mt-60'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='section-title mb-4 pb-2'>
              <h4 className='title mb-4'>Latest Blog &amp; News</h4>
            </div>
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}

        <div className='row'>
          <div className='col-lg-4 col-md-6 mt-4 pt-2'>
            <div className='blog-post rounded border'>
              <div className='blog-img d-block overflow-hidden position-relative'>
                <img src={plumbing} height='280' width='350' alt='' />
                <div className='overlay rounded-top bg-dark'></div>
                <div className='post-meta'>
                  <a
                    href='javascript:void(0)'
                    className='text-light d-block text-right like'
                  >
                    <i class='far fa-heart'></i> 33
                  </a>
                  <a href='javascript:void(0)' className='text-light read-more'>
                    Read More <i class='fas fa-chevron-right fa-xs'></i>
                  </a>
                </div>
              </div>
              <div className='content p-3'>
                <small className='text-muted p float-right'>1st Mar, 21</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Plumbing
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a
                    href='https://www.raincitymaids.com/simple-guide-easily-clean-maintain-kitchen-sink/'
                    className='text-dark title'
                  >
                    Simple Guide to Easily Clean and Maintain Your Kitchen Sink
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  Considering the number of times you use it, you would think
                  that your kitchen sink is relatively clean.
                </p>
                <div className='pt-3 mt-3 border-top d-flex'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar2.png'
                    className='img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow'
                    alt=''
                  />
                  <div className='author mt-2'>
                    <h6 className='mb-0'>
                      <a href='javascript:void(0)' className='text-dark name'>
                        Lisa Marvel
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end blog post--> */}
          </div>
          {/* <!--end col--> */}

          <div className='col-lg-4 col-md-6 mt-4 pt-2'>
            <div className='blog-post rounded border'>
              <div className='blog-img d-block overflow-hidden position-relative'>
                <img src={welder} height='280' width='350' alt='' />
                <div className='overlay rounded-top bg-dark'></div>
                <div className='post-meta'>
                  <a
                    href='javascript:void(0)'
                    className='text-light d-block text-right like'
                  >
                    <i class='far fa-heart'></i> 50
                  </a>
                  <a href='javascript:void(0)' className='text-light read-more'>
                    Read More <i class='fas fa-chevron-right fa-xs'></i>
                  </a>
                </div>
              </div>
              <div className='content p-3'>
                <small className='text-muted p float-right'>19th Jan, 21</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Welding
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a
                    href='https://www.thefabricator.com/thewelder/article/aluminumwelding/aluminum-etc-why-i-love-aluminum-welding'
                    className='text-dark title'
                  >
                    Why I love aluminum welding
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  I get excited about aluminum. Some folks might find that
                  weird, but in my opinion, more people should be interested in
                  and excited about it.
                </p>
                <div className='pt-3 mt-3 border-top d-flex'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar6.png'
                    className='img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow'
                    alt=''
                  />
                  <div className='author mt-2'>
                    <h6 className='mb-0'>
                      <a href='javascript:void(0)' className='text-dark name'>
                        Joya Aafri
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end blog post--> */}
          </div>
          {/* <!--end col--> */}

          <div className='col-lg-4 col-md-6 mt-4 pt-2'>
            <div className='blog-post rounded border'>
              <div className='blog-img d-block overflow-hidden position-relative'>
                <img src={mechanic} height='280' width='350' alt='' />
                <div className='overlay rounded-top bg-dark'></div>
                <div className='post-meta'>
                  <a
                    href='javascript:void(0)'
                    className='text-light d-block text-right like'
                  >
                    <i class='far fa-heart'></i> 20
                  </a>
                  <a href='javascript:void(0)' className='text-light read-more'>
                    Read More <i class='fas fa-chevron-right fa-xs'></i>
                  </a>
                </div>
              </div>
              <div className='content p-3'>
                <small className='text-muted p float-right'>1st Jan, 21</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Mechanic
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a
                    href='https://www.caranddriver.com/features/a27104161/how-to-clean-engine/'
                    className='text-dark title'
                  >
                    How to Clean Your Car's Engine
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  Don't you feel good when your car is clean and all shined up?
                  A well-kept car looks great rolling down the street or sitting
                  in your driveway, and you'd swear it even drives better.
                </p>
                <div className='pt-3 mt-3 border-top d-flex'>
                  <img
                    src='https://bootdey.com/img/Content/avatar/avatar1.png'
                    className='img-fluid avatar avatar-ex-sm rounded-pill mr-3 shadow'
                    alt=''
                  />
                  <div className='author mt-2'>
                    <h6 className='mb-0'>
                      <a href='javascript:void(0)' className='text-dark name'>
                        Martin Sobhe
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end blog post--> */}
          </div>
          {/* <!--end col--> */}
        </div>
        {/* <!--end row--> */}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
