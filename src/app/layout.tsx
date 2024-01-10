import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { openGraphImage } from "./shared-metadata";

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
      </head>
      <body className="dark:bg-dark-color dark:text-white">
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
