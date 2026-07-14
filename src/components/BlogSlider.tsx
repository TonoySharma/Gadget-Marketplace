"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=2000", 
    date: "Aug 22, 2025",
    title: "AirBuds Bring You Powerful Sound Without the Wires",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1624258919367-5dc28f5dc293?w=500&auto=format&fit=crop&q=60", 
    date: "Aug 22, 2025",
    title: "AirBuds Deliver Comfort, Style, and Premium Sound",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2000", 
    date: "Aug 22, 2025",
    title: "AirBuds Bring You Freedom and Pure like Sound",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2000", 
    date: "Aug 22, 2025",
    title: "Wireless AirBuds Designed for Life on Move",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000", 
    date: "Aug 23, 2025",
    title: "The Evolution of Spatial Audio Technology",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2000", 
    date: "Aug 23, 2025",
    title: "Immersive Listening Experiences: A Deep Dive",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2000", 
    date: "Aug 24, 2025",
    title: "Why Aesthetics Matter in Personal Audio Devices",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=2000", 
    date: "Aug 24, 2025",
    title: "Balancing Battery Life and Audio Performance",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2000", 
    date: "Aug 25, 2025",
    title: "The Best True Wireless Earbuds for Workouts",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=2000", 
    date: "Aug 25, 2025",
    title: "Understanding Fast Charge and Wireless Cases",
  },
];

export default function BlogSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const totalItems = blogData.length;


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); 
      } else {
        setVisibleCards(4);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + 1 >= totalItems - visibleCards + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - visibleCards : prevIndex - 1
    );
  };

  const visibleData = blogData.slice(startIndex, startIndex + visibleCards);

  return (
    <section className="w-full bg-slate-950 py-12 md:py-16 px-4 md:px-8 overflow-hidden select-none min-h-[500px] flex flex-col justify-center">
      

      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2 tracking-tight">
          Blogging Refers To Managing Blog
        </h2>
        <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto font-light px-4">
          Ellentesque et justo tempus fermentum sem viverra ultrices
        </p>
      </div>


      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10">
        

        <button
          onClick={prevSlide}
          className="absolute -left-1 md:-left-4 top-[35%] sm:top-[38%] -translate-y-1/2 z-30 p-2.5 md:p-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all active:scale-90 cursor-pointer"
          aria-label="Previous Slide"
        >
          <FiArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>


        <button
          onClick={nextSlide}
          className="absolute -right-1 md:-right-4 top-[35%] sm:top-[38%] -translate-y-1/2 z-30 p-2.5 md:p-3 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg border border-gray-100 transition-all active:scale-90 cursor-pointer"
          aria-label="Next Slide"
        >
          <FiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full px-6 sm:px-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col group relative w-full"
              >
         
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl  bg-zinc-800 shadow-sm border border-white/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

        
                <span className="text-xs font-semibold text-blue-400 tracking-wide mt-3 mb-1.5 text-left px-1">
                  {item.date}
                </span>
                <h3 className="text-sm md:text-[15px] font-bold text-gray-100 text-left leading-snug group-hover:text-blue-400 transition-colors px-1 line-clamp-2 min-h-[2.5rem]">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}