"use client";

import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";


interface Review {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

export default function Testimonials() {
  // Premium tech-focused customer review data
  const reviews: Review[] = [
    {
      name: "Lawrence L. Nones",
      role: "Tech Enthusiast",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "NextGen's gadget collection is absolutely mind-blowing! I bought their latest foldable flagship series. The delivery speed and premium customer support exceeded all my expectations."
    },
    {
      name: "Augusta Wind",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "I needed a reliable flagship device for mobile app testing. Not only are their prices highly competitive, but the product authenticity is also crystal clear. A solid 5-star experience!"
    },
    {
      name: "Stefanie Rashford",
      role: "Tech Reviewer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "Finding a trusted source for genuine global edition smartphones is tough. This platform completely eliminated that worry. Highly recommended for any true tech lover!"
    },
    {
      name: "Michael Carter",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment:
        "Outstanding shopping experience! My smartphone arrived earlier than expected and everything was perfectly sealed."
    },


  ];

  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden border-b border-white/5">
      {/* Background Neon Blur Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
            User Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
            What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Global Community</span> Says
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Real stories and honest feedback directly from our verified premium device buyers.
          </p>
        </div>

        {/* Testimonials Grid Card Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className="relative group rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.07] to-transparent p-8 backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-2"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-300 text-6xl pointer-events-none">
                <FaQuoteLeft />
              </div>

              {/* Star Rating Layout */}
              <div className="flex items-center gap-1 mb-6 text-amber-400 text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm leading-7 min-h-[110px] italic">
                {review.comment}
              </p>

              {/* User Bio Footer inside Card */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-cyan-500/50 transition-all duration-300">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base tracking-wide transition-colors duration-300 group-hover:text-cyan-400">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}