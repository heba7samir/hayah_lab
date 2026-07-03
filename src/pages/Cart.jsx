// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export const Cart = () => {
//     const {
//         cartItems,
//         removeFromCart,
//         clearCart,
//         totalPrice,
//     } = useCart();

//     if (cartItems.length === 0) {
//         return (
//             <section className="min-h-screen flex flex-col items-center justify-center px-4">

//                 <h2 className="text-4xl font-semibold mb-4">
//                     Your Cart is Empty
//                 </h2>

//                 <p className="text-gray-500 mb-8 text-center">
//                     Looks like you haven't added any products yet.
//                 </p>

//                 <NavLink
//                     to="/"
//                     className="rounded-xl bg-red-800 px-8 py-3 text-white transition hover:bg-red-900"
//                 >
//                     Continue Shopping
//                 </NavLink>

//             </section>
//         );
//     }

//     return (
//         <section className="max-w-7xl mx-auto py-24 px-6">

//             <h1 className="text-4xl font-bold mb-12">
//                 Shopping Cart
//             </h1>

//             <div className="space-y-6">

//                 {cartItems.map((item) => (

//                     <div
//                         key={item.id}
//                         className="flex items-center justify-between border rounded-xl p-5"
//                     >

//                         <div className="flex gap-6 items-center">

//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-28 h-28 object-cover rounded-lg"
//                             />

//                             <div>

//                                 <h3 className="text-xl font-semibold">
//                                     {item.name}
//                                 </h3>

//                                 <p className="text-gray-500 mt-1">
//                                     {item.desc}
//                                 </p>

//                                 <div className="mt-3">

//                                     {item.oldPrice ? (
//                                         <>
//                                             <span className="line-through text-red-600 mr-3">
//                                                 {item.oldPrice} EGP
//                                             </span>

//                                             <span className="font-semibold">
//                                                 {item.price} EGP
//                                             </span>
//                                         </>
//                                     ) : (
//                                         <span className="font-semibold">
//                                             {item.price} EGP
//                                         </span>
//                                     )}

//                                 </div>

//                             </div>

//                         </div>

//                         <button
//                             onClick={() => removeFromCart(item.id)}
//                             className="rounded-lg border border-red-700 px-5 py-2 text-red-700 transition hover:bg-red-700 hover:text-white"
//                         >
//                             Remove
//                         </button>

//                     </div>

//                 ))}

//             </div>

//             <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

//                 <h2 className="text-2xl font-bold">
//                     Total : {totalPrice.toFixed(2)} EGP
//                 </h2>

//                 <button
//                     onClick={() => removeFromCart(item.id)}
//                 >
//                     Remove
//                 </button>

//             </div>

//         </section>
//     );
// };
import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        clearCart,
        totalPrice,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center px-4">

                <h2 className="text-4xl font-semibold mb-4">
                    Your Cart is Empty
                </h2>

                <p className="text-gray-500 mb-8 text-center">
                    Looks like you haven't added any products yet.
                </p>

                <NavLink
                    to="/"
                    className="rounded-xl bg-red-800 px-8 py-3 text-white transition hover:bg-red-900"
                >
                    Continue Shopping
                </NavLink>

            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto py-24 px-6">

            <h1 className="text-4xl font-bold mb-12">
                Shopping Cart
            </h1>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

                {/* Products */}

                <div className="space-y-6">

                    {cartItems.map((item) => (

                        <div
                            key={item.id}
                            className="flex items-center justify-between border rounded-2xl p-5 shadow-sm"
                        >

                            <div className="flex gap-6 items-center">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-28 h-28 object-cover rounded-lg"
                                />

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-500 mt-1">
                                        {item.desc}
                                    </p>

                                    <div className="mt-3 flex items-center gap-3">

                                        {item.oldPrice ? (
                                            <>
                                                <span className="line-through text-red-600">
                                                    {item.oldPrice} EGP
                                                </span>

                                                <span className="font-semibold text-lg">
                                                    {item.price} EGP
                                                </span>
                                            </>
                                        ) : (
                                            <span className="font-semibold text-lg">
                                                {item.price} EGP
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="rounded-lg border border-red-700 px-5 py-2 text-red-700 transition hover:bg-red-700 hover:text-white"
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

                {/* Order Summary */}

                <div className="h-fit rounded-2xl border shadow-sm p-6 sticky top-24">

                    <h2 className="text-2xl font-semibold mb-6">
                        Order Summary
                    </h2>

                    <div className="flex justify-between text-lg mb-6">
                        <span>Total</span>

                        <span className="font-bold">
                            {totalPrice.toFixed(2)} EGP
                        </span>
                    </div>

                    <div className="flex flex-col gap-4">

                        <NavLink
                            to="/"
                            className="rounded-xl border border-red-800 py-3 text-center font-medium transition hover:bg-red-900 hover:text-white"
                        >
                            Continue Shopping
                        </NavLink>

                        <NavLink to={"/checkout"}
                            className="rounded-xl bg-red-800 py-3 text-white text-center font-medium transition hover:bg-red-900"
                        >
                            Check Out
                        </NavLink>

                        <button
                            onClick={clearCart}
                            className="rounded-xl border py-3 font-medium transition hover:bg-gray-100"
                        >
                            Clear Cart
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};