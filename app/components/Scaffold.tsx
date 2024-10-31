import clsx from "clsx";

// Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const Section = ({ children, className, id, tag: Tag = 'section' }: SectionProps) => {
  return (
    <Tag id={id} className={clsx('px-[5%]', className)}>
      {children}
    </Tag>
  )
}

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div id={id} className={clsx('mx-auto', className)}>
      {children}
    </div>
  )
}

// Heading Component
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ children, className, id, tag: Tag = 'h1' }: HeadingProps) => {
  return (
    <Tag id={id} className={clsx('text-5xl font-bold leading-[1.2] tracking-[-0.03rem]', className)}>{children}</Tag>
  )
}

// Subtitle Component
interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Subtitle = ({ children, className, id }: SubtitleProps) => {
  return (
    <h2 id={id} className={clsx('text-xl leading-[1.6] max-w-[31.875rem] mx-auto', className)}>{children}</h2>
  )
}

// Article Component
interface ArticleProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Article = ({ children, className, id }: ArticleProps) => {
  return (
    <article id={id} className={clsx('bg-white rounded-[2rem]', className)}>{children}</article>
  )
}

export { Section, Container, Heading, Subtitle, Article };