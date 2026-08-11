import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 60;

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "blockly-next",
    message: "Frontend is ready for headless WordPress integration.",
  });
}
