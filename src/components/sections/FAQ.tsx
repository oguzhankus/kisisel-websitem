import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const faqs = [
  {
    q: { tr: "Hangi teknolojileri kullanıyorsun?", en: "Which technologies do you use?" },
    a: { tr: "Modern frontend dünyasında React, Next.js, Three.js ve Tailwind CSS; backend tarafında ise Node.js, C# ve PostgreSQL ile tam kapsamlı çözümler geliştiriyorum.", en: "I develop full-stack solutions using React, Next.js, Three.js, and Tailwind CSS on the frontend; and Node.js, C#, and PostgreSQL on the backend." },
  },
  {
    q: { tr: "Bir projenin teslim süresi ne kadar?", en: "What is the turnaround time for a project?" },
    a: { tr: "Projenin kapsamına bağlı olarak genellikle 2-6 hafta arasında değişmektedir. Kaliteyi hızın önünde tutuyor, her aşamada şeffaf geri bildirim alıyorum.", en: "Depending on the scope, it typically ranges from 2-6 weeks. I prioritize quality over speed and ensure transparent feedback at every stage." },
  },
  {
    q: { tr: "Uzakta çalışmaya açık mısın?", en: "Are you open to remote work?" },
    a: { tr: "Evet, dünyanın her yerinden projeler ve ekiplerle tamamen uzaktan veya hibrit modelde çalışma disiplinine sahibim.", en: "Yes, I am disciplined in working completely remotely or in a hybrid model with projects and teams from all over the world." },
  },
];

const FAQItem = ({ faq, index, isOpen, toggleOpen, language }: any) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="mb-6 rounded-[24px] border border-white/5 bg-[#050510]/40 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-[#915eff]/30 transition-all transition-duration-300 backdrop-blur-md"
    >
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center px-7 py-6 text-left group"
      >
        <span className="text-[17px] font-black text-white group-hover:text-cyan-300 transition-colors">
          <span className="text-[#915eff] mr-4 opacity-40 font-mono">0{index + 1}</span>
          {faq.q[language]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="h-6 w-6 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-[#915eff]/20 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-currentColor text-[#915eff]"><path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-7 pb-8"
          >
            <div className="h-px w-10 bg-[#915eff]/40 mb-6" />
            <p className="text-secondary text-[15px] leading-[1.8] font-medium max-w-2xl">
              {faq.a[language]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col xl:flex-row gap-12">
      <div className="xl:flex-[0.4]">
        <Header useMotion={true} p={language === "tr" ? "Sık Sorulan Sorular" : "Any Questions?"} h2={language === "tr" ? "SSS." : "FAQ."} />
        <p className="mt-6 text-secondary text-[16px] leading-[1.9] font-medium max-w-sm">
          {language === "tr" 
            ? "Aklınızdaki soruları hızla yanıtlıyorum. Daha fazlası için benimle iletişime geçebilirsiniz." 
            : "I answer your questions quickly. You can contact me for more details."}
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 h-1 w-20 bg-gradient-to-r from-[#915eff] to-transparent rounded-full shadow-[0_0_15px_rgba(145,94,255,0.4)]"
        />
      </div>

      <div className="xl:flex-[0.6] mt-8 xl:mt-0">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            faq={faq}
            language={language}
            isOpen={openIndex === index}
            toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, "faq");
