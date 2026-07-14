"use client";

import React from "react";
import FadeUp from "./FadeUp";

const Marquee: React.FC = () => {

  const items: string[] = [
    "SMARTPHONE",
    "5G FLAGSHIP",
    "MOBILE ACCESSORIES",
    "APPLE WORLD",
    "ANDROID ZONE",
    "GADGET STORE",
    "NEXT-GEN TECH",
    "ONLINE SHOP",
    "SMART WATCH",
    "PREMIUM DEVICES",
    "TECH REPAIR",
    "GAMING PHONE",
    "GLOBAL EDITION",
    "UNBEATABLE DEALS",
    "FAST DELIVERY"
  ];


  const StarIcon: React.FC = () => (
    <span className="mx-6 text-sm text-cyan-400 opacity-80 select-none">✦</span>
  );

  return (
    <div className="w-full overflow-hidden bg-slate-950 py-8 border-y border-white/10 flex flex-nowrap select-none">
      <FadeUp className="flex whitespace-nowrap animate-marquee">
        
       
        <div className="flex items-center shrink-0 pr-4">
          {items.map((item, index) => (
            <div key={`tech1-${index}`} className="flex items-center">
              <span className="text-gray-300 font-sans text-sm tracking-[0.2em] font-semibold uppercase bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                {item}
              </span>
              <StarIcon />
            </div>
          ))}
        </div>


        <div className="flex items-center shrink-0 pr-4">
          {items.map((item, index) => (
            <div key={`tech2-${index}`} className="flex items-center">
              <span className="text-gray-300 font-sans text-sm tracking-[0.2em] font-semibold uppercase bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                {item}
              </span>
              <StarIcon />
            </div>
          ))}
        </div>

      </FadeUp>
    </div>
  );
};

export default Marquee;