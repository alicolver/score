import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import {LEADERBOARD, MATCH} from "@/app/util/sample-api-data";
import Ticket from "@/app/components/ticket/ticket";
import {ListMatchesFilterTypeEnum, Match, MatchApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

export default async function Home(): Promise<React.JSX.Element> {

    async function getGames(): Promise<Match[]> {
        try {
            const matchApi = new MatchApi(await getConfigWithAuthHeader())
            const matches = await matchApi.listMatches({ filterType: ListMatchesFilterTypeEnum.Upcoming })
            console.log(matches)
            return matches
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
            {(await getGames()).map(match => {
                return (<Ticket match={match} key={match.matchId}/>)
            })}
            <Ticket match={MATCH}/>
            <Leaderboard entries={[...LEADERBOARD, ...LEADERBOARD]}/>
        </main>
    );
}
