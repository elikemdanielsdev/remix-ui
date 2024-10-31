import HeroSection from "~/components/sections/HeroSection";

export const components = {
  hero_section: HeroSection,
};

export type SectionType = keyof typeof components;

export interface Section {
  id: string;
  collection: SectionType;
  item: Record<string, any>;
}
