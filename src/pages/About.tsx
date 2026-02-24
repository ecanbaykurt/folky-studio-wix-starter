import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {t.about.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.tagline}
          </p>
        </div>
      </section>

      {/* Why Folky / Ecosystem */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-2xl bg-card/60">
            <h2 className="text-xl md:text-2xl font-orbitron font-bold mb-3">
              {lang === "tr" ? "Ajans değil, portföy motoru" : `${t.nav.portfolio} engine, not an agency`}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {t.about.p1}
            </p>
          </div>
          <div className="glass-effect rounded-2xl p-8 border border-border/50 shadow-2xl bg-card/60">
            <h2 className="text-xl md:text-2xl font-orbitron font-bold mb-3">
              {lang === "tr" ? "Boston inovasyon ekosistemine bağlı" : "Connected to the Boston ecosystem"}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
          </div>
        </div>
      </section>

      {/* Proof / Numbers */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-2">
              {lang === "tr" ? "Gerçek ekiplerin içinde inşa edildi" : "Built inside real teams"}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              {t.about.p3}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border/50 glass-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-orbitron font-bold">40+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {lang === "tr" ? "6 ayda 40+ startup" : "Startups in 6 months"}
              </p>
            </div>
            <div className="rounded-xl border border-border/50 glass-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-orbitron font-bold">4+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {lang === "tr" ? "Çekirdek sektörler" : "Core verticals"}
              </p>
            </div>
            <div className="rounded-xl border border-border/50 glass-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-orbitron font-bold">MIT / BU / Harvard</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {lang === "tr" ? "Ekosistem bağları" : "Ecosystem ties"}
              </p>
            </div>
            <div className="rounded-xl border border-border/50 glass-card p-4 text-center">
              <p className="text-2xl md:text-3xl font-orbitron font-bold">Agentic</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                {lang === "tr" ? "Sistemler ve otomasyon" : "Systems & automation"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-4xl glass-effect rounded-3xl p-10 border border-border/60 bg-card/70 shadow-2xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-2">
            {t.about.founderTitle}
          </h2>
          <p className="text-sm font-orbitron uppercase tracking-[0.25em] text-primary/80">
            {t.about.founderName} · {t.about.founderRole}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {t.about.founderBioShort}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-4xl glass-effect rounded-3xl p-10 border border-primary/20 bg-card/70 shadow-2xl space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-2">
            {t.about.mission}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {t.about.missionText}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold">
            {lang === "tr" ? "Folky ile inşa etmeye hazır mısınız?" : "Ready to build with Folky?"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {lang === "tr"
              ? "İster yatırımcı, ister kurucu, ister iş ortağı olun; AI sistemlerini gerçek, ölçeklenebilir şirketlere dönüştürmek isteyen ekiplerle birlikte çalışıyoruz."
              : "Whether you are an investor, founder, or partner, we collaborate with teams who want to turn AI systems into real, scalable companies."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/#contact">
              <Button variant="hero" size="lg" className="px-10 py-5 h-auto font-semibold">
                {lang === "tr" ? "Folky Studio ile iletişime geç" : "Contact Folky Studio"}
              </Button>
            </Link>
            <Link to="/ventures">
              <Button variant="outline" size="lg" className="px-10 py-5 h-auto font-semibold">
                {t.venturesPage.viewAll}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-8 px-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Folky Studio. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
};

export default About;

