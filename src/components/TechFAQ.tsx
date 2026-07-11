"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FadeUp from "./FadeUp";

interface FAQItem {
  question: string;
  answer: string;
}

const TechFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Are all smartphones and devices official global variants?",
      answer: "Absolutely. We strictly source 100% genuine official and global unlocked warehouse stock. Every single shipment includes a verified factory IMEI that can be authorized on official brand servers."
    },
    {
      question: "How long does the express delivery option take?",
      answer: "For major metropolitan areas, we provide express delivery under 24 hours. Nationally, standard secured logistics take around 2 to 3 business days depending on location."
    },
    {
      question: "Do you offer a trade-in/exchange policy for older models?",
      answer: "Yes, we do! You can bring your older smartphone or smart watch to any of our physical corporate outlets, or apply online for a standard trade-in evaluation to receive instant store credits."
    },
    {
      question: "What does the 7-day replacement warranty cover?",
      answer: "It covers any out-of-the-box hardware manufacturing defects, network issues, or screen anomalies. As long as there is no physical or liquid damage caused by the user, we swap it instantly."
    }
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-slate-950 py-24 px-6 border-b border-white/5">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Queries</span>
          </h2>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeUp
                key={idx}
                delay={idx * 50}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen ? "border-cyan-500/30 bg-white/[0.05]" : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left border-none bg-transparent cursor-pointer focus:outline-none"
                >
                  <span className={`font-bold text-base md:text-lg transition-colors duration-200 ${isOpen ? "text-cyan-400" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <span className={`text-xl p-2 rounded-xl bg-white/5 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : "text-gray-400"}`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                {/* Smooth Collapsible Content Container */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="p-6 text-gray-400 text-sm leading-7">
                    {faq.answer}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechFAQ;