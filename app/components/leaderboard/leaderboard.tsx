import React from "react";
import {LeaderboardInner, LeagueApi} from "@/client";
import LeaderboardEntry from "./leaderboard-entry";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

interface LeaderboardProps {
    leagueId: string
}

export default async function Leaderboard(props: LeaderboardProps): Promise<React.JSX.Element> {

    async function getLeaderboard(): Promise<LeaderboardInner[]> {
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            const league = await leagueApi.getLeagueLeaderboard({leagueId: props.leagueId})
            console.log(league)
            return league.leaderboard
        } catch (error) {
            console.log(error)
        }
        return []
    }

    return (
        <div className="w-full max-w-2xl p-5">
            {(await getLeaderboard()).map(x => <LeaderboardEntry
                key={x.position}
                entry={x}
            />)}
        </div>
    )
}