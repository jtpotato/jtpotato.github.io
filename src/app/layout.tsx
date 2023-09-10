import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joel 🧋",
  description: "a bit of a portfolio page or something. maybe a proving ground for my next project 👀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-950 p-0 m-0 text-stone-100">{children}</body>
    </html>
  );
}
