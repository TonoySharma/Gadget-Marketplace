"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { JSX } from "react/jsx-runtime";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

interface FooterLink {
  name: string;
  path: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com",
  },
];

const shopLinks: FooterLink[] = [
  {
    name: "5G Flagships",
    path: "/products?category=5g",
  },
  {
    name: "Gaming Phones",
    path: "/products?category=gaming",
  },
  {
    name: "Foldable Series",
    path: "/products?category=foldable",
  },
  {
    name: "Smart Watches",
    path: "/products?category=watches",
  },
  {
    name: "Accessories",
    path: "/products?category=accessories",
  },
];

const supportLinks: FooterLink[] = [
  {
    name: "Track Your Order",
    path: "/order-tracking",
  },
  {
    name: "Warranty Policy",
    path: "/warranty",
  },
  {
    name: "Easy Returns",
    path: "/returns",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    path: "/terms",
  },
];

export default function Footer(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-gray-400">
      {/* Glow */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 pb-12 pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight text-white"
            >
              NEXT
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                GEN
              </span>
            </Link>

            <p className="text-sm leading-6">
              Experience the pinnacle of mobile technology. We bring you the
              world finest smartphones with fast worldwide delivery.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-6 border-l-2 border-cyan-400 pl-3 text-base font-bold uppercase text-white">
              Shop Categories
            </h4>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 border-l-2 border-cyan-400 pl-3 text-base font-bold uppercase text-white">
              Support
            </h4>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 border-l-2 border-cyan-400 pl-3 text-base font-bold uppercase text-white">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <span>
                  Level 4, Gadget Tower, Agargaon Tech Zone,
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <a
                  href="tel:+880 13*******"
                  className="hover:text-cyan-400"
                >
                  +880 13*******
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a
                  href="mailto:support@nextgen.com"
                  className="hover:text-cyan-400"
                >
                  support@nextgen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">
              NEXTGEN Mobile Ltd.
            </span>{" "}
            All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            Back to Top
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}