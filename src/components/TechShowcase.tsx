"use client";

import React from "react";
import { FiCpu, FiCamera, FiZap } from "react-icons/fi";
import FadeUp from "./FadeUp";

interface ShowcaseItem {
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  borderColor: string;
}

const TechShowcase: React.FC = () => {
  const customItems: ShowcaseItem[] = [
    {
      icon: <FiCpu />,
      tag: "3nm Architecture",
      title: "Next-Gen Silicon Chips",
      desc: "Unleash extreme multitasking and console-level mobile gaming with zero performance throttling or battery dropouts.",
      borderColor: "hover:border-emerald-500/30"
    },
    {
      icon: <FiCamera />,
      tag: "Periscope Zoom",
      title: "Cinematic 200MP Optics",
      desc: "Capture raw detailing even under pitch-black night skies. Engineered with spatial optical image stabilization.",
      borderColor: "hover:border-cyan-500/30"
    },
    {
      icon: <FiZap />,
      tag: "Graphene Battery",
      title: "120W Hyper Charging",
      desc: "Go from 0% to 100% full capacity in just 18 minutes flat. Optimized with AI thermal safe guards to prolong lifetime.",
      borderColor: "hover:border-amber-500/30"
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-6 border-b border-white/5">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            Hardware Performance
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">
            Engineered For The <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Power Users</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            We don&apos;t just sell boxes. We bring you the finest, handpicked flagship configurations built to dominate the future.
          </p>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customItems.map((item, idx) => (
            <FadeUp
              key={idx}
              delay={idx * 150}
              className={`group relative rounded-[2rem] border border-white/5 bg-slate-900/20 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 ${item.borderColor}`}
            >
              {/* Top Meta info */}
              <div className="flex items-center justify-between">
                <div className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/5 px-2.5 py-1 rounded-md bg-white/[0.01]">
                  {item.tag}
                </span>
              </div>

              {/* Main Info */}
              <div className="mt-12">
                <h3 className="text-white font-bold text-xl group-hover:text-gray-200 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-3 leading-7">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Subtle Line */}
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-all duration-300" />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechShowcase;