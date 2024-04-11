import type {Metadata} from "next";
import "@/styles/globals.css";
import { fontChakra, fontOrbitron } from "@/styles/fonts";
import { cn } from "@/utils/cn"
import {BackgroundMatrix} from "@/components/backgroundMatrix";

export const metadata: Metadata = {
    title: "EncryptCaesar",
    description: "EncryptCesar is a simple web app to encrypt and decrypt messages using the Caesar cipher.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body className={cn(
            "flex h-screen relative bg-background text-foreground font-body antialiased",
            fontChakra.variable,
            fontOrbitron.variable,
        )}>
            <BackgroundMatrix />
            <div className="w-full h-lvh flex flex-col absolute">
                <main className="w-full">{children}</main>
            </div>
        </body>
        </html>
    );
}