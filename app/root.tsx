import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "@radix-ui/themes/styles.css";
import "~/tailwind.css";
import { ErrorBoundary } from "~/lib/error";
import { SEOMeta } from "~/lib/seo-meta";
import { Theme } from "@radix-ui/themes";
import HeaderDesktop from "~/components/HeaderDesktop";
import Footer from "~/components/Footer";

// SEO Meta
// export const meta = SEOMeta({
//   title: "Elikem Daniels",
//   description: "Welcome to the home page",
//   keywords: "remix, react, javascript, typescript",
//   ogImage: "https://images.unsplash.com/photo-1728595840390-d01e1a63f27d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ogTitle: "Elikem Daniels",
//   ogDescription: "Welcome to the home page"
// });

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Root Layout
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Root Layout Outlet
export default function App() {
  return (
    <Theme radius="full" className="flex flex-col min-h-screen">
      <HeaderDesktop />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </Theme>
  );
}

// Conditional Error Message
export { ErrorBoundary };
