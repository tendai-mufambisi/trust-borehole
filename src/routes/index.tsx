import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Droplets, Sun, Wrench, Gauge, ShieldCheck, Phone, ArrowUpRight,
  Sparkles, MapPin, Clock, CheckCircle2, ChevronDown, Waves, Mail,
  Menu, X, Users, Leaf, Search, Hammer, Container, GlassWater,
} from "lucide-react";

/* ---------------- BRAND ASSETS ---------------- */
const LOGO = "/images/trust-logo.png";
const MARK = "/images/trust-mark.png";

const img = {
  heroTanks: "/images/hero-tanks.jpg",
  heroSolar: "/images/hero-solar.jpg",
  heroBindura: "/images/hero-bindura.jpg",
  twinTanks: "/images/twin-tanks-stand.jpg",
  solarArray: "/images/solar-array-field.jpg",
  bindura: "/images/bindura-solar.jpg",
  tankSunset: "/images/tank-sunset.jpg",
  crew: "/images/crew-collage.jpg",
  hiluxTech: "/images/hilux-technician.jpg",
  hilux: "/images/hilux-branded.jpg",
  equipment: "/images/solar-equipment.jpg",
  wip: "/images/work-in-progress.jpg",
  technician: "/images/technician-portrait.jpg",
};

/* ---------------- CONTACT ---------------- */
const PHONE = "+263 77 694 7378";
const PHONE_HREF = "tel:+263776947378";
const EMAIL = "bandaelton334@gmail.com";
const WA_NUMBER = "263776947378";
const WA_TEXT = encodeURIComponent(
  "Hi Trust Borehole & Solar 👋 I'd like a quote for a borehole / solar installation.",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
const ADDRESS = "Eastcoat, Belvedere · Harare, Zimbabwe";

/* Developer credit */
const DEV_WA = "https://wa.me/263776611049";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust Borehole & Solar — Water is Life. Solar is Power." },
      {
        name: "description",
        content:
          "Trust Borehole and Solar — borehole survey, drilling, development, tank & solar installation across Zimbabwe. Survey from $80. Drilling from $500. Tanks from $120. Call +263 77 694 7378.",
      },
      { property: "og:title", content: "Trust Borehole & Solar" },
      { property: "og:description", content: "Water is life. Solar is power. Trust is our name." },
      { property: "og:image", content: img.heroTanks },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="grain min-h-screen overflow-x-clip">
      <PageLoader />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Promo />
      <Process />
      <Gallery />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

/* =================================================================
   PAGE LOADER — water rises through the Trust mark, then curtains open
   ================================================================= */
function PageLoader() {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 1900;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      // ease-out so it sprints then settles at 100
      const eased = 1 - Math.pow(1 - t, 2.2);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setGone(true), 420);
    };

    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (gone) document.body.style.overflow = "";
  }, [gone]);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] grid place-items-center"
          exit={{ transition: { duration: 0.9 } }}
        >
          {/* Curtains */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-hero"
            exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-hero"
            exit={{ y: "100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center gap-7 px-8"
            exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.35 } }}
          >
            {/* Rotating survey ring */}
            <div className="relative grid place-items-center">
              <svg className="absolute size-40 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1.5" />
                <circle
                  cx="50" cy="50" r="46" fill="none"
                  stroke="var(--sun)" strokeWidth="1.5" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 46}
                  strokeDashoffset={2 * Math.PI * 46 * (1 - pct / 100)}
                />
              </svg>
              <div className="absolute size-48 rounded-full bg-water/20 blur-3xl" />

              {/* The real logo mark, filling with water */}
              <div className="relative size-24">
                <img
                  src={MARK}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 size-full object-contain opacity-20 grayscale"
                />
                <div
                  className="absolute inset-0 overflow-hidden transition-[clip-path] duration-150 ease-linear"
                  style={{ clipPath: `inset(${100 - pct}% 0 0 0)` }}
                >
                  <img src={MARK} alt="Trust Borehole and Solar" className="absolute inset-0 size-full object-contain" />
                </div>
                {/* water line */}
                <div
                  className="absolute inset-x-[-20%] h-[3px] rounded-full bg-sun-glow/80 blur-[1px] water-wave"
                  style={{ top: `${100 - pct}%` }}
                />
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="font-display text-3xl tracking-tight text-paper">Trust</div>
              <div className="text-[10px] uppercase tracking-[0.42em] text-paper/45">
                Borehole <span className="text-water">and</span> <span className="text-sun">Solar</span>
              </div>
            </div>

            {/* Drill progress bar */}
            <div className="w-56 space-y-3">
              <div className="relative h-px w-full bg-white/10">
                <div
                  className="absolute inset-y-0 left-0 bg-sun transition-[width] duration-150 ease-linear"
                  style={{ width: `${pct}%` }}
                />
                <div
                  className="absolute -top-[7px] transition-[left] duration-150 ease-linear drill-bob"
                  style={{ left: `calc(${pct}% - 5px)` }}
                >
                  <Droplets className="size-[15px] text-sun-glow" />
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-paper/40">
                <span>{pct < 55 ? "Surveying" : pct < 90 ? "Drilling" : "Striking water"}</span>
                <span className="font-mono-tight text-sun tabular-nums">{pct}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =================================================================
   NAV — sticky, with a real hamburger drawer on small screens
   ================================================================= */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink/92 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_-8px_oklch(0.1_0.05_240/0.6)]"
            : "bg-ink/40 backdrop-blur-md border-b border-white/5",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-water/40 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <img
                src={MARK}
                alt="Trust Borehole and Solar logo"
                className="relative h-10 w-auto object-contain drop-shadow-[0_2px_8px_oklch(0.6_0.18_230/0.5)]"
              />
            </div>
            <div className="leading-none">
              <div className="font-display text-xl tracking-tight text-paper">Trust</div>
              <div className="text-[9px] uppercase tracking-[0.22em] text-paper/50">
                Borehole <span className="text-water">and</span> <span className="text-sun">Solar</span>
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm text-paper/75">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative hover:text-sun transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-sun group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="group relative inline-flex items-center gap-2 rounded-full bg-sun px-4 sm:px-5 py-2.5 text-sm font-semibold text-ink hover:scale-[1.03] transition-transform shadow-glow"
            >
              <Phone className="size-3.5" />
              <span className="hidden sm:inline">Call now</span>
            </a>

            {/* Hamburger — replaces the nav on small screens */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="lg:hidden grid place-items-center size-11 rounded-full glass text-paper hover:text-sun transition-colors"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 inset-y-0 w-[86%] max-w-sm bg-hero border-l border-white/10 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <img src={MARK} alt="" className="h-9 w-auto object-contain" />
                  <div className="leading-none">
                    <div className="font-display text-lg text-paper">Trust</div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-paper/50">Borehole and Solar</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid place-items-center size-10 rounded-full glass text-paper hover:text-sun transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between py-4 border-b border-white/8 font-display text-3xl text-paper hover:text-sun transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="size-5 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 pb-8 space-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#05291a]"
                >
                  <WhatsAppIcon className="size-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 text-sm text-paper"
                >
                  <Phone className="size-4 text-sun" />
                  {PHONE}
                </a>
                <div className="pt-2 text-center text-[11px] text-paper/40">{ADDRESS}</div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =================================================================
   HERO — cross-fading slideshow, every slide pushing in (zoom)
   ================================================================= */
const HERO_SLIDES = [
  { src: img.heroTanks, alt: "Trust technician commissioning twin water storage tanks on a steel stand" },
  { src: img.heroSolar, alt: "Solar array powering a borehole pump on a Trust installation site" },
  { src: img.heroBindura, alt: "Solar powered borehole installed by Trust in Bindura" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden">
      {/* Slideshow — each slide continuously zooms in while visible */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={HERO_SLIDES[slide].src}
            alt={HERO_SLIDES[slide].alt}
            fetchPriority={slide === 0 ? "high" : "auto"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 size-full object-cover hero-zoom will-change-transform"
          />
        </AnimatePresence>
      </motion.div>

      {/* Layered gradient atmospheres */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/65 to-ink"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.45_0.18_240/0.45),transparent_60%),radial-gradient(ellipse_at_80%_70%,oklch(0.6_0.18_65/0.35),transparent_55%)]" />

      {/* Scanning light sweep */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-sun/10 to-transparent pointer-events-none"
      />

      {/* Floating ambient orbs */}
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-sun/20 blur-3xl float-slow" />
      <div
        className="absolute bottom-10 -left-40 size-[480px] rounded-full bg-water/30 blur-3xl float-slow"
        style={{ animationDelay: "-5s" }}
      />

      {/* Drifting particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute size-1 rounded-full bg-sun-glow/70"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "-10%", opacity: [0, 1, 0] }}
          transition={{ duration: 8 + (i % 5), delay: i * 0.6, repeat: Infinity, ease: "linear" }}
          style={{ left: `${(i * 53) % 100}%` }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="max-w-4xl space-y-8">
          <h1 className="font-display font-normal text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.025em] text-balance">
            <Reveal delay={2.3}>Reliable</Reveal>
            <br />
            <Reveal delay={2.45}>
              <em className="italic shimmer-text">water.</em>
            </Reveal>
            <br />
            <Reveal delay={2.6}>Brighter</Reveal>{" "}
            <Reveal delay={2.75}>
              <em className="italic text-sun">tomorrows.</em>
            </Reveal>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.9 }}
            className="max-w-xl text-lg md:text-xl text-foreground/85 leading-relaxed font-light"
          >
            From the first survey to the final drop — we drill boreholes, install solar systems, and
            engineer water storage that lasts generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.25 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full bg-sun px-7 sm:px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Get a free quote
              <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 text-sm text-foreground/90 hover:text-sun transition-colors"
            >
              <span className="size-11 grid place-items-center rounded-full glass">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Call us</span>
                <span className="font-mono-tight">{PHONE}</span>
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 max-w-lg border-t border-white/15"
          >
            {[
              { k: "5-step", v: "Survey to tap" },
              { k: "Harare", v: "& nationwide" },
              { k: "24/7", v: "Support line" },
            ].map((s) => (
              <div key={s.k} className="pt-6">
                <div className="font-display text-2xl sm:text-4xl text-sun">{s.k}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 right-6 z-10 hidden sm:flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSlide(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === slide ? "w-8 bg-sun" : "w-3 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs flex flex-col items-center gap-2 z-10"
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
  const items = [
    "Borehole survey", "Borehole drilling", "Borehole development", "Tank & solar installation",
    "Solar pump systems", "Water storage", "Maintenance & support", "Complete water solutions",
  ];
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

/* =================================================================
   ABOUT — real vision statement + real values + real photos
   ================================================================= */
function About() {
  const values = [
    { icon: ShieldCheck, name: "Trust", line: "We do what we say." },
    { icon: Droplets, name: "Reliability", line: "We deliver quality that lasts." },
    { icon: Leaf, name: "Sustainability", line: "Solutions for a better future." },
    { icon: Users, name: "Community", line: "We empower and uplift lives." },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image cluster */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-deep">
              <img
                src={img.technician}
                alt="Trust Borehole and Solar technician on site in branded overalls"
                className="absolute inset-0 size-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-[1600ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-56 rounded-2xl overflow-hidden border-4 border-ink shadow-deep aspect-square"
            >
              <img src={img.wip} alt="Trust crew raising a tank and solar panels on site" className="size-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -top-6 -left-3 sm:-left-6 glass rounded-2xl px-5 py-4 backdrop-blur-xl"
            >
              <img src={MARK} alt="" className="h-10 w-auto object-contain mb-2" />
              <div className="text-[10px] uppercase tracking-[0.2em] text-sun">Since day one</div>
              <div className="text-sm font-medium">Water is life.</div>
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div className="space-y-8 lg:pl-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.3em] text-sun mb-6 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-sun" />
                Who we are
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.02em] text-balance"
              >
                Building trust.<br />
                <em className="italic shimmer-text">Delivering life.</em>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              Trust Borehole and Solar is a Zimbabwean water and energy company based in Harare. We take
              a site from the very first geological survey through to a running tap — drilling, developing,
              tanking and powering every borehole we sink.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl border border-white/10 bg-card/60 p-6 sm:p-7"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-sun mb-3">Our vision</div>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                To become Zimbabwe's most trusted borehole drilling and solar solutions company by providing
                reliable, affordable, and sustainable water and energy services that improve lives, empower
                communities, and support development across Africa.
              </p>
            </motion.blockquote>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-card/40 p-5 hover:border-sun/40 transition-colors"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl glass text-sun group-hover:bg-sun group-hover:text-primary-foreground transition-all">
                    <v.icon className="size-4" />
                  </div>
                  <div>
                    <div className="font-medium">{v.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{v.line}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm"
            >
              <span className="flex items-center gap-2"><Droplets className="size-4 text-water" /> Water is life.</span>
              <span className="flex items-center gap-2"><Sun className="size-4 text-sun" /> Solar is power.</span>
              <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-water" /> Trust is our name.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Droplets, title: "Borehole Drilling", desc: "Clean, reliable water at your doorstep. Full drilling, casing and capping with modern rigs.", img: img.crew },
    { icon: Sun, title: "Solar Installation", desc: "Powering your future — from cabin kits to whole-home off-grid solar with battery backup.", img: img.solarArray },
    { icon: Gauge, title: "Solar Pump Systems", desc: "Efficient. Sustainable. Reliable. Solar, submersible and surface pumps sized right for your borehole.", img: img.bindura },
    { icon: Waves, title: "Tanks & Water Storage", desc: "Durable, UV-resistant tanks from 1,000L to 10,000L, plus stands, plumbing and installation.", img: img.twinTanks },
    { icon: Search, title: "Borehole Survey", desc: "Geological water surveys from $80. Know exactly where the water is before you drill.", img: img.hiluxTech },
    { icon: Wrench, title: "Maintenance & Support", desc: "We've got you covered — quick-response repairs, servicing and after-sales support.", img: img.equipment },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Six services. One promise."
          subtitle="End-to-end water and power infrastructure built for Zimbabwean homes, farms, schools and businesses."
        />

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon, title, desc, img: src, index,
}: { icon: any; title: string; desc: string; img: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.22, 1.02, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden bg-card border border-white/5 aspect-[4/5] flex flex-col justify-between"
    >
      <motion.img
        src={src}
        alt={title}
        loading="lazy"
        style={{ scale, y }}
        className="absolute inset-0 size-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sun/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative p-7 sm:p-8">
        <div className="inline-flex size-12 items-center justify-center rounded-2xl glass text-sun group-hover:bg-sun group-hover:text-primary-foreground transition-all">
          <Icon className="size-5" />
        </div>
      </div>
      <div className="relative p-7 sm:p-8 space-y-3">
        <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-none">{title}</h3>
        <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">{desc}</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-sun pt-1 hover:gap-3 transition-all"
        >
          <span>Enquire now</span>
          <ArrowUpRight className="size-4" />
        </a>
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
        className="font-display text-4xl sm:text-5xl md:text-7xl font-light tracking-[-0.02em] text-balance"
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
    <section className="relative py-16 md:py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden bg-water-grad shadow-deep"
        >
          <img src={img.wip} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-water-deep via-water-deep/85 to-water-deep/40" />

          <div className="relative p-8 sm:p-10 md:p-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-sun mb-4">Limited promotion</div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-7xl font-light leading-[0.95]">
                Borehole<br />
                <span className="italic shimmer-text">drilling.</span>
              </h3>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground">from</span>
                <span className="font-display text-6xl sm:text-7xl text-sun">$500</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                + Survey from <span className="text-foreground font-medium">$80</span> · Final price confirmed after your site survey.
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 text-sm font-medium text-primary-foreground hover:scale-[1.03] transition-transform"
              >
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

/* ---------------- PROCESS — the real 5-step service flow ---------------- */
function Process() {
  const steps = [
    { n: "01", icon: Search, title: "Borehole Survey", desc: "A geological water survey pinpoints the best drilling spot on your land — before a single hole is sunk." },
    { n: "02", icon: Hammer, title: "Borehole Drilling", desc: "Modern rigs reach the water-bearing aquifer, then the hole is cased and capped to standard." },
    { n: "03", icon: Droplets, title: "Borehole Development", desc: "The borehole is flushed and developed until it runs clean, then yield-tested so you know exactly what you have." },
    { n: "04", icon: Container, title: "Tank & Solar Installation", desc: "Tank, stand, solar panels and pump installed and plumbed — your system commissioned end to end." },
    { n: "05", icon: GlassWater, title: "Complete Water Solution", desc: "Clean water at the tap, powered by the sun — backed by our servicing and after-sales support." },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How we work"
          title="From borehole survey to installation."
          subtitle="We bring water to your life — five steps, one team, no hand-offs."
        />

        <div className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative pt-8 border-t border-white/10 hover:border-sun transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tight text-xs text-sun">{s.n}</span>
                <s.icon className="size-4 text-muted-foreground group-hover:text-sun transition-colors" />
              </div>
              <h3 className="font-display text-2xl mb-3 leading-tight">{s.title}</h3>
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
    { url: img.crew, span: "md:col-span-2 md:row-span-2", label: "Our crew on site" },
    { url: img.tankSunset, span: "", label: "Tank stand, commissioned" },
    { url: img.bindura, span: "", label: "Solar powered borehole · Bindura" },
    { url: img.wip, span: "md:col-span-2", label: "Work in progress · Sandton, Hampden" },
    { url: img.twinTanks, span: "", label: "Twin 5,000L tanks" },
    { url: img.hilux, span: "", label: "On the road" },
    { url: img.solarArray, span: "", label: "Solar array & pump install" },
    { url: img.equipment, span: "", label: "Inverter & controller kit" },
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="In the field" title="Work that speaks for itself." />

        <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {imgs.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.7 }}
              className={`group relative rounded-2xl overflow-hidden ${it.span}`}
            >
              <img
                src={it.url}
                alt={it.label}
                loading="lazy"
                className="absolute inset-0 size-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 text-xs sm:text-sm font-display translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {it.label}
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
    {
      name: "Borehole Survey",
      price: "from $80",
      desc: "Geological water survey — know before you drill.",
      features: ["Full site assessment", "Aquifer depth report", "Drilling recommendation"],
      cta: "Book a survey",
    },
    {
      name: "Borehole Drilling",
      price: "from $500",
      desc: "Full drilling, casing and capping. Our most requested package.",
      features: ["Modern rig drilling", "Casing & capping", "Borehole development", "Workmanship guarantee"],
      cta: "Get started",
      featured: true,
    },
    {
      name: "Tanks & Storage",
      price: "from $120",
      desc: "Durable, UV-resistant water storage tanks.",
      features: ["1,000L · $120", "2,500L · $170", "5,000L · $330", "10,000L · $900"],
      cta: "Order a tank",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Honest pricing"
          title="No surprises. Just trust."
          subtitle="Starting rates on our most-requested services. Solar, pump and installation packages are quoted after your site survey."
        />

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`relative rounded-3xl p-8 border flex flex-col ${
                t.featured ? "bg-sun text-primary-foreground border-sun shadow-glow md:scale-105" : "bg-card border-white/10"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-ink text-paper text-xs uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t.name}
              </div>
              <div className="mt-4 font-display text-4xl sm:text-5xl font-light">{t.price}</div>
              <p className={`mt-3 text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`size-4 shrink-0 ${t.featured ? "text-primary-foreground" : "text-sun"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                  t.featured ? "bg-ink text-paper hover:bg-ink/80" : "bg-foreground text-background hover:scale-[1.02]"
                }`}
              >
                {t.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Prices in USD and subject to site conditions, depth and distance. Contact us for an exact quote.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-hero p-10 sm:p-12 md:p-20 text-center shadow-deep"
        >
          <img src={img.tankSunset} alt="" aria-hidden loading="lazy" className="absolute inset-0 size-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/70 via-ink/60 to-water-deep/60" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[400px] rounded-full bg-sun/20 blur-3xl" />

          <div className="relative max-w-3xl mx-auto space-y-8">
            <img src={MARK} alt="" className="h-14 w-auto object-contain mx-auto" />
            <div className="text-xs uppercase tracking-[0.3em] text-sun">Let's begin</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light leading-[0.95] text-balance">
              Water is life.<br />
              <em className="italic shimmer-text">Solar is power.</em>
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 text-base font-semibold text-[#05291a] hover:scale-[1.03] transition-transform"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp us
              </a>
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-sun px-8 py-5 text-base font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                <Phone className="size-4" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-5 text-sm hover:text-sun transition-colors"
              >
                <Mail className="size-4" />
                Email us
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-muted-foreground pt-4">
              <span className="flex items-center gap-2"><MapPin className="size-3.5" /> {ADDRESS}</span>
              <span className="flex items-center gap-2"><Mail className="size-3.5" /> {EMAIL}</span>
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
    <footer className="relative border-t border-white/5 pt-16 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10 md:gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={MARK} alt="Trust Borehole and Solar" className="h-12 w-auto object-contain" />
            <div>
              <div className="font-display text-2xl">Trust</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Borehole <span className="text-water">and</span> <span className="text-sun">Solar</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Water is life. Solar is power. Trust is our name. Delivering sustainable water and energy
            solutions you can trust — across Zimbabwe and beyond.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-10 place-items-center rounded-full glass hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a href={PHONE_HREF} aria-label="Call us" className="grid size-10 place-items-center rounded-full glass hover:text-sun transition-colors">
              <Phone className="size-4" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email us" className="grid size-10 place-items-center rounded-full glass hover:text-sun transition-colors">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Services</div>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="#services" className="hover:text-sun transition-colors">Borehole survey</a></li>
            <li><a href="#services" className="hover:text-sun transition-colors">Borehole drilling</a></li>
            <li><a href="#services" className="hover:text-sun transition-colors">Solar installation</a></li>
            <li><a href="#services" className="hover:text-sun transition-colors">Solar pump systems</a></li>
            <li><a href="#services" className="hover:text-sun transition-colors">Tanks & water storage</a></li>
            <li><a href="#services" className="hover:text-sun transition-colors">Maintenance & support</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href={PHONE_HREF} className="hover:text-sun transition-colors">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-sun transition-colors break-all">{EMAIL}</a></li>
            <li className="text-muted-foreground">{ADDRESS}</li>
            <li className="text-muted-foreground">Mon–Sat · 7am–6pm</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Trust Borehole and Solar. All rights reserved.</div>
      </div>

      {/* Developer credit */}
      <div className="mx-auto max-w-7xl mt-6 pb-28 sm:pb-12 text-center space-y-1">
        <div className="text-sm font-mono-tight text-muted-foreground">
          Powered by{" "}
          <a
            href={DEV_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "orangered" }}
          >
            Digits Digital
          </a>
        </div>
        <div>
          <a
            href="https://www.digitsdigital.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono-tight text-muted-foreground/70 hover:text-sun transition-colors"
          >
            www.digitsdigital.co.zw
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =================================================================
   FLOATING WHATSAPP + "we're online" chat popup
   ================================================================= */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);
  const [showNudge, setShowNudge] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [message, setMessage] = useState("");

  // Nudge bubble first, then the greeting auto-opens once
  useEffect(() => {
    if (dismissed || greeted) return;
    const nudge = setTimeout(() => setShowNudge(true), 2800);
    const greet = setTimeout(() => {
      setShowNudge(false);
      setOpen(true);
      setGreeted(true);
    }, 6500);
    return () => { clearTimeout(nudge); clearTimeout(greet); };
  }, [dismissed, greeted]);

  // "typing…" beat before the greeting lands
  useEffect(() => {
    if (!open) return;
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 1400);
    return () => clearTimeout(t);
  }, [open]);

  // Auto-collapse the unprompted greeting so it never sits on top of the page
  useEffect(() => {
    if (!open || !greeted || dismissed) return;
    const t = setTimeout(() => setOpen(false), 11000);
    return () => clearTimeout(t);
  }, [open, greeted, dismissed]);

  const send = (text?: string) => {
    const body = (text ?? message).trim();
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      body || decodeURIComponent(WA_TEXT),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const quick = [
    "I need a borehole drilled 💧",
    "How much for a solar pump? ☀️",
    "I want a water tank 🛢️",
    "Book me a site survey 📍",
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 print:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-panel"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-[min(34rem,68svh)] w-[min(21rem,calc(100vw-2.5rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-white/10 bg-card shadow-deep"
          >
            {/* Header */}
            <div className="relative shrink-0 bg-[#075E54] px-5 py-4 flex items-center gap-3">
              <div className="absolute inset-0 bg-gradient-to-r from-[#075E54] to-[#128C7E]" />
              <div className="relative shrink-0">
                <div className="grid size-11 place-items-center rounded-full bg-white/95 overflow-hidden">
                  <img src={MARK} alt="" className="size-8 object-contain" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-[#25D366] ring-2 ring-[#075E54]" />
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="text-sm font-semibold text-white truncate">Trust Borehole & Solar</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/85">
                  <span className="size-1.5 rounded-full bg-[#25D366]" />
                  Online now · typically replies in minutes
                </div>
              </div>
              <button
                type="button"
                onClick={() => { setOpen(false); setDismissed(true); }}
                aria-label="Close chat"
                className="relative grid size-8 shrink-0 place-items-center rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Conversation */}
            <div className="relative flex-1 overflow-y-auto px-4 py-5 space-y-3 bg-[oklch(0.2_0.03_150)]">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="relative text-center">
                <span className="inline-block rounded-full bg-black/25 px-3 py-1 text-[10px] uppercase tracking-wider text-white/50">
                  Today
                </span>
              </div>

              <AnimatePresence mode="wait">
                {typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative flex items-center gap-1.5 w-fit rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3"
                  >
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="size-1.5 rounded-full bg-white/70 typing-dot"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="msg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative space-y-2"
                  >
                    <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm text-white/90 leading-relaxed">
                      Hi there 👋 Welcome to <strong className="font-semibold">Trust Borehole &amp; Solar</strong>.
                    </div>
                    <div className="w-fit max-w-[90%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3 text-sm text-white/90 leading-relaxed">
                      Need clean water or reliable solar power? Tell us what you need and we'll send you a
                      free quote today — no obligation. 💧☀️
                      <span className="mt-1 block text-[10px] text-white/40">
                        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick replies */}
              {!typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative flex flex-wrap gap-2 pt-1"
                >
                  {quick.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-1.5 text-[11px] text-[#a7f3c8] hover:bg-[#25D366]/20 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex shrink-0 items-center gap-2 border-t border-white/10 bg-card p-3"
            >
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message…"
                aria-label="Message"
                className="min-w-0 flex-1 rounded-full bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-[#25D366]"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="grid size-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-[#05291a] hover:scale-105 transition-transform"
              >
                <WhatsAppIcon className="size-[18px]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nudge bubble before the panel opens */}
      <AnimatePresence>
        {!open && showNudge && (
          <motion.button
            key="nudge"
            type="button"
            onClick={() => { setShowNudge(false); setOpen(true); setGreeted(true); }}
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[15rem] rounded-2xl rounded-br-sm border border-white/10 bg-card px-4 py-3 text-left text-xs leading-relaxed shadow-deep"
          >
            <span className="mb-1 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#25D366]">
              <span className="size-1.5 rounded-full bg-[#25D366]" /> We're online
            </span>
            Chat with us — free quote in minutes 💧
          </motion.button>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className="relative grid size-14 sm:size-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] wa-pulse" />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative">
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} className="relative">
              <WhatsAppIcon className="size-7 sm:size-8" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-sun text-[10px] font-bold text-ink ring-2 ring-ink">
            1
          </span>
        )}
      </button>
    </div>
  );
}
