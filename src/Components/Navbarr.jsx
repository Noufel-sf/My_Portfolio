import React, { useState, useCallback, memo } from "react";
import { Mail, Home, Zap, User, Briefcase, Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagicButton from "./MagicButton";




const InstagramIcon = memo(({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="256"
    height="256"
    viewBox="0 0 256 256"
    className={className}
  >
    <g fill="none">
      <rect width="256" height="256" fill="url(#SVGWRUqebek)" rx="60" />
      <rect width="256" height="256" fill="url(#SVGfkNpldMH)" rx="60" />
      <path
        fill="#fff"
        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.994-51.344-51.347-51.344Zm0 18.04c18.4 0 33.313 14.913 33.313 33.314c0 18.4-14.913 33.313-33.313 33.313c-18.4 0-33.313-14.913-33.313-33.313c0-18.4 14.913-33.314 33.313-33.314Z"
      />
    </g>
  </svg>
));
InstagramIcon.displayName = "InstagramIcon";

const FacebookLogo = memo(({ className }) => (
  <img src="/facebook.svg" alt="Facebook" className={className} />
));
FacebookLogo.displayName = "FacebookLogo";



const menuItems = [
  { name: "Home", icon: Home },
  { name: "Skills", icon: Zap },
  { name: "About", icon: User },
  { name: "Education", icon: GraduationCap },
] ;

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/chelarhn?igsh=MThkOGtyamR3bHd0eg==", label: "Instagram" },
  { icon: FacebookLogo, href: "https://www.facebook.com/share/1Eu9s6rbJV/", label: "Facebook" },
] ;

const LogoSVG = memo(() => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-sm"
  >
    <g fill="none">
      <path
        fill="#48eeff"
        stroke="#231f20"
        strokeMiterlimit="10"
        d="M38.75 20a33 33 0 0 0-1.54-10c0-.51-3.25-4.12-6.56-5.92S21.92.18 19.5.54c-1.66-.06-6.66 1.7-10.06 3.55S3.06 8.68 2.91 9.56A34.3 34.3 0 0 0 1.25 20a34.3 34.3 0 0 0 1.66 10.44c.15.87 3.09 3.56 6.53 5.47s8.4 3.61 10.06 3.55c2.42.36 7.73-1.69 11.15-3.55s6.6-5.41 6.56-5.92A33 33 0 0 0 38.75 20Z"
        strokeWidth="1"
      />
      <path
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M7.25 14.32c.71.54 1.46 1 2.19 1.51C12.85 18 18.13 20.11 20.59 20c1.65-.1 6.65-2 10.06-4.12c.72-.45 1.43-.95 2.1-1.46"
        strokeWidth="1"
      />
      <path
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M20 32.5V22.32c0-2.32 1.73-2.57 1.73-2.57"
        strokeWidth="1"
      />
      <path
        stroke="#231f20"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M20 22.32a2.59 2.59 0 0 0-1.71-2.64"
        strokeWidth="1"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M26.13 5.34A17.6 17.6 0 0 1 30.77 8"
        strokeWidth="1"
      />
    </g>
  </svg>
));

LogoSVG.displayName = "LogoSVG";

const Navbar = memo(({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleMobileMenuOpen = useCallback(() => setIsMobileMenuOpen(true), []);
  const handleMobileMenuClose = useCallback(
    () => setIsMobileMenuOpen(false),
    [],
  );
  const handleContactToggle = useCallback(
    () => setIsContactOpen((prev) => !prev),
    [],
  );
  const handleHomeClick = useCallback(() => onNavigate("Home"), [onNavigate]);

  const handleMobileNavClick = useCallback(
    (name) => {
      onNavigate(name);
      setIsMobileMenuOpen(false);
    },
    [onNavigate],
  );

  return (
    <>
      <nav className="relative z-50 w-full mx-auto px-4 py-3 md:px-6 md:py-6 flex justify-center items-center pointer-events-none select-none shrink-0">
        <div className="flex items-center justify-between container gap-2 md:gap-4 pointer-events-auto">
          <div className="flex items-center p-1.5 pl-3 md:pl-4 gap-3    rounded-full transition-all duration-500 hover:bg-white/15 transform-gpu ring-1 ring-white/[0.05]">
            <div
              className="pr-2 md:pr-3 flex items-center gap-2.5 group cursor-pointer"
              onClick={handleHomeClick}
            >
              <span className="text-xl md:text-2xl tracking-tighter text-white  sm:block opacity-90 group-hover:opacity-100 transition-opacity">
                NSF
              </span>
            </div>
          </div>
            <button
              className="cursor-pointer w-12 h-12 flex items-center justify-center transition-colors  text-white"
              onClick={handleMobileMenuOpen}
            >
              <Menu size={25} />
            </button>

          <div className="relative group/contact">
            <AnimatePresence>
              {isContactOpen && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  {socialLinks.map((social, index) => {
                    const startAngle = 160;
                    const step = 45;
                    const angle = startAngle - index * step;
                    const rad = (angle * Math.PI) / 180;
                    const radius = 90;

                    const finalX = Math.cos(rad) * radius;
                    const finalY = Math.sin(rad) * radius;

                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        custom={index}
                        className="absolute w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-xl border border-white/10 pointer-events-auto hover:bg-gray-900 hover:scale-110 transition-colors z-[-1]"
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                        animate={{
                          x: finalX,
                          y: finalY,
                          opacity: 1,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 180,
                            damping: 15,
                            delay: index * 0.05,
                          },
                        }}
                        exit={{
                          x: 0,
                          y: 0,
                          opacity: 0,
                          scale: 0.5,
                          transition: {
                            duration: 0.2,
                            delay: (socialLinks.length - 1 - index) * 0.03,
                          },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          <social.icon className="w-full h-full" />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </AnimatePresence>

            <div className="relative z-20 transform transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
              <MagicButton
                onClick={handleContactToggle}
                className=" shadow-[0_20px_48px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35)] transition-shadow duration-300 h-10 md:h-11 px-5 md:px-7"
              >
                <span className="relative z-10 flex items-center gap-2 text-xs font-bold tracking-[0.05em] uppercase">
                  <span className="hidden sm:inline">
                    {isContactOpen ? "Close" : "Contact Me"}
                  </span>
                  <span className="sm:hidden">
                    {isContactOpen ? "Close" : "Contact"}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isContactOpen ? 180 : 0,
                      scale: isContactOpen ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isContactOpen ? (
                      <X size={14} className="text-white" />
                    ) : (
                      <Mail
                        size={14}
                        className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    )}
                  </motion.div>
                </span>
              </MagicButton>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center pointer-events-auto"
          >
            <button
              className="absolute cursor-pointer top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={handleMobileMenuClose}
            >
              <X size={24} className="text-white" />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleMobileNavClick(item.name)}
                  className={`text-5xl  md:text-7xl cursor-pointer hover:text-gray-400 transition duration-300 font-display font-bold flex items-center justify-center gap-4 ${
                    currentView === item.name ? "text-cyan-400" : "text-white"
                  }`}
                >
                  <item.icon
                    size={28}
                    strokeWidth={currentView === item.name ? 3 : 2}
                  />
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
