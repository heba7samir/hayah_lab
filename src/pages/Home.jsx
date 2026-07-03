import React from 'react'
import { Hero } from '../Components/Hero';
import { OurBrands } from '../Components/OurBrands';
import { NewProduct } from '../Components/NewProduct';
import { BestSeller } from '../Components/BestSeller';

export const Home = () => {
    return (
        <div className="home">
            <Hero />
            <OurBrands />
            <NewProduct />
            <BestSeller/>
        </div>
    )
};
