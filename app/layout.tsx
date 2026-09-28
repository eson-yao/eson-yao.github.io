import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name}｜游戏关卡策划作品集`,
  description: site.description,
  openGraph: {
    title: `${site.name}｜游戏关卡策划作品集`,
    description: site.description,
    images: [site.feature.image.src],
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* 标记 JS 可用，滚动显现动画只在有 JS 时启用，无 JS 也能看到全部内容 */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.setAttribute("data-js","1")`}
        </Script>
        {children}
      </body>
    </html>
  );
}
