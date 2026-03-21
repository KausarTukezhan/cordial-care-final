import { useState } from "react";
import { Shield, CheckCircle, Award, Send, ZoomIn, X, FileCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

// Импортируем изображения напрямую из твоей папки assets
// Импортируем изображения напрямую из папки assets
import halalImg from "@/assets/halal.jpg";
import haccpImg from "@/assets/haccp.jpg";
import isoImg from "@/assets/iso_gmp.jpg";
// Если pylopass еще не добавил, временно закомментируй или используй заглушку
import pylopassImg from "@/assets/pylopass.jpg";

const CompanyStory = () => {
  const { t } = useI18n();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Список сертификатов для отображения
  const certifications = [
    { icon: Shield, label: "HALAL", img: halalImg },
    { icon: CheckCircle, label: "HACCP", img: haccpImg },
    { icon: FileCheck, label: "PYLOPASS", img: pylopassImg },
    { icon: Award, label: "ISO / GMP", img: isoImg },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-accent/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Заголовок секции */}
        <div className="mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            {t("about.title")}
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-muted-foreground font-body leading-relaxed text-lg max-w-2xl mx-auto">
            {t("about.desc")}
          </p>
        </div>

        {/* Блок стандартов с кликабельными карточками */}
        <div className="mb-20">
          <p className="text-foreground font-body text-xs font-bold tracking-[0.2em] uppercase mb-10 opacity-60">
            {t("about.standards")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert) => (
              <button
                key={cert.label}
                onClick={() => setSelectedCert(cert.img)}
                className="group relative flex flex-col items-center justify-center gap-4 bg-background p-6 rounded-3xl border border-border shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <cert.icon className="w-6 h-6 text-primary group-hover:text-white" strokeWidth={1.5} />
                </div>
                <span className="font-display text-sm font-bold tracking-wider text-foreground">
                  {cert.label}
                </span>
                
                {/* Иконка лупы при наведении */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-primary/40" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Блок призыва к действию (CTA) */}
        <div className="bg-background rounded-[2.5rem] p-10 border border-border shadow-2xl shadow-black/[0.02] relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-foreground font-body font-medium mb-8 text-xl">
              {t("about.cta.text")}
            </p>
            <a
              href="https://t.me/cordielcare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-body text-sm font-bold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <Send className="w-4 h-4" />
              {t("about.cta.button")}
            </a>
          </div>
          {/* Декор на фоне */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Всплывающее окно просмотра (Lightbox) */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300 p-2 md:p-10"
          onClick={() => setSelectedCert(null)}
        >
          <button 
            className="top-4 right-4 z-[110] p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedCert(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Чтобы не закрывалось при клике на саму картинку
          >
            <img 
              src={selectedCert} 
              alt="Certificate Full View" 
              className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-sm animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyStory;