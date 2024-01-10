import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const themeInitializerScript = `
      (function () {
         const theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
         if(theme === 'dark') document.documentElement.classList.add("dark")
      })();
  `;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-dark-color dark:text-white">
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <div className="min-h-screen flex-col justify-between w-[600px] m-auto relative pb-[200px] ">
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
