/**
 * Central content + configuration for the Blocly marketing site.
 * Homepage copy mirrors the live Blocly one-page site (Web2 + Web3 PR & link building).
 * Inner-page copy is original, brand-consistent content.
 */

import type { IconName } from "@/components/ui/icon";

export const site = {
  name: "Blocly",
  domain: "blocly.co",
  email: "sam@blocly.co",
  tagline: "Your market is waiting. We place the links.",
  description:
    "Blocly places premium editorial links and runs GEO-targeted PR campaigns for high-growth Web2 and Web3 brands. From Forbes to Cointelegraph — we own the channels that move markets.",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

/** Publication logos that scroll in the hero marquee. */
export const publications: string[] = [
  "Forbes",
  "Bloomberg",
  "TechCrunch",
  "Cointelegraph",
  "Decrypt",
  "The Block",
  "BeInCrypto",
  "CryptoSlate",
  "Benzinga",
  "Nasdaq.com",
  "Yahoo Finance",
  "CoinDesk",
  "Entrepreneur",
  "Business Insider",
];

export type Service = {
  num: string;
  slug: string;
  name: string;
  icon: IconName;
  description: string;
  longDescription: string;
  tags: string[];
  deliverables: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    num: "01",
    slug: "guest-post-placements",
    name: "Guest Post Placements",
    icon: "pen",
    description:
      "Do-follow links in genuine editorial content on DA 50–90+ publications. Full anchor control, no PBNs, no advertorial tags.",
    longDescription:
      "We secure do-follow placements inside genuine editorial content — never PBNs, never advertorial-tagged filler. You get full anchor-text control on publications scored DA 50–90+, with each placement reported as a live, indexable URL.",
    tags: ["DA 50–90+", "Do-Follow", "Editorial"],
    deliverables: [
      "Do-follow link on DA 50–90+ publication",
      "Full anchor-text control",
      "Genuine editorial context (no 'sponsored' tag)",
      "Live URL + DA report on delivery",
    ],
    idealFor: "Brands building durable domain authority and high-intent referral traffic.",
  },
  {
    num: "02",
    slug: "crypto-web3-pr",
    name: "Crypto & Web3 PR",
    icon: "bolt",
    description:
      "Placement in the top blockchain media: Cointelegraph, Decrypt, The Block, CoinDesk, BeInCrypto. Token launches to protocol updates.",
    longDescription:
      "From token launches to protocol updates, we place your story in the blockchain media your community actually reads — Cointelegraph, Decrypt, The Block, CoinDesk, BeInCrypto and more — with messaging tuned for crypto-native audiences.",
    tags: ["Cointelegraph", "Decrypt", "The Block"],
    deliverables: [
      "Placement in tier-1 crypto media",
      "Crypto-native angle & messaging",
      "Launch / milestone announcement support",
      "Coverage report with live links",
    ],
    idealFor: "Token launches, mainnet milestones, raises, and protocol announcements.",
  },
  {
    num: "03",
    slug: "mainstream-media-pr",
    name: "Mainstream Media PR",
    icon: "newspaper",
    description:
      "Forbes, Bloomberg, Nasdaq.com, Yahoo Finance, Business Insider. Brand authority at scale for founders and protocols.",
    longDescription:
      "Earn the credibility of mainstream business media. We place founders and protocols in Forbes, Bloomberg, Nasdaq.com, Yahoo Finance and Business Insider — the names that build trust with institutions, partners, and the press that follows them.",
    tags: ["Forbes", "Bloomberg", "Yahoo Finance"],
    deliverables: [
      "Tier-1 mainstream business placement",
      "Founder positioning & thought leadership",
      "Institutional-grade credibility signal",
      "Live URL + reach report",
    ],
    idealFor: "Founders and protocols raising, partnering, or scaling beyond crypto-native audiences.",
  },
  {
    num: "04",
    slug: "long-form-research",
    name: "Long-Form Research",
    icon: "chart",
    description:
      "2,000–8,000 word SEO-first research articles, guides, and deep-dives ghost-written by industry experts. Ranks and converts.",
    longDescription:
      "SEO-first research articles, guides, and deep-dives from 2,000–8,000 words, ghost-written by industry experts. Built to rank for competitive terms and convert the readers who find them.",
    tags: ["2K–8K words", "SEO-first", "Ghost-written"],
    deliverables: [
      "2,000–8,000 word expert-written piece",
      "Keyword & SERP-gap research",
      "On-page SEO + internal linking plan",
      "Editing, fact-check, and revisions",
    ],
    idealFor: "Protocols competing on organic search and educating a complex audience.",
  },
  {
    num: "05",
    slug: "kol-campaigns",
    name: "KOL Campaigns",
    icon: "users",
    description:
      "Key Opinion Leader campaigns on X (Twitter), YouTube, and Telegram. Vetted for real engagement — zero bot audiences.",
    longDescription:
      "Key Opinion Leader campaigns across X (Twitter), YouTube, and Telegram. Every creator is screened for authentic engagement and on-chain activity — zero bot audiences — so you only pay for reach that's real.",
    tags: ["Twitter/X", "YouTube", "Telegram"],
    deliverables: [
      "Vetted KOL shortlist with audience data",
      "Campaign brief & creator coordination",
      "Engagement & reach verification",
      "Per-post performance reporting",
    ],
    idealFor: "Launches and growth pushes that need trusted, crypto-native reach.",
  },
  {
    num: "06",
    slug: "geo-targeted-pr",
    name: "GEO-Targeted PR",
    icon: "globe",
    description:
      "Region-specific campaigns in MENA, APAC, LATAM, Eastern Europe, SEA. Native language, local publishers, regional KOLs.",
    longDescription:
      "We don't just translate — we localize. Region-specific campaigns across MENA, APAC, LATAM, Eastern Europe and SEA, delivered in native language through local publishers and regional KOLs who own the conversation in-market.",
    tags: ["MENA", "APAC", "LATAM"],
    deliverables: [
      "Native-language localization",
      "Regional publisher placements",
      "Local KOL activation",
      "Region-level performance reporting",
    ],
    idealFor: "Brands expanding into high-growth regions that Western campaigns miss.",
  },
];

