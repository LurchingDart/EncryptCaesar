"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

const navLinks = [
    {name: "HOME", href:"/"},
    {name: "INFO", href:"/info"},
    {name: "DOCS", href:"/docs"},
    {name: "EXAM", href:"/exam"},
]

export default function Header() {
    const pathname = usePathname();


    return (
        <header className="flex w-full relative z-20">
            <nav className="container flex h-14 max-w-screen-2xl items-center justify-center sm:gap-5 lg:gap-14">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link href={link.href} key={link.name}>
                            <Button variant="link">
                                <span className={isActive ? "font-heading line-through text-fluid-header" : "font-heading text-fluid-header"}>
                                    {link.name}
                                </span>
                            </Button>
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}