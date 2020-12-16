import React from 'react';

const Brands = () => {
    return (
        <div className='col-12 text-center'>
            <div className='row'>
                <div className='col-xs-12 col-md-6 col-lg-3 mt-3 mb-2'>
                    <img className='brand' src='https://i.postimg.cc/fTMHJJ5q/vans-logo.png' alt='brand logo'></img>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3 mt-2 mb-2'>
                    <img className='brand' src='https://i.postimg.cc/5tPHqkMF/bbc.png' alt='brand logo'></img>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3 mt-3 mb-2'>
                    <img className='brand' src='https://i.postimg.cc/LsDF7ryN/nike-logo.png' alt='brand logo'></img>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-3 mt-3 mb-2'>
                    <img className='brand' src='https://i.postimg.cc/FHPvzt48/thrasher-logo.png' alt='brand logo'></img>
                </div>
            </div>
        </div>
    );
}

export default Brands;
