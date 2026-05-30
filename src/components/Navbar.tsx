"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Before & After", href: "#before-after" },
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why-me" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      // Special check for bottom of page (Contact section)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
        return;
      }

      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
            return;
          }
        }
      }

      // Check Contact section
      const contactEl = document.querySelector("#contact");
      if (contactEl) {
        const top = (contactEl as HTMLElement).offsetTop;
        if (scrollPosition >= top) {
          setActiveSection("contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80; // navbar offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-brand-bg/85 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="group flex items-center font-bold text-xl tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-sm font-black text-white shadow-lg shadow-brand-primary/20 transition-all duration-300 group-hover:scale-105">
                NS
              </span>
              <span className="ml-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                NAGA SAI
              </span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 hover:text-white ${
                  activeSection === link.href.substring(1)
                    ? "text-brand-primary"
                    : "text-brand-subtext"
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand-primary rounded-full transition-all duration-300" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="ml-4 flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white shadow-md shadow-brand-primary/25 transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-brand-primary/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-subtext hover:bg-brand-card hover:text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-800 bg-brand-bg/95 backdrop-blur-lg ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-1.5 px-4 pt-2 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block rounded-lg px-3 py-2 text-base font-semibold transition-all ${
                activeSection === link.href.substring(1)
                  ? "bg-slate-800 text-brand-primary"
                  : "text-brand-subtext hover:bg-brand-card hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary py-3 text-base font-bold text-white transition-all hover:bg-blue-600 active:scale-[0.98]"
          >
            Hire Me <ArrowUpRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
