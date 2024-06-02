import React, {CSSProperties} from "react";
import {LeaderboardInner, LeaderboardInnerMovementEnum} from "@/client";
import {DOWN_ARROW, NEUTRAL_ARROW, UP_ARROW} from "@/app/components/leaderboard/icons";

interface LeaderboardEntryProps {
    entry: LeaderboardInner
}

export default function LeaderboardEntry(props: LeaderboardEntryProps): React.JSX.Element {

    const MOVEMENT_TO_COLOR: Map<LeaderboardInnerMovementEnum, React.CSSProperties> = new Map([
        [LeaderboardInnerMovementEnum.Improved, {
            backgroundColor: "#08e8ea",
            backgroundImage: "linear-gradient(0deg, #08e8ea 0%, #2AF598 100%)"
        }],
        [LeaderboardInnerMovementEnum.Worsened, {
            backgroundColor: "#FFE53B",
            backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)"
        }],
        [LeaderboardInnerMovementEnum.Unchanged, {
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
        }]
    ])
    const MOVEMENT_TO_ICON: Map<LeaderboardInnerMovementEnum, React.JSX.Element> = new Map([
        [LeaderboardInnerMovementEnum.Unchanged, NEUTRAL_ARROW],
        [LeaderboardInnerMovementEnum.Worsened, DOWN_ARROW],
        [LeaderboardInnerMovementEnum.Improved, UP_ARROW]
    ])

    return (
        <div
            className="max-w-2xl w-full p-5 flex flex-row rounded-3xl text-white mb-5"
            style={MOVEMENT_TO_COLOR.get(props.entry.movement)!}
        >
            <div className="flex-1 flex align-middle">
                {props.entry.position}
                {MOVEMENT_TO_ICON.get(props.entry.movement)!}
            </div>
            <div className="flex text-">
                {props.entry.user.firstName + " " + props.entry.user.familyName}
            </div>
            <div className="flex-1 items-center justify-end text-right">
                {props.entry.user.fixedPoints + props.entry.user.livePoints}
            </div>
        </div>
    )
}