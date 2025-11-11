"use client";

import { useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videos = [
  {
    title: "Come Be Elite with Ryan",
    thumbnail: "/videos/Ryan Come Be Elite-thumb.jpg",
    src: "/videos/Ryan Come Be Elite.mp4",
  },
  {
    title: "Come Be Elite with Mook",
    thumbnail: "/videos/Mook Come Be Elite-thumb.jpg",
    src: "/videos/Mook Come Be Elite.mp4",
  },
  {
    title: "Community Come Be Elite",
    thumbnail: "/videos/Community Come Be Elite-thumb.jpg",
    src: "/videos/Community Come Be Elite.mp4",
  },
];

export default function StoryInMotion() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Allow closing modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
          Our Story in <span className="text-red">Motion</span>
        </h2>

        {/* CTA */}
        <Link
          href="/videos"
          className="inline-block mb-12 bg-red text-white font-bold text-lg uppercase tracking-wide px-10 py-4 rounded-full hover:bg-red/80 transition shadow-[0_0_25px_rgba(255,0,0,0.5)]"
        >
          Watch All Videos
        </Link>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 z-20 hidden md:flex">
          <button
            className="swiper-button-prev-custom flex items-center justify-center w-12 h-12 rounded-full bg-red hover:bg-red/80 transition shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 z-20 hidden md:flex">
          <button
            className="swiper-button-next-custom flex items-center justify-center w-12 h-12 rounded-full bg-red hover:bg-red/80 transition shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full rounded-lg overflow-hidden shadow-lg group">
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-64 object-cover brightness-[0.85] group-hover:brightness-[1.1] transition"
                />

                {/* Play Button */}
                <button
                  onClick={() => setActiveVideo(video.src)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                >
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-red shadow-[0_0_25px_rgba(255,0,0,0.6)] animate-pulse-glow">
                    <Play className="text-white" size={32} />
                    <span className="absolute inset-0 rounded-full bg-red opacity-40 blur-xl animate-pulse-ring" />
                  </div>
                </button>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-white uppercase">
                  {video.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination mt-8 !static"></div>

        {/* Modal Video Player */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-[9999] p-6"
            onClick={() => setActiveVideo(null)}
          >
            {/* Close Button (anchored to viewport) */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-[10000] w-12 h-12 flex items-center justify-center rounded-full bg-red text-white text-3xl font-bold hover:bg-red/80 transition"
              aria-label="Close video"
            >
              ×
            </button>

            {/* Prevent click propagation when clicking inside video */}
            <div
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Move and style pagination dots */
        .swiper-pagination {
          position: static !important;
          margin-top: 1rem;
        }
        .swiper-pagination-bullet {
          background: #ccc !important;
          opacity: 1 !important;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #e10600 !important;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(225, 6, 0, 0.6);
        }

        /* Glow Animations */
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 0, 0, 0.9);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s infinite ease-in-out;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2.5s infinite ease-out;
        }
      `}</style>
    </section>
  );
}
