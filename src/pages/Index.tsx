import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VentureCard } from "@/components/VentureCard";
import { MusicControls } from "@/components/MusicControls";
import heroBg from "@/assets/hero-bg.jpg";

const ventures = [
  {
    name: "SunnySett",
    headline: "SunnySett – Customizable Pre-Trained Models",
    description: "AI shouldn't be one-size-fits-all. SunnySett lets businesses and developers select, adapt, and deploy pre-trained models tailored to their needs. Simple, powerful, customizable.",
    color: "hsl(250, 80%, 65%)",
    fullDescription: "SunnySett is our flagship AI platform that democratizes access to machine learning. We provide a curated marketplace of pre-trained models spanning computer vision, NLP, time-series forecasting, and more. Users can fine-tune models with their own data through an intuitive no-code interface, deploy instantly to cloud or edge devices, and scale seamlessly. Our mission: make cutting-edge AI accessible to every business, regardless of their technical expertise.",
    features: ["Model Marketplace", "No-Code Fine-Tuning", "One-Click Deployment", "Edge & Cloud Support", "API Integration"],
    website: "https://sunnyset.com",
  },
  {
    name: "Safe Structure",
    headline: "Safe Structure – Infrastructure Safety Platform",
    description: "Cities deserve safer buildings. Safe Structure uses AI to assess, monitor, and predict infrastructure risks—helping municipalities, engineers, and residents ensure resilience against earthquakes, wear, and stress.",
    color: "hsl(160, 60%, 50%)",
    fullDescription: "Safe Structure combines IoT sensors, satellite imagery, and advanced ML algorithms to continuously monitor building health. Our platform provides real-time structural assessments, predictive maintenance alerts, and earthquake vulnerability scores. Municipalities use our dashboards to prioritize repairs, engineers access detailed stress analysis reports, and residents gain peace of mind knowing their buildings are monitored 24/7.",
    features: ["Real-Time Monitoring", "Earthquake Risk Assessment", "Predictive Maintenance", "3D Structural Mapping", "Compliance Reports"],
  },
  {
    name: "HealthLine",
    headline: "HealthLine – Public Health & Healthcare Solutions",
    description: "HealthLine bridges public data, AI insights, and clinical tools to improve community health outcomes. From predicting chronic disease risks to optimizing hospital resources, we turn health data into action.",
    color: "hsl(350, 85%, 60%)",
    fullDescription: "HealthLine is an end-to-end health intelligence platform. We aggregate anonymized public health data, apply predictive models to identify at-risk populations, and provide actionable insights to healthcare providers and policymakers. Our tools help hospitals optimize bed allocation, clinics predict patient no-shows, and public health officials track disease outbreaks in real-time.",
    features: ["Disease Prediction Models", "Hospital Resource Optimization", "Population Health Analytics", "Outbreak Tracking", "Clinical Decision Support"],
  },
  {
    name: "Nodes",
    headline: "Nodes – End-User AI Education Tool",
    description: "AI belongs to everyone. Nodes is an interactive learning platform where students, professionals, and curious minds can explore AI through hands-on demos and guided projects.",
    color: "hsl(45, 100%, 60%)",
    fullDescription: "Nodes transforms AI education through interactive, visual learning experiences. Users build neural networks by connecting nodes, see data flow in real-time, and experiment with hyperparameters instantly. From high school students to career-changers, Nodes provides structured learning paths, certification programs, and a community of learners. No coding required—just curiosity.",
    features: ["Visual Neural Network Builder", "Interactive Tutorials", "Certification Programs", "Community Projects", "Industry Use Cases"],
  },
  {
    name: "FloodTrack",
    headline: "FloodTrack – Climate & Disaster Resilience",
    description: "FloodTrack provides predictive climate analytics, risk maps, and emergency insights. Using satellite data and AI forecasting, we help communities prepare for floods and adapt to climate challenges.",
    color: "hsl(200, 85%, 60%)",
    fullDescription: "FloodTrack leverages satellite imagery, weather data, and hydrological models to predict flooding events days in advance. Our platform generates dynamic risk maps, sends early warnings to affected communities, and helps emergency responders allocate resources efficiently. Insurance companies use our data for risk assessment, while urban planners integrate our insights into climate-resilient city designs.",
    features: ["72-Hour Flood Forecasts", "Dynamic Risk Maps", "Early Warning System", "Emergency Response Coordination", "Insurance Risk Data"],
  },
  {
    name: "Cosync",
    headline: "Cosync – 3D AI HVAC Design & Collaboration",
    description: "Cosync redefines HVAC design. With 3D modeling, AI optimization, and real-time collaboration, engineers achieve greener, smarter, faster results.",
    color: "hsl(195, 75%, 55%)",
    fullDescription: "Cosync is the next-generation HVAC design platform where mechanical engineers collaborate in real-time 3D environments. Our AI engine optimizes duct layouts for energy efficiency, calculates load requirements automatically, and ensures code compliance. Teams across continents can co-design simultaneously, review changes instantly, and export directly to CAD/BIM systems. Faster projects, lower energy bills, happier buildings.",
    features: ["Real-Time 3D Collaboration", "AI Load Calculation", "Energy Optimization", "Code Compliance Checks", "CAD/BIM Export"],
  },
];

