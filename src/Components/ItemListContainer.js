import React, {useState, useEffect} from 'react';
import Item from './Item';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1743&limit=20');
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
        <div>
            <ul>
                {products.length && products.map(product => (
                    <Item title={product.title} price={product.price}  />
                ))
                }
            </ul>
        </div>
    );
}

export default ItemListContainer;
