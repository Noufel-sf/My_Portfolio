import React, { useEffect, useRef, memo } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";


const WaveIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-md"
  >
    <g fill="#000" fillRule="evenodd" clipRule="evenodd">
      <path d="M2.612 7.981a1.5 1.5 0 0 0-.29-.11a1.7 1.7 0 0 0-.309 0c-1.107-.169-1.167-.05-1.237.11s-.05.41.908.908q.144.078.3.13q.165.021.329 0c.11 0 1.127 0 1.197-.32c.02-.02.12-.239-.898-.718M4.607 4.11s.789.31.998.13c.21-.18-.11-.997-.12-.997a.5.5 0 0 0-.12-.16a.6.6 0 0 0-.189-.09c-.788-.369-.918-.24-.998-.13s-.19.22.19.998a.5.5 0 0 0 .09.13a.33.33 0 0 0 .15.12m7.482-2.116c.27 0 .579-.718.609-.798a.6.6 0 0 0 0-.2q.015-.105 0-.209C12.409 0 12.249 0 12.09 0c-.16 0-.32 0-.579.848a.7.7 0 0 0 0 .2a.7.7 0 0 0 0 .2c.3.867.57.747.58.747m5.955 1.407a.7.7 0 0 0 .2-.14q.087-.087.16-.19c.568-.797.478-.907.379-.997c-.1-.09-.26-.28-1.138.14l-.23.14a1 1 0 0 0-.169.2s-.489.837-.29.997c.2.16 1.019-.11 1.088-.15m4.131 4.061a.9.9 0 0 0-.46.06c-.997.409-.827.658-.827.668c0 .29.788.489.997.519q.135.023.27 0a.7.7 0 0 0 .25-.08c.877-.41.867-.619.827-.788s-.2-.31-1.057-.38m-9.667 4.889c-.49-1.137-.819-.828-1.098 0v.729q-.003.695.07 1.386c.06.699.17 1.377.21 2.076a.37.37 0 1 0 .737 0q.173-1.037.24-2.086v-.888a9 9 0 0 0-.07-.877z" />
      <path d="M19.174 8.37a7.8 7.8 0 0 0-1.996-3.91a7.1 7.1 0 0 0-3.89-2.185a7.7 7.7 0 0 0-4.82.997a8.13 8.13 0 0 0-3.461 3.462a8 8 0 0 0-.679 3.652a7.9 7.9 0 0 0 .998 3.542c.559.997 1.227 1.666 1.706 2.504a4.4 4.4 0 0 1 .569 1.626h-.1a.329.329 0 1 0 0 .659h3.721l2.454.09q.66.024 1.307.15c.21.02.414.085.6.189c.129.07.219.13.248.21c.03.079 0 .079-.08.129a1.3 1.3 0 0 1-.229.23a4 4 0 0 1-1.885.758c-1.12.156-2.259.135-3.373-.06a4 4 0 0 1-1.057-.36a8 8 0 0 1-.998-.578a.36.36 0 0 0-.519.07a.38.38 0 0 0 .07.518q.622.507 1.327.888c.07 0 .16.05.24.09a.31.31 0 0 0-.13.34c.127.626.424 1.206.858 1.676c.47.484 1.081.808 1.746.927a3 3 0 0 0 2.095-.578a2 2 0 0 0 .758-1.946a4.5 4.5 0 0 0 1.646-.718a1.83 1.83 0 0 0 .799-1.277a1.46 1.46 0 0 0-.878-1.367a2.3 2.3 0 0 0-.45-.14v-.09a2.74 2.74 0 0 1 .5-1.396c.458-.699 1.097-1.307 1.566-1.996a8.8 8.8 0 0 0 1.167-2.883a8.1 8.1 0 0 0 .17-3.222m-5.677 13.968a1.8 1.8 0 0 1-.718.32c-.267.05-.541.05-.808 0a2.27 2.27 0 0 1-1.228-.45a3 3 0 0 1-.878-1.047q.121.059.25.1c1.206.298 2.452.402 3.691.309h.06a1.1 1.1 0 0 1-.37.768M9.995 9.858c.14-.36.28-.71.449-1.058c.08-.18.19-.35.28-.52q.285.163.598.27q.226.06.459.06q.238.004.469-.05c.283-.078.552-.2.798-.359c.29.559.559 1.117.838 1.676c-.429-.06-.848-.12-1.277-.16h-1.387c-.449.03-.848.09-1.227.14m1.207-2.455c.19-.35.37-.699.559-.998l.13-.419c.09.22.17.44.21.519c.179.29.328.589.498.878h-.489q-.285-.015-.569 0a2 2 0 0 0-.369.02zm2.584 10.296l-2.484.12l-.998.06v-3.512c0-.4 0-.788-.07-1.187c-.08-.849-.19-1.677-.269-2.515a7 7 0 0 0 3.721.07a18.5 18.5 0 0 0-.209 2.564c0 .559.06 1.118.11 1.666c.08.828.22 1.647.26 2.475a.32.32 0 0 0 .099.259zm4.31-6.375a7.8 7.8 0 0 1-.997 2.614c-.52.858-1.297 1.586-1.726 2.474c-.198.409-.31.853-.33 1.307a5 5 0 0 0-.558 0a.36.36 0 0 0 .11-.24c.13-.938.197-1.885.199-2.833c0-.559 0-1.117-.1-1.676a41.5 41.5 0 0 0-.838-5.308a28 28 0 0 0-.738-1.686a7.5 7.5 0 0 0-.679-1.217a1.23 1.23 0 0 0-.568-.41a.77.77 0 0 0-.789.42c-.15.29-.488 1.058-.498 1.077c-.35.858-.729 1.726-.998 2.624c-.569 1.657-.38.918-.499 4.75v1.217c0 .409.05.798.09 1.197c.09.778.21 1.546.32 2.314l-1.178.08a5.3 5.3 0 0 0-.599-1.935c-.449-.858-1.087-1.597-1.606-2.574a7 7 0 0 1-.778-3.153a6.8 6.8 0 0 1 .708-3.123A6.9 6.9 0 0 1 8.997 4.32a6.47 6.47 0 0 1 3.991-.808a6 6 0 0 1 3.293 1.776a6.86 6.86 0 0 1 1.855 3.282c.16.912.147 1.847-.04 2.754" />
    </g>
  </svg>
));

