import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/ventures", label: t.nav.portfolio },
    { to: "/blog", label: t.nav.blog },
    { to: "/#contact", label: t.nav.contact },
  ];

  const handleContactClick = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (to: string) => {
    if (to === "/#contact") return false;
    return location.pathname === to;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="relative flex items-center gap-2 py-1 text-lg font-bold font-orbitron tracking-wide text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          Folky Studio
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.to === "/#contact" ? (
              <Link
                key={link.to}
                to="/"
                onClick={handleContactClick}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative text-sm transition-colors py-2",
                  isActive(link.to)
                    ? "text-foreground font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/70 after:rounded-full after:shadow-[0_0_12px_hsl(var(--primary)/0.5)]"
                    : "text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:scale-x-0 after:bg-primary/50 after:transition-transform after:duration-300 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link to="/#contact" onClick={handleContactClick}>
            <Button variant="apply" size="sm" className="font-orbitron text-xs">
              {t.nav.apply}
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map((link) =>
            link.to === "/#contact" ? (
              <Link
                key={link.to}
                to="/"
                onClick={handleContactClick}
                className="block text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 pt-2">
            <LanguageToggle />
            <Button variant="apply" size="sm" onClick={handleContactClick}>
              {t.nav.apply}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
