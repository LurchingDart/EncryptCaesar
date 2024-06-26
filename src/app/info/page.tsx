import { fontSpaceArmor } from "@/styles/fonts";

export default function Info() {
    return (
        <main className="flex flex-col h-screen items-center justify-center">
            <h1 className={`${fontSpaceArmor.className} text-5xl`}>
                Info
            </h1>
        </main>
    );
}
