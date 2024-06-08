import {cookies} from "next/headers";
import {TOKEN_COOKIE_KEY} from "@/app/api/api";
import {jwtDecode} from "jwt-decode";

export function getUserId(): string | undefined {
    try {
        const token: string | undefined = cookies().get(TOKEN_COOKIE_KEY)?.value
        if (token === undefined) {
            return ""
        }
        const decoded = jwtDecode(token)
        console.log(decoded)
        return decoded.sub
    } catch (error) {
        console.log(error)
        return undefined
    }
}