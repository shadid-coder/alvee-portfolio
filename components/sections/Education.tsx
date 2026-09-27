import SectionHeading from "@/components/ui/SectionHeading";
import EducationRow from "@/components/ui/EducationRow";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Education" />

        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <EducationRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
