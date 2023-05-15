import React from "react";
import "./experience.css";
import { HiShieldCheck } from "react-icons/hi";

const experience = () => {
  return (
    <section id='experience'>
      
      <h2>Company Profile</h2>

      <div className='container experience__container'> 
        
        <div className='experience__backend'>
          <h3>Mission</h3>
          <div className='experince__content'>
            <article className='experince__details'>
              <HiShieldCheck className='experince__details-icon' />
              <div>
                <h4>To provide exceptional quality services, exceeding our clients' expectations and providing effective solutions to their needs. We strive to be leaders in our field, maintaining high ethical standards and professionalism in every interaction.</h4>
               
              </div>
            </article>

          </div>
        </div>

        <div className='experience__backend'>
          <h3>Vision</h3>
          <div className='experince__content'>
            <article className='experince__details'>
              <HiShieldCheck className='experince__details-icon' />
              <div>
                <center>
                <h4>To be recognized as the service provider of choice for our excellence, reliability and commitment to customer satisfaction. We seek to establish long-term relationships with our clients, based on trust and the consistent delivery of exceptional results. We strive to grow and expand our reach by providing world-class services nationally and internationally.</h4>
                </center>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
