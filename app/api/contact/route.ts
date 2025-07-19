import { ContactEmail } from "@/components/sections/contact/contact-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 簡単なメールバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // メール送信
    const data = await resend.emails.send({
      from: "noreply@jin-nakano.net", // 認証済みドメインのメールアドレス（送信専用）
      to: "contact@jin-nakano.net", // あなたのメールアドレス
      subject: `Portfolio Contact: Message from ${name}`,
      react: ContactEmail({ name, email, message }),
      replyTo: email, // 返信先を送信者のメールアドレスに設定
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
