import Image from "next/image";
import Link from "next/link";

export default function TrainingPrograms() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy uppercase mb-12">
          Elite Fit <span className="text-red">and </span> Athletic Performance
        </h2>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* ELITE FIT */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-[1.03] transition duration-300">
              <Image
                src="/images/Elitefit.png"
                alt="Elite Fit Training"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </div>

            <h3 className="text-2xl font-extrabold text-navy mt-6">
              Elite Fit Training
            </h3>
            <p className="mt-4 text-gray-700 text-lg max-w-md">
              Group-based workouts that build endurance, strength, and discipline
              in a team setting. Designed for youth and adults who want to move,
              lift, and feel like athletes — no matter their fitness level.
            </p>

            <Link
              href="/programs/elite-fit-club"
              className="mt-6 bg-red text-white font-bold px-8 py-3 rounded-full hover:bg-red/80 transition shadow-md"
            >
              Learn More
            </Link>
          </div>

          {/* ATHLETIC PERFORMANCE TRAINING */}
          <div className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden shadow-lg hover:scale-[1.03] transition duration-300">
              <Image
                src="/images/sportstraining.png"
                alt="Athletic Performance Training"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </div>

            <h3 className="text-2xl font-extrabold text-navy mt-6">
              Athletic Performance Training
            </h3>
            <p className="mt-4 text-gray-700 text-lg max-w-md">
              High-performance training designed to enhance speed, agility,
              explosiveness, and overall athletic ability. Used by student and
              pro-level athletes who aim to dominate in competition.
            </p>

            <Link
              href="/programs/athletic-performance"
              className="mt-6 bg-red text-white font-bold px-8 py-3 rounded-full hover:bg-red/80 transition shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
