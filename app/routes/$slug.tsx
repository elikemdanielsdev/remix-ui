import { LoaderFunctionArgs } from "@remix-run/node";
import directus from "~/lib/directus";
import { readItems } from "@directus/sdk";
import { useLoaderData } from "@remix-run/react";
import { components } from "~/lib/sections";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  const [page] = await directus.request(
    readItems("pages", {
      fields: ["title", "slug", "sections", "sections.collection", "sections.item.*", "sections.id"],
      filter: { slug: { _eq: slug } },
    })
  );
  return page;
};

export default function Post() {
  const page = useLoaderData<typeof loader>();

  return (
    <>
      {/* Render page sections dynamically based on the collection type */}
      {page.sections.map((section: any) => {
        const SectionComponent = components[section.collection as keyof typeof components];
        if (!SectionComponent) return null;
        return <SectionComponent key={section.id} {...section.item} />;
      })}
    </>
  );
}