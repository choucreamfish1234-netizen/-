import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, category, content, privacyConsent } = body;

    // Validate required fields
    if (!name || !phone || !category || !content) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { error: "개인정보 수집 및 이용에 동의해주세요." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Insert into Supabase
    const { error } = await supabase.from("consultations").insert([
      {
        name,
        phone,
        email: email || null,
        category,
        content,
        privacy_consent: privacyConsent,
        status: "pending",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "상담 신청 저장 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "상담 신청이 완료되었습니다." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Consultation API error:", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
