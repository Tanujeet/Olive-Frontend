import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olive – The Safest Way to Shop for Groceries",
  description:
    "Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
