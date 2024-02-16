import React from 'react'
import CarouselBanner from './CarouselBanner';
import HomeSectionCarousel from '../components/HomeSectionCarousel';
export default function Homepage() {
    return (

        <div>
            <CarouselBanner />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5  lg:px-10'>
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    )
}
