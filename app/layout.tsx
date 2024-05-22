import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import {NextUIProvider} from "@nextui-org/react";

const montserrat = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Predictaball",
    description: "A score predictor for Euro 2024",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <NextUIProvider>
            <body className={montserrat.className}>
            {children}
            <Footer/>
            </body>
        </NextUIProvider>
        </html>
    );
}
