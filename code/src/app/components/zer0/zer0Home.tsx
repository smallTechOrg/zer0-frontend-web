"use client";

/* Zer0 umbrella homepage (zer0.smalltech.in).
   Mirrors the smallTech brand reference (smalltech-frontend-web landingPro.tsx):
   same tokens, header, buttons, cards, dark panel and section heads. */

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import {
  CONTACT_EMAIL,
  TRAINING_URL,
  hero,
  sampleRun,
  comparison,
  steps,
  products,
  upcoming,
  principles,
  closing,
  type Product,
} from "./content";

const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

/* Open the Zer0 chat widget if it has loaded on this page, else fall back to email. */
const openChat = () => {
  const widget = document.querySelector('iframe[src*="/embed"]');
  if (widget) {
    window.dispatchEvent(
      new CustomEvent("open-chat-widget", { detail: { message: "Hi, I'd like to talk about a workflow." } })
    );
  } else {
    window.location.href = mailto("Zer0 enquiry");
  }
};

const NAV = [
  { label: "Products", href: "#products" },
  { label: "Why Zer0", href: "#why-zer0" },
  { label: "Contact", href: "#contact" },
];

const navLink =
  "relative text-[15px] font-[600] text-muted hover:text-ink transition-colors " +
  "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-ink " +
  "after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300";

const btnPrimary =
  "ga-cta inline-flex items-center justify-center gap-2 rounded-[6px] bg-gold text-ink text-[15px] font-[600] px-6 py-3 hover:bg-gold-60 transition-colors cursor-pointer";
const btnSecondary =
  "ga-cta inline-flex items-center justify-center rounded-[6px] border border-ink text-ink text-[15px] font-[600] px-6 py-3 hover:bg-surface transition-colors";
const btnSecondaryDark =
  "ga-cta inline-flex items-center justify-center rounded-[6px] border border-ink-line text-readme text-[15px] font-[600] px-6 py-3 hover:border-ink-muted transition-colors";

