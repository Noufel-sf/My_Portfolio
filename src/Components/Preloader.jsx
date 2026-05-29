import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Preloader = ({ onComplete = () => {} }) => {
  const preloaderRef = useRef(null)
  const barFillRef = useRef(null)
  const barTrackRef = useRef(null)
  const textRef = useRef(null)
  const containerRef = useRef(null)

  const [isComplete, setIsComplete] = useState(false)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
        },
        (context) => {
          const { isDesktop } = context.conditions
          const tl = gsap.timeline({
            onComplete: () => {
              gsap.to(preloaderRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: 'expo.inOut',
                onComplete: () => {
                  setIsComplete(true)
                  onComplete()
                },
              })
            },
          })

          // 1. Setup initial state

          gsap.set(barTrackRef.current, {
            rotation: 90,
            x: isDesktop ? 60 : 42,
          })

          gsap.set(textRef.current, { x: 0 })

          tl.to(barTrackRef.current, {
            opacity: 30,
            duration: 0.4,
          })
            // 2. The Filling Animation
            .to(barFillRef.current, {
              scaleY: 1,
              duration: 2.5,
              ease: 'power1.inOut',
            })
            // 3. The Flip & Center
            .to(
              barTrackRef.current,
              {
                x: 0,
                rotation: 0,
                duration: 0.8,
                ease: 'expo.inOut',
              },
              '+=0.1'
            )
            // 4. Reveal Text
            .to(
              textRef.current,
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: 'back.out(1.7)',
              },
              '-=0.3'
            )
        }
      )
    },
    { scope: containerRef }
  )

  if (isComplete) return null

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-999 flex items-center justify-center overflow-hidden bg-black"
    >
      <div ref={containerRef} className="flex scale-[2] items-baseline gap-1">
        <div
          ref={barTrackRef}
          className="relative h-8 w-3 overflow-hidden bg-white/10 opacity-0 will-change-transform"
        >
          <div
            ref={barFillRef}
            className="absolute inset-0 origin-bottom scale-y-0 bg-[#7A93A8] will-change-transform"
          />

        </div>

        <h1
          ref={textRef}
          className=" font-extrabold text-5xl lg:text-4rem uppercase leading-none heading tracking-tighter text-white opacity-0"
        >
          NSF
        </h1>
      </div>
    </div>
  )
}

export default Preloader
