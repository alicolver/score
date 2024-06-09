import Ticket from "@/app/components/ticket/ticket";
import React from "react";
import {ListMatchesFilterTypeEnum, Match, MatchApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

interface TicketsProps {
    title: string,
    filterType: ListMatchesFilterTypeEnum
}

export default async function Tickets(props: TicketsProps): Promise<React.JSX.Element> {

    async function getGames(): Promise<Match[]> {
        try {
            const matchApi = new MatchApi(await getConfigWithAuthHeader())
            return await matchApi.listMatches({filterType: props.filterType})
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const games = await getGames()

    return (
        <>
            {games.length > 0 && <>
                <p className="w-full text-center text-white mt-3">{props.title}</p>
                {games.map((match, index) => {
                    return (<Ticket match={match} key={match.matchId} collapse={false} filterType={props.filterType}/>)
                })}
            </>
            }
        </>
    )
}