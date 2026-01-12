"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function VisitorModal() {
  const [showModal, setShowModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [pageUrl, setPageUrl] = useState("");
  const [referrer, setReferrer] = useState("");

  const [location, setLocation] = useState({
    city: "",
    region: "",
    country: "",
  });

  /* ──────────────────────────────
     Show modal (localStorage)
  ────────────────────────────── */
  useEffect(() => {
    const hide = localStorage.getItem("hideVisitorModal");
    if (!hide) {
      const timer = setTimeout(() => setShowModal(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  /* ──────────────────────────────
     Page + Referrer
  ────────────────────────────── */
  useEffect(() => {
    setPageUrl(window.location.href);
    setReferrer(document.referrer);
  }, []);

  /* ──────────────────────────────
     Visitor location
  ────────────────────────────── */
  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) =>
        setLocation({
          city: data.city || "",
          region: data.region || "",
          country: data.country_name || "",
        })
      )
      .catch(() => {});
  }, []);

  /* ──────────────────────────────
     UTM capture
  ────────────────────────────── */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const setValue = (id: string, value: string | null) => {
      if (!value) return;
      const el = document.getElementById(id) as HTMLInputElement | null;
      if (el) el.value = value;
    };

    setValue("utm_source", params.get("utm_source"));
    setValue("utm_medium", params.get("utm_medium"));
    setValue("utm_campaign", params.get("utm_campaign"));
  }, []);

  /* ──────────────────────────────
     Close modal
  ────────────────────────────── */
  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideVisitorModal", "true");
    }
    setFadeOut(true);
    setTimeout(() => setShowModal(false), 400);
  };

  /* ──────────────────────────────
     Checkbox logic
  ────────────────────────────── */
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setDontShowAgain(checked);

    if (checked) {
      localStorage.setItem("hideVisitorModal", "true");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } else {
      localStorage.removeItem("hideVisitorModal");
    }
  };

  /* ──────────────────────────────
     Submit via EmailJS
  ────────────────────────────── */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_6r7h4gs",
        "template_9tlcbas",
        e.currentTarget,
        "V4rvsYtvOC3Qp8Vi-"
      );

      setSubmitted(true);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShowModal(false), 500);
      }, 2500);
    } catch (err) {
      console.error("Visitor EmailJS error:", err);
      setSubmitting(false);
    }
  };

  if (!showModal) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`bg-white w-[92%] sm:w-[90%] md:max-w-xl md:rounded-2xl shadow-2xl overflow-hidden relative ${
            fadeOut ? "animate-fadeOut" : "animate-fadeIn"
          }`}
          style={{ maxHeight: "90vh", display: "flex", flexDirection: "column" }}
        >
          {/* HEADER */}
          <div className="bg-navy text-white flex items-center justify-between p-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Elite Sports U Logo"
                width={45}
                height={45}
                className="rounded-md"
              />
              <h2 className="text-lg sm:text-xl font-extrabold uppercase tracking-wide">
                Elite Sports University
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-red text-3xl font-bold leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* BODY */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-extrabold text-navy mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-700">
                  Your message has been received. We’ll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-navy mb-2 text-center">
                  Welcome, Champion
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  What brings you here today? Tell us how we can help.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Unified schema */}
                  <input type="hidden" name="form_type" value="visitor" />
                  <input type="hidden" name="page_url" value={pageUrl} />
                  <input type="hidden" name="referrer" value={referrer} />
                  <input type="hidden" name="utm_source" id="utm_source" />
                  <input type="hidden" name="utm_medium" id="utm_medium" />
                  <input type="hidden" name="utm_campaign" id="utm_campaign" />
                  <input type="hidden" name="visitor_city" value={location.city} />
                  <input type="hidden" name="visitor_region" value={location.region} />
                  <input type="hidden" name="visitor_country" value={location.country} />
                  <input type="hidden" name="phone" value="" />

                  <select
                    name="looking_for"
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">What are you looking for?</option>
                    <option value="Fitness Membership">Fitness Membership</option>
                    <option value="Athletic Performance Training">
                      Athletic Performance Training
                    </option>
                    <option value="Personal Training">Personal Training</option>
                    <option value="Youth Speed & Agility">
                      Youth Speed & Agility
                    </option>
                    <option value="Nutrition / Recovery">
                      Nutrition / Recovery
                    </option>
                    <option value="Other">Other</option>
                  </select>

                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell us about your goals..."
                    className="w-full border border-gray-300 rounded-md p-2"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="border border-gray-300 rounded-md p-2"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={dontShowAgain}
                        onChange={handleCheckbox}
                        className="mr-2 accent-red"
                      />
                      Don’t show again
                    </label>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-red text-white px-6 py-2 rounded-md font-bold hover:bg-navy transition disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[2100]">
          Preference saved!
        </div>
      )}
    </>
  );
}
