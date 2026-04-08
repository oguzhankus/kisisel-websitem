import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

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
    const [shouldRender, setShouldRender] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShouldRender(entry.isIntersecting);
        },
        { rootMargin: "800px" } // Pre-load or unload at a safe distance
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
        style={{ 
          contain: "paint layout",
          contentVisibility: "auto",
          minHeight: "400px" 
        }}
        id={idName}
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
        <div className={shouldRender ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}>
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
