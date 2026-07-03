import React from 'react'
import { products } from "../data/productData";
import { Card } from '../Components/Card';
export const SkinCare = () => {
    const skinProducts = products.filter((product) =>
        product.categories.includes("skin-care")
    );

    return (
        <div className="main_section flex flex-col gap-12">
            <h2 className='text-2xl md:text-4xl font-bold font-barlow pl-8 pt-8'>Skin Care</h2>
            <section className="flex flex-col items-center md:flex-row flex-wrap gap-6 md:px-8">
                {skinProducts.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </section>
        </div>

    );
};
