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
  link,
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
      dateClassName="experience-date-offset"
      iconStyle={{ 
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
      icon={
        link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-full w-full items-center justify-center cursor-pointer group/icon"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Reverted Hitech Energy Ring - Optimized for non-clipping */}
            <div className="absolute inset-[1px] rounded-full border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-pulse group-hover/icon:border-cyan-400 group-hover/icon:shadow-[0_0_25px_rgba(34,211,238,0.6)]" />
            <div className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <div className="absolute inset-0 rounded-full border border-[#915eff]/30 animate-spin-slow" style={{ animationDuration: '3s' }} />
            </div>

            <div className="relative z-10 flex h-full w-full items-center justify-center p-2 transition-transform duration-500 group-hover/icon:scale-110">
              <img
                src={icon}
                alt={companyName}
                className="h-full w-full object-contain rounded-full brightness-125 transition-all duration-500"
                style={{ 
                  mixBlendMode: 'lighten',
                  filter: 'contrast(1.2) brightness(1.3) drop-shadow(0 0 10px rgba(145,94,255,0.6))' 
                }}
              />
            </div>
          </a>
        ) : (
          <div className="relative flex h-full w-full items-center justify-center pointer-events-none">
            {/* Reverted Hitech Energy Ring - Optimized for non-clipping */}
            <div className="absolute inset-[1px] rounded-full border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] animate-pulse" />
            <div className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
               <div className="absolute inset-0 rounded-full border border-[#915eff]/30 animate-spin-slow" style={{ animationDuration: '3s' }} />
            </div>

            <div className="relative z-10 flex h-full w-full items-center justify-center p-2">
              <img
                src={icon}
                alt={companyName}
                className="h-full w-full object-contain rounded-full brightness-125 transition-all duration-500"
                style={{ 
                  mixBlendMode: 'lighten',
                  filter: 'contrast(1.2) brightness(1.3) drop-shadow(0 0 10px rgba(145,94,255,0.6))' 
                }}
              />
            </div>
          </div>
        )
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
