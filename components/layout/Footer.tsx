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

      {/* Credit line — subtle, but visible to anyone who scrolls to the bottom */}
      <div className="mx-auto mt-8 max-w-5xl border-t border-white/5 pt-6 text-center">
        <p className="text-xs text-slate-500">
          Designed & developed by{" "}
          <span className="font-medium text-gold-400">it_shadid</span>
          {" — "}
          <a
            href="mailto:shadid2023@gmail.com?subject=Website%20Inquiry"
            className="text-slate-400 transition-colors hover:text-gold-400 hover:underline"
          >
            shadid2023@gmail.com
          </a>
        </p>
        
      </div>
    </footer>
  );
}