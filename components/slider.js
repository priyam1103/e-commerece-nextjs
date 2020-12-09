import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

    ;const slideImages = [
    '/priyam.jpg',
    '/priyam.jpg',
    '/priyam.jpg'
  ];
export default function slider() {

    return (
      <Carousel showThumbs={false} >
      <div>
          <div className="slider">
            
              <p className="welcome">
                Welcome to shopify
                </p>
            
           
            
            </div>
      </div>
      <div className="slider">
        
          <p className="legend">Legend 2</p>
      </div>
      <div className="slider">

          <p className="legend">Legend 3</p>
      </div>
  </Carousel>
    )
}
