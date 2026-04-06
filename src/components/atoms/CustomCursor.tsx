import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 450, damping: 45 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverables = ["A", "BUTTON", "INPUT", "TEXTAREA"];
      const isHoverable = hoverables.includes(target.tagName) || target.closest("a, button, input, textarea");
      setIsHovered(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <motion.div 
          className="h-1.5 w-1.5 rounded-full bg-[#915eff]" 
          animate={{ scale: isHovered ? 2.5 : 1 }}
        />
      </motion.div>
    </>
  );
};
