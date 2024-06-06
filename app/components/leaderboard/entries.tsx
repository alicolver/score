import LeaderboardEntry from "@/app/components/leaderboard/leaderboard-entry";
import React from "react";
import {LeaderboardInner, LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

export interface EntriesProps {
    leagueId: string
}

export default async function Entries(props: EntriesProps): Promise<React.JSX.Element> {

    async function getLeaderboard(): Promise<LeaderboardInner[]> {
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            const league = await leagueApi.getLeagueLeaderboard({leagueId: props.leagueId})
            return league.leaderboard
        } catch (error) {
            return []
        }
    }

    return (
        <>
            {(await getLeaderboard()).map(x => <LeaderboardEntry
                key={x.position}
                entry={x}
            />)}
        </>
    )
}