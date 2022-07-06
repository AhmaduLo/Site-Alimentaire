import React from "react";
import "../styles/navProd.scss";
import { NavProdArticle } from "../data/NavProdData";

const NavProd = (props) => {
  return (
    <div className="navProd">
      <div className="container_navProd">
        <div className="title_container">
          <h2>Accessories</h2>
        </div>
        <div className="otherFood">
          {NavProdArticle.map((info, id) => {
            return (
              <div className="food">
                <div className="img_food">
                  <img src={info.img} alt="" />
                </div>
                <div className="description_food">
                  <div className="name_food">{info.name}</div>
                  <div className="type_food">{info.type}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavProd;
