"use client";
import { useEffect, useState } from "react";

export default function VisitorModal() {
  const [showModal, setShowModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check localStorage
    const hide = localStorage.getItem("hideVisitorModal");
    if (!hide) {
      const timer = setTimeout(() => setShowModal(true), 1200); // show after 1.2s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) localStorage.setItem("hideVisitorModal", "true");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-extrabold text-navy mb-3 text-center">
          Welcome to Elite Sports University
        </h2>
        <p className="text-gray-700 text-center mb-6">
          What brings you to our site today? Let us know how we can help!
        </p>

        <form
          action="https://formsubmit.co/elitesportsuniversity@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="New Visitor Inquiry" />
          <input type="hidden" name="_template" value="table" />

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
              <option value="Athletic Training">Athletic Training</option>
              <option value="Personal Training">Personal Training</option>
              <option value="Youth Programs">Youth Programs</option>
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
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Tell us more..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="mr-2"
              />
              Don’t show again
            </label>
            <button
              type="submit"
              className="bg-red text-white px-6 py-2 rounded-md font-bold hover:bg-navy transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
