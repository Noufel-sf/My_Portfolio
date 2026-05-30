import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BRAND = "NSF";
const CTA_LABEL = "Hire Me";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Noufel-sf",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noufel-seif-el-islam-nasri/",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/noufel_sf?igsh=dGFpbGJyamVmbzky",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
];

const MENU = "M4 6h16M4 12h16M4 18h16";
const CLOSE = "M6 18L18 6M6 6l12 12";

function SocialIcon({ d, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuLinksRef = useRef([]);

  useGSAP(
    () => {
      if (!navRef.current) return;

      const nav = navRef.current;

      gsap.fromTo(
        nav,
        { y: -18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: "power4.out" }
      );

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (open) return;

          gsap.to(nav, {
            y: self.direction === 1 ? -120 : 0,
            autoAlpha: self.direction === 1 ? 0 : 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      return () => trigger.kill();
    },
    { dependencies: [open] }
  );

  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.set(menuRef.current, { pointerEvents: "auto" });
      gsap.to(menuRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power4.out",
      });
      gsap.fromTo(
        menuLinksRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          delay: 0.1,
          duration: 0.45,
          ease: "power3.out",
        }
      );
      return;
    }

    gsap.to(menuRef.current, {
      y: "-100%",
      autoAlpha: 0,
      duration: 0.55,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(menuRef.current, { pointerEvents: "none" });
      },
    });
  }, [open]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        ref={navRef}
        className="sticky top-0 z-50 border-b border-[#141414] bg-[#080808]/90 text-white backdrop-blur-xl"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 22 24"
              fill="currentColor"
              className="h-5 w-5 animate-[spin_10s_linear_infinite] text-white"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="font-mono text-xs font-bold uppercase tracking-[.2em]">
              {BRAND}
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-mono text-[11px] uppercase tracking-[.14em] transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-[#9ca3af] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/noufel-seif-el-islam-nasri/"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[#7A93A8] px-4 py-2 font-mono text-[11px] uppercase tracking-[.14em] text-[#7A93A8] transition-all duration-200 hover:bg-[#7A93A8] hover:text-white sm:inline-flex"
            >
              {CTA_LABEL}
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#222] text-neutral-400 transition-all hover:border-[#333] hover:text-white md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d={open ? CLOSE : MENU} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="pointer-events-none fixed inset-x-0 top-18.25 z-40 -translate-y-full border-b border-[#141414] bg-[#080808]/95 px-4 opacity-0 backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-6 py-5">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setOpen(false)}
                ref={(element) => {
                  if (element) {
                    menuLinksRef.current[index] = element;
                  }
                }}
                className={`rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "border-[#7A93A8] bg-[#7A93A8]/10 text-white"
                    : "border-[#1f1f1f] text-neutral-300 hover:border-[#2d2d2d] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1f1f1f] text-neutral-300 transition-colors hover:border-[#7A93A8] hover:text-white"
              >
                <SocialIcon d={social.d} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
