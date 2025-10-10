import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy text-white text-center px-6 relative overflow-hidden">
      {/* --- Decorative Background Glow --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-navy to-black opacity-90 z-0" />

      {/* --- Content --- */}
      <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Elite Sports U Logo"
          width={180}
          height={80}
          className="mb-8 drop-shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-red uppercase tracking-wide animate-fadeIn">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          You’ve successfully joined our Elite Sports University mailing list.  
          Stay tuned for new programs, events, and updates — we can’t wait to help you <span className="text-red font-semibold">Train Like the Elite.</span>
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-red text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-red transition shadow-lg shadow-red/50 uppercase tracking-wide"
        >
          Back to Home
        </Link>
      </div>

      {/* --- Subtle Overlay Design (optional) --- */}
      <div className="absolute -bottom-20 left-0 right-0 h-64 bg-gradient-to-t from-red/30 to-transparent blur-3xl z-0" />
    </main>
  );
}
