import {cookies} from "next/headers";
import {TOKEN_COOKIE_KEY} from "@/app/api/api";
import {redirect} from "next/navigation";

export function redirectIfSignedOut() {
    if (!cookies().get(TOKEN_COOKIE_KEY)) {
        redirect("/")
    }
}