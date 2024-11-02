import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "intership task",
  description: "intership task for level up company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`max-w-screen-2xl mx-auto text-black-200 ${yekanBakh.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