export type Reason = { num: string; title: string; description: string };

export const reasons: Reason[] = [
  {
    num: "01",
    title: "Guaranteed Placements",
    description:
      "We don't pitch and hope. We have pre-negotiated editorial relationships across 200+ publications. You pay for a live URL, not a maybe.",
  },
  {
    num: "02",
    title: "Web2 + Web3 Fluent",
    description:
      "Most agencies are crypto-only or Web2-only. We operate natively in both ecosystems — same team, same standards, every vertical.",
  },
  {
    num: "03",
    title: "Real Editorial, Not Advertorials",
    description:
      "No 'sponsored' tags, no 'partner content' labels. Our placements are genuine editorial content that passes the credibility test.",
  },
  {
    num: "04",
    title: "GEO Precision",
    description:
      "MENA, APAC, LATAM, SEA — we don't just translate content. We localize it entirely with regional publishers and native KOLs.",
  },
  {
    num: "05",
    title: "Vetted KOL Network",
    description:
      "3,000+ KOLs screened for authentic engagement. Zero bots. We track on-chain activity and cross-check every audience metric before recommending.",
  },
  {
    num: "06",
    title: "Full-Service Execution",
    description:
      "Strategy, ghostwriting, outreach, placement, and reporting — all in-house. You get one point of contact and a full campaign team.",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 2500, suffix: "+", label: "Links Placed" },
  { value: 200, suffix: "+", label: "Tier-1 Publications" },
  { value: 5, suffix: "", label: "Global Regions" },
  { value: 100, suffix: "%", label: "Placement Success Rate" },
];

export type Step = { num: string; title: string; description: string };

export const process: Step[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "We audit your current authority footprint, identify narrative gaps, and map the exact publications, KOLs, and regions where your brand needs to appear to move the needle.",
  },
  {
    num: "02",
    title: "Strategize",
    description:
      "A bespoke campaign blueprint: which channels, which publications, which KOL tiers, which GEO regions, in what sequence. Built around your timeline and growth targets.",
  },
  {
    num: "03",
    title: "Execute",
    description:
      "Our team handles everything — ghostwriting, editor outreach, KOL briefing, regional campaign coordination. You get updates, not tasks.",
  },
  {
    num: "04",
    title: "Report",
    description:
      "Every placement tracked. Every KOL post logged. Full analytics: live URLs, DA scores, reach, impressions, estimated referral traffic. No vague 'exposure' metrics.",
  },
];

