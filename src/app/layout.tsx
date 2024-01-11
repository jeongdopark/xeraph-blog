import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { openGraphImage } from "./shared-metadata";
import Script from "next/script";
import * as gtag from "@/libs/gtags";

const themeInitializerScript = `
      (function () {
         const theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
         if(theme === 'dark') document.documentElement.classList.add("dark")
      })();
  `;

export const metadata: Metadata = {
  title: "Xeraph | blog",
  description: "Xeraph | Personal Blog",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's blog",
    description: "jeongdo's blog",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={process.env.GOOGLE_CONTENT} />
        <link rel="icon" href="/favicon.ico" />
        {process.env.NODE_ENV !== "development" && (
          <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
      </head>
      <body className="dark:bg-dark-color dark:text-white">
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV !== "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
            }}
          />
        )}
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <div className="w-[350px] min-h-screen flex-col justify-between sm:w-[600px] m-auto relative pb-[200px] ">
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
