import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import MatchesToPredict from "@/app/components/ticket/matches-to-predict";
import Link from "next/link";
import SignOutButton from "@/app/components/sign-out-button";
import {redirectIfSignedOut} from "@/app/app/redirect-if-signed-out";
import Dashboard from "@/app/components/leaderboard/dashboard";
import Headline from "@/app/components/points/headline";

export default function Home(): React.JSX.Element {
    redirectIfSignedOut()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
            <div className="absolute right-4 top-3">
                <Link href="/"><SignOutButton/></Link>
            </div>
            <p className="text-xl font-bold mt-4 text-white">PREDICTABALL</p>
            <Headline/>
            <MatchesToPredict/>
            <Dashboard/>
            <Leaderboard leagueId={"global"}/>
        </main>
    );
}
