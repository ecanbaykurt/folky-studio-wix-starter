import sunnysettImg from "@/assets/venture-sunnysett.jpg";
import healthlineImg from "@/assets/venture-healthline.jpg";
import scriptfaceImg from "@/assets/venture-scriptface.jpg";
import safestructureImg from "@/assets/venture-safestructure.jpg";
import sunnysightImg from "@/assets/venture-sunnysight.jpg";
import bestmenteeImg from "@/assets/venture-bestmentee.jpg";

export interface Venture {
  id: string;
  name: string;
  headline: { en: string; tr: string };
  description: { en: string; tr: string };
  fullDescription: { en: string; tr: string };
  strategicValue: { en: string; tr: string };
  capabilities: { en: string[]; tr: string[] };
  color: string;
  gradient: string;
  image: string;
  website?: string;
}

export const ventures: Venture[] = [
  {
    id: "sunnysett",
    name: "SunnySett",
    headline: {
      en: "AI Team in a Box for SMB Finance",
      tr: "KOBİ Finansı için Yapay Zeka Ekibi",
    },
    description: {
      en: "SunnySett eliminates the need for data scientists at small and medium businesses. Our AI platform delivers cash flow prediction, revenue projection, expense analytics, and risk forecasting—all in one intelligent dashboard.",
      tr: "SunnySett, küçük ve orta ölçekli işletmelerde veri bilimcisi ihtiyacını ortadan kaldırır. Yapay zeka platformumuz nakit akışı tahmini, gelir projeksiyonu, gider analitiği ve risk tahminini tek bir akıllı panelde sunar.",
    },
    fullDescription: {
      en: "SunnySett is designed for SMBs that need enterprise-grade financial intelligence without the enterprise price tag. Our platform uses advanced machine learning models to analyze historical financial data, predict cash flow trends, project revenue growth, and identify expense anomalies. With customer segmentation insights and demand behavior analysis, businesses can make data-driven decisions that were previously only accessible to large corporations with dedicated data science teams.",
      tr: "SunnySett, kurumsal düzeyde finansal zekâya ihtiyaç duyan ancak kurumsal bütçelere sahip olmayan KOBİ'ler için tasarlanmıştır. Platformumuz, geçmiş finansal verileri analiz etmek, nakit akışı trendlerini tahmin etmek, gelir büyümesini öngörmek ve gider anomalilerini tespit etmek için gelişmiş makine öğrenimi modelleri kullanır. Müşteri segmentasyon içgörüleri ve talep davranış analizi ile işletmeler, daha önce yalnızca özel veri bilimi ekiplerine sahip büyük şirketlerin erişebildiği veri odaklı kararlar alabilir.",
    },
    strategicValue: {
      en: "Reduces financial uncertainty for SMBs, eliminates the need for data scientists, and automates decision-making processes.",
      tr: "KOBİ'lerin finansal belirsizliğini azaltır, veri bilimci ihtiyacını ortadan kaldırır ve karar alma süreçlerini otomatikleştirir.",
    },
    capabilities: {
      en: ["Cash Flow Prediction", "Revenue Projection", "Expense Analytics", "Profitability Scenarios", "Risk Forecasting", "Customer Segmentation"],
      tr: ["Nakit Akışı Tahmini", "Gelir Projeksiyonu", "Gider Analitiği", "Kârlılık Senaryoları", "Risk Tahmini", "Müşteri Segmentasyonu"],
    },
    color: "hsl(250, 80%, 65%)",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    image: sunnysettImg,
    website: "https://sunnysett.com/about",
  },
  {
    id: "healthline",
    name: "Health Line",
    headline: {
      en: "AI-Assisted Clinical Intake Platform",
      tr: "Yapay Zeka Destekli Klinik Hasta Kabul Platformu",
    },
    description: {
      en: "Health Line breaks language barriers in healthcare. Our platform converts multilingual voice input into structured clinical summaries, enabling faster patient intake and data-driven clinical workflows.",
      tr: "Health Line sağlıkta dil bariyerlerini ortadan kaldırır. Platformumuz çok dilli ses girişini yapılandırılmış klinik özetlere dönüştürerek daha hızlı hasta kabul ve veri odaklı klinik iş akışları sağlar.",
    },
    fullDescription: {
      en: "Health Line revolutionizes the patient intake process with AI-powered multilingual voice transcription. Patients can describe their symptoms in their native language, and our system automatically translates, structures, and categorizes the clinical data. Healthcare providers receive organized complaint clusters, personalized care recommendations, and structured summaries that integrate directly into existing EMR systems.",
      tr: "Health Line, yapay zeka destekli çok dilli ses transkripsiyonu ile hasta kabul sürecini devrimleştirir. Hastalar belirtilerini kendi ana dillerinde tanımlayabilir ve sistemimiz otomatik olarak klinik verileri çevirir, yapılandırır ve kategorize eder. Sağlık hizmet sağlayıcıları, mevcut EMR sistemlerine doğrudan entegre olan organize şikayet kümeleri, kişiselleştirilmiş bakım önerileri ve yapılandırılmış özetler alır.",
    },
    strategicValue: {
      en: "Reduces language barriers, accelerates patient intake, and provides healthcare businesses with data-driven examination infrastructure.",
      tr: "Dil bariyerini azaltır, hasta kabul sürecini hızlandırır ve sağlık işletmelerine veri temelli muayene altyapısı sunar.",
    },
    capabilities: {
      en: ["Multilingual Symptom Intake", "Voice to Clinical Summary", "Automated Translation", "Complaint Clustering", "Personalized Care Support"],
      tr: ["Çok Dilli Semptom Kaydı", "Sesten Klinik Özet", "Otomatik Çeviri", "Şikayet Kümeleme", "Kişiselleştirilmiş Bakım Desteği"],
    },
    color: "hsl(350, 85%, 60%)",
    gradient: "from-rose-400 via-red-500 to-pink-600",
    image: healthlineImg,
    website: "https://healthline-bay.vercel.app",
  },
  {
    id: "scriptface",
    name: "ScriptFace",
    headline: {
      en: "Productized Venture Engine for Builders",
      tr: "Girişimciler İçin Ürünleştirilmiş Girişim Motoru",
    },
    description: {
      en: "ScriptFace accelerates the journey from MVP to investor meeting. Our platform automates pitch deck creation, landing page generation, market modeling, and go-to-market strategy—everything a founder needs to launch.",
      tr: "ScriptFace, MVP'den yatırımcı görüşmesine kadar olan süreci hızlandırır. Platformumuz sunum destesi oluşturma, landing page üretimi, pazar modellemesi ve pazara giriş stratejisini otomatikleştirir.",
    },
    fullDescription: {
      en: "ScriptFace is the ultimate launch toolkit for technical founders and builders. Convert your code into launch-ready landing pages, automatically generate investor pitch decks with market data, build interactive product demos, and model your total addressable market. Our synthetic investor persona simulation lets you practice your pitch, while the GTM strategy builder and marketing command center ensure you're ready for launch day.",
      tr: "ScriptFace, teknik kurucular ve yapıcılar için nihai lansman araç takımıdır. Kodunuzu lansmana hazır açılış sayfalarına dönüştürün, pazar verileriyle otomatik olarak yatırımcı sunum desteleri oluşturun, etkileşimli ürün demoları oluşturun ve toplam adreslenebilir pazarınızı modelleyin. Sentetik yatırımcı persona simülasyonumuz sunumunuzu pratik yapmanızı sağlarken, GTM strateji oluşturucu ve pazarlama komuta merkezi lansman gününe hazır olmanızı sağlar.",
    },
    strategicValue: {
      en: "Accelerates the journey from MVP to investor meeting and provides founders with launch-ready infrastructure.",
      tr: "MVP'den yatırımcı görüşmesine kadar olan süreci hızlandırır ve girişimcilere lansmana hazır altyapı sağlar.",
    },
    capabilities: {
      en: ["Code to Landing Page", "Pitch Deck Automation", "Interactive Demo Builder", "TAM & Market Modeling", "Investor Persona Simulation", "GTM Strategy Builder"],
      tr: ["Koddan Landing Page", "Sunum Otomasyonu", "Etkileşimli Demo Oluşturucu", "TAM & Pazar Modelleme", "Yatırımcı Persona Simülasyonu", "GTM Strateji Oluşturucu"],
    },
    color: "hsl(25, 95%, 55%)",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    image: scriptfaceImg,
    website: "https://scriptface.dev/about",
  },
  {
    id: "safestructure",
    name: "SafeStructure",
    headline: {
      en: "AI-Powered Infrastructure Risk Intelligence",
      tr: "Yapay Zeka Destekli Altyapı Risk İstihbaratı",
    },
    description: {
      en: "SafeStructure uses sensor-based monitoring and modular disaster AI models to help municipalities assess building health, predict infrastructure risks, and coordinate field operations for safer cities.",
      tr: "SafeStructure, sensör tabanlı izleme ve modüler afet yapay zeka modelleri kullanarak belediyelerin bina sağlığını değerlendirmesine, altyapı risklerini tahmin etmesine ve daha güvenli şehirler için saha operasyonlarını koordine etmesine yardımcı olur.",
    },
    fullDescription: {
      en: "SafeStructure provides comprehensive infrastructure intelligence through IoT sensor networks and AI-powered risk models. Our modular approach includes BuildingHealth for structural monitoring, FloodHealth for flood risk assessment, and StormHealth for severe weather preparedness. Municipal dashboards provide real-time risk scoring and visualization, while field operations management ensures rapid response to emerging threats.",
      tr: "SafeStructure, IoT sensör ağları ve yapay zeka destekli risk modelleri aracılığıyla kapsamlı altyapı istihbaratı sağlar. Modüler yaklaşımımız yapısal izleme için BuildingHealth, sel riski değerlendirmesi için FloodHealth ve şiddetli hava koşullarına hazırlık için StormHealth'i içerir. Belediye panoları gerçek zamanlı risk puanlaması ve görselleştirme sağlarken, saha operasyonları yönetimi ortaya çıkan tehditlere hızlı müdahale sağlar.",
    },
    strategicValue: {
      en: "Enhances city safety, analyzes disaster risk in advance, and provides decision support infrastructure for municipalities.",
      tr: "Şehir güvenliğini artırır, afet riskini önceden analiz eder ve belediyeler için karar destek altyapısı sağlar.",
    },
    capabilities: {
      en: ["Sensor-Based Monitoring", "BuildingHealth AI", "FloodHealth AI", "StormHealth AI", "Municipal Dashboard", "Risk Scoring & Visualization"],
      tr: ["Sensör Tabanlı İzleme", "BuildingHealth AI", "FloodHealth AI", "StormHealth AI", "Belediye Panosu", "Risk Puanlama & Görselleştirme"],
    },
    color: "hsl(160, 60%, 50%)",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    image: safestructureImg,
  },
  {
    id: "sunnysight",
    name: "SunnySight",
    headline: {
      en: "AI Dev Infrastructure Intelligence",
      tr: "Yapay Zeka Geliştirme Altyapı İstihbaratı",
    },
    description: {
      en: "SunnySight provides GitHub repository intelligence, codebase analytics, and architecture evaluation—helping AI-native teams improve efficiency and make technical debt visible.",
      tr: "SunnySight, GitHub repo istihbaratı, kod tabanı analitiği ve mimari değerlendirmesi sağlar—yapay zeka odaklı ekiplerin verimliliğini artırır ve teknik borcu görünür hale getirir.",
    },
    fullDescription: {
      en: "SunnySight is built for engineering teams that need deep visibility into their codebases. Our platform analyzes GitHub repositories to provide architecture evaluations, track AI model governance, measure team efficiency metrics, and identify technical debt hotspots. Engineering managers get actionable insights to improve code quality, optimize team workflows, and ensure AI systems are governed responsibly.",
      tr: "SunnySight, kod tabanlarına derin görünürlük ihtiyacı duyan mühendislik ekipleri için tasarlanmıştır. Platformumuz, mimari değerlendirmeler sağlamak, AI model yönetişimini izlemek, ekip verimlilik metriklerini ölçmek ve teknik borç noktalarını belirlemek için GitHub depolarını analiz eder. Mühendislik yöneticileri, kod kalitesini iyileştirmek, ekip iş akışlarını optimize etmek ve AI sistemlerinin sorumlu bir şekilde yönetilmesini sağlamak için eyleme dönüştürülebilir içgörüler alır.",
    },
    strategicValue: {
      en: "Increases efficiency of AI-native teams and makes technical debt visible.",
      tr: "AI-native ekiplerin verimliliğini artırır ve teknik borcu görünür hale getirir.",
    },
    capabilities: {
      en: ["GitHub Repo Intelligence", "Codebase Analytics", "Architecture Evaluation", "AI Model Governance", "Team Efficiency Metrics"],
      tr: ["GitHub Repo İstihbaratı", "Kod Tabanı Analitiği", "Mimari Değerlendirme", "AI Model Yönetişimi", "Ekip Verimlilik Metrikleri"],
    },
    color: "hsl(200, 85%, 60%)",
    gradient: "from-blue-400 via-cyan-500 to-sky-600",
    image: sunnysightImg,
  },
  {
    id: "bestmentee",
    name: "BestMentee",
    headline: {
      en: "Mentor-Mentee Intelligence Platform",
      tr: "Mentor-Mentee İstihbarat Platformu",
    },
    description: {
      en: "BestMentee uses AI to match mentors with mentees, track engagement, measure growth analytics, and build community-driven professional development with a focus on education equality.",
      tr: "BestMentee, yapay zeka kullanarak mentorları mentee'lerle eşleştirir, etkileşimi izler, büyüme analitiğini ölçer ve eğitim eşitliğine odaklı topluluk odaklı profesyonel gelişim sağlar.",
    },
    fullDescription: {
      en: "BestMentee leverages intelligent matching algorithms to pair mentors and mentees based on skills, goals, industry experience, and personality compatibility. Our platform tracks structured engagement through milestone-based programs, provides growth analytics for both parties, and features a community dashboard that fosters peer learning. With a core focus on education equality, BestMentee ensures that quality mentorship is accessible regardless of geography or socioeconomic background.",
      tr: "BestMentee, becerilere, hedeflere, sektör deneyimine ve kişilik uyumluluğuna dayalı olarak mentorları ve mentee'leri eşleştirmek için akıllı eşleştirme algoritmaları kullanır. Platformumuz, kilometre taşı tabanlı programlar aracılığıyla yapılandırılmış etkileşimi izler, her iki taraf için büyüme analitiği sağlar ve akran öğrenimini teşvik eden bir topluluk panosu sunar. Eğitim eşitliğine odaklanan BestMentee, kaliteli mentorluk erişiminin coğrafya veya sosyoekonomik geçmişe bakılmaksızın sağlanmasını garanti eder.",
    },
    strategicValue: {
      en: "Increases access to education, accelerates professional development, and provides community-based mobility.",
      tr: "Eğitim erişimini artırır, profesyonel gelişimi hızlandırır ve topluluk bazlı mobilite sağlar.",
    },
    capabilities: {
      en: ["Smart Mentor Matching", "Engagement Tracking", "Growth Analytics", "Community Dashboard", "Education Equality Focus"],
      tr: ["Akıllı Mentor Eşleştirme", "Etkileşim Takibi", "Büyüme Analitiği", "Topluluk Panosu", "Eğitim Eşitliği Odağı"],
    },
    color: "hsl(280, 70%, 60%)",
    gradient: "from-purple-400 via-fuchsia-500 to-pink-600",
    image: bestmenteeImg,
  },
];
