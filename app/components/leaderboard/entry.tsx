'use client'

import React, {useState} from "react";
import {LeaderboardInner} from "@/client";

export default function Entry(props: {
    entry: LeaderboardInner,
    color: React.CSSProperties,
    icon: React.JSX.Element,
    disablePulse: boolean
}): React.JSX.Element {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div
            className={"max-w-2xl w-full p-4 flex flex-row rounded-3xl text-white mb-5"}
            style={{...props.color, animation: !isLoading ? "pulse 0.5s infinite" : ""}}
            onClick={() => {
                setIsLoading(!props.disablePulse)
            }}
        >
            <div className="flex-1 flex items-center">
                <div className="flex flex-row items-center justify-center font-bold">
                    {props.entry.position}
                    {props.icon}
                </div>
            </div>
            <div className="flex">
                {props.entry.user.firstName + " " + props.entry.user.familyName}
            </div>
            <div className="flex-1 items-center justify-end text-right font-bold">
                {props.entry.user.fixedPoints + props.entry.user.livePoints}
            </div>
        </div>
    )
}