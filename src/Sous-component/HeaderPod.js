import React from "react";
import "../styles/headerProd.scss";
import { BsChevronLeft ,BsChevronRight } from "react-icons/bs";


const HeaderProd = (props) => {
  return (
    <div className="headerProd">
      <div className="title">
      <h1> Best Sellert</h1> 
        </div>

      <div className="btn-filter">
        <div className="container-span">
        <span></span>
        <span></span>
        <span></span>
        </div>
      </div>

      <div className="buttons">
        <button> <span> <BsChevronLeft/></span> </button>
        <button><span> <BsChevronRight/></span> </button>
      </div>
    </div>
    
  );
};

export default HeaderProd;
