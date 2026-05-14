<div align="center">
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=3000&pause=500&color=6C63FF&center=true&vCenter=true&width=600&lines=Merhaba%2C+Ben+O%C4%9Fuzhan+Ku%C5%9F+%F0%9F%91%8B;Yazılım+Mühendisi;Frontend+Geliştirici;3D+Portfolyo+Websitesi" alt="Typing SVG" />
<br/>
![Website](https://img.shields.io/badge/🌐_Canlı_Demo-oguzhankus.vercel.app-6C63FF?style=for-the-badge&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-oguzhankus-181717?style=for-the-badge&logo=github)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)
![Lisans](https://img.shields.io/github/license/oguzhankus/kisisel-websitem?style=for-the-badge&color=6C63FF)
<br/>
![Proje Görseli](https://github.com/oguzhankus/kisisel-websitem/raw/main/.github/README_ASSETS/3d-portfolio.png)
</div>
---
📖 İçindekiler
📌 Proje Hakkında
✨ Özellikler
🛠️ Kullanılan Teknolojiler
📁 Klasör Yapısı
🚀 Kurulum ve Çalıştırma
⚙️ Ortam Değişkenleri
📦 Komutlar
🌍 Deployment
📞 İletişim
📄 Lisans
---
📌 Proje Hakkında
Bu proje, Bandırma Onyedi Eylül Üniversitesi Yazılım Mühendisliği öğrencisi Oğuzhan Kuş'un kişisel portfolyo web sitesidir.
React.js, TypeScript ve Three.js teknolojileri kullanılarak geliştirilmiş, 3D animasyonlar içeren modern ve tam duyarlı (responsive) bir portfolyo sitesidir. Ziyaretçiler; hakkımda, yeteneklerim, projelerim ve deneyimlerim hakkında bilgi edinebilir, iletişim formu aracılığıyla doğrudan mesaj gönderebilir.
> 🌐 **Canlı Site:** [https://oguzhankus.vercel.app/](https://oguzhankus.vercel.app/)
---
✨ Özellikler
Özellik	Açıklama
🎮 3D Animasyonlar	Three.js ile hazırlanmış interaktif 3D bilgisayar ve gezegen modelleri
📱 Tam Duyarlı Tasarım	Mobil, tablet ve masaüstü cihazlarda sorunsuz görünüm
🌗 Modern UI	Tailwind CSS ile stilize edilmiş çağdaş arayüz
🎞️ Framer Motion	Akıcı geçiş animasyonları ve scroll efektleri
📬 İletişim Formu	EmailJS entegrasyonu ile gerçek zamanlı e-posta gönderimi
🧩 Bölümlü Yapı	Hero, Hakkımda, Teknolojiler, Deneyim, Projeler, Görüşler ve İletişim
⚡ Hızlı Derleme	Vite ile ultra-hızlı geliştirme ve build süreci
🔍 TypeScript Desteği	Güçlü tip güvenliği ile hatasız kod tabanı
---
🛠️ Kullanılan Teknolojiler
<div align="center">
![Skills](https://skillicons.dev/icons?i=ts,react,threejs,tailwind,vite,vercel,eslint)
</div>
Teknoloji	Sürüm	Açıklama
TypeScript	^5.x	JavaScript'in tip güvenli süper kümesi
React.js	^18.x	Kullanıcı arayüzü geliştirme kütüphanesi
Three.js	^0.x	WebGL tabanlı 3D grafik kütüphanesi
Framer Motion	^10.x	React için animasyon kütüphanesi
Tailwind CSS	^3.x	Utility-first CSS framework
Vite	^4.x	Hızlı geliştirme ve build aracı
EmailJS	^3.x	İstemci taraflı e-posta gönderimi
ESLint	^8.x	Kod kalitesi analiz aracı
Prettier	^2.x	Otomatik kod biçimlendirici
Vercel	—	Frontend deployment platformu
---
📁 Klasör Yapısı
```
kisisel-websitem/
├── .github/
│   └── README_ASSETS/          # README için görseller
├── public/
│   ├── desktop_pc/             # 3D bilgisayar modeli (GLTF)
│   │   ├── textures/
│   │   ├── scene.bin
│   │   └── scene.gltf
│   ├── planet/                 # 3D gezegen modeli (GLTF)
│   │   ├── textures/
│   │   ├── scene.bin
│   │   └── scene.gltf
│   ├── logo.png
│   └── logo.svg
├── src/
│   ├── assets/                 # Görseller ve ikonlar
│   │   ├── company/
│   │   ├── tech/
│   │   └── index.ts
│   ├── components/
│   │   ├── atoms/
│   │   │   └── Header.tsx
│   │   ├── canvas/             # Three.js 3D bileşenleri
│   │   │   ├── Ball.tsx
│   │   │   ├── Computers.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Stars.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Loader.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/           # Ana sayfa bölümleri
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Tech.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Works.tsx
│   │   │   ├── Feedbacks.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── page.tsx
│   │   └── index.ts
│   ├── constants/
│   │   ├── config.ts
│   │   ├── styles.ts
│   │   └── index.ts
│   ├── hoc/
│   │   ├── SectionWrapper.tsx
│   │   └── index.ts
│   ├── utils/
│   │   └── motion.ts
│   ├── types/
│   │   └── index.d.ts
│   ├── App.tsx
│   ├── globals.css
│   ├── main.tsx
│   └── vite.env.d.ts
├── .env                        # Ortam değişkenleri (git'e dahil etme!)
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```
---
🚀 Kurulum ve Çalıştırma
Ön Gereksinimler
Projeyi yerel ortamınızda çalıştırmadan önce aşağıdaki araçların kurulu olduğundan emin olun:
Node.js `v16` veya üzeri
npm `v8` veya üzeri
Git
1. Projeyi Klonlayın
```bash
git clone https://github.com/oguzhankus/kisisel-websitem.git
cd kisisel-websitem
```
2. Bağımlılıkları Yükleyin
```bash
npm install
```
3. Ortam Değişkenlerini Ayarlayın
Proje kök dizininde bir `.env` dosyası oluşturun (detaylar için Ortam Değişkenleri bölümüne bakın).
4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda http://localhost:5173 adresini açın.
---
⚙️ Ortam Değişkenleri
Bu proje, iletişim formu için EmailJS servisini kullanmaktadır. Çalışması için aşağıdaki adımları izleyin:
EmailJS üzerinde ücretsiz hesap oluşturun
Bir Service ve Template tanımlayın
Proje kök dizininde `.env` dosyası oluşturun:
```env
VITE_EMAILJS_SERVICE_ID=buraya_service_id_yazin
VITE_EMAILJS_TEMPLATE_ID=buraya_template_id_yazin
VITE_EMAIL_JS_ACCESS_TOKEN=buraya_access_token_yazin
```
> ⚠️ `.env` dosyasını asla GitHub'a yüklemeyin. `.gitignore` dosyasında zaten hariç tutulmuştur.
---
📦 Komutlar
Komut	Açıklama
`npm install`	Bağımlılıkları yükler
`npm run dev`	Geliştirme sunucusunu `localhost:5173`'de başlatır
`npm run build`	Üretim için `./dist/` klasörüne derler
`npm run preview`	Derlenen siteyi yerel olarak önizler
`npm run lint`	ESLint ile kod kalitesini kontrol eder
`npm run ts:check`	TypeScript tip kontrolü yapar
---
🌍 Deployment
Vercel ile Deploy (Önerilen)
En kolay yöntem Vercel platformunu kullanmaktır:
![Vercel ile Deploy Et](https://vercel.com/button)
Yukarıdaki butona tıklayın
GitHub hesabınızla giriş yapın
Ortam değişkenlerini Vercel Dashboard üzerinden ekleyin
Deploy butonuna tıklayın 🎉
Manuel Deploy
```bash
npm run build
```
Oluşan `dist/` klasörünü tercih ettiğiniz hosting platformuna yükleyin.
Netlify ile Deploy
![Netlify ile Deploy Et](https://www.netlify.com/img/deploy/button.svg)
---
📞 İletişim
Herhangi bir soru, öneri veya geri bildirim için benimle iletişime geçebilirsiniz:
<div align="center">
![Website](https://img.shields.io/badge/🌐_Website-oguzhankus.vercel.app-6C63FF?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-oguzhankus-181717?style=for-the-badge&logo=github)
![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?style=for-the-badge&logo=linkedin)
</div>
---
📄 Lisans
Bu proje MIT Lisansı altında açık kaynaklı olarak lisanslanmıştır. Dilediğiniz gibi kullanabilir, değiştirebilir ve dağıtabilirsiniz.
---
<div align="center">
Oğuzhan Kuş tarafından ❤️ ile geliştirildi
![Ziyaret Et](https://img.shields.io/badge/🚀_Siteyi_Ziyaret_Et-oguzhankus.vercel.app-6C63FF?style=for-the-badge)
</div>
