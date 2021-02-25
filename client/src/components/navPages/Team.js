import React from 'react';
import '../CSS/team.css';

const Team = () => {
  return (
    <div class='py-5 team4'>
      <div class='container'>
        <div class='row justify-content-center mb-4'>
          <div class='col-md-7 text-center'>
            <h3 class='mb-3'>Experienced & Professional Team</h3>
            <h6 class='subtitle'>
              You can relay on our amazing features list and also our customer
              services will be great experience for you without doubt and in
              no-time
            </h6>
          </div>
        </div>
        <div class='row d-flex justify-content-around'>
          <div class='col-lg-3 mb-4'>
            <div class='row'>
              <div class='col-md-12'>
                <img
                  src='mohamed.jpg'
                  alt='wrapkit'
                  class='img-fluid rounded-circle'
                />
              </div>
              <div class='col-md-12 text-center'>
                <div class='pt-2'>
                  <h5 class='mt-4 font-weight-medium mb-0'>
                    Mohamed Ali MAHDHAOUI
                  </h5>
                  <h6 class='subtitle mb-3'>Full Stack Developer</h6>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                  <ul class='list-inline'>
                    <li class='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/in/medalimhdh/'
                        class='text-decoration-none d-block px-1'
                      >
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li class='list-inline-item'>
                      <a
                        href='https://twitter.com/Mohamed79971643'
                        class='text-decoration-none d-block px-1'
                      >
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li class='list-inline-item'>
                      <a
                        href='mailto: med_ali_mahdhaoui@yahoo.fr'
                        class='text-decoration-none d-block px-1'
                      >
                        <i class='fas fa-at'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class='col-lg-3 mb-4'>
            <div class='row'>
              <div class='col-md-12'>
                <img
                  src='/olfa.jpeg'
                  alt='wrapkit'
                  class='img-fluid rounded-circle'
                />
              </div>
              <div class='col-md-12 text-center'>
                <div class='pt-2'>
                  <h5 class='mt-4 font-weight-medium mb-0'>Olfa GHAZEL</h5>
                  <h6 class='subtitle mb-3'>Full Stack Developer</h6>
                  <p>
                    You can relay on our amazing features list and also our
                    customer services will be great experience.
                  </p>
                  <ul class='list-inline'>
                    <li class='list-inline-item'>
                      <a
                        href='https://www.linkedin.com/in/olfaghazel/'
                        class='text-decoration-none d-block px-1'
                      >
                        <i class='fab fa-linkedin-in'></i>
                      </a>
                    </li>
                    <li class='list-inline-item'>
                      <a href='#' class='text-decoration-none d-block px-1'>
                        <i class='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li class='list-inline-item'>
                      <a
                        href='mailto: olfaghazel95@gmail.com'
                        class='text-decoration-none d-block px-1'
                      >
                        <i class='fas fa-at'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
