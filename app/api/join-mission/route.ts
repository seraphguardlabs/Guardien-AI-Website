import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, countryCode } = body;

    if (!name || !email) {
      return NextResponse.json(
        { status: "error", message: "Name and email are required." },
        { status: 400 }
      );
    }

    const trimmedPhone = phone ? phone.trim() : "";
    const fullPhoneNumber = trimmedPhone
      ? countryCode
        ? `${countryCode} ${trimmedPhone}`
        : trimmedPhone
      : "Not provided";

    // Forward to the dev API if available
    try {
      await fetch("https://dev.seraphguardlabs.com/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: fullPhoneNumber,
          message: `[Join Mission Wishlist]\nPhone: ${fullPhoneNumber}\nUser joined the early access wishlist.`,
        }),
      });
    } catch (apiError) {
      console.warn("External CRM/contact API forward warning:", apiError);
    }

    return NextResponse.json({
      status: "success",
      message: "Successfully joined the mission wishlist!",
    });
  } catch (error) {
    console.error("Join Mission API error:", error);
    return NextResponse.json(
      { status: "error", message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
