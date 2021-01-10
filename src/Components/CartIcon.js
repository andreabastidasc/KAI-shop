import React from 'react';
import {useContext, useEffect, useState} from 'react';
import { Context } from '../Context/CartContext';

const CartIcon = () => {
   
    const [selectedItems] = useContext(Context);
    const [amount, setAmount] = useState(0);

    useEffect(()=> {
      let fullAmount = 0;
      if(selectedItems.length > 0) {
          selectedItems.map(item => (
              fullAmount += item.inCart
          ))
          setAmount(fullAmount);
      }
  }, [selectedItems])

    return (
        <a className="nav-link" href="#">
          <span className="badge badge-pill badge-light">{amount}</span>
			    <i className="fas fa-shopping-cart"></i>
	    </a>
    );
}

export default CartIcon;
