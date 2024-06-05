'use client'

import React, {useState} from "react";
import {Match, PredictionApi} from "@/client";
import Crest from "@/app/components/ticket/crest";
import Styles from "@/app/styles/Input.module.scss"
import {Button} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {getConfigWithAuthHeader} from "@/app/api/client-config";

interface EntryProps {
    match: Match
}

export default function Entry(props: EntryProps): React.JSX.Element {

    const [homeScore, setHomeScore] = useState<string>()
    const [awayScore, setAwayScore] = useState<string>()
    const [isPredictionSending, setIsPredictionSending] = useState<boolean>(false)

    function handleHomeScore(event: React.ChangeEvent<HTMLInputElement>) {
        if (/^\d*$/.test(event.target.value)) { // Only allow digits
            setHomeScore(event.target.value)
        }
    }

    function handleAwayScore(event: React.ChangeEvent<HTMLInputElement>) {
        if (/^\d*$/.test(event.target.value)) { // Only allow digits
            setAwayScore(event.target.value)
        }
    }

    async function submitPrediction(): Promise<void> {
        if (homeScore === undefined || awayScore === undefined) {
            return
        }
        setIsPredictionSending(true)
        const predictionApi = new PredictionApi(await getConfigWithAuthHeader())
        const createPredictionRequest  = {
            homeScore: Number(homeScore),
            awayScore: Number(awayScore),
            matchId: props.match.matchId
        }
        try {
            const response = predictionApi.createPrediction({
                createPredictionRequest: createPredictionRequest
            })
            return;
        } catch (error){
            console.log(error)
        } finally {
            setIsPredictionSending(false)
        }
    }

    return (
        <div className="flex items-center" style={{marginTop: "-20px"}}>
            <div className="flex justify-around items-center" style={{width: "33.3%", height: "80px"}}>
                <Crest country={props.match.homeTeam}/>
            </div>
            <div className="flex flex-col justify-center items-center" style={{width: "33.3%", height: "80px"}}>
                <div className="flex space-x-4 p-1 justify-around items-center">
                    <div className={Styles.inputBox}>
                        <input
                            type="text"
                            value={homeScore}
                            onChange={handleHomeScore}
                            maxLength={1}
                            placeholder={"_"}
                        />
                    </div>
                    <div className={Styles.inputBox}>
                        <input type="text"
                               value={awayScore}
                               onChange={handleAwayScore}
                               maxLength={1}
                               placeholder={"_"}
                        />
                    </div>
                </div>
                <div>
                    <Button onClick={submitPrediction} isLoading={isPredictionSending} style={{height: "25px"}} className={BUTTON_CLASS}>Submit</Button>
                </div>
            </div>
            <div className="flex justify-around items-center" style={{width: "33.3%", height: "80px"}}>
                <Crest country={props.match.awayTeam}/>
            </div>
        </div>
    )
}