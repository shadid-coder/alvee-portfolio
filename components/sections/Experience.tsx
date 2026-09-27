import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Experience" />

        <div className="flex flex-col gap-10">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
