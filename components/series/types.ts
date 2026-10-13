export type SeriesSlug = "start" | "smart" | "signal";

export type FactIcon = "server" | "gauge" | "database" | "shield" | "badge";

export type HeroFeature = {
  title: string;
  detail: string;
  icon: string;
  node: string;
};

export type SeriesFeature = { icon: string; title: string; text: string };

export type SeriesModel = {
  name: string;
  network: string;
  generation: string;
  badge: string;
  battery: string;
  inputs: string;
  interface: string;
  memory: string;
};

export type SeriesChoiceColumn = {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
};

export type SeriesConfig = {
  slug: SeriesSlug;
  /** Display name, e.g. "START" */
  name: string;
  deviceImage: string;
  deviceLabel: string;
  heroAriaLabel: string;
  eyebrow: string;
  headline: string;
  lead: string;
  facts: { icon: FactIcon; value: string; label: string }[];
  heroFeatures: readonly HeroFeature[];
  capabilities: { title: string; text: string };
  features: SeriesFeature[];
  lineupTitle: string;
  models: SeriesModel[];
  choice: {
    eyebrow: string;
    title: string;
    text: string;
    linkLabel: string;
    linkHref: string;
    columns: [SeriesChoiceColumn, SeriesChoiceColumn];
  };
  strengths: { eyebrow: string; title: string; items: SeriesFeature[] };
  final: {
    title: string;
    text: string;
    compareLabel: string;
    compareHref: string;
  };
};
