import SectionHeading from "@/components/ui/SectionHeading";
import ReferenceCard from "@/components/ui/ReferenceCard";
import { references } from "@/data/portfolio";
import { getReferenceContact } from "@/lib/references-server";

export default function References() {
  return (
    <section className="relative px-6 py-16 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="References"
          description="Full contact details are shared directly with employers on request."
        />

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <ReferenceCard
              key={reference.id}
              reference={{ ...reference, ...getReferenceContact(reference.id) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
