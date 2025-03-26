import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { roboto } from "@/lib/font";
import ButtonToTop from "@/components/ui/button-to-top";
import Chat from "./components/chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-[100dvw] overflow-x-hidden">
        <Chat />
        <Header />
        {/* <a href="tel:02462656168">
          <aside
            className={`bg-[#EA0033] w-fit cursor-pointer px-3 pr-4 py-2 sm:py-3 sm:px-4 sm:pr-5 fixed right-[0%] translate-x-12 top-[50%] z-[999] rotate-90 rounded-b-xl`}
          >
            <p
              className={` uppercase ${roboto.className} font-semibold text-white text-center antialiased`}
            >
              Liên hệ ngay
            </p>
          </aside>
        </a> */}
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
