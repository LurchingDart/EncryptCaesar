import { fontSpaceArmor } from "@/styles/fonts";
import Header from "@/components/header";

export default function Exam() {
    return (
        <main className="flex flex-col h-screen items-center justify-center">
            <Header />
            <h1 className={`${fontSpaceArmor.className} text-5xl`}>
                Exam
            </h1>
        </main>
    );
}
