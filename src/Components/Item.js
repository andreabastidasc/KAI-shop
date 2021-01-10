import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({price, image, id}) => {

    return (
        <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <img src={image} className="card-img-top img-fluid" alt="product picture"></img>
            <div className="card-body">
               <p className="card-text">{price}$USD</p>
               <a className="btn"> <Link to={`/item/${id}`}>See more</Link></a>
            </div>
        </div>
    );
}

export default Item;
