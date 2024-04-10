import { Chakra_Petch, Orbitron,  } from "next/font/google";
import localFont from "next/font/local"

export const fontChakra = Chakra_Petch({
    subsets: ['latin'],
    variable: '--font-Chakra',
    weight: ['300', '400', '500', '600', '700']
})

export const fontOrbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-Orbitron',
    weight: ["400", "500", "600", "700", "800", "900"],

})

export const fontSpaceArmor = localFont({
    display: 'swap',
    src: '../../public/fonts/SpaceArmor.otf',
    preload: true,
})