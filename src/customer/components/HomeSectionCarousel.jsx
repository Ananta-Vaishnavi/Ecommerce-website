import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
const responsive = {
    0: { items: 1 },
    480: { items: 1.5 },
    720: { items: 3 },
    1024: { items: 5.5 }
};

const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);


export default function HomeSectionCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidePrev = () => {
        const currentIndex = currentIndex - 1;
        setCurrentIndex(currentIndex);
    };
    const slideNext = () => {
        const currentIndex = currentIndex + 1;
        setCurrentIndex(currentIndex);
    };
    const syncActiveIndex = ({ item }) => setCurrentIndex(item);
    return (
        <div className="relative px-4 lg:px-6">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    infinite
                    responsive={responsive}
                />
                <Button
                    variant="contained"
                    className="z-50"
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)', bgcolor: "white"
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                </Button>
                <Button
                    variant="contained"
                    className="z-50"
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(-50%) rotate(-90deg)', bgcolor: "white"
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                </Button>
            </div>
        </div>
    );
}
