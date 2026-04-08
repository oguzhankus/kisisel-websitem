import { memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { javascript, html, css, csharp, reactjs, tailwind, threejs, docker, figma, git, mongodb, nodejs, redux, typescript } from "../../assets";

const icons = [javascript, html, css, csharp, reactjs, tailwind, threejs, docker, figma, git, mongodb, nodejs, redux, typescript];

export const BackgroundLayer = memo(() => {
  const { scrollY } = useScroll();
  
  // Parallax offsets for different layers
  const gridY = useTransform(scrollY, [0, 5000], [0, -200]);
  const dotsY = useTransform(scrollY, [0, 5000], [0, -400]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#050510]">
      {/* ZENITH 3.0: AUTONOMOUS MESH GRADIENT SYSTEM - OPTIMIZED */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-25">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[20%] bg-[radial-gradient(circle_at_20%_20%,#1e1b4b_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#0f172a_0%,transparent_100%)] blur-[40px]" 
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [180, 0, 180]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[20%] bg-[radial-gradient(circle_at_70%_20%,#164e6310_0%,transparent_40%)] blur-[50px]" 
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        />
      </div>

      {/* High-Performance Texture Layers (Parallax + Breathing) */}
      <motion.div 
        style={{ y: dotsY }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="dot-matrix absolute inset-0 h-[120%]" 
      />
      <motion.div 
        style={{ y: gridY }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="cyber-grid absolute inset-0 h-[110%]" 
      />
      
      {/* Power Lines - Vertical Global Guides (Zenith 2.0) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05]">
        <div className="absolute left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#915eff]/40 to-transparent shadow-[0_0_15px_rgba(145,94,255,0.2)]" />
        <div className="absolute left-[40%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
        <div className="absolute right-[40%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
        <div className="absolute right-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#915eff]/40 to-transparent shadow-[0_0_15px_rgba(145,94,255,0.2)]" />
      </div>
      
      {/* DATA FLOW - AUTONOMOUS PARTICLES - CSS COMPOSITOR OPTIMIZED */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="animate-data-stream absolute h-[60px] w-[0.5px] bg-cyan-400/20"
            style={{ 
              left: `${(i * 24) % 100}vw`,
              animationDuration: `${18 + i * 4}s`,
              animationDelay: `${-i * 3}s`
            }}
          />
        ))}

        {[...Array(4)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="animate-dust absolute h-[1.5px] w-[1.5px] bg-[#915eff]/15 rounded-full"
            style={{ 
              left: `${(i * 22) % 100}vw`,
              top: `${(i * 25) % 100}vh`,
              animationDuration: `${15 + i * 3}s`,
              animationDelay: `${-i * 2}s`
            }}
          />
        ))}
      </div>

      {/* ZENITH AMBIENT DEPTH - ULTRA-OPTIMIZED BACKGROUND */}
      <div 
        className="absolute left-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-[#1e1b4b]/10 opacity-20" 
        style={{ transform: "translate3d(0,0,0)" }}
      />
      
      {/* ZENITH 6.0: PURE CSS SYMBOLS - AMBIENT CHAOS MODE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...icons, ...icons.slice(0, 6)].map((icon, i) => {
          // Diverse durations for varying speeds
          const duration = 25 + (i * 3) % 25;
          // Massive negative delays to scatter them vertically across the whole screen on load
          const delay = (i * -13.7) % duration;
          // Prime-based scattering for left positions to prevent vertical clumping
          const left = (i * 17 + (i % 5) * 23) % 96;
          // Varied sizes for atmospheric depth
          const size = 28 + (i % 4) * 8;
          
          return (
            <div
              key={`css-icon-${i}`}
              className="animate-float-up absolute opacity-20 transition-opacity"
              style={{ 
                height: `${size}px`,
                width: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                left: `${left}vw`,
                transformStyle: "preserve-3d"
              }}
            >
              <img src={icon} alt="" className="h-full w-full object-contain" />
            </div>
          );
        })}
      </div>
    </div>
  );
});
