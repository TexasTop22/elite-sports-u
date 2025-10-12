"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function VisitorModal() {
  const [showModal, setShowModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [location, setLocation] = useState({ city: "", region: "", country: "" });

  // ── Check localStorage and show modal ──
  useEffect(() => {
    const hide = localStorage.getItem("hideVisitorModal");
    if (!hide) {
      const timer = setTimeout(() => setShowModal(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // ── Fetch visitor location ──
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

  // ── Auto-fill UTM parameters ──
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");

    if (source) document.getElementById("utm_source")?.setAttribute("value", source);
    if (medium) document.getElementById("utm_medium")?.setAttribute("value", medium);
    if (campaign) document.getElementById("utm_campaign")?.setAttribute("value", campaign);
  }, []);

  // ── Handle close ──
  const handleClose = () => {
    if (dontShowAgain) localStorage.setItem("hideVisitorModal", "true");
    setFadeOut(true);
    setTimeout(() => setShowModal(false), 400);
  };

  // ── Handle checkbox ──
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

  // ── Handle submit ──
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await fetch("https://formsubmit.co/elitesportsuniversity@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowModal(false), 500);
    }, 2500);
  };

  if (!showModal) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-400 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`bg-white w-[92%] sm:w-[90%] md:max-w-xl md:rounded-2xl shadow-2xl overflow-hidden relative animate-fadeIn md:mx-auto md:my-10 ${
            fadeOut ? "animate-fadeOut" : ""
          }`}
          style={{
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ─── HEADER ─── */}
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

          {/* ─── BODY ─── */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-gray-50 overflow-y-auto">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-extrabold text-navy mb-2">
                  Thank You! 🙌
                </h3>
                <p className="text-gray-700">
                  Your message has been received. We’ll get back to you soon!
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-navy mb-2 text-center">
                  Welcome, Champion 💪
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  What brings you here today? Tell us so we can help you reach your goals!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Visitor Inquiry" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Tracking info */}
                  <input type="hidden" name="Page URL" value={typeof window !== "undefined" ? window.location.href : ""} />
                  <input type="hidden" name="Referrer" value={typeof document !== "undefined" ? document.referrer : ""} />
                  <input type="hidden" name="UTM Source" id="utm_source" />
                  <input type="hidden" name="UTM Medium" id="utm_medium" />
                  <input type="hidden" name="UTM Campaign" id="utm_campaign" />
                  <input type="hidden" name="Visitor City" value={location.city} />
                  <input type="hidden" name="Visitor Region" value={location.region} />
                  <input type="hidden" name="Visitor Country" value={location.country} />

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                      What are you looking for?
                    </label>
                    <select
                      name="Looking For"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Fitness Membership">Fitness Membership</option>
                      <option value="Athletic Performance Training">Athletic Performance Training</option>
                      <option value="Personal Training">Personal Training</option>
                      <option value="Youth Speed & Agility">Youth Speed & Agility</option>
                      <option value="Nutrition or Recovery">Nutrition / Recovery</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">
                      How can we help you?
                    </label>
                    <textarea
                      name="Message"
                      rows={3}
                      placeholder="Tell us about your goals..."
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red"
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Your Email"
                      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red"
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
                      className="bg-red text-white px-6 py-2 rounded-md font-bold hover:bg-navy transition shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ───── Toast Notification ───── */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[2100] animate-fadeIn">
          Preference saved! You won’t see this again.
        </div>
      )}
    </>
  );
}
