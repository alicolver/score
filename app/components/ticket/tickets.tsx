import Ticket from "@/app/components/ticket/ticket";
import React from "react";
import {ListMatchesFilterTypeEnum, Match, MatchApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

export default async function Tickets(): Promise<React.JSX.Element> {

    async function getGames(): Promise<Match[]> {
        try {
            const matchApi = new MatchApi(await getConfigWithAuthHeader())
            return await matchApi.listMatches({filterType: ListMatchesFilterTypeEnum.Upcoming})
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return (
        <>
            {(await getGames()).map((match, index) => {
                return (<Ticket match={match} key={match.matchId} collapse={false}/>)
            })}
        </>
    )
}