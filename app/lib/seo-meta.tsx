import { MetaFunction } from "@remix-run/node";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export const SEOMeta = ({
  title,
  description,
  keywords,
  ogImage,
  ogTitle,
  ogDescription
}: MetaProps): MetaFunction => {
  return () => [
    { title: title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:image", content: ogImage }
  ];
};
