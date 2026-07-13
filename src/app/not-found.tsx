"use client";

import Link from "next/link";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">
  
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center max-w-md mx-auto z-10">

        <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-400 dark:from-zinc-100 dark:to-zinc-600 select-none animate-pulse">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">
          Page Not Found
        </h2>
        
        <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          The page you are looking for doesn't exist or has been moved to another URL.
        </p>

        {/* বাটন্স */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
       
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/5 transition-all duration-200"
          >
            <FiArrowLeft className="w-4 h-4" />
            Go Back
          </button>

      
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/10 dark:shadow-none transition-all duration-200"
          >
            <FiHome className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

     
      <div className="absolute bottom-6 text-xs text-zinc-400 dark:text-zinc-600 select-none">
        Lost? Contact support if you think this is a mistake.
      </div>
    </div>
  );
}