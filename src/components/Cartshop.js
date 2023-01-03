import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartproduct } from "../context/CartContext";
import Cartp from "./Cartp";
import styles from './cartshop.module.css'
const Cartshop = () => {
  const { state, dispatch } = useContext(Cartproduct);

  return (
    <div className={styles.maincart} >
      <div>
      {state.selectItems.map((item) => (
        <Cartp key={item.id} Cart={item} />
      ))}
      </div>
      {state.itemcounter > 0 && (
        <div className={styles.finished}>
          <p>totalitem: {state.itemcounter}</p>
          <p>totalprice: {state.totalprice}</p>
          <div>
            
            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</button>
            <button className={styles.checkbtn} onClick={() => dispatch({ type: "CHECK_OUT" })}>
              checkout
            </button>
          </div>
        </div>
      )}
      {state.checkproduct && (
        <div className={styles.productcheck}>
          <h3>checked out is succssfully</h3>
          <Link className={styles.linkcheck} to="/products">by more</Link>
        </div>
      )}
        {!state.checkproduct&& state.itemcounter === 0 && (
        <div className={styles.productclear}>
          <h3>want to buy</h3>
          <Link className={styles.linkclear} to="/products">go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cartshop;
