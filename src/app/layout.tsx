import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebAI Delivery Workspace",
  description: "AI-assisted software delivery workspace with planning, QA, and GitHub workflow support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
