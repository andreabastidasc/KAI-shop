import React, {useState} from 'react';

const ItemCount = (props) => {

    const [count, setCount] = useState(0);

    const onAdd = () => {
        if (count < props.max) {
            setCount(prevCount => prevCount + 1);
        } 
    };

    const onSust = () => {
        if (count > props.min) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="counter-container d-flex flex-row justify-content-around">
            <button className="btn btn-danger" onClick={onSust}> - </button> 
            <p className="count"> {count} </p>
            <button className="btn btn-success" onClick={onAdd}> + </button>
        </div>
    );
}

export default ItemCount;
