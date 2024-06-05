'use server'

import { getConfigWithAuthHeader } from "@/app/api/client-config"
import { CreatePrediction200Response, PredictionApi } from "@/client"

export async function handlePrediction(
    homeScore: number, 
    awayScore: number,
    matchId: string
): Promise<CreatePrediction200Response | null> {
    const predictionApi = new PredictionApi(await getConfigWithAuthHeader())
    const createPredictionRequest  = {
        homeScore: homeScore,
        awayScore: awayScore,
        matchId: matchId
    }
    console.log(createPredictionRequest)
    try {
        return predictionApi.createPrediction({
            createPredictionRequest: createPredictionRequest
        })
    } catch (error){
        console.log(error)
        return null
    } 
}