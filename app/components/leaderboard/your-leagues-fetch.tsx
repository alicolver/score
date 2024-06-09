import {getUserId} from "@/app/auth/jtw-handler";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {League, UserApi} from "@/client";
import {getPositionForLeague} from "@/app/app/league/get-position-for-league";
import React from "react";
import LeagueComponent from "@/app/components/leaderboard/league";

export default async function YourLeaguesFetch(): Promise<React.JSX.Element> {

    const userId = getUserId()
    const config = await getConfigWithAuthHeader()

    async function getLeagues(): Promise<League[]> {
        try {
            const userClient = new UserApi(config)
            return await userClient.getUserLeagues()
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return(
        <>
            {(await getLeagues()).map(async league => {
                    const position = await getPositionForLeague(league.leagueId, config, userId)
                    return <LeagueComponent
                        key={league.leagueId}
                        leagueId={league.leagueId}
                        leagueName={league.name}
                        position={position}
                    />
                }
            )}
        </>
    )

}