import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-border/50 overflow-hidden text-sm font-medium">
      <button
        onClick={() => setLang("tr")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "tr"
            ? "bg-primary text-primary-foreground"
            : "bg-card/50 text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-card/50 text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};
