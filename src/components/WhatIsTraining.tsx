"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VIDEO_URL =
  "https://x3o8ckasms8hobdk.public.blob.vercel-storage.com/Elite%20U%20Morning%20Workout-9KKemKaRFIpg7mKq7kPhptwLUvCQzL.mp4";

const accordionItems = [
  {
    title: "Sports Performance",
    content:
      "Our Sports Performance programs are where discipline meets dominance. Speed, strength, skills, and resilience are built here—engineered for athletes to excel when it matters most. From developing youth to sharpening pros, every athlete is trained to elevate.",
  },
  {
    title: "Fitness Training",
    content:
      "Elite Fit Club is where fitness meets results. Built on accountability, class-based energy, and a supportive community, our programs deliver measurable progress and keep you locked in. Every session is designed to challenge, motivate, and transform—because here, consistency creates change.",
  },
  {
    title: "Nutrition & Recovery",
    content:
      "Fuel & Protect Body. Build habits that support Elite performance and long-term wellness.",
  },
  {
    title: "Community",
    content:
      "A supportive environment where athletes and fitness enthusiasts thrive, uplift each other, work toward the common goals, and relentlessly pursue excellence.",
  },
];

export default function WhatIsTraining() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 🎯 Lazy-load video when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVideoVisible(true);
        } else if (videoRef.current && !entry.isIntersecting) {
          // Auto-pause when leaving screen
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlayPause = async () => {
    try {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.muted = false;
          await videoRef.current.play();
          setIsPlaying(true);
        }
      }
    } catch (err) {
      console.error("Video playback error:", err);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-gray-100 border-t border-gray-200 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/40 to-transparent z-0" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left z-10">
        {/* LEFT COLUMN */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-navy uppercase leading-tight">
            What Is <span className="text-red">Elite Training?</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg border-l-4 border-red pl-4">
            Elite Training is a culture. We train with standards, show up with
            purpose, and grow through community. It’s movement, mentorship, and
            mutual accountability—every rep backed by a team that refuses to let
            you fall short. Here, you don’t just join a gym—you join the culture
            and the community.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md overflow-hidden bg-white/80 hover:bg-white transition"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-5 py-4 text-left font-bold text-lg uppercase tracking-wide"
                >
                  <span>{item.title}</span>
                  <span
                    className={`transition-transform duration-300 text-gray-600 text-2xl font-light ${
                      openIndex === index ? "rotate-45 text-red" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index ? "max-h-40 p-5" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="relative w-full h-64 sm:h-80 md:h-[340px] rounded-lg overflow-hidden shadow-lg group">
            {videoVisible ? (
              <video
  ref={videoRef}
  src={VIDEO_URL}
  className="absolute inset-0 w-full h-full object-cover z-0"
  loop
  playsInline
  preload="metadata"
/>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center text-white text-lg font-semibold">
                Loading video...
              </div>
            )}

            {/* Overlay and Main Controls */}
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 ${
                isPlaying
                  ? "bg-transparent opacity-0 pointer-events-none"
                  : "bg-black/40 group-hover:bg-black/60 opacity-100"
              }`}
            >
              {!isPlaying && (
                <div className="absolute top-6 left-6 bg-red text-white px-4 py-1 uppercase font-bold text-sm rounded">
                  What’s Elite?
                </div>
              )}

              {!isPlaying && videoVisible && (
                <button
                  onClick={handlePlayPause}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-red hover:bg-red/80 transition shadow-[0_0_25px_rgba(255,0,0,0.6)]"
                >
                  <Play className="text-white" size={32} />
                </button>
              )}
            </div>

            {/* Small pause button (bottom-right) */}
            {isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
                aria-label="Pause video"
              >
                <Pause size={18} />
              </button>
            )}
          </div>

          <button className="mt-8 bg-red text-white font-bold text-lg uppercase tracking-wide px-10 py-4 rounded-full hover:bg-red/80 transition shadow-lg">
            Find a Facility
          </button>
        </div>
      </div>
    </section>
  );
}