WaveIcon.displayName = "WaveIcon";

const PenSVG = memo(() => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 40 40"
    className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" strokeMiterlimit="10">
      <path
        fill="#fcdd00"
        stroke="#231f20"
        d="M21.29 6.83c-4 4-8.27 9.25-8.67 10.64a2.7 2.7 0 0 0-.34.88c-2.55-.28-5.19.71-7.69 3.22C0 26.15-.32 36.3 1.64 38.27s12.12 1.64 16.7-3c2.51-2.5 3.5-5.14 3.22-7.69a3.1 3.1 0 0 0 .88-.34c1.39-.4 6.67-4.7 10.64-8.67C40.93 10.77 40.8 7 36.87 3S28.53-.41 21.29 6.83Z"
        strokeWidth="1.5"
      />
      <path
        stroke="#231f20"
        strokeLinecap="round"
        d="M15.1 20a14 14 0 0 1 2.67 2.2A13.8 13.8 0 0 1 20 24.87"
        strokeWidth="1.5"
      />
      <path
        fill="#fff"
        stroke="#231f20"
        d="M8.69 28.44a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 0 0-5.56 0Z"
        strokeWidth="1.5"
      />
      <path
        stroke="#231f20"
        strokeLinecap="round"
        d="m9.5 30.41l-3.93 3.93"
        strokeWidth="1.5"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        d="M28.28 5c2.85-2 3.17-1.94 4.6-1.17"
        strokeWidth="1.5"
      />
    </g>
  </svg>
));

PenSVG.displayName = "PenSVG";

const Breaf = memo(({ onNavigate }) => {
  const sketchRef = useRef<SVGPathElement>(null);
  const sparkleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const MotionPathPlugin = window.MotionPathPlugin;

    if (gsap && MotionPathPlugin) {
      gsap.registerPlugin(MotionPathPlugin);
    }

    if (gsap && sketchRef.current && sparkleRef.current) {
      const length = sketchRef.current.getTotalLength();

      gsap.set(sketchRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.7,
      });

      gsap.set(sparkleRef.current, {
        opacity: 0,
        scale: 0.8,
        xPercent: -15,
        yPercent: -95,
      });

      const tl = gsap.timeline({ delay: 1.5 });

      tl.to(sparkleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

      tl.to(
        sketchRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        "<",
      )
        .to(
          sparkleRef.current,
          {
            motionPath: {
              path: sketchRef.current,
              align: sketchRef.current,
              alignOrigin: [0, 1],
              offsetX: -5,
              offsetY: 5,
            },
            duration: 1.2,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(sparkleRef.current, {
          x: "+=5",
          y: "-=5",
          duration: 0.5,
          ease: "power2.out",
        });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <main className="flex-1 w-full mt-20 max-w-[1600px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center relative z-10 min-h-0 h-full">
      <div className="flex flex-col items-center h-full w-full pt-4 md:pt-0">
        <div className="shrink-0 flex flex-col items-center relative z-20 mt-2 md:mt-8 lg:mt-10 mb-6 md:mb-0">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-1 leading-[1.1] drop-shadow-sm text-center">
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-1 font-display font-bold"
            >
              I ' am Noufel seif el islam
            </motion.span>
            <motion.div
              initial={{ opacity: 0, filter: "blur(5px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="pt-2 sm:pt-2"
            >
              <span className="font-display font-bold capitalize">A Software engineer &</span>
              <span className="relative inline-flex items-center">
                <span className="relative inline-block px-2">
                  <svg
                    className="absolute inset-0 w-[110%] -left-[5%] h-[120%] top-[-10%] -z-10"
                    viewBox="0 0 150 50"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      ref={sketchRef}
                      d="M15,25 C40,18 75,32 110,22 C130,16 140,25 140,25"
                      stroke="#fcdd00"
                      strokeWidth="20"
                      strokeLinecap="round"
                      className="opacity-70"
                      style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                    />
                  </svg>

                  <span className="font-designer capitalize font-normal text-white relative">
                    web developer
                  </span>

                  <span
                    ref={sparkleRef}
                    className="absolute top-0 left-0 w-8 h-8 md:w-20 md:h-20 pointer-events-none z-20 origin-bottom-left gpu-accelerated"
                    style={{ opacity: 0 }}
                  >
                    <PenSVG />
                  </span>
                </span>
              </span>
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-gray-400 text-xs sm:text-sm md:text-base max-w-[90%] md:max-w-4xl mx-auto mb-6 mt-2 leading-relaxed font-medium tracking-wide px-4"
          >
            I craft visual stories that connect brands with people. Specializing
            in visual identity, editorial design, and UI/UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mx-auto mb-0"
          >
            <MagicButton
              className="shadow-2xl px-6 py-2.5"
              onClick={() => onNavigate("About")}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm font-bold ">
                <ArrowRight
                  size={16}
                  className="text-white group-hover:translate-x-0.5 transition-transform"
                />
                About me
              </span>
            </MagicButton>

           
          </motion.div>
        </div>
      </div>
    </main>
  );
});

Breaf.displayName = "Breaf";

export default Breaf;
