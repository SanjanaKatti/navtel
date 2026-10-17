import data from "@/data/use-cases.json";

export type UseCasePoint = { title: string; text: string };

export type UseCaseSection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points: UseCasePoint[];
  tone: string;
};

export type UseCaseProfile = {
  label: string;
  value: string;
  detail: string;
};

export type UseCasePageContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  note: string;
  trackerHref: string;
  heroImage: string;
  heroAlt: string;
  deviceName: string;
  deviceImage: string;
  features: string[];
  profile: UseCaseProfile[];
  sections: UseCaseSection[];
};

export type UseCaseSoftware = {
  name: string;
  path: string;
  logo?: string;
} | null;

export type UseCase = {
  categoryId: string;
  id: string;
  path: string;
  industry: string;
  country: string;
  device: string;
  title: string;
  description: string;
  image: string;
  keywords: string[];
  software: UseCaseSoftware;
  page: UseCasePageContent;
};

export type UseCaseCategory = { id: string; label: string };

export const useCaseCategories = data.categories as UseCaseCategory[];
export const useCases = data.cases as UseCase[];

export function getUseCase(slug: string) {
  return useCases.find((item) => item.id === slug);
}

export function relatedUseCases(current: UseCase, limit = 3) {
  return useCases
    .filter((item) => item.id !== current.id && item.categoryId === current.categoryId)
    .slice(0, limit);
}
