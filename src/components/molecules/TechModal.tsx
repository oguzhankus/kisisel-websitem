import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { technologies } from "../../constants";

interface TechModalProps {
  activeTech: string | null;
  onClose: () => void;
  language: "tr" | "en";
  details: Record<string, string>;
}

const TechModal: React.FC<TechModalProps> = ({ activeTech, onClose, language, details }) => {
  if (!activeTech) return null;

  const techData = technologies.find((tech) => tech.name === activeTech);
  if (!techData) return null;

  return createPortal(
    <motion.div
      key={`tech-modal-${activeTech}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 sm:backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-surface-deep/98 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-none sm:backdrop-blur-3xl"
      >
        {/* Dynamic Illuminations */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#915eff]/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[80px]" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo Module */}
          <div className="mb-6 relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_30px_rgba(145,94,255,0.2)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#915eff]/30 to-transparent h-10 w-full animate-hitech-scan pointer-events-none" />
            <img src={techData.icon} alt={activeTech} className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] relative z-10" />
          </div>
          
          <h3 className="mb-4 bg-gradient-to-r from-white via-[#e879f9] to-cyan-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]">
            {activeTech}
          </h3>
          
          <p className="text-[15px] leading-relaxed text-secondary sm:text-[16px] sm:leading-[1.8] font-medium">
            {details[activeTech] || ""}
          </p>
          
          <button
            onClick={onClose}
            className="mt-8 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3 text-[13px] font-bold tracking-widest text-[#915eff] transition-all hover:bg-[#915eff]/10 hover:border-[#915eff]/50 hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] uppercase"
          >
            {language === "tr" ? "Kapat" : "Close"}
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default TechModal;
