import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birdiaconia Workspace v0.1",
  description: "버디아코니아 사역 운영을 위한 Workspace UI Prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
