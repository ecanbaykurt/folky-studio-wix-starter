import { useLanguage } from "@/i18n/LanguageContext";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-md border border-border/50 overflow-hidden text-xs font-medium">
      <button
        onClick={() => setLang("tr")}
        className={`px-2.5 py-1 transition-colors duration-200 ${
          lang === "tr"
            ? "bg-primary text-primary-foreground"
            : "bg-card/40 text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors duration-200 ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-card/40 text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};
