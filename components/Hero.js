import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const visual = useRef(null);
  const bgText = useRef(null);

  useEffect(() => {
    gsap.from(".char", {
      y: 80,
      opacity: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.from(".metric", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      delay: 0.8,
      duration: 0.8
    });

    gsap.to(visual.current, {
      y: -260,
      scale: 1.06,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(bgText.current, {
      y: 200,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section className="hero h-screen relative overflow-hidden flex flex-col items-center justify-center">

      {/* background parallax text */}
      <div
        ref={bgText}
        className="absolute inset-0 flex items-center justify-center text-[18rem] font-bold opacity-[0.05] select-none"
      >
        MOTION
      </div>

      {/* headline */}
      <h1 className="text-4xl md:text-6xl tracking-ultra z-10 mb-12">
        {"WELCOME ITZ FIZZ".split("").map((c, i) => (
          <span key={i} className="char inline-block">
            {c}
          </span>
        ))}
      </h1>

      {/* metrics */}
      <div className="flex gap-16 z-10">
        <div className="metric text-center">
          <p className="text-4xl font-bold">99%</p>
          <p className="text-xs tracking-widest uppercase">Performance</p>
        </div>
        <div className="metric text-center">
          <p className="text-4xl font-bold">150+</p>
          <p className="text-xs tracking-widest uppercase">Projects</p>
        </div>
        <div className="metric text-center">
          <p className="text-4xl font-bold">5★</p>
          <p className="text-xs tracking-widest uppercase">Rating</p>
        </div>
      </div>

      {/* main visual */}
      <div
        ref={visual}
        className="absolute bottom-12 w-[440px] h-[170px] rounded-3xl 
                   bg-gradient-to-r from-zinc-700 to-zinc-500 
                   shadow-2xl flex items-center justify-center tracking-widest"
      >
        PRIMARY VISUAL
      </div>
    </section>
  );
}