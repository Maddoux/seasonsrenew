import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Seasons Roleplay | FiveM RP Server",
  description: "Experience immersive roleplay in The Seasons - a premium FiveM RP server with endless possibilities.",
  keywords: ["FiveM", "roleplay", "RP", "GTA", "server", "community"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
