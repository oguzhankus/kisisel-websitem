import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[70] h-12 w-12 rounded-2xl border border-white/10 bg-[#050510]/80 p-3 shadow-[0_15px_40px_rgba(145,94,255,0.3)] backdrop-blur-xl group hover:border-[#915eff]/50 hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] transition-all md:bottom-10 md:right-10 overflow-visible active:scale-90"
          aria-label="Back to Top"
        >
          {/* HUD Corner Markers */}
          <div className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-[#915eff]/0 group-hover:border-[#915eff]/60 transition-all duration-500" />
          <div className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-[#915eff]/0 group-hover:border-[#915eff]/60 transition-all duration-500" />
          <div className="absolute -left-1 -bottom-1 h-2 w-2 border-l border-b border-[#915eff]/0 group-hover:border-[#915eff]/60 transition-all duration-500" />
          <div className="absolute -right-1 -bottom-1 h-2 w-2 border-r border-b border-[#915eff]/0 group-hover:border-[#915eff]/60 transition-all duration-500" />

          {/* Core Energy Pulse */}
          <div className="absolute inset-0 rounded-[inherit] bg-[#915eff]/10 animate-pulse-neon opacity-0 group-hover:opacity-100" />
          
          {/* Animated Outer Ring */}
          <div className="absolute -inset-[2px] rounded-[inherit] border border-[#915eff]/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 h-full w-full text-white/80 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-y-1"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
