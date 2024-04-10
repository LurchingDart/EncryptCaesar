import { fontSpaceArmor } from "@/styles/fonts";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center">
        <div className="flex flex-col w-full h-full items-center justify-center">
            <h1 className={`${fontSpaceArmor.className} text-5xl`}>
                Encrypt
            </h1>
            <h1 className={`${fontSpaceArmor.className} text-5xl`}>
                Caesar
            </h1>
        </div>
    </main>
  );
}
