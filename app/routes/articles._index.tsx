import { Badge, Button, Flex } from "@radix-ui/themes";
import { Article, Container, Heading, Section, Subtitle } from "~/components/Scaffold";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import directus from "~/lib/directus";
import { readItems, readSingleton } from "@directus/sdk";
import { useState, useEffect } from "react";

// Define the loader function to fetch data from the Directus API
export const loader = async () => {
  const [articles, site] = await Promise.all([
    directus.request(readItems("articles", {
      fields: ["slug", "title", "published_date"],
      sort: ["-published_date"],
      filter: {
        _and: [
          { status: { _eq: 'published' } },
          { published_date: { _lte: '$NOW' } },
        ],
      },
    })),
    // directus.request(readSingleton("general_settings")),
  ]);

  return { articles, site };
};

// Define the meta function to generate SEO metadata
// export const meta: MetaFunction<typeof loader> = ({ data }) => {
//   const { site } = data || {};
//   return [
//     { title: `${site?.name} - All Articles` },
//     { property: "og:title", content: `${site?.name} - All Articles` },
//   ];
// };

// Define the main component for the All Articles page
export default function AllArticles() {
  const data = useLoaderData<typeof loader>();
  const [loading, setLoading] = useState(true);

  // Simulate loading state on mount
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { articles, site } = data || {};

  return (
    <>
      {/* Render the hero section */}
      <Section className="py-20">
        <Container className="max-w-[39.375rem] text-center flex flex-col gap-4 items-center">
          {loading ? (
            <>
              <div className="h-10 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="h-6 w-48 bg-gray-300 animate-pulse rounded-lg"></div>
              <Flex className="flex-col gap-4 items-center mt-8">
                <div className="h-12 w-48 bg-gray-300 animate-pulse rounded-lg"></div>
                <div className="h-4 w-32 bg-gray-200 animate-pulse rounded-lg"></div>
              </Flex>
            </>
          ) : (
            <>
              <Heading>All Articles</Heading>
              <Subtitle>Welcome to the home page</Subtitle>
              <Flex className="flex-col gap-4 items-center mt-8">
                <Button className="px-12 py-10 text-xl bg-gray-900 cursor-pointer">Book a call</Button>
                <p className="text-sm text-gray-700">It's a free 30 min chat.</p>
              </Flex>
            </>
          )}
        </Container>
      </Section>

      {/* Render the articles section */}
      <Section className="py-20">
        <Container className="bg-gray-100 flex flex-col gap-2 rounded-[2.5rem] p-2 max-w-[37.5rem] mx-auto">
          <ul className="flex flex-col gap-2">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index} className="p-10 flex flex-col gap-4 bg-white rounded-[2rem] animate-pulse">
                      <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
                      <div className="h-6 w-48 bg-gray-200 rounded-full"></div>
                      <Flex className="gap-3 mt-3">
                        <div className="h-4 w-8 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-8 bg-gray-200 rounded-full"></div>
                        <div className="h-4 w-8 bg-gray-200 rounded-full"></div>
                      </Flex>
                    </li>
                  ))
              : articles.map((article) => (
                  <li key={article.slug}>
                    <Article>
                      <Link className="flex flex-col gap-3 p-10" to={`/articles/${article.slug}`}>
                        <time className="text-gray-600 text-sm">
                          {article.published_date ? new Date(article.published_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                        </time>
                        <h3 className="text-[1.375rem] font-semibold">{article.title}</h3>
                        <Flex className="gap-3 mt-3">
                          <Badge className="px-2 py-1 leading-tight">cms</Badge>
                          <Badge className="px-2 py-1 leading-tight">timber</Badge>
                          <Badge className="px-2 py-1 leading-tight">remix</Badge>
                        </Flex>
                      </Link>
                    </Article>
                  </li>
                ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
