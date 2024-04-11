import { fontSpaceArmor } from "@/styles/fonts";
import {MessageForm} from "@/components/forms/messageForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col w-full h-full absolute">
          <Header />
          <div className="flex w-full h-full items-center justify-center">
              <div className="flex flex-col flex-1 h-full items-center justify-around">
                  <div>
                      <p className="-rotate-90 text-2xl font-heading">
                          2077.02.02
                      </p>
                  </div>
                  <div className="w-6 h-32 bg-foreground"></div>
              </div>
              <section className="w-10/12 h-full shrink-0 flex flex-col justify-center items-center gap-16 2xl:gap-24">
                  <h1 className={`${fontSpaceArmor.className} text-9xl leading-none text-center`}>
                      Encrypt
                      Caesar
                  </h1>
                  <div className="flex w-full">
                      <div className="flex flex-1 justify-center">
                          <MessageForm Label="Message" Placeholder="Enter the message you want to encrypt"
                                       isLocked={true}/>
                      </div>
                      <div className="flex flex-1 justify-center">
                          <MessageForm Label="Caesar Cipher" Placeholder="Enter the message you want to decrypt"
                                       isLocked={false}/>
                      </div>
                  </div>
              </section>
              <div className="flex flex-col flex-1 h-full items-center justify-around">
                  <div className="w-1 h-52 bg-foreground"></div>
                  <Image src="/assets/rightSticker.svg" alt="Encrypt Caesar Logo" width={30} height={200}/>
              </div>
          </div>
          <Footer/>
      </div>
  );
}
