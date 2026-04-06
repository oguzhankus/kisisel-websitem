import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const logs = {
  tr: [
    "Sistem başlatılıyor...",
    "Holografik çekirdek aktif",
    "Veri akışı optimize ediliyor",
    "Güvenlik katmanı: Enkriptlenmiş",
    "Proje modülleri yüklendi",
    "Kullanıcı deneyimi: Akıcı",
    "GPU hızlandırma devrede",
    "Bağlantı kararlı",
  ],
  en: [
    "Initializing system...",
    "Holographic core active",
    "Optimizing data stream",
    "Security layer: Encrypted",
    "Project modules loaded",
    "User experience: Fluid",
    "GPU acceleration enabled",
    "Connection stable",
  ]
};

export const SystemLog = () => {
  const { language } = useLanguage();
  const [currentLog, setCurrentLog] = useState(0);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLog((prev) => (prev + 1) % logs[language].length);
      setHistory((prev) => {
        const newHistory = [logs[language][currentLog], ...prev];
        return newHistory.slice(0, 3);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentLog, language]);

  return (
    <div className="fixed bottom-10 right-10 z-[100] hidden xl:flex flex-col gap-2 pointer-events-none select-none">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400/60">System_Log</span>
      </div>
      
      <div className="flex flex-col gap-1.5">
        <AnimatePresence mode="popLayout">
          {history.map((log, i) => (
            <motion.div
              key={log + i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1 - i * 0.3, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 backdrop-blur-md bg-foreground/[0.03] border border-foreground/5 rounded-lg px-3 py-1.5 shadow-sm"
            >
              <span className="text-[9px] font-mono text-[#915eff]/60 font-bold">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}]</span>
              <span className="text-[11px] font-black tracking-wider text-foreground/70 uppercase">
                {log}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute -right-4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#915eff]/20 to-transparent" />
    </div>
  );
};
