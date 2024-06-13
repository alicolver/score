'use client'

import React, {useState} from "react";
import {Match, MatchStateEnum} from "@/client";
import Crest from "@/app/components/ticket/crest";
import Styles from "@/app/styles/Input.module.scss"
import {Button} from "@nextui-org/react";
import {BUTTON_CLASS} from "@/app/util/css-classes";
import {handlePrediction} from "./submit-prediction"
import toast from "react-hot-toast";

interface EntryProps {
    match: Match
}

export default function Entry(props: EntryProps): React.JSX.Element {

    const [homeScore, setHomeScore] = useState<string | undefined>(
        props.match.prediction ? props.match.prediction.homeScore.toString() : undefined
    )
    const [awayScore, setAwayScore] = useState<string | undefined>(
        props.match.prediction ? props.match.prediction.awayScore.toString() : undefined
    )
    const [isPredictionSending, setIsPredictionSending] = useState<boolean>(false)
    const [predictionSetSuccess, setPredictionSetSuccess] = useState(false)

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
        if (homeScore === undefined || awayScore === undefined || homeScore === "" || awayScore === "") {
            toast.error("You need to enter a score for both teams")
            return
        }
        const homeScoreAsNumber = Number(homeScore)
        const awayScoreAsNumber = Number(awayScore)
        if (isNaN(homeScoreAsNumber) || isNaN(awayScoreAsNumber)) {
            toast.error("You must enter a number")
            return
        }

        setIsPredictionSending(true)
        try {
            await handlePrediction(
                homeScoreAsNumber,
                awayScoreAsNumber,
                props.match.matchId
            );
            setPredictionSetSuccess(true)
        } catch (error) {
            toast.error("Error Sending Prediction, try again")
            setPredictionSetSuccess(false)
        } finally {
            setIsPredictionSending(false);
        }
    }

    const matchState = props.match.state
    const isUpcoming = matchState === MatchStateEnum.Upcoming

    function getPredictionOrSubmitButton() {
        return !isUpcoming ? (props.match.prediction !== undefined &&
                <div className="text-center">
                    <p className="text-white text-sm">Live Score</p>
                    <p className="text-white text-sm">{props.match.homeScore}-{props.match.awayScore}</p>
                </div>
            )
            : (
                <Button
                    onClick={() => submitPrediction()} isLoading={isPredictionSending}
                    style={{height: "25px"}}
                    className={BUTTON_CLASS}
                >
                    {props.match.prediction !== undefined || predictionSetSuccess ? "Update" : "Submit"}
                </Button>
            )
    }

    return (
        <div className="flex items-center">
            <div className="flex justify-around items-center" style={{width: "33.3%", height: "80px"}}>
                <Crest country={props.match.homeTeam}/>
            </div>
            <div className="flex flex-col justify-center items-center" style={{width: "33.3%", height: "80px"}}>
                <div className="flex space-x-4 p-1 justify-around items-center">
                    <div className={Styles.inputBox}>
                        <input
                            type="text"
                            value={isUpcoming ? homeScore : props.match.prediction?.homeScore}
                            onChange={handleHomeScore}
                            maxLength={1}
                            placeholder={"_"}
                            disabled={!isUpcoming}
                        />
                    </div>
                    <div className={Styles.inputBox}>
                        <input type="text"
                               value={isUpcoming ? awayScore : props.match.prediction?.awayScore}
                               onChange={handleAwayScore}
                               maxLength={1}
                               placeholder={"_"}
                               disabled={!isUpcoming}
                        />
                    </div>
                </div>
                <div>
                    {getPredictionOrSubmitButton()}
                </div>
            </div>
            <div className="flex justify-around items-center" style={{width: "33.3%", height: "80px"}}>
                <Crest country={props.match.awayTeam}/>
            </div>
        </div>
    )
}