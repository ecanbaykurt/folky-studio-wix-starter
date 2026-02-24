import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";
import { ventures } from "@/data/ventures";
import { ExternalLink } from "lucide-react";

const Ventures = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6">
          {t.venturesPage.title.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {t.venturesPage.title.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t.venturesPage.subtitle}
        </p>
      </section>

      {/* Ventures Detail */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-7xl space-y-24">
          {ventures.map((venture, index) => (
            <div
              key={venture.id}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full lg:w-5/12">
                <div
                  className={`rounded-2xl overflow-hidden border border-border/50 shadow-2xl`}
                  style={{ boxShadow: `0 25px 50px -12px ${venture.color}30` }}
                >
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <div
                    className="inline-block rounded-lg px-4 py-1.5 text-sm font-bold font-orbitron mb-3"
                    style={{ backgroundColor: `${venture.color}20`, color: venture.color }}
                  >
                    {venture.name}
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold font-orbitron mb-2 bg-gradient-to-r ${venture.gradient} bg-clip-text text-transparent`}>
                    {venture.headline[lang]}
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {venture.fullDescription[lang]}
                </p>

                {/* Strategic Value */}
                <div className="glass-effect rounded-xl p-4 border border-border/30">
                  <h4 className="text-sm font-bold font-orbitron text-foreground mb-2">
                    {t.ventures.strategicValue}
                  </h4>
                  <p className="text-sm text-muted-foreground">{venture.strategicValue[lang]}</p>
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="text-sm font-bold font-orbitron text-foreground mb-3">
                    {t.ventures.capabilities}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {venture.capabilities[lang].map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${venture.color}15`,
                          color: venture.color,
                          border: `1px solid ${venture.color}30`,
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {venture.website && (
                  <a href={venture.website} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="font-orbitron border-2 hover:scale-105 transition-transform gap-2"
                      style={{ borderColor: venture.color, color: venture.color }}
                    >
                      {t.ventures.visitWebsite}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass-effect rounded-3xl p-12 shadow-2xl border border-primary/20">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl font-orbitron">
              {t.venturesPage.collaborate}
            </h2>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              {t.venturesPage.collaborateSub}
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="text-lg font-semibold px-12 py-6 h-auto">
                {t.venturesPage.getInTouch}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12 px-6">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <a href="mailto:ebaykurt@bu.edu" className="text-muted-foreground hover:text-primary transition-colors">
            ebaykurt@bu.edu
          </a>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Folky Studio. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Ventures;
