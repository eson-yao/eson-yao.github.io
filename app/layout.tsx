import type { Metadata } from "next";
import { Noto_Sans_SC, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "姚一心 · 游戏关卡策划",
  description:
    "姚一心的关卡策划作品集。UE5 灰盒 Demo《雪隐》与《“新律”》，以及风景园林空间与动线实践。",
  openGraph: {
    title: "姚一心 · 游戏关卡策划",
    description: "UE5 灰盒关卡《雪隐》《“新律”》，以及空间设计作品。",
    url: "https://eson-yao.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
