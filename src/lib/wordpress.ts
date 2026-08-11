import { getWordPressApiUrl } from "@/lib/content";

export type WordPressPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media?: number;
  sticky?: boolean;
  acf?: Record<string, unknown>;
};

export type WordPressMedia = {
  source_url?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
};

export type WordPressCollectionItem = {
  id?: number;
  slug?: string;
  title?: { rendered?: string } | string;
  excerpt?: { rendered?: string } | string;
  content?: { rendered?: string } | string;
  date?: string;
  acf?: Record<string, unknown>;
};

export type WordPressSettings = {
  title?: string;
  description?: string;
  tagline?: string;
};

export type WordPressHomepage = {
  stats: { value: number; suffix: string; label: string }[];
  reasons: { num: string; title: string; description: string }[];
  process: { num: string; title: string; description: string }[];
  publications: string[];
  hero: { tagline: string; subheading: string };
};

export type WordPressAbout = {
  values: { icon: string; title: string; description: string }[];
  team: { name: string; role: string; initials: string }[];
  story: { heading: string; p1: string; p2: string; p3: string };
};

export type WordPressContactSettings = {
  highlights: { num: string; title: string; description: string }[];
};

export type WordPressMethodology = {
  principles: { icon: string; title: string; description: string }[];
};

async function fetchWordPressJson<T>(path: string): Promise<T[]> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return [];
  }

  try {
    const endpoint = `${apiUrl}${path.startsWith("/") ? path : `/${path}`}`;
    const response = await fetch(endpoint, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.warn(`WordPress request to ${endpoint} failed with status ${response.status}`);
      return [];
    }

    return (await response.json()) as T[];
  } catch (error) {
    console.warn(`WordPress request error for path ${path}:`, error);
    return [];
  }
}

export async function fetchWordPressPosts(): Promise<WordPressPost[]> {
  return fetchWordPressJson<WordPressPost>("/posts?per_page=10");
}

export async function fetchWordPressMedia(mediaId: number): Promise<WordPressMedia | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl || !mediaId) {
    return null;
  }

  try {
    const response = await fetch(`${apiUrl}/media/${mediaId}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as WordPressMedia;
  } catch (error) {
    console.warn(`Failed to fetch media ID ${mediaId}:`, error);
    return null;
  }
}

export async function fetchWordPressCollection(path: string): Promise<WordPressCollectionItem[]> {
  return fetchWordPressJson<WordPressCollectionItem>(path);
}

export async function fetchWordPressSettings(): Promise<WordPressSettings | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return null;
  }

  const response = await fetch(`${apiUrl}/settings`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<WordPressSettings>;
}

export async function fetchWordPressHomepage(): Promise<WordPressHomepage | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return null;
  }

  // Derive the site base URL from the API URL (strip /wp-json/wp/v2)
  const siteBase = apiUrl.replace(/\/wp-json\/wp\/v2\/?$/, '');
  const response = await fetch(`${siteBase}/wp-json/blocly/v1/homepage`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<WordPressHomepage>;
}

export async function fetchWordPressAbout(): Promise<WordPressAbout | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return null;
  }

  const siteBase = apiUrl.replace(/\/wp-json\/wp\/v2\/?$/, '');
  const response = await fetch(`${siteBase}/wp-json/blocly/v1/about`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<WordPressAbout>;
}

export async function fetchWordPressContactSettings(): Promise<WordPressContactSettings | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return null;
  }

  const siteBase = apiUrl.replace(/\/wp-json\/wp\/v2\/?$/, '');
  const response = await fetch(`${siteBase}/wp-json/blocly/v1/contact-settings`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<WordPressContactSettings>;
}

export async function fetchWordPressMethodology(): Promise<WordPressMethodology | null> {
  const apiUrl = getWordPressApiUrl();

  if (!apiUrl) {
    return null;
  }

  const siteBase = apiUrl.replace(/\/wp-json\/wp\/v2\/?$/, '');
  const response = await fetch(`${siteBase}/wp-json/blocly/v1/methodology`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<WordPressMethodology>;
}

