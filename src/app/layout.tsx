import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// components
import { TopNav } from "@/components/Navigations/TopNav";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Test",
  description: "Mainstack Frontend Engineer Test web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
