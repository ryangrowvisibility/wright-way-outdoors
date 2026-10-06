import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const body = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wright Way Outdoors | Lawn Care & Landscaping in Waterdown, ON",
  description:
    "Lawn maintenance, garden clean-ups, mulch, hedge trimming and patios in Waterdown, Freelton and Flamborough. Rated 5.0 from 60 Google reviews. Call Jack at (289) 933-4126.",
  openGraph: {
    title: "Wright Way Outdoors | Lawn Care & Landscaping in Waterdown",
    description:
      "Rated 5.0 from 60 Google reviews. Lawn and garden maintenance, mulch, clean-ups and patios. Call (289) 933-4126.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
