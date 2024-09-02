import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rexai",
  description: "Rexai freelance webudvikler",
  verification: {
    google: "google-site-verification=3lZYv1y1D9A5Ot9WXASkhgC7-_lFP17KuFSXK6pkfAg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", inter.className)}>
        <main className="relative flex flex-col min-h-screen -mt-16">
          <Navbar />
          <div className='flex-grow flex-1'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}