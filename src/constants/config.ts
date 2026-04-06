type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    socials: {
      linkedin: string;
      instagram: string;
      x: string;
      github: string;
    };
  };
  hero: {
    name: string;
    lead: string;
    body: string[];
    cta: string;
    ctaSecondary: string;
  };
  contact: {
    p: string;
    h2: string;
    content: string;
  };
  sections: {
    about: Required<TSection> & { badge: string; focus: string };
    experience: TSection & { lead: string };
    works: Required<TSection>;
    tech: { badge: string; h2: string; lead: string; hr: string; active: string; details: Record<string, string> };
    insights: {
      p: string;
      h2: string;
      items: { id: string; title: string; content: string; icon: string; color: string }[];
    };
  };
  navbar: {
    cta: string;
  };
};

export const config: Record<"tr" | "en", TConfig> = {
  tr: {
    html: {
      title: "Oğuzhan Kuş — 3D Portföy",
      fullName: "Oğuzhan Kuş",
      email: "kusoguzhan34@gmail.com",
      phone: "0544 719 92 32",
      socials: {
        linkedin: "https://www.linkedin.com/in/o%C4%9Fuzhan-ku%C5%9F-7603b7387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/oguzhqnk_?igsh=Nm5hYTV3dHpkb2ww&utm_source=qr",
        x: "https://x.com/ouzhan1913602?s=21",
        github: "https://github.com/oguzhankus",
      },
    },
    hero: {
      name: "Oğuzhan Kuş",
      lead:
        "Manisalıyım, şu an İstanbul'da yaşıyorum. Bandırma Onyedi Eylül Üniversitesi Yazılım Mühendisliği 1. sınıf öğrencisiyim.",
      body: [
        "Yazılıma yeni başlamış olsam da bu alanda kendimi geliştirmeye ciddi şekilde odaklanıyorum. Boş zamanlarımda sürekli yeni şeyler öğrenmeye, denemeye ve yaptıklarımı geliştirerek ilerlemeye çalışıyorum. Bazen küçük projeler yapıyorum, bazen de yaptığım işleri daha iyi hale getirmek için baştan kuruyorum. Süreci yaşayarak öğrenmeye çalışıyorum.",
        "Daha çok frontend tarafına ilgim var. Görsel olarak düzenli, sade ve anlaşılır arayüzler oluşturmayı seviyorum. Kullanıcıyı yormayan, neyin nerede olduğu net olan yapılar kurmaya dikkat ediyorum. Karmaşık ve gereksiz detaylar yerine, işini doğru yapan ve akıcı çalışan arayüzler benim için daha değerli.",
        "Aynı zamanda backend tarafını da tamamen boş bırakmıyorum. Temel seviyede veri yönetimi, API mantığı ve sistemin arka tarafının nasıl çalıştığını öğrenmeye çalışıyorum. Yaptığım işin sadece görünen kısmını değil, arka planda nasıl işlediğini de anlamak benim için önemli.",
        "Henüz yolun başındayım ama öğrenmeye açık biriyim ve kendimi sürekli geliştirmeye devam ediyorum. Amacım sadece kod yazmak değil, yaptığım işi anlayarak, zamanla daha sağlam ve nitelikli projeler ortaya koyabilen bir geliştirici olmak.",
      ],
      cta: "Projelerimi gör",
      ctaSecondary: "İletişime geç",
    },
    contact: {
      p: "İletişime geçin",
      h2: "Doğrudan İletişim.",
      content:
        "Yeni bir ürün fikri, portföy geliştirmesi veya arayüz iyileştirmesi için bana doğrudan ulaşabilirsiniz. Telefon veya E-posta üzerinden iletişiminizi bekliyorum.",
    },
    sections: {
      about: {
        p: "Giriş",
        h2: "Genel Bakış.",
        badge: "Portföy",
        focus: "Kullanıcı odaklı yaklaşım",
        content: `Bandırma Onyedi Eylül Üniversitesi Yazılım Mühendisliği bölümünde 1. sınıf öğrencisiyim; disiplinli bir mühendislik temeli ile birlikte ürün ve arayüz tarafında kendimi hızla geliştiriyorum. Aynı zamanda üniversitemizin Yazılım Mühendisliği Topluluğu’nda grafik tasarım koordinatörüyüm — etkinlik görsellerinden dijital iletişime kadar topluluğun yüzünü net ve tutarlı kılacak tasarımları üstleniyorum. Kod ve görseli aynı masada düşünüyorum: karmaşık fikirleri sade, okunabilir ve güven veren deneyimlere çeviriyorum.`,
      },
      experience: {
        p: "Bugüne kadar neler yaptım",
        h2: "İş Deneyimi.",
        lead: "Topluluk içinde grafik tasarım koordinasyonu; marka tutarlılığı, görsel iletişim ve ekip içi iş birliği odağında ilerliyor.",
      },
      works: {
        p: "Çalışmalarım",
        h2: "Projeler.",
        content: `Aşağıdaki projeler, farklı ürün ihtiyaçlarına nasıl yaklaştığımı somut örneklerle gösterir. Her biri; arayüz kalitesi, performans, ölçeklenebilirlik ve kullanıcı deneyimi odağıyla şekillendirilmiştir. Tasarımdan geliştirmeye kadar uçtan uca değer üretmeye nasıl yaklaştığımı bu çalışmalar üzerinden inceleyebilirsiniz.`,
      },
      tech: {
        badge: "Teknoloji yığını",
        h2: "Üzerinde çalıştığım temel araçlar",
        lead: "Arayüz and mühendislik temellerinde yoğunlaştığım dörtlü; sade, ölçülebilir ve okunaklı kod için bu dilleri kullanıyorum.",
        hr: "Kullandığım teknolojiler",
        active: "Aktif kullanım",
        details: {
          JavaScript: "Web dünyasının can damarı. Sadece arayüzü değil, Three.js ve React gibi kütüphaneler ile kompleks 3D dünyaları ve mantık yapılarını inşa etmek için temel aracım. Arayüzlere ruh katan sistemlerin kodlandığı dil.",
          HTML: "Erişilebilir ve semantik (anlamsal) bir web yapısının temeli. Arama motoru optimizasyonundan (SEO) ekran okuyucularına kadar uygulamanın iskeletini standartlara en uygun şekilde kurmak için hayati önem taşıyor.",
          CSS: "Sayfaları sadece renklendirmekle kalmayıp, kompleks asenkron animasyonlar, glassmorphism dokular ve devasa grid/flexbox yapılarıyla piksel-kusursuz, 100% mobil uyumlu deneyimler yaratma sanatım.",
          "C#": "Sağlam ve ölçeklenebilir backend sistemleri geliştirirken başvurduğum, nesne yönelimli programlamanın (OOP) gücünü köküne kadar hissettiren mimari temel."
        }
      },
      insights: {
        p: "Neden & Nasıl",
        h2: "Öngörüler.",
        items: [
          {
            id: "why-software",
            title: "Neden Yazılım?",
            content: "Yazılım benim için sadece kod yazmak değil; hayal edileni gerçeğe dönüştürme disiplinidir. Karmaşık sorunları basitleştirmek ve her satırda daha iyi bir kullanıcı deneyimi inşa etmek en büyük motivasyonum. Geleceği kodla tasarlamanın gücüne inanıyorum.",
            icon: "code",
            color: "#915eff"
          },
          {
            id: "why-bandirma",
            title: "Neden Bandırma?",
            content: "Bandırma Onyedi Eylül Üniversitesi'nde aldığım mühendislik eğitimi, sadece teknik bir temel değil; topluluk ruhu ve kolektif çalışma disiplini kazandırdı. Yazılım Mühendisliği Topluluğu'ndaki grafik tasarım koordinatörlüğümle, mühendisliği tasarım estetiğiyle harmanladığım ilk adımları burada attım.",
            icon: "academic",
            color: "#22d3ee"
          }
        ]
      }
    },
    navbar: {
      cta: "İletişim",
    },
  },
  en: {
    html: {
      title: "Oğuzhan Kuş — 3D Portfolio",
      fullName: "Oğuzhan Kuş",
      email: "kusoguzhan34@gmail.com",
      phone: "0544 719 92 32",
      socials: {
        linkedin: "https://www.linkedin.com/in/o%C4%9Fuzhan-ku%C5%9F-7603b7387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/oguzhqnk_?igsh=Nm5hYTV3dHpkb2ww&utm_source=qr",
        x: "https://x.com/ouzhan1913602?s=21",
        github: "https://github.com/oguzhankus",
      },
    },
    hero: {
      name: "Oğuzhan Kuş",
      lead:
        "Originally from Manisa, currently based in Istanbul. I am a first-year Software Engineering student at Bandırma Onyedi Eylül University.",
      body: [
        "As a newcomer to the software world, I am deeply committed to continuous growth. I spend my free time learning new technologies, experimenting with code, and refining my creations. Whether I'm building small-scale projects or refactoring existing ones for better efficiency, I believe in learning through hands-on experience.",
        "My passion lies in frontend development. I love building organized, clean, and intuitive interfaces that prioritize user experience. I strive to create fluid structures where navigation is seamless, focusing on purposeful design rather than unnecessary complexity.",
        "At the same time, I am building a strong grasp of backend fundamentals. I am actively learning data management, API logic, and the inner workings of systems. Understanding the full lifecycle of an application—not just the surface—is essential to my work.",
        "While I'm at the early stages of my career, I remain highly adaptable and eager to learn. My goal is not just to write code, but to master the underlying logic and consistently deliver high-quality, impactful software solutions.",
      ],
      cta: "View Projects",
      ctaSecondary: "Get in touch",
    },
    contact: {
      p: "Get in touch",
      h2: "Direct Contact.",
      content:
        "Feel free to reach out directly for project ideas, portfolio feedback, or interface improvements. I am available via Phone or Email.",
    },
    sections: {
      about: {
        p: "Introduction",
        h2: "Overview.",
        badge: "Portfolio",
        focus: "User-centric approach",
        content: `I am a first-year Software Engineering student at Bandırma Onyedi Eylül University; building a rigorous engineering foundation while rapidly advancing my skills in product and interface development. As the Graphic Design Coordinator for our university's Software Engineering Society, I oversee visual identity and digital communications to ensure a clear and consistent brand voice. I bridge the gap between code and design, translating complex ideas into seamless, intuitive, and visually compelling user experiences.`,
      },
      experience: {
        p: "What I've done so far",
        h2: "Work Experience.",
        lead: "Coordinating graphic design efforts within the society, focused on brand consistency, visual communication, and effective team collaboration.",
      },
      works: {
        p: "My Work",
        h2: "Projects.",
        content: `The following projects showcase my approach to various product needs. Each work is crafted with a focus on interface quality, performance, scalability, and user experience. Explore these case studies to see my end-to-end development process from design to launch.`,
      },
      tech: {
        badge: "Tech stack",
        h2: "Core Tools & Technologies",
        lead: "A stack focused on modern interface and engineering foundations; I leverage these tools to write clean, scalable, and efficient code.",
        hr: "Preferred Technologies",
        active: "Active Use",
        details: {
          JavaScript: "The lifeblood of the modern web. My primary tool for constructing not just interfaces, but complex 3D worlds (Three.js) and asynchronous logic flows (React). It breathes life into static pages.",
          HTML: "The semantic skeleton of any application. Crucial for building accessible, SEO-friendly, and structurally sound web foundations that comply with strict modern web standards.",
          CSS: "Beyond mere styling, it's the art of crafting hardware-accelerated animations, glassmorphism textures, and pixel-perfect layouts using modern Grid and Flexbox architectures.",
          "C#": "The flagship of the .NET ecosystem. My go-to language for building robust, scalable backend architectures, deeply leveraging the power of object-oriented programming (OOP) principles."
        }
      },
      insights: {
        p: "Why & How",
        h2: "Insights.",
        items: [
          {
            id: "why-software",
            title: "Why Software?",
            content: "Software is more than just coding; it is the discipline of turning ideas into reality. My motivation is to simplify complex problems and build better user experiences in every line. I believe in the power of designing the future with code.",
            icon: "code",
            color: "#915eff"
          },
          {
            id: "why-bandirma",
            title: "Why Bandırma?",
            content: "Engineering education at Bandırma University gave me a collective work discipline. My role as design coordinator in the Software Society allowed me to merge engineering with aesthetic design—the first step in my professional journey.",
            icon: "academic",
            color: "#22d3ee"
          }
        ]
      }
    },
    navbar: {
      cta: "Contact",
    },
  },
};
