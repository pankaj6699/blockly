import { NextResponse } from "next/server";
import { getWordPressContactEndpoint, submitContactToWordPress, type ContactFormData } from "@/lib/contact";

export const dynamic = "force-dynamic";

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof data !== "object" || data === null) {
    return NextResponse.json({ ok: false, error: "Request body must be an object." }, { status: 400 });
  }

  const payload = data as Record<string, unknown>;
  const name = String(payload.name ?? "").trim();
  const company = String(payload.company ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const service = String(payload.service ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !company || !email || !service || !message) {
    return NextResponse.json({ ok: false, error: "All fields are required." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "A valid email address is required." }, { status: 400 });
  }

  const contactData: ContactFormData = { name, company, email, service, message };
  const endpoint = getWordPressContactEndpoint();

  if (!endpoint) {
    return NextResponse.json({
      ok: true,
      warning: "No WordPress contact endpoint configured. Form submission is accepted locally.",
    });
  }

  try {
    const response = await submitContactToWordPress(contactData);
    if (!response.ok) {
      const details = await response.text();
      return NextResponse.json(
        {
          ok: false,
          error: `WordPress endpoint returned ${response.status}.`,
          details,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Submission failed while forwarding to WordPress.",
        details: String(error),
      },
      { status: 500 },
    );
  }
}
