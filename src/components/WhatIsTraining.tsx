"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const accordionItems = [
  {
    title: "Training",
    content:
      "Our program uses Division 1-level strength and conditioning principles to develop speed, power, and discipline for all athletes — youth to adult.",
  },
  {
    title: "Facility",
    content:
      "Train in a professional-grade environment equipped with turf fields, squat racks, sleds, and recovery tools to maximize performance.",
  },
  {
    title: "Character",
    content:
      "We train the person as much as the athlete. Discipline, accountability, and leadership are built into every session.",
  },
  {
    title: "Community",
    content:
      "Every athlete belongs here. Our supportive community celebrates progress, teamwork, and the pursuit of excellence.",
  },
];

export default function WhatIsTraining() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPause = async () => {
    try {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.muted = false; // unmute on play
          await videoRef.current.play();
          setIsPlaying(true);
        }
      }
    } catch (err) {
      console.error("Video playback error:", err);
    }
  };

  return (
    <section className="relative w-full py-24 bg-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Subtle top fade to blend into Hero section */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/40 to-transparent z-0" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left z-10">

        {/* LEFT COLUMN */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-navy uppercase leading-tight">
            What Is <span className="text-red">Elite Training?</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg border-l-4 border-red pl-4">
            Training for youth and adults. Modeled after Division 1 strength and
            conditioning principles.
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
            {/* Video */}
            <video
              ref={videoRef}
              src="/videos/elite-video.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0"
              loop
              playsInline
            />

            {/* Overlay and Controls */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center bg-black/30 group-hover:bg-black/50 transition">
              <div className="absolute top-6 left-6 bg-red text-white px-4 py-1 uppercase font-bold text-sm rounded">
                What’s Elite?
              </div>
              <button
                onClick={handlePlayPause}
                className="flex items-center justify-center w-16 h-16 rounded-full bg-red hover:bg-red/80 transition shadow-[0_0_25px_rgba(255,0,0,0.6)]"
              >
                {isPlaying ? (
                  <Pause className="text-white" size={32} />
                ) : (
                  <Play className="text-white" size={32} />
                )}
              </button>
            </div>
          </div>

          <button className="mt-8 bg-red text-white font-bold text-lg uppercase tracking-wide px-10 py-4 rounded-full hover:bg-red/80 transition shadow-lg">
            Find a Facility
          </button>
        </div>
      </div>
    </section>
  );
}
