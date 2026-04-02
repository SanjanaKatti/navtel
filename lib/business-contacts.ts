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
  /** Digital card header (CSS background) and icon accent color */
  cardTheme: {
    headerBackground: string;
    accent: string;
  };
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
    cardTheme: {
      headerBackground:
        "radial-gradient(ellipse 120% 80% at 20% 10%, rgba(255,255,255,0.22) 0%, transparent 55%), radial-gradient(ellipse 90% 60% at 85% 90%, rgba(0,0,0,0.12) 0%, transparent 50%), linear-gradient(155deg, #f06b52 0%, #d84333 45%, #9a2418 100%)",
      accent: "#d84333",
    },
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
    cardTheme: {
      headerBackground:
        "radial-gradient(ellipse 100% 70% at 70% 15%, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(145deg, #7c4dff 0%, #5c2fd4 40%, #3d1a8f 100%)",
      accent: "#5c2fd4",
    },
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
    cardTheme: {
      headerBackground:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.25) 0%, transparent 55%), linear-gradient(160deg, #32bef0 0%, #2a6bdc 55%, #4a32a8 100%)",
      accent: "#2a6bdc",
    },
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
    cardTheme: {
      headerBackground:
        "radial-gradient(ellipse 110% 80% at 15% 85%, rgba(255,255,255,0.08) 0%, transparent 45%), linear-gradient(150deg, #a67c52 0%, #7d5a44 45%, #4a3428 100%)",
      accent: "#8b6346",
    },
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
