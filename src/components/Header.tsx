"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

type IconProps = { size?: number; className?: string };

const Menu = ({ size = 28, className = "" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const X = ({ size = 28, className = "" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDown = ({ size = 22, className = "" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform duration-300 ${className}`}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [eliteSubOpen, setEliteSubOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const programLinks = [
    { href: "/programs/elite-fit-club", label: "Elite Fit Club" },
    { href: "/programs/athletic-performance", label: "Athletic Performance Training" },
  ];

  const eliteLinks = [
    { href: "/elite-u#social-feed", label: "Social Feed" },
    { href: "/elite-u#community", label: "Community" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[1000] bg-navy/95 backdrop-blur-md shadow-md transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Elite Sports U Logo"
              width={160}
              height={50}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase text-white">
            {/* PROGRAMS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red transition">
                PROGRAMS
                <ChevronDown
                  size={18}
                  className={`${submenuOpen ? "rotate-180 text-red" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 bg-black text-white rounded-md overflow-hidden min-w-[240px]
                transition-all duration-300 ease-out border
                ${submenuOpen
                  ? "opacity-100 translate-y-0 visible border-red shadow-[0_0_15px_rgba(225,6,0,0.6)]"
                  : "opacity-0 -translate-y-3 invisible border-transparent"
                }`}
              >
                <div className="flex flex-col py-2">
                  {programLinks.map((p) => (
                    <Link key={p.href} href={p.href}
                      className="block px-5 py-3 text-sm hover:bg-red hover:text-white transition">
                      {p.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/10">
                    <Link href="/programs"
                      className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-navy transition font-semibold tracking-wide">
                      View All Programs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ELITE U DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setEliteSubOpen(true)}
              onMouseLeave={() => setEliteSubOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red transition">
                ELITE U
                <ChevronDown
                  size={18}
                  className={`${eliteSubOpen ? "rotate-180 text-red" : ""}`}
                />
              </button>
              <div
                className={`absolute left-0 mt-3 bg-black text-white rounded-md overflow-hidden min-w-[200px]
                transition-all duration-300 ease-out border
                ${eliteSubOpen
                  ? "opacity-100 translate-y-0 visible border-red shadow-[0_0_15px_rgba(225,6,0,0.6)]"
                  : "opacity-0 -translate-y-3 invisible border-transparent"
                }`}
              >
                <div className="flex flex-col py-2">
                  {eliteLinks.map((p) => (
                    <Link key={p.href} href={p.href}
                      className="block px-5 py-3 text-sm hover:bg-red hover:text-white transition">
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {["About", "Contact", "Admin"].map((item) => (
  <Link
    key={item}
    href={`/${item.toLowerCase()}`}
    className="hover:text-red transition"
  >
    {item}
  </Link>
))}

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white hover:text-red focus:outline-none p-2 border border-white/40 rounded-md"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* ---------- MOBILE MENU ---------- */}
      {mounted && menuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex flex-col text-white animate-fadeSlide bg-gradient-to-b from-[#0b1a2a] via-[#07121d] to-black">
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Elite Sports U Logo"
                  width={140} height={45} className="h-10 w-auto object-contain" />
              </Link>
              <button onClick={closeMenu} className="text-white hover:text-red transition">
                <X size={30} />
              </button>
            </div>

            {/* NAVIGATION */}
            <nav className="flex flex-col items-center justify-center gap-6 text-2xl font-bold uppercase tracking-wide flex-grow">

              {/* Programs dropdown */}
              <div className="flex flex-col items-center">
                <button onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center gap-2 hover:text-red transition">
                  Programs
                  <ChevronDown size={22}
                    className={`${submenuOpen ? "rotate-180 text-red" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    submenuOpen ? "max-h-80 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="flex flex-col items-center gap-3 text-lg font-medium text-white/90 bg-black/90 rounded-lg py-6 px-4 w-72 border border-red/60">
                    {programLinks.map((p) => (
                      <Link key={p.href} href={p.href} onClick={closeMenu}
                        className="hover:text-red transition">{p.label}</Link>
                    ))}
                    <Link href="/programs" onClick={closeMenu}
                      className="mt-3 pt-3 border-t border-white/20 text-red font-semibold hover:text-white transition">
                      View All Programs →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Elite U dropdown */}
              <div className="flex flex-col items-center">
                <button onClick={() => setEliteSubOpen(!eliteSubOpen)}
                  className="flex items-center gap-2 hover:text-red transition">
                  Elite U
                  <ChevronDown size={22}
                    className={`${eliteSubOpen ? "rotate-180 text-red" : ""}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    eliteSubOpen ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="flex flex-col items-center gap-3 text-lg font-medium text-white/90 bg-black/90 rounded-lg py-6 px-4 w-64 border border-red/60">
                    {eliteLinks.map((p) => (
                      <Link key={p.href} href={p.href} onClick={closeMenu}
                        className="hover:text-red transition">{p.label}</Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
  href="/admin"
  onClick={closeMenu}
  className="hover:text-red transition"
>
  Admin
</Link>

              {["About", "Contact"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}
                  onClick={closeMenu} className="hover:text-red transition">
                  {item}
                </Link>
              ))}
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
