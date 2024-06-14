import Link from "next/link"
import { getToken, getUserId } from "@/app/auth/jtw-handler"
import YourHistory from "@/app/components/your-history"

export default function LinkToHistory(): React.JSX.Element {

    const token = getToken()
    const userId = token?.sub
    const firstName = token !== undefined ? token["given_name"] : undefined
    const lastName = token !== undefined ? token["family_name"] : undefined

    return(
        <Link href={`/app/user/${userId}/history?first=${firstName}&last=${lastName}`}>
            <YourHistory />
        </Link>
    )
}