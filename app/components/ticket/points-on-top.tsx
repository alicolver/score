import React from "react";
import {Prediction} from "@/client";

interface PointsOnTopProps {
    prediction: Prediction | undefined
}

export default function PointsOnTop(props: PointsOnTopProps) {
    return <div
        className="absolute mt-4 z-40"
        style={{
            visibility: props.prediction?.points === undefined ? "hidden" : "visible"
        }}>
        <span className="font-bold text-7xl text-gray-900">{props.prediction?.points}</span>
    </div>
}