import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="relative">
          {children}

          <Footer />

          <div className="fixed w-[740px] left-1/2 -translate-x-1/2 bottom-24">
            <NavigationBar />
          </div>
        </section>
      </body>
    </html>
  );
}
