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
          className="fixed bottom-24 right-6 z-[70] h-12 w-12 rounded-2xl border border-white/10 bg-[#050510]/80 p-3 shadow-[0_15px_40px_rgba(145,94,255,0.3)] backdrop-blur-xl group hover:border-[#915eff]/50 hover:shadow-[0_0_20px_rgba(145,94,255,0.5)] transition-all md:bottom-10 md:right-10 overflow-hidden active:scale-90"
          aria-label="Back to Top"
        >
          {/* Internal Pulse */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#915eff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 h-full w-full text-white group-hover:text-[#915eff] transition-colors"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
