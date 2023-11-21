import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function hanlder() {
  try {
    const { data, error } = await resend.emails.send({
      from: "andrewdddobusiness@gmail.com",
      to: ["andrewdddobusiness@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Andrew" }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
