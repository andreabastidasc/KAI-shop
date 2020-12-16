import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';

const CartIcon = () => {

   //const [selectedItems] = useContext(Context);

    return (
        <a className="nav-link" href="#">
          <span className="badge badge-pill badge-light">0</span>
			<i className="fas fa-shopping-cart"></i>
	    </a>
    );
}

export default CartIcon;
