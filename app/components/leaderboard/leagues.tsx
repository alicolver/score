import React from "react";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {League, LeagueApi, UserApi} from "@/client";
import { Button, Link } from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {getUserId} from "@/app/auth/jtw-handler";

export default async function Leagues(): Promise<React.JSX.Element> {

    const userId = getUserId()

    const config = await getConfigWithAuthHeader()

    async function getLeagues(): Promise<League[]> {
        try {
            const userClient = new UserApi(config)
            return await userClient.getUserLeagues()
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async function getPositionForLeague(leagueId: string): Promise<number> {
        if (userId === undefined) {
            return 0
        }

        try {
            const leagueClient = new LeagueApi(config)
            const league = await leagueClient.getLeagueLeaderboard({ leagueId: leagueId })
            const position = league
                .leaderboard
                .find(entry => entry.user.userId === userId)
                ?.position
            return position === undefined ? 0 : position
        } catch (error) {
            console.log(error)
            return 0
        }
    }

    return (
        <div className="w-full max-w-xl p-4 mb-2 text-center">
            <span className="text-white font-bold text-lg">Your Leagues</span>
                {(await getLeagues()).map(league => (
                    <div key={league.leagueId} className="w-full flex">
                        <Link href={`app/league/${league.leagueId}/leaderboard`} className="w-full">
                            <div className="flex w-full justify-around rounded-3xl p-2 text-white"
                                 style={{
                                     backgroundColor: "#21D4FD",
                                     backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
                                 }}>
                                <div className="w-2/3 font-bold">{league.name}</div>
                                <div><span className="font-bold">Position:</span> {getPositionForLeague(league.leagueId)}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            <div className="flex w-full justify-around pt-1">
                <Button className={BUTTON_CLASS} style={{width: "100%", marginRight: "5px"}}>
                    Join a League
                </Button>
                <Button className={BUTTON_CLASS} style={{width: "100%", marginLeft: "5px"}}>
                    Create a League
                </Button>
            </div>
        </div>
    )
}