export type Post = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "guest-posts-dominate-web3-seo",
    category: "Web3 · Link Building",
    readTime: "8 min read",
    title: "Why Guest Posts Still Dominate Web3 SEO in 2025",
    excerpt:
      "DeFi protocols and crypto projects continue to see 3–5x ROI from editorial placements over paid ads. Here's the exact playbook — which publications accept Web3 content, how to pitch, and what anchor text strategies work best for token projects.",
    date: "Jun 12, 2025",
    featured: true,
  },
  {
    slug: "kol-vetting-framework",
    category: "Strategy",
    readTime: "6 min read",
    title: "The KOL Vetting Framework Every Crypto Project Needs",
    excerpt:
      "Fake followers and bot engagement have cost projects millions in wasted KOL budgets. We break down our 7-point vetting framework — from authentic engagement rate analysis to on-chain wallet activity checks — so you only pay for real reach.",
    date: "May 29, 2025",
  },
  {
    slug: "mena-crypto-pr-guide",
    category: "MENA",
    readTime: "10 min read",
    title: "Breaking Into the MENA Market: A 2025 Crypto PR Guide",
    excerpt:
      "MENA is the fastest-growing crypto adoption region globally, yet most Western projects treat it as an afterthought. This guide covers the top Arabic publications, key Telegram communities, and cultural communication norms that separate successful launches from ignored ones.",
    date: "May 14, 2025",
  },
  {
    slug: "long-form-content-defi-search",
    category: "SEO",
    readTime: "12 min read",
    title: "Long-Form Content in DeFi: How Protocols Are Winning Organic Search",
    excerpt:
      "Uniswap, Aave, and Lido don't just win on protocol metrics — they dominate Google. We analyzed 50+ top DeFi protocol content strategies to decode exactly what structure, word count, and keyword clustering patterns drive rankings for competitive crypto terms.",
    date: "Apr 28, 2025",
  },
  {
    slug: "forbes-vs-cointelegraph-conversions",
    category: "Web2",
    readTime: "7 min read",
    title: "Forbes vs. Cointelegraph: Which Placement Drives More Conversions?",
    excerpt:
      "We analyzed click-through and conversion data from 200+ editorial placements across both Web2 and Web3 publications. The results surprised us — and they'll change how you think about your media mix and budget allocation for PR.",
    date: "Apr 10, 2025",
  },
  {
    slug: "apac-link-building",
    category: "APAC",
    readTime: "9 min read",
    title: "APAC Link Building: The Publications, KOLs, and Communities That Actually Convert",
    excerpt:
      "Southeast Asia and Japan represent massive opportunity for crypto projects — but require a completely different approach to media outreach. Here are the exact outlets, community hubs, and KOL tiers driving real user acquisition in the APAC region.",
    date: "Mar 25, 2025",
  },
];

export type ContactHighlight = { num: string; title: string; description: string };

export const contactHighlights: ContactHighlight[] = [
  { num: "01", title: "Response Time", description: "We reply to every inquiry within 24 hours" },
  { num: "02", title: "First Placement", description: "Live in 5–14 business days depending on outlet" },
  { num: "03", title: "Guaranteed Results", description: "Every placement comes with a live URL and DA report" },
];

export const serviceOptions: string[] = [
  "Guest Post Placements",
  "Crypto & Web3 PR",
  "Mainstream Media PR",
  "Long-Form Research Articles",
  "KOL Campaigns",
  "GEO-Targeted Campaigns",
  "Full Campaign Package",
];

