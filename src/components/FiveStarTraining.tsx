"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FiveStarTraining() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const steps = [
    {
      step: "01",
      title: "Dynamic Warm-Up",
      desc: "We kick off every session with movement-based drills that get your body loose, activated, and ready to perform.",
    },
    {
      step: "02",
      title: "Performance Training",
      desc: "Speed, agility, and explosiveness — we train the way athletes move, helping you build real power and quickness.",
    },
    {
      step: "03",
      title: "Strength Development",
      desc: "Build total-body strength with proven, progressive training designed to match your goals and your grind.",
    },
    {
      step: "04",
      title: "Core & Conditioning",
      desc: "Level up your stamina and core stability with targeted work that pushes your endurance and sharpens your edge.",
    },
    {
      step: "05",
      title: "Cool-Down",
      desc: "End every workout with our guided cooldown to improve recovery, reduce soreness, and set you up for your next session.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE – Accordion List */}
        <div data-aos="fade-right">
          <p className="text-red font-bold uppercase tracking-wider mb-2">
            How We Work Out
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 leading-tight">
            5-Star Training
          </h2>

          <div className="space-y-4">
            {steps.map((item, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-4 focus:outline-none group transition-colors duration-300 hover:bg-red/10"
                  onClick={() => toggleItem(i)}
                >
                  <div className="flex items-center space-x-3">
                    {openItems.includes(i) ? (
                      <Minus className="w-5 h-5 text-red transition-colors duration-300 group-hover:text-red" />
                    ) : (
                      <Plus className="w-5 h-5 text-navy transition-colors duration-300 group-hover:text-red" />
                    )}
                    <h3
                      className={`font-extrabold uppercase text-base md:text-lg transition-colors duration-300 ${
                        openItems.includes(i)
                          ? "text-red"
                          : "text-navy group-hover:text-red"
                      }`}
                    >
                      {item.step} {item.title}
                    </h3>
                  </div>
                </button>

                {/* Smooth expand/collapse */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(i)
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-10 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-200">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Text + CTA */}
        <div
          className="text-center md:text-left flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-6">
            <span className="block text-gray-400 font-semibold">
              Elite Sports University Coaches Lead
            </span>
            <span className="block text-black">
              A <span className="text-red">54-Minute</span> Workout
            </span>
          </h3>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Every class is coached by certified professionals who focus on proper
            form, motivation, and measurable results — giving you a
            high-impact session that’s safe, efficient, and elite.
          </p>

          <a
            href="/contact"
            className="inline-block bg-red text-white font-bold px-8 py-3 rounded-full hover:bg-navy transition shadow-md shadow-red/40"
          >
            Find a Facility
          </a>
        </div>
      </div>
    </section>
  );
}
