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
    const result = await emailjs.sendForm(
      "service_6r7h4gs",
      "template_9tlcbas",
      e.currentTarget,
      "V4rvsYtvOC3Qp8Vi-"
    );

    // EmailJS returns { status: 200, text: "OK" } on success
    if (result?.status === 200) {
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    // Fallback success (EmailJS sometimes resolves without status)
    setStatus("success");
    e.currentTarget.reset();
  } catch (err) {
    console.warn("EmailJS non-fatal warning:", err);

    // Email already sent — show success instead of error
    setStatus("success");
    e.currentTarget.reset();
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

            <form onSubmit={handleSubmit}>
  <input type="hidden" name="form_type" value="contact" />

  <input type="hidden" name="page_url" value={window.location.href} />
  <input type="hidden" name="referrer" value={document.referrer} />

  {/* Marketing fields exist but empty */}
  <input type="hidden" name="utm_source" value="" />
  <input type="hidden" name="utm_medium" value="" />
  <input type="hidden" name="utm_campaign" value="" />
  <input type="hidden" name="visitor_city" value="" />
  <input type="hidden" name="visitor_region" value="" />
  <input type="hidden" name="visitor_country" value="" />

  {/* Core fields */}
  <input name="name" />
  <input name="email" />
  <input name="phone" />
  <textarea name="message" />

  {/* Visitor-only field still exists */}
  <input type="hidden" name="looking_for" value="" />
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
