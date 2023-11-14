import {
  Lusitana as FontLusitana,
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const lusitana = FontLusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
})
