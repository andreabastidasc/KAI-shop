import React, {useState,useEffect, useContext} from 'react';
import CartContext, { Context } from './CartContext';

const Cart = () => {
    const [cart, setCart] = useContext(Context);
    
    return (
        <div className='col-12'>
            <h2>My Cart</h2>
        </div>
    );
}

export default Cart;
