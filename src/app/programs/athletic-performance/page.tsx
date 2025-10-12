import Image from "next/image";
import Link from "next/link";
import WeeklyFocus from "../../../components/WeeklyFocus_athletes";
import Footer from "../../../components/Footer";
import { Dumbbell, Activity, Timer } from "lucide-react";

export default function AthleticPerformance() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ─── BREADCRUMB ─── */}
      <nav className="w-full bg-gray-100 border-b border-gray-200 py-3 px-6 text-sm md:text-base">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-gray-600">
          <Link
            href="/"
            className="hover:text-red font-semibold transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href="/programs"
            className="hover:text-red font-semibold transition-colors"
          >
            Programs
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-navy font-bold">Athletic Performance Training</span>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/athletic-performance-hero.jpg"
          alt="Athletic Performance Training"
          fill
          className="object-cover brightness-[0.9]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white leading-tight drop-shadow-lg">
            Power. Speed. Precision.
            <br />
            <span className="text-red">Train Like an Athlete.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Our elite-level coaching and proven methodology focus on building 
            explosive strength, balance, coordination, and top-tier athletic performance.
          </p>
          <Link
            href="https://app.glofox.com/portal/#/branch/6350b2f1c42ac18c9b0dc8e5/memberships"
            className="inline-block mt-8 bg-red text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-red transition shadow-lg shadow-red/50"
          >
            Start Training
          </Link>
        </div>
      </section>

      {/* ─── PROGRAM OVERVIEW ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
            What Is Athletic Performance Training?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Athletic Performance Training is engineered to help youth and adult athletes 
            improve power, agility, and overall sports readiness. Our sessions incorporate 
            strength, speed, mobility, and recovery principles to help you move with precision and confidence. 
            <br /><br />
            Whether you’re on the field, the court, or the track, our science-backed programming 
            pushes your limits safely and effectively — transforming how your body performs in motion.
          </p>
        </div>
      </section>

      {/* ─── WHAT YOU’LL GET ─── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-navy uppercase mb-10">
            STRENGTH. SPEED. STAMINA.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Power & Explosiveness",
                desc: "Increase vertical jump, sprint acceleration, and strength with Olympic-style lifts and advanced plyometrics. → Power in motion.",
                img: "/images/power.png",
                icon: <Dumbbell className="text-red w-6 h-6 inline-block mr-2" />,
              },
              {
                title: "Agility & Mobility",
                desc: "Train movement control, balance, and dynamic mobility through multi-directional drills designed to improve body awareness and coordination.",
                img: "/images/agility.png",
                icon: <Activity className="text-red w-6 h-6 inline-block mr-2" />,
              },
              {
                title: "Endurance & Conditioning",
                desc: "Boost cardiovascular performance and muscular endurance to stay strong from start to finish. → Breathe better. Move faster. Last longer.",
                img: "/images/endurance.png",
                icon: <Timer className="text-red w-6 h-6 inline-block mr-2" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-[1.02] overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 flex items-center justify-center">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE STATS ─── */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { stat: "90 Min", label: "Performance-Focused Training" },
            { stat: "100%", label: "Custom Coaching Approach" },
            { stat: "Elite", label: "Athletes Trained Year-Round" },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-5xl font-extrabold text-red">{item.stat}</h3>
              <p className="mt-2 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── WEEKLY FOCUS ─── */}
      <WeeklyFocus />

      {/* ───── CTA Banner ───── */}
      <section className="relative py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/athletic-performance-hero.jpg"
            alt="Athletes training hard"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-red/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase leading-snug">
            Ready to Perform at Your Peak?
          </h2>
          <Link
            href="https://app.glofox.com/portal/#/branch/6350b2f1c42ac18c9b0dc8e5/memberships"
            className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg shadow-red/50"
          >
            Start Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
