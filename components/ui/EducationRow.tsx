import type { EducationItem } from "@/data/portfolio";

export default function EducationRow({ item }: { item: EducationItem }) {
  return (
    <div className="card flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="font-display text-base font-semibold text-ivory">
          {item.degree}, {item.field}
        </h3>
        <p className="text-sm text-slate-400">{item.institution}</p>
      </div>
      <div className="flex gap-4 text-sm text-slate-400 sm:text-right">
        <span className="text-gold-400">{item.year}</span>
        {item.grade && <span>{item.grade}</span>}
      </div>
    </div>
  );
}
