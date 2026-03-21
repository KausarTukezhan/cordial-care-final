import { Gift, Users, Layers, Star, BarChart3, Plane, Award, CheckCircle2, ShieldCheck, TrendingUp, Globe } from "lucide-react";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const BusinessPlan = () => {
  const { t } = useI18n();

  const bonuses = [
    { icon: Gift, nameKey: "bonus.referral" as TranslationKey, detailKey: "bonus.referral.detail" as TranslationKey },
    { icon: Users, nameKey: "bonus.binary" as TranslationKey, detailKey: "bonus.binary.detail" as TranslationKey },
    { icon: Layers, nameKey: "bonus.matching" as TranslationKey, detailKey: "bonus.matching.detail" as TranslationKey },
    { icon: Star, nameKey: "bonus.status" as TranslationKey, detailKey: "bonus.status.detail" as TranslationKey },
    { icon: BarChart3, nameKey: "bonus.structural" as TranslationKey, detailKey: "bonus.structural.detail" as TranslationKey },
    { icon: Award, nameKey: "bonus.cashback" as TranslationKey, detailKey: "bonus.cashback.detail" as TranslationKey },
    { icon: Plane, nameKey: "bonus.travel" as TranslationKey, detailKey: "bonus.travel.detail" as TranslationKey },
    { icon: Globe, nameKey: "bonus.limits" as TranslationKey, detailKey: "bonus.limits.detail" as TranslationKey },
  ];

  const ranks = [
    { id: 1, key: "status.rank.1" as TranslationKey, pv: "1800 PV", gift: null },
    { id: 2, key: "status.rank.2" as TranslationKey, pv: "3000 PV", gift: null },
    { id: 3, key: "status.rank.3" as TranslationKey, pv: "6000 PV", gift: "status.gift.3" as TranslationKey },
    { id: 4, key: "status.rank.4" as TranslationKey, pv: "18 000 PV", gift: "status.gift.4" as TranslationKey },
    { id: 5, key: "status.rank.5" as TranslationKey, pv: "60 000 PV", gift: "status.gift.5" as TranslationKey },
    { id: 6, key: "status.rank.6" as TranslationKey, pv: "300 000 PV", gift: "status.gift.6" as TranslationKey },
    { id: 7, key: "status.rank.7" as TranslationKey, pv: "600 000 PV", gift: "status.gift.7" as TranslationKey },
    { id: 8, key: "status.rank.8" as TranslationKey, pv: "1 500 000 PV", gift: "status.gift.8" as TranslationKey },
    { id: 9, key: "status.rank.9" as TranslationKey, pv: "6 000 000 PV", gift: "status.gift.9" as TranslationKey },
  ];

  return (
    <section id="business" className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">{t("business.label")}</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">{t("business.title")}</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">{t("business.desc")}</p>
        </div>

        {/* 1. Сетка бонусов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {bonuses.map((bonus, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <bonus.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-foreground font-body text-sm font-semibold">{t(bonus.nameKey)}</p>
                <p className="text-muted-foreground font-body text-[11px]">{t(bonus.detailKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Карьерная таблица */}
        <div className="mb-32">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-display text-foreground flex items-center justify-center gap-3">
              <TrendingUp className="text-primary w-6 h-6" /> {t("business.statusRewards")}
            </h3>
          </div>
          <div className="bg-background rounded-2xl border border-primary/20 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary/5 border-b border-primary/10">
                    <th className="p-4 text-xs uppercase text-muted-foreground font-bold">{t("business.table.status" as TranslationKey)}</th>
                    <th className="p-4 text-xs uppercase text-muted-foreground font-bold text-center">{t("business.table.pv" as TranslationKey)}</th>
                    <th className="p-4 text-xs uppercase text-muted-foreground font-bold text-right">{t("business.table.rewards" as TranslationKey)}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {ranks.map((rank) => (
                    <tr key={rank.id} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                      <td className="p-4 font-bold text-foreground flex items-center gap-2">
                        <span className="text-primary/40 text-[10px] w-4">{rank.id}.</span> {t(rank.key)}
                      </td>
                      <td className="p-4 text-center text-muted-foreground font-medium">{rank.pv}</td>
                      <td className="p-4 text-right text-primary font-semibold">
                        {rank.gift ? t(rank.gift) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3. Правила и Сравнение */}
        <div className="space-y-16">
          
          {/* Плашки с лимитами и преимуществами */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background border border-border rounded-2xl p-8 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-bold">{t("business.rules.limits")}</p>
                <p className="text-xl font-bold text-foreground">5 000 000 ₸ <span className="text-sm font-normal text-muted-foreground">/ {t("business.rules.weekly")}</span></p>
                <p className="text-xl font-bold text-foreground">20 000 000 ₸ <span className="text-sm font-normal text-muted-foreground">/ {t("business.rules.monthly")}</span></p>
              </div>
              <ShieldCheck className="w-12 h-12 text-primary/10" />
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary/60 mb-2 font-bold">{t("business.rules.benefits" as TranslationKey)}</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-base font-bold text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {t("business.rules.no_confirm")}
                  </li>
                  <li className="flex items-center gap-2 text-base font-bold text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {t("business.rules.no_burn")}
                  </li>
                </ul>
              </div>
              <Award className="w-12 h-12 text-primary/10" />
            </div>
          </div>

          {/* Интерактивное Сравнение (Anti-Cringe Block) */}
          <div className="pt-12">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-display font-bold mb-4">{t("compare.title" as TranslationKey)}</h3>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">{t("compare.subtitle" as TranslationKey)}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Другие */}
              <div className="p-10 rounded-[32px] bg-muted/20 border border-border opacity-70 flex flex-col h-full grayscale hover:grayscale-0 transition-all shadow-inner">
                <h4 className="text-lg font-bold mb-10 text-muted-foreground/60 uppercase tracking-widest">{t("compare.others" as TranslationKey)}</h4>
                <div className="space-y-10 flex-grow">
                  {[
                    { label: "compare.feature.burn", val: "compare.val.others.burn" },
                    { label: "compare.feature.confirm", val: "compare.val.others.confirm" },
                    { label: "compare.feature.payout", val: "compare.val.others.payout" }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-border/50 pb-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 mb-2">{t(item.label as TranslationKey)}</p>
                      <p className="text-base font-medium text-muted-foreground/50 line-through decoration-red-500/20">{t(item.val as TranslationKey)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cordial Care */}
              <div className="p-10 rounded-[32px] bg-gradient-to-br from-primary/[0.08] to-background border-2 border-primary shadow-2xl shadow-primary/20 relative flex flex-col h-full transform lg:-translate-y-4">
                <div className="absolute top-8 right-8 hidden sm:block">
                   <div className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                     Premium System
                   </div>
                </div>
                <h4 className="text-lg font-bold mb-10 text-primary uppercase tracking-widest">{t("compare.cordial" as TranslationKey)}</h4>
                <div className="space-y-10 flex-grow">
                  {[
                    { label: "compare.feature.burn", val: "compare.val.cordial.burn" },
                    { label: "compare.feature.confirm", val: "compare.val.cordial.confirm" },
                    { label: "compare.feature.payout", val: "compare.val.cordial.payout" }
                  ].map((item, idx) => (
                    <div key={idx} className="border-b border-primary/10 pb-4 last:border-0">
                      <p className="text-[10px] uppercase tracking-widest text-primary/60 mb-2">{t(item.label as TranslationKey)}</p>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2.5} />
                        <p className="text-lg font-bold text-foreground leading-tight">{t(item.val as TranslationKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Повторная покупка */}
          <div className="max-w-3xl mx-auto p-8 bg-background rounded-2xl border border-primary/20 flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
               <BarChart3 className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-display font-bold text-xl mb-1">{t("business.rules.repeat_title")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("business.rules.repeat_desc")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessPlan;