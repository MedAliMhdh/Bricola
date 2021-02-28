import React from "react";
import "../CSS/contact.css";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <div>
      <div className='contactUsContainer d-flex justify-content-center'>
        <div className='demi talk col-md-6 px-0'>
          <div className='contain'>
            <h3> LETS TALK </h3>
            <h1>RIGHT NOW</h1>
            <p>
              If you have encountered a problem on our platform, do not hesitate
              to report it to us, we will do all to satisfy Bricola users
            </p>
            <p>
              We would be happy to read your feedback, to collaborate with you,
              if you want to join bricola team, to share with us an idea ...
            </p>
          </div>
        </div>
        <div className='demi contact col-md-6 px-0'>
          <div className='contain'>
            <h2>How can we help?</h2>
            <h3>Get in Touch with us</h3>

            <form className='mt-4'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='FirstName'
                  placeholder=' First Name '
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='LastName'
                  placeholder=' Last Name '
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail'
                  placeholder=' Email '
                />
              </div>
              <div className='form-group'>
                <input
                  type='tel'
                  className='form-control'
                  id='telephone'
                  placeholder=' Mobile Number.'
                />
              </div>

              <div className='form-group'>
                <textarea
                  className='form-control'
                  id='description'
                  placeholder='Tell us a bit more!'
                ></textarea>
              </div>
              <div className='form-group'>
                <button type='button' className='btn submit'>
                  <i className='fa fa-paper-plane' aria-hidden='true'></i> Send
                  Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
