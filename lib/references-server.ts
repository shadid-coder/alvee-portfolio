// Server-only contact details for references.
//
// Deliberately kept out of data/portfolio.ts so the real phone numbers and
// emails are never committed to git. Real values live in `.env.local`
// (already gitignored) — see `.env.example` for the variable names.
//
// IMPORTANT: never import this file from a component marked "use client".
// It's only safe here because References.tsx and ReferenceCard.tsx are
// Server Components that run exclusively on the server.
import "server-only"; 

export interface ReferenceContact {
  phone: string;
  email: string;
}

const contacts: Record<string, ReferenceContact> = {
  ehsanul: {
    phone: process.env.REF_EHSANUL_PHONE ?? "",
    email: process.env.REF_EHSANUL_EMAIL ?? "",
  },
  nurul: {
    phone: process.env.REF_NURUL_PHONE ?? "",
    email: process.env.REF_NURUL_EMAIL ?? "",
  },
};

export function getReferenceContact(id: string): ReferenceContact {
  return contacts[id] ?? { phone: "", email: "" };
}
