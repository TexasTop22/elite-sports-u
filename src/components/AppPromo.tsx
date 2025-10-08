"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function AppPromo() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT — Combined Mockup (no glow) */}
        <div className="relative flex justify-center md:w-1/2">
          <div className="relative w-[320px] h-[520px] md:w-[420px] md:h-[600px]">
            <Image
              src="/images/app-promo-combined.png"
              alt="Elite Sports U App Mockup"
              fill
              className="object-contain rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Text and CTA */}
        <div className="text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6">
            The Official <span className="text-red">Elite Sports</span> App
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-red mt-1" size={22} />
              <span>Easily book workouts & manage your membership</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-red mt-1" size={22} />
              <span>Improved family account management & linking</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-red mt-1" size={22} />
              <span>Access to daily news, athlete stories, and new gear drops</span>
            </li>
          </ul>

          <Link
            href="/app"
            className="inline-block mt-10 bg-red text-white font-bold text-lg uppercase tracking-wide px-10 py-4 rounded-full hover:bg-red/80 transition shadow-[0_0_30px_rgba(255,0,0,0.6)] animate-pulse-glow"
          >
            Get the App
          </Link>
        </div>
      </div>
    </section>
  );
}
