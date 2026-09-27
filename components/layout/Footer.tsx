import { personalInfo, contactLinks } from "@/data/portfolio";
import { iconMap } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors hover:text-gold-400"
              >
                {Icon && <Icon size={17} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
