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
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
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

export type ServicePackage = {
  name: string;
  price: string;
  cadence?: string;
  blurb?: string;
  features: string[];
  featured?: boolean;
};

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
  packages: ServicePackage[];
};

export const services: Service[] = [
  {
    num: "01",
    slug: "blogger-outreach",
    name: "Blogger Outreach",
    icon: "pen",
    description:
      "Natural, in-content editorial links from real bloggers. Ghost-written content, DR guaranteed, lifetime link guarantee — you take the credit.",
    longDescription:
      "Save 100+ hours of outreach. We secure natural, relevant, in-content links straight from bloggers — ghost posts, not guest posts. Every placement includes writing, DR and traffic guarantees, and a lifetime link guarantee with 100% money-back protection.",
    tags: ["DR Guaranteed", "Do-Follow", "Includes Writing"],
    deliverables: [
      "Genuine editorial in-content link (not author bio)",
      "Magazine-quality ghost-written content",
      "DR and Ahrefs traffic guaranteed at placement",
      "1 anchor / URL per placement, no duplicate domains",
      "White-label placement report",
      "Lifetime link guarantee & money-back protection",
    ],
    idealFor: "SEO teams and agencies building authority with natural, resellable blogger outreach.",
    packages: [
      {
        name: "DR10+",
        price: "$72",
        cadence: "/ placement",
        blurb: "0–1,000 monthly traffic",
        features: ["DR 10+ guaranteed", "From 14 days delivery", "Includes writing", "Do-follow link"],
      },
      {
        name: "DR20+",
        price: "$96",
        cadence: "/ placement",
        blurb: "0–5k monthly traffic",
        features: ["DR 20+ guaranteed", "From 14 days delivery", "Includes writing", "Do-follow link"],
      },
      {
        name: "DR30+",
        price: "$120",
        cadence: "/ placement",
        blurb: "100–10k monthly traffic",
        featured: true,
        features: ["DR 30+ guaranteed", "Most popular tier", "Includes writing", "Do-follow link"],
      },
      {
        name: "DR40+",
        price: "$216",
        cadence: "/ placement",
        blurb: "500–20k monthly traffic",
        features: ["DR 40+ guaranteed", "Includes writing", "Do-follow link", "Ahrefs traffic guaranteed"],
      },
      {
        name: "DR50+",
        price: "$336",
        cadence: "/ placement",
        blurb: "1k–30k monthly traffic",
        features: ["DR 50+ guaranteed", "Includes writing", "Do-follow link", "Ahrefs traffic guaranteed"],
      },
      {
        name: "DR60+",
        price: "$456",
        cadence: "/ placement",
        blurb: "1k–60k monthly traffic",
        features: ["DR 60+ guaranteed", "Includes writing", "Do-follow link", "Lifetime link guarantee"],
      },
    ],
  },
  {
    num: "02",
    slug: "digital-pr-campaigns",
    name: "Digital PR Campaigns",
    icon: "megaphone",
    description:
      "Guaranteed journalist links from authority news and media. Expert commentary and data campaigns with DR 50–95 placements.",
    longDescription:
      "The most powerful links you can get. Our team crafts expert commentary and data-driven stories, then pitches journalists until we hit your guaranteed link minimum — in-content placements from authority outlets with 100k–100m+ traffic.",
    tags: ["DR 50–95", "Journalist Links", "Guaranteed Coverage"],
    deliverables: [
      "Guaranteed minimum journalist links per campaign",
      "In-content links from DR 50–95+ publications",
      "Unlimited story angles pitched until goals are met",
      "100k–100m+ SimilarWeb traffic placements",
      "White-label pitch and coverage report",
      "100% money-back if guarantees aren't met",
    ],
    idealFor: "Brands and agencies that need tier-1 media coverage with guaranteed link minimums.",
    packages: [
      {
        name: "Starter Campaign",
        price: "$4,200",
        cadence: "/ campaign",
        blurb: "5+ links guaranteed",
        features: [
          "5+ in-content journalist links",
          "DR 50–95+ placements",
          "100k–100m traffic sites",
          "Unlimited stories created",
          "Up to 90 days delivery",
        ],
      },
      {
        name: "National Campaign",
        price: "$6,600",
        cadence: "/ campaign",
        blurb: "10+ links guaranteed",
        featured: true,
        features: [
          "10+ in-content journalist links",
          "DR 50–95+ placements",
          "100k–100m traffic sites",
          "Unlimited stories created",
          "Up to 90 days delivery",
        ],
      },
      {
        name: "Viral Campaign",
        price: "$10,200",
        cadence: "/ campaign",
        blurb: "20+ links guaranteed",
        features: [
          "20+ in-content journalist links",
          "DR 50–95+ placements",
          "100k–100m traffic sites",
          "Unlimited stories created",
          "Up to 90 days delivery",
        ],
      },
    ],
  },
  {
    num: "03",
    slug: "web3-media-placement",
    name: "Web3 Media Placement",
    icon: "bolt",
    description:
      "Guaranteed crypto and blockchain press coverage with 300+ media syndication. Editorial assistance, SEO optimization, and metric reports included.",
    longDescription:
      "Amplify your crypto and blockchain news with guaranteed coverage on leading Web3 outlets. Every package delivers wide industry distribution, editorial support, SEO optimization, and full metric reporting — built for token launches, protocol updates, and milestone announcements.",
    tags: ["Guaranteed Coverage", "300+ Syndication", "Crypto Native"],
    deliverables: [
      "Guaranteed publication on tier crypto outlets",
      "300+ media syndication network",
      "Editorial assistance & SEO optimization",
      "1–2 images included per release",
      "Full metric and coverage report",
      "Sector-specific package options",
    ],
    idealFor: "Crypto projects, DeFi protocols, and Web3 brands launching news that needs guaranteed distribution.",
    packages: [
      {
        name: "Starter",
        price: "$2,000",
        cadence: "/ package",
        blurb: "2M+ monthly visitors",
        features: ["Guaranteed publications", "300+ media syndication", "Editorial assistance", "Metric reports"],
      },
      {
        name: "Tech",
        price: "$2,000",
        cadence: "/ package",
        blurb: "10M+ monthly visitors",
        features: ["Guaranteed publications", "300+ media syndication", "SEO optimization", "1–2 images included"],
      },
      {
        name: "Premium",
        price: "$3,000",
        cadence: "/ package",
        blurb: "5M+ monthly visitors",
        featured: true,
        features: ["Guaranteed publication", "300+ media syndication", "Editorial assistance", "Metric reports"],
      },
      {
        name: "FinTech",
        price: "$3,000",
        cadence: "/ package",
        blurb: "10M+ monthly visitors",
        features: ["Guaranteed publications", "300+ media syndication", "FinTech-focused distribution", "Metric reports"],
      },
      {
        name: "Web3 Gaming",
        price: "$4,000",
        cadence: "/ package",
        blurb: "10M+ monthly visitors",
        features: ["Guaranteed publications", "300+ media syndication", "Gaming-sector targeting", "Metric reports"],
      },
      {
        name: "Viral",
        price: "$7,000",
        cadence: "/ package",
        blurb: "15M+ monthly visitors",
        features: ["Guaranteed publications", "300+ media syndication", "Maximum reach package", "Metric reports"],
      },
    ],
  },
  {
    num: "04",
    slug: "brand-mentions",
    name: "Brand Mentions",
    icon: "sparkles",
    description:
      "Strategic listicle and brand mentions on high-authority sites. Strengthen E-E-A-T signals and appear in Google AI Overviews and LLMs.",
    longDescription:
      "Get your brand featured where it matters most. We place contextually relevant mentions in listicles, comparison posts, and editorial roundups on high-authority websites — driving organic traffic and building the credibility signals search engines and AI models reward.",
    tags: ["Listicles", "DR 30–60", "E-E-A-T Signals"],
    deliverables: [
      "Contextually relevant brand mentions in editorial content",
      "Listicle, comparison, and review placements",
      "Do-follow links on vetted high-authority sites",
      "Dedicated campaign manager",
      "Delivery within 4–6 weeks depending on tier",
      "Basic to advanced reporting by package",
    ],
    idealFor: "Brands building visibility, E-E-A-T authority, and AI search presence through strategic mentions.",
    packages: [
      {
        name: "Starter Listicle",
        price: "$1,500",
        cadence: "/ campaign",
        blurb: "Early visibility campaigns",
        features: [
          "5 listicle placements",
          "Ahrefs DR 30–60",
          "1,000+ organic traffic / site",
          "Do-follow links",
          "Delivery in 4 weeks",
        ],
      },
      {
        name: "Growth Listicle",
        price: "$4,000",
        cadence: "/ campaign",
        blurb: "Scaling authority",
        featured: true,
        features: [
          "6 listicle placements",
          "Ahrefs DR 30–60",
          "Comparison / review lists",
          "Short brand description",
          "Delivery in 5 weeks",
        ],
      },
      {
        name: "Authority Listicle",
        price: "$10,000",
        cadence: "/ campaign",
        blurb: "Category leadership",
        features: [
          "10 listicle placements",
          "Premium editorial lists",
          "Featured brand section",
          "Advanced reporting",
          "Delivery in 6 weeks",
        ],
      },
      {
        name: "Custom Plan",
        price: "Custom",
        cadence: "",
        blurb: "Enterprise campaigns",
        features: [
          "Custom placement volume",
          "Custom DR range & traffic",
          "Priority delivery",
          "Tailored to your brief",
        ],
      },
    ],
  },
  {
    num: "05",
    slug: "white-label-services",
    name: "White Label Services",
    icon: "shield",
    description:
      "Resell Blocly's full link-building and PR stack under your brand. White-label reports, dedicated support, and volume pricing for agencies.",
    longDescription:
      "Built for agencies and resellers. Order any Blocly service on behalf of your clients with fully white-labeled reports — your clients never know we were involved. Get dedicated account management, client tagging, volume discounts, and priority fulfillment as you scale.",
    tags: ["White Label", "Agency Ready", "Volume Pricing"],
    deliverables: [
      "Fully white-labeled placement and campaign reports",
      "Client tagging and order tracking in your dashboard",
      "Access to all Blocly services at reseller rates",
      "Dedicated account manager",
      "Priority fulfillment and support",
      "Volume discounts on monthly spend",
    ],
    idealFor: "SEO agencies, digital PR firms, and marketing shops reselling link building and PR to their clients.",
    packages: [
      {
        name: "Reseller",
        price: "From $1,500",
        cadence: "/ month",
        blurb: "Solo agencies getting started",
        features: [
          "White-label reports on every order",
          "Client tagging & order tracking",
          "Pay-as-you-go placement pricing",
          "Email support",
        ],
      },
      {
        name: "Agency Partner",
        price: "From $4,000",
        cadence: "/ month",
        blurb: "Growing agencies at scale",
        featured: true,
        features: [
          "Everything in Reseller",
          "10% volume discount on monthly spend",
          "Dedicated account manager",
          "Priority turnaround",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        cadence: "",
        blurb: "Large agencies & networks",
        features: [
          "Custom volume pricing",
          "Full rebrand options",
          "Custom SLAs & fulfillment",
          "Quarterly business reviews",
        ],
      },
    ],
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
  { value: 5000, suffix: "+", label: "Links Placed" },
  { value: 250, suffix: "+", label: "Tier-1 Publications" },
  { value: 5, suffix: "+", label: "Global Regions" },
  { value: 98, suffix: "%", label: "Placement Success Rate" },
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
  "Blogger Outreach",
  "Digital PR Campaigns",
  "Web3 Media Placement",
  "Brand Mentions",
  "White Label Services",
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
    a: "Yes. Blogger outreach, digital PR, and Web3 media packages all come with guaranteed minimums. Every placement is reported with a verifiable live URL and metrics.",
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
    a: "Blogger outreach typically delivers from 14 days. Digital PR campaigns run up to 90 days. Web3 media packages and brand mention campaigns deliver within 4–6 weeks depending on the tier.",
  },
  {
    q: "Can I resell your services under my brand?",
    a: "Yes. Our White Label program provides fully branded reports on every order. Your clients never see Blocly — you take the credit while we handle fulfillment.",
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
