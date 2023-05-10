import React from "react";
import "./services.css";
import { BiAnalyse } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { RiCellphoneFill } from "react-icons/ri";

const services = () => {
  return (
    <section id='services'>
      <h5> More Information </h5>
      <h2>My Information</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='services__head'>
            <h3>Competencies</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Cisco Packet Tracer</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Texmaker</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Anydesk</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>VMware Workstation</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Social Networks</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='services__head'>
            <h3>Contacts</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdAlternateEmail className='service__list-icon' />
              <p>classob1108@outlook.com</p>
            </li>
            <li>
              <RiCellphoneFill className='service__list-icon' />
              <p>5568732866</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='services__head'>
            <h3>Aptitudes</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Analytical reasoning</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Creativity</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Collaboration</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Teamwork</p>
            </li>
            <li>
              <BiAnalyse className='service__list-icon' />
              <p>Adaptability</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
