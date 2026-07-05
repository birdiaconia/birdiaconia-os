import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birdiaconia Workspace",
  description: "Birdiaconia 운영실을 위한 정보 중심 워크스페이스",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