export default function Zer0Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="zer0-brand min-h-screen bg-readme text-ink overflow-x-hidden">
      {/* Zer0 chat widget (same embed the site has always loaded) */}
      <Script
        src="/embed.js"
        data-chat-url="/embed"
        data-colour="#1C1B18"
        data-tagline="Talk to us"
        strategy="lazyOnload"
      />

      {/* ===== HEADER ===== */}
      <header
        className={`sticky top-0 z-50 bg-readme border-b transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div
          className={`max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-[4%] transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a href="#home" className="shrink-0" aria-label="Zer0 home">
            <Wordmark />
          </a>

          <div className="flex items-center gap-9">
            <nav className="hidden md:flex items-center gap-9">
              {NAV.map((item) => (
                <a key={item.label} href={item.href} className={navLink}>
                  {item.label}
                </a>
              ))}
            </nav>
            <button onClick={openChat} className={`${btnPrimary} !px-5 !py-2.5`}>
              Talk to us
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-[4%]">
        {/* ===== HERO ===== */}
        <section id="home" className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center pt-12 md:pt-20 pb-16">
          <div className="flex flex-col">
            <p className="label mb-4">{hero.eyebrow}</p>
            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] font-[700] leading-[1.1] tracking-[-0.02em] text-ink mb-5">
              {hero.titleLead}{" "}
              {/* Gradient along the Gold Master scale (70 -> 50). Display size only. */}
              <span className="bg-[linear-gradient(90deg,var(--color-gold-70),var(--color-gold))] bg-clip-text text-transparent">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="text-ink text-[18px] md:text-[20px] font-[600] leading-[1.3] mb-4">
              {hero.oneLiner}
            </p>
            <p className="text-[16px] md:text-[17px] font-[400] leading-[1.6] text-muted max-w-xl mb-8">
              {hero.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={openChat} className={btnPrimary}>
                Talk to us
              </button>
              <a href="#products" className={btnSecondary}>
                See the products
              </a>
            </div>
          </div>

          {/* A workflow, the agentic way — illustrative */}
          <div className="surface-inverse rounded-[16px] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[13px] font-[600] uppercase tracking-[0.18em] text-ink-muted">
                One workflow, agentic
              </span>
              <span className="text-[12px] font-[600] text-gold">Example</span>
            </div>
            <ol className="flex flex-col">
              {sampleRun.map((r, i) => {
                const human = r.who === "You";
                return (
                  <li key={r.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`grid place-items-center w-8 h-8 rounded-full text-[12px] font-[700] shrink-0 ${
                          human ? "bg-gold text-ink" : "border border-ink-line text-readme"
                        }`}
                      >
                        {i + 1}
                      </span>
                      {i < sampleRun.length - 1 && <span className="w-px flex-1 bg-ink-line my-1" />}
                    </div>
                    <div className={`pb-5 ${i === sampleRun.length - 1 ? "pb-0" : ""}`}>
                      <span
                        className={`block text-[11px] font-[700] tracking-[1.5px] uppercase mb-1 ${
                          human ? "text-gold" : "text-ink-muted"
                        }`}
                      >
                        {human ? "You · approval gate" : "Agent"}
                      </span>
                      <span className="block text-readme text-[15px] font-[500] leading-[1.45]">{r.step}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-6 pt-5 border-t border-ink-line text-ink-muted text-[13px] font-[400]">
              Every step is written to the audit trail.
            </div>
          </div>
        </section>

        {/* ===== PRODUCTS ===== */}
        <section id="products" className="py-16 scroll-mt-20">
          <SectionHead
            eyebrow="Products"
            title="The Zer0 suite"
            sub="One OS, many agents. Each with approval gates and an audit trail."
          />
          <div className="grid md:grid-cols-4 gap-4">
            {products.map((p) =>
              p.featured ? <FeatureTile key={p.title} product={p} /> : <SmallTile key={p.title} product={p} />
            )}
          </div>

          {/* Coming next */}
          <div className="mt-4 rounded-[16px] border border-dashed border-line p-6">
            <span className="block text-muted text-[11px] font-[700] tracking-[1.5px] uppercase mb-4">Coming next</span>
            <div className="grid sm:grid-cols-3 gap-4">
              {upcoming.map((u) => (
                <div key={u.title}>
                  <strong className="block text-ink text-[17px] font-[700] mb-1">{u.title}</strong>
                  <span className="text-muted text-[14px] font-[400] leading-[1.5]">{u.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY ZER0 (agentic age + how it works + principles) ===== */}
        <section id="why-zer0" className="py-16 scroll-mt-20">
          <SectionHead
            eyebrow="Why Zer0"
            title="The same work, split differently"
            sub="Agents take the repetitive steps. People keep the decisions."
          />
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-4">
            {/* Classical vs Zer0, row by row */}
            <div className="rounded-[16px] overflow-hidden border border-line grid grid-cols-2">
              <div className="bg-surface p-5 md:p-6">
                <h3 className="text-muted text-[12px] font-[700] tracking-[1.5px] uppercase mb-4">{comparison.classical.title}</h3>
                <ul className="space-y-3">
                  {comparison.classical.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-muted text-[14px] font-[400] leading-[1.45]">
                      <span className="text-line font-[700]">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-inverse p-5 md:p-6">
                <h3 className="text-gold text-[12px] font-[700] tracking-[1.5px] uppercase mb-4">{comparison.agentic.title}</h3>
                <ul className="space-y-3">
                  {comparison.agentic.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-readme text-[14px] font-[500] leading-[1.45]">
                      <span className="text-gold font-[700]">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How it works: Map, Ship, Run */}
            <div className="rounded-[16px] bg-surface border border-line p-5 md:p-6 flex flex-col">
              <h3 className="text-muted text-[12px] font-[700] tracking-[1.5px] uppercase mb-4">How it works</h3>
              <ol className="space-y-4">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-3.5 items-baseline">
                    <span className="text-gold-70 text-[13px] font-[700] tracking-[0.1em] w-5 shrink-0">{i + 1}</span>
                    <span className="text-muted text-[14px] font-[400] leading-[1.45]">
                      <strong className="text-ink text-[16px] font-[700] mr-2">{s.title}</strong>
                      {s.body}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Principles: one tight strip */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-[16px] overflow-hidden border border-line bg-line">
            {principles.map((p) => (
              <div key={p.title} className="bg-readme p-5">
                <strong className="block text-ink text-[15px] font-[700] leading-[1.3] mb-1">{p.title}</strong>
                <span className="text-muted text-[13px] font-[400] leading-[1.5]">{p.body}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA BAND ===== */}
        <section id="contact" className="py-16 scroll-mt-20">
          <div className="surface-inverse rounded-[16px] p-7 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-readme text-[30px] md:text-[38px] font-[700] leading-tight mb-3">{closing.title}</h2>
              <p className="text-ink-muted text-[16px] font-[400] leading-[1.6]">{closing.body}</p>
              <p className="text-ink-muted text-[14px] font-[400] leading-[1.6] mt-4">
                AI training for your team is run by smallTech at{" "}
                <a href={TRAINING_URL} className="text-gold font-[600] hover:underline underline-offset-4">
                  smalltech.in
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button onClick={openChat} className={btnPrimary}>
                Talk to us
              </button>
              <a href={mailto("Zer0 enquiry")} className={btnSecondaryDark}>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-line mt-8">
        <div className="max-w-[1200px] mx-auto px-[4%] py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-[14px] font-[400] text-ink">
          <div className="flex items-center gap-3">
            <Wordmark />
            <span className="text-muted text-[14px] font-[500]">by</span>
            <a href="https://smalltech.in" aria-label="smallTech">
              {/* Supplied lockup — never retype. h-9 renders ~163px wide (min 120px). */}
              <Image src="/logo-smalltech.svg" alt="smallTech" width={416} height={92} className="h-9 w-auto" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#products" className="hover:underline">products</a>
              <a href={TRAINING_URL} className="hover:underline">training</a>
              <a href="https://github.com/smallTechOrg" target="_blank" rel="noreferrer" className="hover:underline">github</a>
              <a href={mailto("Zer0 enquiry")} className="hover:underline">contact</a>
              <a href="https://www.linkedin.com/company/madhyamakist" target="_blank" rel="noreferrer" className="hover:underline">linkedin</a>
            </div>
            <span className="text-muted">© 2026 madhyamakist pvt ltd</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------ partials */

function FeatureTile({ product }: { product: Product }) {
  return (
    <div className="md:col-span-2 md:row-span-3 surface-inverse rounded-[16px] p-7 md:p-8 flex flex-col justify-between">
      <div>
        <span className="inline-block text-[10px] font-[700] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full text-gold border border-ink-line">
          Featured
        </span>
        <h3 className="text-readme text-[26px] md:text-[30px] font-[700] leading-tight mt-6 mb-3">{product.title}</h3>
        <p className="text-ink-muted text-[15px] font-[400] leading-[1.6]">{product.description}</p>
        {product.points && (
          <ul className="mt-6 space-y-2 border-t border-ink-line pt-6">
            {product.points.map((pt) => (
              <li key={pt} className="text-ink-muted text-[14px] font-[400] flex gap-2.5">
                <span className="text-gold font-[700]">›</span>
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8">
        <a href={product.url ?? "#"} target="_blank" rel="noreferrer" className={`group ${btnPrimary}`}>
          {product.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}

function SmallTile({ product }: { product: Product }) {
  return (
    <div className="md:col-span-2 rounded-[16px] p-6 flex flex-col bg-surface border border-line hover:border-ink-line transition-colors">
      <h3 className="text-ink text-[19px] font-[700] leading-tight mb-2">{product.title}</h3>
      <p className="text-muted text-[14px] font-[400] leading-[1.6] mb-4">{product.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-4">
        {product.url && (
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="text-ink text-[14px] font-[600] underline decoration-line decoration-2 underline-offset-4 hover:decoration-ink"
          >
            {product.cta} →
          </a>
        )}
        {product.altUrl && (
          <a href={product.altUrl} target="_blank" rel="noreferrer" className="text-muted text-[14px] font-[500] hover:underline">
            {product.altCta}
          </a>
        )}
      </div>
    </div>
  );
}

/** 0-line wordmark (same pattern as blog0): name in ink, the 0 in Gold Master.
    Used in both header and footer so they always match. */
function Wordmark() {
  return (
    <span className="text-ink text-[26px] md:text-[28px] font-[700] leading-none tracking-[-0.01em]">
      Zer<span className="text-gold">0</span>
    </span>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mb-8">
      <p className="label mb-2">{eyebrow}</p>
      <h2 className="text-ink text-[28px] md:text-[36px] font-[700] leading-[1.2] tracking-[-0.01em]">{title}</h2>
      <p className="text-muted text-[16px] md:text-[17px] font-[400] leading-[1.6] mt-2">{sub}</p>
    </div>
  );
}
