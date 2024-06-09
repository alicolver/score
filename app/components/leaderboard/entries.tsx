import LeaderboardEntry from "@/app/components/leaderboard/leaderboard-entry";
import React from "react";
import {LeaderboardInner, LeagueApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {filterWithContext} from "@/app/util/array";
import {getUserId} from "@/app/auth/jtw-handler";

export interface EntriesProps {
    leagueId: string,
    limit: boolean
}

export default async function Entries(props: EntriesProps): Promise<React.JSX.Element> {

    const userId = getUserId()

    async function getLeaderboard(): Promise<LeaderboardInner[]> {
        try {
            const leagueApi = new LeagueApi(await getConfigWithAuthHeader())
            const league = await leagueApi.getLeagueLeaderboard({leagueId: props.leagueId})
            return league.leaderboard
        } catch (error) {
            return []
        }
    }

    const leaderboard = async () => {
        const wholeLeaderboard = await getLeaderboard()
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
            {(await leaderboard()).map(x => <LeaderboardEntry
                key={x.position}
                entry={x}
                isUser={x.user.userId === userId}
            />)}
        </>
    )
}