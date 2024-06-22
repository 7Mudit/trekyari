import Header from "@/components/dashboard/layout/header";
import Sidebar from "@/components/dashboard/layout/sidebar";
import type { Metadata } from "next";
import "./dashboard.css";
import { Toaster } from "@/components/ui/toaster";

import ThemeProvider from "~/components/dashboard/layout/ThemeToggle/theme-provider";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-hidden pt-16">
            <Toaster />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}