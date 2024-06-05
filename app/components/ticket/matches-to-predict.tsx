import React from "react";
import {ListMatchesFilterTypeEnum, Match, MatchApi} from "@/client";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import Ticket from "@/app/components/ticket/ticket";

export default async function MatchesToPredict(): Promise<React.JSX.Element> {

    async function getGames(): Promise<Match[]> {
        try {
            const matchApi = new MatchApi(await getConfigWithAuthHeader())
            return await matchApi.listMatches({filterType: ListMatchesFilterTypeEnum.Upcoming})
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return(
        <div className="items-center">
            <p className="w-full text-center text-white mt-3">Matches To Predict</p>
                {(await getGames()).map((match) => {
                    return (<Ticket match={match} key={match.matchId}/>)
                })}
        </div>
    )
}