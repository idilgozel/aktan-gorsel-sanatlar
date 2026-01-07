import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktan Görsel Sanatlar",
  description: "AKG corporate website template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
