import React from 'react'
import { NavLink } from 'react-router-dom';
export const ProductCard = ({
    image,
    name,
    desc,
    price,
    oldPrice,
    discount,
    offer,
}) => {
    return (
        <div className="card flex flex-col w-[300px] h-[500px] border border-slate-400 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">

            <div className="content flex flex-1 flex-col  items-center p-3 ">
                {/* product_image */}
                <div className="image_sec">
                    {offer && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
                            {offer}
                        </span>
                    )}
                    {discount && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
                            -{discount}%
                        </span>
                    )}
                    <img src={image} alt="" className='h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105' />
                </div>
                {/* product_info */}
                <div className="product_name">
                    <h3 className='name mb-2 text-sm font-semibold'>{name} <span className='des text-xs font-medium'>{desc}</span></h3>
                </div>
                {/* Price */}
                <div className="mb-4 flex items-center gap-2">

                    {oldPrice ? (
                        <>
                            <span className="text-sm text-red-700 line-through">
                                {oldPrice} EGP
                            </span>
                            <span className="text-lg font-semibold text-black">
                                {price} EGP
                            </span>


                        </>
                    ) : (
                        <span className="text-lg font-semibold text-black">
                            {price} EGP
                        </span>
                    )}


                </div>
                {/* ADD TO CART */}
                <div className="button w-full mt-auto">
                    <NavLink to={"/cart"}
                        className="block w-full rounded-xl border border-red-800 py-3 font-medium text-center transition-all duration-300 hover:bg-red-900 hover:text-white">
                        Add To Cart

                    </NavLink>

                </div>
            </div>
        </div>

    )
};
