import {isAdmin, isLoggedIn} from "@/app/auth/jtw-handler";
import {redirect} from "next/navigation";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import React from "react";

const AuthCheck = async () => {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) redirect("/login")

    const isUserAdmin = await isAdmin()

    return (
        <>
            {isUserAdmin && <div className="absolute left-4 top-3">
                <Link href="/app/admin"><Button size="sm" className={BUTTON_CLASS}>Admin</Button></Link>
            </div>}
        </>
    )
}

export default AuthCheck