import type { Metadata } from "next";
import { ReactNode } from "react";
import { getSession } from "../auth";
import Providers from "../providers";

import "@/shared/presenter/assets/css/globals.css";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "NextJS DDD Template",
  description: "A NextJS DDD Template",
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getSession();

  if (!session) {
    return redirect("/signin");
  }

  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
