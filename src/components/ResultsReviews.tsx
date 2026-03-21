import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

import ba1 from "@/assets/review-before-after-1.jpg";
import ba2 from "@/assets/review-before-after-2.jpg";
import ba3 from "@/assets/review-before-after-3.jpg";
import ba4 from "@/assets/review-before-after-4.jpg";
import ba5 from "@/assets/review-before-after-5.jpg";
import ba6 from "@/assets/review-before-after-6.jpg";
import ba7 from "@/assets/review-before-after-7.jpg";
import c1 from "@/assets/review-comments-1.jpg";
import c2 from "@/assets/review-comments-2.jpg";
import c3 from "@/assets/review-comments-3.jpg";
import c4 from "@/assets/review-comments-4.jpg";
import c5 from "@/assets/review-comments-5.jpg";
import c6 from "@/assets/review-comments-6.jpg";

type ReviewCard = {
  type: "before-after" | "comment";
  image: string;
};

const allReviews: ReviewCard[] = [
  { type: "before-after", image: ba1 },
  { type: "before-after", image: ba2 },
  { type: "before-after", image: ba3 },
  { type: "before-after", image: ba4 },
  { type: "before-after", image: ba5 },
  { type: "before-after", image: ba6 },
  { type: "before-after", image: ba7 },
  { type: "comment", image: c1 },
  { type: "comment", image: c2 },
  { type: "comment", image: c3 },
  { type: "comment", image: c4 },
  { type: "comment", image: c5 },
  { type: "comment", image: c6 },
];

const CARD_HEIGHT = 500;

const ResultsReviews = () => {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-xs mb-4">
            {t("reviews.label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            {t("reviews.title")}
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </div>

        {/* Single unified carousel */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/95 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-14 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {allReviews.map((card, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] snap-center"
              >
                <div
                  className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.18)] transition-shadow duration-300"
                  style={{ height: `${CARD_HEIGHT}px` }}
                >
                  <img
                    src={card.image}
                    alt={`Review ${i + 1}`}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background/95 border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsReviews;
