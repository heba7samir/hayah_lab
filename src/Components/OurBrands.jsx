import React from 'react'

const brands = [
    { name: "Straline", color: "text-blue-600" },
    { name: "Sebaclar", color: "text-green-500" },
    { name: "Uribar", color: "text-blue-700" },
    { name: "Ageal", color: "text-purple-900" },
    { name: "Melatex", color: "text-gray-500" },
    { name: "Trix", color: "text-red-600" },
    { name: "Uvipro", color: "text-orange-500" },
    { name: "Boduim", color: "text-pink-500" },
];
export const OurBrands = () => {
     return (
        <section className="bg-slate-100 overflow-hidden py-8">
            <h2 className="text-center text-3xl font-semibold mb-8">
                Our Brands
            </h2>

            <div className="overflow-hidden">
                <div className="flex w-max gap-5 animate-brands hover:[animation-play-state:paused]">

                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="bg-white min-w-[200px] h-[100px] rounded-xl flex items-center justify-center shadow-sm"
                        >
                            <h3
                                className={`text-[22px] font-bold uppercase tracking-wide ${brand.color}`}
                            >
                                {brand.name}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
  
}
