import React from 'react'
import { products } from '../data/productData';
import { Card } from '../Components/Card';
export const BestSeller = () => {
   const bestsellerProducts = products.filter((product) =>
        product.categories.includes("best-seller")
    );

    return (
        <div className="main_section flex flex-col gap-12">
            <h2 className='text-xl md:text-2xl font-bold font-barlow pl-8 pt-8'>Best Seller</h2>
            <section className="flex flex-col items-center md:flex-row flex-wrap gap-6 md:px-8">
                {bestsellerProducts.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </section>
        </div>

    );

};
