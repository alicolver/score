import {Button} from "@nextui-org/react";
import React from "react";
import Link from "next/link";

export function Header(): React.JSX.Element {
    return <div className="z-50 w-full items-center justify-between text-sm flex max-w-3xl">
        PREDICTABALL.LIVE
        <Link href="/login">
            <Button className={"bg-gradient-to-tr from-blue-600 to-green-300 inline-block shadow-lg text-white"}>
                Login
            </Button>
        </Link>
    </div>;
}
