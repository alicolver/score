import {LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {redirect} from "next/navigation";

export default async function Home({params}: { params: { leagueId: string } }) {

    try {
        const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
        await leagueApi.joinLeague({ leagueId: params.leagueId })
        redirect("/app")
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            Error Joining {params.leagueId}, please try again.
        </div>
    );
}
