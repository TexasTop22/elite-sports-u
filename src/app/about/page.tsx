"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import FiveStarTraining from "../../components/FiveStarTraining";
import { ShieldCheck, Users, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const pillars = [
    {
      title: "Discipline",
      desc: "Consistency builds champions. We train with purpose every session, reinforcing habits that create success inside and outside the gym.",
      icon: <ShieldCheck className="w-10 h-10 text-red mb-4" />,
    },
    {
      title: "Community",
      desc: "No one trains alone. Our team-driven environment empowers athletes and members to push harder, encourage one another, and grow together.",
      icon: <Users className="w-10 h-10 text-red mb-4" />,
    },
    {
      title: "Accountability",
      desc: "Your goals become our mission. Every coach, class, and program is designed to help you stay committed, supported, and on track to succeed.",
      icon: <Target className="w-10 h-10 text-red mb-4" />,
    },
    {
      title: "Growth",
      desc: "From youth athletes to adults, we believe in progress over perfection — challenging you to evolve physically, mentally, and spiritually.",
      icon: <TrendingUp className="w-10 h-10 text-red mb-4" />,
    },
  ];
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* ─── HERO SECTION ─── */}
<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
  <Image
    src="/images/about-hero.png"
    alt="Elite Sports University Athlete"
    fill
    className="object-cover brightness-[0.9]" // lighter image
    priority
  />

  {/* Softer gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

  {/* Optional fade bottom for readability */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />

  <div className="relative z-10 text-center px-6 max-w-3xl drop-shadow-lg">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-tight">
      What is <span className="text-red">Elite Sports University?</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-100 mt-4 font-medium max-w-2xl mx-auto">
      Built on Division I-level training methods and powered by passion, discipline, and purpose.
    </p>
  </div>
</section>


      {/* ─── MISSION SECTION ─── */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
            Set Goals. Achieve Results.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-red">Elite Sports University</span>, we deliver 
            purpose-driven training programs designed to help every athlete and individual 
            reach their full potential — physically, mentally, and competitively. Whether you’re 
            an aspiring athlete, a weekend warrior, or simply chasing your best self, 
            our methods build strength, confidence, and results.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Our system is rooted in <span className="font-semibold">sports science</span>, guided by 
            experienced coaches, and structured around accountability, intensity, and measurable 
            progress. From speed and agility development to recovery and resilience, every session 
            is intentional — because we don’t just train, we transform.
          </p>
        </div>
      </section>

      {/* ─── CORE VALUES / PILLARS ─── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {pillar.icon}
                  <h3 className="text-xl font-bold text-navy mb-3 uppercase tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ─── TRAINING TYPES ─── */}
<section className="py-24 bg-white text-center">
  <div className="max-w-6xl mx-auto px-6">
    <h2
  className="section-heading text-3xl md:text-4xl mb-8"
  data-aos="fade-up"
>
      Training Types
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Elite Personal Training",
          desc: "Work 1-on-1 with an expert Elite Sports U coach using a fully customized plan built around your goals, needs, and schedule. Personalized performance, measurable results.",
          img: "/images/personal-training.jpg",
        },
        {
          title: "Elite Fit Club",
          desc: "Push beyond limits in our high-energy group sessions. Strength, sweat, and movement blend into total-body conditioning that builds endurance and confidence.",
          img: "/images/elite-fit.png",
        },
        {
          title: "Athletic Performance Training",
          desc: "Train like a pro. Develop explosive power, speed, and agility through structured sessions that mirror Division I-level programming and sports science precision.",
          img: "/images/athletic-performance.jpg",
        },
      ].map((item, i) => (
        <div
          key={item.title}
          data-aos="fade-up"
          data-aos-delay={i * 150} // small stagger
          className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500"
        >
          {/* Background Image */}
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-white text-center p-8 h-full">
            <h3 className="text-2xl font-extrabold uppercase mb-4 drop-shadow-md">
              {item.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-xs mx-auto text-gray-200">
              {item.desc}
            </p>

            <Link
              href={
                item.title === "Elite Personal Training"
                  ? "/programs/elite-personal-training"
                  : item.title === "Elite Fit Club"
                  ? "/programs/elite-fit-club"
                  : "/programs/athletic-performance"
              }
              className="mt-6 inline-block bg-red text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-red transition shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ─── OWNERS TALK TRAINING SECTION ─── */}
<section className="relative py-20 bg-gray-100 text-center overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Heading */}
    <h2
      className="section-heading text-3xl md:text-4xl font-extrabold text-navy uppercase mb-8"
      data-aos="fade-up"
    >
      Owners Talk Training at Elite
    </h2>

    <p
      className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      Hear directly from our owners as they share what makes Elite Sports University different—
      our coaching philosophy, our athlete-first approach, and how we build both performance
      and character through disciplined, evidence-based training.
    </p>

    {/* Video Placeholder */}
    <div
      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-red"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      {/* Replace the src below with your YouTube or MP4 link */}
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        title="Owners Talk Training at Elite"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Optional: overlay label */}
      <div className="absolute top-4 left-4 bg-red text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
        Featured Video
      </div>
    </div>
  </div>

  {/* Background accent */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-200 opacity-50 pointer-events-none" />
</section>

<FiveStarTraining />

      {/* ─── CTA SECTION ─── */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elite-fit-hero.png" // ← add your background image here
            alt="Athlete training background"
            fill
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-red/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">
            Train With Purpose. Perform With Passion.
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg shadow-red/50"
          >
            Get Started
          </Link>
        </div>
      </section>
       <Footer />
    </main>
  );
}
