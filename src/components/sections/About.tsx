import React from "react";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";

import { content } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useRef } from "react";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon, description }) => {
  return (
    <Tilt glareEnable tiltEnable tiltMaxAngleX={15} tiltMaxAngleY={15} glareColor="#aaa6c3" glareMaxOpacity={0.15}>
      <div className="w-full max-w-[280px] xs:w-[280px]">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.4, 0.75)}
          className="h-full rounded-[30px] border border-white/5 bg-surface-deep/90 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#915eff]/30"
        >
          <div className="flex min-h-[320px] flex-col items-center rounded-[29px] bg-surface-deep/40 px-8 py-7 group overflow-hidden relative">
            {/* Shimmer Effect on Hover */}
            <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:block transition-all duration-1000 group-hover:opacity-100">
              <div className="absolute inset-0 h-full w-1/2 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            </div>

            {/* Persistent Holographic Top Edge */}
            <div className="pointer-events-none absolute -top-[1px] left-[10%] h-[1px] w-[80%] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent transition-all duration-500 group-hover:via-cyan-400 group-hover:w-[90%]" />

            {/* Scanner Effect */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="scanner-line" />
            </div>

            {/* Light Streak Effect (Manual) */}
            <div 
              className="light-streak opacity-30" 
              style={{ animationDelay: `${index * 1.2}s` }} 
            />
            
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:border-[#915eff]/30">
              <img
                src={icon}
                alt={title}
                className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
            </div>
            
            <h3 className="mt-8 text-center text-[20px] font-black leading-tight text-foreground group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            
            <p className="mt-4 text-center text-[14px] leading-6 text-secondary opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>

            <div className="mt-auto pt-6">
              <span className="text-[12px] font-black tracking-widest text-[#915eff] animate-pulse">
                0{index + 1}
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </Tilt>
  );
};

import { useSpring, useTransform } from "framer-motion";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericMatch = value.match(/\d+/);
  const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(targetValue.toString(), "");

  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(targetValue);
    }
  }, [isInView, springValue, targetValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
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
        className="mt-10 relative"
      >
        <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.2)_0%,transparent_70%)]" />
        <div className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/5 bg-surface-deep/80 p-7 shadow-inner shadow-black/20 sm:p-8">
          <p className="text-foreground/90 text-[16px] font-medium leading-[1.8] sm:text-[18px] sm:leading-[1.9]">
            {t.sections.about.content}
          </p>
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

      <div className="relative overflow-hidden mt-14 flex flex-wrap justify-around gap-10 rounded-[32px] border border-white/5 bg-[#050510]/40 px-6 py-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] sm:mt-16 sm:px-8 will-change-transform">
        {/* Top edge glowing beam */}
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

export default SectionWrapper(About, "about");
