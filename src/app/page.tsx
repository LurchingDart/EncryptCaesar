import { fontSpaceArmor } from "@/styles/fonts";
import {MessageForm} from "@/components/forms/messageForm";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex w-full h-full relative z-20">
          <div className="hidden sm:flex flex-col flex-1 h-full items-center justify-around">
              <div className="w-fit h-fit font-heading text-center text-md -space-y-2 xs:text-lg">
                  <p className="-rotate-90">
                      3
                  </p>
                  <p className="-rotate-90">
                      0
                  </p>
                  <p className="-rotate-90">
                      /
                  </p>
                  <p className="-rotate-90">
                      8
                  </p>
                  <p className="-rotate-90">
                      0
                  </p>
                  <p className="-rotate-90">
                      /
                  </p>
                  <p className="-rotate-90">
                      7
                  </p>
                  <p className="-rotate-90">
                      7
                  </p>
                  <p className="-rotate-90">
                      0
                  </p>
                  <p className="-rotate-90">
                      2
                  </p>
              </div>
              <div className="w-3 h-48 bg-foreground"></div>
          </div>
          <div className="w-full sm:w-11/12 h-full shrink-0 flex flex-col justify-center items-center gap-16 2xl:gap-24">
              <header>
                  <h1 className={`${fontSpaceArmor.className} leading-none text-center text-xl 4xs:text-fluid`}>
                      Encrypt Caesar
                  </h1>
              </header>
              <section className="w-full flex flex-col xl:flex-row">
                  <div className="flex flex-1 justify-center">
                      <MessageForm
                          Label="Message"
                          Placeholder="Enter the message you want to encrypt"
                          id="encrypt"
                          isLocked={true}
                      />
                  </div>
                  <div className="flex flex-1 justify-center">
                      <MessageForm
                          Label="Caesar Cipher"
                          Placeholder="Enter the message you want to decrypt"
                          id="decrypt"
                          isLocked={false}
                      />
                  </div>
              </section>
          </div>
          <div className="hidden sm:flex flex-col flex-1 h-full items-center justify-around">
              <div className="w-1 h-52 bg-foreground"></div>
              <Image src="/assets/rightSticker.svg" alt="Encrypt Caesar Logo" width={34} height={260}/>
          </div>
      </main>
  );
}
