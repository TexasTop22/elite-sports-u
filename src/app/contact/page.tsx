"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        "service_6r7h4gs",
        "template_9tlcbas",
        e.currentTarget,
        "V4rvsYtvOC3Qp8Vi-"
      );

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error("EmailJS Contact error:", err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-navy text-white">
      {/* MAP SECTION */}
      <section className="w-full">
        <div className="w-full h-[320px] md:h-[420px]">
          <iframe
            title="Elite Sports University Location"
            src="https://www.google.com/maps?q=3105+Lomita+Dr+%23106,+Lancaster,+TX+75146&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1.1fr,1fr]">
          {/* FORM */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">
              Contact <span className="text-red">Elite Sports U</span>
            </h1>

            <p className="text-gray-200 mb-8 max-w-xl">
              Have questions about memberships, training programs, or camps?
              Send us a message and our team will get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-md bg-slate-900/70 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-8 py-3 font-bold uppercase tracking-wide text-white hover:bg-red/80 transition shadow-[0_0_20px_rgba(225,6,0,0.6)] disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400 mt-2">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFO PANEL */}
          <aside className="bg-slate-900/70 rounded-2xl p-6 md:p-8 border border-slate-700">
            <h2 className="text-xl font-bold uppercase mb-4">
              Visit <span className="text-red">Our Facility</span>
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red mt-0.5" />
                <p>
                  3105 Lomita Dr. #106
                  <br />
                  Lancaster, TX 75146
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red mt-0.5" />
                <a
                  href="mailto:elitesportsuniversity@gmail.com"
                  className="hover:underline"
                >
                  elitesportsuniversity@gmail.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
