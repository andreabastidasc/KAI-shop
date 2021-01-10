import React, {useState,useEffect} from 'react';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase/index';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const Cart = () => {
    
    const [selectedItems, setSelectedItems] = useContext(Context);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('');


    //CALCULATE ITEMS AMOUNT, FUNCIÓN PARA CALCULAR EL TOTAL DE ELEMENTOS EN EL CART
    useEffect(()=> {
        let fullAmount = 0;
        if(selectedItems.length > 0) {
            selectedItems.map(item => (
                fullAmount += item.inCart
            ))
            setAmount(fullAmount);
        }
    }, [selectedItems])

    //CALCULATE TOTAL, FUNCIÓN PARA CALCULAR EL TOTAL
    useEffect(()=> {
        let fullPay = 0;
        if(selectedItems.length > 0) {
            selectedItems.map(item => (
                fullPay += item.price * item.inCart
            ))
            setTotal(fullPay);
        }
    }, [selectedItems])

    //ADDING ORDER FUNCTION WITH AUTH, FUNCIÓN PARA AGREGAR UNA ORDEN CON AUTENTICACIÓN DE MAIL
    const addOrder = () => {
        if(document.getElementById('form-email').value === document.getElementById('check-email').value) {
            setLoading(true);

            const db = getFirestore();        
            const orders = db.collection('orders');

            const newOrder = {
                buyer: {
                    name: document.getElementById('form-name').value,
                    phone: document.getElementById('form-phone').value,
                    email: document.getElementById('form-email').value,
                    address: document.getElementById('form-address').value
                    },
                items: selectedItems,
                total: total,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            };
            
            orders.add(newOrder)
                .then(({ id }) => {
                    setOrderId(id);
                }).catch((error) => {
                    console.log(error)
                }).finally(() => {
                    setLoading(false);
                });
        } else {
            document.getElementById('check-label').style.display = 'block'
        }
    }

    //RESET FUNCTION
    const Reload = () => {
        window.location.reload();
    }

    //SHOWING ORDER ID, FUNCIÓN PARA MOSTRAR EL ID DE LA ORDEN
    if(orderId !== '') {
        return (
            <div className="row order_container text-center">
                <div className="col-12 p-5">
                    <h1>Your purchase was succesful!</h1>
                    <h2>We're preparing your package</h2>
                    <h3>The tracking ID is <span className='badge'>{orderId}</span></h3>
                    <button onClick={Reload}>Go back</button>
                </div>
            </div>
        )
    }

    return (
        <div className='col-12 text-center mt-3 cart_container'>
            <h3>Cart</h3>
            {selectedItems.length > 0 ? selectedItems.map((item) => (
                    <div className='mt-4'>
                        <div className='d-flex flex-row justify-content-around'>
                            <h3 className='itemTitle'>{item.title}</h3>
                            <h4>{item.price}$USD</h4>
                            <p className='badge'>{item.inCart}</p>
                            <button onClick={Reload} > Empty cart </button>
                        </div>  
                        <hr></hr>
                    </div>
                )): <div className='col-12 text-center empty_cart-container'>
                     <h3>You have no products</h3> 
                    <Link to={`/shop`}>Go back to the store</Link>
                    </div>
            }
            <div className='row'>
                <div className='col-12 checkout_container mb-4'>
                    <h3>Checkout</h3>
                    <form>
                    <input className="form-control mb-1" id="form-name" type="text" placeholder="Name" />
                    <input className="form-control mb-1" id="form-phone" type="tel" placeholder="Phone" />
                    <input className="form-control mb-1" id="form-email" type="email" placeholder="E-mail" />
                    <input className="form-control mb-1" id="check-email" type="email" placeholder="E-mail" />
                    <label id="check-label" style={{display:'none'}}>Both address must be equal</label>
                    <input className="form-control mb-1" id="form-address" type="text" placeholder="Address" />
                    </form>
                    <h4 className='mt-4'>Order Details</h4>
                    <h5>Items: {amount}</h5>
                    <h5>Total: {total}</h5>
                    <button onClick={addOrder} className='m-4'>Finish order</button>
                </div>

            </div>
            

            
        </div>
    );
}

export default Cart;
