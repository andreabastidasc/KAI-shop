import React from 'react';
import Home from '../Components/Home';
import BrandsContainer from '../Containers/BrandsContainer';
import NewModelsContainer from './NewModelsContainer';


const HomeContainer = () => {
    return (
        <div>
            <Home />
            <BrandsContainer />
            <NewModelsContainer />
        </div>
    );
}

export default HomeContainer;
