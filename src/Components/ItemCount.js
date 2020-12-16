import React, {useState} from 'react';
import AddButton from './AddButton';

const ItemCount = (props) => {

    const [count, setCount] = useState(0);

    function onAdd(sign) {
        if ((sign === '+') && (count < props.max)) {
            setCount(count+1);
        } else if ((sign === '-') && (count > props.min)) {
            setCount(count-1);
        } 
    }
    
    return (
        <div>
          <div className="counter-container d-flex flex-row justify-content-around align-items-center shadow mt-3">
            <button className="btn" onClick={() => onAdd('-')}> - </button> 
            <p className="count"> {count} </p>
            <button className="btn" onClick={() => onAdd('+')}> + </button>
          </div>
          <AddButton itemCount={count} imagen={props.imagen} title={props.title} price={props.price}/>
        </div>
    );
}

export default ItemCount;
