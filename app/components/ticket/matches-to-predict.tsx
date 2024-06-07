import React, {Suspense} from "react";
import Ticket from "@/app/components/ticket/ticket";
import Tickets from "@/app/components/ticket/tickets";
import {Match, MatchRoundEnum} from "@/client";

export default async function MatchesToPredict(): Promise<React.JSX.Element> {

    const defaultMatch: Match = {
        homeTeam: "...",
        awayTeam: "...",
        homeTeamFlagUri: "",
        awayTeamFlagUri: "",
        matchId: "",
        venue: "loading...",
        datetime: new Date(),
        matchDay: 0,
        round: MatchRoundEnum.GroupStage
    }

    return (
        <div className="items-center">
            <p className="w-full text-center text-white mt-3">Matches To Predict</p>
            <Suspense fallback={<Ticket match={defaultMatch}/>}>
                <Tickets/>
            </Suspense>
        </div>
    )
}