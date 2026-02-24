import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { MusicControls } from "@/components/MusicControls";
import { useLanguage } from "@/i18n/LanguageContext";
import { ventures } from "@/data/ventures";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  const { lang, t } = useLanguage();
  const [currentVenture, setCurrentVenture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVenture((prev) => (prev + 1) % ventures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MusicControls />

      {/* Hero Section - Inspired by reference design */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron leading-tight">
                  <span className="text-foreground">{t.hero.title1}</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                    {t.hero.title2}
                  </span>
                </h1>
                <p className="mt-4 text-xl text-muted-foreground italic">
                  {t.hero.subtitle}
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg">
                {t.hero.description}
              </p>

              <Link to="/ventures">
                <Button variant="hero" size="lg" className="text-lg font-semibold px-10 py-6 h-auto gap-2">
                  {t.hero.cta}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              {/* Stats row */}
              <div className="flex gap-6 pt-4">
                <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-4 text-center">
                  <div className="text-3xl font-bold font-orbitron text-foreground">6</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t.hero.stats.ventures}</div>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-4 text-center">
                  <div className="text-3xl font-bold font-orbitron text-foreground">5</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t.hero.stats.sectors}</div>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-4 text-center">
                  <div className="text-3xl font-bold font-orbitron text-foreground">3+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t.hero.stats.products}</div>
                </div>
              </div>
            </div>

            {/* Right: Rotating venture showcase image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                {ventures.map((v, i) => (
                  <img
                    key={v.id}
                    src={v.image}
                    alt={v.name}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      i === currentVenture ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${ventures[currentVenture].gradient}`}
                  >
                    {ventures[currentVenture].name}
                  </span>
                  <p className="text-sm text-foreground/90 mt-1 font-medium">
                    {ventures[currentVenture].headline[lang]}
                  </p>
                </div>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {ventures.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentVenture(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentVenture ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-4xl font-bold md:text-5xl font-orbitron">
            {t.about.title.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t.about.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed md:text-xl mb-12">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="glass-effect rounded-2xl p-8 border border-primary/20 mb-8">
            <h3 className="text-xl font-bold mb-4 font-orbitron text-foreground">{t.about.mission}</h3>
            <p className="text-lg text-muted-foreground">{t.about.missionText}</p>
          </div>

          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-orbitron">
            {t.about.tagline}
          </p>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl font-orbitron">
            {t.ventures.title}
          </h2>
          <p className="mb-16 text-center text-lg text-muted-foreground">
            {t.ventures.subtitle}
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <div
                key={venture.id}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div
                    className="inline-block rounded-lg px-3 py-1 text-sm font-semibold font-orbitron"
                    style={{ backgroundColor: `${venture.color}20`, color: venture.color }}
                  >
                    {venture.name}
                  </div>

                  <h3 className="text-lg font-bold text-foreground font-orbitron leading-tight">
                    {venture.headline[lang]}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {venture.description[lang]}
                  </p>

                  <div className="flex gap-3 pt-2">
                    <Link to="/ventures" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        {t.ventures.learnMore}
                      </Button>
                    </Link>
                    {venture.website && (
                      <a href={venture.website} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-xs gap-1" style={{ color: venture.color }}>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ventures">
              <Button variant="hero" size="lg" className="gap-2">
                {t.ventures.viewAll}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/20">
            <div className="text-center mb-10">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl font-orbitron">
                {t.contact.title}
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                {t.contact.subtitle}
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold font-orbitron bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t.footer.stayConnected}
            </h3>
            <p className="text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:ebaykurt@folky.info" className="transition-colors hover:text-primary">
              ebaykurt@folky.info
            </a>
            <Link to="/blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Folky Studio. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
