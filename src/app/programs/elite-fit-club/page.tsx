import Image from "next/image";
import Link from "next/link";
import WeeklyFocus from "../../../components/WeeklyFocus";
import Footer from "../../../components/Footer";


export default function EliteFitClub() {
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
          <span className="text-navy font-bold">Elite Fit Club</span>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/elite-fit-hero.png"
          alt="Elite Fit Club Training"
          fill
          className="object-cover brightness-[0.9]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white leading-tight drop-shadow-lg">
            Push Beyond Limits.
            <br />
            <span className="text-red">Train Like the Elite.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Build strength, endurance, and confidence in a team-driven atmosphere
            designed for everyday athletes ready to perform like pros.
          </p>
          <Link
            href="https://app.glofox.com/portal/#/branch/6350b2f1c42ac18c9b0dc8e5/memberships"
            className="inline-block mt-8 bg-red text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-red transition shadow-lg shadow-red/50"
          >
            Join the Club
          </Link>
        </div>
      </section>

      {/* ─── PROGRAM OVERVIEW ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
            What Is Elite Fit Club?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to ELITE CLUB FIT, where you will enjoy UNLIMITED access and a 
            unified experience designed to build strength, enhance conditioning, 
            and unlock your athletic potential. 
            Elite Fit Club is more than just a workout — it’s a community built
            on discipline, energy, and results. Designed for youth and adults,
            this program blends functional movement, strength training, and
            endurance conditioning for total athletic development.
          
          Ready to Train With Us? Check the schedule, book your spot, and discover the CLUB difference. These group fitness classes cater to all levels, offering total-body workouts that deliver results in no time.
          </p>
        </div>
      </section>

      {/* ─── WHAT YOU’LL GET ─── */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-navy uppercase mb-10">
            STRENGTH. CONDITIONING. COMMUNITY.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CLUB Strength",
                desc: "Boost your strength and explosiveness with Olympic lift variations, resistance training, and progressive overload. Technical coaching ensures safe, measurable progress every session, whether you're building power or perfecting your form. → Barbells. Precision. Progress you can feel.",
                img: "/images/strength.png",
              },
              {
                title: "CLUB Sweat",
                desc: "Full-body conditioning that combines strength, cardio, and athletic movement in a high-energy, coach-led format. Perfect for those who thrive on variety, intensity, and community spirit. → Fast-paced. Full-body. Fueled by the squad.",
                img: "/images/sweat.png",
              },
              {
                title: "CLUB Movement",
                desc: "Enhance fitness through dynamic movement, strength activation, and plyometric drills. This format blends mobility, explosive exercises, and functional strength to boost athleticism and conditioning simultaneously. → Mobility meets power. Move better, jump higher, train smarter.",
                img: "/images/movement.png",
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
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
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
            { stat: "60 Min", label: "High-Intensity Sessions" },
            { stat: "100%", label: "Coach-Led Every Class" },
            { stat: "365", label: "Days of Motivation" },
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

      {/* ─── CTA ─── */}
      <section className="py-20 bg-red text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">
          Ready to Build Your Best Self?
        </h2>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition"
        >
          Book a Free Session
        </Link>
      </section>
      <Footer />
    </main>
  );
}
