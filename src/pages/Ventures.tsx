import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ventures = [
  {
    name: "SunnySett",
    headline: "AI Model Discovery & Deployment Platform",
    description: "Teams struggle to discover reliable AI models and deploy them into production quickly. SunnySett unifies discovery, testing, benchmarking, and deployment through automated pipelines.",
    color: "hsl(250, 80%, 65%)",
    gradient: "from-purple-400 via-violet-500 to-indigo-600",
    fullDescription: "SunnySett is a unified platform that enables teams to discover, test, benchmark, and deploy AI models through automated pipelines and agent-based workflows. We solve the fragmentation problem in AI tooling that slows innovation and increases engineering risk. Our platform serves AI engineers, ML teams, startups, research labs, and platform teams looking to accelerate their AI development lifecycle.",
    features: ["Model Discovery & Benchmarking", "Dataset Integration", "Experiment Tracking", "Automated Deployment Pipelines", "Multi-Agent Evaluation", "Cloud-Native Scalability"],
    icon: "🚀",
    website: "https://sunnysett.com",
  },
  {
    name: "SafeStructure",
    headline: "AI-Powered Urban Safety & Structural Intelligence",
    description: "Cities lack scalable systems to continuously assess building safety and infrastructure health using real data.",
    color: "hsl(160, 60%, 50%)",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    fullDescription: "SafeStructure uses AI to analyze building images, inspection reports, and sensor data to generate real-time structural risk scores and actionable safety insights. Our platform provides city-scale dashboards and mapping, predictive maintenance intelligence, and automated risk alerting. We serve municipalities, inspection firms, infrastructure operators, and smart city platforms.",
    features: ["Image-Based Damage Detection", "PDF Inspection Analysis", "Risk Scoring & Alerts", "City-Scale Dashboards", "Predictive Maintenance Intelligence"],
    icon: "🏗️",
  },
  {
    name: "Floodlight Guardian",
    headline: "Real-Time Flood Risk Intelligence Platform",
    description: "Flood risk data is fragmented, slow, and difficult for cities and citizens to interpret in real time.",
    color: "hsl(200, 85%, 60%)",
    gradient: "from-blue-400 via-cyan-500 to-sky-600",
    fullDescription: "Floodlight Guardian aggregates live weather data, predictive models, and geospatial intelligence to deliver street-level flood risk visualization and early warnings. Our platform provides live weather and precipitation ingestion, flood risk prediction models, interactive risk maps, alerting and response coordination, and historical risk analytics. We serve cities, emergency management agencies, infrastructure planners, and insurers.",
    features: ["Live Weather Ingestion", "Flood Risk Prediction", "Interactive Risk Maps", "Alert & Response Coordination", "Historical Risk Analytics"],
    icon: "🌊",
  },
  {
    name: "ScriptFace",
    headline: "Developer Automation & Workflow Intelligence",
    description: "Engineering teams lose productivity managing fragmented automation scripts, workflows, and repetitive operational tasks.",
    color: "hsl(280, 75%, 60%)",
    gradient: "from-fuchsia-400 via-purple-500 to-violet-600",
    fullDescription: "ScriptFace provides AI-powered automation tools to generate, manage, test, and orchestrate developer workflows across cloud infrastructure and codebases. Our platform includes automated script generation, workflow orchestration, error simulation and debugging, infrastructure automation, and agent-based execution. We serve developers, DevOps teams, platform engineers, and startups.",
    features: ["Automated Script Generation", "Workflow Orchestration", "Error Simulation & Debugging", "Infrastructure Automation", "Agent-Based Execution"],
    icon: "⚙️",
  },
  {
    name: "EchoSpark",
    headline: "Intelligent Knowledge & Reasoning Engine",
    description: "Organizations struggle to extract insights from unstructured documents, operational logs, and distributed knowledge.",
    color: "hsl(45, 100%, 55%)",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    fullDescription: "EchoSpark transforms documents, data, and conversations into structured intelligence using multi-agent reasoning and semantic analysis. Our platform provides knowledge extraction and indexing, semantic search and reasoning, agent collaboration workflows, decision support intelligence, and API-first integration. We serve operations teams, research teams, compliance teams, and analysts.",
    features: ["Knowledge Extraction & Indexing", "Semantic Search & Reasoning", "Agent Collaboration Workflows", "Decision Support Intelligence", "API-First Integration"],
    icon: "🔍",
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
