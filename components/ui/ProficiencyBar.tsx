import type { LanguageItem } from "@/data/portfolio";

export default function ProficiencyBar({ language }: { language: LanguageItem }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-base font-semibold text-ivory">
          {language.name}
        </span>
        <span className="text-sm text-slate-400">{language.level}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gold-400"
          style={{ width: `${language.proficiency}%` }}
        />
      </div>
    </div>
  );
}
