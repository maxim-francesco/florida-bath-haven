export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-navy grid place-items-center text-navy-foreground font-display text-lg">B</span>
          <span className="font-display text-lg tracking-tight">Bathwright</span>
        </a>
        <a
          href="/#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

type FooterItem = string | { label: string; href: string };

function FooterCol({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-white/60">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {items.map((i) =>
          typeof i === "string" ? (
            <li key={i}>{i}</li>
          ) : (
            <li key={i.href}>
              <a href={i.href} className="hover:text-white transition-colors">
                {i.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground px-5 sm:px-8 py-14">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-white/10 grid place-items-center font-display text-lg">B</span>
            <span className="font-display text-lg">Bathwright</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Florida's premier bathroom remodeling contractor. Transparent from the first quote to the final reveal.
          </p>
        </div>
        <FooterCol title="Services" items={["Full Remodels", "Custom Tiling", "Plumbing", "Fixtures"]} />
        <FooterCol
          title="Company"
          items={[
            { label: "Pricing Guide", href: "/#pricing" },
            { label: "Shower Package", href: "/#offer" },
            { label: "Gallery", href: "/#gallery" },
            { label: "Contact", href: "/#contact" },
          ]}
        />
        <FooterCol
          title="Contact"
          items={[
            { label: "(239) 451-1643", href: "tel:+12394511643" },
            { label: "(239) 207-6443", href: "tel:+12392076443" },
            { label: "contact@rofloor.us", href: "mailto:contact@rofloor.us" },
            "Serving all of Florida",
          ]}
        />
        <FooterCol
          title="Legal"
          items={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Accessibility", href: "/accessibility" },
          ]}
        />
      </div>
      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 text-xs text-white/60">
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Bathwright. All rights reserved.</span>
          <span>Licensed &amp; insured in the State of Florida.</span>
        </div>
        <p className="mt-3 leading-relaxed">
          Bathwright is operated by ROFLOOR, LLC · 5042 Napoli Dr, Naples, FL 34103 · FL Doc. No. L22000255737
        </p>
      </div>
    </footer>
  );
}
