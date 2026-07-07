import { NextResponse } from "next/server";

/* Growth-call intake.
   First draft: validates + logs server-side and returns success.
   TODO before launch: wire to Resend (email luca@brandliftagency.nl) or
   Formspree. Keep the JSON contract identical so the form needs no changes. */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const required = ["name", "company", "email", "phone", "focus"];
    for (const key of required) {
      if (!data?.[key] || typeof data[key] !== "string") {
        return NextResponse.json({ ok: false, error: `Missing ${key}` }, { status: 400 });
      }
    }

    // eslint-disable-next-line no-console
    console.log("[groeigesprek] nieuwe aanvraag:", {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      focus: data.focus,
      message: data.message ?? "",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
