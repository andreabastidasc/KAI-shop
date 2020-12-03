import React, {useState,useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../Components/ItemDetail';


const ItemDetailContainer = () => {
    const {id} = useParams(); 
    const [itemSelected, setItemSelected] = useState();

    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`)
        .then((item)=>{
            console.log('item prueba', item)
            return item.json()
        })
        .then((itemJson)=>{
            console.log('item json', itemJson)
            setItemSelected(itemJson)
        })
        .catch((error) => {
            console.log("Error al buscar el Item en la API: ", error);
        })
    },[])

    return (
        <div className='row justify-content-center'>
               <ItemDetail item={itemSelected}/>
        </div>
    );
}

export default ItemDetailContainer;
