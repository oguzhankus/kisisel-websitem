import { motion } from "framer-motion";

export const CyberPedestal = () => {
  return (
    <div className="absolute left-1/2 top-[clamp(44rem,92svh,96svh)] z-[1] h-[300px] w-[500px] -translate-x-1/2 opacity-30 sm:top-[clamp(48rem,94svh,98svh)] sm:h-[400px] sm:w-[800px] lg:top-[clamp(54rem,96svh,100svh)]">
      {/* Glow layers only - No sharp capsule shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.15)_0%,transparent_70%)]"
      />
    </div>
  );
};

export const DigitalShards = () => {
  const shards = Array.from({ length: 6 });

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
      {shards.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110%", x: `${10 + Math.random() * 80}%`, rotate: 45, opacity: 0 }}
          animate={{
            y: ["110%", "-10%"],
            opacity: [0, 0.8, 0.8, 0],
            rotate: [45, 90],
            scaleX: [1, 1.5, 1], // Glitch effect
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeInOut",
          }}
          className="absolute h-20 w-[1px] bg-gradient-to-t from-transparent via-[#915eff]/40 to-transparent sm:h-32 will-change-transform"
          style={{ left: `${15 + Math.random() * 70}%` }}
        />
      ))}
    </div>
  );
};
