// import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { roboto } from "@/lib/font";
import ButtonToTop from "@/components/ui/button-to-top";

// export const metadata: Metadata = {
//   title: "Viettel CX",
//   description: "Công ty TNHH MTV dịch vụ khách hàng Viettel",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased max-w-[100dvw] overflow-x-hidden"
      >
        <Header />
        <aside
          className={`bg-[#EA0033] w-fit px-3 py-2 sm:py-3 sm:px-4 fixed right-[0%] translate-x-12 top-[50%] z-[999] rotate-90 rounded-b-xl`}
        >
          <p
            className={` uppercase ${roboto.className} font-semibold text-white text-center antialiased`}
          >
            Yêu cầu ngay
          </p>
        </aside>
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
