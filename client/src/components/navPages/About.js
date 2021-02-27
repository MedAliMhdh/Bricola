import React from "react";
import "../CSS/about.css";
import artisanOnPc from "../../images/artisanOnPc.png";
import artisanWithClient from "../../images/artisanWithClient.png";

const About = () => {
  return (
    <div className='container aboutContainer'>
      <div className='section1 container d-flex flex-wrap'>
        <div className='col-lg-6'>
          <h1>what?</h1>
          <p>
            We have been working hand in hand with craftsmen and we have
            developed a modern website for them and for you. Do you represent a
            general construction contractor? Are you a self-employed heating
            engineer? Do you want to start stone masonry activities? The Bricola
            Web team has designed and developed this website for your
            convenience and that of the artisans.
          </p>
        </div>
        <img src={artisanOnPc} className='col-lg-5'></img>
      </div>
      <div className='section1 container-fluid d-flex flex-wrap flex-sm-reverse'>
        <img src={artisanWithClient} className='col-lg-5'></img>
        <div className='col-lg-6'>
          <h1>How?</h1>
          <ul>
            <li>
              Bricola gives you the ablity to search the artisan you need in the
              location you want.
            </li>
            <li>
              Visit artisan's profile, you may have informations and posts, so
              you can know if he is the right person for your job{" "}
            </li>
            <li>
              Send real time message to any artisan you want, in order to have
              more informations about costs, availability ...
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
