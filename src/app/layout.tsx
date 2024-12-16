import type { Metadata } from "next";
import { ReactNode } from "react";

import "@/shared/presenter/assets/css/globals.css";

export const metadata: Metadata = {
  title: "NextJS DDD Template",
  description: "A NextJS DDD Template",
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
