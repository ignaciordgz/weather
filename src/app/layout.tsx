import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { poppins } from "./ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "weather",
  description: "Generated by create next app",
  icons: "https://cdn.icon-icons.com/icons2/571/PNG/512/sunset-outlined-weather-symbol-of-the-sun-on-the-horizon-line_icon-icons.com_54640.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
