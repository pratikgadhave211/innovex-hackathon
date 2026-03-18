import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Hackathon page design",
  description: "INNOVEX 2026 hackathon landing page",
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
