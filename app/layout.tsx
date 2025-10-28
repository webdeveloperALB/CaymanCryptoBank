import type React from "react";
import type { Metadata } from "next";
import PresenceTracker from "@/components/client-presence-tracker";
import "./globals.css";
import LayoutDebugger from "@/components/dev/layout-debugger"; 

export const metadata: Metadata = {
  title: "Cayman Crypto Bank",
  description: "Cayman Crypto Bank",
  generator: "Cayman Crypto Bank",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PresenceTracker />
        <LayoutDebugger /> {/* Optional client-side logger */}
        {children}
      </body>
    </html>
  );
}
