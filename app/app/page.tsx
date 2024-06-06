import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import MatchesToPredict from "@/app/components/ticket/matches-to-predict";

export default function Home(): React.JSX.Element {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
            <p className="text-xl font-bold mt-4 text-white">PREDICTABALL.LIVE</p>
            <MatchesToPredict/>
            <Leaderboard leagueId={"global"}/>
        </main>
    );
}
