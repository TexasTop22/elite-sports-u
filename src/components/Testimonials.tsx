"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jorge L.",
    title: "Business Owner and High School Coach, 48",
    quote:
      "Coming off 2 achilles surgeries in 1.5 years, I was overweight, unmotivated, and depressed. Elite Sports U has been the perfect fit and has helped me find my motivation to workout again. It’s improved my strength and energy levels tremendously.",
    rating: 5,
  },
  {
    name: "Brian W.",
    title: "Ex-High School Football Player",
    quote:
      "It brings back the nostalgic feel of the high school weight room with all of your teammates hyping you up. The coaches are phenomenal at their jobs and keeping everyone safe while pushing for results.",
    rating: 5,
  },
  {
    name: "Sharon F.",
    title: "46-Year-Old Mom of 2",
    quote:
      "I am 46 and the strongest I have ever been by being consistent at Elite Sports U. It has given me the confidence that I needed after having two children. The feeling you get after every workout is unmatched!",
    rating: 5,
  },
  {
    name: "Sophia R.",
    title: "Parent of High School Athlete",
    quote:
      "Every day, training makes my daughter’s performance in her sport stronger. Since it’s volleyball, the difference in her performance has been noticeable since she started training with Elite Sports U.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-24 bg-gray-100 text-gray-900"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-10">
          What Our Members Say About{" "}
          <span className="text-red">Training With Us</span>
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-[45%] -translate-y-1/2 left-0 md:-left-10 z-20 hidden md:flex">
          <button
            className="swiper-button-prev-custom flex items-center justify-center w-12 h-12 rounded-full bg-red hover:bg-red/80 transition shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
        </div>
        <div className="absolute top-[45%] -translate-y-1/2 right-0 md:-right-10 z-20 hidden md:flex">
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
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full border border-gray-200 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-red mb-4 animate-pulse-glow">
                    <Quote className="text-white" size={20} />
                    <span className="absolute inset-0 rounded-full bg-red opacity-30 blur-md animate-pulse-ring" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{t.title}</p>
                  <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
                </div>
                <div className="flex justify-center gap-1 text-red mt-auto hover:animate-pulse-glow">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination mt-6 !static"></div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Red Pagination Dots */
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
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(225, 6, 0, 0.6);
        }

        /* Glow Animations */
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 0, 0, 0.9);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite ease-in-out;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s infinite ease-out;
        }
      `}</style>
    </section>
  );
}
