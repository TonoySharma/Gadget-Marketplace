"use client";

import React from "react";
import { FiArrowUpRight, FiRefreshCw } from "react-icons/fi";
import FadeUp from "./FadeUp";

const TradeInBanner: React.FC = () => {
  return (
    <section className="relative bg-slate-950 py-20 px-6 border-b border-white/5 overflow-hidden">
      {/* Background Radial Neon Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent p-8 md:p-14 backdrop-blur-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase bg-indigo-400/10 px-4 py-2 rounded-full border border-indigo-400/20">
                <FiRefreshCw className="animate-spin-slow text-sm" /> Instant Smartphone Upgrade
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Turn Your <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Old Phone</span> Into Maximum Store Credit.
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-7 max-w-xl">
                Ready for an upgrade? Bring your current device to any Gadget Mart outlet or get a remote valuation. We offer the industry&apos;s best exchange rates for Apple, Samsung, and OnePlus flagships.
              </p>

              {/* Dynamic Steps Layout inside Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs font-bold text-indigo-400">STEP 01</span>
                  <p className="text-white font-bold text-sm mt-1">Submit Details</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs font-bold text-purple-400">STEP 02</span>
                  <p className="text-white font-bold text-sm mt-1">Instant Appraisal</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-xs font-bold text-pink-400">STEP 03</span>
                  <p className="text-white font-bold text-sm mt-1">Get Unlocked Flagship</p>
                </div>
              </div>
            </div>

            {/* Right Interactive CTA Card Side */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <FadeUp delay={200} className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/50 p-8 text-center backdrop-blur-md shadow-2xl relative group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Hot Deal 🔥
                </div>

                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-2">Trade-in bonus active</p>
                <h4 className="text-white font-black text-2xl mt-1">Get Extra $100 Value</h4>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Exchange any device from the iPhone 13 or Galaxy S22 series or higher this week to unlock premium bundle accessories for free.
                </p>

                <div className="mt-8 border-t border-white/5 pt-6">
                  <button className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-slate-950 transition-all hover:bg-indigo-400 hover:text-white shadow-xl">
                    Estimate My Device <FiArrowUpRight />
                  </button>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeInBanner;