import React from "react";
import {PredictionWithUser} from "@/client";
import Link from "next/link";
import {generateHistoryPageLinkForUser} from "@/app/app/user/[userId]/history/user-link-generator";
import { calculateResult, RESULT_TO_STYLE } from "@/app/components/points/result-styles"

export default function PredictionData(props: {
    predictionWithUser: PredictionWithUser
}): React.JSX.Element {
    return (
        <Link
            className="w-full flex items-center mt-2 max-w-xl text-center p-3 rounded-3xl animate-appearance-in animation-delay-0"
            style={RESULT_TO_STYLE.get(calculateResult(props.predictionWithUser.prediction.points!))!}
            href={generateHistoryPageLinkForUser(props.predictionWithUser.user)}
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