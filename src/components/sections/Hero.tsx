import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { CyberPedestal, DigitalShards } from "../atoms/HeroDecoration";
import { useLanguage } from "../../context/LanguageContext";

const heroTechStrip = [
  { value: "JavaScript", label: "Dinamik davranış & mantık" },
  { value: "HTML", label: "Anlamsal yapı" },
  { value: "CSS", label: "Stil, düzen, responsive" },
  { value: "C#", label: "Nesne yönelimli programlama" },
];

// Ambient Particles Component for Depth
const AmbientParticles = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
          className="absolute h-1 w-1 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_8px_#22d3ee]"
        />
      ))}
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 90,
      duration: 0.6,
    },
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = config[language];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const heroTechLabels: Record<string, string> = {
    JavaScript: language === "tr" ? "Dinamik davranış & mantık" : "Dynamic behavior & logic",
    HTML: language === "tr" ? "Anlamsal yapı" : "Semantic structure",
    CSS: language === "tr" ? "Stil, düzen, responsive" : "Style, layout, responsive",
    "C#": language === "tr" ? "Nesne yönelimli programlama" : "Object-oriented programming",
  };

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-x-hidden pb-20 sm:pb-24">
      {/* Ambient Depth Layer */}
      <AmbientParticles />
      
      {/* Dynamic Background Decor */}
      <DigitalShards />
      <CyberPedestal />

      <motion.div
        animate={{ 
          x: mousePos.x * -0.5,
          y: mousePos.y * -0.5
        }}
        className="hero-gradient-layer pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_-20%,rgba(145,94,255,0.22),transparent_50%),radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(6,182,212,0.12),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(91,33,182,0.18),transparent_40%)] transition-opacity duration-300"
        aria-hidden
      />
      
      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,16,0.4)_70%,rgba(5,5,16,0.8)_100%)]" />
      
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[45%] z-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"
        aria-hidden
      />

      <div
        className={`relative z-10 mx-auto flex max-w-7xl flex-col ${styles.paddingX} pb-10 pt-36 sm:pt-40 lg:pt-44`}
      >
        <div className="relative z-20 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
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
                className="inline whitespace-nowrap bg-gradient-to-r from-[#915eff] via-[#e879f9] to-[#22d3ee] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(145,94,255,0.45)] animate-text-gradient font-black relative group"
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-30 mb-8 mt-12 flex w-full justify-start overflow-x-auto pb-4 max-sm:-mx-6 max-sm:px-6 sm:mb-20 sm:mt-10 sm:justify-center sm:overflow-visible sm:pb-0 group"
        >
          {/* Mobile Scroll Indicator Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-40 h-full w-20 bg-gradient-to-l from-primary via-primary/40 to-transparent opacity-0 transition-opacity duration-300 max-sm:opacity-100 sm:hidden" />
          
          <div className="flex w-max items-center justify-center gap-2 rounded-full border border-white/5 bg-[#050510]/60 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(145,94,255,0.05)] sm:gap-3 sm:p-2.5">
            {heroTechStrip.map((item) => (
              <motion.a
                key={item.value}
                href="#tech"
                whileTap={{ scale: 0.96 }}
                animate={{ 
                  y: [0, mousePos.y * 0.15, 0],
                  x: [0, mousePos.x * 0.15, 0]
                }}
                className="group relative flex cursor-pointer items-center gap-3 rounded-full border border-transparent px-5 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] sm:px-6 sm:py-3.5"
              >
                {/* Glowing bottom indicator */}
                <div className="pointer-events-none absolute -bottom-px left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-all duration-300 group-hover:w-[60%] group-hover:opacity-100" />
                
                <p className="bg-gradient-to-br from-foreground to-secondary/60 bg-clip-text text-[15px] font-bold tracking-wide text-transparent transition-all duration-300 group-hover:from-cyan-500 group-hover:to-purple-600 sm:text-[16px]">
                  {item.value}
                </p>
                <div className="h-4 w-px bg-white/10 transition-colors group-hover:bg-[#915eff]/50" />
                <p className="whitespace-nowrap text-[12px] font-medium text-secondary/60 transition-colors group-hover:text-cyan-50 sm:text-[13px]">
                  {heroTechLabels[item.value]}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none relative z-[2] h-[clamp(18rem,40vh,26rem)] w-full sm:h-[clamp(24rem,50vh,32rem)]"
      >
        <ComputersCanvas />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-28 bg-gradient-to-t from-primary via-primary/40 to-transparent sm:h-32" />

    </section>
  );
};

export default Hero;
