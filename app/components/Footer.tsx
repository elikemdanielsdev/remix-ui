import { Flex, Button } from "@radix-ui/themes";
import { Section, Container, Heading, Subtitle } from "~/components/Scaffold";

export default function Footer() {
  return (
    <Section className="py-20 bg-gray-900 text-white">
      <Container className="max-w-[39.375rem] mx-auto text-center flex flex-col gap-4 items-center">
        <Heading>Let's connect</Heading>
        <Subtitle>Book a 30-minute call with me to discuss your web project, and find out how I could be of help.</Subtitle>
        <Flex className="flex-col items-center gap-4">
          <Button className="px-12 py-10 mt-8 text-xl bg-violet-300 text-gray-900 cursor-pointer">Book a call</Button>
          <p className="text-sm text-gray-300">It’s a free 30 min chat.</p>
        </Flex>
      </Container>
    </Section>
  )
}
