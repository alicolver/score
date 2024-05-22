import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";

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
            <body className={montserrat.className}>
            <Providers>
                {children}
            </Providers>
            </body>
        </html>
    );
}
