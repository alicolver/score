import {Providers} from "@/app/providers";
import { redirect } from "next/navigation";
import React from "react";
import { isLoggedIn } from "../auth/jtw-handler";

export default async function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) redirect("/login")

    return (
        <Providers>
            {children}
        </Providers>
    );
}