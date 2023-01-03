import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Cartproduct} from "../../context/CartContext"
import Shopicon from "../../img/shop.png"
import styles from "./navbar.module.css"

const Navbar = () => {

    const {state} = useContext(Cartproduct)
    return (
        <div className={styles.main}>
            <div className={styles.LI}>
                <Link  className={styles.link}  to="/products">product</Link>
            </div>
            <div  className={styles.icon} >
              <Link to="/Cartshop"><img className={styles.trash} style={{width : "60px"}} src={Shopicon} alt="shop"/></Link > 
              <p img className={styles.number}>{state.itemcounter}</p>
            </div>
        </div>
    );
};

export default Navbar;