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
  iconBg,
  date,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.6)",
        color: "#fff",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(145, 94, 255, 0.05)",
        borderRadius: "32px",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        backdropFilter: "blur(12px)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(145, 94, 255, 0.2)",
      }}
      date={date}
      iconStyle={{ 
        background: iconBg,
        boxShadow: "0 0 0 4px rgba(145, 94, 255, 0.4), 0 0 20px rgba(145, 94, 255, 0.3)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center p-[2px]">
          <img
            src={icon}
            alt={companyName}
            className="h-full w-full rounded-full object-contain brightness-125 transition-transform hover:scale-110"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[22px] font-bold text-foreground">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-foreground-secondary pl-1 text-[14px] tracking-wider"
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

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true} lineColor="#915eff33">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "work");
