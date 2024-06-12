import React from "react";
import Leaderboard from "@/app/components/leaderboard/leaderboard";
import Link from "next/link";
import {Button} from "@nextui-org/react";
import {BackIcon} from "@/app/util/back";
import {isLoggedIn} from "@/app/auth/jtw-handler";
import {redirect} from "next/navigation";
import {BUTTON_CLASS} from "@/app/util/css-classes";

export default async function Home(): Promise<React.JSX.Element> {
    const loggedIn = await isLoggedIn()
    if (!loggedIn) redirect("/login")

    return (
        <div className="min-h-svh bg-gray-900">
            <div className="w-full max-w-4xl mx-auto relative">
                <div className="flex justify-between p-4">
                    <div className="absolute">
                        <Link href="/app">
                            <Button isIconOnly className={BUTTON_CLASS}>
                                <BackIcon/>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="p-2 w-full bg-gray-900 flex flex-col items-center">
                    <Leaderboard leagueId={"global"} limit={false}/>
                </div>
            </div>
        </div>
    );
}
