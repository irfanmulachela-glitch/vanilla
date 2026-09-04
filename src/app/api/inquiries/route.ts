import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendInquiryEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, phone, product, quantity, region, message } =
      body;

    if (!name || !email || !product || !region || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("inquiries")
      .insert([
        {
          name,
          email,
          company: company || null,
          phone: phone || null,
          product,
          quantity: quantity || null,
          region,
          message,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save inquiry" },
        { status: 500 }
      );
    }

    try {
      await sendInquiryEmail({
        name,
        email,
        company,
        phone,
        product,
        quantity,
        region,
        message,
      });
    } catch (emailError) {
      console.error("Email error:", emailError);
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
