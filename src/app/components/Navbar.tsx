// components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold">
          Asybel Bintang
        </Link>

        {/* Nav links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#experiences" className="hover:text-blue-600 transition-colors">
            Experiences
          </a>
        </div>
      </div>
    </nav>
  );
}
