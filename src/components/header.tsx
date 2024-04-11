"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

const navLinks = [
    {name: "HOME", href:"/"},
    {name: "ABOUT", href:"/info"},
    {name: "USAGE", href:"/usage"},
    {name: "EXAM", href:"/exam"},
]

export default function Header() {
    const pathname = usePathname();


    return (
        <header className="w-full pt-7">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-center gap-14">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link href={link.href} key={link.name}>
                            <Button variant="link">
                                <span className={isActive ? "font-heading line-through text-4xl" : "font-heading text-4xl"}>
                                    {link.name}
                                </span>
                            </Button>
                        </Link>
                    )
                })}
            </div>
        </header>
    )
}

//className="font-heading line-through text-4xl"