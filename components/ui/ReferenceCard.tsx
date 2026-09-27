import { Mail, Phone } from "lucide-react";
import { contactLinks, type ReferenceMeta } from "@/data/portfolio";
import type { ReferenceContact } from "@/lib/references-server";

type ReferenceFull = ReferenceMeta & ReferenceContact;

export default function ReferenceCard({ reference }: { reference: ReferenceFull }) {
  const ownerEmail = contactLinks.find((l) => l.icon === "Mail")?.value ?? "";

  const subject = encodeURIComponent(`Requesting contact info for ${reference.name}`);
  const body = encodeURIComponent(
    `Dear Mirza Saif Mahmud Alvee,\n\n` +
    `I came across your portfolio website and would like to request the contact details for your reference:\n\n` +
    `Reference: ${reference.name}\n` +
    `Title: ${reference.title}\n` +
    `Relation: ${reference.relation}\n\n` +
    `Please share their phone number and/or email at your earliest convenience.\n\n` +
    `Thank you.`
  );

  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex-1">
        <h3 className="font-display text-base font-semibold text-ivory">
          {reference.name}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{reference.title}</p>
      </div>

      <div className="mt-4">
        <span className="inline-block rounded-full bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-400">
          {reference.relation}
        </span>

        {reference.revealContact ? (
          <div className="mt-4 flex flex-col gap-1.5 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gold-400" /> {reference.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-gold-400" /> {reference.email}
            </span>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-sm italic text-slate-500">
              Contact details available on request.
            </p>
            <a
              href={`mailto:${ownerEmail}?subject=${subject}&body=${body}`}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gold-400/30 px-4 py-2 text-sm font-medium text-gold-400 transition-colors hover:border-gold-400/60 hover:bg-gold-400/5"
            >
              <Mail size={14} /> Request contact info
            </a>
          </div>
        )}
      </div>
    </div>
  );
}