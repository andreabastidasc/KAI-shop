import React from 'react';

const Item = ({title,  price}) => {
    return (
        <div>
               Producto: {title},
               Precio: {price}
        </div>
    );
}

export default Item;
