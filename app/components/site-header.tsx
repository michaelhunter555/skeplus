"use client";

import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#trucking", label: "Trucking" },
  { href: "#mechanics", label: "Mechanics" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/64 backdrop-blur-[14px]">
      <div className="mx-auto flex h-20 w-full max-w-[1512px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-[106px]">
        <a
          href="#home"
          className="inline-flex h-11 shrink-0 items-center rounded-[4px] bg-white px-3 text-xl font-semibold text-black"
        >
          SKE Plus
        </a>

        <nav className="hidden items-center gap-4 text-lg text-black xl:gap-[23px] lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold-dark">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-10 items-center justify-center bg-black px-5 text-lg font-semibold text-white hover:bg-neutral-800 sm:inline-flex"
          >
            Request a quote
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center px-3 text-base font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-4 border-t border-black/10 bg-white px-6 py-5 text-lg lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 items-center justify-center bg-black px-5 font-semibold text-white sm:hidden"
          >
            Request a quote
          </a>
        </nav>
      ) : null}
    </header>
  );
}
