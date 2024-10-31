import {
  Links,
  Meta,
  Scripts,
  useRouteError,
} from "@remix-run/react";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Content not found</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Content not found</h1>
        <p>The content you are looking for does not exist.</p>
        <Scripts />
      </body>
    </html>
  );
}