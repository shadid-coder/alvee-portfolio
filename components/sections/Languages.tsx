import SectionHeading from "@/components/ui/SectionHeading";
import ProficiencyBar from "@/components/ui/ProficiencyBar";
import Card from "@/components/ui/Card";
import { languages } from "@/data/portfolio";

export default function Languages() {
  return (
    <section className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Languages" />

        <Card className="flex flex-col gap-6 p-8">
          {languages.map((language) => (
            <ProficiencyBar key={language.name} language={language} />
          ))}
        </Card>
      </div>
    </section>
  );
}
