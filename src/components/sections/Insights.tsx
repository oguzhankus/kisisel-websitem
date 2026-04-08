import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const IconNode = ({ type, color }: { type: string; color: string }) => {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full shadow-[0_0_15px_rgba(145,94,255,0.4)]" stroke={color}>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (type === "rocket") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full shadow-[0_0_15px_rgba(255,0,234,0.4)]" stroke={color}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3m4.85-2.12a6.92 6.92 0 00-1.71-3.22 6.92 6.92 0 00-3.22-1.71L4 6l2 14 3-3 4-4zM14.5 9.5l5 5m-1-8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return ( // anchor
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full shadow-[0_0_15px_rgba(34,211,238,0.4)]" stroke={color}>
      <path d="M12 5V21M12 5l-4 3M12 5l4 3M5 12h14M12 21c-4 0-7-3-7-7M12 21c4 0 7-3 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const InsightCard = ({ index, title, content, icon, color }: any) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="relative group h-full min-h-[420px]"
    >
      {/* Outer Prism Glow */}
      <div 
        className="absolute -inset-[2px] rounded-[32px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
        style={{ background: `linear-gradient(45deg, ${color}44, transparent, ${color}44)` }}
      />
      
      <div className="relative h-full overflow-hidden rounded-[32px] border border-white/5 bg-[#050510]/92 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:border-white/20 group-hover:bg-[#050510]/98 flex flex-col items-center text-center">
        {/* Core Illumination */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
          style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
        />

        <div 
          className="flex h-20 w-20 mb-8 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] p-5 shadow-inner shadow-white/5 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] group-hover:border-white/20"
          style={{ boxShadow: `0 0 40px ${color}11` }}
        >
          <div className="h-full w-full">
            <IconNode type={icon} color={color} />
          </div>
        </div>
        
        <h3 className="text-[24px] font-black tracking-tight text-white/90 transition-all duration-500 group-hover:text-white group-hover:scale-105">
          {title}
        </h3>

        <p className="mt-6 text-[14px] leading-[1.8] font-medium text-secondary/70 transition-colors group-hover:text-secondary group-hover:opacity-100">
          {content}
        </p>

        <div className="mt-auto h-1" aria-hidden />
        
        {/* Holographic Scanline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[2000ms] group-hover:translate-y-[450px]" />
      </div>
    </motion.div>
  );
};

const Insights = () => {
  const { language } = useLanguage();
  const { insights } = config[language].sections;

  return (
    <div className="relative isolate px-4">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Header useMotion={true} {...insights} />

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 grid gap-10 lg:grid-cols-3 sm:mt-24 sm:gap-12"
      >
        {insights.items.map((item, index) => (
          <InsightCard key={item.id} index={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Insights, "insights");
