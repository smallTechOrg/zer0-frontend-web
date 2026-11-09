/* Copy for the Zer0 umbrella homepage (zer0.smalltech.in).
   Source: SMA-8 brief (draft messaging). Lines marked "draft" were written for
   this page and still need the owner's review. Voice: calm, confident, practical. */

export const CONTACT_EMAIL = "contact@smalltech.in";
export const TRAINING_URL = "https://smalltech.in/#training";

export const hero = {
  eyebrow: "Zer0 by smallTech",
  titleLead: "Your business, rewired for the",
  titleAccent: "agentic age.",
  oneLiner: "Operationalising agentic AI for small businesses.",
  body:
    "Classical business workflows were designed for people passing work between inboxes and spreadsheets. In the agentic age, agents do the repetitive steps and people make the calls. Zer0 redesigns a small business's workflows around that split — agents that run the work end to end, with a human approval gate wherever it matters, and an audit trail.",
};

/* Illustrative run shown beside the hero (draft). */
export const sampleRun: { who: "Agent" | "You"; step: string }[] = [
  { who: "Agent", step: "Reads the new enquiry and pulls the customer's history" },
  { who: "Agent", step: "Drafts a reply and a quote" },
  { who: "You", step: "Approve, edit or reject" },
  { who: "Agent", step: "Sends it, updates the sheet, logs every step" },
];

/* "The agentic age" comparison (draft). */
export const comparison = {
  classical: {
    title: "Classical workflow",
    points: [
      "People move data between inboxes, spreadsheets and tools by hand",
      "Every hand-off waits for someone to notice it",
      "Routine steps and real decisions sit in the same queue",
      "The record of what happened lives in people's heads",
    ],
  },
  agentic: {
    title: "Agentic workflow",
    points: [
      "Agents run the repetitive steps end to end",
      "People make the calls at clearly marked approval gates",
      "Work moves as soon as it is ready, not when someone is free",
      "Every action is written to an audit trail you can read",
    ],
  },
};

/* How it works — step titles from the brief; descriptions are draft. */
export const steps = [
  {
    title: "Map a workflow",
    body: "We sit with you and trace one workflow as it runs today: who touches it, which steps repeat, and where a decision is needed.",
  },
  {
    title: "Deploy an agent with human gates",
    body: "An agent takes over the repetitive steps. Wherever money, customers or judgement are involved, it stops and waits for your approval.",
  },
  {
    title: "Run it, measure it",
    body: "The agent runs in your day-to-day work. You review the audit trail and the results, and we tune it before moving to the next workflow.",
  },
];

export type Product = {
  title: string;
  description: string;
  url: string;
  cta: string;
  altUrl?: string;
  altCta?: string;
  featured?: boolean;
  points?: string[];
};

export const products: Product[] = [
  {
    title: "Zer0 Sales Agent",
    featured: true,
    description:
      "Autonomous top-of-funnel: finds, researches and qualifies prospects, drafts outreach, hands you the warm conversation.",
    points: [
      "Finds and researches prospects",
      "Qualifies them before you spend time",
      "Drafts outreach",
      "Hands you the warm conversation",
    ],
    url: "https://sales0.smalltech.in",
    cta: "Visit sales0.smalltech.in",
  },
  {
    title: "Zer0 Inbox Agent",
    description:
      "Inbox triage you can audit — collapses hundreds of threads into ~30 decisions, never deletes anything.",
    url: "https://github.com/smallTechOrg/zero-inbox-agent",
    cta: "View on GitHub",
  },
  {
    title: "Zer0 Data Analyst",
    description:
      "Your data, asked in English — upload a spreadsheet, get explainable answers with charts.",
    url: "https://data-analysis-agent-870371939888.us-central1.run.app/app/",
    cta: "Try it",
    altUrl: "https://github.com/smallTechOrg/data-analysis-agent",
    altCta: "Source",
  },
  {
    title: "Vanguard by Zer0",
    description:
      "AI-first security audits with approval gates, evidence capture and immutable audit logs.",
    url: "https://github.com/smallTechOrg/ai-security-agency",
    cta: "View on GitHub",
  },
];

/* Principles — titles from the brief; descriptions are draft. */
export const principles = [
  {
    title: "Human approval at every gate",
    body: "Agents prepare the work. Anything that matters waits for a person to say yes.",
  },
  {
    title: "Audit everything",
    body: "Every step an agent takes is recorded, so you can see what it did and why.",
  },
  {
    title: "Start with one workflow",
    body: "One workflow, done properly, before the next. No big-bang transformation.",
  },
  {
    title: "Priced for small businesses",
    body: "Built and priced for teams without an IT department or an enterprise budget.",
  },
];

/* Closing band (draft). */
export const closing = {
  title: "Start with one workflow.",
  body: "Tell us which workflow takes up most of your week. We will map it with you and show where an agent fits.",
};
