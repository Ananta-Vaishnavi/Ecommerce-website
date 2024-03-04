import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';

const items =
    CarouselData.map((item) => <img src={item.image} alt={item.alt} className="carousel-image" />);

const CarouselBanner = () => (
    <div className="relative z-10">
        <AliceCarousel
            animationType="fadeout"
            autoPlay
            autoPlayInterval={3000}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
        />
    </div>
);

export default CarouselBanner;
