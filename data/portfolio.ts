// data/portfolio.ts
// Single source of truth for all site content, sourced from Alvee's CV.
// Components import from here — edit content in this file only.

// ============================================================
// TYPES
// ============================================================

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string; // lucide-react icon name, resolved via lib/icons.ts
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string; // "Present" allowed
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  year: string;
  grade?: string;
}

export interface LanguageItem {
  name: string;
  level: string; // display label, e.g. "Native or Bilingual"
  proficiency: number; // 0-100, drives the visual bar
}

export interface ReferenceMeta {
  id: string;
  name: string;
  title: string;
  relation: "Academic" | "Professional";
  // Public pages default to hiding direct contact details for referees'
  // privacy — flip to true per reference if you want them shown outright.
  revealContact: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string; // the pipe-separated specialty line from the CV
  title: string; // short role title for <title>/meta
  location: string;
  summary: string;
  avatarUrl: string; // path under /public; falls back to initials if missing
  resumeUrl: string; // path under /public
}

// ============================================================
// PERSONAL INFO
// ============================================================

export const personalInfo: PersonalInfo = {
  name: "Mirza Saif Mahmud Alvee",
  tagline:
    "Customer Service & Operations | Administration | Client Relationship Management | Business Development | Compliance & Reporting",
  title: "Customer Service & Operations Professional",
  location: "Cox's Bazar District, Chattogram, Bangladesh",
  summary:
    "Customer-focused banking professional with 6+ years of experience in customer service, banking operations, account management, and business development. Currently a Customer Service Officer at Bank Asia-Kutubzom DPO Agent Banking Outlet, supporting customers while maintaining service quality, compliance, and operational accuracy. Core strengths include customer relationship management, business development, customer acquisition, complaint resolution, problem solving, and communication. Open to opportunities where banking experience and a business-focused mindset can contribute to organizational growth.",
  avatarUrl: "/avatar.jpg", // TODO: add a photo here — shows initials until then
  resumeUrl: "/Alvee-CV.pdf",
};

// ============================================================
// CONTACT LINKS
// ============================================================

export const contactLinks: ContactLink[] = [
  {
    label: "Phone",
    value: "01790707173",
    href: "tel:+8801790707173",
    icon: "Phone",
  },
  {
    label: "Email",
    value: "mirzasaif205@gmail.com",
    href: "mailto:mirzasaif205@gmail.com",
    icon: "Mail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mirzasaifmahmudalvee",
    href: "https://linkedin.com/in/mirzasaifmahmudalvee",
    icon: "Linkedin",
  },
];

// ============================================================
// HIGHLIGHTS — headline numbers pulled from the CV summary
// ============================================================

export const highlights: Highlight[] = [
  { value: "6+", label: "Years in banking & customer service" },
  { value: "20+", label: "New accounts opened, per month" },
  { value: "82%", label: "Customer satisfaction level" },
  { value: "৳5–10L", label: "Monthly deposit mobilization" },
];

// ============================================================
// SKILLS
// ============================================================

export const skills: Skill[] = [
  { name: "Customer Relationship Management" },
  { name: "Business Development" },
  { name: "Complaint Resolution" },
  { name: "Interpersonal Communication" },
  { name: "Microsoft Word" },
  { name: "Microsoft PowerPoint" },
];

// ============================================================
// EXPERIENCE
// ============================================================

export const experience: ExperienceItem[] = [
  {
    id: "bank-asia",
    role: "Customer Service Officer",
    company: "Bank Asia",
    location: "Kutubzom DPO Agent Banking Outlet",
    startDate: "August 2020",
    endDate: "Present",
    bullets: [
      "Handle customer inquiries, service requests, and complaints while maintaining professionalism and confidentiality.",
      "Assist customers with account opening, account information, and related banking services per established procedures.",
      "Communicate banking products and services based on customer needs, supporting product promotion and cross-selling.",
      "Maintain customer relationships through responsive communication and timely resolution of service issues.",
      "Coordinate with internal departments to resolve customer issues and escalate matters through appropriate channels.",
      "Maintain accurate customer records, transaction documentation, and operational reports with strong attention to detail.",
      "Follow banking policies and procedures while supporting customer acquisition and identifying suitable banking solutions.",
    ],
  },
];

// ============================================================
// EDUCATION
// ============================================================

export const education: EducationItem[] = [
  {
    id: "mss",
    degree: "Master of Social Science (MSS)",
    field: "Sociology",
    institution: "National University",
    year: "2022",
    grade: "CGPA 2.66/4.00",
  },
  {
    id: "bss",
    degree: "Bachelor of Social Science (BSS)",
    field: "Sociology",
    institution: "National University",
    year: "2021",
    grade: "CGPA 2.53/4.00",
  },
  {
    id: "hsc",
    degree: "HSC",
    field: "Humanities",
    institution: "Omargani MES College",
    year: "2016",
    grade: "CGPA 2.92/5.00",
  },
  {
    id: "ssc",
    degree: "SSC",
    field: "Business Studies",
    institution: "Mern Sun School and College",
    year: "2014",
    grade: "CGPA 4.19/5.00",
  },
];

// ============================================================
// LANGUAGES
// ============================================================

export const languages: LanguageItem[] = [
  { name: "Bengali", level: "Native or Bilingual", proficiency: 100 },
  { name: "English", level: "Intermediate / B1", proficiency: 55 },
];

// ============================================================
// REFERENCES
// Phone/email deliberately live outside this file — see
// lib/references-server.ts and .env.example. Nothing sensitive here gets
// committed to git.
// ============================================================

export const references: ReferenceMeta[] = [
  {
    id: "ehsanul",
    name: "Ehsanul Haque Helaly",
    title: "Associate Professor & HoD, Dept. of Sociology, Cox's Bazar City College",
    relation: "Academic",
    revealContact: false,
  },
  {
    id: "nurul",
    name: "Nurul Absar",
    title: "District Manager, Bank Asia PLC (AB)",
    relation: "Professional",
    revealContact: false,
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
