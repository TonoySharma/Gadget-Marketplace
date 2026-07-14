"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${className} ${
       isActive ? "border-b-2 border-b-indigo-500 text-indigo-600" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;