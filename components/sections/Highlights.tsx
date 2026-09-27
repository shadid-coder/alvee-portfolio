import StatCard from "@/components/ui/StatCard";
import { highlights } from "@/data/portfolio";

export default function Highlights() {
  return (
    <section className="px-6 py-10 md:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 items-stretch gap-4 md:grid-cols-4">
        {highlights.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
