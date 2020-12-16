import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                 <div className="carousel-item active">
                   <img src="..." class="d-block w-100" alt="..."></img>
                 </div>
                 <div className="carousel-item">
                   <img src="..." class="d-block w-100" alt="..."></img>
                 </div>
                 <div className="carousel-item">
                   <img src="..." class="d-block w-100" alt="..."></img>
                 </div>
             </div>
            </div>
        </div>
    );
}

export default Carousel;
