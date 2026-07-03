import React from "react";
import { useCart } from "../context/CartContext";

export const Checkout = () => {
    const { cartItems, totalPrice } = useCart();

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            <h1 className="text-4xl font-bold mb-12">
                Checkout
            </h1>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

                {/* Billing Details */}

                <div className="rounded-2xl border p-8 shadow-sm">

                    <h2 className="text-2xl font-semibold mb-8">
                        Billing Details
                    </h2>

                    <form className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="block mb-2 font-medium">
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="John"
                                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="+20 10xxxxxxxx"
                                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Address
                            </label>

                            <input
                                type="text"
                                placeholder="Street Address"
                                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="block mb-2 font-medium">
                                    City
                                </label>

                                <input
                                    type="text"
                                    placeholder="Cairo"
                                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium">
                                    Postal Code
                                </label>

                                <input
                                    type="text"
                                    placeholder="12345"
                                    className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-700"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Notes (Optional)
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write any additional notes..."
                                className="w-full rounded-xl border px-4 py-3 outline-none resize-none focus:border-red-700"
                            />
                        </div>

                    </form>

                </div>

                {/* Order Summary */}

                <div className="rounded-2xl border p-6 shadow-sm h-fit sticky top-24">

                    <h2 className="text-2xl font-semibold mb-6">
                        Order Summary
                    </h2>

                    <div className="space-y-5">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-3"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />

                                    <div>

                                        <h3 className="font-medium">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            {item.desc}
                                        </p>

                                    </div>

                                </div>

                                <span className="font-semibold">
                                    {item.price} EGP
                                </span>

                            </div>

                        ))}

                    </div>

                    <div className="border-t mt-6 pt-6 space-y-3">

                        <div className="flex justify-between">

                            <span>Subtotal</span>

                            <span>{totalPrice.toFixed(2)} EGP</span>

                        </div>

                        <div className="flex justify-between">

                            <span>Shipping</span>

                            <span>Free</span>

                        </div>

                        <div className="flex justify-between text-xl font-bold pt-4">

                            <span>Total</span>

                            <span>{totalPrice.toFixed(2)} EGP</span>

                        </div>

                    </div>

                    <button
                        className="w-full mt-8 rounded-xl bg-red-800 py-4 text-white font-semibold transition hover:bg-red-900"
                    >
                        Place Order
                    </button>

                </div>

            </div>

        </section>
    );
};