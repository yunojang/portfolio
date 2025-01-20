import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import MouseCursor from "./common/components/MouseCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JANGYUNHO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [introState, setIntroState] = useState<IntroState>(IntroState.NO);

  return (
    <html lang="en">
      <body
        className={`${notoSansKR.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="relative">
          <MouseCursor />

          {children}

          <Footer />

          <div className="fixed w-[740px] left-1/2 -translate-x-1/2 bottom-24 z-50">
            <NavigationBar />
          </div>
        </section>
      </body>
    </html>
  );
}
