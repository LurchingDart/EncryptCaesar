import type { Metadata } from "next";
import "@/styles/globals.css";
import { fontChakra, fontOrbitron } from "@/styles/fonts";
import { cn } from "@/utils/cn"

export const metadata: Metadata = {
  title: "EncryptCaesar",
  description: "EncryptCesar is a simple web app to encrypt and decrypt messages using the Caesar cipher.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-svh bg-background text-foreground font-body antialiased",
          fontChakra.variable,
          fontOrbitron.variable,
      )}>
        {children}
      </body>
    </html>
  );
}
