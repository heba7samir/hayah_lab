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

            <div className="content relative flex flex-1 flex-col items-center p-3 group">
                {/* product sale */}
               

                {discount && (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-red-800 px-5 py-1 text-sm font-semibold text-white">
                        -{discount}%
                    </span>
                )}
                {/* Product Image */}
                <div className="image_sec relative overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-[300px] w-full mt-2 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {offer && (
                        <span className="absolute right-[-50px] top-[42px] rotate-45 z-10 rounded-sm bg-red-800 px-10 py-[2px] text-[18px] font-semibold text-white text-center">
                            {offer}
                        </span>
                    )}
                    {new_product && (
                        <span className="absolute left-3 bottom-6 z-10 rounded-xl bg-red-800 px-4 py-1 text-sm font-semibold text-white">
                            {new_product}
                        </span>
                    )}

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