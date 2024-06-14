import React from "react";
import {LeaderboardInner, LeaderboardInnerMovementEnum} from "@/client";
import {DOWN_ARROW, NEUTRAL_ARROW, UP_ARROW} from "@/app/components/leaderboard/icons";
import Link from "next/link"

interface LeaderboardEntryProps {
    entry: LeaderboardInner,
    isUser: boolean
}

export default function LeaderboardEntry(props: LeaderboardEntryProps): React.JSX.Element {

    const scale = props.entry.position === 1 ? 1 : props.isUser ? 0.95 : 0.90

    const MOVEMENT_TO_COLOR: Map<LeaderboardInnerMovementEnum, React.CSSProperties> = new Map([
        [LeaderboardInnerMovementEnum.Improved, {
            backgroundColor: "#08e8ea",
            backgroundImage: "linear-gradient(0deg, #08e8ea 0%, #2AF598 100%)",
            scale: scale
        }],
        [LeaderboardInnerMovementEnum.Worsened, {
            backgroundColor: "#FFE53B",
            backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
            scale: scale
        }],
        [LeaderboardInnerMovementEnum.Unchanged, {
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            scale: scale
        }]
    ])
    const MOVEMENT_TO_ICON: Map<LeaderboardInnerMovementEnum, React.JSX.Element> = new Map([
        [LeaderboardInnerMovementEnum.Unchanged, NEUTRAL_ARROW],
        [LeaderboardInnerMovementEnum.Worsened, DOWN_ARROW],
        [LeaderboardInnerMovementEnum.Improved, UP_ARROW]
    ])

    return (
        <Link 
            className="max-w-2xl w-full"
            href={`/app/user/${props.entry.user.userId}/history?first=${props.entry.user.firstName.replace(/\s/g,'')}&last=${props.entry.user.familyName.replace(/\s/g,'')}`}>
            <div
                className="max-w-2xl w-full p-4 flex flex-row rounded-3xl text-white mb-5"
                style={MOVEMENT_TO_COLOR.get(props.entry.movement)!}
            >
                <div className="flex-1 flex items-center">
                    <div className="flex flex-row items-center justify-center font-bold">
                        {props.entry.position}
                        {MOVEMENT_TO_ICON.get(props.entry.movement)!}
                    </div>
                </div>
                <div className="flex">
                    {props.entry.user.firstName + " " + props.entry.user.familyName}
                </div>
                <div className="flex-1 items-center justify-end text-right font-bold">
                    {props.entry.user.fixedPoints + props.entry.user.livePoints}
                </div>
            </div>
        </Link>
    )
}