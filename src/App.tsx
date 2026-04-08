import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Insights,
  BackToTop,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { useLanguage } from "./context/LanguageContext";
import { BackgroundLayer } from "./components/layout/BackgroundLayer";
import { SocialSidebar } from "./components/atoms/SocialSidebar";

const App = () => {
  const { language } = useLanguage();
  const t = config[language];

  useEffect(() => {
    document.title = t.html.title;
  }, [t.html.title]);

  return (
    <BrowserRouter>
      <div className="bg-primary text-foreground relative z-0 min-h-screen overflow-hidden transition-colors duration-300">
        <BackgroundLayer />
        <SocialSidebar />
        <div className="hero-pattern-layer relative z-10 min-h-screen">
          <div className="light-hero-bg absolute inset-0 z-0 transition-opacity duration-500 opacity-20">
            <div className="light-hero-mesh absolute inset-0" />
            <div className="light-dot-pattern absolute inset-0" />
          </div>
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <About />
        <Insights />
        <Experience />
        <div className="pb-14 sm:pb-20">
          <Works />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <BackToTop />
        
        {/* Masterpiece Footer */}
        <footer className="relative z-10 pt-16 pb-32 sm:pb-20 text-center border-t border-white/5 bg-[#050510]/60 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#915eff]/50 to-[#915eff]" />
              <p className="text-[14px] font-black tracking-[0.4em] text-[#915eff] uppercase drop-shadow-[0_0_10px_rgba(145,94,255,0.3)]">
                {language === "tr" ? "Software Developer" : "Software Developer"}
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#915eff]/50 to-[#915eff]" />
            </div>
            
            <div className="flex flex-col gap-2">
              <p className="text-foreground text-[12px] font-black tracking-[0.15em] uppercase">
                © {new Date().getFullYear()} <span className="text-[#915eff]">{t.html.fullName}</span>
              </p>
              <p className="text-secondary/60 text-[10px] font-bold tracking-widest uppercase">
                {language === "tr" ? "Tüm Hakları Saklıdır" : "All Rights Reserved"}
              </p>
            </div>
            
            <div className="mt-4 flex items-center gap-3 text-[10px] text-[#915eff]/40 font-mono tracking-tighter italic">
              <div className="h-px w-4 bg-white/5" />
              // {language === "tr" ? "Kusursuzluk İçin Kodlandı" : "Coded for Perfection"}
              <div className="h-px w-4 bg-white/5" />
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
