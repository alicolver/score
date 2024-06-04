'use client'

import React, {useState} from "react";
import {Match} from "@/client";
import Crest from "@/app/components/ticket/crest";
import {getCrestUrlForCountry} from "@/app/util/flag";

interface EntryProps {
    match: Match
}

export default function Entry(props: EntryProps): React.JSX.Element {

    const [homeScore, setHomeScore] = useState<string>()
    const [awayScore, setAwayScore] = useState<string>()

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

    return (
        <div className="flex items-center">
            <div className="flex justify-between items-center mr-2" style={{width: "50%", height: "70px"}}>
                <Crest country={props.match.homeTeam}/>
                <div>
                    <input
                        type="text"
                        value={homeScore}
                        onChange={handleHomeScore}
                        className="w-12 h-12 border bg-transparent rounded text-center text-xl"
                        maxLength={1}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center ml-2" style={{width: "50%", height: "70px"}}>
                <input
                    type="text"
                    value={awayScore}
                    onChange={handleAwayScore}
                    className="w-12 h-12 border bg-transparent rounded text-center text-xl"
                    maxLength={1}
                />
                <Crest country={props.match.awayTeam}/>
            </div>
        </div>
    )
}