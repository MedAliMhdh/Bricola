import React from 'react';
import '../CSS/blog.css';
import Footer from '../Footer';

import plumbing from '../../images/plumbing.jpg';
import welder from '../../images/welder.jpg';
import mechanic from '../../images/mechanic.jpg';

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
                <small className='text-muted p float-right'>19th Oct, 19</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Marketing
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a href='javascript:void(0)' className='text-dark title'>
                    Quick guide on business with friends.
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
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
                <small className='text-muted p float-right'>19th Oct, 19</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Event
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a href='javascript:void(0)' className='text-dark title'>
                    Become more money-minded
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
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
                <small className='text-muted p float-right'>19th Oct, 19</small>
                <small>
                  <a href='javascript:void(0)' className='text-primary'>
                    Software
                  </a>
                </small>
                <h4 className='mt-2'>
                  <a href='javascript:void(0)' className='text-dark title'>
                    Quick guide on business with friends.
                  </a>
                </h4>
                <p className='text-muted mt-2'>
                  There is now an abundance of readable dummy texts. These are
                  usually used when a text is required purely to fill a space.
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
