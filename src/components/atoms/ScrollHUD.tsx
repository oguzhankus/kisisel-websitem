import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollHUD = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      className="fixed right-4 top-1/2 z-[100] hidden h-32 w-px -translate-y-1/2 sm:right-8 sm:block"
    >
      {/* Background Rail */}
      <div className="absolute inset-0 bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.02)]" />
      
      {/* Active Progress */}
      <motion.div
        style={{ scaleY }}
        className="absolute inset-x-[-1px] top-0 h-full origin-top bg-gradient-to-b from-[#915eff] via-cyan-400 to-[#915eff] shadow-[0_0_10px_rgba(145,94,255,0.4)]"
      />


      
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="h-1 w-1 rounded-full bg-cyan-400/40" />
        <div className="h-1 w-1 rounded-full bg-cyan-400/20" />
        <div className="h-1 w-1 rounded-full bg-cyan-400/10" />
      </div>
    </motion.div>
  );
};
