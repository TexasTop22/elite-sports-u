"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function WeeklyFocus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const days = [
    { day: "Sunday", focus: "Elite Fit Club: RECOVERY", img: "/images/recovery.png" },
    { day: "Monday", focus: "Elite Fit Club: Movement", img: "/images/movement.png" },
    { day: "Tuesday", focus: "Elite Fit Club: Strength", img: "/images/strength.png" },
    { day: "Wednesday", focus: "Elite Fit Club: Sweat", img: "/images/sweat.jpg" },
    { day: "Thursday", focus: "Elite Fit Club: Movement", img: "/images/monday.jpg" },
    { day: "Friday", focus: "Elite Fit Club : SWEAT fitness LAB", img: "/images/saturday.png" },
    { day: "Saturday", focus: "Elite Fit Club : SWEAT fitness LAB", img: "/images/saturday.jpg" },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
          Weekly Focus
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          We strategically program our workouts each week ensuring a balanced and consistent approach. 
          Although we train the full body every day, our workouts have been programmed with these daily focuses 
          to maximize results, minimize the risk of injury, and allow proper recovery that limits over-training any one area.
        </p>

        <Slider {...settings}>
          {days.map((item) => (
            <div key={item.day} className="px-4">
              <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.03]">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.img}
                    alt={`${item.day} workout`}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition"
                  />
                </div>
                <div className="p-4">
                  <div className="h-1 w-10 bg-red mx-auto mb-3" />
                  <h3 className="text-xl font-extrabold uppercase">{item.day}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

