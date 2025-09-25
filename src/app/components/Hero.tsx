// components/Hero.tsx
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <Image
        src="/images/profile.png" // add your photo in public/images
        alt="Asybel Bintang"
        width={120}
        height={120}
        className="rounded-full border-4 border-gray-200 shadow-lg mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">Asybel Bintang</h1>
      <p className="text-lg text-gray-600 mb-6">
        Architecture Student @ ITB · Exploring BIM, Data, and Design Systems
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-700"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
