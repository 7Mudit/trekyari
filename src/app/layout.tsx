import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
import { cn } from "~/lib/utils";
import localFont from "next/font/local";

import "./globals.css";
import { Inter, Rethink_Sans } from "next/font/google";
import { Debug } from "~/components/ui/debug";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Rethink_Sans({ subsets: ["latin"], display: "swap" });
const calSans = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
});
export const metadata: Metadata = {
  title: "Trekyaari",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, calSans.variable, "antialiased")}>
          {children}
          <Debug />
        </body>
      </html>
    </ClerkProvider>
  );
}
