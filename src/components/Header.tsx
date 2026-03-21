import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, Lang } from "@/lib/i18n";

const languages: Lang[] = ["EN", "RU", "KZ"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const navLinks = [
    { label: t("nav.products"), href: "#products" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.business"), href: "#business" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
          Cordial <span className="text-primary">Care</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-body text-xs">
            {languages.map((l, i) => (
              <span key={l} className="flex items-center">
                <button
                  onClick={() => setLang(l)}
                  className={`px-1 transition-colors duration-200 ${
                    lang === l ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
                {i < languages.length - 1 && <span className="text-border">|</span>}
              </span>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
