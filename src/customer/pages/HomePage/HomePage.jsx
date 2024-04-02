import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { men_clothes } from '../../components/Data/MenClothes';
import { shoe } from '../../components/Data/ShoeData';
import { women_clothes } from '../../components/Data/WomenClothes';


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div>
                <HomeSectionCarousel data={men_clothes} sectionName="men clothes" />
                <HomeSectionCarousel data={women_clothes} sectionName="women clothes" />
                <HomeSectionCarousel data={shoe} sectionName="Shoe clothes" />
            </div>
        </div>
    )
}

export default HomePage
