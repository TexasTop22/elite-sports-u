import { createMultipartUpload } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { filename, type } = await req.json();

    if (!filename || !type) {
      return NextResponse.json({ error: "Missing filename or type" }, { status: 400 });
    }

    // Configure access and contentType
    const options = {
      access: "public",
      contentType: type,
    };

    // Use your token in dev, Vercel creds in production
    if (process.env.NODE_ENV === "development") {
      options.token = process.env.BLOB_READ_WRITE_TOKEN;
      console.log("🔐 Using local Blob token");
    } else {
      console.log("☁️ Using Vercel-managed credentials");
    }

    // Create a multipart upload session
    const upload = await createMultipartUpload(filename, options);

    // The SDK returns the upload endpoint at upload.urls[0]
    const uploadUrl = upload?.urls?.[0];
    const url = upload?.url;

    console.log("✅ Upload session created:");
    console.log("uploadUrl:", uploadUrl);
    console.log("final url:", url);

    if (!uploadUrl) {
      throw new Error("Failed to obtain upload URL from response.");
    }

    return NextResponse.json({ uploadUrl, url });
  } catch (error) {
    console.error("UPLOAD-URL ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Upload URL creation failed" },
      { status: 500 }
    );
  }
}
