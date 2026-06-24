import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Droplets, Sun, Wrench, Gauge, ShieldCheck, Phone, ArrowUpRight,
  Sparkles, MapPin, Clock, CheckCircle2, ChevronDown, Zap, Waves,
} from "lucide-react";

import hero from "@/assets/trust-727465.json";
import grid1 from "@/assets/trust-697066.json";
import tanks from "@/assets/trust-700908.json";
import field from "@/assets/trust-700997.json";
import truck from "@/assets/trust-705031.json";
import rig from "@/assets/trust-715478.json";
import promo from "@/assets/trust-718816.json";
import inverter from "@/assets/trust-721290.json";
import solarPole from "@/assets/trust-722364.json";
import family from "@/assets/trust-727491.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust Borehole & Solar — Water. Power. Trust." },
      { name: "description", content: "Zimbabwe's most trusted borehole drilling, solar systems, water storage and pump installation. Survey from $80. Drilling from $500." },
      { property: "og:title", content: "Trust Borehole & Solar" },
      { property: "og:description", content: "Water. Power. Trust. For a better tomorrow." },
      { property: "og:image", content: hero.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PHONE = "+263 77 694 7378";
const PHONE_HREF = "tel:+263776947378";

function Home() {
  return (
    <div className="grain min-h-screen overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Promo />
      <Process />
      <Gallery />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-sun rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative size-9 rounded-full bg-water-grad grid place-items-center ring-1 ring-white/20">
              <Droplets className="size-4 text-paper" />
            </div>
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-tight">Trust</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Borehole & Solar</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {["Services", "Process", "Gallery", "Pricing"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="relative hover:text-foreground transition-colors group">
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sun group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>
        <a href={PHONE_HREF} className="group relative inline-flex items-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
          <Phone className="size-3.5" />
          <span className="hidden sm:inline">Call now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </motion.header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen bg-hero overflow-hidden pt-32 pb-20">
      {/* Ambient orbs */}
      <motion.div style={{ y }} className="absolute -top-40 -right-40 size-[600px] rounded-full bg-sun/20 blur-3xl" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }} className="absolute bottom-0 -left-40 size-[500px] rounded-full bg-water/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ opacity }} className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em]"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-sun ripple" />
              <span className="relative size-1.5 rounded-full bg-sun" />
            </span>
            Trusted across Zimbabwe
          </motion.div>

          <h1 className="font-display font-light text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] text-balance">
            <Reveal delay={0.1}>Reliable</Reveal>
            <br />
            <Reveal delay={0.25}>
              <em className="italic font-normal shimmer-text">water.</em>
            </Reveal>
            <br />
            <Reveal delay={0.4}>Brighter</Reveal>
            <br />
            <Reveal delay={0.55}>
              <em className="italic font-normal text-sun">tomorrows.</em>
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            From the first survey to the final drop — we drill boreholes, install solar systems, and engineer water storage that lasts generations. <span className="text-foreground">Water is life. Solar is power.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#pricing" className="group relative inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform">
              Get a free quote
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-3 text-sm text-foreground/90 hover:text-sun transition-colors">
              <span className="size-10 grid place-items-center rounded-full border border-white/20">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Call us</span>
                <span className="font-mono-tight">{PHONE}</span>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-3 gap-6 pt-8 max-w-md border-t border-white/10"
          >
            {[
              { k: "500+", v: "Boreholes drilled" },
              { k: "10yr", v: "Workmanship" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.k} className="pt-6">
                <div className="font-display text-3xl text-sun">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-deep">
            <img src={hero.url} alt="Trust technician at borehole" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="size-10 rounded-full bg-sun grid place-items-center text-primary-foreground">
                <Zap className="size-4" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Now booking</div>
                <div className="text-sm">Borehole + Solar packages</div>
              </div>
              <ArrowUpRight className="size-4" />
            </motion.div>
          </div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -left-6 top-12 glass rounded-2xl p-4 hidden md:block"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-sun" />
              <span className="text-xs uppercase tracking-wider">Certified</span>
            </div>
            <div className="font-display text-lg mt-1">10-year guarantee</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="size-4" />
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Borehole drilling", "Solar systems", "Water storage", "Pump installation", "Inverter setup", "Maintenance & repair", "Site survey", "Off-grid solutions"];
  return (
    <div className="relative py-8 border-y border-white/5 bg-card/50 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl px-8 text-foreground/40 hover:text-sun transition-colors">
            {it} <span className="text-sun mx-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Droplets, title: "Borehole Drilling", desc: "Clean water at your doorstep. Full drilling, casing and capping with modern rigs.", img: rig.url },
    { icon: Sun, title: "Solar Systems", desc: "Design and install — from cabin kits to whole-home off-grid solar with battery backup.", img: inverter.url },
    { icon: Waves, title: "Water Storage", desc: "Tanks from 2,500L to 10,000L. Reliable water storage solutions for any property.", img: tanks.url },
    { icon: Gauge, title: "Pump Installation", desc: "Solar, submersible and surface pumps — sized right and installed to last.", img: solarPole.url },
    { icon: Wrench, title: "Maintenance", desc: "Quick-response repairs, servicing and after-sales support nationwide.", img: field.url },
    { icon: ShieldCheck, title: "Site Survey", desc: "Geological water surveys from $80. Know before you drill.", img: truck.url },
  ];

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="What we do" title="Six services. One promise." subtitle="End-to-end water & power infrastructure built for African homes, farms and businesses." />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, img, index }: { icon: any; title: string; desc: string; img: string; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="group relative rounded-3xl overflow-hidden bg-card border border-white/5 p-8 aspect-[4/5] flex flex-col justify-between cursor-pointer"
    >
      <motion.img
        src={img}
        alt={title}
        animate={{ opacity: hover ? 0.35 : 0, scale: hover ? 1 : 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-90" />

      <div className="relative">
        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-sun/10 text-sun border border-sun/20 group-hover:bg-sun group-hover:text-primary-foreground transition-all">
          <Icon className="size-5" />
        </div>
      </div>
      <div className="relative space-y-3">
        <h3 className="font-display text-3xl tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="flex items-center gap-2 text-sm text-sun pt-2">
          <span>Learn more</span>
          <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-sun mb-6 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-sun" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl font-light tracking-[-0.02em] text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ---------------- PROMO ---------------- */
function Promo() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden bg-water-grad shadow-deep"
        >
          <img src={promo.url} alt="" className="absolute inset-0 size-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-water-deep via-water-deep/80 to-transparent" />

          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-sun mb-4">Limited promotion</div>
              <h3 className="font-display text-5xl md:text-7xl font-light leading-[0.95]">
                Borehole<br />
                <span className="italic shimmer-text">drilling.</span>
              </h3>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-7xl text-sun">$500</span>
                <span className="text-sm text-muted-foreground">in Harare</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                + Survey from <span className="text-foreground font-medium">$80</span> · Outside Harare? Ask for a quote.
              </div>
              <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform">
                Book your drill
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Droplets, label: "Clean water" },
                { icon: ShieldCheck, label: "Quality work" },
                { icon: Clock, label: "Fast & reliable" },
                { icon: Sparkles, label: "Experienced team" },
              ].map((f) => (
                <div key={f.label} className="glass rounded-2xl p-5">
                  <f.icon className="size-5 text-sun mb-3" />
                  <div className="text-sm">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Survey", desc: "Geological water survey identifies the best drilling spot on your land." },
    { n: "02", title: "Drill", desc: "Modern rigs reach water-bearing aquifers, cased and capped to standard." },
    { n: "03", title: "Power", desc: "Solar pump and panels installed, plumbed into your tank or home." },
    { n: "04", title: "Support", desc: "After-sales servicing and rapid response keeps your system flowing." },
  ];
  return (
    <section id="process" className="relative py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How we work" title="From dry ground to flowing tap." />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative pt-8 border-t border-white/10 hover:border-sun transition-colors"
            >
              <div className="font-mono-tight text-xs text-sun mb-4">{s.n}</div>
              <h3 className="font-display text-3xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { url: grid1.url, span: "md:col-span-2 md:row-span-2", label: "Power. Water. Trust." },
    { url: family.url, span: "", label: "For families" },
    { url: truck.url, span: "", label: "On the road" },
    { url: rig.url, span: "md:col-span-2", label: "Modern rigs" },
    { url: inverter.url, span: "", label: "Inverter installs" },
    { url: solarPole.url, span: "", label: "Solar pumps" },
  ];
  return (
    <section id="gallery" className="relative py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="In the field" title="Work that speaks for itself." />

        <div className="mt-16 grid md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {imgs.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className={`group relative rounded-2xl overflow-hidden ${img.span}`}
            >
              <img src={img.url} alt={img.label} className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-sm font-display opacity-0 group-hover:opacity-100 transition-opacity">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const tiers = [
    { name: "Survey", price: "$80", desc: "Geological water survey — know before you drill.", features: ["Site assessment", "Aquifer depth report", "Drilling recommendation"], cta: "Book survey" },
    { name: "Borehole", price: "$500", note: "Harare", desc: "Full drilling, casing & capping. Our most popular package.", features: ["Modern rig drilling", "Casing & capping", "Workmanship guarantee", "Same-week scheduling"], cta: "Get started", featured: true },
    { name: "Tanks", price: "from $170", desc: "Water storage tanks — reliable storage solutions.", features: ["2,500L · $170", "5,000L · $310", "10,000L · $900"], cta: "Order tank" },
  ];
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Honest pricing" title="No surprises. Just trust." subtitle="Transparent rates on our most-requested services. Custom solar and pump packages quoted on-site." />

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`relative rounded-3xl p-8 border ${t.featured ? "bg-sun text-primary-foreground border-sun shadow-glow md:scale-105" : "bg-card border-white/10"}`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-ink text-paper text-xs uppercase tracking-wider">Most popular</div>
              )}
              <div className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{t.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-6xl font-light">{t.price}</span>
                {t.note && <span className="text-sm opacity-70">/{t.note}</span>}
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`size-4 ${t.featured ? "text-primary-foreground" : "text-sun"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={PHONE_HREF} className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${t.featured ? "bg-ink text-paper hover:bg-ink/80" : "bg-foreground text-background hover:scale-[1.02]"}`}>
                {t.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const t = [
    { q: "Trust drilled our borehole in two days and the water has been clean ever since. Worth every dollar.", a: "Tendai M.", role: "Homeowner, Borrowdale" },
    { q: "We powered the whole farm with their solar package. Zero downtime in 18 months.", a: "Farai N.", role: "Farm owner, Mashonaland" },
    { q: "Honest pricing and professional crew. They explained everything before lifting a tool.", a: "Chipo D.", role: "Builder, Harare" },
  ];
  return (
    <section className="relative py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="What clients say" title="The trust is in the name." />

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {t.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="rounded-3xl bg-card border border-white/5 p-8 flex flex-col justify-between min-h-[280px] hover:border-sun/40 transition-colors"
            >
              <blockquote className="font-display text-xl leading-snug text-balance">
                <span className="text-sun text-3xl leading-none">"</span>
                {it.q}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <div className="font-medium">{it.a}</div>
                <div className="text-xs text-muted-foreground">{it.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-hero p-12 md:p-20 text-center shadow-deep"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sun/10 via-transparent to-water/20" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[400px] rounded-full bg-sun/20 blur-3xl" />

          <div className="relative max-w-3xl mx-auto space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] text-sun">Let's begin</div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] text-balance">
              Water is life.<br />
              <em className="italic shimmer-text">Let us power your future.</em>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a href={PHONE_HREF} className="group inline-flex items-center gap-3 rounded-full bg-sun px-8 py-5 text-base font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform">
                <Phone className="size-4" />
                {PHONE}
              </a>
              <a href="mailto:trust@boreholeandsolar.co.zw" className="inline-flex items-center gap-2 rounded-full glass px-7 py-5 text-sm">
                Email us
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4">
              <MapPin className="size-3.5" /> Operating across Zimbabwe · Based in Harare
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-full bg-water-grad grid place-items-center ring-1 ring-white/20">
              <Droplets className="size-4 text-paper" />
            </div>
            <div>
              <div className="font-display text-xl">Trust</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Borehole & Solar</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Water. Power. Trust. For a better tomorrow. Sustainable water and energy solutions across Zimbabwe.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li>Borehole drilling</li>
            <li>Solar systems</li>
            <li>Water storage</li>
            <li>Pump installation</li>
            <li>Maintenance</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href={PHONE_HREF} className="hover:text-sun transition-colors">{PHONE}</a></li>
            <li className="text-muted-foreground">Harare, Zimbabwe</li>
            <li className="text-muted-foreground">Mon–Sat · 7am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Trust Borehole & Solar. All rights reserved.</div>
        <div className="font-mono-tight">Water. Power. Trust.</div>
      </div>
    </footer>
  );
}
