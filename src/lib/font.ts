import { Titillium_Web, Inter, Sarabun, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const sarabun = Sarabun({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const fsMagistral = localFont({
  src: "../assets/fonts/FS_Magistral-Medium.woff2",
  display: "swap",
  weight: "600",
  variable: "--font-fs-magistral",
})

export const fsMagistralBook = localFont({
  src: "../assets/fonts/FS_Magistral-Book.woff2",
  display: "swap",
  weight: "400",
  variable: "--font-fs-magistral-book",
})