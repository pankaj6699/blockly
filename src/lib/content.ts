export type ContentSource = "local" | "wordpress";

export function getContentSource(): ContentSource {
  return (process.env.NEXT_PUBLIC_CONTENT_SOURCE as ContentSource | undefined) === "wordpress" ? "wordpress" : "local";
}

export function getWordPressUrl(): string {
  return process.env.NEXT_PUBLIC_WORDPRESS_URL?.replace(/\/$/, "") || "";
}

export function getWordPressApiUrl(): string {
  return process.env.NEXT_PUBLIC_WORDPRESS_API_URL?.replace(/\/$/, "") || "";
}
