import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';

const items =
    CarouselData.map((item) => <img src={item.image} alt={item.alt} className="carousel-image" />)
    ;


const Carousel = () => (
    <AliceCarousel
        animationType="fadeout"
        autoPlay
        autoPlayInterval={3000}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
    />
);




export default Carousel;
