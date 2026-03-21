import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import productCollagen from "@/assets/product-collagen.jpg";
import productMultivitamin from "@/assets/product-multivitamin.jpg";
import productCalcium from "@/assets/product-calcium.jpg";
import productCushion from "@/assets/product-cushion.jpg";
import productRadiance from "@/assets/product-radiance.jpg";
import productLutein from "@/assets/product-lutein.jpg";

const ProductCatalog = () => {
  const { t } = useI18n();

  const products = [
    { nameKey: "product.collagen.name" as const, descKey: "product.collagen.desc" as const, price: "40 000 ₸", image: productCollagen },
    { nameKey: "product.multivitamin.name" as const, descKey: "product.multivitamin.desc" as const, price: "18 000 ₸", image: productMultivitamin },
    { nameKey: "product.calcium.name" as const, descKey: "product.calcium.desc" as const, price: "20 000 ₸", image: productCalcium },
    { nameKey: "product.cushion.name" as const, descKey: "product.cushion.desc" as const, price: "30 000 ₸", image: productCushion },
    { nameKey: "product.radiance.name" as const, descKey: "product.radiance.desc" as const, price: "30 000 ₸", image: productRadiance },
    { nameKey: "product.lutein.name" as const, descKey: "product.lutein.desc" as const, price: "22 000 ₸", image: productLutein },
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">{t("products.label")}</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">{t("products.title")}</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.nameKey}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{t(product.nameKey)}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{t(product.descKey)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-display font-bold text-foreground">{product.price}</span>
                </div>
                <a
                  href="https://t.me/cordielcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-all duration-300"
                >
                  {t("products.cta")}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
