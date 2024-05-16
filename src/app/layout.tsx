import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import VersionNumber from "@/app/VersionNumber";
import Footer from "@/app/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jtpotato's site",
  description: "im not sure why you would read this just click the link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