/* ------------------------------------------------------------------ */
/* Inner-page content (original, brand-consistent)                     */
/* ------------------------------------------------------------------ */

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const pricing: Tier[] = [
  {
    name: "Single Placement",
    price: "from $450",
    cadence: "à la carte",
    blurb: "Buy one placement at a time. Perfect for a specific announcement or a test run.",
    cta: "Order a placement",
    features: [
      "One editorial or PR placement",
      "Full anchor-text control",
      "Live URL + DA report",
      "Pay per link — no retainer",
      "Crypto or card payment",
    ],
  },
  {
    name: "Growth Retainer",
    price: "$5,400",
    cadence: "per month",
    blurb: "An always-on program across press, links, and KOLs — built to compound.",
    cta: "Start Growth",
    featured: true,
    features: [
      "8–12 placements / month",
      "Mixed Web2 + Web3 outlets",
      "1 long-form research piece",
      "KOL activation (vetted creators)",
      "Dedicated strategist & monthly report",
      "Priority turnaround",
    ],
  },
  {
    name: "Authority",
    price: "Custom",
    cadence: "retainer",
    blurb: "Full-funnel narrative ownership for market leaders and multi-region launches.",
    cta: "Talk to us",
    features: [
      "Unlimited distribution network",
      "Mainstream + crypto tier-1 program",
      "Multi-region GEO campaigns",
      "Full KOL & community programs",
      "Crisis & reputation coverage",
      "Quarterly strategy reviews",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do you guarantee placements?",
    a: "Yes. We work from pre-negotiated editorial relationships, so you pay for a live URL — not a pitch. Every placement is reported with a verifiable link and DA score.",
  },
  {
    q: "Are these real editorial links or advertorials?",
    a: "Real editorial. No 'sponsored' tags, no 'partner content' labels. Our placements sit inside genuine editorial content that passes the credibility test.",
  },
  {
    q: "Can I pay in crypto?",
    a: "Absolutely. We accept USDT, USDC, and major chains alongside cards and bank transfer — we're crypto-native by default.",
  },
  {
    q: "How fast do placements go live?",
    a: "Your first placement is typically live in 5–14 business days depending on the outlet. KOL activations follow creator schedules, usually within 1–3 weeks.",
  },
  {
    q: "Do you vet KOLs for fake engagement?",
    a: "Every creator passes our 7-point vetting framework — authentic engagement analysis and on-chain activity checks — before we recommend them. Zero bot audiences.",
  },
  {
    q: "Which regions can you run GEO campaigns in?",
    a: "MENA, APAC, LATAM, Eastern Europe, and SEA — delivered in native language through local publishers and regional KOLs, not machine translation.",
  },
];

export type Value = { icon: IconName; title: string; description: string };

export const values: Value[] = [
  {
    icon: "shield",
    title: "Guaranteed, not hopeful",
    description: "We don't pitch and pray. Pre-negotiated relationships mean you pay for a live URL, every time.",
  },
  {
    icon: "globe",
    title: "Web2 + Web3 fluent",
    description: "One team that operates natively in both ecosystems — same standards across every vertical.",
  },
  {
    icon: "star",
    title: "Editorial integrity",
    description: "Genuine editorial placements only. No advertorial tags, no credibility-killing labels.",
  },
  {
    icon: "chart",
    title: "Measured, not vague",
    description: "Live URLs, DA scores, reach, and referral data. Never 'exposure' you can't verify.",
  },
];

export type ScoringSignal = { label: string; weight: number; description: string };

export const scoringSignals: ScoringSignal[] = [
  { label: "Domain Authority (DA)", weight: 25, description: "Strength and trust of the publication's domain." },
  { label: "Editorial Trust", weight: 20, description: "Genuine editorial standards — no advertorial farms." },
  { label: "Audience Reach", weight: 20, description: "Monthly readership and the quality of that audience." },
  { label: "AI-Citation Strength", weight: 20, description: "How often the outlet is cited by AI search engines." },
  { label: "Sector Fit", weight: 15, description: "Relevance to your vertical and target market." },
];

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  service: string;
  title: string;
  summary: string;
  date: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "l2-mainnet-launch",
    client: "Helix Layer",
    sector: "L2 / Infrastructure",
    service: "Crypto PR + KOL",
    title: "From stealth to tier-1: a mainnet launch that landed everywhere",
    summary:
      "A coordinated press and KOL push turned a quiet mainnet into a category conversation in under three weeks.",
    date: "Measured 2026-05-18",
    metrics: [
      { value: "62", label: "Placements secured" },
      { value: "9.4M", label: "Impressions" },
      { value: "5", label: "Regions activated" },
    ],
    challenge:
      "Helix Layer had strong tech but zero mainstream footprint heading into a mainnet launch. Reach existed in pockets, but nothing was coordinated or measured.",
    approach: [
      "Mapped the launch narrative to tier-1 crypto and mainstream outlets.",
      "Activated a vetted KOL roster across X, YouTube, and Telegram.",
      "Sequenced placements across five regions for a sustained launch window.",
      "Tracked every link and post with live attribution.",
    ],
    outcome:
      "Within three weeks Helix Layer went from stealth to a category conversation — 62 placements, 9.4M impressions, and a launch the market actually repeated.",
  },
  {
    slug: "exchange-rebrand-trust",
    client: "Valtra Exchange",
    sector: "CEX / Exchange",
    service: "Mainstream PR + Research",
    title: "Rebuilding trust after a rebrand with mainstream authority",
    summary:
      "Mainstream business placements and long-form research re-anchored a rebranded exchange's credibility.",
    date: "Measured 2026-04-02",
    metrics: [
      { value: "18", label: "Tier-1 features" },
      { value: "5×", label: "Branded search growth" },
      { value: "0", label: "Negative trust signals" },
    ],
    challenge:
      "After a rebrand, Valtra needed to rebuild institutional trust fast — without resorting to advertorial filler that would undercut credibility.",
    approach: [
      "Secured mainstream business features positioning the founders.",
      "Published SEO-first research that ranked for competitive terms.",
      "Aligned messaging across every placement for a coherent narrative.",
    ],
    outcome:
      "Branded search grew 5×, 18 tier-1 features went live, and the rebrand landed with zero negative trust signals.",
  },
  {
    slug: "wallet-kol-installs",
    client: "Keyhold Wallet",
    sector: "Wallet / Consumer",
    service: "KOL Campaigns",
    title: "Turning influencer reach into verified wallet installs",
    summary:
      "A vetted KOL program with engagement verification drove qualified installs at a fraction of paid CPI.",
    date: "Measured 2026-03-11",
    metrics: [
      { value: "180K", label: "Verified reach" },
      { value: "37K", label: "App installs" },
      { value: "$0.41", label: "Effective CPI" },
    ],
    challenge:
      "Keyhold had been burned by inflated KOL numbers and wanted reach it could actually verify against installs.",
    approach: [
      "Screened every creator for authentic engagement and on-chain activity.",
      "Briefed KOLs with install-focused messaging and tracking.",
      "Verified reach and attributed installs per creator.",
    ],
    outcome:
      "The program drove 37K installs from 180K verified reach at a $0.41 effective CPI — far below paid-acquisition benchmarks.",
  },
];

