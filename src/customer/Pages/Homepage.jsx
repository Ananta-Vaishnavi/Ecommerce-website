import React from 'react';
import CarouselBanner from './CarouselBanner';
import HomeSectionCarousel from '../components/HomeSectionCarousel';
import { mens_kurta } from "../../Data/Men/men_kurta";
import { mens_shoes } from "../../Data/shoes";
import { lenghaCholi } from '../../Data/Women/LenghaCholi';
// import { mens_tshirt } from "../../Data/Men/men_jeans.json";

export default function Homepage() {
    return (
        <div>
            <CarouselBanner />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
            </div>
        </div>
    );
}
