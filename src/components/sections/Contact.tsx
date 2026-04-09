import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useLanguage } from "../../context/LanguageContext";
import { EarthCanvas } from "../canvas";

const Contact = () => {
  const { language } = useLanguage();
  const t = config[language];
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("idle");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_kfgsyex",
        "template_qmqm1xe",
        formRef.current,
        "GAyiJEgoUJe2GzmdB"
      )
      .then(
        () => {
          setLoading(false);
          setFormStatus("success");
          formRef.current?.reset();
          setTimeout(() => setFormStatus("idle"), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFormStatus("error");
          setTimeout(() => setFormStatus("idle"), 5000);
        }
      );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.html.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-[32px] border border-white/10 bg-[#050510]/60 p-8 shadow-[0_40px_100px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(145,94,255,0.05)] sm:p-10 relative overflow-hidden backdrop-blur-md"
      >
        {/* Core illumination */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10">
          <Header useMotion={true} {...t.contact} />
          <p className="text-secondary/90 mt-5 max-w-xl text-[16px] leading-[1.8] font-medium">
            {t.contact.content}
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col group">
            <span className="mb-4 text-[13px] font-black uppercase tracking-[0.25em] text-[#915effb0] group-focus-within:text-cyan-400 transition-colors">
              {language === "tr" ? "Adınız" : "Your Name"}
            </span>
            <input
              type="text"
              name="name"
              placeholder={language === "tr" ? "Buraya yazın..." : "Type here..."}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary/30 focus:border-[#915eff]/50 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(145,94,255,0.2)]"
            />
          </label>

          <label className="flex flex-col group">
            <span className="mb-4 text-[13px] font-black uppercase tracking-[0.25em] text-[#915effb0] group-focus-within:text-cyan-400 transition-colors">
              {language === "tr" ? "Email Adresiniz" : "Your Email"}
            </span>
            <input
              type="email"
              name="email"
              placeholder={language === "tr" ? "İletişim için..." : "For contact..."}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary/30 focus:border-[#915eff]/50 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(145,94,255,0.2)]"
            />
          </label>

          <label className="flex flex-col group">
            <span className="mb-4 text-[13px] font-black uppercase tracking-[0.25em] text-[#915effb0] group-focus-within:text-cyan-400 transition-colors">
              {language === "tr" ? "Mesajınız" : "Your Message"}
            </span>
            <textarea
              rows={4}
              name="message"
              placeholder={language === "tr" ? "Fikrinizi anlatın..." : "Tell your idea..."}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-4 font-medium text-white outline-none transition-all placeholder:text-secondary/30 focus:border-[#915eff]/50 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(145,94,255,0.2)] resize-none"
            />
          </label>
          <AnimatePresence>
            {formStatus !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-[13px] font-black uppercase tracking-widest ${formStatus === "success" ? "text-cyan-400" : "text-red-400"
                  }`}
              >
                {formStatus === "success"
                  ? (language === "tr" ? "Mesajınız Başarıyla Gönderildi!" : "Message Sent Successfully!")
                  : (language === "tr" ? "Bir Hata Oluştu, Lütfen Tekrar Deneyin." : "An Error Occurred, Please Try Again.")}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex flex-wrap gap-5 mt-2 transition-all">
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-fit overflow-hidden rounded-full bg-white px-10 py-4 text-[14px] font-black uppercase tracking-[0.2em] text-slate-900 shadow-[0_15px_40px_rgba(145,94,255,0.25)] transition-all hover:scale-[1.04] active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-cyan-400 via-[#915eff] to-cyan-400 bg-[length:200%_auto] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-text-gradient" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {loading
                  ? (language === "tr" ? "Gönderiliyor..." : "Sending...")
                  : (language === "tr" ? "İletişimi Başlat" : "Start Contact")}
              </span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="group relative h-[56px] px-8 rounded-full border border-white/10 bg-white/[0.03] text-[13px] font-black uppercase tracking-widest text-white transition-all hover:border-[#915eff]/50 hover:bg-[#915eff]/10 active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="relative z-10">{copied ? (language === "tr" ? "Kopyalandı!" : "Copied!") : (language === "tr" ? "E-Posta Kopyala" : "Copy Email")}</span>
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 stroke-current opacity-70 group-hover:opacity-100 group-hover:text-cyan-400 transition-all"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </form>

        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8 pt-10 border-t border-white/5 text-center">
          <div className="flex flex-col gap-2 min-w-[120px]">
            <p className="text-[11px] font-black uppercase tracking-widest text-secondary/60">{language === "tr" ? "Yanıt Süresi" : "Response Time"}</p>
            <p className="text-[14px] font-bold text-cyan-400">~24 {language === "tr" ? "Saat" : "Hours"}</p>
          </div>
          <div className="flex flex-col gap-2 min-w-[120px]">
            <p className="text-[11px] font-black uppercase tracking-widest text-secondary/60">WhatsApp</p>
            <a href={`https://wa.me/${t.html.phone.replace(/\D/g, '').replace(/^0/, '90')}`} target="_blank" rel="noreferrer" className="text-[14px] font-bold text-white tracking-widest hover:text-[#915eff] transition-colors">{t.html.phone}</a>
          </div>
          <div className="flex flex-col gap-2 min-w-[120px]">
            <p className="text-[11px] font-black uppercase tracking-widest text-secondary/60">LinkedIn</p>
            <a href={t.html.socials.linkedin} target="_blank" rel="noreferrer" className="text-[14px] font-bold text-white tracking-widest hover:text-cyan-400 transition-colors">{language === "tr" ? "Profil" : "Profile"}</a>
          </div>
        </div>
      </motion.div>

      <div className="h-[400px] xl:h-auto xl:flex-1 relative cursor-grab active:cursor-grabbing">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.1)_0%,transparent_75%)]" />
        <EarthCanvas />
      </div>
    </div>
  );
};

const MemoizedContact = React.memo(Contact);
export default SectionWrapper(MemoizedContact, "contact");