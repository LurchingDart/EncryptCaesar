import Image from "next/image";
import {fontSpaceArmor} from "@/styles/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex w-full justify-between items-end mb-7 px-16">
            <Link href={"https://github.com/LurchingDart/EncryptCaesar"}>
                <p className={`${fontSpaceArmor.className} text-4xl leading-none text-center`}>
                    GitHub
                </p>
            </Link>
            <Image src="/assets/footerSticker.svg" alt="Footer Sticker" width={407} height={50}/>
        </footer>
    )
}