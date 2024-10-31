import { useState, useEffect } from "react";
import { Link, NavLink } from "@remix-run/react";
import { Container, Section } from "./Scaffold";
import { Button, Flex } from "@radix-ui/themes";
import { Dot } from "lucide-react";

export default function HeaderDesktop() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone: "Africa/Accra",
      hour12: true,
      hourCycle: "h12",
    });
  };

  return (
    <Section tag="header" className="flex items-center justify-between mx-auto w-full">
      <Container className="w-full max-w-[70rem] mx-auto flex justify-between items-center py-5">

        <Flex className="gap-20 items-center">
          <Link to="/">Elikem</Link>
          <nav className="flex gap-8">
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </nav>
        </Flex>

        <Flex className="gap-10 items-center">
          <Flex className="gap-2">
            <span>Accra</span> - <time dateTime={currentTime.toISOString()}>{formatTime(currentTime)}</time>
          </Flex>
          <Button className="bg-gray-900">
            Available for work
          </Button>
        </Flex>

      </Container>
    </Section>
  );
}