export type Review = { quote: string; name: string; role: string; company: string };

export const reviews: Review[] = [
  {
    quote:
      "Every link went live exactly as promised, with a real URL and DA report. No vanity numbers — just placements we could verify.",
    name: "Marcus Vale",
    role: "Head of Growth",
    company: "Helix Layer",
  },
  {
    quote:
      "Blocly rebuilt our credibility after a rebrand faster than we thought possible. The mainstream features changed every investor conversation.",
    name: "Dana Okoye",
    role: "CMO",
    company: "Valtra Exchange",
  },
  {
    quote:
      "They vetted every KOL before we spent a dollar. We finally trust our influencer numbers — and the installs proved it.",
    name: "Priya Raman",
    role: "Founder",
    company: "Keyhold Wallet",
  },
  {
    quote: "Web2 and Web3 under one roof, same standards. It's the only agency we didn't have to manage.",
    name: "Tomas Berg",
    role: "VP Marketing",
    company: "Northwind RWA",
  },
];

export const reviewSummary = { rating: "4.9", count: 180, label: "Based on 180+ client engagements" } as const;

export type TeamMember = { name: string; role: string; initials: string };

export const team: TeamMember[] = [
  { name: "Sam Whitfield", role: "Founder & CEO", initials: "SW" },
  { name: "Lena Carter", role: "Head of PR", initials: "LC" },
  { name: "Omar Haddad", role: "Head of GEO", initials: "OH" },
  { name: "Yuki Tan", role: "Head of KOL Network", initials: "YT" },
];
