import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Oguzhan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Oguzhan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Oguzhan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: any) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#050510]/60 p-10 rounded-[32px] border border-white/10 w-full sm:w-[320px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md relative group overflow-hidden"
  >
    <div className="absolute -top-10 -right-10 h-32 w-32 bg-[#915eff]/10 rounded-full blur-[40px] group-hover:bg-[#915eff]/20 transition-all duration-500" />
    <p className="text-[#915eff] font-black text-[48px] font-serif leading-none italic opacity-50">"</p>

    <div className="mt-1 relative z-10">
      <p className="text-white tracking-wider text-[16px] leading-[1.8] font-medium min-h-[120px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-black text-[16px]">
            <span className="text-[#915eff]/80 text-[14px] font-mono mr-1">@</span>{name}
          </p>
          <p className="mt-1 text-secondary text-[12px] font-bold tracking-widest uppercase opacity-60">
            {designation} {company === "Acme Co" ? "" : "at"} {company}
          </p>
        </div>

        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#915eff]/30 shadow-[0_0_15px_rgba(145,94,255,0.2)]">
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { language } = useLanguage();

  return (
    <div className="rounded-[32px] overflow-hidden">
      <Header useMotion={true} p={language === "tr" ? "Sosyal Kanıt" : "Social Proof"} h2={language === "tr" ? "Referanslar." : "Testimonials."} />
      
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
