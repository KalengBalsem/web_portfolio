// components/Navbar.tsx
"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl">
          @asybel.bp
        </Link>

        {/* Nav links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-600 transition-color scroll-smooth">
            Projects
          </a>
          <a href="#experiences" className="hover:text-blue-600 transition-colors scroll-smooth">
            Experiences
          </a>
        </div>
      </div>
    </nav>
  );
}
