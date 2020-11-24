import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({id, title, price, thumbnail}) => {
    return (
        <div className="card col-12">
            <img src={thumbnail} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <ItemCount max="10" min="0"/>
               <p className="card-text">{price}$</p>
               <br></br>
               <a className="btn mt-4">Comprar</a>
            </div>
        </div>
    );
}

export default ItemDetail;
