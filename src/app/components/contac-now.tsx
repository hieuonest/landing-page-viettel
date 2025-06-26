"use client";
import React from "react";
import { roboto } from "@/lib/font";
import { arrRouterHiddenLayout } from "@/constants";
import { usePathname } from "next/navigation";

export default function ContacNow() {
    const pathname = usePathname();
    
    if (arrRouterHiddenLayout.includes(pathname)) {
        return null;
    }

    return (
        <a href="tel:0981198198">
            <aside
                className={`bg-[#EA0033] w-fit cursor-pointer px-3 pr-4 py-2 sm:py-3 sm:px-4 sm:pr-5 fixed right-[0%] translate-x-12 top-[50%] z-[999] rotate-90 rounded-b-xl`}
            >
                <p
                    className={` uppercase ${roboto.className} font-semibold text-white text-center antialiased`}
                >
                    Liên hệ ngay
                </p>
            </aside>
        </a>
    );
}
