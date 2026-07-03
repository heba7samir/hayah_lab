// import React from 'react'
// import { NavLink } from 'react-router-dom';
// export const Card = ({
//     image,
//     name,
//     desc,
//     price,
//     oldPrice,
//     discount,
//     offer,
//      new_product,
// }) => {
//     return (
//         <div className="card flex flex-col w-[300px] h-[500px] border border-slate-400 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">

//             <div className="content flex flex-1 flex-col  items-center p-3 group ">
//                 {/* product_image */}
//                 <div className="image_sec ">
//                     {offer && (
//                         <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
//                             {offer}
//                         </span>
//                     )}
//                     {discount && (
//                         <span className="absolute right-[10px] top-4 rounded-full   z-10  bg-red-800 px-[20px] py-1 text-lg font-semibold text-white">
//                             -{discount}%
//                         </span>
//                     )}
//                     {new_product && (
//                         <span className="absolute left-[10px] bottom-20 rounded-xl   z-10  bg-red-800 px-[20px] py-1 text-lg font-semibold text-white">
//                             {new_product}
//                         </span>
//                     )}
                    
                   
//                     <img src={image} alt="" className='h-[300px] w-full mt-2 object-cover transition-transform duration-500 group-hover:scale-105' />
//                 </div>
//                 {/* product_info */}
//                 <div className="product_name">
//                     <h3 className='name mt-4 text-sm font-semibold'>{name} <span className='des text-xs font-medium'>{desc}</span></h3>
//                 </div>
//                 {/* Price */}
//                 <div className="mt-2 flex items-center gap-4">

//                     {oldPrice ? (
//                         <>
//                             <span className="text-lg text-red-700 line-through">
//                                 {oldPrice} EGP
//                             </span>
//                             <span className="text-xl font-semibold text-black">
//                                 {price} EGP
//                             </span>


//                         </>
//                     ) : (
//                         <span className="text-lg font-semibold text-black">
//                             {price} EGP
//                         </span>
//                     )}


//                 </div>
//                 {/* ADD TO CART */}
//                 <div className="button w-full mt-auto">
//                     <NavLink to={"/cart"}
//                         className="block w-full rounded-xl border border-red-800 py-3 font-medium text-center transition-all duration-300 hover:bg-red-900 hover:text-white">
//                         Add To Cart

//                     </NavLink>

//                 </div>
//             </div>
//         </div>

//     )
// };

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Card = ({
    id,
    image,
    name,
    desc,
    price,
    oldPrice,
    discount,
    offer,
    new_product,
}) => {

    const navigate = useNavigate();

    const {
        addToCart,
        isInCart,
    } = useCart();

    const product = {
        id,
        image,
        name,
        desc,
        price,
        oldPrice,
        discount,
        offer,
        new_product,
    };

    const handleAddToCart = () => {

        if (!isInCart(id)) {
            addToCart(product);
        }

        navigate("/cart");
    };

    return (
        <div className="card flex flex-col w-[300px] h-[500px] border border-slate-400 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden">

            <div className="content flex flex-1 flex-col items-center p-3 group">

                {/* Product Image */}
                <div className="image_sec relative">

                    {offer && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-800 px-3 py-1 text-xs font-semibold text-white">
                            {offer}
                        </span>
                    )}

                    {discount && (
                        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-800 px-5 py-1 text-sm font-semibold text-white">
                            -{discount}%
                        </span>
                    )}

                    {new_product && (
                        <span className="absolute left-3 bottom-4 z-10 rounded-xl bg-red-800 px-4 py-1 text-sm font-semibold text-white">
                            {new_product}
                        </span>
                    )}

                    <img
                        src={image}
                        alt={name}
                        className="h-[300px] w-full mt-2 object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                </div>

                {/* Product Info */}
                <div className="product_name mt-4 text-center">

                    <h3 className="text-sm font-semibold">
                        {name}
                    </h3>

                    <p className="text-xs mt-1">
                        {desc}
                    </p>

                </div>

                {/* Price */}
                <div className="mt-3 flex items-center gap-3">

                    {oldPrice ? (
                        <>
                            <span className="text-red-700 line-through">
                                {oldPrice} EGP
                            </span>

                            <span className="text-xl font-semibold">
                                {price} EGP
                            </span>
                        </>
                    ) : (
                        <span className="text-xl font-semibold">
                            {price} EGP
                        </span>
                    )}

                </div>

                {/* Button */}
                <div className="w-full mt-auto">

                    <button
                        onClick={handleAddToCart}
                        className="w-full rounded-xl border border-red-800 py-3 font-medium transition-all duration-300 hover:bg-red-900 hover:text-white"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
    );
};