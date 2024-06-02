import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import {LEADERBOARD} from "@/app/util/sample-api-data";
import Ticket from "@/app/components/ticket/ticket";

export default function Home(): React.JSX.Element {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-900">
            <Ticket/>
            <Leaderboard entries={[...LEADERBOARD, ...LEADERBOARD]} />
        </main>
    );
}
