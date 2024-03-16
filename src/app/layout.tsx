import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { openGraphImage } from "./shared-metadata";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import BaseLayout from "@/components/layout/BaseLayout";

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

export default function RootLayout({ children }: { children: React.ReactNode; params: string }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={process.env.GOOGLE_CONTENT} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark:bg-dark-color dark:text-white text-black-color bg-slate-50 transition-colors transition-background ease-in-out duration-500">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? <GoogleAnalytics /> : null}
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <div className="sm:w-[640px] md:w-[768px] mx-auto px-[2rem] min-h-screen relative pb-[200px] sm:text-[1rem] text-sm">
          <ThemeProvider>
            <BaseLayout>{children}</BaseLayout>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
