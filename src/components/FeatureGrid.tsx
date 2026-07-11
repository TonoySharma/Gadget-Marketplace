"use client";

import React from "react";
import { FiShield, FiTruck, FiRefreshCw, FiCreditCard } from "react-icons/fi";
import FadeUp from "./FadeUp";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureGrid: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <FiShield className="text-cyan-400 text-2xl" />,
      title: "Official Warranty Cover",
      desc: "Every premium gadget comes directly with a minimum 1-year official brand coverage. Hassle-free claim guaranteed."
    },
    {
      icon: <FiTruck className="text-purple-400 text-2xl" />,
      title: "Hyper Express Delivery",
      desc: "Get your device delivered within 24 hours inside metro cities. Premium shock-proof packaging tailored for flagships."
    },
    {
      icon: <FiRefreshCw className="text-indigo-400 text-2xl" />,
      title: "7-Day Easy Replacement",
      desc: "Not fully satisfied with your tech? Enjoy a zero-questions-asked 7 days structural replacement or exchange service."
    },
    {
      icon: <FiCreditCard className="text-pink-400 text-2xl" />,
      title: "Zero-Cost EMI Plan",
      desc: "Upgrade your lifestyle instantly. Available up to 24 months EMI with all major credit cards and digital financial accounts."
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-6 border-b border-white/5">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-purple-400 uppercase bg-purple-400/10 px-4 py-1.5 rounded-full border border-purple-400/20">
            Our Core Blueprint
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">
            We Redefined The <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Gadget Shopping</span> Ecosystem.
          </h2>
        </div>

        {/* Feature 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <FadeUp
              key={idx}
              delay={idx * 150}
              className="group flex flex-col sm:flex-row gap-5 rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-8 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 group-hover:bg-slate-900 group-hover:ring-purple-500/50 transition-all duration-300">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-wide group-hover:text-purple-400 transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-7">
                  {feat.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;