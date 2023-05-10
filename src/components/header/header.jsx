import React from "react";
import "./header.css";
import ME from "../../assets/CL2.jpg";

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi we are</h5>
        <h1>Legal Immigration Alliance</h1>
        <h5 className='text-ligth'> Immigration Lawyers </h5>   
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        
      </div>

     
    </header>
  );
};

export default header;
