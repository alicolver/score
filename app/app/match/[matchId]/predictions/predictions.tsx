'use client'

import React, {useEffect, useState} from "react";
import {League, Match, MatchApi, Prediction} from "@/client";
import {getConfigWithAuthHeaderClient} from "@/app/api/client-config-client-side";
import PredictionData from "@/app/app/match/[matchId]/predictions/prediction";
import Ticket from "@/app/components/ticket/ticket";
import { Select, SelectItem } from "@nextui-org/react"
import BackButton from "@/app/components/back-button"

export default function Predictions(
    props: {
        leagueId: string,
        matchId: string,
        leagues: League[],
        match: Match
    }
): React.JSX.Element {
    const [leagueId, setLeagueId] = useState(props.leagueId)
    const [predictions, setPredictions] = useState<Prediction[]>([])

    useEffect(() => {
        try {
            getConfigWithAuthHeaderClient().then(config => {
                const matchApi = new MatchApi(config)
                matchApi
                    .getMatchPredictions({
                        matchId: props.matchId,
                        leagueId: leagueId
                    }).then(preds =>  setPredictions(preds))
                })
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div className="min-h-svh bg-gray-900">
            <div className="w-full max-w-4xl mx-auto relative">
                <div className="flex justify-between p-4">
                    <div>
                        <BackButton/>
                    </div>
                </div>
                <div className="p-2 w-full bg-gray-900 flex flex-col items-center">
                    {<Ticket forPredictionPage match={props.match} collapse admin={false}/>}
                    <Select
                        label="Pick A League"
                        className="w-1/2"
                        onChange={(event) => setLeagueId(event.target.value)}
                    >
                        {props.leagues.map(league => {
                            return(
                                <SelectItem key={league.leagueId}>
                                    {league.name}
                                </SelectItem>
                            )
                        })}
                    </Select>
                    {predictions.map((prediction, index) => <PredictionData key={index} prediction={prediction}/>)}
                </div>
            </div>
        </div>
    )
}