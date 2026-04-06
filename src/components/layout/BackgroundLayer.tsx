import { motion, useScroll, useTransform } from "framer-motion";
import { javascript, html, css, csharp, reactjs, tailwind, threejs } from "../../assets";

const icons = [javascript, html, css, csharp, reactjs, tailwind, threejs];

export const BackgroundLayer = () => {
  const { scrollY } = useScroll();
  
  // Parallax offsets for different layers
  const gridY = useTransform(scrollY, [0, 5000], [0, -200]);
  const dotsY = useTransform(scrollY, [0, 5000], [0, -400]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-primary">
      {/* High-Performance Texture Layers (Parallax + Breathing) */}
      <motion.div 
        style={{ y: dotsY }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="dot-matrix absolute inset-0 h-[120%]" 
      />
      <motion.div 
        style={{ y: gridY }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="cyber-grid absolute inset-0 h-[110%]" 
      />
      
      {/* Floating Icons Ecosystem (Multiplied for Richness) */}
      {[...icons, ...icons].map((icon, index) => {
        const startX = (index * 13) % 100;
        const endX = startX + (index % 2 === 0 ? 10 : -10);
        const startY = (index * 17) % 120;
        const size = index % 3 === 0 ? "h-10 w-10" : index % 2 === 0 ? "h-8 w-8" : "h-7 w-7";

        return (
          <motion.div
            key={index}
            initial={{ 
              x: `${startX}vw`, 
              y: `${startY}vh`, 
              opacity: 0,
            }}
            animate={{ 
              x: [`${startX}vw`, `${endX}vw`, `${startX}vw`], 
              y: [`${startY}vh`, "-10vh", "110vh", `${startY}vh`],
              opacity: [0, 0.22, 0.22, 0.22, 0],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{ 
              duration: 30 + (index % 5) * 8, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className={`absolute ${size} z-[-1] will-change-transform`}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full border border-white/5 bg-white/[0.04] p-[20%]">
              <img src={icon} alt="tech icon" className="h-full w-full object-contain opacity-25 grayscale brightness-[1.5] contrast-125" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
