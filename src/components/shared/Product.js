import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from "./items.module.css"


// Functions
import { shorten,isInCart,Cartcounter } from '../../helper/functions';
import {Cartproduct} from "../../context/CartContext"

const Product = ({productData}) => {
   const {state , dispatch} =  useContext(Cartproduct)
    return (
        <div className={styles.product} >
            <div className={styles.container}>
            <img src={productData.image} alt="product" style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>price:{productData.price}</p>
            </div>
            <div className={styles.mainbt}>
                <Link className={styles.link} to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.mainbtn}>
                {Cartcounter(state,productData.id) > 1 && <button className={styles.decrese} onClick={() =>dispatch({type : "DECREASS",payload : productData})}>-</button>}
                {Cartcounter(state,productData.id) === 1 && <button className={styles.iconbtn}  onClick={() =>dispatch({type : "REMOVE_ITEM",payload : productData})}><i className="glyphicon glyphicon-trash"></i></button>}
                {Cartcounter(state,productData.id) > 0 && <span className={styles.spannumber} style={{padding:"8px"}}>{Cartcounter(state,productData.id)}</span>}

                    {isInCart(state , productData.id) ? 
                    <button className={styles.increse} onClick={()=>dispatch({type : "INCREASS",payload : productData})}>+</button> :
                    <button className={styles.addbtn} onClick={()=>dispatch({type: "ADD_CART",payload:productData})}>add to cart</button>}


               
                </div>
                
            </div>
        </div>
    );
};

export default Product;