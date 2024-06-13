import React from "react";
import {Prediction} from "@/client";

interface PointsOnTopProps {
    prediction: Prediction | undefined
}

export default function PointsOnTop(props: PointsOnTopProps) {
    return <div
        className="w-full absolute text-center mt-1 z-40"
        style={{
            visibility: props.prediction?.points === undefined ? "hidden" : "visible"
        }}>
        <span
            className="font-bold text-8xl bg-gradient-to-r from-blue-600 to-green-300 inline-block text-transparent bg-clip-text"
        >
            {props.prediction?.points}
        </span>
    </div>
}