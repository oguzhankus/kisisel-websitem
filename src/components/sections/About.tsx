import React, { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { content } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../assets";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full max-w-[280px] xs:w-[280px] group gpu-accel"
    >
      <div className="relative h-full rounded-[30px] border border-white/5 bg-surface-deep/90 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#915eff]/30 overflow-hidden">
        {/* Zenith Prism Scan Trace - High Fidelity */}
        <div className="absolute inset-x-[-150%] inset-y-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,transparent_45%,#915eff_50%,transparent_55%,transparent_100%)] animate-spin-slow" style={{ animationDuration: '6s' }} />
        </div>

        <div className="relative z-10 flex min-h-[340px] flex-col items-center rounded-[29px] bg-[#050510]/95 px-8 py-7 overflow-hidden">
          {/* HUD Data Shimmer */}
          <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:block transition-all duration-1000 group-hover:opacity-100">
            <div className="absolute inset-0 h-full w-1/2 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
          </div>

          {/* Persistent Holographic Edge Top */}
          <div className="pointer-events-none absolute -top-[1px] left-[15%] h-[1px] w-[70%] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-all duration-500 group-hover:via-cyan-400 group-hover:w-[80%]" />

          <div
            className="relative z-10 mt-2 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-transparent shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#915eff]/30 p-2"
            style={{ transform: "translateZ(45px)" }}
          >
            <img
              src={icon}
              alt={title}
              className="h-full w-full object-contain rounded-full drop-shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(145,94,255,0.6)]"
              style={{ mixBlendMode: 'lighten', filter: 'brightness(1.3) contrast(1.1)' }}
            />
            <div className="absolute -bottom-2 h-[2px] w-10 bg-[#915eff] blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <h3 className="mt-8 text-center text-[19px] font-black leading-tight text-white group-hover:text-cyan-400 transition-colors" style={{ transform: "translateZ(35px)" }}>
            {title}
          </h3>

          <p className="mt-5 text-center text-[13px] leading-6 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(25px)" }}>
            {description}
          </p>

          {/* Zenith Bottom Flowing Design - Reverted numbering to original pulsing style */}
          <div className="mt-auto w-full pt-8 relative overflow-hidden" style={{ transform: "translateZ(15px)" }}>
            <div className="flex w-full items-center justify-between gap-4">
              <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#915eff] to-cyan-400"
                />
              </div>
              <span className="text-[20px] font-black tracking-widest text-[#915eff] animate-pulse drop-shadow-[0_0_8px_rgba(145,94,255,0.4)]">
                0{index + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Logic: Only animate if the value contains a percentage (100%)
  const shouldAnimate = value.includes("%");

  const numericMatch = value.match(/\d+/);
  const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(targetValue.toString(), "");

  // Slower spring for a premium feel
  const springValue = useSpring(0, {
    stiffness: 15,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView && shouldAnimate) {
      springValue.set(targetValue);
    }
  }, [isInView, springValue, targetValue, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue, shouldAnimate]);

  if (!shouldAnimate) {
    return <span className="tabular-nums">{value}</span>;
  }

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

