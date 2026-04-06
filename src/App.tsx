import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Feedbacks,
  FAQ,
  BackToTop,
  StarsCanvas,
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
        <div className="noise-overlay" />
        <BackgroundLayer />
        <SocialSidebar />
        <div className="hero-pattern-layer bg-hero-pattern bg-cover bg-center bg-no-repeat transition-opacity duration-500">
          <div className="light-hero-bg absolute inset-0 z-0 transition-opacity duration-500">
            <div className="light-hero-mesh absolute inset-0" />
            <div className="light-dot-pattern absolute inset-0" />
          </div>
          <Navbar />
          <Hero />
        </div>
        <Tech />
        <About />
        <Experience />
        <div className="pb-14 sm:pb-20">
          <Works />
        </div>
        <Feedbacks />
        <FAQ />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <BackToTop />
        
        {/* Minimalist Footer */}
        <footer className="relative z-10 py-10 text-center border-t border-white/5 bg-[#050510]/40 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#915eff]" />
              <p className="text-[13px] font-black tracking-[0.3em] text-[#915eff] uppercase">
                {language === "tr" ? "Mimar" : "Architect"}
              </p>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#915eff]" />
            </div>
            <p className="text-secondary text-[11px] font-bold tracking-widest uppercase opacity-60">
              © {new Date().getFullYear()} {t.html.fullName} • {language === "tr" ? "Tüm Hakları Saklıdır" : "All Rights Reserved"}
            </p>
            <div className="mt-2 text-[10px] text-[#915eff]/40 font-mono tracking-tighter italic">
              // {language === "tr" ? "Kod ile Tasarlandı" : "Designed with Code"}
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
