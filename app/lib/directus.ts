import { createDirectus, rest } from "@directus/sdk";

type GeneralSettings = {
  name?: string;
  description?: string;
}

type Article = {
  title?: string;
  slug?: string;
  published_date?: string;
  image?: string;
  content?: string;
}

type Project = {
  title?: string;
  description?: string;
  slug?: string;
  link?: string;
}

type Section = {
  id: string;
  collection: string;
  item: Record<string, unknown>;
};

type Page = {
  title?: string;
  slug?: string;
  sections: Section[];
}

type Schema = {
  general_settings: GeneralSettings;
  articles: Article[];
  projects: Project[];
  pages: Page[];
}

export const directus = createDirectus<Schema>("https://elikemcms.elikemserver.com").with(rest());

export default directus;