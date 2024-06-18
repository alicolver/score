'use client'

import React, { useState } from "react";
import {PredictionWithUser} from "@/client";

export default function PredictionData(props: {
    predictionWithUser: PredictionWithUser,
    disablePulse: boolean
}): React.JSX.Element {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div
            className="flex w-full items-center"
            onClick={() => setIsLoading(!props.disablePulse)}
            style={{animation: isLoading ? "pulse 0.5s infinite" : ""}}
        >
            <div className="w-3/4 text-gray-200">
                <div className="w-full font-bold">
                    {`${props.predictionWithUser.user.firstName} ${props.predictionWithUser.user.familyName}`}
                </div>
                <div>
                    {props.predictionWithUser.prediction.homeScore} - {props.predictionWithUser.prediction.awayScore}
                </div>
            </div>
            <div className="w-1/4 text-4xl font-bold text-gray-200">
                {props.predictionWithUser.prediction.points}
            </div>
        </div>
    )
}