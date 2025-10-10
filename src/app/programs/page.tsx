"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Elite Fit Club",
      desc: "Push beyond limits. Build strength, power, and confidence through our signature functional training system designed for adults of all fitness levels.",
      img: "/images/elite-fit.png",
      href: "/programs/elite-fit-club",
      color: "bg-red",
    },
    {
      title: "Athletic Performance Training",
      desc: "Train like the pros. Our D1-inspired program develops speed, agility, power, and endurance with proven methods for youth and competitive athletes.",
      img: "/images/athletic-performance.jpg",
      href: "/programs/athletic-performance",
      color: "bg-navy",
    },
    {
      title: "Youth Speed & Agility",
      desc: "Ignite their potential. Designed for young athletes, this program builds coordination, strength, and discipline for long-term success on and off the field.",
      img: "/images/youth-speed.jpg",
      href: "/programs/youth-speed-training",
      color: "bg-black",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative bg-navy text-white text-center py-28 px-6">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-4">
            Our <span className="text-red">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            From elite athletes to everyday champions — our training programs
            are designed to help you move better, feel stronger, and perform at your best.
          </p>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12">
        {programs.map((p, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl font-extrabold uppercase text-white tracking-wide">
                {p.title}
              </h3>
            </div>

            <div className="p-6 flex flex-col justify-between min-h-[220px]">
              <p className="text-gray-700 leading-relaxed mb-6">{p.desc}</p>
              <Link
                href={p.href}
                className={`inline-block text-center font-bold uppercase text-white px-8 py-3 rounded-full ${p.color} hover:opacity-90 transition`}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-red text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Train Like the Elite?
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition"
        >
          Book Your Free Session
        </Link>
      </section>
      <Footer />
    </main>
  );
}
