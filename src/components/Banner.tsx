"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// ছবিগুলোর হাই-রেজোলিউশন ইউআরএল অ্যারে
const smartphoneImages: string[] = [
  "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1772986646005-94dea9855a5d?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1738830234395-a351829a1c7b?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570988006694-04d89e6c2fc0?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?q=80&w=2560&auto=format&fit=crop"
];

// স্ট্যাটস ডেটার জন্য টাইপ ইন্টারফেস
interface StatItem {
  number: string;
  label: string;
}

export default function Banner(): React.JSX.Element {
  // Embla Carousel হুক উইথ অটোপ্লে টাইপ কনফিগারেশন
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // ক্যারাউজাল স্লাইড চেঞ্জ ট্র্যাক করার কলব্যাক ফাংশন
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const stats: StatItem[] = [
    { number: "50K+", label: "Happy Customers" },
    { number: "300+", label: "Latest Devices" },
    { number: "99%", label: "Positive Reviews" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 min-h-screen flex items-center justify-center">
      
      {/* Blur Background Elements */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-6 py-24 lg:flex-row z-10 w-full">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex-1"
        >
          <span className="inline-block rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-sm">
            🔥 New Arrival Series 2026
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white lg:text-7xl tracking-tighter">
            Discover The
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent pb-1">
              Next Generation
            </span>
            Smartphones
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-gray-300">
            Experience the future with cutting-edge technology. Unleash power, capture perfection with 200MP cameras, and enjoy all-day battery life. Unbeatable deals, exclusive launches, and fast global delivery.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/products"
              className="group flex items-center gap-3 rounded-full bg-cyan-500 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Explore Now
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <button className="flex items-center gap-3 rounded-full border-2 border-white/20 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30">
              <FaPlay className="text-sm" />
              Watch Official Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl border-t border-white/10 pt-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{stat.number}</h2>
                <p className="text-base md:text-lg text-gray-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mt-12 lg:mt-0 w-full max-w-md lg:max-w-xl flex-shrink-0 flex-1"
        >
          <div className="absolute -inset-10 rounded-full bg-blue-600/10 blur-[100px]" />

          {/* Embla Carousel Container */}
          <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-2xl shadow-black/30 bg-white/5 backdrop-blur-xl" ref={emblaRef}>
            <div className="flex">
              {smartphoneImages.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-[450px] lg:h-[600px] w-full" key={index}>
                  <Image
                    src={src}
                    alt={`Smartphone Showcase ${index + 1}`}
                    fill
                    className="object-cover rounded-[40px] drop-shadow-[0_30px_60px_rgba(0,255,255,.3)]"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dot Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {smartphoneImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-3.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? "w-10 bg-cyan-400" : "w-3.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Floating Info Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 top-20 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-3xl shadow-xl z-30 hidden sm:block"
          >
            <p className="text-sm text-cyan-200 font-medium">🔋 Huge Battery</p>
            <h3 className="text-2xl font-bold text-white mt-1">48 Hours+</h3>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 bottom-24 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-3xl shadow-xl z-30 hidden sm:block"
          >
            <p className="text-sm text-blue-200 font-medium">📷 Pro Camera</p>
            <h3 className="text-2xl font-bold text-white mt-1">200 MP</h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}