const headlines = [
  { text: "Folky Studio", gradient: "from-purple-400 via-pink-500 to-red-500" },
  { text: "AI ML Innovation", gradient: "from-blue-400 via-cyan-500 to-teal-500" },
  { text: "Tech for Good", gradient: "from-green-400 via-emerald-500 to-lime-500" },
  { text: "Building the Future", gradient: "from-orange-400 via-amber-500 to-yellow-500" },
  { text: "Smart Solutions", gradient: "from-indigo-400 via-purple-500 to-pink-500" },
  { text: "Data-Driven Impact", gradient: "from-rose-400 via-fuchsia-500 to-violet-500" }
];

const Index = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <MusicControls />
      
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={heroBg}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-digital-network-5361/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback to image if video doesn't load */}
          <img src={heroBg} alt="Hero background" className="h-full w-full object-cover" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-float">
            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl font-orbitron">
              <span 
                className={`bg-gradient-to-r ${headlines[currentHeadline].gradient} bg-clip-text text-transparent transition-all duration-500 animate-fade-in`}
                key={currentHeadline}
              >
                {headlines[currentHeadline].text}
              </span>
            </h1>
            <p className="mb-4 text-2xl font-semibold text-primary md:text-3xl font-orbitron">
              Innovate IO Bootcamp
            </p>
          </div>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We transform ambitious ideas into scalable AI/ML solutions across safety, climate, health, and education.
          </p>
          
          <Link to="/ventures">
            <Button 
              variant="hero"
              size="lg"
              className="animate-glow text-lg font-semibold px-12 py-6 h-auto"
            >
              Explore Our Ventures
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl font-orbitron">
            About <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Folky Studio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
            Folky Studio is more than an incubator—it's a creative lab where technology meets purpose. 
            Our Innovate IO Bootcamp nurtures projects from spark to scale, turning bold AI/ML ideas into 
            real-world platforms that save lives, empower communities, and shape industries.
          </p>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl font-orbitron">
            Our <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Ventures</span>
          </h2>
          <p className="mb-16 text-center text-lg text-muted-foreground">
            Innovative solutions across multiple domains
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <VentureCard key={venture.name} {...venture} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-effect rounded-3xl p-12 shadow-2xl border border-purple-500/20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-orbitron">
              Join the <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Innovate IO</span> Movement
            </h2>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Whether you're an investor, partner, or future innovator, we welcome you to explore, 
              collaborate, and co-create with us.
            </p>
            
            <Button 
              variant="hero"
              size="lg"
              className="text-lg font-semibold px-12 py-6 h-auto bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold font-orbitron bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            <p className="text-muted-foreground">
              Folky Studio – Building the future of AI with purpose.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:ebaykurt@folky.info" className="transition-colors hover:text-primary">
              ebaykurt@folky.info
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Newsletter Signup
            </a>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Folky Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
