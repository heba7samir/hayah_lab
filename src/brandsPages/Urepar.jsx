import React from 'react'
import { products } from '../data/productData';
import { Card } from '../Components/Card';
export const Urepar = () => {
   const ureparProducts = products.filter((product) =>
        product.categories.includes("urepar")
    );

    return (
        <div className="main_section flex flex-col gap-12">
            <h2 className='text-2xl md:text-4xl font-bold font-barlow pl-8 pt-8'>UREPAR</h2>
            <section className="flex flex-row flex-wrap gap-6 px-8">
                {ureparProducts.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </section>
        </div>

    );
};
