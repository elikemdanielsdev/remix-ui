import { SEOMeta } from "~/lib/seo-meta";
import { Badge, Button, Flex } from "@radix-ui/themes";
import { Article, Container, Heading, Section, Subtitle } from "~/components/Scaffold";
import { Link } from "@remix-run/react";

export const meta = SEOMeta({
  title: "Elikem Jason",
  description: "Welcome to the home page",
  keywords: "remix, react, javascript, typescript",
  ogImage: "https://images.unsplash.com/photo-1728595840390-d01e1a63f27d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ogTitle: "Elikem Daniels",
  ogDescription: "Just a guy who loves to code"
});

export default function Index() {
  const title = "I make websites for busy professionals and startups";
  const subtitle = "Easily design expressive animations. Add effects with a few clicks and capture your audience’s attention when they land on your website.";
  return (
    <>
      {/* Hero Block */}
      <Section className="py-20">
        <Container className="max-w-[39.375rem] mx-auto text-center flex flex-col gap-4 items-center">
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
        <Container className="bg-gray-100 flex flex-col gap-2 rounded-[2.5rem] p-2 max-w-[37.5rem] mx-auto">
          {/* Article Card */}
          <Article>
            <Link className="flex flex-col gap-3 p-10" to="/">
              <time className="text-gray-600 text-sm">
                {new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <h3 className="text-[1.375rem] font-semibold">
                Building custom WordPress themes with Timber and Twig - A sweet DX
              </h3>
              <Flex className="gap-3 mt-3">
                <Badge className="px-2 py-1 leading-tight">cms</Badge>
                <Badge className="px-2 py-1 leading-tight">timber</Badge>
                <Badge className="px-2 py-1 leading-tight">remix</Badge>
              </Flex>
            </Link>
          </Article>

          {/* Article Card */}
          <Article>
            <Link className="flex flex-col gap-3 p-10" to="/">
              <time className="text-gray-600 text-sm">
                {new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <h3 className="text-[1.375rem] font-semibold">
                Building custom WordPress themes with Timber and Twig - A sweet DX
              </h3>
              <Flex className="gap-3 mt-3">
                <Badge className="rounded-full px-2 py-1 leading-tight">cms</Badge>
                <Badge className="rounded-full px-2 py-1 leading-tight">timber</Badge>
                <Badge className="rounded-full px-2 py-1 leading-tight">remix</Badge>
              </Flex>
            </Link>
          </Article>

          {/* Article Card */}
          <Article>
            <Link className="flex flex-col gap-3 p-10" to="/">
              <time className="text-gray-600 text-sm">
                {new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <h3 className="text-[1.375rem] font-semibold">
                Building custom WordPress themes with Timber and Twig - A sweet DX
              </h3>
              <Flex className="gap-3 mt-3">
                <Badge className="rounded-full px-2 py-1 leading-tight">cms</Badge>
                <Badge className="rounded-full px-2 py-1 leading-tight">timber</Badge>
                <Badge className="rounded-full px-2 py-1 leading-tight">remix</Badge>
              </Flex>
            </Link>
          </Article>
        </Container>
      </Section>
    </>
  );
}