import React, { useContext } from "react";
import { Cartproduct } from "../context/CartContext";
import styles from "./cart.module.css"

import { shorten } from "../helper/functions";

const Cartp = (props) => {
  const { dispatch } = useContext(Cartproduct);
  const { image, price, title, quantity } = props.Cart;
  return (
    <div className={styles.cartconatiner}>
      
        <img src={image} alt="img" />
        <div>
          <h3>{shorten(title)}</h3>
          <p>price:{price}</p>
        </div>
        <p className={styles.guantity}>{quantity}</p>
        <div className={styles.btncart}>
        {quantity > 1 && (
            <button className={styles.negtev}   onClick={() => dispatch({ type: "DECREASS" , payload:props.Cart  })}>-</button>
          )}
        
          {quantity === 1 && (
            <button className={styles.trshcart} onClick={() => dispatch({ type: "REMOVE_ITEM" ,payload:props.Cart  })}>
              <i className="glyphicon glyphicon-trash"></i>
            </button>
            
          )}
            <button className={styles.plus}  onClick={() => dispatch({ type: "INCREASS" , payload:props.Cart })}>+</button>
         
        </div>
     
    </div>
  );
};

export default Cartp;
