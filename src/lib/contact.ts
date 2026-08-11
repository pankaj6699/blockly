export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
};

export function getWordPressContactEndpoint(): string {
  return process.env.WORDPRESS_CONTACT_ENDPOINT?.trim() || "";
}

export function getWordPressApiToken(): string {
  return process.env.WORDPRESS_API_TOKEN?.trim() || "";
}

export async function submitContactToWordPress(payload: ContactFormData) {
  const endpoint = getWordPressContactEndpoint();
  if (!endpoint) {
    throw new Error("WordPress contact endpoint is not configured.");
  }

  const headers: Record<string, string> = {
    "content-type": "application/json",
  };

  const token = getWordPressApiToken();
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  return response;
}
