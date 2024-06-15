import React from "react";
import {Prediction} from "@/client";

enum Result {
    SCORE, RESULT, NEITHER
}

export default function PredictionData(props: {
    prediction: Prediction
}): React.JSX.Element {

    const MOVEMENT_TO_COLOR: Map<Result, React.CSSProperties> = new Map([
        [Result.SCORE, {
            background: "#16a34a",
            backgroundImage: "linear-gradient(225deg, #16a34a, #14b8a6)"
        }],
        [Result.NEITHER, {
            backgroundColor: "#FFE53B",
            backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)"
        }],
        [Result.RESULT, {
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
        }]
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

    return(
        <div
            className="w-full flex items-center mt-2 max-w-xl text-center p-3 rounded-3xl animate-appearance-in animation-delay-0"
            style={MOVEMENT_TO_COLOR.get(calculateResult(props.prediction.points!))!}
        >
            <div className="w-3/4 text-gray-200">
                <div className="w-full font-bold">
                    Name Goes here
                </div>
            <div>
                {props.prediction.homeScore} - {props.prediction.awayScore}
            </div>
            </div>
            <div className="w-1/4 text-4xl font-bold text-gray-200">
                    {props.prediction.points}
            </div>
        </div>
    )
}