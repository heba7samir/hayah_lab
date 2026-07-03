import React from 'react'
import { products } from '../data/productData';
import { Card } from '../Components/Card';
export const NewProduct = () => {
    const newproductsProducts = products.filter((product) =>
       product.categories.includes("new_products")
    );

    return (
        <div className="main_section flex flex-col gap-12">
            <h2 className='text-xl md:text-2xl font-bold font-barlow pl-8 pt-8'>New Products</h2>
            <section className="flex flex-row flex-wrap gap-6 px-8">
                {newproductsProducts.map((product) => (
                    <Card
                        key={product.id}
                        {...product}
                    />
                ))}
            </section>
        </div>

    );

};
