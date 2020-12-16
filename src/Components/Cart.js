import React, {useState,useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    const [selectedItems] = useContext(Context);

    return (
        <div className='col-12'>
            {selectedItems.length > 0 ? selectedItems.map(item => (
                    <div>
                        <h2>My Cart</h2>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.inCart}</p>
                        <img src={item.imagen} className="card-img-top img-fluid" alt="imagen"></img>
                    </div>
                )): <div className='col-12 text-center empty_cart-container'>
                     <h3>No hay productos en el carrito</h3> 
                     <a>
                        <Link to={`/shop`}>Volver a la tienda</Link>
			         </a>
                    </div>
            }
        </div>
    );
}

export default Cart;
