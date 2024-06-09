import React from "react";
import { isLoggedIn } from "../auth/jtw-handler";
import { redirect } from "next/navigation";
import Login from "./login";

const ServerLogin = async () => {
    const loggedIn = await isLoggedIn()
    if (loggedIn) redirect("/app")

    return <Login/>
}

export default ServerLogin