import React, { Suspense } from "react";
import { LeaderboardInnerMovementEnum, User } from "@/client";
import LeaderboardEntry from "./leaderboard-entry";
import Entries from "@/app/components/leaderboard/entries";
import { capitalizeFirstLetter } from "@/app/util/text";

interface LeaderboardProps {
    leagueId: string,
    limit: boolean
}

export default function Leaderboard(props: LeaderboardProps): React.JSX.Element {

    const defaultUser: User = {
        firstName: "Loading...",
        familyName: "",
        fixedPoints: 0,
        livePoints: 0,
        userId: ""
    }

    return (
        <div className="w-full max-w-screen-lg mx-auto">
            <div className="w-full max-w-2xl p-5 text-center mx-auto">
                <Suspense fallback={<LeaderboardEntry entry={{ position: 1, movement: LeaderboardInnerMovementEnum.Unchanged, user: defaultUser }} isUser={false} />}>
                    <Entries leagueId={props.leagueId} limit={props.limit} />
                </Suspense>
            </div></div>
    )
}