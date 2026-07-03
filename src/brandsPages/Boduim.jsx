import React from 'react'
import { Card } from '../Components/Card';
import { products } from '../data/productData';
export const Boduim = () => {
    const boduimProducts = products.filter((product) =>
        product.categories.includes("boduim")
    );

    return (
        <div className="main_section flex flex-col gap-12">
            <h2 className='text-2xl md:text-4xl font-bold font-barlow pl-8 pt-8'>BODUIM </h2>
            <section className="flex flex-col items-center md:flex-row flex-wrap gap-6 md:px-8">
                {boduimProducts.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </section>
        </div>

    );
};