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
  Footer,
  BackToTop,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { useLanguage } from "./context/LanguageContext";
import { BackgroundLayer } from "./components/layout/BackgroundLayer";
import { SocialSidebar } from "./components/atoms/SocialSidebar";
import { BackgroundDecor } from "./components/atoms/BackgroundDecor";
import { ScrollHUD } from "./components/atoms/ScrollHUD";
import { useGLTF } from "@react-three/drei";

// Ultimate Pre-loading - Ensures GPU textures are fetched immediately
useGLTF.preload("./desktop_pc/scene.gltf");
useGLTF.preload("./planet/scene.gltf");

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
        <BackgroundDecor />
        <ScrollHUD />
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
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
