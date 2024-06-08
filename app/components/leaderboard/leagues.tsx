import React from "react";
import {getConfigWithAuthHeader} from "@/app/api/client-config";
import {League, UserApi} from "@/client";
import {Button, Link} from "@nextui-org/react";
import {getUserId} from "@/app/auth/jtw-handler";
import {getPositionForLeague} from "@/app/app/league/get-position-for-league";
import Join from "@/app/app/league/join";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import JoinLeague from "@/app/app/league/join";

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
                            <div>
                                <span className="font-bold">Position: </span>
                                {getPositionForLeague(league.leagueId, config, userId)}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            <div className="w-full justify-around pt-2">
                <Link href="/app/league/create" className="w-full">
                    <Button className={BUTTON_CLASS} style={{width: "100%", marginBottom: "5px"}}>
                        Create a League
                    </Button>
                </Link>
            </div>
            <JoinLeague/>
        </div>
    )
}