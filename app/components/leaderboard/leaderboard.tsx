import React from "react";
import {LeaderboardInner} from "@/client";
import LeaderboardEntry from "./leaderboard-entry";

interface LeaderboardProps {
    entries: LeaderboardInner[]
}

export default function Leaderboard(props: LeaderboardProps): React.JSX.Element {
    return (
        <div className="w-full max-w-2xl p-5">
            {props.entries.map(x => <LeaderboardEntry
                key={x.position}
                entry={x}
            />)}
        </div>
    )
}