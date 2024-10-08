import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Kode_Mono} from "next/font/google";
import "@/app/globals.css";
import AppBgImg from "@/app/AppImgBg";
import NavBar from "@/components/navbar/NavBar";
import Head from 'next/head'

const inter = Inter({subsets: ["latin"]});
const kode = Kode_Mono({subsets: ["latin"]});

export default function PageLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
        <Head>
            <title>Out Of The Hole</title>
        </Head>
        <div className={`${kode.className} overflow-x-clip overflow-y-scroll no-scrollbar`} >
            <div>
                {NavBar()}
                <AppBgImg/>
                {children}
            </div>
        </div>
        </div>
    );
}
