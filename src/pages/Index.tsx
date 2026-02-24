import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";
import { ventures, type Venture, type VentureCategory } from "@/data/ventures";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  BarChart3,
  Rocket,
  ChevronDown,
  Target,
  MessageSquare,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CONTROL_ROOM_IDS = ["agent", "infra", "ventures"] as const;
const ENGINE_IDS = ["discover", "build", "launch", "scale"] as const;
const ENGINE_ICONS = { discover: Target, build: Layers, launch: Rocket, scale: BarChart3 };
const INFRA_VIEW_IDS = ["investor", "builder", "partner"] as const;
const PARTNER_IDS = ["investor", "founder", "partner"] as const;
const METRIC_IDS = ["ventures", "sectors", "products", "mvp", "experiments"] as const;

function PortfolioCard({
  venture,
  lang,
  t,
  onSelect,
}: {
  venture: Venture;
  lang: "en" | "tr";
  t: (typeof import("@/i18n/translations").translations)["en"];
  onSelect: (v: Venture) => void;
}) {
  const images = venture.galleryImages
    ? [venture.image, ...venture.galleryImages]
    : [venture.image];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(
      () => setSlideIndex((i) => (i + 1) % images.length),
      4500
    );
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div
      className="group rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_32px_hsl(var(--primary)/0.12)] hover:-translate-y-1"
    >
      <div className="p-4 flex items-center justify-between border-b border-border/40">
        <span className="text-sm font-semibold font-orbitron text-foreground">
          {venture.name}
        </span>
        <span
          className="rounded-md px-2 py-0.5 text-xs font-medium"
          style={{ backgroundColor: `${venture.color}20`, color: venture.color }}
        >
          {venture.stage === "Live" ? t.ventures.stageLive : venture.stage === "Beta" ? t.ventures.stageBeta : t.ventures.stageRnd}
        </span>
      </div>
      <div className="p-3 bg-muted/20 border-b border-border/40">
        <div className="rounded-lg border border-border/60 overflow-hidden bg-background">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border/40 bg-card/50">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
            </div>
            <div className="flex-1 rounded bg-background/80 px-2 py-1 text-[10px] text-muted-foreground truncate ml-2">
              {venture.website
                ? venture.website.replace(/^https?:\/\//, "").split("/")[0]
                : t.hero.portfolio.comingSoon}
            </div>
          </div>
          <div className="aspect-video overflow-hidden relative">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${venture.name} ${i + 1}`}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover object-top venture-slide-artistic",
                  images.length > 1 && "group-hover:scale-105",
                  i === slideIndex
                    ? "venture-slide-active z-10"
                    : "venture-slide-inactive"
                )}
                loading="lazy"
              />
            ))}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center gap-1">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSlideIndex(i);
                    }}
                    className={cn(
                      "h-1.5 rounded-full transition-all",
                      i === slideIndex ? "w-4 bg-primary" : "w-1.5 bg-white/40"
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground leading-tight">
          {venture.name}
        </p>
        <p className="text-xs font-medium text-foreground leading-tight">
          {venture.pitch}
        </p>
        {venture.cardSubline && (
          <p className="text-[11px] subheadline line-clamp-2 leading-snug">
            {venture.cardSubline[lang]}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5">
          {venture.capabilities[lang].slice(0, 3).map((c) => (
            <span
              key={c}
              className="text-[10px] text-muted-foreground bg-muted/50 rounded px-2 py-0.5"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          {venture.website ? (
            <a
              href={venture.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="hero" size="sm" className="w-full gap-1.5 text-xs">
                {t.hero.portfolio.visitWebsite}
                <ExternalLink className="h-3 w-3" />
              </Button>
            </a>
          ) : (
            <span className="flex-1 text-xs text-muted-foreground flex items-center justify-center py-2">
              {t.hero.portfolio.comingSoon}
            </span>
          )}
          <Button
            variant="outline"
            size="sm"
            className="text-xs shrink-0"
            onClick={() => onSelect(venture)}
          >
            {t.hero.portfolio.viewDetails}
          </Button>
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const { lang, t } = useLanguage();
  const [controlRoomExpanded, setControlRoomExpanded] = useState<string | null>(null);
  const [metricModal, setMetricModal] = useState<string | null>(null);
  const [portfolioFilter, setPortfolioFilter] = useState<VentureCategory | "All">("All");
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);
  const [engineExpanded, setEngineExpanded] = useState<string | null>(null);
  const [infraView, setInfraView] = useState<"investor" | "builder" | "partner">("investor");
  const [contactSuccess, setContactSuccess] = useState(false);
  const [heroScrolled, setHeroScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHeroScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredVentures =
    portfolioFilter === "All"
      ? ventures
      : ventures.filter((v) => v.category === portfolioFilter);

  const scrollToContact = (inquiryType?: string) => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (inquiryType) {
        window.dispatchEvent(
          new CustomEvent("contact-inquiry-type", { detail: inquiryType })
        );
      }
    }
  };

  return (
    <div className="page-canvas text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        <div className="hero-glow" />
        <div
          className={cn(
            "logo-watermark text-[clamp(6rem,18vw,12rem)]",
            heroScrolled && "opacity-[0.03]"
          )}
          style={heroScrolled ? { animation: "none" } : undefined}
        >
          <span>Folky Studio</span>
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron headline-hero text-foreground">
                {t.hero.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl subheadline max-w-xl leading-relaxed">
                {t.hero.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/ventures" className="group">
                  <Button variant="hero" size="lg" className="text-base font-semibold px-8 py-6 h-auto gap-2 btn-lift">
                    {t.hero.cta}
                    <ArrowRight className="h-4 w-4 animate-arrow-hover" />
                  </Button>
                </Link>
                <Button
                  variant="apply"
                  size="lg"
                  className="text-base font-semibold px-8 py-6 h-auto"
                  onClick={() => scrollToContact("founder")}
                >
                  {t.nav.apply}
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {t.hero.trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="glass-chip inline-flex items-center rounded-full px-4 py-2 text-sm text-muted-foreground transition-smooth"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Folky Control Room - 3 cards side by side */}
            <div className="relative">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">
                {t.hero.controlRoom.title}
              </p>
              <div className="grid grid-cols-3 gap-3 relative">
                <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-primary/40 animate-energy-flow" style={{ width: "30%" }} />
                </div>
                {CONTROL_ROOM_IDS.map((id) => {
                  const mod = t.hero.controlRoom[id];
                  return (
                    <div
                      key={id}
                      onMouseEnter={() => setControlRoomExpanded(id)}
                      onMouseLeave={() => setControlRoomExpanded(null)}
                      className={cn(
                        "relative rounded-lg border glass-card overflow-hidden transition-all duration-300 z-10",
                        controlRoomExpanded === id
                          ? "border-primary/40 border-glow scale-[1.03]"
                          : "border-border/50 border-glow-hover"
                      )}
                    >
                      <div className="p-4">
                        <h3 className="font-semibold font-orbitron text-foreground text-sm mb-3">
                          {mod.title}
                        </h3>
                        <ul className="space-y-1.5 text-xs text-muted-foreground">
                          {mod.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-1.5">
                              <span className="text-primary">•</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof metrics */}
      <section className="py-16 px-6 border-y border-border/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {METRIC_IDS.map((id, i) => {
              const m = t.hero.metrics[i];
              return (
                <button
                  key={id}
                  onClick={() => setMetricModal(id)}
                  className="rounded-xl border border-border/50 glass-card p-5 text-left transition-all duration-300 border-glow-hover focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <span className="block text-2xl md:text-3xl font-bold font-orbitron text-foreground">
                    {m.value}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-1">
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {METRIC_IDS.map((id, i) => {
          const m = t.hero.metrics[i];
          return (
            <Dialog key={id} open={metricModal === id} onOpenChange={() => setMetricModal(null)}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{m.label}</DialogTitle>
                  <DialogDescription>{m.description}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-divider" />
      </div>

      {/* Portfolio */}
      <section className="py-24 px-6" id="portfolio">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-2 text-foreground">
            {t.hero.portfolio.title}
          </h2>
          <p className="subheadline mb-6 max-w-2xl">
            {t.hero.portfolio.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { value: "All" as const, label: t.hero.portfolio.filterAll },
              { value: "Infrastructure Intelligence" as const, label: t.hero.portfolio.filterInfra },
              { value: "SMB and Health Automation" as const, label: t.hero.portfolio.filterSMB },
              { value: "Builder and Talent Systems" as const, label: t.hero.portfolio.filterBuilder },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setPortfolioFilter(f.value)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  portfolioFilter === f.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card/50 text-muted-foreground border border-border/50 hover:text-foreground hover:border-border"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((venture) => (
              <PortfolioCard
                key={venture.id}
                venture={venture}
                lang={lang}
                t={t}
                onSelect={setSelectedVenture}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/ventures">
              <Button variant="hero" size="lg" className="gap-2 btn-lift">
                {t.hero.portfolio.explorePortfolio}
                <ArrowRight className="h-4 w-4 animate-arrow-hover" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio drawer */}
      <Sheet open={!!selectedVenture} onOpenChange={() => setSelectedVenture(null)}>
        <SheetContent side="right" className="w-full sm:max-w-md lg:max-w-lg overflow-y-auto">
          {selectedVenture && (
            <>
              <SheetHeader>
                <SheetTitle className="text-xl font-orbitron">
                  {selectedVenture.name}
                </SheetTitle>
                <SheetDescription className="text-base">
                  {selectedVenture.headline[lang]}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t.hero.drawer.whoItIsFor}
                  </h4>
                  <p className="text-sm text-foreground">
                    {selectedVenture.description[lang]}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t.hero.drawer.coreCapabilities}
                  </h4>
                  <ul className="space-y-1 text-sm text-foreground">
                    {selectedVenture.capabilities[lang].map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {t.hero.drawer.strategicValue}
                  </h4>
                  <p className="text-sm text-foreground">
                    {selectedVenture.strategicValue[lang]}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-4">
                  {selectedVenture.website ? (
                    <a
                      href={selectedVenture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button variant="hero" className="w-full gap-2">
                        {t.hero.drawer.visitProduct}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground py-2">{t.hero.portfolio.comingSoon}</span>
                  )}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedVenture(null);
                      scrollToContact();
                    }}
                  >
                    {t.hero.drawer.contact}
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* The Folky Engine - horizontal timeline */}
      <section className="py-24 px-6 bg-card/10 relative">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 hidden lg:block max-w-4xl mx-auto">
          <div className="section-divider w-full h-full" />
        </div>
        <div className="mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-2 text-foreground">
            {t.hero.engine.title}
          </h2>
          <p className="subheadline mb-12 max-w-2xl">
            {t.hero.engine.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGINE_IDS.map((stepId) => {
              const step = t.hero.engine[stepId];
              const Icon = ENGINE_ICONS[stepId];
              const isExpanded = engineExpanded === stepId;
              return (
                <button
                  key={stepId}
                  onClick={() => setEngineExpanded(isExpanded ? null : stepId)}
                  className={cn(
                    "relative rounded-xl border glass-card p-5 text-left transition-all duration-300",
                    isExpanded ? "border-primary/40 border-glow lg:col-span-2" : "border-border/50 border-glow-hover"
                  )}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="rounded-lg bg-primary/15 p-2 shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold font-orbitron text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm subheadline mt-0.5">{step.summary}</p>
                    </div>
                    <ChevronDown
                      className={cn("h-4 w-4 text-muted-foreground ml-auto shrink-0 transition-transform duration-300", isExpanded && "rotate-180")}
                    />
                  </div>
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-border/50 animate-in fade-in duration-300">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {t.hero.engine.exampleDeliverable}
                      </p>
                      <p className="text-sm text-foreground">{step.deliverable}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared AI Infrastructure - vertical stack */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-2 text-foreground">
            {t.hero.infra.title}
          </h2>
          <p className="subheadline mb-8 max-w-2xl">
            {t.hero.infra.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {INFRA_VIEW_IDS.map((viewId) => {
              const v = t.hero.infra[viewId];
              return (
                <button
                  key={viewId}
                  onClick={() => setInfraView(viewId)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    infraView === viewId
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/50 text-muted-foreground border border-border/50 hover:text-foreground"
                  )}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
          <p className="text-sm subheadline mb-6 min-h-[2.5rem] transition-opacity duration-300">
            {t.hero.infra[infraView].focus}
          </p>
          <div className="space-y-3">
            {t.hero.infra[infraView].layers.map((layer, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border/50 glass-card p-4 border-glow-hover animate-in fade-in duration-300"
              >
                <h3 className="font-semibold font-orbitron text-foreground text-sm mb-2">
                  {layer.title}
                </h3>
                <ul className="space-y-1 text-sm subheadline">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build With Folky */}
      <section className="py-24 px-6 bg-card/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-10 text-center text-foreground">
            {t.hero.buildWithFolky.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PARTNER_IDS.map((pId) => {
              const p = t.hero.buildWithFolky[pId === "investor" ? "investors" : pId === "founder" ? "founders" : "partners"];
              return (
                <div
                  key={pId}
                  className="rounded-xl border border-border/50 glass-card p-6 text-center space-y-4 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_28px_hsl(var(--primary)/0.1)]"
                >
                  <h3 className="text-lg font-semibold font-orbitron text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm subheadline">{p.copy}</p>
                  <Button
                    variant={pId === "founder" ? "hero" : "apply"}
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      if (pId === "investor") {
                        window.location.href = "/ventures";
                      } else {
                        scrollToContact(pId);
                      }
                    }}
                  >
                    {p.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-divider" />
      </div>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-12">
            {contactSuccess ? (
              <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-500">
                <div className="inline-flex rounded-full bg-primary/15 p-4 mb-4">
                  <MessageSquare className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-orbitron text-foreground mb-2">
                  {t.hero.contactSuccess.title}
                </h2>
                <p className="subheadline mb-6 max-w-md mx-auto">
                  {t.hero.contactSuccess.description}
                </p>
                <Button variant="outline" onClick={() => setContactSuccess(false)}>
                  {t.hero.contactSuccess.sendAnother}
                </Button>
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row md:items-start gap-10 mb-10">
                  <div className="flex flex-col items-center md:items-start shrink-0">
                    <img
                      src="/emre-can-baykurt.png"
                      alt="Emre Can Baykurt"
                      className="w-28 h-28 rounded-full object-cover border-2 border-border/50 shadow-lg"
                    />
                    <p className="mt-3 font-semibold text-foreground">Emre Can Baykurt</p>
                    <a
                      href="mailto:ebaykurt@bu.edu"
                      className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      ebaykurt@bu.edu
                    </a>
                    <div className="mt-3 flex gap-3">
                      <a
                        href="https://www.linkedin.com/in/ebaykurt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://github.com/ecanbaykurt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold font-orbitron">
                      {t.contact.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {t.contact.subtitle}
                    </p>
                    <p className="mt-4 text-base text-muted-foreground/90 max-w-xl">
                      {t.contact.welcome}
                    </p>
                  </div>
                </div>
                <ContactForm onSuccess={() => setContactSuccess(true)} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/20 py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t.hero.footerTagline}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:ebaykurt@bu.edu" className="hover:text-primary transition-colors">
                ebaykurt@bu.edu
              </a>
              <a href="https://www.linkedin.com/in/ebaykurt/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 inline" />
              </a>
              <a href="https://github.com/ecanbaykurt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5 inline" />
              </a>
              <Link to="/blog" className="hover:text-primary transition-colors">
                {t.nav.blog}
              </Link>
              <a href="#" className="hover:text-primary transition-colors">
                {t.hero.privacy}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t.hero.terms}
              </a>
            </div>
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
