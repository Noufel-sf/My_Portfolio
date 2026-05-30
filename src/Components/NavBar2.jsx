import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NAV_LINKS = [
  { label: "home", path: "/" },
  { label: "projects", path: "/projects" },
  { label: "blogs", path: "/blogs" },
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

function SocialIcon({ d, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  );
}

export const NavBar2 = ({
  burgerRef,
  navContainerRef,
  onBurgerClick,
  isOpen,
}) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      setIsVisible(!isScrollingDown || currentScrollY < 8);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      ref={navContainerRef}
      className={`navbar fixed top-0 z-100 flex w-full items-center justify-center py-6 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 backdrop-blur-xl bg-black/35 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${isOpen ? "bg-transparent shadow-none backdrop-blur-none" : ""}`}
    >
      <nav className="flex w-[90vw] items-center justify-between">
        <div className="logo flex cursor-pointer items-center justify-center gap-1">
          <Link to="/" className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 22 24"
              fill="currentColor"
              className="h-5 w-5 animate-[spin_10s_linear_infinite] text-white"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span className="font-mono text-white text-lg font-bold uppercase tracking-[.2em]">
              NSF
            </span>
          </Link>
        </div>
     

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`font-mono text-[15px] uppercase tracking-[.14em] transition-colors duration-200 ${
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
            HIRE ME
          </a>
        </div>

        <div
          ref={burgerRef}
          onClick={onBurgerClick}
          className="absolute right-[5vw] flex cursor-pointer flex-col gap-1.5 md:hidden"
        >
          <div
            className={`h-0.75 w-8 rounded-full bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-2.25 rotate-45" : ""
            }`}
          />

          <div
            className={`h-0.75 w-8 rounded-full bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-2.25 -rotate-45" : ""
            }`}
          />
        </div>
      </nav>
    </div>
  );
};

NavBar2.displayName = "NavBar2";

export function Menu({ isOpen, onClose }) {
  const container = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location?.pathname || "/";

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(container.current, {
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
        });

        gsap.fromTo(
          linksRef.current,
          { y: 140, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      } else {
        gsap.to(container.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power4.inOut",
        });
      }
    },
    { dependencies: [isOpen], scope: container },
  );

  const handleLinkClick = (path) => {
    if (pathname === path) {
      onClose();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    onClose();

    setTimeout(() => {
      navigate(path);
    }, 650);
  };

  return (
    <div
      ref={container}
      className={`fixed inset-0 z-90 flex -translate-y-full flex-col items-center justify-center bg-[#7A93A8] px-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <nav className="flex flex-col items-center gap-6">
        {NAV_LINKS.map((link, i) => (
          <div
            key={link.label}
            className="group w-full overflow-hidden px-8 py-2"
          >
            <div
              ref={(el) => {
                if (el) linksRef.current[i] = el;
              }}
              className="relative"
            >
              <button
                onClick={() => handleLinkClick(link.path)}
                className="relative block w-full text-center text-5xl font-black uppercase leading-none tracking-tight md:text-7xl"
              >
                <span className="heading block cursor-pointer transition-transform duration-500 group-hover:-translate-y-full">
                  {link.label}
                </span>

                <span className="absolute inset-0 translate-y-[110%] italic transition-transform duration-500 group-hover:translate-y-0">
                  {link.label}
                </span>
              </button>
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-14 flex items-center gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:text-[#7A93A8]"
          >
            <SocialIcon d={social.d} size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NavbarSystem() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItemsRef = useRef(null);
  const navBurgerRef = useRef(null);
  const navContainerRef = useRef(null);

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <NavBar2
        itemsRef={navItemsRef}
        burgerRef={navBurgerRef}
        navContainerRef={navContainerRef}
        onBurgerClick={() => setIsMenuOpen((prev) => !prev)}
        isOpen={isMenuOpen}
      />
    </>
  );
}
