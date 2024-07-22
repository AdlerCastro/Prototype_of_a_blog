import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ReactQueryProvider from "@/utils/ReactQueryProvider";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogzin",
  description: "Prototype for a blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <SessionProvider session={session}>
            <Header />
            {children}
          </SessionProvider>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
