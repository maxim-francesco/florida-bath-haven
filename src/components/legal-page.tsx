import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="pt-16">
      <div className="bg-slate-soft px-5 sm:px-8 py-14 sm:py-20 border-b border-border">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-navy transition-colors">
            &larr; Back to Bathwright
          </a>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-foreground">{title}</h1>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Last updated {updated}
          </p>
        </div>
      </div>
      <div className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-foreground [&_p]:text-muted-foreground [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:text-muted-foreground [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p+p]:mt-3">
          {children}
        </div>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
