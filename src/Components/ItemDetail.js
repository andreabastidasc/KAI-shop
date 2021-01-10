import React, {useState,useEffect} from 'react';
import ItemCount from './ItemCount';


export default function ItemDetail ({item}) {

    return (
    <div className='col-12 d-flex flex-row justify-content-center p-4'>
        {
            item && 
            (<div className="card text-center">
            <img src={item.data.image} className="card-img-top img-fluid" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{item.data.name}</h5>
              <h6>{item.data.description}</h6>
              <p className="card-text mt-2">{item.data.price}$</p>
              <ItemCount max="10" min="1" imagen={item.data.image} price={item.data.price} title={item.data.name}/>
            </div>
            </div>)
        }
    </div>
    );
}


