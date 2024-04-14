import { fontSpaceArmor } from "@/styles/fonts";

export default function Exam() {
    return (
        <main className="flex flex-col w-full relative z-20">
            <div className="flex flex-col w-full h-full items-center space-y-16">
                <h1 className={`${fontSpaceArmor.className} text-7xl leading-none text-center`}>
                    EXAM
                </h1>
                <ol className="border-foreground border rounded-md px-3 py-2 flex flex-col gap-5 bg-background w-2/3">
                    <p>1.- Encuentra la palabra cifrada a partir de la pista.</p>
                    <li>
                        <p className="ml-2">a) Si la capital de Turquía es Wjgwnw, encuentra el nombre del superhéroe:
                            Zwnazareh.</p>
                        <b className="ml-4">Daredevil - 22 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">b) Si el actor de la serie Mr. Robot es Xgso Sgrkq, encuentra el nombre del
                            hacker: <i>Punt Jxgvvkx</i>.</p>
                        <b className="ml-4">John Drapper - 6 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">c) Encuentra la palabra cifrada a partir de la pista.</p>
                        <b className="ml-4">Prince - 4 espacios</b>
                        <b className="ml-4">Katty Perry - 1 espacio</b>
                        <b className="ml-4">Michael Jackson - 24 espacios</b>
                    </li>
                    <li>
                        <p className="ml-2">d) El protocolo LLA, LYMI, AMMIL y LLE, son protocolos que sirven para
                            comunicarnos sobre internet de forma segura.</p>
                        <b className="ml-4">SSH, SFTP, HTTPS y SSL - 19 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">e) Cifren su primer nombre con el último digito del número de la persona que
                            les gusta.</p>
                        <b className="ml-4">Oxlv Doihuhc - 4 espacios de diferencia</b>
                    </li>
                </ol>
                <ol className="border-foreground border rounded-md px-3 py-2 flex flex-col gap-5 bg-background w-2/3">
                    <p>
                        2.- Descifra las siguientes frases:
                    </p>
                    <li>
                        <p className="ml-2">a) Kg Zczgrm dgs dgs → Pista, las vocales van en un sentido y las
                            consonantes en otro y tienen diferentes posiciones.</p>
                        <b className="ml-4">Mi Bebito fiu fiu - 24 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">b) Fstsdrzx xj fywngzdj zs fyfvzj rfxnat f xnyntx lzgjwsfrjsyfqjx
                            gnjqtwwzxtx.</p>
                        <b className="ml-4">Anonymus se atribuye un ataque masivo a sitios gubernamentales bielorrusos -
                            5 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">c) Ti kwvnqlmvkqitqlil, ti lqaxwvqjqtqlil g ti qvbmozqlil am kwvaqlmziv kwuw
                            twa xqtizma lm ti amoczqlil qvnwzuábqki.</p>
                        <b className="ml-4">La confidencialidad, la disponibilidad y la integridad se consideran como
                            los pilares de la seguridad informática - 8 espacios</b>
                    </li>
                    <li>
                        <p className="ml-2">d) Uwáhynhf js qf ijju bjg.</p>
                        <b className="ml-4">Practica en la deep web. - 5 espacios de diferencia</b>
                    </li>
                    <li>
                        <p className="ml-2">e) Rypcy, gltcqrgeyp cj GQM27001.</p>
                        <b className="ml-4">Tarea investigar el ISO 27001 - 24 espacios de diferencia</b>
                    </li>
                </ol>
            </div>
        </main>
    );
}
