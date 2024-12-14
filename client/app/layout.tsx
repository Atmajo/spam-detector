import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Despamify",
  description: "Check the spam rate of your writing",
  icons: [
    {
      rel: "icon",
      url: "/assets/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Image
          src={"/assets/texture.svg"}
          alt="texture"
          className="absolute top-0 left-0 w-screen h-screen object-cover"
          fill
        />
      </body>
    </html>
  );
}
