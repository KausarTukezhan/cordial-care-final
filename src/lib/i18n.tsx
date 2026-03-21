import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "RU" | "EN" | "KZ";

const translations = {
  // Header nav
  "nav.products": { EN: "Products", RU: "Продукция", KZ: "Өнімдер" },
  "nav.about": { EN: "About", RU: "О нас", KZ: "Компания туралы" },
  "nav.business": { EN: "Business", RU: "Бизнес", KZ: "Бизнес мүмкіндіктері" },
  "nav.contact": { EN: "Contact", RU: "Контакты", KZ: "Байланыс" },

  // Hero
  "hero.subtitle": { EN: "Premium South Korean Beauty", RU: "Премиум Южнокорейская Красота", KZ: "Премиум Оңтүстік Корея Сұлулығы" },
  "hero.title1": { EN: "True Beauty Starts", RU: "Истинная Красота", KZ: "Шынайы Сұлулық" },
  "hero.title2": { EN: "from Within", RU: "Начинается Изнутри", KZ: " Іштен Басталады" },
  "hero.desc": { EN: "Premium South Korean skincare and wellness solutions for a radiant life.", RU: "Премиальные южнокорейские решения для красоты и здоровья.", KZ: "Сұлулық пен денсаулыққа арналған премиум оңтүстік корей шешімдері." },
  "hero.cta": { EN: "Join Our Community", RU: "Присоединяйтесь", KZ: "Бізге қосылыңыз" },

  // Products
  "products.label": { EN: "Premium Collection", RU: "Премиум Коллекция", KZ: "Премиум Коллекция" },
  "products.title": { EN: "Our Products", RU: "Наша Продукция", KZ: "Біздің Өнімдер" },
  "products.cta": { EN: "Learn More", RU: "Узнать больше", KZ: "Толығырақ" },
  "product.price": { EN: "Price", RU: "Цена", KZ: "Бағасы" },

  // Product names & descriptions
  "product.collagen.name": { EN: "Collagen Health & Beauty", RU: "Collagen Health & Beauty", KZ: "Collagen Health & Beauty" },
  "product.collagen.desc": {
    EN: "Youth elixir from South Korea. Marine collagen with vitamin C, hyaluronic acid, elastin and centella.",
    RU: "Эликсир молодости из Южной Кореи. Морской коллаген с витамином C, гиалуроновой кислотой, эластином и центеллой.",
    KZ: "Оңтүстік Кореядан жастық эликсирі. Теңіз коллагені C витамині, гиалурон қышқылы, эластин және центелла."
  },
  "product.multivitamin.name": { EN: "Wellseed Multivitamin", RU: "Wellseed Multivitamin", KZ: "Wellseed Multivitamin" },
  "product.multivitamin.desc": {
    EN: "Energy and stress protection. A carefully selected complex of vitamins and minerals.",
    RU: "Тщательно подобранный комплекс витаминов и минералов для активации энергии и защиты от стресса.",
    KZ: "Энергия мен стресстен қорғау. Витаминдер мен минералдардың мұқият таңдалған кешені."
  },
  "product.calcium.name": { EN: "Calcium Mag D3", RU: "Calcium Mag D3", KZ: "Calcium Mag D3" },
  "product.calcium.desc": {
    EN: "Essential support for bones and heart. Innovative formula with Magnesium and Vitamin D3.",
    RU: "Инновационная формула Кальция с Магнием и Витамином D3 для максимального усвоения. Защита костей, зубов и сердца.",
    KZ: "Сүйектер мен жүректі қорғау. Магний мен D3 витамині бар кальцийдің инновациялық формуласы."
  },
  "product.cushion.name": { EN: "Esroom Multi Cover Cushion", RU: "Esroom Multi Cover Cushion", KZ: "Esroom Multi Cover Cushion" },
  "product.cushion.desc": {
    EN: "Flawless coverage with SPF50+. Perfect tone, deep hydration and maximum protection.",
    RU: "Идеальный тон, глубокое увлажнение и максимальная защита SPF50+/PA+++.",
    KZ: "Мінсіз тон, терең ылғалдандыру және SPF50+/PA+++ максималды қорғау."
  },
  "product.radiance.name": { EN: "Verobene Radiance Line", RU: "Verobene Radiance Line", KZ: "Verobene Radiance Line" },
  "product.radiance.desc": {
    EN: "Professional 3-step whitening & glow. Toning, treatment and instant brightening.",
    RU: "Трехступенчатый уход: тонизирование, лечение и мгновенное осветление. Против пигментации для 'фарфорового' сияния.",
    KZ: "Үш сатылы күтім: тонизация, емдеу және лезде ағарту. Пигментацияға қарсы 'фарфор' жарқырауы."
  },
  "product.lutein.name": { EN: "Lutein & Zeaxanthin", RU: "Лютеин и Зеаксантин", KZ: "Лютеин және Зеаксантин" },
  "product.lutein.desc": {
    EN: "Digital eye protection. Maximum concentration of carotenoids.",
    RU: "Максимальная концентрация каротиноидов для защиты зрения от цифровых экранов.",
    KZ: "Сандық экрандардан көзді қорғау. Каротиноидтардың максималды концентрациясы."
  },

  // About
  "about.label": { EN: "About Us", RU: "О Нас", KZ: "Компания туралы" },
  "about.title": { EN: "Cordial Care", RU: "Cordial Care", KZ: "Cordial Care" },
  "about.desc": {
    EN: "Cordial Care is a premium South Korean health & beauty brand founded in 2019. Part of the international Cordial Group holding.",
    RU: "Cordial Care — премиальный южнокорейский бренд здоровья и красоты, основанный в 2019 году. Часть международного холдинга Cordial Group.",
    KZ: "Cordial Care — 2019 жылы құрылған премиум оңтүстік корей денсаулық пен сұлулық бренді. Халықаралық Cordial Group холдингінің бөлігі."
  },
  "about.standards": { EN: "International Standards", RU: "Международные Стандарты", KZ: "Халықаралық Стандарттар" },
  "about.cta.text": { EN: "Want to see the full catalog and reviews?", RU: "Хотите увидеть полный каталог и отзывы?", KZ: "Толық каталог пен пікірлерді көргіңіз келе ме?" },
  "about.cta.button": { EN: "Learn More on Telegram", RU: "Узнать больше в Telegram", KZ: "Telegram-да толығырақ" },

  // Business Section
  "business.label": { EN: "Opportunity", RU: "Возможности", KZ: "Бизнес мүмкіндіктері" },
  "business.title": { EN: "Business Plan", RU: "Бизнес План", KZ: "Бизнес Жоспар" },
  "business.desc": { 
    EN: "A hybrid marketing model with 7+ bonus types. 1 PV = 300 KZT.", 
    RU: "Гибридная модель маркетинга: 7+ видов бонусов. 1 PV = 300 тенге.", 
    KZ: "Гибридті маркетинг моделі: 7+ бонус түрі. 1 PV = 300 теңге." 
  },
  "business.statusRewards": { EN: "Career Path & Exclusive Gifts", RU: "Карьерный путь и Подарки", KZ: "Мансап жолы және Сыйлықтар" },

  // Bonus Names & Details
  "bonus.referral": { EN: "Referral Bonus", RU: "Реферальный бонус", KZ: "Рефералдық бонус" },
  "bonus.referral.detail": { EN: "10% – 20%", RU: "10% – 20%", KZ: "10% – 20%" },
  
  "bonus.binary": { EN: "Binary Bonus", RU: "Бинарный бонус", KZ: "Бинарлық бонус" },
  "bonus.binary.detail": { EN: "4% – 10%", RU: "4% – 10%", KZ: "4% – 10%" },
  
  "bonus.matching": { EN: "Matching Bonus", RU: "Мэтчинг бонус", KZ: "Мэтчинг бонус" },
  "bonus.matching.detail": { EN: "7 levels (48%)", RU: "7 уровней (48%)", KZ: "7 деңгей (48%)" },
  
  "bonus.status": { EN: "Status Bonus", RU: "Статусный бонус", KZ: "Мәртебе бонусы" },
  "bonus.status.detail": { EN: "Car / Apartment", RU: "Авто / Квартира", KZ: "Автокөлік / Пәтер" },
  
  "bonus.structural": { EN: "Structural Bonus", RU: "Структурный бонус", KZ: "Құрылымдық бонус" },
  "bonus.structural.detail": { EN: "5% of income", RU: "5% от дохода", KZ: "Табыстың 5%" },
  
  "bonus.cashback": { EN: "Global Cashback", RU: "Глобальный кэшбэк", KZ: "Жаһандық кэшбэк" },
  "bonus.cashback.detail": { EN: "from 1% to 3% of GTO", RU: "от 1% до 3% от MTO", KZ: "1%-ден 3% MTO-дан" },
  
  "bonus.travel": { EN: "Travel Bonus", RU: "Тревел бонус", KZ: "Саяхат бонусы" },
  "bonus.travel.detail": { EN: "VIP Travel", RU: "VIP Путешествие", KZ: "VIP Саяхат" },
  
  "bonus.limits": { EN: "Payout Limits", RU: "Лимиты выплат", KZ: "Төлем шектеулері" },
  "bonus.limits.detail": { EN: "up to 20M ₸", RU: "до 20 млн ₸", KZ: "20 млн ₸ дейін" },

  // Таблица
  "business.table.status": { EN: "STATUS", RU: "СТАТУС", KZ: "МӘРТЕБЕ" },
  "business.table.pv": { EN: "VOLUME (PV)", RU: "ОБЪЕМ (PV)", KZ: "КӨЛЕМ (PV)" },
  "business.table.rewards": { EN: "REWARDS", RU: "НАГРАДЫ", KZ: "СЫЙЛЫҚТАР" },
  "business.rules.benefits": { EN: "Benefits", RU: "Преимущества", KZ: "Артықшылықтар" },
  // Карьерные статусы
  "status.rank.1": { RU: "STAR", KZ: "STAR", EN: "STAR" },
  "status.rank.2": { RU: "LEADER", KZ: "LEADER", EN: "LEADER" },
  "status.rank.3": { RU: "BRONZE LEADER", KZ: "BRONZE LEADER", EN: "BRONZE LEADER" },
  "status.rank.4": { RU: "SILVER LEADER", KZ: "SILVER LEADER", EN: "SILVER LEADER" },
  "status.rank.5": { RU: "GOLD LEADER", KZ: "GOLD LEADER", EN: "GOLD LEADER" },
  "status.rank.6": { RU: "INTER-L LEADER", KZ: "INTER-L LEADER", EN: "INTER-L LEADER" },
  "status.rank.7": { RU: "TOP LEADER", KZ: "TOP LEADER", EN: "TOP LEADER" },
  "status.rank.8": { RU: "DIAMOND", KZ: "DIAMOND", EN: "DIAMOND" },
  "status.rank.9": { RU: "AMBASSADOR", KZ: "AMBASSADOR", EN: "AMBASSADOR" },

  // Подарки
  "status.gift.3": { RU: "Продукция Cordial Care (50 000 ₸)", KZ: "Cordial Care өнімдері (50 000 ₸)", EN: "Cordial Care Products (50,000 ₸)" },
  "status.gift.4": { RU: "3 ортопедические подушки (120 000 ₸)", KZ: "3 ортопедиялық жастық (120 000 ₸)", EN: "3 Orthopedic Pillows (120,000 ₸)" },
  "status.gift.5": { RU: "Премиальный фильтр воды (380 000 ₸)", KZ: "Премиум су сүзгісі (380 000 ₸)", EN: "Premium Water Filter (380,000 ₸)" },
  "status.gift.6": { RU: "Путешествие на 2-х", KZ: "2 адамға саяхат", EN: "Travel for 2" },
  "status.gift.7": { RU: "VIP путешествие на 2-х + 1% MTO", KZ: "VIP саяхат + 1% MTO", EN: "VIP Travel + 1% MTO" },
  "status.gift.8": { RU: "Автомобиль (20 000 000 ₸) + 1% MTO", KZ: "Автокөлік (20 000 000 ₸) + 1% MTO", EN: "Luxury Car (20,000,000 ₸) + 1% MTO" },
  "status.gift.9": { RU: "Квартира (40 000 000 ₸) + 1% MTO", KZ: "Пәтер (40 000 000 ₸) + 1% MTO", EN: "Apartment (40,000,000 ₸) + 1% MTO" },

  // Правила
  "business.rules.limits": { RU: "Лимиты выплат", KZ: "Төлем шектеулері", EN: "Payment Limits" },
  "business.rules.weekly": { RU: "5 000 000 ₸ в неделю", KZ: "Аптасына 5 000 000 ₸", EN: "5,000,000 ₸ per week" },
  "business.rules.monthly": { RU: "20 000 000 ₸ в месяц", KZ: "Айына 20 000 000 ₸", EN: "20,000,000 ₸ per month" },
  "business.rules.no_confirm": { RU: "Статус подтверждать не надо", KZ: "Мәртебені растау қажет емес", EN: "No rank confirmation needed" },
  "business.rules.no_burn": { RU: "Баллы не сгорают", KZ: "Баллдар күйіп кетпейді", EN: "Points never expire" },
  "business.rules.repeat_title": { RU: "Повторная покупка", KZ: "Қайталама сатып алу", EN: "Repeat Purchase" },
  "business.rules.repeat_desc": { 
    RU: "5% от дохода направляется в структурный бонус", 
    KZ: "Табыстың 5% құрылымдық бонусқа бағытталады", 
    EN: "5% of income goes to structural bonus" 
  },
  
  "kyowon.title": { EN: "Kyowon Exclusive Partner", RU: "Эксклюзивный партнёр Kyowon", KZ: "Kyowon эксклюзивті серіктесі" },
  "kyowon.desc": { EN: "The only exclusive partner of Kyowon in Kazakhstan and Central Asia", RU: "Единственный эксклюзивный партнёр Kyowon в Казахстане и Центральной Азии", KZ: "Қазақстан мен Орталық Азиядағы Kyowon-ның жалғыз эксклюзивті серіктесі" },
// Секция сравнения
"compare.title": { RU: "Честная игра", KZ: "Әділ ойын", EN: "Fair Play" },
"compare.subtitle": { 
  RU: "Чем Cordial Care отличается от 90% других компаний", 
  KZ: "Cordial Care-дің басқа компаниялардан айырмашылығы", 
  EN: "How Cordial Care differs from 90% of others" 
},
"compare.others": { RU: "Обычные компании", KZ: "Әдеттегі компаниялар", EN: "Other companies" },
"compare.cordial": { RU: "Наша система", KZ: "Біздің жүйе", EN: "Our system" },

// Фичи сравнения
"compare.feature.burn": { RU: "СГОРАНИЕ БАЛЛОВ", KZ: "БАЛЛДАРДЫҢ КҮЮІ", EN: "POINTS RESET" },
"compare.feature.confirm": { RU: "ПОДТВЕРЖДЕНИЕ СТАТУСА", KZ: "МӘРТЕБЕНІ РАСТАУ", EN: "RANK CONFIRMATION" },
"compare.feature.payout": { RU: "ПОТОЛОК ДОХОДА", KZ: "ТАБЫС ШЕГІ", EN: "INCOME CEILING" },

// Значения (RU)
"compare.val.others.burn": { RU: "Обнуление каждый месяц", KZ: "Ай сайын нөлге түседі", EN: "Monthly reset" },
"compare.val.cordial.burn": { RU: "Накопление без обнуления", KZ: "Нөлге түспей жиналады", EN: "Cumulative growth" },

"compare.val.others.confirm": { RU: "Нужно каждые 2-4 недели", KZ: "Әр 2-4 апта сайын қажет", EN: "Required every 2-4 weeks" },
"compare.val.cordial.confirm": { RU: "Один раз и навсегда", KZ: "Бір рет және мәңгілікке", EN: "Once and for life" },

"compare.val.others.payout": { RU: "Низкие лимиты выплат", KZ: "Төмен төлем шектеулері", EN: "Low payout limits" },
"compare.val.cordial.payout": { RU: "Лимит: до 20 млн ₸/мес", KZ: "Шектеу: 20 млн ₸/ай дейін", EN: "Limit: up to 20M ₸/month" },  "leader.label": { EN: "Your Mentors", RU: "Ваши Наставники", KZ: "Сіздің Тәлімгерлеріңіз" },
  "leader.title": { 
    EN: "Meet Jomart and Moldir", 
    RU: "Познакомьтесь с Жомартом и Молдир", 
    KZ: "Жомарт пен Мөлдірмен танысыңыз" 
  },
  "leader.desc1": { 
    EN: "Expert mentors combining strategic discipline and 6+ years of leadership.", 
    RU: "Наставники, объединившие стратегическую дисциплину и 6-летний лидерский опыт.", 
    KZ: "Стратегиялық тәртіп пен 6 жылдық көшбасшылық тәжірибені ұштастырған тәлімгерлер." 
  },
  "leader.desc2": { 
    EN: "A professional and family-oriented approach to building your business.", 
    RU: "Профессиональный и семейный подход к построению вашего бизнеса.", 
    KZ: "Бизнесіңізді құруға кәсіби және отбасылық тәсіл." 
  },
  "leader.cta": { 
    EN: "Chat with Us", 
    RU: "Написать нам", 
    KZ: "Бізге жазу" 
  },"reviews.label": { EN: "Results", RU: "Результаты", KZ: "Нәтижелер" },
  "reviews.title": { EN: "Results & Reviews", RU: "Результаты и Отзывы", KZ: "Нәтижелер мен Пікірлер" },
  "reviews.beforeAfter": { EN: "Before & After", RU: "До и После", KZ: "Дейін и Кейін" },
  "reviews.comments": { EN: "Customer Reviews", RU: "Отзывы клиентов", KZ: "Клиенттер пікірлері" },
  
  "footer.rights": { EN: "© 2026 Cordial Care. All rights reserved.", RU: "© 2026 Cordial Care. Все права защищены.", KZ: "© 2026 Cordial Care. Барлық құқықтар қорғалған." },
} as const;

export type TranslationKey = keyof typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "RU",
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("RU");
  const t = (key: TranslationKey): string => {
    return (translations as any)[key]?.[lang] ?? key;
  };
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);