import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
      Legal Immigration Alliance
      </a>
      <div className='footer__copyright'>
        <small>&copy;Legal Immigration Alliance</small>
      </div>
    </footer>
  );
};

export default footer;
