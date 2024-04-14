import type {Metadata} from "next";
import "@/styles/globals.css";
import { fontChakra, fontOrbitron } from "@/styles/fonts";
import { cn } from "@/utils/cn"
import {BackgroundMatrix} from "@/components/backgroundMatrix";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: "EncryptCaesar",
    description: "EncryptCesar is a simple web app to encrypt and decrypt messages using the Caesar cipher.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body className={cn(
            "w-full min-h-max h-screen flex flex-col relative bg-background text-foreground font-body antialiased",
            fontChakra.variable,
            fontOrbitron.variable,
        )}>
            <Header/>
            {children}
            <Footer/>
            <BackgroundMatrix/>
        </body>
        </html>
    );
}