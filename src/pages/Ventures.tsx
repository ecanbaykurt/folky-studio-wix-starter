import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ventures = [
  {
    name: "SunnySett",
    headline: "SunnySett – Customizable Pre-Trained Models",
    description: "AI shouldn't be one-size-fits-all. SunnySett lets businesses and developers select, adapt, and deploy pre-trained models tailored to their needs. Simple, powerful, customizable.",
    color: "hsl(250, 80%, 65%)",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    fullDescription: "SunnySett is our flagship AI platform that democratizes access to machine learning. We provide a curated marketplace of pre-trained models spanning computer vision, NLP, time-series forecasting, and more. Users can fine-tune models with their own data through an intuitive no-code interface, deploy instantly to cloud or edge devices, and scale seamlessly. Our mission: make cutting-edge AI accessible to every business, regardless of their technical expertise.",
    features: ["Model Marketplace", "No-Code Fine-Tuning", "One-Click Deployment", "Edge & Cloud Support", "API Integration"],
    icon: "🤖",
    website: "https://sunnysett.com",
  },
  {
    name: "Safe Structure",
    headline: "Safe Structure – Infrastructure Safety Platform",
    description: "Cities deserve safer buildings. Safe Structure uses AI to assess, monitor, and predict infrastructure risks—helping municipalities, engineers, and residents ensure resilience against earthquakes, wear, and stress.",
    color: "hsl(160, 60%, 50%)",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    fullDescription: "Safe Structure combines IoT sensors, satellite imagery, and advanced ML algorithms to continuously monitor building health. Our platform provides real-time structural assessments, predictive maintenance alerts, and earthquake vulnerability scores. Municipalities use our dashboards to prioritize repairs, engineers access detailed stress analysis reports, and residents gain peace of mind knowing their buildings are monitored 24/7.",
    features: ["Real-Time Monitoring", "Earthquake Risk Assessment", "Predictive Maintenance", "3D Structural Mapping", "Compliance Reports"],
    icon: "🏗️",
  },
  {
    name: "HealthLine",
    headline: "HealthLine – Public Health & Healthcare Solutions",
    description: "HealthLine bridges public data, AI insights, and clinical tools to improve community health outcomes. From predicting chronic disease risks to optimizing hospital resources, we turn health data into action.",
    color: "hsl(350, 85%, 60%)",
    gradient: "from-rose-400 via-red-500 to-pink-600",
    fullDescription: "HealthLine is an end-to-end health intelligence platform. We aggregate anonymized public health data, apply predictive models to identify at-risk populations, and provide actionable insights to healthcare providers and policymakers. Our tools help hospitals optimize bed allocation, clinics predict patient no-shows, and public health officials track disease outbreaks in real-time.",
    features: ["Disease Prediction Models", "Hospital Resource Optimization", "Population Health Analytics", "Outbreak Tracking", "Clinical Decision Support"],
    icon: "🏥",
  },
  {
    name: "Nodes",
    headline: "Nodes – End-User AI Education Tool",
    description: "AI belongs to everyone. Nodes is an interactive learning platform where students, professionals, and curious minds can explore AI through hands-on demos and guided projects.",
    color: "hsl(45, 100%, 60%)",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    fullDescription: "Nodes transforms AI education through interactive, visual learning experiences. Users build neural networks by connecting nodes, see data flow in real-time, and experiment with hyperparameters instantly. From high school students to career-changers, Nodes provides structured learning paths, certification programs, and a community of learners. No coding required—just curiosity.",
    features: ["Visual Neural Network Builder", "Interactive Tutorials", "Certification Programs", "Community Projects", "Industry Use Cases"],
    icon: "📚",
  },
  {
    name: "FloodTrack",
    headline: "FloodTrack – Climate & Disaster Resilience",
    description: "FloodTrack provides predictive climate analytics, risk maps, and emergency insights. Using satellite data and AI forecasting, we help communities prepare for floods and adapt to climate challenges.",
    color: "hsl(200, 85%, 60%)",
    gradient: "from-blue-400 via-cyan-500 to-sky-600",
    fullDescription: "FloodTrack leverages satellite imagery, weather data, and hydrological models to predict flooding events days in advance. Our platform generates dynamic risk maps, sends early warnings to affected communities, and helps emergency responders allocate resources efficiently. Insurance companies use our data for risk assessment, while urban planners integrate our insights into climate-resilient city designs.",
    features: ["72-Hour Flood Forecasts", "Dynamic Risk Maps", "Early Warning System", "Emergency Response Coordination", "Insurance Risk Data"],
    icon: "🌊",
  },
  {
    name: "Cosync",
    headline: "Cosync – 3D AI HVAC Design & Collaboration",
    description: "Cosync redefines HVAC design. With 3D modeling, AI optimization, and real-time collaboration, engineers achieve greener, smarter, faster results.",
    color: "hsl(195, 75%, 55%)",
    gradient: "from-cyan-400 via-teal-500 to-blue-600",
    fullDescription: "Cosync is the next-generation HVAC design platform where mechanical engineers collaborate in real-time 3D environments. Our AI engine optimizes duct layouts for energy efficiency, calculates load requirements automatically, and ensures code compliance. Teams across continents can co-design simultaneously, review changes instantly, and export directly to CAD/BIM systems. Faster projects, lower energy bills, happier buildings.",
    features: ["Real-Time 3D Collaboration", "AI Load Calculation", "Energy Optimization", "Code Compliance Checks", "CAD/BIM Export"],
    icon: "❄️",
  },
];

const Ventures = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2 font-orbitron">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold font-orbitron bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Folky Studio
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
          Our <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">Ventures</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our portfolio of innovative AI/ML solutions transforming industries and improving lives across safety, climate, health, and education.
        </p>
      </section>

      {/* Ventures Grid */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl space-y-16">
          {ventures.map((venture, index) => (
            <div
              key={venture.name}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Icon/Visual */}
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div 
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${venture.gradient} p-1 shadow-2xl`}
                  style={{ boxShadow: `0 25px 50px -12px ${venture.color}40` }}
                >
                  <div className="h-full w-full rounded-3xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-8xl md:text-9xl">{venture.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-2 bg-gradient-to-r ${venture.gradient} bg-clip-text text-transparent`}>
                    {venture.name}
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium">
                    {venture.headline}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {venture.fullDescription}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {venture.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${venture.gradient} text-white shadow-lg`}
                      style={{ boxShadow: `0 4px 14px 0 ${venture.color}30` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Stats/CTA */}
                <div className="pt-4 flex gap-4 flex-wrap">
                  <Button 
                    variant="outline" 
                    className="font-orbitron border-2 hover:scale-105 transition-transform"
                    style={{ borderColor: venture.color, color: venture.color }}
                  >
                    Learn More About {venture.name}
                  </Button>
                  {venture.website && (
                    <a href={venture.website} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="default" 
                        className="font-orbitron hover:scale-105 transition-transform"
                        style={{ backgroundColor: venture.color }}
                      >
                        Visit Website
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-effect rounded-3xl p-12 shadow-2xl border border-purple-500/20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-orbitron">
              Ready to <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Collaborate?</span>
            </h2>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Partner with us to build the next generation of AI solutions.
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
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <a href="mailto:ebaykurt@folky.info" className="text-muted-foreground hover:text-primary transition-colors">
            ebaykurt@folky.info
          </a>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Folky Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Ventures;
