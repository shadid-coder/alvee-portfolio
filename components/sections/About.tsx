import SectionHeading from "@/components/ui/SectionHeading";
import SkillPill from "@/components/ui/SkillPill";
import Card from "@/components/ui/Card";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="About" />

        <Card className="mb-10 p-8 text-slate-300">
          <p>{personalInfo.summary}</p>
        </Card>

        <h3 className="mb-4 font-display text-lg font-semibold text-ivory">
          Core skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillPill key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
