import React from 'react'

export const AboutUs = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">

            {/* Heading */}
            <div className=" mb-20">
                <h1 className="text-4xl  font-semibold">
                    About Us
                </h1>

             
            </div>

            {/* About */}
            <div className="mb-16">
                <h2 className="text-3xl font-medium mb-6">
                    About Hayah Laboratories
                </h2>

                <p className="text-gray-600 leading-8">
                    Hayah Laboratories is a private company established in 2016
                    and categorized under dermo-cosmetics, skincare marketing,
                    sales, and distribution. Its head office is located in
                    Cairo, Egypt, while its activities extend across the entire
                    country through a dedicated marketing and sales team.
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                    Hayah Laboratories is one of the leading local
                    dermo-cosmetic brands in Egypt and the first local
                    dermo-cosmetic brand operating according to international
                    standards.
                </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">

                {/* Mission */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                    <h2 className="text-2xl font-medium mb-4">
                        Our Mission
                    </h2>

                    <ul className="space-y-4 text-gray-600">
                        <li>
                            • Provide different skin and hair care programs
                            tailored to various skin types with high quality and
                            worldwide reputation.
                        </li>

                        <li>
                            • Play a key role in developing consumer awareness
                            regarding skincare.
                        </li>

                        <li>
                            • Satisfy the needs of doctors, patients, and end
                            users.
                        </li>
                    </ul>
                </div>

                {/* Vision */}
                <div className="bg-slate-50 p-8 rounded-2xl">
                    <h2 className="text-2xl font-medium mb-4">
                        Our Vision
                    </h2>

                    <p className="text-gray-600 leading-8">
                        Skincare is a lifestyle for the whole family.
                    </p>
                </div>

            </div>

            {/* Values */}
            <div>
                <h2 className="text-3xl font-medium mb-8">
                    Our Values
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Quality */}
                    <div className="border border-gray-200 rounded-2xl p-8">
                        <h3 className="text-xl font-medium mb-4">
                            Best Quality in Market
                        </h3>

                        <p className="text-gray-600 leading-8">
                            The constant monitoring of the production chain and
                            the use of certified, high-quality raw materials
                            from the most reliable suppliers within the European
                            Community allow us to create premium products
                            safely and effectively.
                        </p>
                    </div>

                    {/* R&D */}
                    <div className="border border-gray-200 rounded-2xl p-8">
                        <h3 className="text-xl font-medium mb-4">
                            Advanced R & D
                        </h3>

                        <p className="text-gray-600 leading-8">
                            We are committed to staying at the forefront of
                            product innovation and technology. Our quality
                            control and quality assurance divisions enable us to
                            launch products that meet worldwide standards.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};
