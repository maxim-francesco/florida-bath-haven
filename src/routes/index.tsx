import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Hammer,
  Grid3x3,
  Wrench,
  ShowerHead,
  ShieldCheck,
  Check,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import heroBathroom from "@/assets/hero-bathroom.webp";
const workImages = Object.values(
  import.meta.glob("@/assets/work/*.webp", { eager: true, import: "default", query: "?url" })
) as string[];

const beforeImages = Object.values(
  import.meta.glob("@/assets/before/*.webp", { eager: true, import: "default", query: "?url" })
) as string[];

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
          <span className="h-8 w-8 rounded-md bg-navy grid place-items-center text-navy-foreground font-display text-lg">B</span>
          <span className="font-display text-lg tracking-tight">Bathwright</span>
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
        loading="eager"
        fetchPriority="high"
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

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -45% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}
function Services() {
  const items = [
    { icon: Hammer, num: "01", title: "Full Demolition", desc: "Down-to-studs teardown with clean, code-compliant disposal." },
    { icon: Grid3x3, num: "02", title: "Custom Tiling", desc: "Precision layouts in porcelain, marble, and natural stone." },
    { icon: Wrench, num: "03", title: "Plumbing & Electrical", desc: "Licensed rough-ins, re-pipes, and modern circuit upgrades." },
    { icon: ShowerHead, num: "04", title: "Fixture Installation", desc: "From standard to smart — fitted to spec, finished flawlessly." },
  ];
  function ServiceCard({ icon: Icon, num, title, desc, index }: { icon: React.ElementType; num: string; title: string; desc: string; index: number }) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const fromLeft = index % 2 === 0;
    const hidden = fromLeft ? "opacity-0 -translate-x-10 blur-[2px]" : "opacity-0 translate-x-10 blur-[2px]";
    return (
      <div
        ref={ref}
        className={`group relative p-7 sm:p-9 border-border border-t first:border-t-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l hover:bg-slate-soft transition-all duration-700 ease-out will-change-transform ${
          inView ? "opacity-100 translate-x-0 blur-0" : hidden
        }`}
      >
        <span className="pointer-events-none absolute left-0 top-0 h-0 w-[3px] bg-navy transition-all duration-300 ease-out sm:group-hover:h-full" />
        <span className="pointer-events-none absolute right-6 top-5 font-display text-5xl leading-none text-navy/[0.06] select-none">
          {num}
        </span>
        <div className="relative">
          <div className="h-12 w-12 rounded-xl bg-navy grid place-items-center text-navy-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <h3 className="mt-6 font-display text-2xl">{title}</h3>
          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-xs">{desc}</p>
        </div>
      </div>
    );
  }
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Our Services" title="A complete remodel, under one roof." sub="Every trade coordinated in-house so your timeline, budget, and finish quality stay intact." />
        <div className="mt-10 rounded-3xl bg-card border border-border shadow-elegant overflow-hidden grid grid-cols-1 sm:grid-cols-2">
          {items.map((it, i) => (
            <ServiceCard key={it.title} {...it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SIZES = [
  { id: "small", label: "Small", sqft: 40, note: "Powder / guest bath" },
  { id: "medium", label: "Medium", sqft: 60, note: "Standard full bath" },
  { id: "large", label: "Large", sqft: 90, note: "Primary / ensuite" },
] as const;

const SCOPES = [
  { id: "cosmetic", name: "Cosmetic Refresh", desc: "Paint, fixtures, vanity swap, re-tile.", laborLow: 85, laborHigh: 140 },
  { id: "mid", name: "Mid-Range Remodel", desc: "New layout, tile shower, upgraded plumbing.", laborLow: 150, laborHigh: 225 },
  { id: "full", name: "Full Gut & Rebuild", desc: "Down to studs, re-pipe, re-wire, waterproofing.", laborLow: 240, laborHigh: 360 },
] as const;

const TIERS = [
  { id: "standard", name: "Standard", tag: "Builder Grade", matLow: 8000, matHigh: 18000, img: workImages[3], iw: 900, ih: 1200, feats: ["Ceramic & basic porcelain tile", "Standard vanity & mirror", "Chrome fixtures", "Two-piece toilet"] },
  { id: "premium", name: "Premium", tag: "Most Requested", matLow: 18000, matHigh: 34000, img: workImages[13], iw: 900, ih: 1200, feats: ["Custom porcelain tile", "Double vanity & quartz", "Brushed nickel or matte black", "Frameless glass shower"] },
  { id: "luxury", name: "Luxury", tag: "Signature Finish", matLow: 34000, matHigh: 70000, img: workImages[1], iw: 900, ih: 1200, feats: ["Natural stone & book-matched slabs", "Freestanding soaking tub", "Smart toilet & heated floors", "Brass or designer fixtures"] },
] as const;

const fmtK = (n: number) => {
  const r = Math.round((n / 1000) * 10) / 10;
  return `$${r % 1 === 0 ? r.toFixed(0) : r.toFixed(1)}k`;
};

function Pricing() {
  const [step, setStep] = useState(0);
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [scopeId, setScopeId] = useState<string | null>(null);
  const [tierId, setTierId] = useState<string | null>(null);

  const size = SIZES.find((s) => s.id === sizeId) ?? null;
  const scope = SCOPES.find((s) => s.id === scopeId) ?? null;
  const tier = TIERS.find((t) => t.id === tierId) ?? null;

  const laborLow = size && scope ? size.sqft * scope.laborLow : 0;
  const laborHigh = size && scope ? size.sqft * scope.laborHigh : 0;
  const matLow = tier ? tier.matLow : 0;
  const matHigh = tier ? tier.matHigh : 0;
  const totalLow = laborLow + matLow;
  const totalHigh = laborHigh + matHigh;

  const steps = ["Size", "Scope", "Materials"];
  const isSummary = step === 3;
  const canNext = step === 0 ? !!sizeId : step === 1 ? !!scopeId : !!tierId;

  return (
    <section id="pricing" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-soft">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="The detailed pricing guide."
          sub="Build your estimate in three quick steps. Nothing hidden — watch the range update as you choose."
        />

        <div className="mt-10 mx-auto max-w-3xl rounded-3xl bg-card border border-border shadow-elegant overflow-hidden">
          {!isSummary && (
            <>
              <div className="px-6 sm:px-8 pt-6">
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <span key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-navy" : "bg-border"}`} />
                  ))}
                </div>
                <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Step {step + 1} of 3 · {steps[step]}
                </div>
              </div>

              <div className="px-6 sm:px-8 pt-3 pb-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {step === 0 && SIZES.map((s) => (
                    <OptionCard key={s.id} selected={sizeId === s.id} onClick={() => setSizeId(s.id)} title={s.label} sub={s.note} meta={`~${s.sqft} sq ft`} />
                  ))}
                  {step === 1 && SCOPES.map((s) => (
                    <OptionCard key={s.id} selected={scopeId === s.id} onClick={() => setScopeId(s.id)} title={s.name} sub={s.desc} meta={`$${s.laborLow}–${s.laborHigh}/sq ft`} />
                  ))}
                  {step === 2 && TIERS.map((t) => (
                    <TierCard key={t.id} tier={t} selected={tierId === t.id} onClick={() => setTierId(t.id)} />
                  ))}
                </div>
              </div>

              <div className="border-t border-border bg-card px-6 sm:px-8 py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">Estimate so far</div>
                  <div className="font-display text-2xl text-navy leading-tight">{size && scope ? `${fmtK(totalLow)} – ${fmtK(totalHigh)}` : "—"}</div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {step > 0 && (
                    <button onClick={() => setStep((s) => s - 1)} aria-label="Back" className="h-11 w-11 grid place-items-center rounded-xl border border-border text-foreground hover:bg-slate-soft transition">
                      <ArrowLeft size={18} strokeWidth={1.75} />
                    </button>
                  )}
                  <button onClick={() => canNext && setStep((s) => s + 1)} disabled={!canNext} className={`h-11 px-5 rounded-xl text-sm font-medium inline-flex items-center gap-1.5 transition ${canNext ? "bg-navy text-navy-foreground hover:opacity-90" : "bg-border text-muted-foreground cursor-not-allowed"}`}>
                    {step === 2 ? "See estimate" : "Next"}
                    <ArrowRight size={16} strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            </>
          )}

          {isSummary && size && scope && tier && (
            <div>
              <div className="relative h-44 sm:h-56 w-full overflow-hidden">
                <img src={tier.img} alt={`${tier.name} finish example`} width={tier.iw} height={tier.ih} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/10" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">Your estimate</div>
                  <div className="font-display text-4xl sm:text-5xl text-white leading-[1.05]">{fmtK(totalLow)} – {fmtK(totalHigh)}</div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <Chip>{size.label} · {size.sqft} sq ft</Chip>
                  <Chip>{scope.name}</Chip>
                  <Chip>{tier.name}</Chip>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-soft p-4">
                    <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">Labor</div>
                    <div className="mt-1 font-display text-xl text-navy">{fmtK(laborLow)} – {fmtK(laborHigh)}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{size.sqft} sq ft × ${scope.laborLow}–${scope.laborHigh}</div>
                  </div>
                  <div className="rounded-xl bg-slate-soft p-4">
                    <div className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">Materials</div>
                    <div className="mt-1 font-display text-xl text-navy">{fmtK(matLow)} – {fmtK(matHigh)}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{tier.name} tier, avg. bath</div>
                  </div>
                </div>
                <ul className="mt-5 grid gap-1.5 sm:grid-cols-2 text-xs text-muted-foreground">
                  {tier.feats.map((f) => (
                    <li key={f} className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-navy shrink-0" />{f}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="#contact" className="group flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full bg-navy text-navy-foreground text-sm font-medium tracking-wide transition-shadow hover:shadow-elegant">
                    Get this quote
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-gold text-navy transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight size={14} strokeWidth={2.25} />
                    </span>
                  </a>
                  <button onClick={() => { setStep(0); setSizeId(null); setScopeId(null); setTierId(null); }} className="mx-auto mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-navy transition-colors">
                    <RotateCcw size={13} strokeWidth={2} />
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground max-w-xl mx-auto text-center">
          Ranges reflect Florida market averages for permitted, code-compliant work. Final numbers are confirmed in your written quote.
        </p>
      </div>
    </section>
  );
}

function OptionCard({ selected, onClick, title, sub, meta, tag }: { selected: boolean; onClick: () => void; title: string; sub: string; meta: string; tag?: string }) {
  return (
    <button onClick={onClick} aria-pressed={selected} className={`text-left rounded-2xl p-4 sm:p-5 border h-full flex flex-col transition ${selected ? "border-navy border-2 bg-slate-soft" : "border-border hover:border-navy/30"}`}>
      {tag && <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{tag}</div>}
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-lg">{title}</span>
        {selected && (
          <span className="h-5 w-5 rounded-full bg-navy grid place-items-center text-navy-foreground shrink-0">
            <Check size={13} strokeWidth={2.5} />
          </span>
        )}
      </div>
      <div className="text-xs text-muted-foreground mt-1 leading-relaxed flex-1">{sub}</div>
      <div className="text-sm font-semibold text-navy mt-3">{meta}</div>
    </button>
  );
}

function TierCard({ tier, selected, onClick }: { tier: (typeof TIERS)[number]; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-pressed={selected} className={`text-left rounded-2xl overflow-hidden border h-full flex flex-col transition ${selected ? "border-navy border-2 bg-slate-soft" : "border-border hover:border-navy/30"}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={tier.img} alt={`${tier.name} finish example`} width={tier.iw} height={tier.ih} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2 text-[10px] uppercase tracking-widest bg-card/90 px-2 py-1 rounded-full text-navy">{tier.tag}</div>
        {selected && (
          <span className="absolute top-2 right-2 h-6 w-6 rounded-full bg-navy grid place-items-center text-navy-foreground">
            <Check size={14} strokeWidth={2.5} />
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-display text-xl">{tier.name}</span>
          <span className="text-sm font-semibold text-navy">{fmtK(tier.matLow)}–{fmtK(tier.matHigh)}</span>
        </div>
        <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground flex-1">
          {tier.feats.map((f) => (
            <li key={f} className="flex gap-2"><span className="mt-1 h-1 w-1 rounded-full bg-navy shrink-0" />{f}</li>
          ))}
        </ul>
      </div>
    </button>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="text-xs px-3 py-1 rounded-full bg-slate-soft text-foreground border border-border">{children}</span>;
}

function MoneyGoes() {
  const items = [
    { icon: ShieldCheck, title: "Florida building codes", desc: "Coastal-grade permits, hurricane-rated ventilation, and inspection sign-offs." },
    { icon: ShowerHead, title: "Premium waterproofing", desc: "Full-membrane systems behind every tile — the layer you never see but always feel." },
    { icon: Wrench, title: "Plumbing rough-ins", desc: "Modern PEX, proper venting, and shut-offs sized for real Florida water pressure." },
    { icon: Hammer, title: "Skilled trades", desc: "In-house tile setters, plumbers, and electricians — not rotating subcontractors." },
  ];
  const bar = useInView<HTMLDivElement>();
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeader
            eyebrow="Where Your Money Goes"
            title="The quiet costs of a quality build."
            sub="A beautiful bathroom is 20% what you see and 80% what protects it. Here's what a professional remodel actually pays for."
          />
          <div ref={bar.ref} className="mt-8 max-w-sm">
            <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
              <div className={`bg-navy/30 transition-all duration-1000 ease-out ${bar.inView ? "w-[20%]" : "w-0"}`} />
              <div className={`bg-navy transition-all duration-1000 delay-200 ease-out ${bar.inView ? "w-[80%]" : "w-0"}`} />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>20% you see</span>
              <span className="font-medium text-navy">80% that protects it</span>
            </div>
          </div>
        </div>
        <ol className="relative">
          <span className="pointer-events-none absolute left-[22px] top-3 bottom-3 w-px bg-border" aria-hidden="true" />
          {items.map((it) => (
            <MoneyItem key={it.title} item={it} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function MoneyItem({ item }: { item: { icon: React.ElementType; title: string; desc: string } }) {
  const { ref, inView } = useInView<HTMLLIElement>();
  const Icon = item.icon;
  return (
    <li
      ref={ref}
      className={`relative flex gap-5 pb-8 last:pb-0 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className={`relative z-10 h-11 w-11 shrink-0 rounded-xl grid place-items-center transition-all duration-500 ease-out ${
        inView ? "bg-navy text-navy-foreground scale-100" : "bg-border text-muted-foreground scale-90"
      }`}>
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className="pt-1">
        <div className="font-display text-lg">{item.title}</div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </li>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Consultation", desc: "On-site visit, measurements, and a conversation about how you actually use the space." },
    { n: "02", title: "Transparent Quoting", desc: "A written, line-item quote — labor, materials, permits — no verbal estimates." },
    { n: "03", title: "Construction", desc: "Daily site cleanup, weekly progress reports, and a single point of contact." },
    { n: "04", title: "Reveal", desc: "Final walk-through, punch list, and a written warranty on every dollar spent." },
  ];
  const containerRef = useRef<HTMLOListElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [centers, setCenters] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    const measure = () => {
      const c = containerRef.current;
      if (!c) return;
      const h = c.scrollHeight || 1;
      setCenters(dotRefs.current.map((d) => (d ? (d.offsetTop + d.offsetHeight / 2) / h : 0)));
    };
    const onScroll = () => {
      const c = containerRef.current;
      if (!c) return;
      const rect = c.getBoundingClientRect();
      const trigger = window.innerHeight * 0.55;
      const raw = (trigger - rect.top) / (rect.height || 1);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-soft">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Our Process" title="Four steps. No surprises." />
        <ol ref={containerRef} className="mt-12 relative max-w-2xl">
          <span className="absolute left-5 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-border" aria-hidden />
          <span
            className="absolute left-5 top-0 w-[2px] -translate-x-1/2 bg-navy"
            style={{ height: `${progress * 100}%` }}
            aria-hidden
          />
          {steps.map((s, i) => {
            const active = centers.length > i ? progress >= centers[i] : false;
            return (
              <li key={s.n} className="relative pl-16 pb-12 last:pb-0">
                <span
                  ref={(el) => { dotRefs.current[i] = el; }}
                  aria-hidden
                  className={`absolute left-5 top-0 -translate-x-1/2 h-10 w-10 rounded-full grid place-items-center font-display text-base ring-4 ring-slate-soft transition-all duration-500 ease-out ${
                    active ? "bg-navy text-navy-foreground scale-100" : "bg-card text-muted-foreground border border-border scale-95"
                  }`}
                >
                  {s.n}
                </span>
                <div className={`transition-all duration-500 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  <div className="font-display text-2xl">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function PhotoGrid({
  images,
  label,
  initial,
  onOpen,
}: {
  images: string[];
  label: string;
  initial: number;
  onOpen: (src: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? images : images.slice(0, initial);

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-2xl text-foreground">{label}</h3>
        <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
          {images.length} photos
        </span>
      </div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {visible.map((src, i) => (
          <button
            key={src}
            onClick={() => onOpen(src)}
            className="group relative overflow-hidden rounded-2xl shadow-card aspect-[3/4] bg-slate-soft"
            aria-label={`View ${label.toLowerCase()} photo ${i + 1} of ${images.length}`}
          >
            <img
              src={src}
              alt={`${label} — bathroom remodel by Bathwright, photo ${i + 1}`}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {!expanded && images.length > initial && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-navy hover:text-navy"
          >
            View all {images.length}
            <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}

function Gallery() {
  const all = [...beforeImages, ...workImages];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const open = (src: string) => setLightbox(all.indexOf(src));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % all.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + all.length) % all.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, all.length]);

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Work Gallery"
          title="Before, after, and everything between."
          sub="Real bathrooms we've torn out and rebuilt across Florida."
        />
        <div className="mt-12 space-y-16">
          <PhotoGrid images={beforeImages} label="Before" initial={6} onOpen={open} />
          <PhotoGrid images={workImages} label="After" initial={9} onOpen={open} />
        </div>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <img
            src={all[lightbox]}
            alt={`Bathroom remodel by Bathwright, photo ${lightbox + 1}`}
            width={900}
            height={1200}
            className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X size={20} strokeWidth={2} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-white/70">
            {lightbox < beforeImages.length ? "Before" : "After"} · {lightbox + 1} / {all.length}
          </div>
        </div>
      )}
    </section>
  );
}


function Contact() {
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
                <div className="flex items-center gap-3 text-foreground"><Phone size={16} className="text-navy" /> <a href="tel:+12394511643" className="hover:text-navy transition-colors">(239) 451-1643</a></div>
                <div className="flex items-center gap-3 text-foreground"><Mail size={16} className="text-navy" /> hello@bathwright.us</div>
                <div className="flex items-center gap-3 text-foreground"><MapPin size={16} className="text-navy" /> Serving all of Florida</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card">
                <h3 className="font-display text-2xl tracking-tight text-foreground">Send us the details</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Email is the fastest way to reach us. Include the points below and we'll come back with a written estimate and a proposed on-site visit.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground">
                  {[
                    "Approximate bathroom size in square feet",
                    "Desired finish quality — Standard, Premium or Luxury",
                    "Your zip code",
                    "Ideal start date",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid place-items-center h-4 w-4 rounded-full bg-navy text-navy-foreground shrink-0">
                        <Check size={11} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@bathwright.us?subject=Bathroom%20remodel%20quote%20request&body=Bathroom%20size%3A%20%0AFinish%20quality%3A%20%0AZip%20code%3A%20%0AIdeal%20start%20date%3A%20%0A%0ANotes%3A%20%0A"
                  className="group mt-8 flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full bg-navy text-navy-foreground text-sm font-semibold tracking-wide transition-shadow hover:shadow-elegant"
                >
                  <Mail size={16} strokeWidth={2} />
                  Email hello@bathwright.us
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-gold text-navy transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={14} strokeWidth={2.25} />
                  </span>
                </a>
                <a
                  href="tel:+12394511643"
                  className="mt-3 flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full border border-border bg-background text-sm font-medium text-foreground transition-colors hover:border-navy hover:text-navy"
                >
                  <Phone size={16} strokeWidth={2} />
                  Call (239) 451-1643
                </a>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Licensed & insured in Florida. Your information stays private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground px-5 sm:px-8 py-14">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
        <FooterCol title="Company" items={["Our Process", "Pricing Guide", "Gallery", "Contact"]} />
        <FooterCol title="Contact" items={["(239) 451-1643", "hello@bathwright.us", "Serving all of Florida", "Cornel Bucur · Owner"]} />
      </div>
      <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Bathwright. All rights reserved.</span>
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
