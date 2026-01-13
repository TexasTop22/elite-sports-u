"use client";

import Image from "next/image";
import Footer from "../../components/Footer";
import { Users, HeartHandshake, Share2 } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

declare global {
  interface Window {
    EmbedSocialHashtag?: {
      init: () => void;
    };
  }
}

export default function EliteUPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const initEmbedSocial = () => {
      if (window.EmbedSocialHashtag) {
        window.EmbedSocialHashtag.init();
      }
    };

    if (!document.getElementById("EmbedSocialHashtagScript")) {
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      script.async = true;
      script.onload = initEmbedSocial;
      document.body.appendChild(script);
    } else {
      initEmbedSocial();
    }
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
            Social Feed
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            See what’s happening inside Elite Sports University. Stay connected
            with the latest posts, athlete highlights, and training insights
            from our community.
          </p>

          {/* ✅ EmbedSocial SPA container */}
          <div
            className="embedsocial-hashtag mx-auto max-w-5xl"
            data-ref="4ac863795f01181ebaee64cca86740c4977a01b9"
            style={{ minHeight: "600px", width: "100%" }}
          >
            <a
              className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding"
              href="https://embedsocial.com/social-media-aggregator/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram widget"
            >
              <img
                src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
                alt="EmbedSocial"
              />
              <div className="es-widget-branding-text">Instagram widget</div>
            </a>
          </div>

          {/* Fallback */}
          <noscript>
            <div className="bg-white border rounded-xl p-8 mt-8">
              <h3 className="text-xl font-bold text-red mb-3">
                Instagram Feed
              </h3>
              <p className="text-gray-600 mb-4">
                JavaScript is required to view the social feed.
              </p>
              <a
                href="https://instagram.com/elite_sportsu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red text-white px-6 py-3 rounded-full"
              >
                Visit @elite_sportsu
              </a>
            </div>
          </noscript>
        </div>
      </section>

      {/* ─── COMMUNITY SECTION ─── */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy uppercase mb-6">
            Community
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            At Elite Sports University, we believe in the power of connection —
            not just in the gym, but beyond it.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-red mb-4" />,
                title: "Teamwork",
                desc: "We train together, push together, and celebrate success together.",
              },
              {
                icon: <HeartHandshake className="w-10 h-10 text-red mb-4" />,
                title: "Giving Back",
                desc: "From youth mentorship to outreach, we uplift the next generation.",
              },
              {
                icon: <Share2 className="w-10 h-10 text-red mb-4" />,
                title: "Stay Connected",
                desc: "Join our online groups and events to stay inspired.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow-md p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-bold text-navy mb-3 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
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
