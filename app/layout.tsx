import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-row items-center justify-between p-16 bg-slate-200">
          <button>
            <Link href={"/"}>Homepage</Link>
          </button>
          <button>
            <Link href={"/contact"}>Contact Page</Link>
          </button>
          <button>
            <Link href={"/about"}>About Page</Link>
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}