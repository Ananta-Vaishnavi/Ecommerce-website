import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({ data, sectionName = "Default Section Name" }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = data.map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));


    const syncActiveIndex = (item) => setActiveIndex(item);
    const slidePrev = () => {
        setActiveIndex(Math.max(activeIndex - 1, 0))
        console.log(activeIndex);
    };
    const slideNext = () => {
        setActiveIndex(Math.min(activeIndex + 1, items.length - 1))
        console.log(activeIndex);

    };

    const responsive = {
        0: { items: 1 },
        480: { items: 1.5 },
        720: { items: 3 },
        1024: { items: 5.5 }
    };

    return (
        <div className="border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    key={`carousel-${activeIndex}`}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    responsive={responsive}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 1 && (
                    <Button
                        variant="contained"
                        className='z-50 bg-white'
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white'
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
                {activeIndex !== 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className='z-50 bg-white'
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white'
                        }}
                        aria-label="Previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;