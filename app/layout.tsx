import type { Metadata } from "next";
import "./globals.css";
import "./agent.css";

export const metadata: Metadata = {
  title: "Birdiaconia OS · Agent Workspace",
  description: "목표를 받아 Core와 도구를 연결하고 사람의 의미 있는 결정만 승인받는 Birdiaconia 운영체제",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
