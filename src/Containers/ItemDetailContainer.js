import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../Components/ItemDetail';
import { getFirestore } from '../firebase/index';


const ItemDetailContainer = () => {
    const {id} = useParams(); 
    const [Loading, setLoading] = useState(false);
    const [itemSelected, setItemSelected] = useState();
    console.log(itemSelected);

    useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        const productsCollection = db.collection('products');
        const product = productsCollection.doc(id); 
        
        product.get().then((doc) => {
            if (!doc.exists) {
                console.log('Product does not exists!');
                return;
            }
            console.log('Product found!');
            setItemSelected({ 
                id: doc.id, 
                data: doc.data(),
            });
        }).catch((error)=>{
            console.log('error searching product', error);
        }).finally(() => {
            setLoading(false);
        })
    },[])

    return (
        <div className='row justify-content-center'>
            {
                Loading && <h4>Loading...</h4>
            }
               <ItemDetail item={itemSelected}/>
        </div>
    );
}

export default ItemDetailContainer;
