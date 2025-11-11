"use client";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 🔐 Set your own secure password here
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      localStorage.setItem("admin-auth", "true");
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  // check saved state on mount
  if (typeof window !== "undefined" && !authenticated) {
    const saved = localStorage.getItem("admin-auth");
    if (saved === "true") setAuthenticated(true);
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy text-white">
        <form
          onSubmit={handleLogin}
          className="bg-black/70 p-8 rounded-xl shadow-lg w-80 text-center"
        >
          <h1 className="text-2xl mb-4 font-bold">Admin Access</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
          <button
            type="submit"
            className="mt-4 bg-red px-4 py-2 rounded text-white font-semibold hover:bg-red/80"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
