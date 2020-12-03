import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({title,  price, thumbnail, id}) => {
    return (
        <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img src={thumbnail} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
               <p className="card-text">{price}$</p>
               <a className="btn"> <Link to={`/item/${id}`}>Ver más</Link></a>
            </div>
        </div>
    );
}

export default Item;
