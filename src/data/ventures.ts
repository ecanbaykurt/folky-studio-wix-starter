import sunnysettImg from "@/assets/venture-sunnysett.png";
import sunnysettDesignImg from "@/assets/venture-sunnysett-design.png";
import sunnysettLandingImg from "@/assets/venture-sunnysett-landing.png";
import healthlineImg from "@/assets/venture-healthline.png";
import scriptfaceImg from "@/assets/venture-scriptface.png";
import scriptfacePitchImg from "@/assets/venture-scriptface-pitch.png";
import scriptfaceHiringImg from "@/assets/venture-scriptface-hiring.png";
import scriptfaceSeoImg from "@/assets/venture-scriptface-seo.png";
import safestructureImg from "@/assets/venture-safestructure.png";
import sunnysightImg from "@/assets/venture-sunnysight.png";
import sunnysightAnalyzingImg from "@/assets/venture-sunnysight-analyzing.png";
import sunnysightDashboardImg from "@/assets/venture-sunnysight-dashboard.png";
import bestmenteeImg from "@/assets/venture-bestmentee.png";
import bestmenteeSocialhubImg from "@/assets/venture-bestmentee-socialhub.png";
import bestmenteeMentorsImg from "@/assets/venture-bestmentee-mentors.png";
import bestmenteeAdminImg from "@/assets/venture-bestmentee-admin.png";
import agentblueprintImg from "@/assets/venture-agentblueprint.png";
import agentblueprintUsecasesImg from "@/assets/venture-agentblueprint-usecases.png";
import sunnyfinImg from "@/assets/venture-sunnyfin.png";
import sunnyfinImg2 from "@/assets/venture-sunnyfin-2.png";
import sunnyfinImg3 from "@/assets/venture-sunnyfin-3.png";
import sunnyfinImg4 from "@/assets/venture-sunnyfin-4.png";
import cosyncImg from "@/assets/venture-cosync.png";
import cosyncAwardImg from "@/assets/venture-cosync-award.png";
import cosyncMobileImg from "@/assets/venture-cosync-mobile.png";

export type VentureStage = "Live" | "Beta" | "R and D";
export type VentureCategory =
  | "Infrastructure Intelligence"
  | "SMB and Health Automation"
  | "Builder and Talent Systems";

export interface Venture {
  id: string;
  name: string;
  pitch: string;
  cardSubline?: { en: string; tr: string };
  headline: { en: string; tr: string };
  description: { en: string; tr: string };
  fullDescription: { en: string; tr: string };
  strategicValue: { en: string; tr: string };
  capabilities: { en: string[]; tr: string[] };
  color: string;
  gradient: string;
  image: string;
  galleryImages?: string[];
  website?: string;
  stage: VentureStage;
  category: VentureCategory;
}

