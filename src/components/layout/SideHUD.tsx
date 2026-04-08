import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "about", label: "01", title: "ABOUT" },
  { id: "work", label: "02", title: "EXPERIENCE" },
  { id: "tech", label: "03", title: "SKILLS" },
  { id: "projects", label: "04", title: "WORKS" },
  { id: "contact", label: "05", title: "CONTACT" },
];

export const SideHUD = () => {
  const [activeSegment, setActiveSegment] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 300;

      sections.forEach((section) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
           setActiveSegment(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 z-[100] hidden -translate-y-1/2 flex-col items-center gap-10 lg:flex">
      {/* HUD VERTICAL GUIDE */}
      <div className="absolute left-1/2 h-[120%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#915eff]/20 to-transparent" />

      {navLinks.map((link) => {
        const isActive = activeSegment === link.id;

        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="group relative flex items-center justify-center"
          >
            {/* Pulsing Orbit - Only Active */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId="active-orbit"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute h-10 w-10 rounded-full border border-[#915eff]/40 shadow-[0_0_15px_rgba(145,94,255,0.3)]"
                />
              )}
            </AnimatePresence>

            {/* Static Core Dot */}
            <div 
              className={`relative z-10 h-2 w-2 rounded-full transition-all duration-500 ${
                isActive ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee]" : "bg-white/20 group-hover:bg-white/40"
              }`} 
            />

            {/* Floating Label */}
            <div className="absolute left-8 flex translate-x-2 flex-col opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
               <span className="text-[10px] font-black tracking-widest text-[#915eff]">{link.label}</span>
               <span className="text-[12px] font-black tracking-tighter text-white whitespace-nowrap">{link.title}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
