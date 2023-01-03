import React, { useContext,} from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./detailproduct.module.css"


import { ProductsContext } from "../context/ProductContextProvider";





const ProductDetails = () => {
    
   
  const params = useParams()
  const id = params.id
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.detailmain}>
      <img src={image} alt="product" />
      <div className={styles.titledetail}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span style={{color:"blue"}}>Category:</span> {category}
        </p>
        
          <span className={styles.pricedetail}>price:{price} $</span>
        <Link className={styles.linkdetails} to="/products">Back to Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
