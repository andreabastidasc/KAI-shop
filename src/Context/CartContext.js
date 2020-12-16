import React, { useState } from 'react';

export const Context = React.createContext([]);

const CartContext = (props) => {

   // const [cartCount, setCartCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <Context.Provider value={[selectedItems, setSelectedItems]}>
            {props.children}
        </Context.Provider>
    )
}

export default CartContext;