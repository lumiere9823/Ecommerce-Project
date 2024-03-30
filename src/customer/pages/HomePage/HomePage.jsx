import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { men_clothes } from '../../components/Data/MenClothes';


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div>
                <HomeSectionCarousel data={men_clothes} />
            </div>
        </div>
    )
}

export default HomePage
