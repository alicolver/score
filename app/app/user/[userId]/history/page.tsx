import {getConfigWithAuthHeader} from "@/app/api/client-config"
import {MatchesHeader} from "@/app/components/ticket/matches-header"
import Ticket from "@/app/components/ticket/ticket"
import {ListMatchesFilterTypeEnum, Match, MatchApi} from "@/client"
import {redirect} from "next/navigation"
import BackButton from "@/app/components/back-button";
import React from "react";

export default async function Home({
    params,
    searchParams,
  }: {
    params: { userId: string }
    searchParams: { [key: string]: string | string[] | undefined }
}): Promise<React.JSX.Element> {

    if (searchParams["first"] === undefined || searchParams["last"] === undefined) {
        redirect("/app")
    }

    const firstName = searchParams["first"] 
    const lastName = searchParams["last"]

    async function getGames(): Promise<Match[]> {
        try {
            const matchApi = new MatchApi(await getConfigWithAuthHeader())
            const liveMatches: Match[] = await matchApi.listMatches({
                filterType: ListMatchesFilterTypeEnum.Live,
                userId: params.userId
            })
            const completed: Match[] = await matchApi.listMatches({
                filterType: ListMatchesFilterTypeEnum.Completed,
                userId: params.userId
            })
            return [...liveMatches, ...completed]
        } catch (error) {
            console.log(error)
            return []
        }
    }

    return(
        <div className="min-h-svh bg-gray-900">
            <div className="w-full max-w-4xl mx-auto relative">
                <div className="flex justify-between p-4">
                    <div>
                        <BackButton/>
                    </div>
                </div>
                <div className="p-2 w-full bg-gray-900 flex flex-col items-center">
                    <MatchesHeader showInfoButton={false} title={`${firstName} ${lastName}`}/>
                    {(await getGames()).map((match, index) => {
                    return (
                        <Ticket 
                            match={match} 
                            key={match.matchId} 
                            collapse={true}
                            admin={false}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
}