import type { IconName } from "@/components/ui/icon";
import { getContentSource } from "@/lib/content";
import { fetchWordPressCollection, fetchWordPressMedia, fetchWordPressPosts, fetchWordPressSettings, fetchWordPressHomepage, fetchWordPressAbout, fetchWordPressContactSettings, fetchWordPressMethodology } from "@/lib/wordpress";
import {
  contactHighlights as localContactHighlights,
  nav as localNav,
  posts as localPosts,
  process as localProcess,
  publications as localPublications,
  reasons as localReasons,
  reviews as localReviews,
  serviceOptions as localServiceOptions,
  values as localValues,
  team as localTeam,
  scoringSignals as localScoringSignals,
  services as localServices,
  site as localSite,
  stats as localStats,
  pricing as localPricing,
  caseStudies as localCaseStudies,
  type CaseStudy,
  type ContactHighlight,
  type NavItem,
  type Post,
  type Review,
  type Faq,
  type Service,
  type ServicePackage,
  type Site,
  type Stat,
  type Value,
  type TeamMember,
  type ScoringSignal,
  type Step as ProcessStep,
  type Tier,
  faqs as localFaqs,
} from "@/lib/site";

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#8217;|&#x2019;|&rsquo;/gi, "’")
    .replace(/&#8216;|&#x2018;|&lsquo;/gi, "‘")
    .replace(/&#8220;|&#x201C;|&ldquo;/gi, "“")
    .replace(/&#8221;|&#x201D;|&rdquo;/gi, "”")
    .replace(/&#8211;|&#x2013;|&ndash;/gi, "–")
    .replace(/&#8212;|&#x2014;|&mdash;/gi, "—")
    .replace(/&#34;|&quot;/gi, '"')
    .replace(/&#x27;/gi, "'");
}

function stripHtml(value: string): string {
  return decodeHtmlEntities(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function calculateReadTime(htmlContent: string): string {
  const wordCount = stripHtml(htmlContent).split(/\s+/).filter(w => w.length > 0).length;
  const readTimeMinutes = Math.ceil(wordCount / 200); // Average 200 words per minute
  return `${readTimeMinutes} min read`;
}

async function mapWordPressPost(post: Awaited<ReturnType<typeof fetchWordPressPosts>>[number]): Promise<Post> {
  const title = stripHtml(post.title?.rendered ?? "Untitled post");
  const excerpt = stripHtml(post.excerpt?.rendered || post.content?.rendered || "");
  const content = post.content?.rendered ?? "";

  // Get category from ACF field or fallback
  const acfCategory = normalizeWordPressString(post.acf?.category || post.acf?.post_category || "");
  const category = acfCategory || "Web3 & Link Building";

  const isFeatured = Boolean(post.acf?.featured || post.acf?.is_featured || post.sticky);

  let image: string | undefined;
  if (post.featured_media) {
    try {
      const media = await fetchWordPressMedia(post.featured_media);
      image = media?.source_url || media?.media_details?.sizes?.large?.source_url || media?.media_details?.sizes?.full?.source_url;
    } catch {
      image = undefined;
    }
  }

  let formattedDate = "Recent";
  if (post.date) {
    try {
      const d = new Date(post.date);
      if (!isNaN(d.getTime())) {
        formattedDate = d.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
    } catch {
      // Keep fallback
    }
  }

  return {
    slug: post.slug,
    category,
    readTime: calculateReadTime(content),
    title,
    excerpt: excerpt || "Read the full article from the WordPress backend.",
    date: formattedDate,
    content,
    image,
    featured: isFeatured,
    source: "wordpress",
  };
}

export async function getBlogPosts(): Promise<Post[]> {
  const source = getContentSource();

  if (source === "wordpress") {
    try {
      const remotePosts = await fetchWordPressPosts();
      if (remotePosts?.length) {
        const mapped = await Promise.all(
          remotePosts.map(async (post) => {
            try {
              return await mapWordPressPost(post);
            } catch (err) {
              console.warn(`Failed to map WordPress post ${post.slug}:`, err);
              return null;
            }
          })
        );
        const validPosts = mapped.filter((p): p is Post => p !== null);
        if (validPosts.length > 0) {
          // If WordPress has multiple MENA guide posts (e.g. 2026 ultimate guide post vs legacy 2025 post),
          // ensure the full 2026 WordPress content is populated across MENA guide routes.
          const fullMenaPost = validPosts.find(
            (p) => p.slug.includes("breaking-into-the-mena-market") && (p.content?.length ?? 0) > 3000
          );
          if (fullMenaPost) {
            validPosts.forEach((p) => {
              if (p.slug.includes("breaking-into-the-mena-market") && (p.content?.length ?? 0) < 3000) {
                p.content = fullMenaPost.content;
                p.title = fullMenaPost.title;
                p.readTime = fullMenaPost.readTime;
                p.excerpt = fullMenaPost.excerpt;
                if (fullMenaPost.image) p.image = fullMenaPost.image;
              }
            });
          }
          return validPosts;
        }
      }
    } catch (error) {
      console.warn("Falling back to local posts because WordPress content could not be loaded.", error);
    }
  }

  return localPosts;
}

function normalizeWordPressString(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return "";
}

function normalizeIcon(value: unknown): IconName {
  const icon = normalizeWordPressString(value).toLowerCase();
  const icons: IconName[] = ["pen", "megaphone", "bolt", "globe", "shield", "chart", "star", "check", "arrow-right"];
  return (icons.includes(icon as IconName) ? icon : "pen") as IconName;
}

function parseCommaSeparated(value: unknown): string[] {
  const text = normalizeWordPressString(value);
  return text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseLineSeparated(value: unknown): string[] {
  const text = normalizeWordPressString(value);
  return text
    .split(/\n|;|<br\s*\/?>/gi)
    .map((item) => item.trim())
    .filter(Boolean);
}

function stripWordPressContent(value: unknown): string {
  if (typeof value === "string") return stripHtml(value);
  if (typeof value === "object" && value !== null && "rendered" in value && typeof (value as { rendered?: unknown }).rendered === "string") {
    return stripHtml((value as { rendered: string }).rendered);
  }
  return "";
}

function getWordPressText(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null && "rendered" in value && typeof (value as { rendered?: unknown }).rendered === "string") {
    return (value as { rendered: string }).rendered;
  }
  return "";
}

function mapWordPressService(item: Awaited<ReturnType<typeof fetchWordPressCollection>>[number]): Service | null {
  const title = stripWordPressContent(item.title);
  const excerpt = stripWordPressContent(item.excerpt);
  const body = stripWordPressContent(item.content);
  const acf = (item.acf ?? {}) as Record<string, unknown>;

  if (!title) return null;

  // Build multiple packages from numbered ACF fields (package_1_name, package_2_name, etc.)
  const packages: ServicePackage[] = [];
  let packageNumber = 1;
  while (true) {
    const packageName = normalizeWordPressString(acf[`package_${packageNumber}_name`]);
    if (!packageName) break; // Stop when no more packages found

    packages.push({
      name: packageName,
      price: normalizeWordPressString(acf[`package_${packageNumber}_price`]),
      cadence: normalizeWordPressString(acf[`package_${packageNumber}_cadence`]),
      blurb: normalizeWordPressString(acf[`package_${packageNumber}_blurb`]) || excerpt,
      features: parseLineSeparated(acf[`package_${packageNumber}_features`]),
      featured: Boolean(acf[`package_${packageNumber}_featured`]),
    });
    packageNumber++;
  }

  return {
    num: normalizeWordPressString(acf.num) || "01",
    slug: normalizeWordPressString(item.slug) || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    name: title,
    icon: normalizeIcon(acf.icon),
    description: excerpt || body || localServices[0]?.description || "",
    longDescription: body || excerpt || localServices[0]?.longDescription || "",
    tags: parseCommaSeparated(acf.tags),
    deliverables: parseLineSeparated(acf.deliverables),
    idealFor: normalizeWordPressString(acf.ideal_for) || localServices[0]?.idealFor || "",
    packages: packages.length ? packages : localServices[0]?.packages || [],
  };
}

function mapWordPressPricing(item: Awaited<ReturnType<typeof fetchWordPressCollection>>[number]): Tier | null {
  const title = stripWordPressContent(item.title);
  const acf = (item.acf ?? {}) as Record<string, unknown>;

  if (!title) return null;

  return {
    name: title,
    price: normalizeWordPressString(acf.price),
    cadence: normalizeWordPressString(acf.cadence),
    blurb: normalizeWordPressString(acf.blurb),
    features: parseLineSeparated(acf.features),
    cta: normalizeWordPressString(acf.cta) || "Get started",
    featured: Boolean(acf.featured),
  };
}

function mapWordPressCaseStudy(item: Awaited<ReturnType<typeof fetchWordPressCollection>>[number]): CaseStudy | null {
  const title = stripWordPressContent(item.title);
  const acf = (item.acf ?? {}) as Record<string, unknown>;

  if (!title) return null;

  // Parse metrics: each line should be "value: label" format
  const metricLines = parseLineSeparated(acf.metrics);
  const metrics = metricLines.map((line) => {
    const [value, label] = line.split(":").map((s) => s.trim());
    return { value: value || line, label: label || "" };
  });

  return {
    slug: normalizeWordPressString(item.slug) || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    client: normalizeWordPressString(acf.client) || "Client",
    sector: normalizeWordPressString(acf.sector) || "Growth",
    service: normalizeWordPressString(acf.service) || "Campaign",
    title,
    summary: normalizeWordPressString(acf.summary) || stripWordPressContent(item.excerpt),
    date: normalizeWordPressString(acf.date) || new Date(item.date ?? Date.now()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    metrics,
    challenge: normalizeWordPressString(acf.challenge) || "",
    approach: parseLineSeparated(acf.approach),
    outcome: normalizeWordPressString(acf.outcome) || "",
  };
}

export async function getServicesData(): Promise<Service[]> {
  const source = getContentSource();

  if (source === "wordpress") {
    try {
      const remoteServices = await fetchWordPressCollection("/services?per_page=20");
      const mapped = remoteServices.map(mapWordPressService).filter((service): service is Service => Boolean(service));
      if (mapped.length) {
        return mapped;
      }
    } catch (error) {
      console.warn("Falling back to local services because WordPress services could not be loaded.", error);
    }
  }

  return localServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServicesData();
  return services.find((service) => service.slug === slug);
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const source = getContentSource();

  if (source === "wordpress") {
    try {
      const remoteCaseStudies = await fetchWordPressCollection("/case-studies?per_page=20");
      const mapped = remoteCaseStudies.map(mapWordPressCaseStudy).filter((study): study is CaseStudy => Boolean(study));
      if (mapped.length) {
        return mapped;
      }
    } catch (error) {
      console.warn("Falling back to local case studies because WordPress case studies could not be loaded.", error);
    }
  }

  return localCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const caseStudies = await getCaseStudies();
  return caseStudies.find((study) => study.slug === slug);
}

export async function getSiteData(): Promise<Site> {
  const source = getContentSource();

  if (source === "wordpress") {
    try {
      const settings = await fetchWordPressSettings();
      if (settings) {
        return {
          ...localSite,
          name: (settings.title || localSite.name) as Site["name"],
          description: (settings.description || localSite.description) as Site["description"],
          tagline: (settings.tagline || localSite.tagline) as Site["tagline"],
        };
      }
    } catch (error) {
      console.warn("Falling back to local site settings because WordPress settings could not be loaded.", error);
    }
  }

  return localSite;
}

export async function getNavItems(): Promise<readonly NavItem[]> {
  return localNav;
}

export async function getPublications(): Promise<string[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const hp = await fetchWordPressHomepage();
      if (hp?.publications?.length) return hp.publications;
    } catch (error) {
      console.warn("Falling back to local publications.", error);
    }
  }
  return localPublications;
}

export async function getValues(): Promise<Value[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const data = await fetchWordPressAbout();
      if (data?.values?.length) {
        // Map icon strings to IconName type
        return data.values.map(v => ({
          ...v,
          icon: (v.icon || 'star') as IconName,
        }));
      }
    } catch (error) {
      console.warn("Falling back to local values.", error);
    }
  }
  return localValues;
}

export async function getTeam(): Promise<TeamMember[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const data = await fetchWordPressAbout();
      if (data?.team?.length) return data.team;
    } catch (error) {
      console.warn("Falling back to local team.", error);
    }
  }
  return localTeam;
}

export async function getScoringSignals(): Promise<ScoringSignal[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const hp = await fetchWordPressHomepage();
      if (hp?.stats?.length) {
        // Scoring signals are still in homepage for now - they're used on both homepage and methodology page
        // Could move to methodology endpoint if needed
      }
    } catch (error) {
      console.warn("Falling back to local scoring signals.", error);
    }
  }
  return localScoringSignals;
}

export async function getServiceOptions(): Promise<string[]> {
  return localServiceOptions;
}

export async function getWhyReasons(): Promise<ContactHighlight[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const hp = await fetchWordPressHomepage();
      if (hp?.reasons?.length) return hp.reasons;
    } catch (error) {
      console.warn("Falling back to local reasons.", error);
    }
  }
  return localReasons;
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const hp = await fetchWordPressHomepage();
      if (hp?.process?.length) return hp.process;
    } catch (error) {
      console.warn("Falling back to local process steps.", error);
    }
  }
  return localProcess;
}

