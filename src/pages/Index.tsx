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
  },
  {
    name: "Safe Structure",
    headline: "Safe Structure – Infrastructure Safety Platform",
    description: "Cities deserve safer buildings. Safe Structure uses AI to assess, monitor, and predict infrastructure risks—helping municipalities, engineers, and residents ensure resilience against earthquakes, wear, and stress.",
    color: "hsl(160, 60%, 50%)",
  },
  {
    name: "HealthLine",
    headline: "HealthLine – Public Health & Healthcare Solutions",
    description: "HealthLine bridges public data, AI insights, and clinical tools to improve community health outcomes. From predicting chronic disease risks to optimizing hospital resources, we turn health data into action.",
    color: "hsl(350, 85%, 60%)",
  },
  {
    name: "Nodes",
    headline: "Nodes – End-User AI Education Tool",
    description: "AI belongs to everyone. Nodes is an interactive learning platform where students, professionals, and curious minds can explore AI through hands-on demos and guided projects.",
    color: "hsl(45, 100%, 60%)",
  },
  {
    name: "FloodTrack",
    headline: "FloodTrack – Climate & Disaster Resilience",
    description: "FloodTrack provides predictive climate analytics, risk maps, and emergency insights. Using satellite data and AI forecasting, we help communities prepare for floods and adapt to climate challenges.",
    color: "hsl(200, 85%, 60%)",
  },
  {
    name: "Cosync",
    headline: "Cosync – 3D AI HVAC Design & Collaboration",
    description: "Cosync redefines HVAC design. With 3D modeling, AI optimization, and real-time collaboration, engineers achieve greener, smarter, faster results.",
    color: "hsl(195, 75%, 55%)",
  },
];

const Index = () => {
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
            <h1 className="mb-6 text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              <span className="gradient-text">Folky Studio</span>
            </h1>
            <p className="mb-4 text-2xl font-semibold text-primary md:text-3xl">
              Innovate IO Bootcamp
            </p>
          </div>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We transform ambitious ideas into scalable AI/ML solutions across safety, climate, health, and education.
          </p>
          
          <Button 
            variant="hero"
            size="lg"
            className="animate-glow text-lg font-semibold px-12 py-6 h-auto"
          >
            Explore Our Ventures
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            About <span className="gradient-text">Folky Studio</span>
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
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            Our <span className="gradient-text">Ventures</span>
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
          <div className="glass-effect rounded-3xl p-12 shadow-2xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Join the <span className="gradient-text">Innovate IO</span> Movement
            </h2>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Whether you're an investor, partner, or future innovator, we welcome you to explore, 
              collaborate, and co-create with us.
            </p>
            
            <Button 
              variant="hero"
              size="lg"
              className="text-lg font-semibold px-12 py-6 h-auto"
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
            <h3 className="mb-2 text-2xl font-bold gradient-text">
              Stay Connected
            </h3>
            <p className="text-muted-foreground">
              Folky Studio – Building the future of AI with purpose.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Contact
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
