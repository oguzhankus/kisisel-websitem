import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const IconNode = ({ type, color }: { type: string; color: string }) => {
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke={color}>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full" stroke={color}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const InsightCard = ({ index, title, content, icon, color }: any) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 1)}
      className="relative group h-full"
    >
      <div 
        className="absolute -inset-[1px] rounded-[32px] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
        style={{ background: `linear-gradient(45deg, ${color}33, transparent, ${color}33)` }}
      />
      
      <div className="relative h-full overflow-hidden rounded-[32px] border border-white/5 bg-[#050510]/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:border-white/10 group-hover:bg-[#050510]/60 backdrop-blur-md flex flex-col">
        {/* Core Illumination */}
        <div 
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-10 blur-[40px] transition-all duration-700 group-hover:opacity-20"
          style={{ background: color }}
        />

        {/* Floating Decorative Elements */}
        <div className="absolute right-6 top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
          <div className="h-24 w-24 border-[2px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div 
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-inner shadow-white/5 transition-transform duration-500 group-hover:scale-110"
            style={{ borderColor: `${color}40` }}
          >
            <div className="h-full w-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              <IconNode type={icon} color={color} />
            </div>
          </div>
          
          <h3 className="text-[22px] font-black tracking-tight text-white transition-colors duration-300 group-hover:text-white/90">
            {title}
          </h3>
        </div>

        <div className="relative">
          <div 
            className="absolute -left-10 top-0 h-full w-[2px] opacity-20"
            style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
          />
          <p className="text-[15px] font-medium leading-[1.8] text-secondary opacity-75 group-hover:opacity-100 transition-opacity duration-300">
            {content}
          </p>
        </div>

        <div className="mt-auto pt-10 flex items-center gap-4">
          <div 
            className="h-[1px] flex-1 opacity-10 group-hover:opacity-30 transition-opacity"
            style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
          />
          <span 
            className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 group-hover:opacity-60 transition-opacity"
            style={{ color: color }}
          >
            // insight_0{index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Insights = () => {
  const { language } = useLanguage();
  const { insights } = config[language].sections;

  return (
    <div className="relative isolate">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.08)_0%,transparent_70%)]" />
      
      <Header useMotion={true} {...insights} />

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 grid gap-8 lg:grid-cols-2 sm:mt-20"
      >
        {insights.items.map((item, index) => (
          <InsightCard key={item.id} index={index} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Insights, "insights");
