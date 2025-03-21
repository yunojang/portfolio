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
import Script from "next/script";
import ResponsiveRedirect from "./common/components/ResponsiveRedirect";
import SmoothScroll from "./common/components/SmoothScroll";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = async (): Promise<Metadata> => {
  const host = (await headers()).get("host");
  const imageUrl = `https://${host}/images/img4.jpg`;

  return {
    title: "JANGYUNHO",
    description: "Front-end Web Developer yuno's portfolio",
    openGraph: {
      title: "Yuno-Portfolio",
      description: "Front-end Web Developer yuno's portfolio",
      images: imageUrl,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const host = (await headers()).get("host");
  // const imageUrl = `https://${host}/images/img4.jpg`;

  // const [introState, setIntroState] = useState<IntroState>(IntroState.NO);

  return (
    <html lang="en">
      {/* <head>
        <meta property="og:image" content={imageUrl} />
      </head> */}

      <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js" />

      <body
        className={`${notoSansKR.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveRedirect width={901} />

        <SmoothScroll />

        <section className="relative">
          {children}

          <Footer />

          {/* <div className="fixed w-[645px] left-1/2 -translate-x-1/2 bottom-5 z-50">
            <NavigationBar />
          </div> */}

          <div className="fixed w-fit right-3 bottom-5 z-[999]">
            <NavigationBar />
          </div>
        </section>
      </body>
    </html>
  );
}
