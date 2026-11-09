/* Copy for the Zer0 umbrella homepage (zer0.smalltech.in).
   Source: SMA-8 brief (draft messaging). Lines marked "draft" were written for
   this page and still need the owner's review. Voice: brief, confident, product-led. */

export const CONTACT_EMAIL = "contact@smalltech.in";
export const TRAINING_URL = "https://smalltech.in/#training";

export const hero = {
  eyebrow: "Zer0 by smallTech",
  titleLead: "The multi-agent OS for",
  titleAccent: "small businesses.",
  oneLiner: "Agents do the busywork. You make the calls.",
  body:
    "Zer0 runs your sales, workshops, data and cloud on agents that work end to end, with approval gates where it matters and an audit trail for everything.",
};

/* Illustrative run shown beside the hero. */
export const sampleRun: { who: "Agent" | "You"; step: string }[] = [
  { who: "Agent", step: "Reads the enquiry, pulls the history" },
  { who: "Agent", step: "Drafts the reply and quote" },
  { who: "You", step: "Approve, edit or reject" },
  { who: "Agent", step: "Sends, logs, follows up" },
];

export const comparison = {
  classical: {
    title: "Classical workflow",
    points: [
      "Copy-paste between tools",
      "Hand-offs wait on people",
      "Busywork and decisions in one queue",
      "History lives in people's heads",
    ],
  },
  agentic: {
    title: "Zer0 workflow",
    points: [
      "Agents run the steps end to end",
      "You approve at clear gates",
      "Work moves the moment it's ready",
      "Every action logged",
    ],
  },
};

export const steps = [
  { title: "Map", body: "Pick one workflow. Find the busywork." },
  { title: "Ship", body: "Deploy an agent with approval gates." },
  { title: "Run", body: "Measure, tune, then take on the next workflow." },
];

export type Product = {
  title: string;
  description: string;
  url?: string;
  cta?: string;
  altUrl?: string;
  altCta?: string;
  featured?: boolean;
  points?: string[];
};

export const products: Product[] = [
  {
    title: "sales0",
    featured: true,
    description: "Your sales team's autopilot. From buyer intent to booked follow-up.",
    points: [
      "Finds buyer enquiries",
      "Keeps the CRM current",
      "Drafts outreach you approve",
      "Follows up on schedule",
    ],
    url: "https://sales0.smalltech.in",
    cta: "Visit sales0",
  },
  {
    title: "workshop0",
    description: "Hands-on workshops, run live. Milestones, one-tap join, a real-time room dashboard.",
    url: "https://github.com/smallTechOrg/workshop0",
    cta: "View on GitHub",
  },
  {
    title: "data0",
    description: "Ask your data anything. Plain-English answers, with charts.",
  },
  {
    title: "cloud0",
    description: "Cloud spend and errors, under control. Billing reports, alerts, error tracking.",
    url: "https://github.com/smallTechOrg/cloud0",
    cta: "View on GitHub",
  },
  {
    title: "zero-shot-harness",
    description: "Claude Code skills that ship. One-line idea in, tested project out.",
    url: "https://github.com/smallTechOrg/zero-shot-harness",
    cta: "View on GitHub",
  },
];

/* Coming next — one-liners drafted from each repo's description. */
export const upcoming: { title: string; description: string }[] = [
  { title: "inbox0", description: "Every inbox, triaged. Email, WhatsApp, Instagram, LinkedIn." },
  { title: "recruiter0", description: "Hiring on autopilot. Sourcing to shortlist." },
  { title: "router0", description: "Free-tier inference, pooled across providers." },
];

export const principles = [
  { title: "Human in the loop", body: "Agents prep. You approve." },
  { title: "Audit everything", body: "Every step logged. Nothing hidden." },
  { title: "One workflow first", body: "Prove it, then scale." },
  { title: "Small-business pricing", body: "No enterprise budget required." },
];

export const closing = {
  title: "Start with one workflow.",
  body: "Tell us what eats your week. We'll show you the agent for it.",
};
