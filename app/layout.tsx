import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Head from "next/head";

import { Providers } from "./providers";
import "./globals.css";

import BasicLayout from "@/components/layouts/basic-layout";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer/footer";

import { getSession } from "@/actions/supabase/server-get";

const defaultUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Headstart",
  description: "A starter kit for your next project.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head>
        <link rel="icon" sizes="any" />
      </Head>

      <body className="dark">
        <Providers>
          <main className="min-h-screen flex flex-col items-center ">
            <NavBar session={session} />

            <BasicLayout>{children}</BasicLayout>

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
