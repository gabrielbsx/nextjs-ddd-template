import type { Metadata } from "next";
import { ReactNode } from "react";
import { getSession } from "./auth";
import Providers from "./providers";

import "@/shared/presenter/assets/css/globals.css";

export const metadata: Metadata = {
  title: "NextJS DDD Template",
  description: "A NextJS DDD Template",
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getSession();

  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
