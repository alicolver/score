import React, {Suspense} from "react";
import {LeaderboardInnerMovementEnum, User} from "@/client";
import LeaderboardEntry from "./leaderboard-entry";
import Entries from "@/app/components/leaderboard/entries";
import {capitalizeFirstLetter} from "@/app/util/text";

interface LeaderboardProps {
    leagueId: string
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
        <div className="w-full max-w-2xl p-5 text-center">
            <p className="pb-2 text-white text-xl font-bold">{capitalizeFirstLetter(props.leagueId)} Standings</p>
            <Suspense fallback={<LeaderboardEntry entry={{ position: 1, movement: LeaderboardInnerMovementEnum.Unchanged, user: defaultUser}} />}>
                <Entries leagueId={props.leagueId}/>
            </Suspense>
        </div>
    )
}