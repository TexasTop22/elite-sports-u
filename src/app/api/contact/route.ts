import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
  host: "box5931.bluehost.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@elitesportsu.com",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

    await transporter.sendMail({
      from: `"Elite Sports U Website" <${process.env.SMTP_USER}>`,
      to: "elitesportsuniversity@gmail.com",
      subject: `New contact form submission from ${name}`,
      replyTo: process.env.SMTP_USER,
      text: `
New message from the Elite Sports U website:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
