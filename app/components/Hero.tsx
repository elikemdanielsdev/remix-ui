import { Section, Container, Heading, Subtitle } from "~/components/Scaffold";

interface HeroProps {
  title: string;
  subtitle?: React.ReactNode;
  media?: React.ReactNode;
  children?: React.ReactNode; // New prop for additional HTML content
  [key: string]: any; // Allow additional props
}

export default function Hero({
  title = "Default Title",
  subtitle = "Default Subtitle",
  media,
  children, // Capture the children prop
  ...rest // Capture additional props
}: HeroProps) {
  return (
    <Section className="pt-20" {...rest}>
      <Container className="max-w-[39.375rem] mx-auto text-center flex flex-col gap-4 items-center;">
        <Heading>{title}</Heading>
        {subtitle && (<Subtitle>{subtitle}</Subtitle>)}
        {children}
      </Container>
      {media && (
        <div className="mx-auto max-w-4xl mt-20">
          {media}
        </div>
      )}
    </Section>
  )
}
