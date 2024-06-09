import LeaderboardEntry from "@/app/components/leaderboard/leaderboard-entry";
import React from "react";
import {GetLeagueLeaderboard200Response, LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {filterWithContext} from "@/app/util/array";
import {getUserId} from "@/app/auth/jtw-handler";

export interface EntriesProps {
    leagueId: string,
    limit: boolean
}

export default async function Entries(props: EntriesProps): Promise<React.JSX.Element> {

    const userId = getUserId()

    async function getLeaderboard(): Promise<GetLeagueLeaderboard200Response | undefined> {
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            return await leagueApi.getLeagueLeaderboard({leagueId: props.leagueId})
        } catch (error) {
            return undefined
        }
    }

    const leaderboardData = await getLeaderboard()

    const leaderboard = async () => {
        if (leaderboardData === undefined) {
            return []
        }
        const wholeLeaderboard = leaderboardData?.leaderboard
        if (!props.limit) {
            return wholeLeaderboard
        }
        const leader = wholeLeaderboard[0]
        const elementsForLeaderboard = filterWithContext(
            wholeLeaderboard,
            (element) => element.user.userId === userId,
            4
        )
        return elementsForLeaderboard.find(x => x === leader) !== undefined
            ? elementsForLeaderboard
            : [leader].concat(elementsForLeaderboard)
    }

    return (
        <>
            <p className="pb-2 text-white text-xl font-bold">{leaderboardData?.leagueName} Standings</p>
            {(await leaderboard()).map(x => <LeaderboardEntry
                key={x.position}
                entry={x}
                isUser={x.user.userId === userId}
            />)}
        </>
    )
}