const About = () => {
  const { language } = useLanguage();
  const t = config[language];
  const { services } = content[language];

  const focusCards = [
    {
      title: language === "tr" ? "UI Kalitesi" : "UI Quality",
      value: language === "tr" ? "Temiz ve modern görsel hiyerarşi" : "Clean and modern visual hierarchy",
    },
    {
      title: language === "tr" ? "Performans" : "Performance",
      value: language === "tr" ? "Hızlı yüklenen ve akıcı deneyimler" : "Fast-loading and fluid experiences",
    },
    {
      title: language === "tr" ? "İletişim" : "Communication",
      value: language === "tr" ? "Fikirden yayına kadar şeffaf süreç" : "Transparent process from idea to launch",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-sm:px-2"
    >
      <Header useMotion={true} {...t.sections.about} />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-stretch"
      >
        {/* Zenith Operator - Personal Portrait Module (High Fidelity) */}
        {/* Zenith Operator - Holographic Portrait (High Fidelity) */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="relative group shrink-0 self-center lg:self-start w-[220px] xs:w-[260px] lg:w-[320px]"
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1}
            transitionSpeed={800}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glareColor="#915eff"
            glarePosition="all"
            className="glass-glint-container w-full"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#050510]/80 p-1 shadow-[0_30px_100px_rgba(0,0,0,0.4)] transition-all duration-700 hover:border-[#915eff]/30">
              {/* HUD Corner Markers */}
              <div className="hud-corner-marker top-left" />
              <div className="hud-corner-marker top-right" />
              <div className="hud-corner-marker bottom-left" />
              <div className="hud-corner-marker bottom-right" />

              {/* ADVANCED REFINED HUD - T-INTERSECT ARCHITECTURE */}
              <div className="pointer-events-none absolute left-0 top-0 z-[40] opacity-0 transition-opacity group-hover:opacity-100 p-2">
                <div className="h-6 w-[2px] bg-[#915eff]" />
                <div className="absolute left-2 top-2 h-[2px] w-6 bg-[#915eff]" />
                <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
              </div>
              <div className="pointer-events-none absolute right-0 top-0 z-[40] opacity-0 transition-opacity group-hover:opacity-100 p-2">
                <div className="h-6 w-[2px] absolute right-2 bg-[#915eff]" />
                <div className="h-[2px] w-6 absolute right-2 top-2 bg-[#915eff]" />
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 z-[40] opacity-0 transition-opacity group-hover:opacity-100 p-2">
                <div className="h-6 w-[2px] absolute bottom-2 bg-[#915eff]" />
                <div className="h-[2px] w-6 absolute bottom-2 left-2 bg-[#915eff]" />
              </div>
              <div className="pointer-events-none absolute bottom-0 right-0 z-[40] opacity-0 transition-opacity group-hover:opacity-100 p-2">
                <div className="h-6 w-[2px] absolute bottom-2 right-2 bg-[#915eff]" />
                <div className="h-[2px] w-6 absolute bottom-2 right-2 bg-[#915eff]" />
              </div>

              {/* PULSING ENERGY RING - THIN GLOWING FRAME */}
              <div className="pointer-events-none absolute inset-0 z-[35] p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="h-full w-full rounded-[28px] border border-cyan-400/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)] animate-pulse" />
              </div>

              {/* PRISM SCAN BEAM - HIGH CONTRAST */}
              <div className="absolute inset-x-[-150%] inset-y-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,transparent_45%,#915eff_60%,transparent_70%,transparent_100%)] animate-spin-slow" />
              </div>

              <div className="relative z-10 overflow-hidden rounded-[30px] bg-[#050510]">
                {/* NEURAL GRID OVERLAY (BREATHING DOT MATRIX) */}
                <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-[0.1] transition-opacity duration-1000 dot-matrix animate-pulse" />

                <img
                  src={profile}
                  alt={language === "tr" ? "Oguzhan Portre" : "Oguzhan Portrait"}
                  className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105"
                />

                {/* INTERACTIVE GLINT SHIMMER */}
                <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-glint" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Vision & Bio Module - Zenith Evolution */}
        <div className="relative z-10 flex-1 rounded-[32px] border border-white/5 bg-[#050510]/20 p-7 sm:p-10 shadow-inner shadow-black/20 flex flex-col justify-center">
          <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.06)_0%,transparent_70%)]" />

          {/* VISION HEADER - CINEMATIC GRADIENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h3 className="animate-text-gradient bg-gradient-to-r from-white via-[#915eff] to-cyan-400 bg-clip-text text-[24px] font-black tracking-tight text-transparent sm:text-[32px] lg:text-[36px]">
              {language === "tr" ? "Mühendislik, Tasarım & Gelecek" : "Engineering, Design & Future"}
            </h3>
            <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#915eff] to-transparent" />
          </motion.div>

          <p className="text-foreground/90 text-[15px] font-medium leading-[1.8] sm:text-[18px] sm:leading-[1.9] lg:text-[19px]">
            {t.sections.about.content}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#915eff]/20 to-transparent" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#915eff]/30" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.15, 0.8)}
        className="mt-12 grid gap-5 lg:grid-cols-3 sm:mt-14"
      >
        {focusCards.map((card) => (
          <div
            key={card.title}
            className="rounded-[30px] border border-white/5 bg-[#050510]/40 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all hover:border-[#915eff]/20"
          >
            <p className="text-[12px] font-black uppercase tracking-[0.25em] text-[#915eff]">
              {card.title}
            </p>
            <p className="mt-4 text-[18px] font-bold leading-8 text-foreground">
              {card.value}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="relative overflow-hidden mt-14 flex flex-wrap justify-around gap-10 rounded-[32px] border border-white/5 bg-[#050510]/80 px-6 py-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] sm:mt-16 sm:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[1.5px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#915eff]/40 to-transparent" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
        {[
          { label: language === "tr" ? "Disiplin" : "Commitment", value: "100%" },
          { label: language === "tr" ? "Öğrenme" : "Learning", value: "7/24" },
          { label: language === "tr" ? "Görsel Odak" : "Visual Focus", value: "10/10" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center"
          >
            <span className="bg-gradient-to-r from-white via-[#915eff] to-cyan-400 bg-clip-text text-[40px] font-black text-transparent animate-text-gradient drop-shadow-[0_0_20px_rgba(145,94,255,0.3)] sm:text-[48px]">
              <Counter value={stat.value} />
            </span>
            <span className="mt-3 text-[11px] font-black uppercase tracking-[0.3em] text-secondary/80">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-8 max-sm:flex-col max-sm:items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

const MemoizedAbout = React.memo(About);
export default SectionWrapper(MemoizedAbout, "about");
