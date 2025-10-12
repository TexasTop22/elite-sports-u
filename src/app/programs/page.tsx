"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ─── HERO SECTION ─── */}
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

      {/* ─── ELITE PERSONAL TRAINING ─── */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold uppercase text-navy mb-4">
            Elite Personal Training
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            One-on-one, personalized coaching to help you reach your peak. Every session
            is customized to your goals, fitness level, and schedule — giving you the
            attention and accountability you deserve.  
            <br />
            <strong className="text-red">Available Everyday</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/personal-training.png"
              alt="Elite Personal Training"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-extrabold text-navy mb-4">
              Personalized Coaching. Real Results.
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether your goal is fat loss, muscle gain, mobility, or performance, 
              our certified coaches create a plan that fits your body and lifestyle. 
              Experience the power of precision training with measurable progress every week.
            </p>
            <Link
              href="https://app.glofox.com/portal/#/branch/6350b2f1c42ac18c9b0dc8e5/memberships"
              className="inline-block bg-red text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-red transition shadow-lg shadow-red/40"
            >
              Start Personal Training
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ELITE FIT CLUB ─── */}
      <section className="max-w-7xl mx-auto py-20 px-6 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold uppercase text-navy mb-4">
            Elite Fit Club
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Push beyond limits. Build strength, power, and confidence through our
            signature functional training system designed for adults of all fitness levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "SWEAT Fitness Lab",
              schedule: "Sat, Fri",
              img: "/images/sweat.png",
              desc: "Full-body cardio & endurance workouts focused on calorie burn, conditioning, and high energy.",
            },
            {
              title: "MOVEMENT",
              schedule: "Thu, Mon",
              img: "/images/movement.png",
              desc: "Dynamic strength and mobility sessions to help you move better and recover faster.",
            },
            {
              title: "RECOVERY",
              schedule: "Fri, Sun",
              img: "/images/recovery.png",
              desc: "Deep tissue mobility, stretching, and restorative training to recharge your body and mind.",
            },
            {
              title: "STRENGTH",
              schedule: "Tues, Wed",
              img: "/images/strength.png",
              desc: "Olympic lifts and resistance training to build lean muscle, endurance, and explosive power.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.schedule}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  href="/programs/elite-fit-club"
                  className="inline-block bg-red text-white font-bold px-6 py-2 rounded-full hover:bg-navy transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ATHLETIC PERFORMANCE TRAINING ─── */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold uppercase text-navy mb-4">
            Athletic Performance Training
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Train like the pros. Our D1-inspired program develops speed, agility, power,
            and endurance with proven methods for youth and competitive athletes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Elite Athlete Performance",
              schedule: "Wed, Mon, Thu, Sat",
              img: "/images/advanced-performance.png",
              desc: "High-level strength, mobility, and skill sessions tailored for competitive athletes.",
            },
            {
              title: "Elite Athlete Performance",
              schedule: "Tues, Thu",
              img: "/images/elite-performance.png",
              desc: "Athlete-specific drills to enhance speed, agility, and explosive movement.",
            },
            {
              title: "Ground Zero Performance",
              schedule: "Sun, Wed, Mon",
              img: "/images/ground-zero.png",
              desc: "Foundation-building performance training focusing on balance, core, and control.",
            },
            {
              title: "Linebacker Skills Training",
              schedule: "Sun",
              img: "/images/linebacker.png",
              desc: "Position-specific drills to enhance tackle mechanics, reaction time, and footwork.",
            },
            {
              title: "Speed & Explosion Training (VertiMax)",
              schedule: "Thu, Sat, Tue",
              img: "/images/speed-explosion.png",
              desc: "VertiMax-powered workouts to maximize vertical leap and sprint acceleration.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-navy mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.schedule}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  href="/programs/athletic-performance"
                  className="inline-block bg-navy text-white font-bold px-6 py-2 rounded-full hover:bg-red transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="relative py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elite-fit-hero.png"
            alt="Athletes training hard"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-red/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase leading-snug">
            Ready to Train Like the Elite?
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg shadow-red/50"
          >
            Join Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
