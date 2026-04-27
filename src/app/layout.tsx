import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dahmey-royal-empire.vercel.app"),
  title: "Dahmey's Royal Empire",
  description: "A modern women-first e-commerce marketplace experience.",
  openGraph: {
    title: "Dahmey's Royal Empire",
    description: "Luxury fashion, beauty, wigs, and accessories marketplace.",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dahmey's Royal Empire",
    description: "Luxury fashion, beauty, wigs, and accessories marketplace.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} font-sans`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
