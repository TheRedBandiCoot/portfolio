import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggler from "@/components/ThemeToggler";
import { House, MonitorCog, Send, User } from "lucide-react";
import { FloatingDoc } from "@/components/floating-doc";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my Official Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <MonitorCog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <Send className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="theme"
        >
          <div className="flexify relative min-h-screen">
            <Navbar />
            <ThemeToggler />
            <div className="flexify w-full flex-col px-4 py-4 sm:container sm:w-[90%]">
              {children}
              <div className="h-14">
                {/* Add extra content here */}
                <FloatingDoc items={links} mobileClassName="translate-y-20" />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