export const ventures: Venture[] = [
  {
    id: "sunnysett",
    name: "SunnySett",
    pitch: "AI Team in a Box for 30+ Industries",
    cardSubline: {
      en: "Finance, healthcare, engineering, science, LLMs, and more. No data science team required.",
      tr: "Finans, sağlık, mühendislik, bilim, LLM'ler ve daha fazlası. Veri bilimi ekibi gerekmez.",
    },
    headline: {
      en: "AI Team in a Box for 30+ Industries",
      tr: "30'dan Fazla Sektör için Yapay Zeka Ekibi",
    },
    stage: "Live",
    category: "SMB and Health Automation",
    description: {
      en: "SunnySett is an AI-powered ML model platform that turns ideas into production pipelines in one click. Discover 500+ models, match datasets, build pipelines with natural language, and deploy with generated code. Built for finance, healthcare, and engineering teams that want results without hiring a data science team.",
      tr: "SunnySett, fikirleri tek tıkla üretim pipeline'larına dönüştüren yapay zeka destekli ML model platformudur. 500'den fazla modeli keşfedin, veri setlerini eşleştirin, doğal dille pipeline oluşturun ve üretilen kodla deploy edin. Veri bilimi ekibi istihdam etmeden sonuç almak isteyen finans, sağlık ve mühendislik ekipleri için.",
    },
    fullDescription: {
      en: "SunnySett delivers an AI Smart Guide that walks you through model selection, dataset matching, and pipeline creation. Search and browse thousands of pre-trained models from Hugging Face with smart filters. Test models in real time with custom inputs in an interactive playground. Get intelligent dataset recommendations and one-click data cleaning. Connect GitHub repositories for AI-powered code analysis and model suggestions. The Pipeline Builder lets you create production-ready ML workflows in natural language: create, test, and deploy in minutes. Export code, generate fine-tuning scripts, and go live across 30+ industries including finance, healthcare, and engineering.",
      tr: "SunnySett, model seçiminden veri seti eşleştirmesine ve pipeline oluşturmaya kadar rehberlik eden bir AI Smart Guide sunar. Hugging Face'tan binlerce önceden eğitilmiş modeli akıllı filtrelerle arayın ve inceleyin. Etkileşimli oyun alanında özel girdilerle modelleri gerçek zamanlı test edin. Akıllı veri seti önerileri ve tek tıkla veri temizleme alın. GitHub depolarını bağlayarak yapay zeka destekli kod analizi ve model önerileri kullanın. Pipeline Builder, doğal dille üretime hazır ML iş akışları oluşturmanızı sağlar: dakikalar içinde oluşturun, test edin ve deploy edin. Kod dışa aktarın, ince ayar scriptleri üretin ve finans, sağlık ve mühendislik dahil 30'dan fazla sektörde yayına alın.",
    },
    strategicValue: {
      en: "Gives SMBs and product teams enterprise-grade ML capability without data scientists. One system for discovery, testing, and deployment shortens time to production.",
      tr: "KOBİ'lere ve ürün ekiplerine veri bilimcisi olmadan kurumsal düzeyde ML yeteneği sağlar. Keşif, test ve deploy için tek sistem, üretime geçiş süresini kısaltır.",
    },
    capabilities: {
      en: ["Model Discovery (500+ models)", "Pipeline Builder (natural language)", "Dataset Matching & Cleaning", "Instant Model Testing", "GitHub Integration", "One-Click Deploy"],
      tr: ["Model Keşfi (500+ model)", "Pipeline Oluşturucu (doğal dil)", "Veri Seti Eşleştirme ve Temizleme", "Anında Model Testi", "GitHub Entegrasyonu", "Tek Tıkla Deploy"],
    },
    color: "hsl(250, 80%, 65%)",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    image: sunnysettImg,
    galleryImages: [sunnysettDesignImg, sunnysettLandingImg],
    website: "https://sunnysett.com",
  },
  {
    id: "healthline",
    name: "Health Line",
    pitch: "AI Assisted Clinical Intake Platform",
    cardSubline: {
      en: "Voice, image, and pattern analysis. 60+ languages. PDF reports for doctors.",
      tr: "Ses, görsel ve örüntü analizi. 60+ dil. Doktorlar için PDF raporları.",
    },
    headline: {
      en: "AI Assisted Clinical Intake Platform",
      tr: "Yapay Zeka Destekli Klinik Hasta Kabul Platformu",
    },
    stage: "Live",
    category: "SMB and Health Automation",
    description: {
      en: "Health Line is your AI health companion: accurate, multilingual, and private. Record symptoms by voice, get intelligent analysis, upload images for visual assessment, and export PDF reports for doctors. Supports 60+ languages to break down barriers between patients and providers.",
      tr: "Health Line, doğru, çok dilli ve gizli yapay zeka sağlık asistanınızdır. Semptomları sesle kaydedin, akıllı analiz alın, görsel değerlendirme için görsel yükleyin ve doktorlar için PDF raporları dışa aktarın. Hastalar ve sağlayıcılar arasındaki bariyerleri kırmak için 60'tan fazla dili destekler.",
    },
    fullDescription: {
      en: "Health Line reimagines the health journal as an AI-powered companion. Quick Log captures symptoms in 30 seconds. Daily Check-in and Detailed Entry support structured tracking. Voice input records symptoms in the patient's language. AI analysis delivers intelligent symptom interpretation. Image analysis allows visual assessment of conditions. Pattern recognition surfaces trends over time. Local outbreak info (e.g. COVID-19, influenza) keeps context current. PDF export lets users share structured reports with doctors. The platform supports 60+ languages so care is accessible globally. A mock data generator helps explore different user profiles and health patterns. Built for patients and clinicians who want accurate, multilingual, private symptom documentation.",
      tr: "Health Line, sağlık günlüğünü yapay zeka destekli bir asistan olarak yeniden hayal eder. Hızlı Kayıt 30 saniyede semptomları yakalar. Günlük Kontrol ve Ayrıntılı Giriş yapılandırılmış takibi destekler. Ses girişi semptomları hastanın dilinde kaydeder. AI analizi akıllı semptom yorumu sunar. Görsel analiz durumların görsel değerlendirmesine olanak tanır. Örüntü tanıma zaman içindeki trendleri ortaya çıkarır. Yerel salgın bilgisi (örn. COVID-19, influenza) bağlamı güncel tutar. PDF dışa aktarma kullanıcıların doktorlarla yapılandırılmış rapor paylaşmasını sağlar. Platform 60'tan fazla dili destekleyerek bakımın küresel erişilebilir olmasını sağlar. Doğru, çok dilli ve gizli semptom dokümantasyonu isteyen hastalar ve klinisyenler için tasarlanmıştır.",
    },
    strategicValue: {
      en: "Removes language and documentation barriers in care. Gives providers structured, shareable health data and gives patients a single place to log and share with doctors.",
      tr: "Bakımda dil ve dokümantasyon bariyerlerini kaldırır. Sağlayıcılara yapılandırılmış, paylaşılabilir sağlık verisi, hastalara ise tek bir yerde kayıt tutup doktorlarla paylaşma imkânı sunar.",
    },
    capabilities: {
      en: ["Voice Input (60+ languages)", "AI Symptom Analysis", "Image Analysis", "Pattern & Trend Recognition", "PDF Export for Doctors", "Local Outbreak Info"],
      tr: ["Ses Girişi (60+ dil)", "AI Semptom Analizi", "Görsel Analiz", "Örüntü ve Trend Tanıma", "Doktorlar için PDF Dışa Aktarma", "Yerel Salgın Bilgisi"],
    },
    color: "hsl(350, 85%, 60%)",
    gradient: "from-rose-400 via-red-500 to-pink-600",
    image: healthlineImg,
    website: "https://healthline-bay.vercel.app",
  },
  {
    id: "scriptface",
    name: "ScriptFace",
    pitch: "Productized Venture Engine for Builders",
    cardSubline: {
      en: "Upload any file or idea. Get web app, pitch deck, and marketing hub in minutes.",
      tr: "Herhangi bir dosya veya fikir yükleyin. Dakikalar içinde web uygulaması, sunum ve pazarlama merkezi alın.",
    },
    headline: {
      en: "Productized Venture Engine for Builders",
      tr: "Girişimciler İçin Ürünleştirilmiş Girişim Motoru",
    },
    stage: "Live",
    category: "Builder and Talent Systems",
    description: {
      en: "ScriptFace turns any project file into a launch-ready business. Upload code, a README, or an idea. Get a web app, investor pitch deck, marketing hub, and sales landing in minutes. A 6-agent AI pipeline handles code, product, architecture, UX, and deployment. No coding required.",
      tr: "ScriptFace, herhangi bir proje dosyasını lansmana hazır bir işe dönüştürür. Kod, README veya fikir yükleyin. Dakikalar içinde web uygulaması, yatırımcı sunum deck'i, pazarlama merkezi ve satış landing sayfası alın. 6 ajanlı AI pipeline kod, ürün, mimari, UX ve deploy'u yönetir. Kodlama gerekmez.",
    },
    fullDescription: {
      en: "ScriptFace compresses the path from idea to market-ready product. Upload any code file, project folder, README, product description, or concept notes; the system extracts intent and generates a complete launch system. The 3-in-1 Web App Generator produces a conversion-optimized landing page, a functional tool page, and an investor storytelling page. The Pitch Deck Generator builds professional decks (PDF, PPTX, JSON) with market opportunity, problem/solution, roadmap, competitive positioning, team needs, and funding strategy. The Marketing Hub includes social content, email campaigns, SEO, GTM strategy, branding, and outreach templates. A 6-agent AI pipeline handles code understanding, product suggestions, system architecture, UX generation, code generation, and deployment. Multi-framework support (Tailwind, Material UI, Bootstrap, Chakra) and one-click GitHub setup round out the offering. Built for solo founders, non-technical founders, engineers, and startup teams who want to validate and launch faster.",
      tr: "ScriptFace, fikirden pazara hazır ürüne giden yolu sıkıştırır. Herhangi bir kod dosyası, proje klasörü, README, ürün açıklaması veya konsept notu yükleyin; sistem niyeti çıkarır ve eksiksiz bir lansman sistemi üretir. 3ü1 Web Uygulaması Oluşturucu, dönüşüm odaklı landing sayfası, işlevsel araç sayfası ve yatırımcı hikaye sayfası üretir. Sunum Deck Oluşturucu, pazar fırsatı, problem/çözüm, yol haritası, rekabet konumlandırması, ekip ihtiyaçları ve finansman stratejisi ile profesyonel deck'ler (PDF, PPTX, JSON) oluşturur. Pazarlama Merkezi sosyal içerik, e-posta kampanyaları, SEO, GTM stratejisi, marka ve outreach şablonları içerir. 6 ajanlı AI pipeline kod anlama, ürün önerileri, sistem mimarisi, UX üretimi, kod üretimi ve deploy'u yönetir. Çoklu framework desteği (Tailwind, Material UI, Bootstrap, Chakra) ve tek tıkla GitHub kurulumu sunumu tamamlar. Daha hızlı doğrulama ve lansman isteyen solo kurucular, teknik olmayan kurucular, mühendisler ve startup ekipleri için.",
    },
    strategicValue: {
      en: "Turns weeks of setup into minutes. Delivers a market-ready product system (app, pitch, marketing, sales) instead of a single prototype. Lowers cost and increases validation confidence.",
      tr: "Haftalarca süren kurulumu dakikalara indirir. Tek bir prototip yerine pazara hazır ürün sistemi (uygulama, sunum, pazarlama, satış) sunar. Maliyeti düşürür ve doğrulama güvenini artırır.",
    },
    capabilities: {
      en: ["3-in-1 Web App (Landing, Tool, Investor)", "Pitch Deck Generator (PDF/PPTX)", "Marketing Hub & GTM", "6-Agent AI Pipeline", "Multi-Framework (Tailwind, MUI)", "One-Click GitHub Setup"],
      tr: ["3ü1 Web Uygulaması (Landing, Araç, Yatırımcı)", "Sunum Deck Oluşturucu (PDF/PPTX)", "Pazarlama Merkezi ve GTM", "6 Ajanlı AI Pipeline", "Çoklu Framework (Tailwind, MUI)", "Tek Tıkla GitHub Kurulumu"],
    },
    color: "hsl(25, 95%, 55%)",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    image: scriptfaceImg,
    galleryImages: [scriptfacePitchImg, scriptfaceHiringImg, scriptfaceSeoImg],
    website: "https://scriptface.dev",
  },
  {
    id: "safestructure",
    name: "SafeStructure",
    pitch: "AI Powered Building Safety & Environmental Risk",
    cardSubline: {
      en: "Upload a photo. Get structural and environmental analysis in about 30 seconds.",
      tr: "Fotoğraf yükleyin. Yaklaşık 30 saniyede yapısal ve çevresel analiz alın.",
    },
    headline: {
      en: "AI Powered Infrastructure Risk Intelligence",
      tr: "Yapay Zeka Destekli Altyapı Risk Bilgisi",
    },
    stage: "Beta",
    category: "Infrastructure Intelligence",
    description: {
      en: "SafeStructure is an AI-powered building safety platform. Upload structural photos and get detailed safety analysis with environmental risk assessment in about 30 seconds. No registration required to start. Analysis covers concrete, steel, and wood elements plus flood zones, seismic activity, and climate risks.",
      tr: "SafeStructure, yapay zeka destekli bina güvenliği platformudur. Yapısal fotoğraflar yükleyin, yaklaşık 30 saniyede çevresel risk değerlendirmesi ile ayrıntılı güvenlik analizi alın. Başlamak için kayıt gerekmez. Analiz beton, çelik ve ahşap elemanların yanı sıra sel bölgeleri, sismik aktivite ve iklim risklerini kapsar.",
    },
    fullDescription: {
      en: "SafeStructure addresses slow, costly traditional structural assessments with instant AI analysis. Enhanced SafeVision AI uses advanced vision intelligence to analyze building photos for structural safety, damage detection, and professional recommendations. Set a property location to enable environmental risk assessment: flood zones, seismic activity, climate patterns, and natural disaster factors. Get comprehensive risk scoring, insurance and risk scoring, and regulatory compliance checking. Reports include cost estimates and actionable recommendations. The first 1000 analyses are free; premium features add analysis history, enhanced reports, and professional insights. Trusted by thousands of users with 30-second average turnaround and 24/7 uptime. Secure and private; no registration required for initial analysis.",
      tr: "SafeStructure, yavaş ve maliyetli geleneksel yapısal değerlendirmeleri anında AI analizi ile ele alır. Gelişmiş SafeVision AI, bina fotoğraflarını yapısal güvenlik, hasar tespiti ve profesyonel öneriler için analiz eder. Çevresel risk değerlendirmesini etkinleştirmek için mülk konumunu ayarlayın: sel bölgeleri, sismik aktivite, iklim örüntüleri ve doğal afet faktörleri. Kapsamlı risk puanlaması, sigorta ve risk puanlaması ve düzenleyici uyumluluk kontrolü alın. Raporlar maliyet tahminleri ve uygulanabilir öneriler içerir. İlk 1000 analiz ücretsizdir; premium özellikler analiz geçmişi, gelişmiş raporlar ve profesyonel içgörüler ekler. Ortalama 30 saniyelik süre ve 7/24 çalışma süresi ile binlerce kullanıcı tarafından güvenilir. Güvenli ve gizli; ilk analiz için kayıt gerekmez.",
    },
    strategicValue: {
      en: "Replaces weeks-long structural assessments with 30-second AI reports. Gives property owners and municipalities fast, reliable safety and environmental risk intelligence for better decisions.",
      tr: "Haftalar süren yapısal değerlendirmeleri 30 saniyelik AI raporlarıyla değiştirir. Mülk sahiplerine ve belediyelere daha iyi kararlar için hızlı, güvenilir güvenlik ve çevresel risk bilgisi sunar.",
    },
    capabilities: {
      en: ["SafeVision AI Photo Analysis", "Structural (Concrete, Steel, Wood)", "Environmental (Flood, Seismic, Climate)", "Risk Scoring & Reports", "Location Intelligence", "30-Second Results"],
      tr: ["SafeVision AI Fotoğraf Analizi", "Yapısal (Beton, Çelik, Ahşap)", "Çevresel (Sel, Sismik, İklim)", "Risk Puanlama ve Raporlar", "Konum Zekası", "30 Saniyelik Sonuçlar"],
    },
    color: "hsl(160, 60%, 50%)",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    image: safestructureImg,
    website: "https://safestructure.tech",
  },
  {
    id: "sunnysight",
    name: "SunnySight",
    pitch: "AI Powered Repository Analysis",
    cardSubline: {
      en: "Smart analysis, key files, dashboards. Understand and govern your codebase and AI.",
      tr: "Akıllı analiz, kritik dosyalar, panolar. Kod tabanınızı ve AI'ı anlayın ve yönetin.",
    },
    headline: {
      en: "AI Dev Infrastructure Intelligence",
      tr: "Yapay Zeka Geliştirme Altyapı Zekası",
    },
    stage: "Beta",
    category: "Infrastructure Intelligence",
    description: {
      en: "SunnySight gives engineering teams deep visibility into codebases and AI systems. Analyze GitHub repositories for architecture health, technical debt hotspots, AI model governance, and team efficiency. Turn insights into actionable improvements for code quality and responsible AI deployment.",
      tr: "SunnySight, mühendislik ekiplerine kod tabanları ve AI sistemleri üzerinde derin görünürlük sağlar. Mimari sağlık, teknik borç noktaları, AI model yönetişimi ve ekip verimliliği için GitHub depolarını analiz edin. İçgörüleri kod kalitesi ve sorumlu AI kullanımı için eyleme dönüştürülebilir iyileştirmelere dönüştürün.",
    },
    fullDescription: {
      en: "SunnySight is built for engineering teams that need to understand, govern, and improve their code and AI footprint. The platform analyzes GitHub repositories to deliver architecture evaluations, dependency and quality metrics, and technical debt hotspots. Track AI model usage and governance so systems are auditable and responsible. Measure team efficiency and delivery patterns. Engineering managers get dashboards and recommendations to improve code quality, optimize workflows, and ensure AI systems are deployed with clear ownership and safety. Designed for AI-native and product teams that want one place to see codebase health and AI readiness.",
      tr: "SunnySight, kod ve AI ayak izlerini anlamak, yönetmek ve iyileştirmek isteyen mühendislik ekipleri için tasarlanmıştır. Platform, mimari değerlendirmeler, bağımlılık ve kalite metrikleri ve teknik borç noktaları sunmak için GitHub depolarını analiz eder. AI model kullanımı ve yönetişimini izleyerek sistemlerin denetlenebilir ve sorumlu olmasını sağlayın. Ekip verimliliği ve teslimat örüntülerini ölçün. Mühendislik yöneticileri kod kalitesini artırmak, iş akışlarını optimize etmek ve AI sistemlerinin net sahiplik ve güvenlikle deploy edilmesini sağlamak için panolar ve öneriler alır. Kod tabanı sağlığı ve AI hazırlığını tek yerde görmek isteyen AI odaklı ve ürün ekipleri için.",
    },
    strategicValue: {
      en: "Makes technical debt and AI governance visible so teams can ship faster and more responsibly. Reduces risk and improves long-term maintainability.",
      tr: "Ekiplerin daha hızlı ve sorumlu ship etmesi için teknik borcu ve AI yönetişimini görünür kılar. Risk azaltır ve uzun vadeli sürdürülebilirliği artırır.",
    },
    capabilities: {
      en: ["GitHub Repo Intelligence", "Architecture & Quality Metrics", "Technical Debt Hotspots", "AI Model Governance", "Team Efficiency Analytics", "Actionable Recommendations"],
      tr: ["GitHub Repo Analizi", "Mimari ve Kalite Metrikleri", "Teknik Borç Noktaları", "AI Model Yönetişimi", "Ekip Verimlilik Analitiği", "Eyleme Dönüştürülebilir Öneriler"],
    },
    color: "hsl(200, 85%, 60%)",
    gradient: "from-blue-400 via-cyan-500 to-sky-600",
    image: sunnysightImg,
    galleryImages: [sunnysightAnalyzingImg, sunnysightDashboardImg],
  },
  {
    id: "bestmentee",
    name: "BestMentee",
    pitch: "Mentors & Mentees Connected for Impact",
    cardSubline: {
      en: "70+ universities. Secure messaging, Social Hub. Partners: TPF, NETSA, Turkish Hub.",
      tr: "70+ üniversite. Güvenli mesajlaşma, Sosyal Merkez. İş ortakları: TPF, NETSA, Turkish Hub.",
    },
    headline: {
      en: "Mentor Mentee Intelligence Platform",
      tr: "Mentor-Mentee Eşleştirme Platformu",
    },
    stage: "R and D",
    category: "Builder and Talent Systems",
    description: {
      en: "BestMentee connects mentors and mentees for impact. Alumni from 70+ universities find mentors within their cohort or across the platform. Secure 1-1 messaging, structured programs, and a Social Hub for community posts and events. In partnership with TPF, NETSA, and Turkish Hub. Free to join; no spam.",
      tr: "BestMentee, mentorları ve mentee'leri etki için bir araya getirir. 70'ten fazla üniversiteden mezunlar, kohortları içinde veya platform genelinde mentor bulur. Güvenli 1-1 mesajlaşma, yapılandırılmış programlar ve topluluk gönderileri ve etkinlikleri için Sosyal Merkez. TPF, NETSA ve Turkish Hub ile iş birliği. Ücretsiz katılım; spam yok.",
    },
    fullDescription: {
      en: "BestMentee is a mentor-mentee platform built for meaningful connections and impact. Expert mentors are matched with talented mentees within cohorts or across the community. Secure messaging keeps conversations private with no spam or random outreach. The Social Hub centralizes community posts, events, and updates. The platform is built in partnership with Turkish Philanthropy Funds (TPF), New England Turkish Student Association (NETSA), and Turkish Hub, supporting alumni from 70+ universities. Users can find a mentor, become a mentor, or engage in the Social Hub. Testimonials highlight career navigation, structured support, and smooth matching. Account creation is free; data is secure and not shared with third parties. Designed for graduates and professionals who want to give back or grow through structured mentorship.",
      tr: "BestMentee, anlamlı bağlantılar ve etki için kurulmuş bir mentor-mentee platformudur. Uzman mentorlar, kohortlar içinde veya topluluk genelinde yetenekli mentee'lerle eşleştirilir. Güvenli mesajlaşma sohbetleri gizli tutar; spam veya rastgele iletişim yoktur. Sosyal Merkez topluluk gönderilerini, etkinlikleri ve güncellemeleri tek yerde toplar. Platform, Turkish Philanthropy Funds (TPF), New England Turkish Student Association (NETSA) ve Turkish Hub ile iş birliği içinde kurulmuş olup 70'ten fazla üniversiteden mezunları destekler. Kullanıcılar mentor bulabilir, mentor olabilir veya Sosyal Merkez'de yer alabilir. Referanslar kariyer yönlendirmesi, yapılandırılmış destek ve sorunsuz eşleştirmeyi vurgular. Hesap oluşturma ücretsizdir; veriler güvendedir ve üçüncü taraflarla paylaşılmaz. Geri vermek veya yapılandırılmış mentorlukla büyümek isteyen mezunlar ve profesyoneller için tasarlanmıştır.",
    },
    strategicValue: {
      en: "Scales quality mentorship through verified alumni networks and partner ecosystems. Connects talent with experience for career growth and community impact.",
      tr: "Doğrulanmış mezun ağları ve iş ortakı ekosistemleriyle kaliteli mentorluğu ölçeklendirir. Kariyer büyümesi ve topluluk etkisi için yetenek ile deneyimi bir araya getirir.",
    },
    capabilities: {
      en: ["Expert Mentors (70+ Universities)", "Cohort & Cross-Platform Matching", "Secure 1-1 Messaging", "Social Hub & Events", "TPF, NETSA, Turkish Hub Partners", "Free to Join"],
      tr: ["Uzman Mentorlar (70+ Üniversite)", "Kohort ve Platformlar Arası Eşleştirme", "Güvenli 1-1 Mesajlaşma", "Sosyal Merkez ve Etkinlikler", "TPF, NETSA, Turkish Hub İş Ortakları", "Ücretsiz Katılım"],
    },
    color: "hsl(280, 70%, 60%)",
    gradient: "from-purple-400 via-fuchsia-500 to-pink-600",
    image: bestmenteeImg,
    galleryImages: [bestmenteeSocialhubImg, bestmenteeMentorsImg, bestmenteeAdminImg],
    website: "https://bestmentee.com",
  },
  {
    id: "agentblueprint",
    name: "AgentBlueprint",
    pitch: "Design in the cloud. Run on OpenClaw.",
    cardSubline: {
      en: "Turn ideas into secure, cost-efficient agent blueprints in ~10 minutes. No coding required.",
      tr: "Fikirleri yaklaşık 10 dakikada güvenli, maliyet verimli ajan şablonlarına dönüştürün. Kodlama gerekmez.",
    },
    headline: {
      en: "Design in the cloud. Run on OpenClaw.",
      tr: "Bulutta tasarlayın. OpenClaw'da çalıştırın.",
    },
    stage: "Beta",
    category: "Builder and Talent Systems",
    description: {
      en: "AgentBlueprint is the complementary layer to OpenClaw: design and manage agent blueprints in the cloud, run them via Run API or OpenClaw CLI. Use the wizard to describe your idea; the system produces a full blueprint with agent count, flow, cost, and security summary.",
      tr: "AgentBlueprint, OpenClaw'ın tamamlayıcı katmanıdır: bulutta ajan şablonları tasarlayın ve yönetin, Run API veya OpenClaw CLI ile çalıştırın. Fikrinizi sihirbazla tanımlayın; sistem ajan sayısı, akış, maliyet ve güvenlik özeti ile tam bir şablon üretir.",
    },
    fullDescription: {
      en: "AgentBlueprint lets you design and run agent blueprints in the cloud. Turn your idea into a secure, cost-efficient blueprint in about 10 minutes with no coding required. Manage blueprints from the web dashboard and run them via Run API or OpenClaw CLI. Services include: Blueprint creation (wizard produces full blueprint with agent count, flow, cost, security summary); Cost & efficiency (per-run and monthly estimates, per-agent breakdown, optimization suggestions); Security & access (allowlist-based tool permissions, risks and controls in plain language, audit log and versioning); Flow map (visual agent flow, editable map, React Flow export); Run logs (step-by-step logs for Run API or OpenClaw runs, cost and token usage tracking); Export & OpenClaw integration (OpenClaw-compatible CLI preview, Run API, JSON/Markdown export, optional GitHub repo; use Run API as a tool from OpenClaw).",
      tr: "AgentBlueprint, bulutta ajan şablonları tasarlamanıza ve çalıştırmanıza olanak tanır. Fikrinizi yaklaşık 10 dakikada kodlama gerekmeden güvenli, maliyet verimli bir şablona dönüştürün. Web panelinden şablonları yönetin, Run API veya OpenClaw CLI ile çalıştırın. Hizmetler: Şablon oluşturma (sihirbaz ajan sayısı, akış, maliyet, güvenlik özeti ile tam şablon üretir); Maliyet ve verimlilik (çalışma başına ve aylık tahminler, ajan bazlı dağılım, optimizasyon önerileri); Güvenlik ve erişim (izin listesi tabanlı araç izinleri, düz dilde riskler ve kontroller, denetim günlüğü ve sürümleme); Akış haritası (görsel ajan akışı, düzenlenebilir harita, React Flow dışa aktarma); Çalıştırma günlükleri (Run API veya OpenClaw çalıştırmaları için adım adım günlükler, maliyet ve token kullanım takibi); Dışa aktarma ve OpenClaw entegrasyonu (OpenClaw uyumlu CLI önizleme, Run API, JSON/Markdown dışa aktarma, isteğe bağlı GitHub repo; OpenClaw'dan Run API'yi araç olarak kullanın).",
    },
    strategicValue: {
      en: "Bridges idea-to-execution for agent systems. Cloud design and management with OpenClaw execution. No coding required.",
      tr: "Ajan sistemleri için fikir-uygulama arasında köprü kurar. OpenClaw yürütmesi ile bulut tasarımı ve yönetimi. Kodlama gerekmez.",
    },
    capabilities: {
      en: ["Blueprint creation (wizard)", "Cost & efficiency dashboard", "Security & access (allowlist)", "Flow map (React Flow)", "Run logs & token tracking", "Export & OpenClaw integration"],
      tr: ["Şablon oluşturma (sihirbaz)", "Maliyet ve verimlilik paneli", "Güvenlik ve erişim (izin listesi)", "Akış haritası (React Flow)", "Çalıştırma günlükleri ve token takibi", "Dışa aktarma ve OpenClaw entegrasyonu"],
    },
    color: "hsl(45, 95%, 55%)",
    gradient: "from-amber-400 via-yellow-500 to-orange-500",
    image: agentblueprintImg,
    galleryImages: [agentblueprintUsecasesImg],
    website: "https://agentica.vercel.app",
  },
  {
    id: "cosync",
    name: "CoSync",
    pitch: "Design with your AI Structural Consultant",
    cardSubline: {
      en: "Hackathon awards project — 2nd place, 2025 Dream AI Hackathon. Multi-agent construction platform.",
      tr: "Hackathon ödüllü proje — 2025 Dream AI Hackathon 2. lik. Çok ajanlı inşaat platformu.",
    },
    headline: {
      en: "Design with your AI Structural Consultant",
      tr: "Yapay Zeka Yapı Danışmanınızla Tasarım Yapın",
    },
    stage: "Beta",
    category: "Infrastructure Intelligence",
    description: {
      en: "CoSync is a multi-agent construction platform. Experience immersive 3D building models with real-time collaboration, walk-through mode, X-ray vision, smart measurements, and AI issue detection. Recognized with 2nd place at the 2025 Dream AI Hackathon (LikeLion US).",
      tr: "CoSync çok ajanlı bir inşaat platformudur. Gerçek zamanlı işbirliği, gezinme modu, röntgen görüşü, akıllı ölçümler ve yapay zeka sorun tespiti ile sürükleyici 3B bina modelleri deneyimleyin. 2025 Dream AI Hackathon'da (LikeLion US) 2. lik ile tanındı.",
    },
    fullDescription: {
      en: "CoSync is an AI-powered multi-agent platform for construction project management and 3D collaboration. Design with your AI Structural Consultant: navigate buildings like a video game with walk-through mode, see through walls and floors with X-ray vision, measure distances instantly with smart measurements, and get automatic detection of clashes, code violations, and structural issues. Perfect for dynamic construction teams: offline capabilities for on-site work, real-time sync across devices, touch-optimized 3D navigation. Coming Soon: Smart Field Companion (iOS/Android). CoSync earned 2nd place at the prestigious 2025 Dream AI Hackathon hosted by LikeLion US, competing against 189+ innovative AI projects globally. Judges: \"CoSync represents the future of construction coordination, powered by a team of architects, structural, and mechanical engineers who bring deep domain expertise.\"",
      tr: "CoSync, inşaat proje yönetimi ve 3B işbirliği için yapay zeka destekli çok ajanlı bir platformdur. Yapay Zeka Yapı Danışmanınızla tasarlayın: gezinme modu ile binalarda video oyunu gibi gezinin, röntgen görüşü ile duvarların ve döşemelerin arkasını görün, akıllı ölçümlerle anında mesafe ölçün; çakışma, kod ihlalleri ve yapısal sorunların otomatik tespiti. Dinamik inşaat ekipleri için: sahada internet olmadan çalışma, cihazlar arası anlık senkronizasyon, dokunmaya optimize 3B gezinme. Yakında: Smart Field Companion (iOS/Android). CoSync, LikeLion US ev sahipliğindeki 2025 Dream AI Hackathon'da 189'dan fazla proje arasında 2. lik kazandı. Jüri: \"CoSync, derin alan uzmanlığı getiren mimar, yapı ve makine mühendislerinden oluşan bir ekip tarafından desteklenen inşaat koordinasyonunun geleceğini temsil ediyor.\"",
    },
    strategicValue: {
      en: "Hackathon awards project. Brings AI-powered 3D collaboration and structural analysis to construction—offline-ready, real-time sync, and judge-recognized innovation.",
      tr: "Hackathon ödüllü proje. İnşaata yapay zeka destekli 3B işbirliği ve yapısal analiz getirir—çevrimdışı hazır, anlık senkronizasyon ve jüri tarafından tanınan yenilik.",
    },
    capabilities: {
      en: ["Walk-Through Mode", "X-Ray Vision", "Smart Measurements", "AI Issue Detection", "Offline & Real-time Sync", "Hackathon Awards (2nd Place 2025)"],
      tr: ["Gezinme Modu", "Röntgen Görüşü", "Akıllı Ölçümler", "Yapay Zeka Sorun Tespiti", "Çevrimdışı ve Anlık Senkron", "Hackathon Ödülü (2025 2. lik)"],
    },
    color: "hsl(45, 90%, 50%)",
    gradient: "from-amber-500 via-yellow-500 to-amber-600",
    image: cosyncImg,
    galleryImages: [cosyncAwardImg, cosyncMobileImg],
    website: "https://cosync.info",
  },
  {
    id: "sunnyfin",
    name: "SunnyFin",
    pitch: "AI Powered Financial Trading & Prediction",
    cardSubline: {
      en: "LSTM, Transformer, GRU and more. Real-time charts, model testing, and Risk Radar.",
      tr: "LSTM, Transformer, GRU ve daha fazlası. Anlık grafikler, model testi ve Risk Radar.",
    },
    headline: {
      en: "AI Powered Financial Trading & Prediction",
      tr: "Yapay Zeka Destekli Finansal İşlem ve Tahmin",
    },
    stage: "Beta",
    category: "SMB and Health Automation",
    description: {
      en: "SunnyFin combines real-time trading charts with multiple AI prediction models (LSTM, GRU, Transformer, XGBoost, GARCH, Reinforcement Learning). Test and compare models in simulation, run automatic trading, and use the Portfolio Risk Radar for financial health insights.",
      tr: "SunnyFin, anlık işlem grafiklerini birden fazla AI tahmin modeli (LSTM, GRU, Transformer, XGBoost, GARCH, Pekiştirmeli Öğrenme) ile birleştirir. Modelleri simülasyonda test edin ve karşılaştırın, otomatik işlem çalıştırın ve Portfolio Risk Radar ile finansal sağlık içgörüleri alın.",
    },
    fullDescription: {
      en: "SunnyFin is a financial AI platform for trading and prediction. The Trading view offers candlestick charts with LSTM and other model predictions, technical indicators (EMA, Bollinger Bands, VWAP), and a watchlist. The Model Testing & Simulation Platform lets you run simulations with starting capital, automatic trading frequency, and multiple AI models (GRU, LSTM, Transformer, XGBoost, GARCH, Reinforcement Learning) with accuracy and MSE metrics. The Portfolio Risk Radar & Stock Screener provides sortable financial ratios (P/E, ROE, Debt/Equity, Profit Margin, Market Cap) and health scores. Built for clarity and confidence: cost control, allowlist-based security, reliability with audit logs, and export to JSON or Markdown.",
      tr: "SunnyFin, işlem ve tahmin için bir finansal AI platformudur. Trading görünümü LSTM ve diğer model tahminleri, teknik göstergeler (EMA, Bollinger Bantları, VWAP) ve bir izleme listesi ile mum grafikleri sunar. Model Test ve Simülasyon Platformu, başlangıç sermayesi, otomatik işlem sıklığı ve doğruluk/MSE metrikleri ile birden fazla AI modeli (GRU, LSTM, Transformer, XGBoost, GARCH, Pekiştirmeli Öğrenme) kullanarak simülasyon çalıştırmanızı sağlar. Portfolio Risk Radar ve Stock Screener, sıralanabilir finansal oranlar (P/E, ROE, Borç/Özkaynak, Kâr Marjı, Piyasa Değeri) ve sağlık puanları sunar. Netlik ve güven için: maliyet kontrolü, izin listesi tabanlı güvenlik, denetim günlükleri ile güvenilirlik ve JSON veya Markdown'a dışa aktarma.",
    },
    strategicValue: {
      en: "Brings multi-model AI prediction and simulation to trading and portfolio risk. One platform for charts, backtesting, and financial health screening.",
      tr: "İşlem ve portföy riski için çoklu model AI tahmini ve simülasyonu sunar. Grafikler, backtest ve finansal sağlık taraması için tek platform.",
    },
    capabilities: {
      en: ["Multi-Model AI (LSTM, Transformer, GRU)", "Real-Time Trading Charts", "Model Testing & Simulation", "Risk Radar & Stock Screener", "Technical Indicators & VWAP", "Audit Logs & Export"],
      tr: ["Çoklu Model AI (LSTM, Transformer, GRU)", "Anlık İşlem Grafikleri", "Model Testi ve Simülasyon", "Risk Radar ve Stock Screener", "Teknik Göstergeler ve VWAP", "Denetim Günlükleri ve Dışa Aktarma"],
    },
    color: "hsl(38, 95%, 50%)",
    gradient: "from-amber-400 via-yellow-500 to-orange-600",
    image: sunnyfinImg,
    galleryImages: [sunnyfinImg2, sunnyfinImg3, sunnyfinImg4],
  },
];
