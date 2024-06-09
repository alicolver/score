import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {BackIcon} from "@/app/util/back";

export default function Home({params}: { params: { leagueId: string } }): React.JSX.Element {
    return (
        <>
            <div className="absolute left-4 top-4">
                <Link href="/app">
                    <Button
                        isIconOnly
                    >
                        <BackIcon/>
                    </Button>
                </Link>
            </div>
            <div className="min-h-screen p-2 w-full bg-gray-900 flex items-center justify-center">
                <Leaderboard leagueId={params.leagueId}/>
            </div>
        </>
    );
}
