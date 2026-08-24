import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bathwright | Bathroom Remodeling in Florida" },
      { name: "description", content: "Luxury bathroom remodeling across Florida — Miami, Fort Lauderdale, Tampa and Orlando. Walk-in showers, tile, vanities and full renovations by licensed pros." },
      { name: "author", content: "Bathwright" },
      { property: "og:title", content: "Bathwright | Bathroom Remodeling in Florida" },
      { property: "og:description", content: "Luxury bathroom remodeling across Florida — Miami, Fort Lauderdale, Tampa and Orlando. Walk-in showers, tile, vanities and full renovations by licensed pros." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.bathwright.us/og-image.jpg" },
      { property: "og:url", content: "https://www.bathwright.us/" },
      { property: "og:site_name", content: "Bathwright" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Bathwright — bathroom remodeling in Florida" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bathwright | Bathroom Remodeling in Florida" },
      { name: "twitter:description", content: "Luxury bathroom remodeling across Florida — Miami, Fort Lauderdale, Tampa and Orlando. Walk-in showers, tile, vanities and full renovations by licensed pros." },
      { name: "twitter:image", content: "https://www.bathwright.us/og-image.jpg" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.bathwright.us/" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://www.bathwright.us/#business",
              name: "Bathwright",
              description:
                "Luxury bathroom remodeling across Florida — walk-in showers, tile, vanities and full renovations.",
              url: "https://www.bathwright.us/",
              image: "https://www.bathwright.us/og-image.jpg",
              email: "contact@rofloor.us",
              telephone: ["+1-239-451-1643", "+1-239-207-6443"],
              legalName: "ROFLOOR, LLC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5042 Napoli Dr",
                addressLocality: "Naples",
                addressRegion: "FL",
                postalCode: "34103",
                addressCountry: "US",
              },
              priceRange: "$$$",
              areaServed: [
                { "@type": "State", name: "Florida" },
                { "@type": "City", name: "Miami" },
                { "@type": "City", name: "Fort Lauderdale" },
                { "@type": "City", name: "Tampa" },
                { "@type": "City", name: "Orlando" },
              ],
              knowsAbout: [
                "bathroom remodeling",
                "walk-in shower installation",
                "tile installation",
                "vanity installation",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                ["What does a cosmetic refresh actually include?", "The bathroom stays largely as it is, but is made to look new. That usually means repainting walls and ceiling, a new mirror, light fixtures and accessories, new faucets, handles and holders, and often a new vanity, countertop or toilet. Existing surfaces can be refinished rather than replaced."],
                ["What is not included in a cosmetic refresh?", "It does not involve demolishing the bathroom, moving the shower or toilet, replacing supply or drain lines, rewiring, or stripping out all the floor and wall tile. If any of those are needed, the job is a mid-range remodel or a full gut renovation instead."],
                ["How is a mid-range remodel different?", "It is more than a refresh but short of a premium rebuild. Floor and wall tile are replaced, along with the shower or tub and its surrounds, the vanity, countertop, sink, faucets, toilet, mirror and lighting. Some plumbing may be touched, but fixtures stay roughly where they are."],
                ["What does a full gut renovation involve?", "Everything comes out down to the bare structure. Tile, tub or shower and vanity are removed, walls opened where needed, supply and drain lines checked and replaced if required, electrical rewired, substrate repaired, and new waterproofing installed in the shower. Everything then goes back new, and the shower, toilet or vanity can be relocated."],
                ["Is the price the calculator gives me binding?", "No. Any estimate or range shown on this website is preliminary and for information only. Every project is confirmed by an on-site inspection, and the final price and scope are set out in a written contract before any work begins."],
                ["Does the $6,000 shower package really cover everything?", "It covers the full replacement of a standard-size enclosure: removing and hauling away the old tub or shower, repairing the substrate, full waterproofing on walls and pan, tile supplied and installed, a new valve, head and drain, a glass door or screen, and the final trim and clean. Larger showers, or ones being moved to a new position, are quoted separately."],
              ].map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
