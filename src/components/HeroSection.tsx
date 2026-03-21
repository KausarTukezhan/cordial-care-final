import heroSilk from "@/assets/hero-silk.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundImage: `url(${heroSilk})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className="text-primary font-body tracking-[0.4em] uppercase text-xs mb-6">
          {t("hero.subtitle")}
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-foreground leading-tight mb-6">
          {t("hero.title1")}<br />{t("hero.title2")}
        </h1>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-8" />
        <p className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-xl mx-auto mb-10">
          {t("hero.desc")}
        </p>
        <a
          href="https://t.me/cordielcare"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm tracking-[0.2em] uppercase font-body font-medium rounded-full hover:opacity-90 transition-all duration-500 shadow-lg"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
