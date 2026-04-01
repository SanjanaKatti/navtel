export type BusinessContact = {
  slug: string;
  name: string;
  title: string;
  company: string;
  /** Display string shown on the page */
  phoneDisplay: string;
  /** E.164 for vCard TEL */
  phoneE164: string;
  email: string;
  /** Path under /public, e.g. /Navtelecom/Denis Shulkov.jpg */
  imageSrc: string;
  websiteUrl: string;
  linkedInUrl?: string;
};

export const BUSINESS_CONTACTS: readonly BusinessContact[] = [
  {
    slug: "Denis_Shulkov",
    name: "Denis Shulkov",
    title: "Managing Director",
    company: "Navtelecom",
    phoneDisplay: "+91 92202 95501",
    phoneE164: "+919220295501",
    email: "denis@navtelecom.in",
    imageSrc: "/Navtelecom/Denis%20Shulkov.jpg",
    websiteUrl: "https://navtelecom-iot.com",
    linkedInUrl: "https://www.linkedin.com/in/denis-shulkov/",
  },
  {
    slug: "Hardik_Chaudhary",
    name: "Hardik Chaudhary",
    title: "Business Lead",
    company: "Navtelecom",
    phoneDisplay: "+91 99107 14135",
    phoneE164: "+919910714135",
    email: "hardik@navtelecom.in",
    imageSrc: "/Navtelecom/Hardik%20Chaudhary.jpg",
    websiteUrl: "https://navtelecom-iot.com",
    linkedInUrl: "https://www.linkedin.com/in/hardik-chaudhary-3a07bb108/",
  },
  {
    slug: "Alina_Iliina",
    name: "Alina Iliina",
    title: "Business Development Manager",
    company: "Navtelecom",
    phoneDisplay: "+7 (977) 972-26-71",
    phoneE164: "+79779722671",
    email: "a.iliina@navtelecom-iot.com",
    imageSrc: "/Navtelecom/Alina%20Iliina.jpg",
    websiteUrl: "https://navtelecom-iot.com",
  },
  {
    slug: "Ekaterina_Petrova",
    name: "Ekaterina Petrova",
    title: "Head of International Operations",
    company: "Navtelecom",
    phoneDisplay: "+7 (977) 9716488",
    phoneE164: "+79779716488",
    email: "e.petrova@navtelecom-iot.com",
    imageSrc: "/Navtelecom/Ekaterina%20Petrova.JPG",
    websiteUrl: "https://navtelecom-iot.com",
    linkedInUrl: "https://www.linkedin.com/in/ekaterina-petrova-6981141b3/",
  },
] as const;

const bySlug = new Map(
  BUSINESS_CONTACTS.map((c) => [c.slug, c] as const),
);

export function getBusinessContactBySlug(slug: string): BusinessContact | undefined {
  return bySlug.get(slug);
}

export function getBusinessContactSlugs(): string[] {
  return BUSINESS_CONTACTS.map((c) => c.slug);
}
