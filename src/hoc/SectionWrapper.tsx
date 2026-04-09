import { motion } from "framer-motion";
import React, { useRef } from "react";

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
    const ref = useRef<HTMLElement>(null);

    return (
      <motion.section
        ref={ref}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        style={{ 
          contain: "paint layout",
          contentVisibility: "auto",
          minHeight: "400px" 
        }}
      >
        {/* Technical Viewfinders - Lightweight Visual Details */}
        <div className="absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-[#915eff40]" />
        <div className="absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-[#915eff40]" />
        <div className="absolute bottom-6 left-6 h-4 w-4 border-b-2 border-l-2 border-[#915eff40]" />
        <div className="absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-[#915eff40]" />

        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* 'Alive but Dormant' Rendering Path - Pre-Mounts the engine but prevents render overhead */}
        <div className="opacity-100 pointer-events-auto">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
