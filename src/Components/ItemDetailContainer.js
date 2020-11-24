import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './Item';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({item}) => {
    const id = useParams(); 
   

    return (
        <div className='row justify-content-center'>
               <ItemDetail />
        </div>
    );
}

export default ItemDetailContainer;
