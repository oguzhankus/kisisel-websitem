import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../../utils/motion";

const ExperienceCard: React.FC<TExperience> = ({
  title,
  companyName,
  icon,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(10, 10, 24, 0.95)",
        color: "#fff",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        borderRadius: "28px",
        border: "1px solid rgba(145, 94, 255, 0.25)",
      }}
      className="glass-glint-container will-change-transform"
      contentArrowStyle={{
        borderRight: "7px solid rgba(145, 94, 255, 0.25)",
      }}
      date={date}
      iconStyle={{ 
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
      icon={
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Cyber-Crystal Geometric Base (Hexagon) */}
          <div className="absolute inset-[-6px] bg-gradient-to-br from-[#915eff] via-cyan-400 to-[#915eff] opacity-40 animate-pulse" 
               style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} 
          />
          
          <div className="relative z-10 flex h-[90%] w-[90%] items-center justify-center bg-[#050510]/90 backdrop-blur-xl shadow-[inset_0_0_20px_rgba(145,94,255,0.3)]"
               style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            {/* Internal Holographic Scan-Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#915eff]/40 to-transparent h-1/4 w-full animate-hitech-scan pointer-events-none z-20" />
            
            {/* Data-Node Sparkles */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white shadow-[0_0_8px_#fff] animate-ping" />
            
            <img
              src={icon}
              alt={companyName}
              className="relative z-10 h-[65%] w-[65%] object-contain rounded-full brightness-125 transition-all duration-500 group-hover:scale-110"
              style={{ 
                mixBlendMode: 'lighten',
                filter: 'contrast(1.2) brightness(1.3) drop-shadow(0 0 10px rgba(145,94,255,0.6))' 
              }}
            />
          </div>

          {/* Neural Connector Threads (Visual Only) */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-t from-cyan-400/50 to-transparent" />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-b from-[#915eff]/50 to-transparent" />
        </div>
      }
    >
      {/* HUD Markers */}
      <div className="hud-corner-marker top-left opacity-30" />
      <div className="hud-corner-marker top-right opacity-30" />
      <div className="hud-corner-marker bottom-left opacity-30" />
      <div className="hud-corner-marker bottom-right opacity-30" />

      <div>
        <h3 className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-[22px] font-black tracking-tight text-transparent leading-tight">
          {title}
        </h3>
        <p
          className="text-[#915eff] mt-1 text-[13px] font-black uppercase tracking-[0.2em] opacity-80"
          style={{ margin: 0 }}
        >
          {companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-3">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary/90 pl-1 text-[13.5px] leading-relaxed tracking-wide"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const t = config[language];
  const { experiences } = content[language];

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Header useMotion={true} {...t.sections.experience} />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[16px] leading-8"
      >
        {t.sections.experience.lead}
      </motion.p>

      <div className="mt-16 flex flex-col relative overflow-hidden">
        {/* Optimized Data-Stream Background for Timeline */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#915eff]/10 -translate-x-1/2 overflow-hidden sm:block hidden">
          <div className="absolute top-0 h-24 w-full bg-cyan-400/30 animate-hitech-scan will-change-transform" style={{ animationDuration: '4s' }} />
        </div>

        <VerticalTimeline animate={true} lineColor="rgba(145, 94, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

const MemoizedExperience = React.memo(Experience);
export default SectionWrapper(MemoizedExperience, "work");
