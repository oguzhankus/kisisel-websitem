import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  javascript,
  html,
  css,
  csharp,
  banuyazilimToplulugu,
  bandirmaUniversity,
  portfolioWebsite,
} from "../assets";

const tr: {
  navLinks: TNavLink[];
  services: TService[];
  experiences: TExperience[];
  projects: TProject[];
} = {
  navLinks: [
    {
      id: "",
      title: "Hakkımda",
    },
    {
      id: "work",
      title: "Deneyimler",
    },
    {
      id: "contact",
      title: "İletişim",
    },
  ],
  services: [
    {
      title: "Yazılım Mühendisliği · 1. Sınıf",
      icon: bandirmaUniversity,
      link: "https://www.bandirma.edu.tr/",
      description:
        "Bandırma Onyedi Eylül Üniversitesi Yazılım Mühendisliği’nde temel bilgisayar bilimi ve mühendislik disiplinini akademik çerçevede ilerletiyorum.",
    },
    {
      title: "Grafik Tasarım Koordinatörü",
      icon: banuyazilimToplulugu,
      link: "https://yazilimmuhendisligi.com.tr",
      description:
        "BANÜ Yazılım Mühendisliği Topluluğu’nda etkinlik ve iletişim görsellerini üstlenerek markayı net, modern ve tutarlı tutuyorum.",
    },
  ],
  experiences: [
    {
      title: "Grafik Tasarım Koordinatörü",
      companyName: "BANÜ Yazılım Mühendisliği Topluluğu",
      icon: banuyazilimToplulugu,
      link: "https://yazilimmuhendisligi.com.tr",
      iconBg: "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)",
      date: "Aralık 2025 - Devam ediyor",
      points: [
        "Etkinlik afişleri, sosyal medya görselleri ve dijital duyurular için tutarlı bir görsel dil oluşturma.",
        "Topluluğun marka kimliğini güçlendiren şablonlar ve kampanya görselleri üretme.",
        "Ekip içi görsel ihtiyaçları koordine ederek iletişimin hem hızlı hem profesyonel kalmasını sağlama.",
      ],
    },
  ],
  projects: [
    {
      name: "Kişisel Portföy Websitesi",
      description:
        "React, Three.js ve Tailwind CSS ile sıfırdan geliştirdiğim, 3D bilgisayar modeli, glassmorphism tasarım ve modern animasyonlar içeren kişisel portföy websitem.",
      longDescription:
        "Bu proje, modern web teknolojilerinin sınırlarını zorlayan, kullanıcı deneyimini ön planda tutan bir dijital vitrindir. Framer Motion ile akışkan animasyonlar, Three.js ile etkileşimli 3D öğeler ve Tailwind CSS ile tamamen responsive bir yapı üzerine inşa edilmiştir. Kod kalitesi ve görsel estetik arasında mükemmel bir denge kurulmuştur.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioWebsite,
      sourceCodeLink: "https://github.com/oguzhankus",
      liveLink: "https://oguzhankus.vercel.app",
    },
  ],
};

const en: {
  navLinks: TNavLink[];
  services: TService[];
  experiences: TExperience[];
  projects: TProject[];
} = {
  navLinks: [
    {
      id: "",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],
  services: [
    {
      title: "Software Eng. · 1st Year",
      icon: bandirmaUniversity,
      link: "https://www.bandirma.edu.tr/",
      description:
        "Advancing my fundamentals in computer science and engineering disciplines within the academic framework of Bandırma Onyedi Eylül University.",
    },
    {
      title: "Graphic Design Coordinator",
      icon: banuyazilimToplulugu,
      link: "https://yazilimmuhendisligi.com.tr",
      description:
        "Overseeing event and communication visuals at BANÜ Software Engineering Society to maintain a clear, modern, and consistent brand voice.",
    },
  ],
  experiences: [
    {
      title: "Graphic Design Coordinator",
      companyName: "BANÜ Software Engineering Society",
      icon: banuyazilimToplulugu,
      link: "https://yazilimmuhendisligi.com.tr",
      iconBg: "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 100%)",
      date: "December 2025 - Present",
      points: [
        "Developing a cohesive visual language for promotional materials, social media content, and digital announcements.",
        "Crafting brand identity templates and campaign visuals to strengthen the society's digital presence.",
        "Coordinating cross-team design requirements to maintain fast and professional communication standards.",
      ],
    },
  ],
  projects: [
    {
      name: "Personal 3D Portfolio",
      description:
        "A high-performance personal portfolio developed from the ground up using React, Three.js, and Tailwind CSS. Features an interactive 3D workstation model, glassmorphism UI/UX, and smooth motion-based transitions.",
      longDescription:
        "This project is a digital showcase pushing the boundaries of modern web technologies with a focus on user experience. Built on fluid animations with Framer Motion, interactive 3D elements with Three.js, and a fully responsive structure with Tailwind CSS, it achieves a perfect balance between code quality and visual aesthetics.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioWebsite,
      sourceCodeLink: "https://github.com/oguzhankus",
      liveLink: "https://oguzhankus.vercel.app",
    },
  ],
};

export const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "C#",
    icon: csharp,
  },
];

export const content = { tr, en };
