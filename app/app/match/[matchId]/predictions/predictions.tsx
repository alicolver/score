'use client'

import React, {useEffect, useState} from "react";
import {Match, MatchApi, Prediction} from "@/client";
import {getConfigWithAuthHeaderClient} from "@/app/api/client-config-client-side";
import PredictionData from "@/app/app/match/[matchId]/predictions/prediction";
import Ticket from "@/app/components/ticket/ticket";

export default function Predictions(
    props: {
        leagueId: string,
        matchId: string
    }
): React.JSX.Element {

    const [leagueId, setLeagueId] = useState(props.leagueId)
    const [predictions, setPredictions] = useState<Prediction[]>([])
    const [match, setMatch] = useState<Match | null>(null)

    useEffect(() => {
        try {
            getConfigWithAuthHeaderClient().then(config => {
                const matchApi = new MatchApi(config)
                matchApi.getMatch({
                    matchId: props.matchId
                }).then(result => setMatch(result))
                matchApi
                    .getMatchPredictions({
                        matchId: props.matchId,
                        leagueId: leagueId
                    }).then(preds => setPredictions(preds))
            })
        } catch (error) {
            console.log(error)
        }
    })


    return (
        <>
            {match !== null && (
                <>
                    <Ticket match={match} collapse admin={false}/>
                    {predictions.map((prediction, index) =>
                        <PredictionData key={index} prediction={prediction}/>
                    )}
                </>
            )}
        </>
    )
}