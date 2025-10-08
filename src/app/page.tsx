import Image from "next/image";
import Link from "next/link";
import WhatIsTraining from "../components/WhatIsTraining";
import TrainingPrograms from "../components/TrainingPrograms";
import StoryInMotion from "../components/StoryInMotion";
import Testimonials from "../components/Testimonials";
import AppPromo from "../components/AppPromo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      
{/* ───── HERO ───── */}
<section className="relative flex flex-col justify-between items-center overflow-hidden bg-black h-screen">
  {/* Top Gradient Overlay */}
  <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-10" />

  {/* Bottom Gradient Overlay */}
  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

  {/* Hero Image */}
  <div className="relative flex justify-center items-center w-full flex-grow">
    <Image
      src="/images/hero-bg.png"
      alt="Elite Sports University Background"
      priority
      quality={100}
      sizes="100vw"
      unoptimized
      fill
      className="object-contain brightness-[1.35] contrast-[1.25] saturate-[1.35] transition-all duration-700"
    />
  </div>

  {/* Top Text Area */}
  <div
    className="absolute top-10 md:top-16 text-center z-20 opacity-0 translate-y-6 animate-[fadeUp_1s_ease-out_forwards]"
  >
    <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.6)]">
      Train Like the <span className="text-red">Elite</span>
    </h1>
  </div>

  {/* Bottom Button Area */}
  <div
    className="absolute bottom-10 md:bottom-16 z-20 flex flex-col md:flex-row gap-4 justify-center opacity-0 translate-y-6 animate-[fadeUp_1.5s_ease-out_forwards]"
  >
    <Link
      href="/programs"
      className="bg-red text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-red transition shadow-[0_0_25px_rgba(255,0,0,0.5)]"
    >
      View Programs
    </Link>
    <Link
      href="/contact"
      className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-navy transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    >
      Book a Free Session
    </Link>
  </div>
</section>

  {/* ───── TEMPORARILY REMOVED OVERLAY ───── */}
  {/*
  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none" />
  */}

  {/* Foreground Text 
  <div className="relative z-10 max-w-3xl px-6 text-white drop-shadow-[0_5px_20px_rgba(0,0,0,0.7)] animate-fadeIn">
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight text-white">
      Train Like the Elite
    </h1>
    <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-red font-semibold drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
      Become the Elite.
    </p>

    <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
      <Link
        href="/programs"
        className="bg-red text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-red transition shadow-[0_0_25px_rgba(255,0,0,0.5)]"
      >
        View Programs
      </Link>
      <Link
        href="/contact"
        className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-navy transition shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        Book a Free Session
      </Link>
    </div>
  </div>
</section>*/}

<WhatIsTraining />
<TrainingPrograms />
<StoryInMotion />
<Testimonials />
<AppPromo />   

      

      {/* ───── CTA Banner ───── */}
      <section className="py-20 bg-red text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Your Training to the Next Level?
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition"
        >
          Join Now
        </Link>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="bg-navy text-white text-center py-8 text-sm">
        <p>© {new Date().getFullYear()} Elite Sports U · All Rights Reserved</p>
        <p className="mt-2 text-red font-semibold">Train · Perform · Dominate</p>
      </footer>
    </main>
  );
}
