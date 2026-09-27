export default function SkillPill({ name }: { name: string }) {
  return (
    <span className="card inline-block px-4 py-2 text-sm text-slate-200">
      {name}
    </span>
  );
}
