import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-11 w-[88px] items-center rounded-full border border-[color:var(--nav-border)] bg-[var(--nav-glass-soft)] p-1 backdrop-blur-md transition-all duration-300 hover:border-[#915eff]/40"
      aria-label="Dili değiştir / Change language"
    >
      {/* Sliding highlight */}
      <motion.div
        className="absolute h-9 w-[40px] rounded-full bg-foreground shadow-sm"
        initial={false}
        animate={{
          x: language === "tr" ? 0 : 42,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {/* Labels */}
      <div className="relative z-10 flex w-full items-center justify-between px-2.5">
        <span
          className={`text-[13px] font-bold transition-colors duration-300 ${
            language === "tr" ? "text-primary" : "text-secondary"
          }`}
        >
          TR
        </span>
        <span
          className={`text-[13px] font-bold transition-colors duration-300 ${
            language === "en" ? "text-primary" : "text-secondary"
          }`}
        >
          EN
        </span>
      </div>
    </button>
  );
};
