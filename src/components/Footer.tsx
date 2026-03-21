import { Instagram, Send, Youtube, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kydyrova_moldir1?igsh=MXVmMnMyMDd1YzY1dQ%3D%3D&utm_source=qr",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/cordielcare",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@cordialcareacademy",
  },
];

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-display text-2xl font-semibold text-background mb-6">
            Cordial <span className="text-primary">Care</span>
          </h3>

          <div className="flex flex-col items-center gap-3 mb-8">
            <a
              href="tel:+77013161101"
              className="flex items-center gap-2 text-background/70 font-body text-sm hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>8 701 316 11 01</span>
            </a>

            <a
              href="tel:+77019900355"
              className="flex items-center gap-2 text-background/70 font-body text-sm hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>8 701 990 03 55</span>
            </a>
          </div>
          

          <div className="flex items-center gap-5 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-background/10 mb-6" />

          <p className="text-background/40 font-body text-xs tracking-wider">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