export async function getStatsData(): Promise<Stat[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const hp = await fetchWordPressHomepage();
      if (hp?.stats?.length) return hp.stats;
    } catch (error) {
      console.warn("Falling back to local stats.", error);
    }
  }
  return localStats;
}

export async function getContactHighlights(): Promise<ContactHighlight[]> {
  const source = getContentSource();
  if (source === "wordpress") {
    try {
      const data = await fetchWordPressContactSettings();
      if (data?.highlights?.length) return data.highlights;
    } catch (error) {
      console.warn("Falling back to local contact highlights.", error);
    }
  }
  return localContactHighlights;
}

export async function getFaqs(): Promise<Faq[]> {
  return localFaqs;
}

export async function getReviews(): Promise<{ reviews: Review[]; reviewSummary: { rating: string; count: number; label: string } }> {
  return {
    reviews: localReviews,
    reviewSummary: {
      rating: "4.9",
      count: 180,
      label: "Based on 180+ client engagements",
    },
  };
}

export async function getPricingData(): Promise<Tier[]> {
  const source = getContentSource();

  if (source === "wordpress") {
    try {
      const remotePricing = await fetchWordPressCollection("/pricing?per_page=20");
      const mapped = remotePricing.map(mapWordPressPricing).filter((tier): tier is Tier => Boolean(tier));
      if (mapped.length) {
        return mapped;
      }
    } catch (error) {
      console.warn("Falling back to local pricing because WordPress pricing data could not be loaded.", error);
    }
  }

  return localPricing;
}
