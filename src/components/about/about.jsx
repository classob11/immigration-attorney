import React from "react";
import "./about.css";
import ME from "../../assets/Edgar.jpg";
import ME2 from "../../assets/soto.jpg";
import ME3 from "../../assets/Nancy.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Edgar Antonio Barrera Flores </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Immigration specialist </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Cases Solved</h5>
              <small>+20 Migratory People</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon' />
              <h5>Education</h5>
              <small>Specialist</small>
            </article>
          </div>
          <p>
            "The title of lawyer is not sustained with a nail in the wall, it is sustained with constant work, irreducible ethics and passion for justice. "
          </p>
          <div className='about__cards'>
            <article className='about__card'>
              <BsWhatsapp className='about__icon' />
              <h5>Contact</h5>
              <small>52 33 5331 1736</small>
            </article>
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
      <h5>Get To Know</h5>
      <h2>Marianne Soto Torres</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image2'>
            <img src={ME2} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Immigration specialist </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Cases Solved</h5>
              <small>+30 Migratory People</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon' />
              <h5>Education</h5>
              <small>specialist</small>
            </article>
          </div>
          <p>
            "The law is the prescription of reason, ordered to the common good, given by the one who is in charge of the care of the community. "
          </p>
          <div className='about__cards'>
            <article className='about__card'>
              <BsWhatsapp className='about__icon' />
              <h5>Contact</h5>
              <small>998 200 2415</small>
            </article>
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      
      <h5>Get To Know</h5>
      <h2>Verónica Navarro Troncoso  </h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image2'>
            <img src={ME3} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Immigration specialist </small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon' />
              <h5>Cases Solved</h5>
              <small>+20 Migratory People</small>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon' />
              <h5>Education</h5>
              <small>specialist</small>
            </article>
          </div>
          <p>
            "The lawyer obstructs your intelligence to advocate for yourself, which is easier, because lies versus truth are great opponents."
          </p>
      
        </div>
      </div>
      
    </section>

    
  );
};

export default about;
