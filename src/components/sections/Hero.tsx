import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { useLanguage } from "../../context/LanguageContext";

const heroTechStrip = [
  { value: "JavaScript", label: "Dinamik davranış & mantık" },
  { value: "HTML", label: "Anlamsal yapı" },
  { value: "CSS", label: "Stil, düzen, responsive" },
  { value: "C#", label: "Nesne yönelimli programlama" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = config[language];
  const sectionRef = React.useRef<HTMLElement>(null);

  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroTechLabels: Record<string, string> = {
    JavaScript: language === "tr" ? "Dinamik davranış & mantık" : "Dynamic behavior & logic",
    HTML: language === "tr" ? "Anlamsal yapı" : "Semantic structure",
    CSS: language === "tr" ? "Stil, düzen, responsive" : "Style, layout, responsive",
    "C#": language === "tr" ? "Nesne yönelimli programlama" : "Object-oriented programming",
  };

  return (
    <section ref={sectionRef} className="relative isolate min-h-[100svh] w-full overflow-x-hidden pb-20 sm:pb-24">
      {/* Optimized Depth Layer - Minimal Overdraw */}
      
      {/* Static Visual Identity Layer */}
      <div 
        className="hero-gradient-layer pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(145,94,255,0.18),transparent_50%),radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(6,182,212,0.1),transparent_45%)] opacity-50"
        style={{ transform: `translate3d(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px, 0)` }}
        aria-hidden
      />
      
      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#050510]/30" />
      
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[45%] z-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-40"
        aria-hidden
      />

      <div
        className={`relative z-10 mx-auto flex max-w-7xl flex-col ${styles.paddingX} pb-10 pt-36 sm:pt-40 lg:pt-44`}
      >
        <div className="relative z-20 w-full group/hero">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ 
              transform: `translate3d(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px, 0) rotateX(${mousePos.y * -0.01}deg) rotateY(${mousePos.x * 0.01}deg)`,
            }}
            className="relative w-full max-w-none pb-2"
          >
            <div className="mt-2 hidden flex-col items-center justify-center sm:absolute sm:left-[-3rem] sm:top-2 sm:flex">
              <div className="h-2 w-2 rounded-full bg-[#915EFF] shadow-[0_0_12px_rgba(145,94,255,0.8)] animate-pulse-neon" />
              <div className="violet-gradient h-32 w-px sm:h-48" />
            </div>

            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-gradient-to-r from-[#915eff]/15 to-cyan-500/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd] shadow-[0_0_24px_rgba(145,94,255,0.12)] hover:border-[#915eff]/40 transition-colors cursor-default">
                {t.sections.about.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`${styles.heroHeadText} mt-6 break-words max-sm:text-[clamp(1.75rem,8vw,2.5rem)] max-sm:leading-[1.2]`}
            >
              <span className="inline sm:whitespace-nowrap font-light opacity-90">
                {language === "tr" ? "Merhaba, ben " : "Hi, I'm "}
              </span>
              <motion.span 
                animate={{ 
                  textShadow: ["0 0 20px rgba(145,94,255,0.1)", "0 0 35px rgba(145,94,255,0.3)", "0 0 20px rgba(145,94,255,0.1)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block sm:inline sm:whitespace-nowrap bg-gradient-to-r from-[#915eff] via-[#e879f9] to-[#22d3ee] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(145,94,255,0.45)] animate-text-gradient font-black relative group"
              >
                {t.hero.name}
                <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-12 h-[2px] bg-[#915eff] group-hover:w-full transition-all duration-700" />
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-none text-pretty text-[16px] font-semibold leading-[1.6] tracking-tight text-foreground/90 sm:text-[17px] lg:text-[18px] lg:leading-[1.75] max-sm:pr-2"
            >
              {t.hero.lead}
            </motion.p>

            {t.hero.body.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="mt-5 max-w-none text-pretty text-[14px] leading-[1.8] text-secondary sm:mt-5 sm:text-[16px] sm:leading-[1.9] lg:text-[17px] lg:leading-[1.92] max-sm:pr-2"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-14 flex flex-wrap gap-5 sm:mt-16"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-white to-[#e8e6ff] px-10 py-4 text-[16px] font-black uppercase tracking-widest text-slate-900 shadow-[0_12px_40px_rgba(145,94,255,0.35)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5),0_16px_48px_rgba(145,94,255,0.45)] max-sm:w-full max-sm:text-center"
              >
                <div className="absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
                <span className="relative z-10">{t.hero.cta}</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 text-[16px] font-black uppercase tracking-widest text-white shadow-[0_0_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#915eff]/50 hover:bg-white/[0.07] hover:shadow-[0_0_32px_rgba(145,94,255,0.2)] max-sm:w-full max-sm:text-center"
              >
                <div className="absolute inset-0 z-0 h-full w-[200%] translate-x-[-100%] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:animate-shimmer" />
                <span className="relative z-10">{t.hero.ctaSecondary}</span>
              </motion.a>
             </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-30 mb-8 mt-12 flex w-full overflow-hidden sm:mb-20 sm:mt-10 group"
        >
          {/* Mobile HUD Edge Fades - High Cinematic Density */}
          <div className="pointer-events-none absolute left-[-2px] top-0 z-40 h-full w-24 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          <div className="pointer-events-none absolute right-[-2px] top-0 z-40 h-full w-24 bg-gradient-to-l from-primary via-primary/50 to-transparent" />
          
          <motion.div 
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              duration: 32, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex w-max items-center gap-4 py-2"
            style={{ willChange: "transform" }}
          >
            {[...heroTechStrip, ...heroTechStrip].map((item, index) => (
              <motion.a
                key={`${item.value}-${index}`}
                href="#tech"
                whileTap={{ scale: 0.94 }}
                className="group relative flex shrink-0 cursor-pointer items-center gap-4 rounded-2xl border border-white/5 bg-[#050510]/80 px-6 py-4 shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_0_10px_rgba(145,94,255,0.02)] transition-all duration-300 hover:border-[#915eff]/30 hover:bg-[#050510]/95 sm:rounded-full sm:px-7 sm:py-3.5"
              >
                {/* HUD Scan Pulse Animation */}
                <div className="pointer-events-none absolute inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-[#915eff] to-transparent opacity-0 transition-all duration-500 group-hover:inset-x-0 group-hover:opacity-100 blur-[0.5px]" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[#22d3ee]/0 opacity-0 transition-all duration-500 group-hover:border-[#22d3ee]/20 group-hover:opacity-100" />
                
                <p className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-[15px] font-black tracking-tight text-transparent transition-all duration-300 group-hover:from-cyan-400 group-hover:to-[#915eff] sm:text-[16px]">
                  {item.value}
                </p>
                <div className="h-4 w-px bg-white/10 transition-colors group-hover:bg-cyan-400/40" />
                <p className="whitespace-nowrap text-[12px] font-bold text-secondary/60 transition-colors group-hover:text-white/90 sm:text-[13px]">
                  {heroTechLabels[item.value]}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none relative z-[2] h-[clamp(18rem,40vh,26rem)] w-full sm:h-[clamp(24rem,50vh,32rem)] gpu-accel layer-promote"
      >
        <ComputersCanvas />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-28 bg-gradient-to-t from-primary via-primary/40 to-transparent sm:h-32" />

    </section>
  );
};

export default React.memo(Hero);
