import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};

const createItems = (data, handleClick) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return data.map((item, i) => (
        <div
            key={i}
            className="item"
            onMouseDown={(e) => (deltaX = e.pageX)}
            onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
            onClick={() => difference < swipeDelta && handleClick(i)}
        >
            <HomeSectionCard product={item} />
        </div>
    ));
};

const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(data, setActiveIndex));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const onSlideChanged = (e) => {
        setActiveIndex(e.item);
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };

    const onUpdated = (e) => {
        console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
    };

    return (
        <div className='relative px-4 lg:px-10'>
            <p style={{ fontSize: "20px", textTransform: "uppercase", fontWeight: "bolder", padding: "20px" }}>{sectionName}</p>
            <div className='relative p-5'>
                <AliceCarousel
                    mouseTracking
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    onSlideChanged={onSlideChanged}
                    onUpdated={onUpdated}
                />
                <Button className='z-50' variant='contained' onClick={slidePrev}
                    sx={{
                        position: 'absolute', top: '8rem',
                        left: '0rem', transform: "translateX(-50%) rotate(90deg)", bgcolor: "white"
                    }} aria-label='prev'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>

                <Button className='z-50' variant='contained' onClick={slideNext} sx={{
                    position: 'absolute', top: '8rem',
                    right: '0rem', transform: "translateX(15%) rotate(90deg)", bgcolor: "white"
                }} aria-label='previous'><ChevronRightIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
