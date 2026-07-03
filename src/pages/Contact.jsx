import React from 'react'

export const Contact = () => {
    return (
        <section className="max-w-3xl mx-auto px-6 py-24">
            {/* Title */}
            <div className=" mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold">
                    Contact Us
                </h1>

             

                <p className="mt-6 text-gray-500">
                    We'd love to hear from you. Please fill out the form below.
                </p>
            </div>

            {/* Form */}
            <form className="space-y-6">

                <div className="flex gap-6">

                    {/* Name */}
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-400 rounded-full px-4 py-3 outline-none focus:border-black"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-400 rounded-full px-4 py-3 outline-none focus:border-black"
                        />
                    </div>

                </div>

                {/* Phone */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-400 rounded-full px-4 py-3 outline-none focus:border-black"
                    />
                </div>

                {/* Comment */}
                <div>
                    <label className="block mb-2 text-sm font-medium">
                        Comment
                    </label>

                    <textarea
                        rows="6"
                        placeholder="Write your message here..."
                        className="w-full border border-gray-400 rounded-3xl px-4 py-3 outline-none resize-none focus:border-black"
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-[30%] bg-red-900 text-white py-3 rounded-lg transition hover:opacity-90"
                >
                    Send Message
                </button>

            </form>
        </section>
    );
};
