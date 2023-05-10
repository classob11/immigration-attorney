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
                <h4>To be an immigration law firm, consolidating its growth with experience and professional efficiency, offering a comprehensive quality service in legal advice and consultancy, with recognized prestige for its values and proven effectiveness.</h4>
               
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
                <h4>Being a law firm recognized for its high quality in immigration assistance and the professionalism of its members, providing security and confidence through comprehensive solutions tailored to the needs of each client, with the commitment to success in their business.</h4>
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
