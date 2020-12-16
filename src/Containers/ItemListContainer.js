import React, {useState, useEffect} from 'react';
import Item from '../Components/Item';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA109085&limit=20');
        getProducts
        .then((response) => {
            const data = response.json();
            return data;
        }).then((data) => {
            setProducts(data.results);
        });
    }, []);

    useEffect(() => {
            console.log(products);
    }, [products]);

    return (
        <div className='row justify-content-center text-center'>
            <div className='col-12 mt-4'>
                <h3>Hoodies</h3>
            </div>
                {products.length && products.map(product => (
                    <Item price={product.price} thumbnail={product.thumbnail} id={product.id}/>
                ))
                }
        </div>
    );
}

export default ItemListContainer;
