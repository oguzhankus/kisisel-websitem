import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const words = h2.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Content = () => (
    <div className="flex flex-col gap-3 relative group">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-[#915eff] shadow-[0_0_12px_rgba(145,94,255,1)] animate-pulse-neon" />
        <span className="inline-flex items-center rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-4 py-1.5 text-[12px] font-black uppercase tracking-[0.25em] text-[#915eff] shadow-[inset_0_0_10px_rgba(145,94,255,0.1)]">
          {p}
        </span>
      </div>
      
      <motion.h2 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.sectionHeadText} mt-2 flex flex-wrap gap-x-3 drop-shadow-[0_0_15px_rgba(145,94,255,0.2)] relative`}
      >
        {/* Digital Scan Line Effect - Masterpiece Grade */}
        <motion.div
          animate={{ 
            x: ["-100%", "250%"],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatDelay: 10,
            ease: "easeInOut" 
          }}
          className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-[#915eff]/15 to-transparent skew-x-[15deg] pointer-events-none z-[-1]"
        >
          <div className="absolute right-0 inset-y-0 w-[2px] bg-cyan-400 opacity-40 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        </motion.div>

        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={child}
            className={i === words.length - 1 ? "bg-gradient-to-r from-white via-[#915eff] to-cyan-400 bg-clip-text text-transparent animate-text-gradient font-black" : ""}
          >
            {word}
          </motion.span>
        ))}

        {/* CINEMATIC UNDERLINE GLOW */}
        <motion.div
           initial={{ width: 0, opacity: 0 }}
           whileInView={{ width: "60px", opacity: 1 }}
           transition={{ duration: 1, delay: 0.8 }}
           className="absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#915eff] to-transparent shadow-[0_0_15px_rgba(145,94,255,0.5)]"
        />
      </motion.h2>
    </div>
  );

  return useMotion === true ? (
    <div className="relative">
      <Content />
    </div>
  ) : (
    <Content />
  );
};
