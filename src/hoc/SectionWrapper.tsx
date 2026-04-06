import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl overflow-hidden`}
        id={idName}
      >
        <div className="ambient-orb -left-20 -top-20 h-64 w-64 bg-[#915eff]" />
        <div className="ambient-orb -right-20 -bottom-20 h-64 w-64 bg-[#06b6d4] [animation-delay:2s]" />
        
        {/* Parallax Platforms */}
        <div className="absolute -left-10 top-1/4 h-32 w-32 rounded-3xl bg-white/5 blur-2xl transition-transform duration-1000 group-hover:translate-y-5" />
        {/* Technical Viewfinders */}
        <div className="absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-[#915effb0]" />
        <div className="absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-[#915effb0]" />
        <div className="absolute bottom-6 left-6 h-4 w-4 border-b-2 border-l-2 border-[#915effb0]" />
        <div className="absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-[#915effb0]" />

        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
