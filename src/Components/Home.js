import React from 'react';

const Home = ({greeting}) => {
    return (
        <div className="col-12">
            <h1 className="title">{greeting}</h1>
        </div>
    );
}

export default Home;

