import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import hero1 from "../assets/images/hair care/WEB-DESKTOP-3200X1600-roll-on-spring.webp";
import hero2 from "../assets/images/hair care/WEB-DESKTOP-3200X1600-eid-adha.webp"
export const Hero = () => {
    const images = [hero1, hero2];
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);
  return (
      <section className="relative h-[200px] md:h-screen overflow-hidden ">
          <AnimatePresence mode="wait">
              <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Hero"
                  className="absolute inset-0 w-[400px] h-[200px] md:w-full md:h-full object-cover"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                      if (info.offset.x > 50) prevImage();
                      if (info.offset.x < -50) nextImage();
                  }}
              />
          </AnimatePresence>
          <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition"
          >
              <IoIosArrowBack className="text-2xl text-white" />
          </button>

          <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/50 transition"
          >
              <IoIosArrowForward className="text-2xl text-white" />
          </button>
      </section>
  )
}
