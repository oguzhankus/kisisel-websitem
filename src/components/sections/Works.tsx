import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { content } from "../../constants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { useLanguage } from "../../context/LanguageContext";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const { language } = useLanguage();
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="max-sm:w-full"
    >
      <Tilt glareEnable tiltEnable tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor="#915eff" glareMaxOpacity={0.12} scale={1.02}>
        <div className="group relative w-full rounded-[32px] border border-white/5 bg-[#050510]/80 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#915eff]/40 hover:shadow-[0_0_40px_rgba(145,94,255,0.12)] sm:w-[360px] overflow-hidden">
          {/* Animated Neon Aura Glow on Hover */}
          <div className="pointer-events-none absolute -inset-px z-0 rounded-[32px] bg-gradient-to-br from-[#915eff]/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Scanning Shimmer */}
          <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute inset-0 h-full w-2/3 -skew-x-[35deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer" />
          </div>

          <div className="relative z-10 h-[210px] w-full overflow-hidden rounded-[24px] border border-white/5 transition-all duration-500 group-hover:border-[#915eff]/30">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 m-3 flex items-start justify-between">
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#915eff] backdrop-blur-md">
                {language === "tr" ? "MİMARİ" : "ARCH"}
              </span>
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-lg transition-all duration-300 hover:bg-[#915eff] hover:border-[#915eff] hover:scale-110"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain brightness-150"
                />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 px-1">
            <h3 className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-[24px] font-black tracking-tight text-transparent">
              {name}
            </h3>
            <p className="mt-3 text-secondary/80 text-[14px] leading-[1.8] font-medium line-clamp-2 italic">
              {description}
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`rounded-xl border border-white/5 bg-white/[0.04] px-3 py-1.5 text-[11px] font-black tracking-widest uppercase transition-all duration-300 hover:border-[#915eff]/40 hover:bg-[#915eff]/10 hover:shadow-[0_0_15px_rgba(145,94,255,0.2)] ${tag.color}`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { language } = useLanguage();
  const t = config[language];
  const { projects: projectsData } = content[language];

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-sm:px-2"
    >
      <Header useMotion={true} {...t.sections.works} />

      <div className="flex w-full items-start justify-between gap-8 max-lg:flex-col sm:gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-5 max-w-3xl text-[16px] leading-[1.8] sm:text-[17px] sm:leading-[32px]"
        >
          {t.sections.works.content}
        </motion.p>
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.8)}
          className="rounded-[30px] border border-white/5 bg-[#050510]/40 px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-8"
        >
          <p className="text-[12px] uppercase tracking-[0.25em] text-[#915eff]">
            {language === "tr" ? "Yaklaşım" : "Approach"}
          </p>
          <p className="mt-3 max-w-xs text-[15px] font-medium leading-7 text-foreground">
            {language === "tr"
              ? "Görsel kaliteyi, etkileşim tasarımını ve geliştirilebilir mimariyi aynı çizgide tutuyorum."
              : "I keep visual quality, interaction design, and scalable architecture in the same line."}
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 sm:mt-24 sm:gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "projects");
