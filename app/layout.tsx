import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Head from "next/head";

import { Providers } from "./providers";
import "./globals.css";

import BasicLayout from "@/components/layouts/basic-layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Starter Build",
  description: "A starter kit for your next project.",
  icons: {
    icon: "../public/images/starter-build-logo-lightmode.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Head>
        <link
          rel="icon"
          href="../public/images/starter-build-logo-lightmode.png"
          sizes="any"
        />
      </Head>

      <body className="bg-background text-foreground">
        <Providers>
          <main className="dark min-h-screen flex flex-col items-center ">
            <Header />

            <BasicLayout>{children}</BasicLayout>

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
