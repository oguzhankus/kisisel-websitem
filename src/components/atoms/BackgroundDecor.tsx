import { motion } from "framer-motion";

const DataStream = ({ delay, left, duration }: { delay: number; left: string; duration: number }) => (
  <motion.div
    initial={{ y: "110%", opacity: 0 }}
    animate={{ 
      y: ["110%", "-10%"],
      opacity: [0, 0.4, 0.4, 0]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
    className="absolute w-[1px] bg-gradient-to-t from-transparent via-cyan-400/20 to-transparent"
    style={{ left, height: '150px' }}
  />
);

const FloatingParticle = ({ delay, left, top, size }: { delay: number; left: string; top: string; size: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.2, 0],
      scale: [1, 1.5, 1],
      y: [0, -40, 0]
    }}
    transition={{
      duration: 10 + Math.random() * 5,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute bg-[#915eff]/30 blur-[1px]"
    style={{ left, top, width: size, height: size, borderRadius: '50%' }}
  />
);

export const BackgroundDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
      {/* Ambient Neural Grid */}
      <div className="absolute inset-0 bg-dot-matrix opacity-[0.03] sm:opacity-[0.05]" />
      
      {/* Moving Data Streams */}
      <DataStream delay={0} left="15%" duration={25} />
      <DataStream delay={5} left="45%" duration={18} />
      <DataStream delay={12} left="85%" duration={22} />
      <DataStream delay={2} left="70%" duration={30} />
      
      {/* Static Floating "Dust" Particles */}
      <FloatingParticle delay={1} left="10%" top="20%" size={2} />
      <FloatingParticle delay={4} left="80%" top="45%" size={3} />
      <FloatingParticle delay={7} left="30%" top="75%" size={2} />
      <FloatingParticle delay={10} left="60%" top="15%" size={4} />
      <FloatingParticle delay={2} left="90%" top="85%" size={3} />
      
      {/* Cinematic Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,10,0.4)_100%)] sm:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,10,0.2)_100%)]" />
    </div>
  );
};
