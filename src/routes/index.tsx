import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Hammer,
  Grid3x3,
  Wrench,
  ShowerHead,
  ShieldCheck,
  Ruler,
  Layers,
  CircleDollarSign,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <MoneyGoes />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-md bg-navy grid place-items-center text-navy-foreground font-display text-lg">C</span>
          <span className="font-display text-lg tracking-tight">Coastline Bath Co.</span>
        </a>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-navy text-navy-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden pt-16">
      <img
        src={heroBathroom}
        alt="Luxury modern Florida bathroom with freestanding tub"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/80 sm:bg-gradient-to-r sm:from-navy/85 sm:via-navy/50 sm:to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-xs font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Serving all of Florida
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl text-white">
            Expert Bathroom Remodeling in Florida. Built from Scratch.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
            100% transparent pricing. Know exactly what your materials and our expert labor will cost — before we start.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold shadow-elegant hover:bg-white/95 transition"
            >
              View Pricing Guide
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              Request a Consultation
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} /> Licensed & Insured</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} /> Florida-code compliant</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} /> Fixed-price quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl text-foreground">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function Services() {
  const items = [
    { icon: Hammer, title: "Full Demolition", desc: "Down-to-studs teardown with clean, code-compliant disposal." },
    { icon: Grid3x3, title: "Custom Tiling", desc: "Precision layouts in porcelain, marble, and natural stone." },
    { icon: Wrench, title: "Plumbing & Electrical", desc: "Licensed rough-ins, re-pipes, and modern circuit upgrades." },
    { icon: ShowerHead, title: "Fixture Installation", desc: "From standard to smart — fitted to spec, finished flawlessly." },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Our Services" title="A complete remodel, under one roof." sub="Every trade coordinated in-house so your timeline, budget, and finish quality stay intact." />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-card border border-border p-6 sm:p-7 shadow-card hover:shadow-elegant transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-navy grid place-items-center text-navy-foreground">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TABS = [
  { id: "scope", label: "Size & Scope", icon: Ruler },
  { id: "tiers", label: "Material Tiers", icon: Layers },
  { id: "split", label: "Labor vs. Materials", icon: CircleDollarSign },
] as const;

function Pricing() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("scope");
  return (
    <section id="pricing" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-soft">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="The detailed pricing guide."
          sub="Every project priced by the square foot, the tier, and the scope. Nothing hidden — see exactly where each dollar goes."
        />

        <div className="mt-10 rounded-3xl bg-card border border-border shadow-elegant overflow-hidden">
          <div role="tablist" className="grid grid-cols-3 border-b border-border">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.id)}
                  className={`relative px-3 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive ? "text-navy" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={16} strokeWidth={1.75} className="hidden sm:inline" />
                    {t.label}
                  </span>
                  {isActive && <span className="absolute inset-x-4 sm:inset-x-6 -bottom-px h-0.5 bg-navy" />}
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-10">
            {active === "scope" && <ScopePanel />}
            {active === "tiers" && <TiersPanel />}
            {active === "split" && <SplitPanel />}
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-xl">
          Ranges reflect Florida market averages for permitted, code-compliant work. Final numbers are confirmed in your written quote.
        </p>
      </div>
    </section>
  );
}

function ScopePanel() {
  const rows = [
    { name: "Cosmetic Refresh", desc: "Paint, fixtures, vanity swap, re-tile.", price: "$85 – $140", unit: "per sq ft (labor)" },
    { name: "Mid-Range Remodel", desc: "New layout, tile shower, upgraded plumbing.", price: "$150 – $225", unit: "per sq ft (labor)" },
    { name: "Full Gut & Rebuild", desc: "Down to studs, re-pipe, re-wire, waterproofing.", price: "$240 – $360", unit: "per sq ft (labor)" },
  ];
  return (
    <div className="grid gap-4">
      {rows.map((r) => (
        <div key={r.name} className="flex items-start justify-between gap-4 rounded-xl border border-border p-5 hover:border-navy/30 transition">
          <div className="min-w-0">
            <div className="font-display text-lg">{r.name}</div>
            <div className="text-sm text-muted-foreground mt-1">{r.desc}</div>
          </div>
          <div className="text-right shrink-0">
            <div className="font-semibold text-navy">{r.price}</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{r.unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TiersPanel() {
  const tiers = [
    {
      name: "Standard",
      tag: "Builder Grade",
      price: "$8k – $18k",
      unit: "materials, avg. bath",
      features: ["Ceramic tile & basic porcelain", "Standard vanity & mirror", "Chrome fixtures", "Two-piece toilet"],
    },
    {
      name: "Premium",
      tag: "Most Requested",
      price: "$18k – $34k",
      unit: "materials, avg. bath",
      features: ["Custom porcelain tile", "Double vanity & quartz", "Brushed nickel or matte black", "Frameless glass shower"],
      featured: true,
    },
    {
      name: "Luxury",
      tag: "Signature Finish",
      price: "$34k – $70k+",
      unit: "materials, avg. bath",
      features: ["Natural stone & book-matched slabs", "Freestanding soaking tub", "Smart toilet & heated floors", "Brass or designer fixtures"],
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`rounded-2xl p-6 border transition ${
            t.featured
              ? "bg-navy text-navy-foreground border-navy shadow-elegant"
              : "bg-card border-border"
          }`}
        >
          <div className={`text-[11px] uppercase tracking-widest ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>
            {t.tag}
          </div>
          <div className="mt-2 font-display text-2xl">{t.name}</div>
          <div className={`mt-4 text-2xl font-semibold ${t.featured ? "text-white" : "text-navy"}`}>{t.price}</div>
          <div className={`text-xs mt-0.5 ${t.featured ? "text-white/60" : "text-muted-foreground"}`}>{t.unit}</div>
          <ul className={`mt-5 space-y-2 text-sm ${t.featured ? "text-white/90" : "text-foreground"}`}>
            {t.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className={`mt-1.5 h-1 w-1 rounded-full shrink-0 ${t.featured ? "bg-white" : "bg-navy"}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SplitPanel() {
  const segments = [
    { label: "Labor", pct: 55, color: "bg-navy" },
    { label: "Materials", pct: 35, color: "bg-navy/60" },
    { label: "Permits & Waterproofing", pct: 10, color: "bg-navy/30" },
  ];
  return (
    <div>
      <p className="text-sm text-muted-foreground max-w-xl">
        Typical split for a Florida bathroom remodel. Coastal permitting, waterproofing, and skilled labor drive most of the investment.
      </p>
      <div className="mt-8 flex h-3 w-full overflow-hidden rounded-full bg-secondary">
        {segments.map((s) => (
          <div key={s.label} className={s.color} style={{ width: `${s.pct}%` }} />
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {segments.map((s) => (
          <div key={s.label} className="rounded-xl border border-border p-4">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
              <span className="text-sm font-medium">{s.label}</span>
            </div>
            <div className="mt-2 font-display text-2xl">{s.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoneyGoes() {
  const items = [
    { title: "Florida building codes", desc: "Coastal-grade permits, hurricane-rated ventilation, and inspection sign-offs." },
    { title: "Premium waterproofing", desc: "Full-membrane systems behind every tile — the layer you never see but always feel." },
    { title: "Plumbing rough-ins", desc: "Modern PEX, proper venting, and shut-offs sized for real Florida water pressure." },
    { title: "Skilled trades", desc: "In-house tile setters, plumbers, and electricians — not rotating subcontractors." },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          eyebrow="Where Your Money Goes"
          title="The quiet costs of a quality build."
          sub="A beautiful bathroom is 20% what you see and 80% what protects it. Here's what a professional remodel actually pays for."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border p-6 bg-card">
              <div className="font-display text-lg">{it.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Consultation", desc: "On-site visit, measurements, and a conversation about how you actually use the space." },
    { n: "02", title: "Transparent Quoting", desc: "A written, line-item quote — labor, materials, permits — no verbal estimates." },
    { n: "03", title: "Construction", desc: "Daily site cleanup, weekly progress reports, and a single point of contact." },
    { n: "04", title: "Reveal", desc: "Final walk-through, punch list, and a written warranty on every dollar spent." },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-soft">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Our Process" title="Four steps. No surprises." />
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-border sm:-translate-x-1/2" aria-hidden />
          <ol className="space-y-8 sm:space-y-14">
            {steps.map((s, i) => (
              <li key={s.n} className={`relative grid sm:grid-cols-2 sm:gap-12 items-center ${i % 2 === 1 ? "sm:[&>div:first-child]:col-start-2 sm:[&>div:first-child]:row-start-1" : ""}`}>
                <div className="pl-12 sm:pl-0 sm:pr-6 sm:text-right">
                  <div className={`sm:${i % 2 === 1 ? "text-left sm:pl-6 sm:pr-0" : ""}`}>
                    <div className="text-xs font-semibold tracking-[0.2em] text-navy/70">{s.n}</div>
                    <div className="mt-2 font-display text-2xl">{s.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md sm:ml-auto">{s.desc}</p>
                  </div>
                </div>
                <span
                  className="absolute left-4 sm:left-1/2 top-1 h-3 w-3 rounded-full bg-navy ring-4 ring-slate-soft -translate-x-1/2"
                  aria-hidden
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: gallery1, alt: "Before and after bathroom remodel", h: "row-span-2" },
    { src: gallery2, alt: "Luxury walk-in shower with marble tile", h: "" },
    { src: gallery3, alt: "Custom double vanity with quartz countertop", h: "row-span-2" },
    { src: gallery4, alt: "Freestanding soaking tub with sunset view", h: "" },
    { src: gallery5, alt: "Marble tile detail with brass drain", h: "row-span-2" },
    { src: gallery6, alt: "Navy powder room with marble wall", h: "" },
  ];
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Work Gallery" title="Before, after, and everything between." />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[240px]">
          {images.map((img) => (
            <div key={img.alt} className={`overflow-hidden rounded-2xl shadow-card ${img.h}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-slate-soft border border-border p-6 sm:p-12 lg:p-16 shadow-elegant">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="Get Started"
                title="Get your custom quote."
                sub="Tell us about your project. We'll respond within one business day with next steps and a scheduled on-site visit."
              />
              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-foreground"><Phone size={16} className="text-navy" /> (305) 555-0182</div>
                <div className="flex items-center gap-3 text-foreground"><Mail size={16} className="text-navy" /> hello@coastlinebath.co</div>
                <div className="flex items-center gap-3 text-foreground"><MapPin size={16} className="text-navy" /> Serving all of Florida</div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="lg:col-span-3 grid gap-4 sm:grid-cols-2"
            >
              <Field label="Full Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="(305) 555-0100" />
              <Field label="Zip Code" name="zip" placeholder="33101" inputMode="numeric" />
              <Select label="Estimated Bathroom Size" name="size">
                <option>Under 40 sq ft (Powder)</option>
                <option>40 – 80 sq ft (Standard)</option>
                <option>80 – 120 sq ft (Large)</option>
                <option>120+ sq ft (Primary Suite)</option>
              </Select>
              <Select label="Desired Finish Quality" name="quality">
                <option>Standard</option>
                <option>Premium</option>
                <option>Luxury</option>
              </Select>
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-navy text-navy-foreground px-6 py-4 text-sm font-semibold hover:opacity-95 transition shadow-elegant"
                >
                  {submitted ? "Thank you — we'll be in touch." : "Get Your Custom Quote"}
                </button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Licensed & insured in Florida. Your information stays private.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        inputMode={inputMode}
        className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
      />
    </label>
  );
}

function Select({ label, name, children }: { label: string; name: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <div className="relative mt-1.5">
        <select
          name={name}
          className="w-full appearance-none rounded-xl border border-border bg-card px-4 py-3 pr-10 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition"
        >
          {children}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground px-5 sm:px-8 py-14">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-white/10 grid place-items-center font-display text-lg">C</span>
            <span className="font-display text-lg">Coastline Bath Co.</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Florida's premier bathroom remodeling contractor. Transparent from the first quote to the final reveal.
          </p>
        </div>
        <FooterCol title="Services" items={["Full Remodels", "Custom Tiling", "Plumbing", "Fixtures"]} />
        <FooterCol title="Company" items={["Our Process", "Pricing Guide", "Gallery", "Contact"]} />
        <FooterCol title="Contact" items={["(305) 555-0182", "hello@coastlinebath.co", "Serving all of Florida", "Lic. #CGC1500000"]} />
      </div>
      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Coastline Bath Co. All rights reserved.</span>
        <span>Licensed & insured in the State of Florida.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-white/60">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
