import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import leaderPortrait from "@/assets/leader-portrait.jpg";

const WHATSAPP_LINK = "https://wa.me/77013161101?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D0%B8%20Cordial%20Care";

const LeaderProfile = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={leaderPortrait}
                  alt="Top Leader — Cordial Care"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-accent rounded-full -z-10" />
            </div>
          </div>

          <div>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">{t("leader.label")}</p>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">{t("leader.title")}</h2>
            <div className="w-16 h-[2px] bg-primary mb-8" />
            <p className="text-muted-foreground font-body leading-relaxed mb-4 text-base">
              {t("leader.desc1")}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-10 text-base">
              {t("leader.desc2")}
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body text-sm tracking-wider uppercase hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              {t("leader.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderProfile;
