import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { TProject } from "../../types";
import { github, close } from "../../assets";

interface ProjectModalProps {
  project: TProject | null;
  onClose: () => void;
  language: "tr" | "en";
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, language }) => {
  if (!project) return null;

  return createPortal(
    <motion.div
      key="project-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050510]/95 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#101020]/95 p-6 shadow-[0_32px_120px_rgba(0,0,0,0.6)] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
        >
          <img src={close} alt="close" className="h-6 w-6 object-contain invert" />
        </button>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Project Image */}
          <div className="relative h-fit w-full flex-1 overflow-hidden rounded-2xl border border-white/5 bg-tertiary shadow-xl">
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[28px] font-black text-white sm:text-[36px]"
              >
                {project.name}
              </motion.h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-[12px] font-bold ${tag.color} rounded-full bg-white/5 px-3 py-1`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-[16px] leading-relaxed text-secondary sm:text-[18px]"
              >
                {project.longDescription || project.description}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg"
              >
                <img src={github} alt="github" className="h-8 w-8 object-contain transition-transform group-hover:scale-110" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Screenshots Section (Placeholder for future) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-6 text-[18px] font-bold text-white uppercase tracking-widest opacity-50">
              {language === "tr" ? "Ekran Görüntüleri" : "Screenshots"}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.screenshots.map((s, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-white/5">
                  <img src={s} alt="screenshot" className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;
