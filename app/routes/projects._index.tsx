import { Badge, Button, Flex } from "@radix-ui/themes";
import { Container, Heading, Section, Subtitle } from "~/components/Scaffold";
import { Link, MetaFunction } from "@remix-run/react";
import directus from "~/lib/directus";
import { readItems, readSingleton } from "@directus/sdk";
import { useLoaderData } from "@remix-run/react";

// Loader Article & Global Data from Directus
export const loader = async () => {
  const [projects, site] = await Promise.all([
    directus.request(readItems("projects", {
      fields: ["slug", "title", "description", "link", "image"],
      // sort: ["-published_date"],
    })),
    directus.request(readSingleton("general_settings")),
  ]);

  return { projects, site };
};

// SEO Meta
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { site } = data || {};

  return [
    { title: `${site?.name} - All Projects` },
    { property: "og:title", content: `${site?.name} - All Projects` },
  ];
};

// All Articles
export default function AllProjects() {
  const title = "All Projects";
  const subtitle = "Welcome to the home page";
  const { projects } = useLoaderData<typeof loader>();
  return (
    <>
      {/* Hero Block */}
      <Section className="py-20">
        <Container className="max-w-[39.375rem] text-center flex flex-col gap-4 items-center">
          <Heading>{title}</Heading>
          <Subtitle>{subtitle}</Subtitle>
          <Flex className="flex-col gap-4 items-center mt-8">
            <Button className="px-12 py-10 text-xl bg-gray-900 cursor-pointer">Book a call</Button>
            <p className="text-sm text-gray-700">It’s a free 30 min chat.</p>
          </Flex>
        </Container>
      </Section>

      {/* Articles Block */}
      <Section className="py-20">
        <Container className="bg-gray-100 flex flex-col gap-2 rounded-[2.5rem] p-2 max-w-[70rem] mx-auto">

          {/* Article List */}
          <ul className="flex flex-col gap-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link to={`${project.link}`} target="_blank" title={project.title}>
                  <article className="md:relative">
                    <img
                      className="w-full aspect-[16/11] object-cover rounded-t-[2rem] md:rounded-[2rem]"
                      src={project.image ? `http://localhost:8055/assets/${project.image}` : "https://dummyimage.com/1300x800/000/fff"}
                      alt="Dummy image"
                    />
                    <Flex className="flex-col gap-3 p-10 md:absolute md:bottom-4 md:left-4 md:right-4 bg-white rounded-b-[2rem] md:rounded-[1.5rem] w-full md:max-w-[30rem]">
                      <h3 className="text-[1.375rem] font-semibold">
                        {project.title} — {project.description}
                      </h3>
                      <Flex className="gap-3 mt-3">
                        <Badge className="px-2 py-1 leading-tight">cms</Badge>
                        <Badge className="px-2 py-1 leading-tight">timber</Badge>
                      </Flex>
                    </Flex>
                  </article>
                </Link>
              </li>
            ))}
          </ul>

        </Container>
      </Section>
    </>
  )
}