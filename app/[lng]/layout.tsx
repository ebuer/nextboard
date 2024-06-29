import type { Metadata } from "next";
import "../globals.css";
import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: "Nextboard",
  description: "Frontend Dashboard made with Next.js",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html lang={lng}>
      <body suppressHydrationWarning={true}>
        <main className="w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
