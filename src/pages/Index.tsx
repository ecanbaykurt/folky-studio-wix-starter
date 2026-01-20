import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VentureCard } from "@/components/VentureCard";
import { MusicControls } from "@/components/MusicControls";
import heroBg from "@/assets/hero-bg.jpg";

const ventures = [
  {
    name: "SunnySett",
    headline: "AI Model Discovery & Deployment Platform",
    description: "Teams struggle to discover reliable AI models and deploy them into production quickly. SunnySett unifies discovery, testing, benchmarking, and deployment through automated pipelines.",
    color: "hsl(250, 80%, 65%)",
    fullDescription: "SunnySett is a unified platform that enables teams to discover, test, benchmark, and deploy AI models through automated pipelines and agent-based workflows. We solve the fragmentation problem in AI tooling that slows innovation and increases engineering risk.",
    features: ["Model Discovery", "Benchmarking", "Dataset Integration", "Automated Deployment", "Multi-Agent Optimization", "Cloud-Native Scalability"],
    website: "https://sunnysett.com",
  },
  {
    name: "SafeStructure",
    headline: "AI-Powered Urban Safety & Structural Intelligence",
    description: "Cities lack scalable systems to continuously assess building safety and infrastructure health. SafeStructure uses AI to analyze building images, inspections, and sensor data for real-time risk scoring.",
    color: "hsl(160, 60%, 50%)",
    fullDescription: "SafeStructure uses AI to analyze building images, inspection reports, and sensor data to generate real-time structural risk scores and actionable safety insights. Our platform provides city-scale dashboards, predictive maintenance intelligence, and automated alerting.",
    features: ["Image-Based Damage Detection", "PDF Inspection Analysis", "Risk Scoring & Alerts", "City-Scale Dashboards", "Predictive Maintenance"],
  },
  {
    name: "Floodlight Guardian",
    headline: "Real-Time Flood Risk Intelligence Platform",
    description: "Flood risk data is fragmented and slow. Floodlight Guardian aggregates live weather data, predictive models, and geospatial intelligence to deliver street-level flood risk visualization.",
    color: "hsl(200, 85%, 60%)",
    fullDescription: "Floodlight Guardian aggregates live weather data, predictive models, and geospatial intelligence to deliver street-level flood risk visualization and early warnings. We help cities, emergency agencies, and infrastructure planners prepare for and respond to flood events.",
    features: ["Live Weather Ingestion", "Flood Prediction Models", "Interactive Risk Maps", "Alert Coordination", "Historical Analytics"],
  },
  {
    name: "ScriptFace",
    headline: "Developer Automation & Workflow Intelligence",
    description: "Engineering teams lose productivity managing fragmented automation scripts and repetitive tasks. ScriptFace provides AI-powered tools to generate, manage, and orchestrate developer workflows.",
    color: "hsl(280, 75%, 60%)",
    fullDescription: "ScriptFace provides AI-powered automation tools to generate, manage, test, and orchestrate developer workflows across cloud infrastructure and codebases. We help developers, DevOps teams, and platform engineers automate their daily operations.",
    features: ["Script Generation", "Workflow Orchestration", "Error Simulation", "Infrastructure Automation", "Agent-Based Execution"],
  },
  {
    name: "EchoSpark",
    headline: "Intelligent Knowledge & Reasoning Engine",
    description: "Organizations struggle to extract insights from unstructured documents and distributed knowledge. EchoSpark transforms data into structured intelligence using multi-agent reasoning.",
    color: "hsl(45, 100%, 55%)",
    fullDescription: "EchoSpark transforms documents, data, and conversations into structured intelligence using multi-agent reasoning and semantic analysis. We provide knowledge extraction, semantic search, and decision support intelligence for operations, research, and compliance teams.",
    features: ["Knowledge Extraction", "Semantic Search", "Agent Collaboration", "Decision Support", "API-First Integration"],
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
