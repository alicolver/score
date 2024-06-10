

import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { BackIcon } from "@/app/util/back";
import { Toaster } from "react-hot-toast";
import Share from "./share";
import { isLoggedIn } from "@/app/auth/jtw-handler";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { leagueId: string } }): Promise<React.JSX.Element> {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) redirect("/login")

    return (
        <div className="bg-gray-900">
            <div className="w-full max-w-screen-lg mx-auto relative">
                <div className="flex justify-between p-4">
                    <div>
                        <Link href="/app">
                            <Button isIconOnly>
                                <BackIcon />
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Share leagueId={params.leagueId} />
                    </div>
                </div>
                <div className="min-h-screen p-2 w-full bg-gray-900 flex flex-col items-center mt-8">
                    <Leaderboard leagueId={params.leagueId} limit={false} />
                </div>
            </div>
        </div>
    );
}
