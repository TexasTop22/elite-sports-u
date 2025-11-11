import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Automatically works with both local and production environments
    const blob = await put(file.name, file, {
      access: "public",
      addRandomSuffix: true, // prevents overwriting files
    });

    console.log("✅ File uploaded:", blob.url);
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Upload failed" },
      { status: 500 }
    );
  }
}
