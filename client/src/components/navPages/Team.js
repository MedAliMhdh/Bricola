import React from "react";
import "../CSS/team.css";
import Footer from "../Footer";

const Team = () => {
  return (
    <div className='team4'>
      <div className='container'>
        <div className='row justify-content-center mb-4'>
          <div className='col-md-7 text-center'>
            <h3 className='mb-3'>Experienced & Professional Team</h3>
            <h4 className='subtitle'>
              You can relay on our amazing features list and also our customer
              services will be great experience <br />
              for you without doubt and in no-time
            </h4>
          </div>
        </div>
        <div className='row d-flex justify-content-around'>
          <div className='col-lg-3 mb-4'>
            <div className='row'>
              <div className='col-md-12'>
                <img
                  src='mohamed.jpg'
                  alt='wrapkit'
                  className='img-fluid rounded-circle'
                />
              </div>
              <div className='col-md-12 text-center'>
                <div className='pt-2'>
                  <h5 className='mt-4 font-weight-medium mb-0'>
                    Mohamed Ali MAHDHAOUI
                  </h5>
                  <h6 className='subtitle mb-3'>Full Stack Developer</h6>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/in/medalimhdh/'
                        className='text-decoration-none d-block px-1'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='https://twitter.com/Mohamed79971643'
                        className='text-decoration-none d-block px-1'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='mailto: med_ali_mahdhaoui@yahoo.fr'
                        className='text-decoration-none d-block px-1'
                      >
                        <i className='fas fa-at'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-3 mb-4'>
            <div className='row'>
              <div className='col-md-12'>
                <img
                  src='/olfa.jpeg'
                  alt='wrapkit'
                  className='img-fluid rounded-circle'
                />
              </div>
              <div className='col-md-12 text-center'>
                <div className='pt-2'>
                  <h5 className='mt-4 font-weight-medium mb-0'>Olfa GHAZEL</h5>
                  <h6 className='subtitle mb-3'>Full Stack Developer</h6>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/in/olfaghazel/'
                        className='text-decoration-none d-block px-1'
                      >
                        <i className='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' className='text-decoration-none d-block px-1'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a
                        href='mailto: olfaghazel95@gmail.com'
                        className='text-decoration-none d-block px-1'
                      >
                        <i className='fas fa-at'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
