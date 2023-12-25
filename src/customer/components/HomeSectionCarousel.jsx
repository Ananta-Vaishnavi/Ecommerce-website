import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};

const items = Array.from({ length: 6 }, (_, index) => <HomeSectionCard key={index} />);

export default function HomeSectionCarousel() {
    return (
        <div>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={3000}
                infinite
                responsive={responsive}
            />
        </div>
    );
}
