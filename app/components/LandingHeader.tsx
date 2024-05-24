'use client'

import {Button} from "@nextui-org/react";
import React from "react";
import {navigateTo} from "@/app/actions";

export function Header() {
    return <div className="z-10 w-full items-center justify-between text-sm flex max-w-3xl">
        PREDICTABALL.LIVE
        <Button
            className={"bg-gradient-to-tr from-blue-600 to-green-300 inline-block shadow-lg text-white"}
            onClick={() => navigateTo("login")}
        >
            Login
        </Button>
    </div>;
}
