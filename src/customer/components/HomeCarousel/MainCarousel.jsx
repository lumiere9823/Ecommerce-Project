import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from './MainCarouselData';

const MainCarousel = () => {

    const items = homeCarouselData.map((item) => <img className='cursor-pointer' src={item.image} style={{ display: 'block', margin: '0 auto' }} role='presentation' alt='' />);

    return (
        <div className='py-4'>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    )
};

export default MainCarousel;