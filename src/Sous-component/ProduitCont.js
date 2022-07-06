/* eslint-disable array-callback-return */
import React from "react";
import "../styles/produitCont.scss";
import { InfoImg } from "../data/Data";
import { GrAddCircle } from "react-icons/gr";

const ProduitCont = (props) => {
  return (
    <div className="ProduitCont">
      {InfoImg.map((info, id) => {
        return (
          <div className="parentContainer" key={id}>
            <div className="photo">
              {" "}
              <img src={info.img} alt="img" />
            </div>
            <div className="info_photo">
              <div className="info_contenaire">
              <div className="info_photo_cont">
              <span className="info_title">{info.title}</span> <br />
              <span className="info_title"> {info.type}</span>
              </div>
              <div className="prise_add">
                <span>{info.prise}</span>
                <span><GrAddCircle/></span>
              </div>
              
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProduitCont;
