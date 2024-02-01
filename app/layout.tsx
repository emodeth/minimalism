import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimalism Life - Crafting a simpler life with less",
  description:
    "Delve into the principles of minimalism and simple living. Uncover inspiring minimalist art, enriching lifestyle resources, and innovative sustainable design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative pt-[160px] pb-[20px]">{children}</body>
    </html>
  );
}
