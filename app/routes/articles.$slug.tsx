import { Container, Heading, Section, Article } from "~/components/Scaffold";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import directus from "~/lib/directus";
import { readItem, readItems, readSingleton } from "@directus/sdk";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import { Badge, Flex } from "@radix-ui/themes";

// Load Article & Global Data from Directus
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;
  const [articles, article, general_settings] = await Promise.all([
    directus.request(readItems("articles")),
    directus.request(readItem("articles", slug as string)),
    // directus.request(readSingleton("general_settings")),
  ]);

  // if (!article) {
  //   throw json("Article not found", { status: 404 });
  // }

  return { articles, article, general_settings };
};

// SEO Meta
// export const meta: MetaFunction<typeof loader> = ({ data }) => {
//   const { general_settings, article } = data || {};

//   return [
//     { title: `${general_settings?.name} - ${article?.title}` },
//     { property: "og:title", content: `${general_settings?.name} - ${article?.title}` },
//   ];
// };

// Render Single Article
export default function SingleArticle() {
  const { articles, article } = useLoaderData<typeof loader>();
  const { title, published_date, content, image } = article;

  return (
    <>
      {/* Hero Block */}
      <Section className="pt-20 -mb-10">
        <Container className="max-w-[39.375rem] text-center flex flex-col gap-4 items-center">
          <Heading>{title}</Heading>
          <time className="text-gray-600 text-sm">
            {published_date ? new Date(published_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
          </time>
        </Container>
        <img
          className="w-full aspect-[16/11] object-cover rounded-[2.5rem] max-w-[70rem] mx-auto mt-10"
          src={image ? `http://localhost:8055/assets/${image}` : "https://dummyimage.com/1300x800/000/fff"}
          alt="Dummy image"
        />
      </Section>

      {/* Articles Block */}
      <Section className="pb-20">
        <Container className="bg-gray-100 flex flex-col gap-2 rounded-[2.5rem] p-2 max-w-[37.5rem] mx-auto">
          {/* Single Article */}
          <Article>
            <div className="px-10 py-4 prose md:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
            </div>
          </Article>
        </Container>
      </Section>

      {/* More Articles */}
      {/* Articles Block */}
      <Section className="py-20">
        <Container className="bg-gray-100 flex flex-col gap-2 rounded-[2.5rem] p-2 max-w-[37.5rem] mx-auto">
          {/* Article List */}
          <ul className="flex flex-col gap-2">
            {articles
              .filter((item) => item.slug !== article.slug)
              .map((article) => (
                <li key={article.slug}>
                  <Article>
                    <Link className="flex flex-col gap-3 p-10" to={`/articles/${article.slug}`}>
                      <time className="text-gray-600 text-sm">
                        {article.published_date ? new Date(article.published_date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
                      </time>
                      <h3 className="text-[1.375rem] font-semibold">
                        {article.title}
                      </h3>
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
