import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
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

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Folky Studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) =>
            link.to === "/#contact" ? (
              <Link
                key={link.to}
                to="/"
                onClick={handleContactClick}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link to="/#contact">
            <Button variant="outline" size="sm" className="font-orbitron text-xs" onClick={handleContactClick}>
              {t.nav.apply}
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
          </div>
        </div>
      )}
    </header>
  );
};
