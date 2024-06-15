import React from "react";
import {PredictionWithUser} from "@/client";
import {failStyle, neutralStyle, successStyle} from "@/app/util/css-styles";
import Link from "next/link";

enum Result {
    SCORE, RESULT, NEITHER
}

export default function PredictionData(props: {
    predictionWithUser: PredictionWithUser
}): React.JSX.Element {

    const MOVEMENT_TO_COLOR: Map<Result, React.CSSProperties> = new Map([
        [Result.SCORE, successStyle],
        [Result.NEITHER, failStyle],
        [Result.RESULT, neutralStyle]
    ])

    function calculateResult(points: number): Result {
        if (points === 5) {
            return Result.SCORE
        }
        if (points === 2) {
            return Result.RESULT
        }
        return Result.NEITHER
    }

    return (
        <Link
            className="w-full flex items-center mt-2 max-w-xl text-center p-3 rounded-3xl animate-appearance-in animation-delay-0"
            style={MOVEMENT_TO_COLOR.get(calculateResult(props.predictionWithUser.prediction.points!))!}
            href={`/app/user/${props.predictionWithUser.user.userId}/history?first=${props.predictionWithUser.user.firstName.replace(/\s/g,'')}&last=${props.predictionWithUser.user.familyName.replace(/\s/g,'')}`}
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
        </Link>
    )
}