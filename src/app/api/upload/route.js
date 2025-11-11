import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // ✅ Automatically choose the right auth setup
    const options = { access: "public" };

    // Use your local token only in dev
    if (process.env.NODE_ENV === "development") {
      options.token = process.env.BLOB_READ_WRITE_TOKEN;
      console.log("🔐 Using local Blob token for dev environment");
    } else {
      console.log("☁️ Running in production — Vercel Blob credentials auto-injected");
    }

    const blob = await put(file.name, file, options);

    console.log("✅ Upload successful:", blob.url);
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("❌ UPLOAD ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
