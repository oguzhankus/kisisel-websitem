import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { LanguageSwitcher } from "../atoms/LanguageSwitcher";
import { styles } from "../../constants/styles";
import { content } from "../../constants";
import { logo, menu, close, github } from "../../assets";
import { config as configData } from "../../constants/config";
import { useLanguage } from "../../context/LanguageContext";

const NavLink = ({ nav, active, setActive }: any) => {
  return (
    <li
      className={`${
        active === nav.id ? "text-white" : "text-secondary"
      } hover:text-white px-4 py-2 text-[15px] font-black uppercase tracking-wider transition-all duration-300 relative`}
      onClick={() => setActive(nav.id)}
    >
      <a href={`#${nav.id}`} className="relative z-10">{nav.title}</a>
      {active === nav.id && (
        <motion.div
          layoutId="activeNav"
          className="absolute inset-0 bg-gradient-to-r from-[#915eff]/20 to-cyan-400/10 rounded-full border-b border-[#915eff]/50 shadow-[0_5px_15px_rgba(145,94,255,0.2)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <div className={`absolute -bottom-1 left-4 h-[2px] bg-[#915eff] transition-all duration-300 ${active === nav.id ? "w-0" : "w-0 group-hover:w-[calc(100%-32px)]"}`} />
    </li>
  );
};

const Navbar = () => {
  const { language } = useLanguage();
  const t = configData[language];
  const { navLinks } = content[language];

  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let sectionPositions: { id: string; top: number; height: number }[] = [];

    const cachePositions = () => {
      const sections = document.querySelectorAll("section[id]");
      sectionPositions = Array.from(sections).map((section: any) => ({
        id: section.getAttribute("id"),
        top: section.offsetTop,
        height: section.offsetHeight,
      }));
    };

    cachePositions();
    window.addEventListener("resize", cachePositions);

    const updateNavbar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setScrolled(scrollTop > 100);

      // Ultra-Fast Highlighter: Uses cached numeric values
      const currentScroll = scrollTop + window.innerHeight * 0.3;
      const activeSection = sectionPositions.find(
        (section) => currentScroll >= section.top && currentScroll < section.top + section.height
      );

      if (activeSection) {
        setActive(activeSection.id);
      } else if (scrollTop < 100) {
        setActive("");
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", cachePositions);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navContainerClass = `rounded-full transition-all duration-500 overflow-hidden ${
    scrolled ? "liquid-glass shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[#915eff]/30" : "bg-white/[0.03] border-white/10"
  }`;

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 flex w-full items-center py-16 sm:py-5 layer-promote gpu-accel transition-all duration-300`}
    >
      {/* Scroll Progress Bar with Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 opacity-50" />
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#915eff] via-[#22d3ee] to-[#915eff] z-[60] shadow-[0_0_15px_rgba(145,94,255,0.6)]"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: "0%" }}
      />
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 shadow-[0_0_15px_rgba(145,94,255,0.3)] overflow-hidden transition-all group-hover:border-[#915eff]/50 group-hover:shadow-[0_0_20px_rgba(145,94,255,0.5)]">
            <img 
              src={logo} 
              alt="logo" 
              className="h-full w-full rounded-full object-contain mix-blend-screen opacity-80 group-hover:opacity-100" 
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[15px] font-black tracking-tight text-foreground group-hover:text-cyan-300 transition-colors">
              {t.html.fullName}
            </p>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#915eff] opacity-80 uppercase font-mono relative overflow-hidden group/role">
              SOFTWARE DEVELOPER
              <span className="absolute inset-x-0 h-full w-full bg-gradient-to-b from-transparent via-[#915eff]/20 to-transparent animate-role-scanner pointer-events-none" />
            </p>
          </div>
        </Link>
 
        {/* Desktop Navigation */}
        <div className={`${navContainerClass} hidden sm:flex px-6 py-2 gap-2 glass-shimmer`}>
          <ul className="list-none flex flex-row items-center gap-2">
            {navLinks.map((nav: any) => (
              <NavLink 
                key={nav.id} 
                nav={nav} 
                active={active} 
                setActive={setActive} 
              />
            ))}
          </ul>
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10 ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <LanguageSwitcher />
          <div 
            className={`${navContainerClass} p-3 flex items-center justify-center shadow-lg active:scale-90`}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain brightness-200"
            />
          </div>

          <AnimatePresence>
            {toggle && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setToggle(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 180 }}
          className="fixed right-0 top-0 h-screen w-[85%] max-w-[400px] bg-[#050510]/95 backdrop-blur-2xl border-l border-white/5 z-[100] p-10 flex flex-col pt-24 shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
        >
          {/* MOBILE HUD ACCENT */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-gradient-to-b from-transparent via-[#915eff] to-transparent opacity-40 shadow-[0_0_15px_#915eff]" />
                  <ul className="list-none flex flex-col gap-8">
                    {navLinks.map((nav: any) => (
                      <li
                        key={nav.id}
                        className={`${
                          active === nav.id ? "text-[#915eff]" : "text-secondary"
                        } text-[22px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95`}
                        onClick={() => {
                          setToggle(false);
                          setActive(nav.id);
                        }}
                      >
                        <a href={`#${nav.id}`} className="flex items-center gap-4">
                          <span className="text-[14px] font-mono text-[#915eff]/40 font-bold tracking-tighter">//</span>
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10">
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#915eff]">
                      {language === "tr" ? "Sosyal Medya" : "Social Connect"}
                    </p>
                    <div className="flex gap-5">
                      {/* Integrated Mobile Socials */}
                      <a href={t.html.socials.github} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-transform active:scale-90">
                        <img src={github} alt="github" className="h-5 w-5 invert brightness-150" />
                      </a>
                      <a href={t.html.socials.linkedin} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-transform active:scale-90">
                        <div className="h-5 w-5 text-white/80">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                      </a>
                    </div>
                    <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#915eff] to-cyan-400" />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
