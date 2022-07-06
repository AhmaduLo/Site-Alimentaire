import React from 'react';
import "../styles/produit.scss";
import HeaderProd from "../../src/Sous-component/HeaderPod";
import ProduitCont from "../Sous-component/ProduitCont";

const Produit = (props) => {
    return (
        
        <div className="Produit">
            <div className="headerproduct">
            <HeaderProd/>
            </div>
            <div className="produits">
                <ProduitCont/>
            </div>
           
        </div>

    );
};

export default Produit;