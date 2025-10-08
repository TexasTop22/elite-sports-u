"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Elite Sports University Training"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center brightness-[1.25] contrast-[1.3] saturate-[1.4] scale-105 transition-transform duration-[2500ms] ease-out will-change-transform"
        />
        {/* Balanced Overlay – lighter for crisp whites */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      {/* Foreground Content */}
      <div
        className={`relative z-10 px-6 max-w-4xl transition-all duration-[1200ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-extrabold uppercase leading-tight text-white tracking-wide drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]">
          Unlock Your <span className="text-red">Elite</span> Potential
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100 font-light drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
          Train smarter. Get stronger. Perform better.{" "}
          <br className="hidden sm:block" />
          Join our{" "}
          <span className="text-red font-semibold">Elite Fit Club</span> or{" "}
          <span className="text-red font-semibold">
            Athletic Performance Training
          </span>{" "}
          today.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-red text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-red transition shadow-[0_0_25px_rgba(255,0,0,0.5)]"
          >
            Book a Free Session
          </Link>
          <Link
            href="/programs"
            className="border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-red transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            View Programs
          </Link>
        </div>
      </div>

      {/* Cinematic slow zoom */}
      <style jsx>{`
        section div:first-child img {
          animation: zoom 22s ease-in-out infinite alternate;
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
