"use client";

import Image from "next/image";
import Footer from "../../components/Footer";
import { Users, HeartHandshake, Share2 } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EliteUPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // ✅ Dynamically load EmbedSocial script (only once)
    if (!document.getElementById("EmbedSocialHashtagScript")) {
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      document.head.appendChild(script);
    }

    // ✅ Resize listener to ensure EmbedSocial feed auto-expands
    const resizeFeed = () => {
      const embedContainer = document.querySelector(
        ".embedsocial-hashtag"
      ) as HTMLElement | null;
      if (embedContainer) {
        embedContainer.style.height = "auto"; // reset any fixed height
        embedContainer.style.minHeight = "500px";
      }
    };

    // Observe DOM changes from EmbedSocial iframe
    const observer = new MutationObserver(resizeFeed);
    const container = document.querySelector(".embedsocial-hashtag");
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/eliteu-hero.jpg"
          alt="Elite U community"
          fill
          className="object-cover brightness-[0.8]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white uppercase leading-tight drop-shadow-lg">
            Welcome to <span className="text-red">Elite U</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mt-4 font-medium max-w-2xl mx-auto">
            A space where athletes, coaches, and community come together — to
            train, connect, and inspire greatness.
          </p>
        </div>
      </section>

      {/* ─── SOCIAL FEED SECTION ─── */}
      <section id="social-feed" className="py-20 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6"
            data-aos="fade-up"
          >
            Social Feed
          </h2>

          <p
            className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            See what’s happening inside Elite Sports University. Stay connected
            with the latest posts, athlete highlights, and training insights
            from our community.
          </p>

          {/* ✅ EmbedSocial Feed */}
          <div
            className="embedsocial-hashtag mx-auto max-w-5xl transition-all duration-700 ease-in-out"
            data-ref="4ac863795f01181ebaee64cca86740c4977a01b9"
            style={{
              minHeight: "600px",
              width: "100%",
              overflow: "visible", // allow feed to expand naturally
            }}
          ></div>

          {/* ✅ Fallback for when JavaScript is disabled */}
          <noscript>
            <div className="bg-white text-gray-800 border border-gray-200 rounded-xl shadow-md p-8 text-center mt-8">
              <h3 className="text-2xl font-bold text-red mb-3">
                Instagram Feed
              </h3>
              <p className="text-gray-600 mb-4">
                It looks like our social feed didn’t load — but you can still
                follow us on Instagram for the latest updates and athlete
                highlights.
              </p>
              <a
                href="https://instagram.com/elite_sportsu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red text-white font-semibold px-6 py-3 rounded-full hover:bg-navy transition"
              >
                Visit @elite_sportsu
              </a>
            </div>
          </noscript>
        </div>
      </section>

      {/* ─── COMMUNITY SECTION ─── */}
      <section
        id="community"
        className="py-24 bg-white text-center border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6"
            data-aos="fade-up"
          >
            Community
          </h2>

          <p
            className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            At Elite Sports University, we believe in the power of connection —
            not just in the gym, but beyond it. Our community is built on
            encouragement, growth, and giving back.
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              {
                icon: <Users className="w-10 h-10 text-red mb-4" />,
                title: "Teamwork",
                desc: "We train together, push together, and celebrate success together — every rep, every win.",
              },
              {
                icon: <HeartHandshake className="w-10 h-10 text-red mb-4" />,
                title: "Giving Back",
                desc: "From youth mentorship to community outreach, we uplift our neighborhoods and the next generation.",
              },
              {
                icon: <Share2 className="w-10 h-10 text-red mb-4" />,
                title: "Stay Connected",
                desc: "Join our online groups and events to stay inspired and plugged into the Elite family.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-xl font-bold text-navy mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Athletes training background"
            fill
            className="object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-red/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase">
            Be Part of Something Bigger
          </h2>
          <p className="text-lg text-gray-100 mb-6">
            Connect. Train. Lead. Together, we build stronger athletes and
            stronger communities.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-white text-red font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg shadow-red/40"
          >
            Join the Movement
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
