import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { content } from "../../constants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import { useLanguage } from "../../context/LanguageContext";
import { ProjectModal } from "..";

const ProjectCard: React.FC<{ index: number; onClick: () => void } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  onClick,
}) => {
  const { language } = useLanguage();
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.15, 1)}
      className="max-sm:w-full cursor-pointer"
      onClick={onClick}
    >
      <Tilt 
        glareEnable 
        tiltEnable 
        tiltMaxAngleX={6} 
        tiltMaxAngleY={6} 
        glareColor="#915eff" 
        glareMaxOpacity={0.12} 
        scale={1.02}
        transitionSpeed={2000}
      >
        <div className="glass-glint-container group relative w-full rounded-[32px] overflow-hidden neon-border-pulse gpu-accel sm:w-[360px]">
          <div className="relative h-full w-full bg-[#050510]/92 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_0_50px_rgba(145,94,255,0.2)] rounded-[31px] border border-white/5 group-hover:border-[#915eff]/30">
            {/* HUD Markers */}
            <div className="hud-corner-marker top-left" />
            <div className="hud-corner-marker top-right" />
            <div className="hud-corner-marker bottom-left" />
            <div className="hud-corner-marker bottom-right" />

            {/* Fractal/Prism Aura Glow - Master Optimized */}
            <div className="pointer-events-none absolute -inset-2 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[40px]" style={{ background: "linear-gradient(45deg, #915eff, #22d3ee, #915eff)" }} />
          
            {/* Glass Refraction Layer */}
            <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-gradient-to-br from-white/[0.02] via-transparent to-[#915eff]/[0.02]" />

            <div className="relative z-10 h-[210px] w-full overflow-hidden rounded-[24px] border border-white/5 transition-all duration-700 group-hover:border-[#915eff]/40">
              {/* LCD Scanline Overlay - Digital High-Tech Look */}
              <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 overflow-hidden">
                <div className="absolute inset-0 h-[200%] w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#fff_1px,#fff_2px)] animate-scanline" />
              </div>

              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 prism-refraction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
              
              <div className="absolute inset-0 m-4 flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <span className="rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#915eff] shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md group-hover:border-[#915eff]/30 transition-all">
                    {language === "tr" ? "MİMARİ" : "ARCH"}
                  </span>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(sourceCodeLink, "_blank");
                  }}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-[#915eff] hover:border-[#915eff] hover:scale-110 active:scale-95 group/github"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain brightness-150 group-hover/github:brightness-200"
                  />
                  <div className="absolute -bottom-1 h-[2px] w-4 bg-[#915eff] blur-[3px] opacity-0 group-hover/github:opacity-100" />
                </div>
              </div>

            </div>

            <div className="relative z-10 mt-7 px-1">
              <h3 className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-[22px] font-black tracking-tight text-transparent transition-colors group-hover:text-cyan-400 leading-tight">
                {name}
              </h3>
              <p className="mt-3.5 text-secondary/70 text-[13.5px] leading-[1.8] font-medium line-clamp-2 italic group-hover:text-secondary group-hover:line-clamp-none transition-all duration-500">
                {description}
              </p>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2.5 translate-y-2 group-hover:translate-y-0 transition-all duration-700">
              {tags.map((tag) => (
                <motion.div
                  key={tag.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2 transition-all duration-300 hover:border-[#915eff]/40 hover:bg-[#915eff]/10 hover:shadow-[0_0_20px_rgba(145,94,255,0.15)] cursor-default ring-1 ring-white/5"
                >
                  <div className={`h-1.5 w-1.5 rounded-full shadow-[0_0_8px_currentColor] animate-pulse ${tag.color.replace("-text-gradient", "")}-text-gradient`} 
                    style={{ backgroundColor: tag.color.includes("blue") ? "#22d3ee" : tag.color.includes("green") ? "#4ade80" : "#915eff" }}
                  />
                  <span className={`text-[11px] font-black tracking-widest uppercase ${tag.color}`}>
                    {tag.name}
                  </span>
                </motion.div>
              ))}
            </div>
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
  const [selectedProject, setSelectedProject] = React.useState<TProject | null>(null);

  return (
    <motion.div
      variants={staggerContainer(0.05)}
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
          className="rounded-[30px] border border-white/5 bg-[#050510]/40 px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-8 hover:border-[#915eff]/20 transition-colors"
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

      <div className="mt-16 flex flex-wrap gap-10 sm:mt-24 sm:gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            language={language}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MemoizedWorks = React.memo(Works);
export default SectionWrapper(MemoizedWorks, "projects");
