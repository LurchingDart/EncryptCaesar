import Image from "next/image";
import {fontSpaceArmor} from "@/styles/fonts";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col space-y-8 w-full justify-between px-7 relative z-20 sm:flex-row sm:pb-7">
            <Link href={"https://github.com/LurchingDart/EncryptCaesar"} className="flex justify-start items-end">
                <p className={`${fontSpaceArmor.className} sm:text-2xl leading-none text-center`}>
                    GitHub
                </p>
            </Link>
            <div className="flex justify-end">
                <Link href={"https://github.com/LurchingDart"}>
                    <Image src="/assets/footerSticker.svg" alt="Footer Sticker" width={407} height={129}/>
                </Link>
            </div>
        </footer>
    )
}