import React, {useState,useEffect, useContext} from 'react';
import ItemCount from './ItemCount';
import CartContext, { Context } from './CartContext';


export default function ItemDetail ({item}) {
    const [cart, setCart] = useContext(Context);

    const addToCart = () => {
        console.log('added')
    }

    return (
        <div>
        {
            item && 
            (<div className="card col-12">
            <img src={item.thumbnail} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <ItemCount max="10" min="0"/>
               <button onClick={addToCart} className="btn mt-4">Agregar</button>
               <p className="card-text">{item.price}$</p>
            </div>
            </div>)
        }
    </div>
    );
}


