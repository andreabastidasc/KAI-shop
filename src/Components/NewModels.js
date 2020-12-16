import React from 'react';
import { Link } from 'react-router-dom';

const NewModels = () => {
    return (
        <div className='col-12 new_models d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>NEW MODELS ARE HERE</h2>
            <br></br>
            <p>Go to our <span>
            <Link to={`/shop`}>shop</Link>
                </span> to see them!</p>
            <button>
              <Link to={`/shop`}>See more</Link>
            </button>     
        </div>
    );
}

export default NewModels;
