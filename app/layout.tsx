import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birdiaconia · 버디아코니아",
  description: "봉사·체류·배움·관계와 지역 활동을 하나의 흐름으로 연결하는 Birdiaconia",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
