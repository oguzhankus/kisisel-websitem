import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { config } from "../../constants/config";
import { logo as personalLogo } from "../../assets";

const UniversityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
  </svg>
);

const SocietyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const Footer = () => {
  const { language } = useLanguage();
  const t = config[language];

  const footerLinks = [
    {
      name: language === "tr" ? "Üniversite" : "University",
      link: "https://www.bandirma.edu.tr",
      icon: <UniversityIcon />,
    },
    {
      name: language === "tr" ? "Topluluk" : "Society",
      link: "https://yazilimmuhendisligi.com.tr",
      icon: <SocietyIcon />,
    },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-white/5 bg-[#050510]/95 pt-12 pb-40 sm:pb-24 backdrop-blur-3xl sm:pt-24 overflow-hidden group">
      {/* Cinematic HUD Elements */}
      <div className="absolute left-6 top-0 h-4 w-4 border-l border-t border-[#915eff]/40" />
      <div className="absolute right-6 top-0 h-4 w-4 border-r border-t border-cyan-400/40" />
      
      {/* Scanning HUD Beam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#915eff]/30 to-transparent animate-shimmer opacity-30" />
      <div className="pointer-events-none absolute inset-y-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-20" />

      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(145,94,255,0.08)_0%,transparent_80%)]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#915eff]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center gap-16 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand Module */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <div className="relative group/logo">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#915eff] to-[#22d3ee] opacity-30 blur-[4px] group-hover/logo:opacity-100 transition-opacity" />
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-[#050510] shadow-[0_0_20px_rgba(145,94,255,0.3)]">
                  <img src={personalLogo} alt="logo" className="h-full w-full object-contain mix-blend-screen opacity-90 group-hover/logo:scale-110 transition-transform" />
                </div>
              </div>
              <div>
                <h2 className="text-[20px] font-black tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  {t.html.fullName}
                </h2>
                <div className="relative overflow-hidden w-fit">
                  <p className="text-[11px] font-black tracking-[0.4em] text-[#915eff] uppercase opacity-90 font-mono">
                    SOFTWARE DEVELOPER
                  </p>
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer group-hover:animate-shimmer" />
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[13px] leading-[1.8] text-secondary/60 font-medium tracking-tight">
              {language === "tr" 
                ? "Geleceği satır satır kodla tasarlayan, modern ve kullanıcı odaklı dijital deneyimler üreticisi. Pure Mastery vizyonuyla geliştirilmiştir." 
                : "A creator of modern, user-centric digital experiences, designing the future line by line. Developed with Pure Mastery vision."}
            </p>
          </div>

          {/* Navigation/Links Module */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:gap-x-24">
            <div className="relative">
              <div className="absolute -left-4 top-1 h-3 w-[2px] bg-[#915eff]/50" />
              <h4 className="mb-8 text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Navigasyon</h4>
              <ul className="flex flex-col gap-5">
                {[
                  { id: "", tr: "Hakkımda", en: "About" },
                  { id: "work", tr: "Deneyimler", en: "Experience" },
                  { id: "projects", tr: "Projeler", en: "Projects" },
                ].map((link) => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`} 
                      className="group flex items-center gap-3 text-[14px] font-bold text-secondary/50 hover:text-white transition-all"
                    >
                      <span className="text-[10px] text-[#915eff] font-mono opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all leading-none">//</span>
                      {language === "tr" ? link.tr : link.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-1 h-3 w-[2px] bg-cyan-400/50" />
              <h4 className="mb-8 text-[12px] font-black uppercase tracking-[0.3em] text-white/90">{language === "tr" ? "Bağlantılar" : "Resources"}</h4>
              <ul className="flex flex-col gap-5">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="group flex items-center gap-3 text-[14px] font-black text-secondary/50 hover:text-cyan-400 transition-all"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5 opacity-70 group-hover:bg-cyan-400/10 group-hover:opacity-100 transition-all">
                        {link.icon}
                      </div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom metadata */}
        <div className="mt-20 flex flex-col items-center justify-between gap-10 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[12px] font-bold text-secondary/40 tracking-[0.2em] uppercase">
              © {new Date().getFullYear()} {t.html.fullName}
            </p>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#915eff] to-transparent opacity-30" />
          </div>

          <p 
            className="text-[20px] tracking-tight text-[#915eff]/60 italic group-hover:text-[#915eff] transition-colors"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
             &lt;Kusursuzluk İçin Kodlandı /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
