import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import MatchesToPredict from "@/app/components/ticket/matches-to-predict";
import Link from "next/link";
import SignOutButton from "@/app/components/sign-out-button";
import Dashboard from "@/app/components/leaderboard/dashboard";
import Headline from "@/app/components/points/headline";
import { isAdmin, isLoggedIn } from "../auth/jtw-handler";
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";
import { BUTTON_CLASS } from "../util/css-classes";


const Home = async () => {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) redirect("/login")

    const isUserAdmin = await isAdmin()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
            <div className="absolute right-4 top-3">
                <Link href="/"><SignOutButton/></Link>
            </div>
            {isUserAdmin && <div className="absolute left-4 top-3">
                <Link href="/app/admin"><Button size="sm" className={BUTTON_CLASS}>Admin</Button></Link>
            </div>}
            <p className="text-xl font-bold mt-4 text-white">PREDICTABALL</p>
            <Headline/>
            <MatchesToPredict/>
            <Dashboard/>
            <Leaderboard leagueId={"global"}/>
        </main>
    );
}

export default Home
