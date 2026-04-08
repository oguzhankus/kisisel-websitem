import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { config } from "../../constants/config";

const Tech = () => {
  const { language } = useLanguage();
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const t = config[language].sections.tech;

  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#915eff]">
          {t.badge}
        </p>
        <h2 className="mt-3 text-[30px] font-bold tracking-tight text-foreground sm:text-[38px]">
          {t.h2}
        </h2>
        <p className="text-secondary mx-auto mt-4 max-w-xl text-[15px] leading-[1.75]">
          {t.lead}
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-5xl sm:mt-14">
        <div className="relative flex min-h-[3.25rem] items-center justify-center">
          <span
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
            aria-hidden
          />
          <span className="relative z-10 bg-primary px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary">
            {t.hr}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-7 sm:mt-12 sm:gap-9 max-sm:flex-col max-sm:items-center max-sm:w-full">
        {technologies.map((technology, i) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: i * 0.07,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-56 w-full max-w-[220px] cursor-pointer flex-col items-center gap-1 sm:h-64 sm:gap-2"
            onClick={() => setActiveTech(technology.name)}
          >
            <div className="relative overflow-hidden flex h-full w-full flex-col items-center justify-center gap-4 rounded-[32px] border border-white/10 bg-surface-deep/60 py-8 shadow-[0_15px_40px_-10px_rgba(145,94,255,0.15)] transition-all duration-300 group-hover:bg-surface-deep/80 group-hover:border-[#915eff]/40 group-hover:shadow-[0_20px_50px_-10px_rgba(145,94,255,0.3)]">
              {/* Radial Glow on Hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.1)_0%,transparent_70%)]" />
              
              {/* Neural Network Pattern on Hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 neural-network-bg" />

              {/* Persistent Holographic Edges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#915eff]/5 to-transparent opacity-50" />
              <div className="pointer-events-none absolute -top-[1px] left-[10%] h-[1px] w-[80%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent transition-all duration-500 group-hover:via-cyan-400 group-hover:w-[90%]" />
              
              <div className="relative z-10 flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{
                    duration: 4 + i * 0.2, // Offset animation sync
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-[85%] w-[85%] items-center justify-center rounded-full bg-foreground/[0.03] shadow-[inset_0_4px_20px_rgba(255,255,255,0.02)] p-4 border border-white/5 transition-all duration-300 group-hover:border-[#915eff]/30"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:scale-110"
                  />
                </motion.div>
              </div>
              <p className="mt-4 text-center text-[13px] font-bold tracking-wide text-foreground transition-colors group-hover:text-cyan-300">
                {technology.name}
              </p>
              <div className="mt-1 flex items-center gap-1.5 opacity-60">
                <p className="text-secondary text-center text-[10px] font-bold uppercase tracking-widest">
                  {t.active}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ultra Premium Tech Modal */}
      <AnimatePresence>
        {activeTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            onClick={() => setActiveTech(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-surface-deep/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(145,94,255,0.1)] backdrop-blur-2xl"
            >
              {/* Dynamic Illuminations */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#915eff]/20 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[80px]" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* 2D Logo Extraction for Modal */}
                <div className="mb-6 relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_30px_rgba(145,94,255,0.2)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#915eff]/30 to-transparent h-10 w-full animate-hitech-scan pointer-events-none" />
                  <img src={technologies.find(tech => tech.name === activeTech)?.icon} alt={activeTech} className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] relative z-10" />
                </div>
                
                <h3 className="mb-4 bg-gradient-to-r from-white via-[#e879f9] to-cyan-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]">
                  {activeTech}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-secondary sm:text-[16px] sm:leading-[1.8] font-medium">
                  {t.details[activeTech] || ""}
                </p>
                
                <button
                  onClick={() => setActiveTech(null)}
                  className="mt-8 rounded-full border border-white/10 bg-white/[0.05] px-8 py-3 text-[13px] font-bold tracking-widest text-[#915eff] transition-all hover:bg-[#915eff]/10 hover:border-[#915eff]/50 hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] uppercase"
                >
                  {language === "tr" ? "Kapat" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MemoizedTech = React.memo(Tech);
export default SectionWrapper(MemoizedTech, "tech");
