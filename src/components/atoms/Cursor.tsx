import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for instant tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") || 
        target.closest("textarea") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Outer Ring */}
      <motion.div
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(34, 211, 238, 0.6)" : "rgba(145, 94, 255, 0.4)",
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className={`h-8 w-8 rounded-full border-2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
      
      {/* Inner Dot (Instant) */}
      <motion.div
        animate={{
          x: mouseX.get() + 14,
          y: mouseY.get() + 14,
          scale: isHovering ? 0 : 1,
        }}
        className={`absolute h-1 w-1 rounded-full bg-[#915eff] shadow-[0_0_8px_rgba(145,94,255,1)] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};
