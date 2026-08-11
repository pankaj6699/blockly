export type ContentSource = "local" | "wordpress";

export function getContentSource(): ContentSource {
  return process.env.NEXT_PUBLIC_CONTENT_SOURCE === "local" ? "local" : "wordpress";
}

export function getWordPressUrl(): string {
  return (process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://beige-eel-881953.hostingersite.com").replace(/\/$/, "");
}

export function getWordPressApiUrl(): string {
  return (process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://beige-eel-881953.hostingersite.com/wp-json/wp/v2").replace(/\/$/, "");
}
