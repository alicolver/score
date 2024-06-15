import React from "react";
import {redirectIfLoggedOut} from "@/app/auth/log-in-redirect";
import Predictions from "@/app/app/match/[matchId]/predictions/predictions";

export default async function Home(
    {
        params,
        searchParams,
    }: {
        params: { matchId: string }
        searchParams: { [key: string]: string | string[] | undefined }
    }
): Promise<React.JSX.Element> {
    await redirectIfLoggedOut()

    const leagueId = searchParams["leagueId"]
    const leagueIdAsString: string = leagueId === undefined || Array.isArray(leagueId)
        ? "global"
        : leagueId

    return (
        <>
            <Predictions leagueId={leagueIdAsString} matchId={params.matchId}/>
        </>
    )
}