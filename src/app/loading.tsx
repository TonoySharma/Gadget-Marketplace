"use client";

import React from "react";

export default function PremiumLoader() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* --- Ambient Background Glows (Premium Visuals) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-4000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Main Content Container --- */}
      <div className="flex flex-col items-center gap-6 z-10">
        
        {/* --- Logo/Icon Spinner (Aesthetic Concept) --- */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Rotating Premium Arc */}
          <div className="absolute inset-0 border-2 border-zinc-800 rounded-full" />
          <div className="absolute inset-0 border-2 border-t-transparent border-r-transparent border-l-blue-500 border-b-blue-500 rounded-full animate-spin [animation-duration:1.2s]" />
          
          {/* Inner Steady Core */}
          <div className="w-6 h-6 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg shadow-lg shadow-blue-500/30 animate-pulse" />
        </div>

        {/* --- Text and Progress Section --- */}
        <div className="flex flex-col items-center gap-3">
          {/* Branding / Text */}
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-zinc-400 animate-fade-in">
            Loading<span className="text-blue-500 animate-pulse">...</span>
          </h2>
          
          {/* Minimalist Micro Progress Bar */}
          <div className="w-32 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-loading-bar" />
          </div>
        </div>

      </div>

      {/* --- Global Styles Custom Animation Integration --- */}
      <style jsx global>{`
        @keyframes loading-bar {
          0% {
            left: -50%;
            width: 30%;
          }
          50% {
            width: 40%;
          }
          100% {
            left: 100%;
            width: 20%;
          }
        }
        
        .animate-loading-bar {
          animation: loading-bar 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}