import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone } = body;

        // Basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "الرجاء إدخال جميع الحقول المطلوبة" },
                { status: 400 }
            );
        }

        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (!GOOGLE_SCRIPT_URL) {
            // If the script URL is not setup yet, just simulate success for testing the UI
            console.warn("GOOGLE_SCRIPT_URL is not set. Simulating success.");
            return NextResponse.json({ success: true, message: "تم التسجيل (محاكاة)" });
        }

        // Forward to Google Apps Script Web App
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone }),
        });

        if (!response.ok) {
            throw new Error("Failed to submit to Google Sheets");
        }

        return NextResponse.json({ success: true, message: "تم التسجيل بنجاح" });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء معالجة طلبك" },
            { status: 500 }
        );
    }
}
