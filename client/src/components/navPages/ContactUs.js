import React from 'react';
import '../CSS/contact.css';

const ContactUs = () => {
  return (
    <div className='d-flex justify-content-center'>
      <section id='contact'>
        <div className='section-content'>
          <h1 className='section-header'>
            Get in{' '}
            <span
              className='content-header wow fadeIn '
              data-wow-delay='0.2s'
              data-wow-duration='2s'
            >
              {' '}
              Touch with us
            </span>
          </h1>
        </div>
        <div className='contact-section'>
          <div className='container theContainer'>
            <form>
              <div className='form-group'>
                <label for='exampleInputUsername'>Your name</label>
                <input
                  type='text'
                  className='form-control'
                  id=''
                  placeholder=' Enter Your Name'
                />
              </div>
              <div className='form-group'>
                <label for='exampleInputEmail'>Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail'
                  placeholder=' Enter Your Email '
                />
              </div>
              <div className='form-group'>
                <label for='telephone'>Mobile Number</label>
                <input
                  type='tel'
                  className='form-control'
                  id='telephone'
                  placeholder=' Enter Your Mobile Number.'
                />
              </div>

              <div className='form-group'>
                <label for='description'> Message</label>
                <textarea
                  className='form-control'
                  id='description'
                  placeholder='Enter Your Message'
                ></textarea>
              </div>
              <div>
                <button type='button' className='btn btn-default submit'>
                  <i className='fa fa-paper-plane' aria-hidden='true'></i> Send
                  Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
